import PostCard from "../components/Posts/PostCard";
import { MOCK_POST_DETAILS } from "../utils/constants";

const HomePage = (props) => {
  const postDetailsArray = MOCK_POST_DETAILS;

  return (
    <>
      {postDetailsArray.map((postDetails) => (
        <PostCard postDetails={postDetails} />
      ))}
    </>
  );
};

export default HomePage;
