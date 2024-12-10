"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  onChange: (current: string) => void;
};

const Tabs = ({ onChange }: Props) => {
  const [activeTab, setActiveTab] = React.useState<string>("1");

  const tabs = [
    {
      id: "1",
      text: "Placeholder 1",
    },
    {
      id: "2",
      text: "Placeholder 2",
    },
  ];

  function handleTabItemClick(id: string) {
    setActiveTab(id);
    if (onChange) onChange(activeTab);
  }

  return (
    <div component-name="Tabs" className={"flex items-center gap-6"}>
      {tabs.map((item) => (
        <span
          key={item.id}
          className={twMerge(
            `cursor-pointer font-sans text-lg font-normal text-sh-secondary-100 transition-all duration-300 ${activeTab === item.id && "text-sh-text"}`
          )}
          onClick={() => handleTabItemClick(item.id)}
        >
          {item.text}
        </span>
      ))}
    </div>
  );
};

export default Tabs;
