const morgan = require('morgan');
const log = require('fancy-log');

const logger = () => {
  const logger = morgan(function (tokens, req, res) {
    return log([
      '[HTTP]',
      tokens.method(req, res),
      tokens.url(req, res),
      'from',
      tokens['remote-addr'](req, res),
      tokens.status(req, res),
      'in',
      tokens['response-time'](req, res),
      'ms',
    ].join(' '));
  });

  return logger;
};

module.exports = logger;