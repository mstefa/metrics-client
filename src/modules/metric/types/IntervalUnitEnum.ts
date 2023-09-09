import { mapEnumToOptions } from "../../shared/utilities/mapEnumToOptions";

export enum IntervalUnitEnum {
  SECOND = 'second',
  MINUTE = 'minute',
  HOUR = 'hour',
  DAY = 'day',
}

export const intervalUnits = mapEnumToOptions(IntervalUnitEnum);
