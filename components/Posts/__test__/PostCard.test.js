import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";
import PostCard from "../PostCard";

expect.extend({ toBeInTheDocument }); // Extend the expect function with custom matchers

describe("PostCard component", () => {
  const mockStore = configureStore([]);
  let store;

  // Mock post details
  const postDetails = {
    _id: "1",
    user: {
      userID: "user100",
      username: "kelvin",
      profileImage:
        "profile-image",
    },
    title: "Title of the post",
    subTitle: "sub title",
    image:
      "image-post",
    post: "post",
    tags: ["tag1", "tag2"],
    likes: 12,
    comments: 90
  };

  beforeEach(() => {
    store = mockStore({
      posts: {},
      favouritePosts: {
        error: null,
        existingID: null,
        data: [],
      },
    });
  });

  test("renders PostCard component with post details", () => {
    render(
      <Provider store={store}>
        <PostCard postDetails={postDetails} isHome={true} />
      </Provider>
    );

    // Assertions
    expect(screen.getByText("kelvin")).toBeInTheDocument();
    expect(screen.getByText("Title of the post")).toBeInTheDocument();
    expect(screen.getByText("sub title")).toBeInTheDocument();
    expect(screen.getByText("12 likes")).toBeInTheDocument();
    expect(screen.getByText("post")).toBeInTheDocument();
    expect(screen.getByText("View 90 comments")).toBeInTheDocument();
  });
});
