const getUserUrl = <TParams extends Record<string, any>>(
  name: string,
  params?: TParams
) => {
  const url = `https://reqres.in/api/${name}` + getParams(params);
  return `https://reqres.in/api/${name}`;
};

const getParams = <TParams extends Record<string, any>>(params?: TParams) => {
  if (!params) return "";
  let strParams = "?";
  for (const param in params) {
    strParams = strParams + param + "=" + params[param];
  }
  return strParams;
};

export default getUserUrl;
