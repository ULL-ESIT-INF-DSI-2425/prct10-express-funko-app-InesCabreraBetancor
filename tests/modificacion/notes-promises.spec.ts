import { describe, expect, test } from "vitest";
import { readNote, loadNotes } from "../../src/modificacion/notes-promises";

describe("Pruebas unitarias para las Promesas de readNote", ()=>{
  test("Probamos que devuelva el Blue Note", ()=>{
    return readNote("Blue note", "notes.json").then((data)=> {
      expect(data.notes).toStrictEqual([{"title":"Blue note","body":"This is a blue note","color":"blue"}]);
    });
  });
  test("Probamos que devuelva el Green Note", ()=>{
    return readNote("Green note", "notes.json").then((data)=> {
      expect(data.notes).toStrictEqual([{"title":"Green note","body":"This is a green note","color":"green"}]);
    });
  });
  test("Probamos que devuelva el Red Note", ()=>{
    return readNote("Red note", "notes.json").then((data)=> {
      expect(data.notes).toStrictEqual([{"title":"Red note","body":"This is a red note","color":"red"}]);
    });
  });
  test("Probamos que devuelva el Yellow Note", ()=>{
    return readNote("Yellow note", "notes.json").then((data)=> {
      expect(data.notes).toStrictEqual([{"title":"Yellow note","body":"This is a yellow note","color":"yellow"}]);
    });
  });
  test("Probamos que devuelva el Magenta Note", ()=>{
    return readNote("Magenta note", "notes.json").then((data)=> {
      expect(data.notes).toStrictEqual([{"title":"Magenta note","body":"This is a magenta note","color":"magenta"}]);
    });
  });
  test ("Probamos nota que no existe", ()=> {
    return readNote("hola note", "notes.json").then((data)=>{
      expect(data.notes).toStrictEqual(undefined);
    });
  });
});

let respuesta = [
  {"title":"Blue note","body":"This is a blue note","color":"blue"},
  {"title":"Green note","body":"This is a green note","color":"green"},
  {"title":"Yellow note","body":"This is a yellow note","color":"yellow"},
  {"title":"Red note","body":"This is a red note","color":"red"},
  {"title":"Magenta note","body":"This is a magenta note","color":"magenta"},
  {"title":"Ines note","body":"This is a ines note","color":"red"}
];

describe("Pruebas unitarias para las Promesas de loadNote", () => {
  test("Probamos con blue note", ()=> {
   return loadNotes("/home/usuario/PRACTICAS-DSI/prct10-express-funko-app-InesCabreraBetancor/public/notes/notes.json").then((data) => {
    expect(JSON.parse(data)).toStrictEqual((respuesta));
   });
  });
});