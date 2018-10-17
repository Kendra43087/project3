import React, { Component } from 'react';
import './blog.css';
import { Link } from 'react-router-dom';
import axios from 'axios';




class Blog extends Component {
  state = {
    text: "",
    title: "",
    blogs: [],
    showBlogInput: false
  }

  handleInputChange = event => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value })
  
  }
  createPost = event => {
    this.setState({
      showBlogInput: true
    })
  }
  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.text ) {
      alert("Fill out blog!");
    } 
    console.log(this.state.text, "text in submit");
    var text = this.state.text;
    var title = this.state.title;
    this.setState({
      text: '',
      title: '',
      showBlogInput: false
    })
    var self = this;
    axios.post("/api/blogs", {text : text, title: title })
    .then(res => {
      console.log(res);
      console.log(res.data);
      self.setState({
        blogs: [...this.state.blogs, res.data]
      })
      console.log(this.state.blogs);
  });


  }



    
  render() {
    return (
      <div className="Blog">
      

        <div className="Body">

          <div className="header">
          <h1 className="App-title">Mom's Intuition</h1>
           
            <p className="App-intro">
          Blog </p>
          </div>
          {
            this.state.showBlogInput ?
            <div>
            <input id="input" name="title" onChange={this.handleInputChange} placeholder="Title"/>
         
            <textarea placeholder="Comment" name="text" onChange={this.handleInputChange} className="form-control" rows="5" id="comment"></textarea>
        
          <button onClick={this.handleFormSubmit}>submit</button>
          </div>
          :

          <button onClick={this.createPost}>Create Post</button>

          }


          {
            this.state.blogs.map((e, i) => {
              return (
                <div className="blogContainer" key={i}>
                  <div className="blogTitle">{e.title}</div>
                  <div className="blogText">{ e.text}</div>
                </div>
              )
            })
          }
          
       
       
            
            </div>
       </div>
   
          

    );


  }

}

export default Blog;