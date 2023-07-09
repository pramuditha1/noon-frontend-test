import { MOCK_POST_DETAILS } from "../../utils/constants";
import PostCard from "./PostCard";

const Posts = (props) => {
  const postDetailsArray = MOCK_POST_DETAILS;

  return (
    <>
      {postDetailsArray.map((postDetails) => (
        <PostCard postDetails={postDetails} />
      ))}
    </>
  );
};

export default Posts;
