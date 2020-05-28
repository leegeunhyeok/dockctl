import { prompt } from '../core';
import { DockctlSignal } from '../enums';
import commands from '../commands';

export default function* (ctx) {
  while (true) {
    yield prompt(ctx, commands[ctx.__NEXT__]);
    if (ctx.__SIGNAL__ === DockctlSignal.EXIT) {
      return;
    }
  }
}
