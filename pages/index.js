import PostCard from "../components/Posts/PostCard"

const HomePage = (props) => {
  const postDetails = {
    user: {
      userID: "user100",
      username: "kelvin",
      profileImage: "https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg",
    },
    image: "https://storage.googleapis.com/hippostcard/p/34f43d238eed760cf0c57db83ebc1bfc.jpg",
    post: "This a the first card. Please like and share!"
  }
  return <>
  <PostCard/>
  <PostCard/>
  <PostCard/>
  <PostCard/>
  </>
}

export default HomePage