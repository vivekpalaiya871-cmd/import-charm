import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Meera Ji Hospital — Compassionate Multi-Specialty Care" },
      { name: "description", content: "Trusted multi-specialty hospital in Delhi NCR. Plastic & reconstructive surgery, 24×7 emergency, gynaecology, orthopaedics and more." },
    ],
  }),
});
