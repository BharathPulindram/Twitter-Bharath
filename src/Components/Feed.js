import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";
import FlipMove from "react-flip-move";
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            text={post.text}
            username={post.username}
            verified={post.verified}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
      {/* <Post
        displayName="Bharath Pulindram"
        username="Bharath_7"
        verified
        text="come on... Its ur time to rock..."
        image="https://image.dhgate.com/0x0s/f2-albu-g8-M01-81-99-rBVaVF1LtyyAMIiZAAJaUsXHyDQ535.jpg/beautiful-scenery-wallpapers-moonlight-beauty.jpg"
        avatar="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"
      /> */}
    </div>
  );
}

export default Feed;
