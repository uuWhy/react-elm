import React,{ Component } from 'react';
import {connect} from 'react-redux';
import Headersmart from './header';


class Index extends Component{

    render(){
        return(
            <div>
                <Headersmart/>
            </div>
        )
    }
}


export default Index;