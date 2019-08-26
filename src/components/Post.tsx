import React, { Component } from 'react'
import './post.css'
import CommentComponent from './Comment';

interface Author {
  name: string;
  avatar: string;
}
interface Comment {
  id: number;
  author: Author;
  content: string;
}

interface Post {
  id: number;
  author: Author; 
  date: string;
  content: string;
  comments: Comment[];
}

interface PostType {
  post: Post;
}

class Post extends Component<PostType> {
  render() {
    const { post } = this.props;
    return(
      <div className="post-container">
        <div className="author">
          <img className="avatar" src={post.author.avatar} alt=""/>
          <div className="author-data">
            <strong>{post.author.name}</strong>
            <span>{post.date}</span>
          </div>
        </div>
        <div className="content">{post.content}</div>
        <div className="bar"></div>
        {post.comments.map(comment => <CommentComponent comment={comment} />)}
      </div>
    )
  }
}

export default Post;