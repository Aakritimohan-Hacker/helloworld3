import React, { Component } from 'react';

class Auth extends Component {
    constructor()
    {
        super()
        this.state={
            isRegister:false
        }
    }
    login()
    {
        console.warn("state",this.state);
       // alert("login");
       fetch('https://dev.dashontech.com/login/username',{
           method:"POST",
           headers:{
               "Accept":"application/json",
               "Content-Type":"application/json",
           },
           body:JSON.stringify(this.state)
       }).then((result)=>{result.json().then((resp)=>{
                console.log(resp);
                if(resp)
                {
                    console.log("yoo what am i doing ");
                }
                localStorage.setItem("auth",JSON.stringify(resp.token))

       })})
    }

    register()
    {
        console.warn("state",this.state);
       // alert("login");
       fetch('https://dev.dashontech.com/login/username',{
           method:"POST",
           headers:{
               "Accept":"application/json",
               "Content-Type":"application/json",
           },
           body:JSON.stringify(this.state)
       }).then((result)=>{result.json().then((resp)=>{
                console.log(resp);
                localStorage.setItem("auth",JSON.stringify(resp.token))
       })})
    }
    render(){
        return (
            <div>
                {
                this.state.isRegister ?
                <div>
                 <input type="text" onChange={(e)=>{this.setState({username:e.target.value})}}/><br/><br/>
                 <input type="text" onChange={(e)=>{this.setState({password:e.target.value})}}/><br/><br/>
                 <button onClick={()=>this.login()}>Login</button>
                 <button onClick={()=>this.setState({isRegister: true})}>Go to register</button>
               </div>
                 :
               <div>
               <input type="text" onChange={(e)=>{this.setState({username:e.target.value})}}/><br/><br/>
               <input type="text" onChange={(e)=>{this.setState({password:e.target.value})}}/><br/><br/>
               <button onClick={()=>this.register()}>Register</button>
               <button onClick={()=>this.setState({isRegister:false})}>go to login</button>
               </div>

                }
            </div>
        );
    }
}
export default Auth;