import React, { useEffect, useState } from "react";

const FetchExample = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") // API URL
      .then((response) => response.json()) // Convert response to JSON
      .then((json) => setData(json)) // Store data in state
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {data.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchExample;
