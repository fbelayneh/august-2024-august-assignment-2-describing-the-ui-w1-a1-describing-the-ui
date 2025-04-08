import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const posts = [
  {
    id: 1,
    title: "First Post",
    content: "Full content of first post",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Second Post",
    content: "Full content of second post",
    author: "Jane Doe",
  },
];

const PostDetails = () => {
  const { id } = useParams();
  const postId = parseInt(id, 10);

  if (Number.isNaN(postId)) {
    return <Message>Invalid post ID</Message>;
  }

  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return <Message>Post not found</Message>;
  }

  return (
    <Container>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>
        <b>Author:</b> {post.author}
      </p>
    </Container>
  );
};

export default PostDetails;

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
  text-align: center;
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: red;
  margin-top: 20px;
`;
