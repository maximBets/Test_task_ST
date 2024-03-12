import React, { ReactNode } from "react";
import styled from "./styled.module.css";
import { response } from "./helper/response";
import { TABS } from "./types";

interface IContentTabProps {
  activeTab: TABS;
}

export const ContentTab = ({ activeTab }: IContentTabProps) => {
  const contentTabMap: Record<TABS, ReactNode> = {
    [TABS.LIST]: (
      <div className={styled.containerList}>
        {response &&
          response.map((res) => (
            <table className={styled.table}>
              <thead>
                <tr>
                  <td>{res.name}</td>
                  <td>{res.email}</td>
                  <td>{res.phone}</td>
                </tr>
              </thead>
            </table>
          ))}
      </div>
    ),
    [TABS.TILES]: (
      <div className={styled.containerTiles}>
        {response &&
          response.map((res) => (
            <div className={styled.wrapperTile}>
              <div>{res.name}</div>
              <div>{res.email}</div>
              <div>{res.phone}</div>
            </div>
          ))}
      </div>
    ),
  };

  return <div className={styled.content}>{contentTabMap[activeTab]}</div>;
};
