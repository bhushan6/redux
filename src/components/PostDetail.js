import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from '../store/actions/postAction';

export const PostDetail = ({post}) => {
  const dispatch = useDispatch();
  return (
    <div >
      <div>
        <div>
          <span>{post.title}</span>
          <p>{post.content}</p>
        </div>
        <div >
          <button
            onClick={() => dispatch(deletePost(post.id))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
