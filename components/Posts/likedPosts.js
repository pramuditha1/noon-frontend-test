import { useSelector, useDispatch } from "react-redux";
import PostCard from "./PostCard";
import { useEffect } from "react";
import { getLikedPosts } from "../../store/slices/likedPosts";
import LoadingSpinner from "../UI/LoadingSpinner";
import HtmlMessage from "../UI/HtmlMessage";
import { no_data_message } from "../../utils/locale";

const LikedPosts = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLikedPosts());
  }, []);

  const likedPosts = useSelector((state) => state.favouritePosts.data);
  const isLoading = useSelector((state) => state.favouritePosts.loading);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner styles={{ display: 'flex', justifyContent: 'center' }} />
      ) : likedPosts.length === 0 ? (
        <HtmlMessage message={no_data_message}
          styles={{ display: 'flex', justifyContent: 'center', color: 'gray' }} />
      ) : (
        likedPosts.map((postDetails) => (
          <PostCard postDetails={postDetails} key={postDetails.id} />
        ))
      )}
    </>
  );
};

export default LikedPosts;
