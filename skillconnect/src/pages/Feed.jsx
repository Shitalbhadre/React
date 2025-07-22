import { useState } from 'react';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handlePost = () => {
    if (newPost.trim() === '') return;

    const post = {
      id: Date.now(),
      text: newPost,
      likes: 0,
      comments: [],
    };

    setPosts([post, ...posts]);
    setNewPost('');
  };

  const handleLike = (id) => {
    setPosts(
      posts.map(post =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleComment = (id, commentText) => {
    if (commentText.trim() === '') return;

    setPosts(
      posts.map(post =>
        post.id === id
          ? {
              ...post,
              comments: [...post.comments, commentText],
            }
          : post
      )
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Post Something</h2>
      <textarea
        rows="3"
        placeholder="What's on your mind?"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      ></textarea>
      <button onClick={handlePost}>Post</button>

      <hr />

      <h3>Recent Posts</h3>
      {posts.length === 0 && <p>No posts yet!</p>}

      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '5px',
          }}
        >
          <p>{post.text}</p>
          <button onClick={() => handleLike(post.id)}>❤️ {post.likes}</button>

          <div style={{ marginTop: '10px' }}>
            <input
              type="text"
              placeholder="Add comment..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleComment(post.id, e.target.value);
              }}
              style={{ width: '80%' }}
            />
            <div>
              {post.comments.map((c, i) => (
                <p key={i} style={{ marginLeft: '10px', fontStyle: 'italic' }}>
                  💬 {c}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
