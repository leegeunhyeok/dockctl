import { readdir } from 'fs';
import { DockctlMenu } from '../enums';
const data = {};

export const init = () => {
  return new Promise((resolve) => {
    readdir(__dirname, (err, files) => {
      if (err) {
        resolve(false);
      }

      files
        .filter(x => ~x.indexOf('.json'))
        .forEach(x => {
          const jsonData = require(x);
          data[DockctlMenu[jsonData.__MENU__]] = jsonData;
        });

      resolve(true);
    });
  });
};

export default data;
