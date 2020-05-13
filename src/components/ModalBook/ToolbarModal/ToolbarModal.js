import React from "react";
import classes from "./ToolbarModal.module.css";
import { staticData } from "../../../staticData";

const ToolbarModal = (props) => {
  const { ABOUTTAB, ACTIONSTAB, HISTORYTAB } = staticData;
  return (
    <div className={classes.tabsWrapper}>
      <button
        className={props.activeTab === ABOUTTAB ? classes.active : null}
        onClick={() => props.changeTab(ABOUTTAB)}
      >
        Info
      </button>
      <button
        className={props.activeTab === ACTIONSTAB ? classes.active : null}
        onClick={() => props.changeTab(ACTIONSTAB)}
      >
        Zarządzaj
      </button>
      <button
        className={props.activeTab === HISTORYTAB ? classes.active : null}
        onClick={() => props.changeTab(HISTORYTAB)}
      >
        Historia
      </button>
    </div>
  );
};

export default ToolbarModal;
