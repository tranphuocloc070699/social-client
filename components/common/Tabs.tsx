"use client"

import React from 'react';
import {twMerge} from "tailwind-merge";

const Tabs = () => {
  const [activeTab, setActiveTab] = React.useState<string>("1")

  const tabs = [{
    id: "1",
    text: "Placeholder 1"
  }, {
    id: "2",
    text: "Placeholder 2"
  }]

  function handleTabItemClick(id: string) {
    setActiveTab(id)
  }

  return (
      <div component-name="Tabs" className={"flex items-center gap-6"}>
        {
          tabs.map(item => <span key={item.id}
                                 className={twMerge(`text-lg text-sh-secondary-100 font-semibold cursor-pointer ${activeTab === item.id && "text-sh-text "}`)}
                                 onClick={() => handleTabItemClick(item.id)}>{item.text}</span>)
        }
      </div>
  );
};

export default Tabs;