const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.set('trust proxy', true);

  server.use('/page', express.static(path.join(__dirname, 'page')));

  // Menyimpan log ke file log.txt
  server.use((req, res, next) => {
    const { method, originalUrl, headers } = req;
    const clientIpAddress =
      req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const userAgent = headers['user-agent'];
    const timestamp = new Date().toLocaleString();
    const accessLog = `${timestamp} - ${method} ${originalUrl} (${clientIpAddress}) - User Agent: ${userAgent}`;
    accessHistory.push(accessLog);
    console.log(accessLog);

    fs.appendFile('log.txt', accessLog + '\n', (err) => {
      if (err) {
        console.error('Gagal menyimpan log:', err);
      }
    });

    next();
  });

  server.get('/', (req, res) => {
    const clientIpAddress =
      req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`Client IP address: ${clientIpAddress}`);

    return app.render(req, res, '/', req.query);
  });

  server.get('/access-history', (req, res) => {
    return res.json(accessHistory);
  });

  server.use(express.static(path.join(__dirname, 'public')));

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
