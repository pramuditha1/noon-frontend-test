import PostCard from "../components/Posts/PostCard";
import Posts from "../components/Posts/Posts";
import { MOCK_POST_DETAILS } from "../utils/constants";

const HomePage = (props) => {
  const postDetailsArray = MOCK_POST_DETAILS;

  return (
    <Posts/>
  );
};

export default HomePage;
