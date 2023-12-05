export interface IDeleteFarmer {
  delete(document: string): Promise<boolean>
}
