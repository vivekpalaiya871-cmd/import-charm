import { createFileRoute } from "@tanstack/react-router";
import Departments from "@/pages/Departments";

export const Route = createFileRoute("/departments")({
  component: Departments,
  head: () => ({ meta: [{ title: "Departments — Meera Ji Hospital" }] }),
});
