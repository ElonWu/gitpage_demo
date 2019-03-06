export const getSession = (key: string) => {
  const result = sessionStorage.getItem(key);
  if (result === null) {
    return undefined;
  }
  return JSON.parse(result);
};

export const setSession = (key: string, value: any) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};
