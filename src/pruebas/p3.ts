// GESTOR DE TAREAS 
import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

let tareas = [
  {id: 1, titulo: "Estudiar express", completada : false },
  {id: 2, titulo: "Hacer la cama", completada: true}
]

app.get('/tareas', (req,res)=>{
  //filtrado
  const { completada } = req.query;
  if (completada !== undefined) {
    const bool = completada === 'true';
    const filtradas = tareas.filter(t => t.completada === bool);
    res.json(filtradas);
  }
  res.json(tareas);
});

app.get('/tareas/:id', (req,res) => {
  const tarea = tareas.find(f => f.id === parseInt(req.params.id));
  if (tarea) {
    res.json(tarea);
  } else {
    res.status(404).json({error : "No se ha encontrado la tarea"});
  }
});

// post -> usamos body
// get -> usamos param
app.post('/tareas', (req,res) => {
  const nueva = {id: tareas.length + 1, titulo: req.body.titulo, completada: false};
  tareas.push(nueva);
  res.json(nueva);
});

app.delete('/tareas/:id', (req,res)=> {
  const buscar = parseInt(req.params.id);
  const index = tareas.findIndex(f => f.id === buscar);
  if (index !== -1){
    const eliminado = tareas.splice(index,1);
    res.json(eliminado[0]);
  } else {
    res.status(404).json({error : "No se ha encontrado la tarea"});
  }
});

app.patch('/tareas/:id', (req,res)=> {
  const id = parseInt(req.params.id);
  const tarea = tareas.find(f => f.id === id);
  if (!tarea){
    res.status(404).json({error: "No se ha encontrado la tarea"});
  } else {
    if(req.body.titulo !== undefined){
      tarea.titulo = req.body.titulo;
    }
    if (req.body.completada !== undefined){
      tarea.completada = req.body.completada;
    }
    res.json(tarea);
  }
});

app.listen(port, () => {
  console.log(`Escuchando desde http://localhost:${port}`);
});