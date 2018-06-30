import React from 'react';
import { Redirect } from 'react-dom'; 
import { Input,Form, Icon, Button, Checkbox, Divider } from 'antd';
import { Row, Col } from 'antd';
import { connect } from 'react-redux'
import { loginTo } from '../../redux/user.redux';
import PcHeader from '../../component/header/PcHeader';

class News extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <PcHeader></PcHeader>
            </div>
        )
    }
    
}

export default News;
