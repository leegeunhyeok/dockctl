export const isJSON = (data: string): boolean | object => {
  if (typeof data === 'object') {
    return true;
  }

  try {
    return JSON.parse(data);
  } catch {
    return false;
  }
};
