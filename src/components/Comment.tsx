import React, { Component } from 'react'
import './comment.css'
import logo from '../assets/logo.svg';

interface Author {
  name: string;
  avatar: string;
}
interface Comment {
  id: number;
  author: Author;
  content: string;
}

interface Props {
  comment: Comment;
}

class Comment extends Component<Props> {
  render() {
    const { comment } = this.props;
    return(
      <div className="comment-container">
        <img src={comment.author.avatar} alt="Avatar"/>
        <div className="comment-content">
          <p><strong>{comment.author.name}</strong>{' ' + comment.content}</p>
        </div>
        
      </div>
    )
  }
}

export default Comment;