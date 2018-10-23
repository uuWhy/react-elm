import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './myunLogin.css';

/* 登陆后 */
class AfterLogin extends Component{
    render(){
        return(
            <Link to='/login'>
                <div className='my_unlogin'>
                    <div className='my_tx'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 122" version="1.1"><path fill="#DCDCDC" fillRule="evenodd" d="M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z"/></svg>
                    </div>
                    <div className='my_unlogin_sub'>
                        <p className='my_unlogin_sub_title'>{this.props.name}</p>
                        <p className='my_unlogin_sub_more'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 655 1024" version="1.1" fill="#fff"><path d="M0 122.501v778.998C0 968.946 55.189 1024 123.268 1024h408.824c68.52 0 123.268-54.846 123.268-122.501V122.501C655.36 55.054 600.171 0 532.092 0H123.268C54.748 0 0 54.846 0 122.501zM327.68 942.08c-22.622 0-40.96-18.338-40.96-40.96s18.338-40.96 40.96-40.96 40.96 18.338 40.96 40.96-18.338 40.96-40.96 40.96zM81.92 163.84h491.52V819.2H81.92V163.84z"/></svg>
                            <span>{this.props.phone.replace(/(\d{3})(\d{4})(\d{4})/g,'$1****$3')}</span>
                        </p>
                    </div>
                    <span className='my_unlogin_go'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1" fill="#fff"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"/></svg>
                    </span>
                </div>
            </Link>
        )
    }
}

/* 登录前 */
class BeforeLogin extends Component{
    render(){
        return(
            <Link to='/login'>
                <div className='my_unlogin'>
                    <div className='my_tx'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 122" version="1.1"><path fill="#DCDCDC" fillRule="evenodd" d="M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z"/></svg>
                    </div>
                    <div className='my_unlogin_sub'>
                        <p className='my_unlogin_sub_title'>登录/注册</p>
                        <p className='my_unlogin_sub_more'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 655 1024" version="1.1" fill="#fff"><path d="M0 122.501v778.998C0 968.946 55.189 1024 123.268 1024h408.824c68.52 0 123.268-54.846 123.268-122.501V122.501C655.36 55.054 600.171 0 532.092 0H123.268C54.748 0 0 54.846 0 122.501zM327.68 942.08c-22.622 0-40.96-18.338-40.96-40.96s18.338-40.96 40.96-40.96 40.96 18.338 40.96 40.96-18.338 40.96-40.96 40.96zM81.92 163.84h491.52V819.2H81.92V163.84z"/></svg>
                            <span>登录后享受更多特权</span>
                        </p>
                    </div>
                    <span className='my_unlogin_go'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1" fill="#fff"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"/></svg>
                    </span>
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
        if(this.props.data.isLogin){
            this.setState({
                ...this.props.data
            })
        }else if(this._getLocal('islogin')){
            this.setState({
                isLogin:this._getLocal('islogin').islogin,
                name:this._getLocal('islogin').name,
                phone:this._getLocal('islogin').phone
            })
        }
    }
    _getLocal(name){
        return JSON.parse(localStorage.getItem(name))
    }
    render() {
        return (
            <div>
                <section>
                    {this.state.isLogin?<AfterLogin name={this.state.name} phone={this.state.phone}/>:<BeforeLogin/>}
                </section>
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