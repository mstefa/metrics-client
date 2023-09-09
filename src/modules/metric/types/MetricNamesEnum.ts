import { mapEnumToOptions } from "../../shared/utilities/mapEnumToOptions";

export enum MetricNameEnum {
  RESPONSE_TIME = 'response_time',
  CPU_USAGE = 'cpu_usage',
  MEMORY_USAGE = 'memory_usage',
}

export const metricNames = mapEnumToOptions(MetricNameEnum);
