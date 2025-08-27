import type { Request, Response } from 'express';
const express = require('express');

const app = express();
const PORT = 5678;

app.use(express.json());

app.post('/webhook-test/sent', (req: Request, res: Response) => {
  
  console.log('Received webhook:', req.body);

  res.status(200).json({ message: 'Webhook received', data: req.body });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});