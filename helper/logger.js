const winston = require('winston');

const customFormat = winston.format.combine(winston.format.timestamp(), winston.format.printf( info => {
    return `${info.timestamp} - [${info.level.toUpperCase().padEnd(7)}] - ${(typeof info.message === 'object' ? JSON.stringify(info.message) : info.message)}`
}));

const logger = winston.createLogger({
    format: customFormat,
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.Console({ level: 'silly' }),
        new winston.transports.File({ filename: './logger/error.log', level: 'error' }),
        new winston.transports.File({ filename: './logger/fromInfo.log', level: 'info' }),
    ],
});

module.exports = logger;