import http from 'k6/http';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { sleep } from 'k6';

const base_urls = [
  'https://southeast1-latency.wego.com/todos',
  'https://east1-latency.wego.com/todos',
  'https://east2-latency.wego.com/todos',
];

export const options = {
  // Key configurations for avg load test in this section
  stages: [
    { duration: '1m', target: 100 }, // traffic ramp-up from 1 to 100 users over 1 minute.
  ],
};

export default () => {
  // Iterate over each URL
  for (let i = 0; i < base_urls.length; i++) {
    const urlRes = http.get(base_urls[i]);
    sleep(1);
  }
};

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
