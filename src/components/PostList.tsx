import React, { Component } from 'react'
import PostComponent from './Post';
import posts from './posts';
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

interface State {
  posts: Post[];
}

class PostList extends Component<any,State> {
  state:State = posts;
 render(){
   const { posts } = this.state;
   console.log(posts)
   return(
    <>
    {posts.map(post => <PostComponent post={post}/>) }
    </>
   )
 }

}

export default PostList;