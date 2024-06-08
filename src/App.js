import React from 'react';
import TopBar from './components/TopBar';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
import './App.css';

import logo from './assets/images/Dhiraj.png'

function App() {
    return (
        <div className="App">
            <TopBar props={logo}/>
            <div className='flex'>

            
            <div className="blog-posts flex">
                <div className='flex blogList '>
                <BlogPost className="mt"
                    title="Blog Post Title 1" 
                    author="Dhiraj Toor" 
                    date="May 31, 2024" 
                    image="img1.jpg">
                    This is the body of the first blog post. It contains some interesting content.
                </BlogPost>
                <BlogPost 
                    title="Blog Post Title 2" 
                    author="Jasbir" 
                    date="May 30, 2024" 
                    image="IMG2.jpg">
                    This is the body of the second blog post. It contains some interesting content.
                </BlogPost>
                <BlogPost className="mt"
                    title="Blog Post Title 3" 
                    author="Dhiraj Toor" 
                    date="May 31, 2024" 
                    image="img1.jpg">
                    This is the body of the first blog post. It contains some interesting content.
                </BlogPost>
               
                </div>
            </div>

            </div>
            <Footer/>
        </div>
    );
}

export default App;