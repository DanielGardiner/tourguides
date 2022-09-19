import { getSession } from "next-auth/react";
import { userRoles } from "../../../constants";
import { checkSession } from "../../../server/services/auth";
import userService from "../../../server/services/user";

export default async function handler(req, res) {
  try {
    const session = await getSession({ req });
    checkSession({
      session,
      hasRole: [userRoles.ADMIN, userRoles.SUPER_ADMIN],
    });

    const users = await userService.getUsers();

    return res.status(200).json(users);
  } catch (e) {
    return res
      .status(e.code || 400)
      .json({ message: e.message || "Unknown error" });
  }
}
