import { URLSearchParams } from "url";

/**
 * @description 获取当前 url 的全部query
 * @param location 传入当前页面的 props.location
 */
export const querySearch = (location?: string) => {
  const searchParams: URLSearchParams = new URLSearchParams(
    location || window.location.search
  );
  let result: any = {};

  //   for (let key of searchParams.keys()) {
  //     console.log(key);
  //     result[key] = searchParams.get(key);
  //   }

  //   return result;
};
