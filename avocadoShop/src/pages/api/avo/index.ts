import Database from "@/database/db";
import { IncomingMessage, ServerResponse } from "http";

const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
  const db = new Database()
  const allEntries = await db.getAll()

  response.statusCode = 200 // ok
  response.setHeader("Content-type", "application/json")
  response.end(JSON.stringify(allEntries))

}

export default allAvos;