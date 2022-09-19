import { getSession } from "next-auth/react";
import prisma from "../../../server/prismaClient";
import { userRoles } from "../../../constants";
import { UnauthorisedError, ValidationError } from "../../../errors";

export default async function handler(req, res) {
  try {
    const session = await getSession({ req });
    const isAdmin = [userRoles.ADMIN, userRoles.SUPER_ADMIN].includes(
      session?.role
    );
    if (!session) {
      throw new UnauthorisedError()
    }

    const { userId: id } = req.query;
    const { role } = req?.body;

    if (
      !isAdmin &&
      (role === userRoles.ADMIN || role === userRoles.SUPER_ADMIN)
    ) {
      throw new ValidationError();
    }

    const updateUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        role,
      },
    });

    return res.status(200).json(updateUser);
  } catch (e) {
    return res.status(e.code).json({ message: e.message });
  }
}
