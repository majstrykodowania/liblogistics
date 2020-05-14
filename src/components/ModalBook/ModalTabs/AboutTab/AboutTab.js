import React from "react";
import classes from "./AboutTab.module.css";
import Header from "./Header/Header";
import InfoBook from "./InfoBook/InfoBook";

const AboutTab = (props) => {
  const {
    title,
    author,
    description,
    currentReaders,
    quantity,
    released,
  } = props.book;
  return (
    <div className={classes.aboutTabContainer}>
      <Header title={title} />
      <InfoBook
        author={author}
        description={description}
        currentReaders={currentReaders}
        quantity={quantity}
        released={released}
      />
    </div>
  );
};
export default AboutTab;
