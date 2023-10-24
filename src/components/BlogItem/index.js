// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogData

  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <div className="blog-item-container">
        <img src={imageUrl} alt={title} className="blog-item-img" />
        <div className="topic-container">
          <p className="topic-para">{topic}</p>
          <h1 className="item-title">{title}</h1>
          <div className="author-container">
            <img src={avatarUrl} alt={author} className="author-img" />
            <p className="topic-para">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
