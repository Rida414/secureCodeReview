const path = require('path');
const baseurl = path.resolve(__dirname, '../');



//#region utils
const utilurl = path.resolve(baseurl + `/util`);

exports.utillityManager = path.resolve(utilurl + `/utilityMethods`)
exports.dbHelper = path.resolve(utilurl + `/db_helper`)
exports.httpHelper = path.resolve(utilurl + `/http_helper`)
exports.responseObj = path.resolve(baseurl + '/routes/constant/response_obj');
exports.Security = path.resolve(utilurl + `/Security`);
exports.loggerLocation =  path.resolve(utilurl + `/logger.js`);
exports.appVersion = path.resolve(baseurl + '/routes/apis/app_version');

exports.request = require("request");
exports.nodemailer = require("nodemailer");
exports.path = require('path');
exports.fs = require('fs');
exports.jwt = require("jsonwebtoken");
exports.otpGenerator = require('otp-generator');
exports.uuidv4 = require('uuid');
exports.dateformat = require("dateformat");
exports.cron = require("node-cron");
exports.moment = require('moment');
exports._lodash = require('lodash');
exports.crypto = require('crypto');
exports.activeDirectory = require('activedirectory2');
