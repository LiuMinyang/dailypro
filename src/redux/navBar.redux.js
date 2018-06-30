import axios from 'axios';
const GETNAVSUCESS = 'GETNAVSUCESS';//请求成功
const GETNAVERRMSG = 'GETNAVERRMSG';//错误信息处理

const initState = {
    msg:''
}

export function nav(state=initState,action){
    switch(action.type){
        case GETNAVSUCESS:
        return {...state,...action.payload,msg:'请求成功'}
        case GETNAVERRMSG:
        return{...state,msg:action.msg,redirectTo:false}
        default:
        return state;
    }
}

function getNavErrMsg(data){
    return {type:GETNAVSUCESS,payload:data};
}

function getNavSucess(data){
    return {type:GETNAVSUCESS,payload:data};
}

export function getNavBar(){
    return dispatch=>{
        axios.get('/nav/getNavBar',{}).then(res=>{
            if(res.status==200&&res.data.code==0){
               dispatch(getNavSucess(res.data))
            }else{
                dispatch(getNavErrMsg(res.data.msg))
            }
          })
    }
}