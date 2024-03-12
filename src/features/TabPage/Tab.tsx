import React from "react";
import styled from "./styled.module.css";

interface ITabProps {
  children?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const Tab = ({ active = false, children, onClick }: ITabProps) => {
  const className = `${styled.tabText} ${active ? styled.tabTextBold : ""}`;

  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default Tab;
