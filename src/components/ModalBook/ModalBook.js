import React, { Component } from "react";
import { staticData } from "../../staticData";
import classes from "./ModalBook.module.css";
import LayoutModal from "./LayoutModal";
import AboutTab from "./ModalTabs/AboutTab";
import ActionsTab from "./ModalTabs/ActionsTab";
import HistoryTab from "./ModalTabs/HistoryTab";

class ModalBook extends Component {
  state = {
    activeTab: staticData.ABOUTTAB,
    idBook: null,
  };

  componentDidMount() {
    this.setState({
      idBook: this.props.id,
    });
  }

  handleChangeTab = (tab) => {
    this.setState({
      activeTab: tab,
    });
  };

  render() {
    const { closeModal } = this.props;
    const { ABOUTTAB, ACTIONSTAB, HISTORYTAB } = staticData;

    return (
      <>
        <div className={classes.containerModal}>
          <div className={classes.wrapperModal}>
            <LayoutModal
              activeTab={this.state.activeTab}
              changeTab={this.handleChangeTab}
              closeModal={closeModal}
            >
              {this.state.activeTab === ABOUTTAB && <AboutTab />}
              {this.state.activeTab === ACTIONSTAB && <ActionsTab />}
              {this.state.activeTab === HISTORYTAB && <HistoryTab />}
            </LayoutModal>
          </div>
        </div>
      </>
    );
  }
}

export default ModalBook;
