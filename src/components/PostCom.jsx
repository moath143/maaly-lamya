import React from "react";
import { useSelector } from "react-redux";

const PostCom = () => {
  const postStorage = JSON.parse(localStorage.getItem("maaly"));
  const dataPost = useSelector((state) => state.postStore);
  const dataList = postStorage.posts.map((item) => {
    return (
      <div key={item.idx}>
        <h1> {item.title} </h1>
        <p> {item.body} </p>
      </div>
    );
  });
    return <div>{dataList}</div>;
};

export default PostCom;
