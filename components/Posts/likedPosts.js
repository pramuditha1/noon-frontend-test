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
  const isLoading = useSelector((state) => state.favouritePosts.loading)
  return <>
    {
      isLoading ? <h3>loading....</h3> :
        likedPosts.map((postDetails) => (
          <PostCard postDetails={postDetails} />
        ))
    }
  </>
}

export default LikedPosts