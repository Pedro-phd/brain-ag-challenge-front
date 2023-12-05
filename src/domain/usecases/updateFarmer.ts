import { IFarmer } from '../models/farmer'

export interface IUpdateFarmer {
  update(document: string, data: IFarmer): Promise<boolean>
}
