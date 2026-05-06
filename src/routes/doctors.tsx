import { createFileRoute } from "@tanstack/react-router";
import Doctors from "@/pages/Doctors";

export const Route = createFileRoute("/doctors")({
  component: Doctors,
  head: () => ({ meta: [{ title: "Our Doctors — Meera Ji Hospital" }] }),
});
