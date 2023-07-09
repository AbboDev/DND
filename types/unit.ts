export enum DistanceUnit {
  CELL = "cell",
  FEET = "ft",
  METER = "m",
}

export enum DistanceUnitRatio {
  CELL_FEET = 5,
  FEET_CELL = DistanceUnitRatio.CELL_FEET,
  CELL_METER = 1.5,
  METER_CELL = DistanceUnitRatio.CELL_METER,
  METER_FEET = 3.33,
  FEET_METER = DistanceUnitRatio.METER_FEET,
}
