import React, { Component } from 'react'
import axios from 'axios'
import "../../Assets/CSS/Post.css"

class Post extends Component{
    constructor(){
        super()
        this.state={
            postData:[]
        }
    }

    async componentDidMount(){
        const res = await axios.get("http://localhost:4000/posts")
        this.setState({postData:res.data})
        console.log(res.data);
        
    }

    applyHandle=()=>{
        alert("successfully Applied")
    }    
   
    
   

    render(){
              
        return(
            <div className="postcontainer">
                <div className="title"><h1>Post</h1></div>
                    {this.state.postData.length === 0 ? <div><h1>No Post Available</h1></div> : this.state.postData.map(res=>{
                        return(
                            <div className="post">
                                <div className="posttitle"><u>{res.posttitle}</u></div>
                                <div className="postotherdata">
                                    <span>Date Posted : {res.postdate}</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span>Post category : {res.postcategory}</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span>City : {res.postcity}</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span>State : {res.poststate}</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span>Posted By : {res.postauthor}</span>
                                    </div>
                        <div className="postcontent">{res.postcontent}</div>
                        <div className="postapplybottom"><button onClick={this.applyHandle} style={{marginLeft:"2%"}}>Apply</button></div>
                            </div>
                           
                        )
                    })}
                </div>
            
        )
    }
}

export default Post