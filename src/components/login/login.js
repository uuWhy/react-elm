import React,{ Component } from 'react';
import { connect } from 'react-redux';
import './login.css';
import {login} from "../../reducers/dataState";


class Login extends Component{

    constructor(){
        super();
        this.state={
            userName:'',
            passWord:'',
            getYz:true,
            /*是否可以提交*/
            submit:false,
            /*是否错误*/
            iswran:false,
            /*错误信息*/
            wran:''
        }
    }

    /* 本地存储 */
    _saveLocal(obj){
        try{
            window.localStorage.setItem("isLogin",JSON.stringify(obj))
        }catch (e){
            console.log(e)
        }
    }
    render(){
        return(
            <div>
                <div className=''>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        data:state.loginPart
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        onLogin:(data)=>{
            dispatch(login(data))/* 绑定的action要在上面引用 */
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login);