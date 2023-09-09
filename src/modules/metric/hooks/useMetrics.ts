import { useEffect, useState } from "react";
import { retrieveMetrics } from "../repository/MetricRepository";
import { Nullable } from "../types/Nullable";
import { MetricQueryFilter } from "../types/MetricQueryFilter";
import { colorPicker } from "../../shared/utilities/colorPicker";
import { metricNames } from "../types/MetricNamesEnum";
import { intervalUnits } from "../types/IntervalUnitEnum";
import { MetricGraphData } from "../types/MetricGraphData";
import { MetricsAverages } from "../types/MetricAverages";

function generateGraphData(MetricsAverages: MetricsAverages) {

  const datasets = MetricsAverages.metricValues.map((metric) => {
    return {
      label: metric.name as string,
      data: metric.values,
      borderColor: colorPicker(metric.name as string),
      backgroundColor: colorPicker(metric.name as string),
    };
  })

  return {
    labels: MetricsAverages.timeValues,
    datasets,
  };
}

export const useMetrics = () => {

  const [metricGraphData, setMetricGraphData] = useState(null as Nullable<MetricGraphData>);

  useEffect(() => {

    const dateNow = new Date()
    const dateBefore = new Date(dateNow.getTime() - 10 * 60 * 60 * 1000);


    updateMetric({
      metricNames: metricNames.map(e => e.id),
      intervalUnit: intervalUnits[2].id,
      from: dateBefore.toISOString(),
      to: dateNow.toISOString(),
    }
    )


  }, []);

  function updateMetric(query: MetricQueryFilter): void {

    retrieveMetrics(query).then(
      metrics => {
        if (metrics === null) {
          setMetricGraphData(null)
          return
        }
        const metricGraphData = generateGraphData(metrics)
        setMetricGraphData(metricGraphData)
      }
    ).catch(console.error);
  }



  return { metricGraphData, updateMetric }
}



