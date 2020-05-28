import main from './main';
import containers from './containers';
import { DockctlMenu } from '../enums';

const commands = [
  main,
  containers
];

export default (() => {
  return commands.reduce((prev, curr) => {
    prev[DockctlMenu[curr.__MENU__]] = curr;
    return prev;
  }, {});
})();
