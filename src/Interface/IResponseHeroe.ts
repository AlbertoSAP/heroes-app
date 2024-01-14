import { Heroe, Heroes } from "./IHeroe"

export interface IResponseHeroe {
    data: Data
    status: number
    statusText: string
    headers: Headers
    config: Config
    request: Request
  }

  export interface Data {
    response: string
    "results-for": string
    results: Heroes
  }

  export interface Config {
  }

  export interface IResponseOneHeroe {
    data: Heroe
    status: number
    statusText: string
    headers: Headers
    config: Config
    request: Request
  }