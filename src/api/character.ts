import http from "utils/request";
import { CHARACTERFILTER } from "models/character";
import { setSession, getSession } from "utils/session";

const BRANCH = "character";

const getAll = (filter: CHARACTERFILTER = {} as CHARACTERFILTER) => {
  return http.get(`${BRANCH}`, filter);
};

const getMult = (
  idArr: Array<number> = [],
  filter: CHARACTERFILTER = {} as CHARACTERFILTER
) => {
  return http.get(`${BRANCH}/${idArr.toString()}`, filter);
};

const getOne = async (
  id: number,
  filter: CHARACTERFILTER = {} as CHARACTERFILTER
) => {
  let session = getSession(`character-${id}`);
  if (session) {
    return session;
  }

  try {
    const result: any = await http.get(`${BRANCH}/${id}`, filter);
    setSession(`character-${id}`, result);
    return result;
  } catch (err) {
    return Promise.reject("请求失败");
  }
};

export default {
  getAll,
  getMult,
  getOne
};
