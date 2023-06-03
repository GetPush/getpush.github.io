const { spawn } = require('child_process');
const path = require('path');

function runPythonScript(scriptName, args) {
  const scriptPath = path.join(__dirname, scriptName);

  return new Promise((resolve, reject) => {
    const python = spawn('python', [scriptPath, ...args], { stdio: 'inherit' });

    python.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(`Python script execution failed with code ${code}`);
      }
    });

    python.on('error', (err) => {
      reject(err);
    });
  });
}

// Contoh penggunaan
runPythonScript('main.py', ['arg1', 'arg2'])
  .then(() => {
    console.log('Python script executed successfully');
  })
  .catch((error) => {
    console.error('Error:', error);
  });

