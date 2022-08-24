import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postApiThunk, postDataThunk } from "../store/postApi/postApiSlice";

const PostApi = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // get data from api slice
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.postApi);
  const dataList = post.map((item, index) => {
    return (
      <div key={index}>
        <h1> {item.title} </h1>
        <p> {item.body} </p>
      </div>
    );
  });

  const addPost = () => {
    dispatch(postDataThunk({ title, body }));
  };

  useEffect(() => {
    dispatch(postApiThunk());
  }, []);
  // useEffect(() => {
  //   dispatch(postDataThunk({title, body}));
  // }, [])

  return (
    <div>
      <form>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="title"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="body"
          cols="30"
          rows="10"
        ></textarea>
        <button onClick={addPost} type="button">
          add post
        </button>
      </form>
      {dataList}
    </div>
  );
};

export default PostApi;
