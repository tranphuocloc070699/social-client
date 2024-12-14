import React, { useMemo } from "react";
import {
  CloudUpload,
  Plus,
  Check,
  Trash2,
  X,
  Unlink,
  Heart,
  CircleX,
  TextSearch,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  TriangleAlert,
  User,
  KeyRound,
  House,
  Keyboard,
  Menu,
  ChevronDown,
  MoveRight,
  Search,
  ChevronRight,
  BadgeDollarSign,
  Minus,
  SlidersHorizontal,
  Loader,
} from "lucide-react";
import NextImg from "next/image";

export const icons = {
  plus: <Plus />,
  cloudUpload: <CloudUpload />,
  check: <Check />,
  trash: <Trash2 />,
  xMark: <X />,
  circleX: <CircleX />,
  unLink: <Unlink />,
  emptyHeart: <Heart />,
  emptyData: <TextSearch />,
  email: <Mail />,
  lock: <LockKeyhole />,
  eye: <Eye />,
  eyeOff: <EyeOff />,
  warning: <TriangleAlert />,
  user: <User />,
  key: <KeyRound />,
  house: <House />,
  keyboard: <Keyboard />,
  menu: <Menu />,
  chevronDown: <ChevronDown />,
  chevronRight: <ChevronRight />,
  moveRight: <MoveRight />,
  search: <Search />,
  dollar: <BadgeDollarSign />,
  minus: <Minus />,
  filters: <SlidersHorizontal />,
  spinner: <Loader />,
  google_local: "/assets/images/google-icon.svg",
} as const;

interface Props {
  name: keyof typeof icons | string;
  className?: string;
  size?: number;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Icon = ({ name, className, size, onClick }: Props) => {
  const icon = useMemo(() => {
    const isIconFromProvider = name in icons && !name.includes("_local");

    if (isIconFromProvider) {
      const icon = icons[name as keyof typeof icons];
      return React.cloneElement(icon as React.ReactElement, {
        className,
        size,
        onClick,
      });
    }

    if (!isIconFromProvider) {
      return (
        <NextImg
          onClick={onClick}
          src={icons[name]}
          alt={name}
          className={className}
          style={{ width: size, height: size }}
          width={size}
          height={size}
        />
      );
    }
    return <></>;
  }, [name, className, size, onClick]);

  return <>{icon}</>;
};

export default Icon;
