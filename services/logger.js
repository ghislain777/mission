const winston = require('winston');
const { splat, combine, timestamp, printf } = winston.format;
const DailyRotateFile = require("winston-daily-rotate-file")
const { createLogger, format, transports } = require('winston');
const rotateTransport = new winston.transports.DailyRotateFile({
    filename: `logs/%DATE%.log`,
    datePattern: 'DD-MM-YYYY',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
  });
  const myFormat = printf(({ timestamp, level, message, meta }) => {
    return `[${level}][${timestamp}]::${message}::${meta? JSON.stringify(meta) : ''}`;
  });

const logger = createLogger({
    format: format.combine(
        format.timestamp({ format: 'HH:mm:ss'}),
        splat(),
        myFormat
    ),
    transports: [
        rotateTransport,
        //new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        //new winston.transports.File({ filename: 'logs/info.log', level: 'info' }),
        new transports.Console(),

    ]
});
module.exports = logger