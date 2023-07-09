import { MOCK_POST_DETAILS } from "../../utils/constants";
import { useSelector, useDispatch } from "react-redux"
import PostCard from "./PostCard"
import { useEffect } from "react";
import { getPosts } from "../../store/slices/posts";

const Posts = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts())
  }, [])
  const posts = useSelector((state) => state.posts.data)
  return (
    <>
      {posts && posts.map((postDetails) => (
        <PostCard postDetails={postDetails} />
      ))}
    </>
  );
};

export default Posts;
