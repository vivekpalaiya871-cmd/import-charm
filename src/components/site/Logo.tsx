import { cn } from "@/lib/utils";
import logo from "@/assets/meera-logo.png";

type Props = {
  className?: string;
  size?: number;
};

export const Logo = ({ className, size = 56 }: Props) => (
  <img
    src={logo}
    alt="Meera Ji Hospital logo"
    width={size}
    height={size}
    style={{ width: size, height: size }}
    className={cn("object-contain logo-3d", className)}
  />
);