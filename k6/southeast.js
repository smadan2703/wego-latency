import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
  // Key configurations for avg load test in this section
  stages: [
    { duration: '1m', target: 100 }, // traffic ramp-up from 1 to 100 users over 5 minutes.
  ],
};

export default () => {
  const urlRes = http.get('https://southeast1-latency.wego.com/todos');
  sleep(1);
};

