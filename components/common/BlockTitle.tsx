import React from 'react';
import {IconProps} from "@/components/common/Input/InputForm";
import Icon from "@/components/common/Icon";
import Typography from "@/components/common/Typography";
import Link from "next/link";
import {twMerge} from "tailwind-merge";


type Props = {
  className?: string;
  title: string;
  icon?: IconProps;
  showAllPath?: string;
  children: React.ReactNode;
}
const BlockTitle = ({className, title, icon, showAllPath, children}: Props) => {
  return (
      <section className={"md:px-6 px-4 "}>
        <div component-name="BlockTitle"
             className={twMerge(`flex items-center justify-between ${className}`)}>
          <div className={"flex items-center gap-2"}>
            {icon?.showIcon && <Icon name={icon.name} className={"text-sh-primary"} size={24}/>}
            <Typography.H3 className={"text-sh-primary"}>{title}</Typography.H3>
          </div>

          {showAllPath &&
							<Link className={"text-sh-text text-base flex items-center gap-2 text-nowrap"}
							      href={showAllPath}>Xem
								tất
								cả
								<Icon name={"moveRight"} className={"text-sh-text"} size={16}/>
							</Link>}
        </div>
        <div className={"mt-4"}>
          {children}
        </div>
      </section>
  );
};

export default BlockTitle;