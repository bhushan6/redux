import React from "react";
import {PostDetail} from "./PostDetail";
import { useSelector } from "react-redux";

export const PostList = () => {
  const { posts } = useSelector(state => state)
  return (
    <div >
      <div>
        {posts.map((post) => <PostDetail post={post} key={post.id} />)}
      </div>
    </div>
  );
}

