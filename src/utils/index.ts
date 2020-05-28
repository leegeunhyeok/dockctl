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

export const async = (fn: Function, ...args: Array<any>): Promise<any> => {
  return new Promise((resolve) => {
    fn(...args, (...res) => {
      resolve([...res]);
    });
  });
};

export const generateAPICommand = (apiVersion, path) => {
  return {
    cmd: 'curl',
    args: [
      '--unix-socket',
      '/var/run/docker.sock',
      `http://localhost/v${apiVersion}${path}`
    ]
  };
};
