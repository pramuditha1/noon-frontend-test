import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost } from "../../store/slices/likedPosts";
import { formatNumberInThousands } from "../../utils/helper";
import { already_exists, msg_no_details } from "../../utils/locale";
import HashTags from "../UI/HashTags";
import IconFavourite from "../UI/IconFavourite";
import Dislike from "../UI/IconDislike";
import classes from "./PostCard.module.css";
const { isEqual, toString } = require('lodash');

const PostCard = ({ postDetails, isHome }) => {
  const dispatch = useDispatch();
  const error_already_added = useSelector((state) => state.favouritePosts.error);
  const id_already_added = useSelector((state) => state.favouritePosts.existingID);

  //adding favourite items into favoutitePosts redux object
  const addToFavourites = () => {
    postDetails && dispatch(addPost(postDetails))
  };

  const dislikePost = () => {
    dispatch(deletePost(postDetails._id))
  }

  if (!postDetails) {
    return <h2>{msg_no_details}</h2>;
  }
  return (
    <div className={classes.card}>
      <div className={classes.cardHeader}>
        <img
          className={classes.profileImage}
          src={postDetails?.user?.profileImage}
          alt="Profile"
        />
        <h2 className="username">{postDetails?.user?.username}</h2>
      </div>

      <div className={classes.imageContainer}>
        <img src={postDetails?.image} alt={postDetails?.title} />
        <h5>{postDetails?.subTitle}</h5>
        <h4>{postDetails?.title}</h4>
        {isHome && <IconFavourite
          onClick={addToFavourites}
          className={classes.imageContainerLikeButton}
          sx={{ color: "white" }}
          fontSize="large"
        />}
        {!isHome && <Dislike
          onClick={dislikePost}
          className={classes.imageContainerLikeButton}
          sx={{ color: "red" }}
          fontSize="large"
        />}
      </div>

      <div className={classes.cardContent}>
        <span>
          <IconFavourite fontSize="small" />
          {formatNumberInThousands(postDetails?.likes)} likes
        </span>
        <p>{postDetails?.post}</p>
        <HashTags tagValues={postDetails?.tags} />
        <h5>View {formatNumberInThousands(postDetails?.comments)} comments</h5>
      </div>
      <div className={classes.footer}>
        {
          //this message only shows in homepage
          isHome && isEqual(toString(id_already_added), toString(postDetails._id)) && <h4>{already_exists}</h4>
        }
      </div>
    </div>
  );
};

export default PostCard;
