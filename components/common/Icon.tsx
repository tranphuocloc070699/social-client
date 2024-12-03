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
  TextSearch, Mail, LockKeyhole, Eye, EyeOff, TriangleAlert,
} from "lucide-react";


export const icons = {
  plus: <Plus/>,
  cloudUpload: <CloudUpload/>,
  check: <Check/>,
  trash: <Trash2/>,
  xMark: <X/>,
  circleX: <CircleX/>,
  unLink: <Unlink/>,
  emptyHeart: <Heart/>,
  emptyData: <TextSearch/>,
  email: <Mail/>,
  lock: <LockKeyhole/>,
  eye: <Eye/>,
  eyeOff: <EyeOff/>,
  warning: <TriangleAlert/>
} as const;

interface Props {
  name: keyof typeof icons | string;
  className?: string;
  size?: number;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Icon = ({name, className, size, onClick}: Props) => {
  const isIcon = name in icons;

  if (isIcon) {
    const icon = icons[name as keyof typeof icons];
    return React.cloneElement(icon as React.ReactElement, {className, size, onClick});
  }

  return <img onClick={onClick} src={name} alt={name} className={className}
              style={{width: size, height: size}}/>;
};

export default Icon;
