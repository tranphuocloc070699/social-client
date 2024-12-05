import React, {useMemo} from "react";
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
  ChevronDown, MoveRight, Search,
} from "lucide-react";
import NextImg from "next/image";


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
  warning: <TriangleAlert/>,
  user: <User/>,
  key: <KeyRound/>,
  house: <House/>,
  keyboard: <Keyboard/>,
  menu: <Menu/>,
  chevronDown: <ChevronDown/>,
  moveRight: <MoveRight/>,
  search: <Search/>
} as const;

interface Props {
  name: keyof typeof icons | string;
  className?: string;
  size?: number;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}


const Icon = ({name, className, size, onClick}: Props) => {


  const getIcon = useMemo(() => {
    console.log({name})
    const isIcon = name in icons;
    if (isIcon) {
      const icon = icons[name as keyof typeof icons];
      return React.cloneElement(icon as React.ReactElement, {className, size, onClick});
    }

    if (!isIcon && name?.length > 0) {
      return <NextImg onClick={onClick} src={name} alt={name} className={className}
                      style={{width: size, height: size}} width={16} height={16}/>;
    }
    return <></>
  }, [name, className, size]);


  return <>
    {getIcon}
  </>

};

export default Icon;
