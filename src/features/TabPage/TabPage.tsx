import React, { useCallback, useState } from "react";
import styled from "./styled.module.css";
import Tab from "./Tab";
import { IOption, TABS } from "./types";
import { ContentTab } from "./ContentTab";

export const TabPage = () => {
  const [activeTab, setActiveTab] = useState(TABS.LIST);

  const handlerActiveTab = useCallback((option: IOption) => {
    setActiveTab(option.value);
  }, []);

  const options: IOption[] = [
    {
      value: TABS.LIST,
      label: "List",
    },
    {
      value: TABS.TILES,
      label: "Tiles",
    },
  ];

  return (
    <div>
      <div className={styled.containerTab}>
        {options &&
          options.map((option) => (
            <Tab
              key={option.label}
              onClick={() => handlerActiveTab(option)}
              active={activeTab === option.value}
            >
              {option.label}
            </Tab>
          ))}
      </div>

      <ContentTab activeTab={activeTab} />
    </div>
  );
};
