import React from "react";
import ToolbarModal from "./ToolbarModal/ToolbarModal";
import ButtonCloseModal from "./ButtonCloseModal/ButtonCloseModal";

const LayoutModal = (props) => (
  <>
    <ToolbarModal activeTab={props.activeTab} changeTab={props.changeTab} />
    {props.children}
    <ButtonCloseModal closeModal={props.closeModal} />
  </>
);

export default LayoutModal;
