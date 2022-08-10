export type DKRegion = 'DK1' | 'DK2';

export interface CO2EmissionPrognosis {
  readonly co2Emission: number;
  readonly minutes5UTC: Date;
  readonly priceArea: DKRegion;
}
