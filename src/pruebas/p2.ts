import express from 'express';

const app = express();
const port = 3000;

// Middleware para leer JSON
app.use(express.json());

// "Base de datos" en memoria
let funkos = [
  { id: 1, nombre: 'Darth Vader', franquicia: 'Star Wars' },
  { id: 2, nombre: 'Spider-Man', franquicia: 'Marvel' }
];

app.get('/', (req,res)=> {
  res.send('Usando API de funkos, por favor ponga http://localhost:3000/funkos');
});

app.get('/funkos', (req,res)=> {
  res.json(funkos);
});

app.get('/funkos/:id', (req,res) => {
  const funko =  funkos.find(f => f.id === parseInt(req.params.id));
  if (funko) {
    res.json(funko);
  } else {
    res.status(404).json({error : 'Funko no encontrado'});
  }
});

// POST /funkos -> agregar un nuevo funko
app.post('/funkos', (req,res)=> {
  const nuevo = {id: funkos.length + 1, nombre: req.body.nombre, franquicia: req.body.franquicia};
  funkos.push(nuevo);
  res.status(201).json(nuevo);
})

app.delete('funko/:id', (req,res)=> {
  const id = parseInt(req.params.id);
  const index= funkos.findIndex(f => f.id === id);
  if (index !== -1) {
    const eliminado = funkos.splice(index, 1);
    res.json(eliminado[0]);
  } else {
    res.status(404).json({error : 'Funko no encontrado'});

  }
});

app.listen(port, ()=>{
  console.log(`API Funkos escuchando en http://localhost:${port}`);
});