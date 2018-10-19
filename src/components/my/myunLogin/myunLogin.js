import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './myunLogin.css';

/* 登陆后 */
class AfterLogin extends Component{

}

/* 登录前 */
class BeforeLogin extends Component{
    render(){
        return(
            <Link to='/login'>
                <div className='my_unlogin'>
                    <div className='my_tx'></div>
                </div>
            </Link>
        )
    }
}


class MyunLogin extends Component {
    constructor(){
        super();
        this.state={
            isLogin:false,
            name:'',
            phone:''
        }
    }

    componentWillMount(){

    }

    render() {
        return (
            <div>
                <BeforeLogin/>
            </div>

        )
    }
}



const mapStateToProps = (state)=>{
    return{
        data:state.loginPart
    }
}

export default connect(
    mapStateToProps
)(MyunLogin)