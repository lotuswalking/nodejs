console.log('a 开始');
// @ts-ignore
export const done = false;
// @ts-ignore
import { done } from './b.js';
// @ts-ignore
console.log('在 a 中，b.done = %j', done);
// @ts-ignore
export const done = true;
console.log('a 结束');