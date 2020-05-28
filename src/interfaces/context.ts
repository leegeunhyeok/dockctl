import { DockctlSignal, DockctlMenu } from '../enums';

export interface DockctlContext {
  __VERSION__: string,
  __SIGNAL__: DockctlSignal,
  __NEXT__: DockctlMenu
}
