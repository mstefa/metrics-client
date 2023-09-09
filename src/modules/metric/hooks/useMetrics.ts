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
      metricNames: ['response_time'], //TODO
      intervalUnit: 'seconds',
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
      borderColor: colors[createOneDigitHash(metric.name as string)],
      backgroundColor: colors[createOneDigitHash(metric.name as string)],
    };
  })

  return {
    labels: MetricsAverages.timeValues,
    datasets,
  };
}


const colors = [
  'rgba(255, 235, 239, 1)',
  'rgba(255, 93, 126, 1)',
  'rgba(255, 223, 205, 1)',
  'rgba(230, 246, 247, 1)',
  'rgba(156, 218, 222, 1)',
  'rgba(106, 199, 206, 1)',
  'rgba(57, 181, 190, 1)',
  'rgba(7, 162, 173, 1)',
  'rgba(6, 131, 140, 1)',
]

function createOneDigitHash(inputString: string): number {
  // Calculate the sum of character codes
  const charCodesSum = inputString.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);

  // Reduce the sum to a single digit
  const singleDigitHash = charCodesSum % 9;

  // Ensure the result is a positive single-digit number
  return singleDigitHash < 0 ? singleDigitHash + 9 : singleDigitHash;
}
