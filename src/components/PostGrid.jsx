import PostCard from "./PostCard.jsx";

export default function PostGrid({ posts, onLike, onDislike }) {


  console.log("Posts receieved in the post grid", posts); 
  return (
    <div className="grid" id="posts">
      {posts.map((post) => (
        <PostCard
            key={post.id} 
            post={post}
            onLike={onLike} 
            onDislike={onDislike}


            />
        
      ))}
    </div>
  );
}

// import PostCard from "./PostCard.jsx";

// export default function PostGrid() {
//   console.log("PostGrid is running");
//   return <h1>POST GRID WORKS</h1>;
// }