import { useState } from "react";
import axios from "axios";

export const METHODS = {
  POST: "post",
  GET: "get",
  PUT: "put",
  DELETE: "delete",
};
export default function useAxios(initialData) {
  const baseURL = "https://6647084651e227f23ab0c91f.mockapi.io/api/";

  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const instance = axios.create({
    baseURL,
    timeout: 5000,
  });

  const sendRequest = ({
    url,
    method,
    data = null,
    callbackSuccess = null,
    callbackError = null,
  }) => {
    setLoading(true);
    console.log(
      "sendRequest starts: ",
      "url: ",
      url,
      "method:  ",
      method,
      "data: ",
      data,
      "sendRequest: ",
      loading
    );
    instance[method](url, data === null ? null : data)
      .then(function (response) {
        setData(response.data);
        setLoading(false);
        setError(null);
        callbackSuccess && callbackSuccess();
        console.log("sendRequest response: ", response, "loadding: ", loading);
      })
      .catch(function (error) {
        console.log("sendRequest error: ", error);
        callbackError && callbackError();
        setError(error.message);
        setLoading(false);
      });
  };

  return { data, sendRequest, setData, error, loading, METHODS };
}
