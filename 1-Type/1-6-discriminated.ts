{
    //function : login -> success, fail

    type LoginResult = 'Success' | 'Fail';
    type LoginInfo = {
        id : string,
        password : string,
    }


    //SuccesssState, FailState 에서 result 프로퍼티를 이용해서 구분 할 수 있도록 한다.
    type SuccessState = {
        result: 'success';
        response: {
            body : string;
        }
    }

    type FailState = {
        result:'fail';
        reason: string;
    }

    type LoginState  = SuccessState | FailState

    function isLogin(loginInfo: LoginInfo) : LoginState {
        const info :LoginInfo = { 
            id : 'koi',
            password : '1234'
        }
        if (loginInfo.password === info.password){
            return {
                result: 'success',
                response : {
                    body: 'logged in!'
                }
            }
        } else {
            return {
                result :'fail',
                reason: 'logged fail!'
            }
        }
    }

    console.log(isLogin({id : 'koi' , password : '1234'})); // true
    console.log(isLogin({id : 'koi' , password : '12345'})); // false 


    // printLoginState(state)
    // success -> 🎉 + body
    // fail -> 😭 + reason 

    function printLoginState(state:LoginState): void{
        if(state.result === 'success'){
            console.log(`🎉 you are ${state.response.body}`);
        } else {
            console.log(`😭 you are ${state.reason}`);
        }
    }
}