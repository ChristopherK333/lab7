/*
TODO (Header.jsx):
Create the entire Header component.

Requirements:
- Show the site title and a one-sentence description.
- Show summary numbers: totalPosts, totalLikes, totalDislikes.
*/




export default function Header({ totalPosts, totalLikes, totalDislikes }) {
  // TODO: Replace return null with your JSX
  



  return (
    <header>
      <h1>GridBlog</h1>
      <p>A React demo using class-based state, props, and CSS Grid.</p>
      <div className="summary">
        <div>Total Posts: {totalPosts}</div>
        <div>Total Likes: {totalLikes}</div>
        <div>Total Dislikes: {totalDislikes}</div>
      </div>
    </header>
    
  );
    














}
