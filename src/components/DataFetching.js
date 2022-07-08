import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {

  const [post, setpost] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {

      console.log("is it working ", res);
      setpost(res.data.slice(4, 8));
      
    });
  }, []);

  return (
    <div>
      {post.map((res) => (
        <p>{res.title}</p>
      ))}
    </div>
  );
}

export default DataFetching;
