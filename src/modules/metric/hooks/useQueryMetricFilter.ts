import { useEffect, useState } from "react";
import { MetricGraphData, MetricNameEnum, MetricsAverages, IntervalUnitEnum } from "../types/MetricTypes";
import { retrieveMetrics } from "../repository/MetricRepository";
import { Nullable } from "../types/Nullable";
import { MetricQueryFilter } from "../types/MetricQueryFilter";

function mapEnumToOptions<T extends Record<string, string>>(
  enumObject: T
): { id: string; name: string }[] {
  return Object.keys(enumObject).map((key) => ({
    id: enumObject[key],
    name: key,
  }));
}


export const useQueryMetricFilter = () => {

  const metricNames = mapEnumToOptions(MetricNameEnum);
  const timeUnits = mapEnumToOptions(IntervalUnitEnum);

  const [inputs, setInput] = useState({
    name: metricNames.map(e => e.id),
    intervalUnit: metricNames[0].id,
    selectedFromDate: new Date(),
    selectedToDate: new Date(),
  });

  return { inputs, setInput, metricNames, timeUnits }
}
