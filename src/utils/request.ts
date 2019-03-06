import axios, { AxiosPromise } from "axios";

// 创建实例； 设置默认配置
const rickMortyApi = axios.create({
  baseURL: "https://rickandmortyapi.com/api/"
});
rickMortyApi.defaults.timeout = 2500;
rickMortyApi.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded; charset=UTF-8";

// 全局的 renposne、error 预处理；
rickMortyApi.interceptors.request.use(
  config => {
    // loading
    console.log("request loading", config);
    return config;
  },
  error => {
    console.log("requeset error", error);
    return Promise.reject(error);
  }
);

rickMortyApi.interceptors.response.use(
  response => {
    console.log("response success", response);

    return handleData(response);
  },
  error => {
    console.log("response error", error);
    return Promise.reject(error);
  }
);

function handleData(response: any) {
  const { data, status } = response;
  switch (status) {
    case 200:
      return data;

    case 400:
      console.log(`400 错误`);
      return null;
  }
}

export default {
  post(url: string, data: any = {}) {
    return rickMortyApi({
      method: "post",
      url,
      data
      //   timeout: 10000,
      //   headers: {
      //     "X-Requested-With": "XMLHttpRequest",
      //     "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      //   }
    });
  },
  get(url: string, params: any = {}) {
    return rickMortyApi({
      method: "get",
      url,
      params
      //   timeout: 10000,
      //   headers: {
      //     "X-Requested-With": "XMLHttpRequest"
      //   }
    });
  }
};
