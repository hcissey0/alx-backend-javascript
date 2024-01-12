import cleanSet from './8-clean_set.js';

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', ,'bonappetit', 'banana']), ''));
const set = new Set(['id-test', 'id-chicken', 'id-user', 'id-id-']);
console.log(cleanSet(set, 'id-'));
