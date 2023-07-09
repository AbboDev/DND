import { useLocalStorage, RemovableRef } from "@vueuse/core";
import { DistanceUnit, DistanceUnitRatio } from "~/types/unit";

export interface EnvironmentStore {
  unit: RemovableRef<DistanceUnit>;
  parseDistanceUnit(
    value: number,
    fromUnit: DistanceUnit,
    toUnit?: DistanceUnit
  ): number;
}

export const useEnvironmentStore = defineStore<"environment", EnvironmentStore>(
  "environment",
  () => {
    const currentUnit = useLocalStorage<DistanceUnit>(
      "unit",
      DistanceUnit.METER
    );

    const parseDistanceUnit = (
      value: number,
      fromUnit: DistanceUnit,
      toUnit?: DistanceUnit
    ): number => {
      if (!toUnit) {
        toUnit = currentUnit.value;
      }

      if (fromUnit === toUnit) {
        return value;
      }

      if (fromUnit === DistanceUnit.CELL && toUnit === DistanceUnit.FEET) {
        value *= DistanceUnitRatio.CELL_FEET;
      } else if (
        fromUnit === DistanceUnit.FEET &&
        toUnit === DistanceUnit.CELL
      ) {
        value /= DistanceUnitRatio.CELL_FEET;
      } else if (
        fromUnit === DistanceUnit.CELL &&
        toUnit === DistanceUnit.METER
      ) {
        value *= DistanceUnitRatio.CELL_METER;
      } else if (
        fromUnit === DistanceUnit.METER &&
        toUnit === DistanceUnit.CELL
      ) {
        value /= DistanceUnitRatio.CELL_METER;
      } else if (
        fromUnit === DistanceUnit.METER &&
        toUnit === DistanceUnit.FEET
      ) {
        value *= DistanceUnitRatio.FEET_METER;
      } else if (
        fromUnit === DistanceUnit.FEET &&
        toUnit === DistanceUnit.METER
      ) {
        value /= DistanceUnitRatio.FEET_METER;
      }

      return value;
    };

    return {
      unit: skipHydrate(currentUnit),
      parseDistanceUnit,
    };
  }
);

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useEnvironmentStore, import.meta.hot));
}
