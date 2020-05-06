import React, { Component } from 'react'
import AddPost from './AddPost'
import '../../Assets/CSS/AdminPortal.css'
import AdminPost from './AdminPost'
import { withRouter } from 'react-router'


class AdminPortal extends Component{
    constructor()
    {
        super()
        this.state={
            flag:false,
            content:""
        }
    }

    changecontenthandle=(param)=>{
        this.setState({flag:true,content:param})
    }

    adminLogoutHandle=()=>{
        localStorage.setItem("Adminlogin", "False")
        // this.setState({loginFlag:"false"})
        this.props.history.push('/');
    }

    render(){
        let portalcontent = <AdminPost/>
        if(this.state.flag)
        {
            if(this.state.content==="All Post"){portalcontent = <AdminPost/>}
            else if(this.state.content==="Add New Post"){portalcontent = <AddPost/>}
        }

        return(
            <div className="adminportalcontainer">
                <div className="leftsidebar">
                    <div><button onClick={()=>this.changecontenthandle("All Post")} style={{marginLeft:"5%",marginTop:"5%",marginBottom:"3%"}}>All Post</button></div>
                    <div><button onClick={()=>this.changecontenthandle("Add New Post")}  style={{marginLeft:"5%",marginTop:"5%",marginBottom:"3%"}}>Add New Post</button></div> 
                    <div><button onClick={this.adminLogoutHandle} style={{marginLeft:"5%",marginTop:"5%",marginBottom:"3%"}}>Admin Logout</button></div>
                    </div>
                <div className="contentcontainer">{portalcontent}</div>
            </div> 
        )
    }
}

export default withRouter(AdminPortal)