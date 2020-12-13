import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from '../store/actions/postAction';
import { v4 as uuidv4 } from "uuid";

export const AddPost = () => {
  const [post, setPost] = useState({
    id: '',
    title: '',
    content: ''
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
    console.log({[e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(post))
    setPost({
      id: uuidv4(),
      title: "",
      content: "",
    });
    console.log(post.id)
  }

  return (
    <div style={{ margin: "4rem auto" }}>
      <h5 >Blog</h5>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="post_title">Title</label>
          <input
            onChange={handleChange}
            value={post.title}
            type="text"
            name="title"
          />
        </div>
        <div >
          <label htmlFor="post_content">Content</label>
          <textarea
            onChange={handleChange}
            value={post.content}
            name="content"
          ></textarea>
        </div>
        <div>
          <button>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
