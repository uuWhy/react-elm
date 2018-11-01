import React,{ Component } from 'react';
import './header.css';

class Header extends Component{
    constructor(){
        super();
        this.state={
            temperature:'',
            description:'',
            image_hash:'',
            address:'',
            getAddress:false
        }
    }

    componentWillMount(){
        /* 判断地理位置和天气存在 */
        if(this.props.data){
            let data = this.props.data;
            this.setState(data);
        }
    }


    render(){
        return(
            <header className='index_header'>
                <div className='header_title'>
                    <div className='index-address' >
                        <span className='address_icon'></span>
                        <span className="index-word">{this.state.address}</span>
                        <i className='sj'></i>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;