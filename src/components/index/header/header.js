import React,{ Component } from 'react';

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
            <div>Header</div>
        )
    }
}
export default Header;