/** Copyright (c) 2020 - Present, Wissen Technology**/
const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
module.exports = require(`../configuration/env/${env}.js`); 