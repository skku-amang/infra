const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');

const app = express();
const PORT = 5001;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  console.log('Push event received. Pulling code and rebuilding images...');

  // 비동기적으로 스크립트 실행
  const deployProcess = spawn('./deploy.sh');

  deployProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  deployProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  deployProcess.on('close', (code) => {
    console.log(`deploy.sh process exited with code ${code}`);
  });

  // 즉시 응답 반환
  res.status(200).send('Webhook received and processing started');
});

// health check
app.get('/', (req, res) => {
  console.log('Health check request received');
  res.status(200).send('Server is healthy');
});

app.listen(PORT, () => {
  console.log(`Webhook server listening on port ${PORT}`);
});