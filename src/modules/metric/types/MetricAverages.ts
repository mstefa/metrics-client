import { IntervalUnitEnum } from "./IntervalUnitEnum";
import { MetricNameEnum } from "./MetricNamesEnum";

interface MetricsAveragesValues {
  name: MetricNameEnum;
  values: number[];
}

export interface MetricsAverages {
  intervalUnit: IntervalUnitEnum;
  timeValues: string[];
  metricValues: MetricsAveragesValues[];

};
