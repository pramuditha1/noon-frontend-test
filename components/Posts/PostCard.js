import React from "react";
import { comments, likes, str_comments, str_likes, str_view, view } from "../../utils/locale";
import HashTags from "../UI/HashTags";
import IconFavourite from "../UI/IconFavourite";
import classes from "./PostCard.module.css";

const PostCard = () => {
  const postDetails = {
    user: {
      userID: "user100",
      username: "kelvin",
      profileImage:
        "https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg",
    },
    image:
      "https://wallpapers.com/images/featured/720p-nature-background-te0eo4yinuw49nh1.jpg",
    post: "This a the first card. Please like and share!",
    title: "Benz car",
    subTitle: "Having a greate nature here...",
    tags: ["nature", "environment", "rivers"],
    likes: 32,
    comments: 12
  };

  return (
    <div className={classes.card}>
      <div className={classes.cardHeader}>
        <img
          className={classes.profileImage}
          src={postDetails.user.profileImage}
          alt="Profile"
        />
        <h2 className="username">{postDetails.user.username}</h2>
      </div>

      <div className={classes.imageContainer}>
        <img src={postDetails.image} alt={postDetails.title} />
        <h5>{postDetails.subTitle}</h5>
        <h4>{postDetails.title}</h4>
        <IconFavourite
          className={classes.imageContainerLikeButton}
          sx={{ color: "white" }}
          fontSize="medium"
        />
      </div>

      <div className={classes.cardContent}>
        <span>
          <IconFavourite fontSize="small" />
          {postDetails.likes} likes
        </span>
        <p>{postDetails.post}</p>
        <HashTags tagValues={postDetails.tags}/>
        <h5>View {postDetails.comments} comments</h5>
      </div>
    </div>
  );
};

export default PostCard;
