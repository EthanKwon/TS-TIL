{
    /**
     * Type Inference - 선언함과 동시에 타입이 자동으로 정의 되는 기능
     * 
     * 되도록 타입 추론 기능 보다는 타입을 기입 하도록 코드 작성
     */

    let text = 'hello';
    text = 'hi';

    function print(message : string){
        console.log(message);
    }

    print('hello');

    function add(x:number, y : number):number {
        return x + y;
    }

    const result: number = add(1,2);

}