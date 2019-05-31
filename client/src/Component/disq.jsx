import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';
 
export default class App extends React.Component {
  handleNewComment(comment) {
    console.log(comment.text);
  }
 
  render() {
    return (
      <ReactDisqusComments 
        shortname="coffee-blog-1"
        identifier="Coffee Blog"
        title="Coffee Blog"
        url="http://ponarneko.com"
        category_id="blogpost._id"
        onNewComment={this.handleNewComment} />
    );
  }
}
