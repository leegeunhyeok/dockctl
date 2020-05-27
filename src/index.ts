import init from './init';
import { co } from './core';
import { DockctlSignal, DockctlMenu } from './enums';

(async () => {
  const apiVersion = await init();
  const loop = co();
  const ctx = {
    __VERSION__: apiVersion,
    __SIGNAL__: DockctlSignal.OK,
    __NEXT__: DockctlMenu.MAIN
  };
  let res = null;

  while (!(res = loop.next(ctx)).done) {
    console.log(res);
    ctx.__SIGNAL__ = DockctlSignal.EXIT;
  }
})();
