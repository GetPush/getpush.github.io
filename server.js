const express = require('express');
const path = require('path');
const fs = require('fs');
const os = require('os');
const mimetypes = require('mime-types');
const AdmZip = require('adm-zip');

const app = express();
const port = process.env.PORT || 8080;
let httpServer = null;

app.access_history = [];

function findAvailablePort() {
  const server = require('net').createServer();
  return new Promise((resolve, reject) => {
    server.on('error', reject);
    server.listen(0, () => {
      const port = server.address().port;
      server.close(() => {
        resolve(port);
      });
    });
  });
}

function getRealPath(filePath) {
  return path.join(process.cwd(), filePath);
}

function isFileInZip(zipFile, filePath) {
  const zip = new AdmZip(zipFile);
  const zipEntries = zip.getEntries();
  return zipEntries.some((entry) => entry.entryName === filePath);
}

function isFileOutsideZip(filePath) {
  return !fs.existsSync(filePath) || !fs.statSync(filePath).isFile();
}

function isDirectoryOutsideZip(filePath) {
  return !fs.existsSync(filePath) || !fs.statSync(filePath).isDirectory();
}

function sendFileFromZip(zipFile, filePath) {
  const password = Buffer.from('langsungimport');

  try {
    const zip = new AdmZip(zipFile);
    const fileData = zip.readFile(filePath, password);
    return fileData;
  } catch (error) {
    return `File '${filePath}' not found in the zip.`;
  }
}

function sendFileFromDisk(filePath) {
  try {
    const fileData = fs.readFileSync(filePath);
    return fileData;
  } catch (error) {
    return `File '${filePath}' not found.`;
  }
}

function getFileMimeType(filePath) {
  const mimeType = mimetypes.lookup(filePath);
  return mimeType;
}

app.get('/', (req, res) => {
  const clientIpAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(`Client IP address: ${clientIpAddress}`);

  const fileData = sendFileFromZip('botstart.zip', 'page/home.html');
  if (fileData instanceof Buffer && fileData.slice(0, 2).toString() === 'PK') {
    return res.send('File not found.');
  }

  const mimeType = getFileMimeType('page/home.html');
  res.set('Content-Type', mimeType);
  res.send(fileData);
});

app.get('/access-history', (req, res) => {
  res.json(app.access_history);
});

app.get('/:path(*)', (req, res) => {
  const filePath = req.params.path;

  if (isFileInZip('botstart.zip', filePath)) {
    const fileData = sendFileFromZip('botstart.zip', filePath);
    if (fileData instanceof Buffer && fileData.slice(0, 2).toString() === 'PK') {
      return res.send('File not found.');
    }
  } else if (isFileOutsideZip(filePath) || isDirectoryOutsideZip(filePath)) {
    const fileData = sendFileFromDisk(getRealPath(filePath));
  } else {
    return res.send('File not found.');
  }

  const mimeType = getFileMimeType(filePath);
  res.set('Content-Type', mimeType);
  res.send(fileData);
});

function stopServer() {
  if (httpServer !== null) {
    httpServer.close(() => {
      console.log('Server stopped');
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
}

process.on('SIGINT', stopServer);
process.on('SIGTERM', stopServer);
