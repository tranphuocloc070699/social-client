import React from "react";
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
} from "lucide-react";

// Define icons with `as const` to make keys readonly
const icons = {
  plus: <Plus/>,
  cloudUpload: <CloudUpload/>,
  check: <Check/>,
  trash: <Trash2/>,
  xMark: <X/>,
  circleX: <CircleX/>,
  unLink: <Unlink/>,
  emptyHeart: <Heart/>,
  emptyData: <TextSearch/>,
} as const;

interface Props {
  name: keyof typeof icons | string;
  className?: string;
  size?: number;
}

const Icon = ({name, className, size}: Props) => {
  const isIcon = name in icons;

  if (isIcon) {
    const icon = icons[name as keyof typeof icons];
    return React.cloneElement(icon as React.ReactElement, {className, size});
  }

  return <img src={name} alt={name} className={className} style={{width: size, height: size}}/>;
};

export default Icon;
