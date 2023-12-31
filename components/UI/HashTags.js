import React from "react";
import classes from "./HashTags.module.css";

// generate hash tags using an string array
const HashTags = ({tagValues}) => {
  const constructTags = (tags) => {
    let tagString = "";
    tags.map((tag) => {
      tagString = tagString + "#" + tag + " ";
    });
    return tagString;
  };
  return tagValues && <p className={classes.tagsList}>{constructTags(tagValues)}</p>;
};

export default HashTags;
