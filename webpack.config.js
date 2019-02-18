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

// 根据当前路径返回融合路径
function srcPath(subDirs) {
  return path.resolve(__dirname, ...subDirs);
}

const PUBLIC_URL = srcPath(["build"]);

// const scssRules = {
//   use: ["style-loader", "css-loader", "sass-loader"]
// };

module.exports = {
  // context: srcPath(["src"]),
  entry: "./src/app.tsx",
  output: {
    filename: "[name].[hash].js",
    path: PUBLIC_URL
  },
  devtool: "inline-source-map",
  devServer: {
    // host: "localhost:3200",
    inline: false,
    contentBase: "./build"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader?cacheDirectory"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      // {
      //   test: /\.scss$/,
      //   use: ExtractTextPlugin.extract(scssRules)
      // },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|ico)$/,
        loader: "url-loader?limit=100000"
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
      models: srcPath(["src", "models"])
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      template: "public/index.html",
      filename: "index.html",
      PUBLIC_URL
    }),
    // new ExtractTextPlugin(),

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
    ])
  ]
};