import React from "react";
import Axios from "axios";
import Comment from '../disq';

import '../../static/css/blog_post.css';


export default class Post extends React.Component {
  state = {
    blogpost: []
  };
  async componentDidMount() {
    try {
      const res = await Axios.get(
        `/blogposts/${this.props.match.params.id}`
      );
      this.setState({ blogpost: res.data });
    } catch (err) {}
  }
  async componentWillReceiveProps(newProps) {
    try {
      const res = await Axios.get(
        `/blogposts/${newProps.match.params.id}/`
      );

      this.setState({ blogpost: res.data });
    } catch (err) {}
  }
  render() {
    const { blogpost } = this.state;
    if (!blogpost) return null;

    return (
      <div className="postDetail">
        <h2 className="postTitle">{blogpost.Title}</h2>
        <p>{blogpost.intro}</p>
        <hr />
        <p>{blogpost.fulltext}</p>
        <Comment key={blogpost._id}/>
        
      </div>
      
    );
  }

};
