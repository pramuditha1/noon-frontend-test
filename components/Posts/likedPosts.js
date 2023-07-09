import { useSelector } from "react-redux"
import PostCard from "./PostCard"

const LikedPosts = (props) => {
  const likedPosts = useSelector((state) => state.favouritePosts.data)
  return <>
    {likedPosts.map((postDetails) => (
      <PostCard postDetails={postDetails} />
    ))}
  </>
}

export default LikedPosts