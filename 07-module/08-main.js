#!/usr/bin/env node

const circle = require('circle'),
      log    = console.log;

log('area:          \t', circle.area(20));
log('diameter:      \t', circle.diameter(20));
log('circumference: \t', circle.circumference(20));
