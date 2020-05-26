import { ResponseDataType } from '../enums';

export type CommandResponseData = string | object;

export interface CommandResponse {
  data: CommandResponseData,
  type: ResponseDataType,
  code: number
}
