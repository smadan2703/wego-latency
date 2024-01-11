import http from 'k6/http';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import {sleep} from 'k6';

export const options = {
  // Key configurations for avg load test in this section
  stages: [
    { duration: '1m', target: 100 }, // traffic ramp-up from 1 to 100 users over 5 minutes.
  ],
};

export default () => {
  const urlRes = http.get('https://east1-latency.wego.com/todos');
  sleep(1);
};
