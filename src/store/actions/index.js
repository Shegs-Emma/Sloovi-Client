import { setError, stopLoad } from "../slices/appSlice";

export const handleError = (err, dispatch) => {
  if (!err.response && !err.data) {
    dispatch(
      setError("There seems to be an issue currently, please try again")
    );
  } else if (!err.response) dispatch(setError(err.data.message));
  else {
    let msg =
      err.response.data.customMessage ||
      err.response.data.message ||
      err.response.data;
    if (typeof msg === "object")
      msg = msg.reduce((aggr, errObj) => aggr + errObj.msg + ",", "");
    dispatch(setError(msg));
    dispatch(stopLoad());
  }
  throw err;
};
