//This file sint transpiled, so must use CommonJS and ES5

// Regster babel to transpi9le before our test run.
require('@babel/register')();

// Disable webpack features that Mocha doesnt understand.
require.extentions['.css'] = function() {};
