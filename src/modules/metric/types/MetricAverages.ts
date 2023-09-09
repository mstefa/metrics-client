import { IntervalUnitEnum } from "./IntervalUnitEnum";
import { MetricNameEnum } from "./MetricNamesEnum";

type MetricsAveragesValues = {
  name: MetricNameEnum;
  values: number[];
}

export type MetricsAverages = {
  intervalUnit: IntervalUnitEnum;
  timeValues: string[];
  metricValues: MetricsAveragesValues[];

};
