import { MOCK_POST_DETAILS } from "../../utils/constants";
import { useSelector, useDispatch } from "react-redux"
import PostCard from "./PostCard"
import { useEffect } from "react";
import { getPosts } from "../../store/slices/posts";
import { getLikedPosts } from "../../store/slices/likedPosts";
import LoadingSpinner from "../UI/LoadingSpinner";
import { no_data_message_homepage } from "../../utils/locale";
import HtmlMessage from "../UI/HtmlMessage";

const Posts = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts())
    //We need to load favouritePosts array during the landing page load. if not can not validate existing item scenario
    dispatch(getLikedPosts());
  }, [])
  const posts = useSelector((state) => state.posts.data)
  const isLoading = useSelector((state) => state.posts.loading)
  return (
    <>
      {
        isLoading ? (<LoadingSpinner styles={{ display: 'flex', justifyContent: 'center' }} />) :
          posts.length === 0 ? (
            <HtmlMessage message={no_data_message_homepage}
              styles={{ display: 'flex', justifyContent: 'center', color: 'gray' }} />
          ) :
            (posts.map((postDetails) => (
              <PostCard postDetails={postDetails} isHome={true} />
            )))}
    </>
  );
};

export default Posts;
