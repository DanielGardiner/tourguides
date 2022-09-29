import { getSession } from "next-auth/react";
import { userRoles } from "../../../constants";
import tourService from "../../../server/services/tour";

export default async function handler(req, res) {
  try {
    const session = await getSession({ req });

    const { id } = req.query;

    const idInt = parseInt(id, 10);

    const tour = await tourService.getTour(idInt);

    const canViewProtectedSteps = [
      userRoles.PREMIUM_MEMBER,
      userRoles.CONTRIBUTOR,
      userRoles.ADMIN,
      userRoles.SUPER_ADMIN,
    ].includes(session?.role);

    if (!canViewProtectedSteps) {
      tour.steps.filter((step) => {
        step.audioLink = step.isFree ? step.audioLink : null;
        return step;
      });
    }

    return res.status(200).json(tour);
  } catch (e) {
    return res
      .status(e.code || 400)
      .json({ message: e.message || "Unknown error" });
  }
}
