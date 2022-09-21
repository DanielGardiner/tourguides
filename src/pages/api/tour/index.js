import tourService from "../../../server/services/tour";

export default async function handler(req, res) {
  try {
    const tours = await tourService.getTours();

    return res.status(200).json(tours);
  } catch (e) {
    return res
      .status(e.code || 400)
      .json({ message: e.message || "Unknown error" });
  }
}
