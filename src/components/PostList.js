import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const posts = [
  {
    id: 1,
    title: "First Post",
    summary: "Summary of first post",
    image: "image1.jpg",
  },
  {
    id: 2,
    title: "Second Post",
    summary: "Summary of second post",
    image: "image2.jpg",
  },
];

const PostList = () => {
  return (
    <Container>
      {posts.map((post) => (
        <PostCard key={post.id}>
          <img
            src={post.image}
            alt={post.title}
            onError={(e) => (e.target.src = "fallback-image.jpg")} 
          />
          <h2>{post.title}</h2>
          <p>{post.summary}</p>
          <Link to={`/post/${post.id}`}>Read More</Link>
        </PostCard>
      ))}
    </Container>
  );
};

export default PostList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const PostCard = styled.div`
  width: 300px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  img {
    width: 100%;
    height: auto; 
    border-radius: 10px;
    object-fit: cover; 
  }

  h2 {
    font-size: 1.2em;
    margin-top: 10px;
  }

  p {
    font-size: 0.9em;
    color: #555;
  }

  a {
    display: inline-block;
    margin-top: 10px;
    font-size: 1em;
    color: #2a9d8f;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
