import React, { Component } from "react"
import axios from "axios"
import '../../Assets/CSS/AddPost.css'

class AddPost extends Component{
    constructor()
    {
        super()
        this.state={
            postAuthor:"",
            postTitle:"",
            postDate:"",
            postCategory:"",
            postContent:"",
            postLocationState:"",
            postLocationCity:"",
            postlikes:"10"
        }
    }

    handleChange=(e)=> {
      e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);
    
     this.setState({ [name]: value });
    }

    onsubmithandle= async()=>{
      const {postAuthor,postTitle,postDate,postCategory,postContent,postLocationState,postLocationCity}=this.state;
      let data ={
        posttitle:postTitle,
        postauthor:postAuthor,
        postdate:postDate,
        postcategory:postCategory,
        poststate:postLocationState,
        postcity:postLocationCity,
        postcontent:postContent
      }

      const res = await axios.post("http://localhost:4000/posts",data) 
      if(res.statusText==="Created"){
        alert("Post Added")
      }else{ alert("Error")}
     
      

    }

    render(){

      // console.log(this.state.postAuthor,this.state.postTitle,this.state.postDate,this.state.postContent,
      //   this.state.postCategory,this.state.postLocationState,this.state.postLocationCity,this.state.postlikes);
      
        return(
            <div className="addpostcontainer">
                <div className="addposttitle">Add Post</div>
                <hr></hr><hr></hr>
                <div className="addpostform">
                <form>
                <div class="form-group">
                 <label>Posting Author</label>
                 <input type="Text" name="postAuthor" class="form-control" placeholder="Posting By" onChange={this.handleChange} /></div>
                 <div class="form-group">
                 <label>Posting Date</label>
                 <input type="Text" name="postDate" class="form-control" placeholder="dd/mm/yyyy" onChange={this.handleChange}/></div>
                 <div class="form-group">
                 <label>Post Title</label>
                 <input type="Text" name="postTitle" class="form-control" placeholder="Post Title" onChange={this.handleChange}/></div>
                 <div class="form-group">
                 <label>Post State</label>
                 <input type="Text" name="postLocationState" class="form-control" placeholder="Post State" onChange={this.handleChange} /></div>
                 <div class="form-group">
                 <label>Post City</label>
                 <input type="Text" name="postLocationCity" class="form-control" placeholder="Post City" onChange={this.handleChange}/></div>
  <div class="form-group">
    <label>Post Category</label>
    <select class="form-control" name="postCategory" onChange={this.handleChange}>
      <option>IT</option><option>HR</option><option>BPO</option><option>Non Tech</option><option>Office Boy</option>
    </select>
  </div>
  <div class="form-group">
    <label>Post Content</label>
    <textarea class="form-control" rows="3" name="postContent" onChange={this.handleChange}></textarea>
  </div>
</form>
                </div>
                <div className="addpostbutton">
                    <button onClick={this.onsubmithandle} style={{width:"50%",height:"40px",marginLeft:"25%",backgroundColor:"lightblue"}}>Submit Post</button>
                    </div>
            </div>
        )
    }
}

export default AddPost;