export interface IMainStatistics {
  id: number
  name: string
  value: number
}

export interface IMonthlySales {
  date: string
  value: number
}

export interface ILastUser {
  id: string
  name: string
  email: string
  picture: string
  total: string
}

export interface IMiddleStatistics {
  monthlySales: IMonthlySales[]
  lastUsers: ILastUser[]
}
