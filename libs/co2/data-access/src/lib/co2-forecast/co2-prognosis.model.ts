export type DKRegion = 'DK1' | 'DK2';

export interface CO2EmissionPrognosis {
  readonly co2Emission: number;
  readonly minutes5UTC: Date;
  readonly priceArea: DKRegion;
}

export interface CO2EmisResponse {
  total: number;
  sort: string;
  limit: number;
  dataset: string;
  records: ReadonlyArray<CO2EmisProgModel> | null;
}

interface CO2EmisProgModel {
  Minutes5UTC: Date;
  Minutes5DK: Date;
  PriceArea: DKRegion;
  CO2Emission: number;
}
