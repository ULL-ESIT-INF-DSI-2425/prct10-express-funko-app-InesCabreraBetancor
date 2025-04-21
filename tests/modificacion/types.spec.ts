import { describe, test, expect, beforeAll } from "vitest";
import { Note, ResponseType } from "../../src/modificacion/types";

let nota : Note = {title: "Heather", body: "nfkhaljwopkew gt", color: "green"};
let notas : Note[] = [nota]
let response : ResponseType = {type: "add", success: true, notes: notas};

describe("Pruebas para tipos", () => {
  test("Tipo", ()=> {
    expect(response.type).toBe("add");
  });
  test("Sucess", ()=>{
    expect(response.success).toBe(true);
  });
  test("Notas", ()=> {
    expect(response.notes).toBe(notas);
  });
});