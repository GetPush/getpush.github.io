const { execSync } = require('child_process');
const path = require('path');

function runPythonScript(scriptPath, args) {
  const pythonScript = path.join(__dirname, scriptPath);
  const command = `python ${pythonScript} ${args.join(' ')}`;
  
  try {
    const output = execSync(command);
    const result = output.toString().trim();
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

module.exports = (req, res) => {
  const result = runPythonScript('main.py', ['arg1', 'arg2']);
  res.status(200).json({ result });
};

