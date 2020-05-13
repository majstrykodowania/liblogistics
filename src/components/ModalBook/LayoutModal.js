import React from "react";
import ToolbarModal from "./ToolbarModal";

const LayoutModal = (props) => (
  <div>
    <ToolbarModal changeTab={props.changeTab} />
    <button onClick={props.closeModal}>Close modal</button>
    {props.children}
  </div>
);

export default LayoutModal;
