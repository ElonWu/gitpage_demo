const path = require("path");
/** html 解析 */
const HtmlWebPackPlugin = require("html-webpack-plugin");
/** 移动文件到目标文件夹 */
const CopyPlugin = require("copy-webpack-plugin");

/** 生成 CNAME 信息 */
// const CnameWebpackPlugin = require("cname-webpack-plugin");

/** 生成 manifest 信息 */
// const ManifestPlugin = require("webpack-manifest-plugin");

/** css 解析 */
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const AutoPrefixer = require("autoprefixer");

// css 压缩
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/** 打包分析 */
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

// 根据当前路径返回融合路径
function srcPath(subDirs) {
  return path.resolve(__dirname, ...subDirs);
}

const PUBLIC_URL = srcPath(["build"]);

// const scssRules = {
//   use: ["style-loader", "css-loader", "sass-loader"]
// };

// env 可以通过命令行，如： --env.NODE_ENV=production 的方式设置
// args 是命令行中 --mode --hot 等值的汇总
module.exports = (env, args) => {
  const DEV = args !== "production";

  return {
    // context: srcPath(["src"]),
    entry: "./src/app.tsx",
    output: {
      filename: "[name].[hash].js",
      chunkFilename: "[name].chunkhash.js",
      path: PUBLIC_URL
    },
    // 打包时使用分离部分依赖包， 通过 cdn 访问
    externals: {
      // react: "React",
      // "react-dom": "ReactDOM",
      // "react-router-dom": "Router",
      antd: "antd",
      echarts: "echarts",
      lodash: "lodash"
    },

    // 代码分割
    optimization: {
      splitChunks: {
        chunks: "all",
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];

              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace("@", "")}`;
            },
            chunks: "all",
            enforce: true
          }
        }
      },
      runtimeChunk: true
    },

    devtool: DEV ? "inline-source-map" : "",
    devServer: {
      host: "localhost",
      port: "9090",
      inline: true,
      contentBase: "./build",
      watchContentBase: true,
      hot: true,
      open: "chrome",
      openPage: ""
      // proxy: {},
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "babel-loader"
        },
        {
          test: /\.js$/,
          use: ["source-map-loader"],
          enforce: "pre"
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.scss$/,
          use: [
            DEV ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.less$/,
          exclude: /node_modules/,
          use: [
            DEV ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "less-loader"
          ]
        },
        {
          test: /\.(jpg|png|woff|woff2|eot|ttf|svg|ico)$/,
          loader: "file-loader"
        }
      ]
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        components: srcPath(["src", "components"]),
        views: srcPath(["src", "views"]),
        styles: srcPath(["src", "styles"]),
        routes: srcPath(["src", "routes"]),
        api: srcPath(["src", "api"]),
        models: srcPath(["src", "models"]),
        assets: srcPath(["src", "assets"]),
        utils: srcPath(["src", "utils"]),
        // 解决无法按需加载图标的临时方案
        "@ant-design/icons/lib/dist$": path.resolve(
          __dirname,
          "./src/components/Icons.js"
        )
      }
    },
    plugins: [
      new HtmlWebPackPlugin({
        hash: true,
        template: path.resolve(__dirname, "public", "index.html"),
        filename: "index.html"
        // PUBLIC_URL
      }),

      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),

      // new ManifestPlugin(),
      new CopyPlugin([
        {
          from: srcPath(["public", "favicon.ico"]),
          to: PUBLIC_URL
        },
        {
          from: srcPath(["public", "manifest.json"]),
          to: PUBLIC_URL
        },
        {
          from: srcPath(["public", "CNAME"]),
          to: PUBLIC_URL
        }
      ]),

      new BundleAnalyzerPlugin()
    ]
  };
};
