import { useSelector, useDispatch } from "react-redux"
import PostCard from "./PostCard"
import { useEffect } from "react";
import { getLikedPosts } from "../../store/slices/likedPosts";

const LikedPosts = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLikedPosts())
  }, [])
  const likedPosts = useSelector((state) => state.favouritePosts.data)
  return <>
    {likedPosts && likedPosts.map((postDetails) => (
      <PostCard postDetails={postDetails} />
    ))}
  </>
}

export default LikedPosts