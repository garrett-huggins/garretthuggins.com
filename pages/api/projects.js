import { projects } from "../../data/projects";

export default function handler(req, res) {
  res.status(200).json(projects);
}
//future use when there are more projects, add "load more"
