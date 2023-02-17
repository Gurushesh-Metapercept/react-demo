import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../App";

const About = () => {
  const [count, setCount] = useState(0);
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async (userId) => {
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await resp.json();
      setPost(data);
      console.log(data);
    };

    fetchData();
  }, []);

  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      className={
        darkMode ? `Container Container-dark` : `Container Container-light`
      }
    >
      <h1>About</h1>
      {count}
      <button onClick={() => setCount(count + 1)}>Counter</button>

      {post
        ? post.map((p) => (
            <ul key={p.id}>
              <li>{p.title}</li>
            </ul>
          ))
        : "No data found"}
    </div>
  );
};

export default About;
