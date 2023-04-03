const getObjVal = (obj: Object & { [key: string]: any }, key: string) => {
  return obj![key];
};

export default getObjVal;
