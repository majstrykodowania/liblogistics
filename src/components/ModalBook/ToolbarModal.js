import React from "react";
import { staticData } from "../../staticData";

const ToolbarModal = (props) => {
  const { ABOUTTAB, ACTIONSTAB, HISTORYTAB } = staticData;
  return (
    <>
      <button onClick={() => props.changeTab(ABOUTTAB)}>About</button>
      <button onClick={() => props.changeTab(ACTIONSTAB)}>Actions</button>
      <button onClick={() => props.changeTab(HISTORYTAB)}>History</button>
    </>
  );
};

export default ToolbarModal;
