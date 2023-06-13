export interface SetStorage {
  set: (input: SetStorage.Input) => Promise<void>
}

export namespace SetStorage {
  export type Input = { key: string, value: object }
}

export interface GetStorage {
  get: (input: GetStorage.Input) => Promise<any>
}

export namespace GetStorage {
  export type Input = { key: string }
}
