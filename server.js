function checkModules() { 
   const requiredModules = ['express', 'path', 'os', 'ip', 'child_process', 'fs', 'cron', 'net']; 
  
   requiredModules.forEach((moduleName) => { 
     try { 
       require.resolve(moduleName); 
       console.log(`Modul ${moduleName} sudah terpasang.`); 
     } catch (error) { 
       console.log(`Modul ${moduleName} tidak ditemukan. Menginstal modul...`); 
  
       const installCommand = `npm install ${moduleName} --no-bin-links`; 
  
       exec(installCommand, (error, stdout, stderr) => { 
         if (error) { 
           console.error(`Gagal menginstal modul ${moduleName}: ${error}`); 
           return; 
         } 
  
         console.log(`Modul ${moduleName} berhasil diinstal.`); 
       }); 
     } 
   }); 
 } 
  
 const express = require('express'); 
 const path = require('path'); 
 const os = require('os'); 
 const ip = require('ip'); 
 const { exec } = require('child_process'); 
 const fs = require('fs'); 
 const cron = require('node-cron'); 
 const net = require('net'); 
  
 const app = express(); 
 const port = 3000; 
  
 app.set('trust proxy', true); 
  
 app.use('/page', express.static(path.join(__dirname, 'page'))); 
  
 const accessHistory = []; 
  
 app.use((req, res, next) => { 
   const { method, originalUrl, headers } = req; 
   const clientIpAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress; 
   const userAgent = headers['user-agent']; 
   const timestamp = new Date().toLocaleString(); 
   const accessLog = `${timestamp} - ${method} ${originalUrl} (${clientIpAddress}) - User Agent: ${userAgent}`; 
   accessHistory.push(accessLog); 
   console.log(accessLog); 
  
   // Menyimpan log ke file log.txt 
   fs.appendFile('log.txt', accessLog + '\n', (err) => { 
     if (err) { 
       console.error('Gagal menyimpan log:', err); 
     } 
   }); 
  
   next(); 
 }); 
  
 app.get('/', (req, res) => { 
   const clientIpAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress; 
   console.log(`Client IP address: ${clientIpAddress}`); 
  
   res.sendFile(path.join(__dirname, 'page', 'home.html')); 
 }); 
  
 app.get('/access-history', (req, res) => { 
   res.json(accessHistory); 
 }); 
  
 app.use(express.static(__dirname)); 
  
 function findAvailablePort(port, callback) { 
   const server = net.createServer() 
     .once('error', (err) => { 
       if (err.code !== 'EADDRINUSE') { 
         return callback(err); 
       } 
  
       findAvailablePort(port + 1, callback); 
     }) 
     .once('listening', () => { 
       server.once('close', () => { 
         callback(null, port); 
       }).close(); 
     }) 
     .listen(port); 
 } 
  
 findAvailablePort(port, (err, availablePort) => { 
   if (err) { 
     console.error('Gagal mencari port yang tersedia:', err); 
     return; 
   } 
  
   const server = app.listen(availablePort, '0.0.0.0', () => { 
     const localIp = ip.address(); 
     console.log('Server berjalan pada:'); 
     console.log(`- URL localhost: http://localhost:${availablePort}`); 
     if (localIp) { 
       console.log(`- URL IP lokal: http://${localIp}:${availablePort}`); 
     } 
     console.log(''); 
  
     const openUrl = `http://localhost:${availablePort}`; 
  
     const openBrowser = () => { 
       exec(getOpenCommand() + ' ' + openUrl, (error) => { 
         if (error) { 
           console.error('Gagal membuka URL di browser:', error); 
         } else { 
           console.log('Berhasil membuka URL di browser'); 
         } 
       }); 
     }; 
  
     openBrowser(); 
  
     // Menjadwalkan reset log.txt setiap jam 00:00 
     cron.schedule('0 0 * * *', () => { 
       fs.writeFile('log.txt', '', (err) => { 
         if (err) { 
           console.error('Gagal mereset log:', err); 
         } else { 
           console.log('Log telah direset'); 
         } 
       }); 
     }); 
  
     // Menangani event SIGINT (Ctrl+C) 
     process.on('SIGINT', () => { 
       console.log('Menghentikan server...'); 
       server.close(() => { 
         console.log('Server dihentikan.'); 
         process.exit(); 
       }); 
     }); 
  
     // Menangani event SIGTERM 
     process.on('SIGTERM', () => { 
       console.log('Menghentikan server...'); 
       server.close(() => { 
         console.log('Server dihentikan.'); 
         process.exit(); 
       }); 
     }); 
   }); 
 }); 
  
 function getOpenCommand() { 
   const platform = os.platform(); 
  
   if (platform === 'win32') { 
     return 'start chrome'; 
   } else if (platform === 'darwin') { 
     return 'open -a "Google Chrome"'; 
   } else if (platform === 'linux') { 
     if (platform.includes('termux')) { 
       return 'termux-open-url || xdg-open || sensible-browser || x-www-browser || gnome-open'; 
     } else { 
       return 'google-chrome || x-www-browser || gnome-open'; 
     } 
   } 
  
   return 'xdg-open'; // Fallback command for unrecognized platforms 
 } 
 
