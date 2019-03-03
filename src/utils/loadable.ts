import Loadable from "react-loadable";
import { Loading } from "components/Loading/Loading";

export const loaderWrapper = loader =>
  Loadable({
    loading: Loading,
    loader
  });
