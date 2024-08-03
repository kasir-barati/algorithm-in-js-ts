// math.js
function privateFunc() {
  /* not available outside */
}
export default function add(x, y) {
  return x + y;
}
export function multiply(...args) {
  return args.reduce((acc, cur) => cur * acc);
}
// index.js
import add, { multiply } from './math.js';
add(7, 8);
multiply(8, 9);
