import { DockctlSignal } from '../enums';


export default function* () {
  while (true) {
    const ctx = yield 'sample';
    if (ctx.__SIGNAL__ === DockctlSignal.EXIT) {
      return;
    }
  }
}
