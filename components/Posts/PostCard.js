import React from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/slices/likedPosts";
import { formatNumberInThousands } from "../../utils/helper";
import { msg_no_details } from "../../utils/locale";
import HashTags from "../UI/HashTags";
import IconFavourite from "../UI/IconFavourite";
import classes from "./PostCard.module.css";

const PostCard = ({ postDetails }) => {
  const dispatch = useDispatch();

  //adding favourite items into favoutitePosts redux object
  const addToFavourites = () => {
    postDetails && dispatch(addPost(postDetails))
  };

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
        <IconFavourite
          onClick={addToFavourites}
          className={classes.imageContainerLikeButton}
          sx={{ color: "white" }}
          fontSize="medium"
        />
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
    </div>
  );
};

export default PostCard;
