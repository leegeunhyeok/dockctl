import { command } from '../core';
import { generateAPICommand } from '../utils';
import inquirer from 'inquirer';

export default (ctx, data) => {
  const {
    __MENU__,
    type,
    title,
    api,
    items
  } = data;

  if (api) {
    const { cmd, args } = generateAPICommand(ctx.__VERSION__, api.path);
    command(cmd, args).then(({ data }) => {
      // TODO
      const d = (Array.isArray(data) ? data : [data]).map(api.parser);
      console.log(d);
    });
  }

  return {
    k: __MENU__,
    prompt: inquirer.prompt([{
      name: __MENU__,
      type,
      message: title,
      choices: items.map(x => ({
        name: x.name,
        value: x.next
      }))
    }])
  };
};
