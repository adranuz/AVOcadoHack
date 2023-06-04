import Database from "@/database/db";
import { NextApiRequest, NextApiResponse } from "next";

const oneAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const id = request.query.id
  const db = new Database()
  const oneEntry = await db.getById(id as string)

  response.status(200).json(oneEntry)
}

export default oneAvos;