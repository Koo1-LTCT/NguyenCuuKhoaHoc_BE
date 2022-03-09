import http from 'http';
import debug from 'debug';
import chalk from 'chalk';
import app from './app';
import { Config } from './configs/config';
import database from './database/database';

const normalizePort = (val: string): any => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
};

const onError = (error: any) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr?.port;
  debug('Listening on ' + bind);
};

const port = normalizePort(process.env.PORT || '3001');
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

database
  .connectMysql()
  .then(() => {
    console.log(chalk.yellow('.......................................'));
    console.log(chalk.green(`${Config.APP_NAME}`));
    console.log(chalk.green(`Port:\t\t\t${port}`));
    console.log(chalk.green('Database is connected'));
    console.log(chalk.yellow('.......................................'));
  })
  .catch((error) => {
    console.error(error);
  });
