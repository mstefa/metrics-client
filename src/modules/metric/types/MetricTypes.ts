export enum IntervalUnitEnum {
  SECOND = 'second',
  MINUTE = 'minute',
  HOUR = 'hour',
  DAY = 'day',
}

export enum MetricNameEnum {
  RESPONSE_TIME = 'response_time',
  CPU_USAGE = 'cpu_usage',
  MEMORY_USAGE = 'memory_usage',
}


export type Metric = {
  timestamp: string;
  name: string;
  value: number;
};

type MetricsAveragesValues = {
  name: MetricNameEnum;
  values: number[];
}

export type MetricsAverages = {
  intervalUnit: IntervalUnitEnum;
  timeValues: string[];
  metricValues: MetricsAveragesValues[];

};


export type MetricGraphData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}
