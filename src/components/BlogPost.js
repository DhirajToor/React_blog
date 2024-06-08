import React, { useState } from 'react';
import './BlogPost.css';

const BlogPost = ({ title, author, date, image, children }) => {
    
        const [likes, setLikes] = useState(0);
        const [dislikes, setDislikes] = useState(0);
      
        const handleLike = () => {
          setLikes(likes + 1);
        };
      
        const handleDislike = () => {
          setDislikes(dislikes + 1);
        };

    return (
        <div className="blog-post post  ">
            <h2>{title}</h2>
            <div className="meta">
                <span>Author: {author}</span>
                <span>Date: {date}</span>
            </div>
            <img className="im" src={image} alt="Descriptive" />
            <p className='content'>{children}</p>
            <div className='button-bar'>
                <button onClick={handleLike}  className='likeBtn'  > Like</button>
                <span className='counter' > {likes} </span>
                <button className='dislike-btn' onClick={handleDislike}  > DisLike</button>
                
                <span className='counter'> {dislikes} </span>
            </div> 
        </div>
    );
}

export default BlogPost;