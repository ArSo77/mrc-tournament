export interface PartType {
  QUA: "qua"
  CUP: "cup"
}


export interface Part {
  id: string
  raceId: string
  userId: string
  type: PartType
  results: number[]
}







