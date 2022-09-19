import { getSession } from "next-auth/react";
import userService from "../../../server/services/user";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "Unathorised" });
  }

  const users = await userService.getUsers();

  return res.status(200).json(users);
}
