export enum CommandDataTypes {
  STRING,
  JSON
}

export enum DockctlSignal {
  UNKNOWN = -1,
  OK,
  ERROR,
  EXIT
}

export enum DockctlMenu {
  UNKNOWN = -1,
  MAIN,
  IMAGES,
  CONTAINERS,
  NETWORKS,
  VOLUMES
}
