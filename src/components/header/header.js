import React,{ Component } from 'react';
import { NavBar, Icon} from 'antd-mobile';


class Header extends Component{
    render(){
        return(
            <div>
                {/*<NavBar*/}
                    {/*mode='light'*/}
                    {/*icon={<Icon type={"left"}/>}*/}
                    {/*onLeftClick = {()=>console.log("返回上一级")}*/}
                {/*>*/}
                    {/*{this.props.title}*/}
                {/*</NavBar>*/}
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >{this.props.title}</NavBar>

            </div>
        )
    }
}

export default Header;