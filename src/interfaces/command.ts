import { CommandDataTypes } from '../enums';

export type CommandData = string | object;

export interface CommandResponse {
  data: CommandData,
  type: CommandDataTypes,
  code: number
}
