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
  const isLoading = useSelector((state) => state.posts.loading)
  return (
    <>
      {
        isLoading ? <h3>loading....</h3> :
          posts.map((postDetails) => (
            <PostCard postDetails={postDetails} showLikeButton={true} />
          ))}
    </>
  );
};

export default Posts;
