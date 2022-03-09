import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My first website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'How to train your dog', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        { title: 'How to defeat Koopa', body: 'lorem ipsum...', author: 'mario', id: 3}
    ]);
        return (
            <div className="home">
                <BlogList blogs={blogs} title="All Blogs!"/>
                <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs"/>
            </div>
    );
}

export default Home;