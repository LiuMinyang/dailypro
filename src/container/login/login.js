import React from 'react';
import { Redirect } from 'react-dom'; 
import { Input,Form, Icon, Button, Checkbox, Divider } from 'antd';
import { Row, Col } from 'antd';
import { connect } from 'react-redux'
import { loginTo } from '../../redux/user.redux';
import './login.css';

const FormItem = Form.Item;

@connect(
    state=>state.user,
    { loginTo }
)

class LoginForm extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         username:'',
    //         password:'',
    //         redirectTo:''
    //     }
    // }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            // console.log('Received values of form: ', values);
              const username = values.userName;
              const password = values.password;
              const remember = values.remember;
              this.props.loginTo({username,password})
            
          }
        });
      }
    render(){
        this.props.redirectTo==='/dashboard'?this.props.history.push('./dashboard'):null;
        const { getFieldDecorator } = this.props.form;
        let msg = this.props.msg;
        console.log(msg)
        return(
            
            <div>
                 <Row id="loginBox">
                    <Col id='titleH' span={8} offset={8}>
                        <h1>陌上蓝枫梦的个人项目</h1>
                    </Col>
                    <Col span={8} offset={8}><Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                    {getFieldDecorator('userName', {
                        // rules: [{ required: true, message:'请输入用户名' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                    )}
                    </FormItem>
                    <FormItem  extra={this.props.msg}>
                    {getFieldDecorator('password', {    
                        // rules: [{ required: true, message:'请输入密码' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                    )}
                    </FormItem>
                    <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>记住密码</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">忘记密码</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
                    </Button>
                    <a href="">注册</a>
                    </FormItem>
                </Form></Col>
            </Row> 
            </div>
        )
    }
}

const Login = Form.create()(LoginForm);

export default Login;