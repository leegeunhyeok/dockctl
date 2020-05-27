import { spawn } from 'child_process';
import { CommandResponse } from '../interfaces';
import { CommandDataTypes } from '../enums';

import { isJSON } from '../utils';

/**
 * @param cmd Command
 * @param args Arguments array
 * @return Command execute result
 */
export default (cmd: string, args: Array<string>): Promise<CommandResponse> => {
  return new Promise((resolve, reject) => {
    const c = spawn(cmd, args);
    const res = { out: '', err: '', code: -1 };

    c.stdout.on('data', data => {
      res.out += data.toString();
    });
  
    c.stderr.on('data', data => {
      res.err += data.toString();
    });
  
    c.on('exit', code => {
      res.code = code;
      (code !== 0 ? reject : resolve)(res);
    });
  }).then(({ out, code }) => {
    const data = isJSON(out);
    return data ? {
      data,
      type: CommandDataTypes.JSON,
      code
    } : {
      data: out,
      type: CommandDataTypes.STRING,
      code
    };
  }).catch(({ err, code }) => {
    return {
      data: err,
      type: CommandDataTypes.STRING,
      code
    };
  });
};
