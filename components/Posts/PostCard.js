import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost, likePost } from "../../store/slices/posts";
import { formatNumberInThousands } from "../../utils/helper";
import { msg_no_details } from "../../utils/locale";
import HashTags from "../UI/HashTags";
import IconFavourite from "../UI/IconFavourite";
import classes from "./PostCard.module.css";

const PostCard = ({ postDetails }) => {
  const dispatch = useDispatch();
  const addPostMessage = () => {
    dispatch(addPost(
      {
        user: {
          userID: "user100",
          username: "kelvin",
          profileImage:
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        },
        title: "Transformers: Rise of the Beasts",
        subTitle: "2023 ‧ Action/Sci-fi ‧ 2h 7m",
        image:
          "https://static.toiimg.com/photo/100465865.cms?resizemode=4",
        post: "This a the first card. Please like and share!",
        tags: ["transformers", "AI", "robots", "cars"],
        likes: 0,
        comments: 0,
        likedUsersList: []
      }
    ))
  };
  const addLikeToPost = () => {
    dispatch(
      likePost({
        postId: '64a9d39bffc9fabdf682d95a', // Replace with the actual post ID
        likedUserId: '100', // Replace with the actual liked user ID
      })
    );
  };
  if (!postDetails) {
    return <h2>{msg_no_details}</h2>;
  }
  return (
    <div className={classes.card}>
      <button onClick={addPostMessage}>Add post</button>
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
          onClick={addLikeToPost}
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
