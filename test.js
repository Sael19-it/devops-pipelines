const assert = require('assert');

console.log('Starting tests...');

// Ejemplo de test real
assert.strictEqual(1 + 1, 2, 'La suma debe ser 2');
assert.strictEqual('hola'.toUpperCase(), 'HOLA', 'toUpperCase debe funcionar');

console.log('All tests passed!');

