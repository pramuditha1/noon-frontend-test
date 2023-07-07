import React from "react";
import classes from "./HashTags.module.css";

const HashTags = ({tagValues}) => {
  const constructTags = (tags) => {
    let tagString = "";
    tags.map((tag) => {
      tagString = tagString + "#" + tag + " ";
    });
    return tagString;
  };
  return <p className={classes.tagsList}>{constructTags(tagValues)}</p>;
};

export default HashTags;
