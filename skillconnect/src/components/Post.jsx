import React, { useState } from 'react';

const Post = ({ post, onLike, onComment }) => {
  const [comment, setComment] = useState('');

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0', borderRadius: '10px' }}>
      <h4>@{post.user}</h4>
      <p>{post.content}</p>
      <button onClick={() => onLike(post.id)}>👍 Like ({post.likes})</button>

      <div style={{ marginTop: '10px' }}>
        <input
          type="text"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={() => {
          onComment(post.id, comment);
          setComment('');
        }}>💬 Add Comment</button>
      </div>

      {post.comments.length > 0 && (
        <ul style={{ marginTop: '10px' }}>
          {post.comments.map((c, i) => <li key={i}>{c}</li>)}
        </ul>
      )}
    </div>
  );
};

export default Post;
