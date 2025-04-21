import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __dirname = join(dirname(fileURLToPath(import.meta.url)), '../public');
app.use(express.static(__dirname));

app.get('', (_, res) => {
  res.send('<h1>My application</h1>');
});

app.get('/notes', (_, res) => {
  res.send({
    notes: [
      {
        title: 'Blue note',
        body: 'This is a blue note',
        color: 'blue',
      },
      {
        title: 'Yellow note',
        body: 'This is a yellow note',
        color: 'yellow',
      },
    ],
  });
});

app.get('/info', (_, res) => {
  res.send('Information');
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});