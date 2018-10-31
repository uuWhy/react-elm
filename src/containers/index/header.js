import React, { Component } from 'react';
import { weather, address} from '../../data/data';


class Headersmart extends Component{
    constructor(){
        super();
        this.state={
            temperature:'',
            description:'',
            image_hash:'',
            address:'',
        }
    }

    componentWillMount(){
        this.setState({
            temperature:weather.temperature,
            description:weather.description,
            image_hash:weather.image_hash,
            address:address.address,
        })
    }

    render(){
        return(
            <div>header</div>
        )
    }
}

export default Headersmart;