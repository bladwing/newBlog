import React from 'react';
import { Link, Route } from 'react-router-dom';
import Axios from 'axios';
import Details from './detail';
import Calendar from '../calendar';
import Share from '../share/share';
import Feedback from '../feedback';

export default class Posts extends React.Component {
  state = {
    blogposts: []
  };
  componentDidMount() {
    Axios.get("/blogposts/")
      .then(res => {
       const blogposts = res.data;
         this.setState({ blogposts:blogposts.reverse() });
       })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { blogposts } = this.state;
    return (
      <div className="about-two">
       <div className="blogpost">
        <ul>
          {blogposts.map(blogpost => {
            return (
              <li key={blogpost._id} className="post">
              <Link to={`/blogposts/${blogpost.id}`}> <h2 className="postTitle"> {blogpost.Title}</h2></Link>
              <p>{blogpost.intro}</p>
              <Link to={`/blogposts/${blogpost.id}`} className="about-btn">Read More...</Link>


            <Share />
              </li>
           
            );
          })}
        </ul>
        <Route path="/blogposts/:id/" component={Details} />
      </div>

      <div className="rightSide">
    <iframe src="https://sunsetsunrisetime.com/widget_weather.php?view=true&wrows=9&now_weather=1&Rrain=1&Rtemperature=1&Rpressure=1&Rdampness=1&Rcloudless=1&Rwind=1&idcity=7919&text=3d1a1b&colB=3d1a1b&colBack=ffffff&colLink=3d1a1b&height=394.6&infoDetails=true&timeZone=Europe/Moscow&typeClock=undefined&tborder=false&grid_color=false" className="weather" scrolling="no" width="200" height="420" frameBorder="0" title="myFrame"></iframe>  
     <h3>Calendar</h3>
     <Calendar/>

     <Feedback/>
     
     </div>
       </div>

    );
  }
};