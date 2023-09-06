import { useEffect, useState } from "react";
import { MetricGraphData, MetricsAverages } from "../types/MetricTypes";
import { retrieveMetrics } from "../repository/MetricRepository";
import { Nullable } from "../types/Nullable";
import { MetricQueryFilter } from "../types/MetricQueryFilter";

export const useMetrics = () => {

  const [metricGraphData, setMetricGraphData] = useState(null as Nullable<MetricGraphData>);

  useEffect(() => {

    const dateNow = new Date()
    const dateBefore = new Date(dateNow.getTime() - 5 * 60 * 1000);


    updateMetric({
      metricName: 'response_time',
      from: dateBefore.toISOString(),
      to: dateNow.toISOString(),
    }
    )


  }, []);

  function updateMetric(query: MetricQueryFilter) {

    console.error(query)

    retrieveMetrics(query).then(
      metrics => {
        console.error(metrics)
        if (metrics === null) {
          setMetricGraphData(null)
          return
        }
        const metricGraphData = generateGraphData(metrics)
        console.error(metricGraphData)
        setMetricGraphData(metricGraphData)
      }
    ).catch(console.error);
  }



  return { metricGraphData, updateMetric }
}

function generateGraphData(MetricsAverages: MetricsAverages) {

  const datasets = MetricsAverages.metricValues.map((metric) => {
    return {
      label: metric.name as string,
      data: metric.values,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    };
  })

  return {
    labels: MetricsAverages.timeValues,
    datasets,
  };
}
