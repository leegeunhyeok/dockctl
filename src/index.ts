import init from './init';
import { co } from './core';
import { DockctlContext } from './interfaces';
import { DockctlSignal, DockctlMenu } from './enums';

(async () => {
  const apiVersion = await init();
  const ctx: DockctlContext = {
    __VERSION__: apiVersion,
    __SIGNAL__: DockctlSignal.OK,
    __NEXT__: DockctlMenu.MAIN
  };
  const loop = co(ctx);
  let res = null;

  while (!(res = loop.next()).done) {
    const { k, prompt } = res.value;
    ctx.__NEXT__ = (await prompt)[k];

    if (ctx.__NEXT__ === DockctlMenu.EXIT) {
      ctx.__SIGNAL__ = DockctlSignal.EXIT;
    }
  }
})();
