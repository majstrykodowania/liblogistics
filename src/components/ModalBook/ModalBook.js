import React, { Component } from "react";
import { staticData } from "../../staticData";
import { getSingleBook } from "../../dataBase/dataBase";
import classes from "./ModalBook.module.css";
import Spinner from "../Spinner/Spinner";
import LayoutModal from "./LayoutModal";
import AboutTab from "./ModalTabs/AboutTab";
import ActionsTab from "./ModalTabs/ActionsTab";
import HistoryTab from "./ModalTabs/HistoryTab";

class ModalBook extends Component {
  state = {
    activeTab: staticData.ABOUTTAB,
    idBook: null,
    loading: false,
    book: [],
    error: null,
  };

  componentDidMount() {
    this.setState({
      idBook: this.props.id,
      loading: true,
    });

    getSingleBook(this.props.id).then((book) =>
      this.setState({
        loading: false,
        book,
      })
    );
  }

  handleChangeTab = (tab) => {
    this.setState({
      activeTab: tab,
    });
  };

  render() {
    const { closeModal } = this.props;
    const { ABOUTTAB, ACTIONSTAB, HISTORYTAB } = staticData;
    const { activeTab, book, loading } = this.state;

    return (
      <>
        <div className={classes.containerModal}>
          <div className={classes.wrapperModal}>
            {loading ? (
              <Spinner />
            ) : (
              <LayoutModal
                book={book}
                activeTab={activeTab}
                changeTab={this.handleChangeTab}
                closeModal={closeModal}
              >
                {this.state.activeTab === ABOUTTAB && <AboutTab book={book} />}
                {this.state.activeTab === ACTIONSTAB && (
                  <ActionsTab book={book} />
                )}
                {this.state.activeTab === HISTORYTAB && (
                  <HistoryTab book={book} />
                )}
              </LayoutModal>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default ModalBook;
