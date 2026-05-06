import { createFileRoute } from "@tanstack/react-router";
import Treatments from "@/pages/Treatments";

export const Route = createFileRoute("/treatments")({
  component: Treatments,
  head: () => ({ meta: [{ title: "Treatments — Meera Ji Hospital" }] }),
});
