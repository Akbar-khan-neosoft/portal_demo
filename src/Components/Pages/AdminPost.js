import React, { Component } from 'react'
import axios from 'axios'
import "../../Assets/CSS/AdminPost.css"

class AdminPost extends Component{
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

   async deletehandle(param){
    const res = await axios.delete("http://localhost:4000/posts/"+ param)
    if(res.status=="200")
    {
        alert("Post Deleted")
        const r = await axios.get("http://localhost:4000/posts")
        this.setState({postData:r.data})
    }    
   
    
   }

    render(){
        // console.log("aaa",this.state.postData);
         
        return(
            <div postcontainer>
                    {this.state.postData.length === 0 ? <div><h1>No Post Available,Kindly Add a post</h1></div> : this.state.postData.map(res=>{
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
                        <div className="postdeletebutton"><button onClick={()=>this.deletehandle(res.id)} style={{marginLeft:"2%"}}>Delete</button></div>
                            </div>
                           
                        )
                    })}
                </div>
            
        )
    }
}

export default AdminPost