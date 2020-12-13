const initState = {
  posts: [
    {id: 1, title: 'sample post title', content: 'sample post content'}
  ]
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_POST":
      const newPost = state.posts.filter((post) => post.id !== action.id);
      return {
        posts: newPost,
      };
    case "ADD_POST":
      return {
        posts: [action.post, ...state.posts],
      };
    default:
      return state;
  }
};

export default postReducer;
