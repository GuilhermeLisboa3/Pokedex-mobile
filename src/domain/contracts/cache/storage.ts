export interface SetStorage {
  set: (input: SetStorage.Input) => Promise<void>
}

export namespace SetStorage {
  export type Input = { key: string, value: object }
}
