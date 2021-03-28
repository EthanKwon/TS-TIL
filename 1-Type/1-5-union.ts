{
    /**
     *  Union Types : OR
     */

    type Direction = 'left' | 'right' | 'up' | 'down';
    function move (direction : Direction) {
        console.log(direction);
    }
    move('left'); 

    type TileSize = 8 | 16 | 32;
    const tile: TileSize  = 16;

    //function : login -> success, fail

    type LoginResult = 'Success' | 'Fail';
    type LoginInfo = {
        id : string,
        password : string,
    }

    type SuccessState = {
        response: {
            body : string;
        }
    }

    type FailState = {
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
                response : {
                    body: 'logged in!'
                }
            }
        } else {
            return {
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
        if('response' in state){
            console.log(`🎉 you are ${state.response.body}`);
        } else {
            console.log(`😭 you are ${state.reason}`);
        }
    }

}