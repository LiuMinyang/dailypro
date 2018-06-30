import React from 'react';
import { Layout, Menu} from 'antd';
import { connect } from 'react-redux'
import { getNavBar } from '../../redux/navBar.redux';

const { Header } = Layout;

@connect(
    state=>state.nav,
    { getNavBar }
)
class PcHeader extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.getNavBar();
    }

    render(){
        let navList = [];
         navList = this.props.data;
        // console.log(navList)
        return(
            <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
            
           {
               navList?navList.map(v=>(
                    <Menu.Item key={v}>{v}</Menu.Item>
                )):null
            }
              {/* <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item> */}
            </Menu>
          </Header>
        )
    }
}

export default PcHeader;