import axios from 'axios';
const LOGINSUCESS = 'LOGINSUCESS';//登录成功
const ERRMSG = 'ERRMSG';//错误信息处理

const initState = {
    msg:'',
    username:'',
    redirectTo:''
}

export function user(state=initState,action){
    switch(action.type){
        case LOGINSUCESS:
        return {...state,...action.payload,redirectTo:'/dashboard'}
        case ERRMSG:
        return{...state,msg:action.msg,redirectTo:false}
        default:
        return state;
    }
}

function LoginSucess(data){
    return {type:LOGINSUCESS,payload:data};
}

function errMsg(msg){
    return {type:ERRMSG,msg:msg};
}

export function loginTo({username,password}){
    if (!username||!password){
		return errMsg('用户名或密码必须输入！')
	}
    return dispatch=>{
        axios.post('/user/login',{username,password}).then(res=>{
            if(res.status==200&&res.data.code==0){
               dispatch(LoginSucess(res.data.data[0]))
            }else{
                dispatch(errMsg(res.data.msg))
            }
          })
    }
}