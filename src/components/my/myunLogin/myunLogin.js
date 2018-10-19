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
                <div className={''}>

                </div>
            </Link>
        )
    }
}