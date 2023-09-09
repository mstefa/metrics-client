import { useState } from "react";
import { metricNames } from "../types/MetricNamesEnum";
import { intervalUnits } from "../types/IntervalUnitEnum";


export const useQueryMetricFilter = () => {

  const dateNow = new Date()
  const dateBefore = new Date(dateNow.getTime() - 15 * 60 * 60 * 1000);

  const [inputs, setInput] = useState({
    name: metricNames.map(e => e.id),
    intervalUnit: intervalUnits[2].id,
    selectedFromDate: dateBefore,
    selectedToDate: dateNow,
  });

  return { inputs, setInput, metricNames, intervalUnits }
}
