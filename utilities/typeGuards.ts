import { DataListRecord } from "~/types/datalist";

export function isIterable(input: any) {
  if (input === null || input === undefined) {
    return false;
  }

  return typeof input[Symbol.iterator] === "function";
}

export function instanceOfDataListRecord(
  object: any
): object is DataListRecord {
  return "value" in object;
}
