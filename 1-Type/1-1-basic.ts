{
    /**
     * JavaScript
     * Primitive : number, string, boolean, bigint, symbol, null, undefined
     * Object : function, array ...
     */

    // number 
    const num :number = -6;

    // string
    const str : string = 'hello';

    // boolean
    const boal:boolean = false;

    // undefined 
    let name:undefined; // ❌
    let age : number|undefined; // 보편적으로 많이 사용
    age = undefined;
    age = 1;

    // ex1. undefined function
    function find() : number | undefined {
        return undefined;
    }

    // null
    let personNull:null; //❌
    let person : string | null; // 값이 있는지 없는지 확인시 사용

    // unknown ❌ (가능한 사용하지 않도록 -> 타입을 구체적으로 표현 하는 것이 좋음)
    let notSure : unknown = 0; 
    notSure = 'he'; // ??
    notSure = true; // ??

    // any ❌ (가능한 사용하지 않도록)
    let anything: any = 0;
    anything = 'hello';

    // void (함수에서 사용 -> 변수에서 사용시 'undefined'만 할당 가능)
    function print() :void {
        console.log('hello');
        return;
    }

    //never (함수에서 return을 전혀 하지 않을 경우 사용 + 변수에서 사용하지 않음)
    function throwError(message:string):never {
        //message -> server (log)
        throw new Error(message);
        while (true) {}
    }

    //object ❌ (object 안에 어떤 타입이 들어가는지 예측할 수가 없어 자주 사용하지 않음)
    let obj: object;
    function acceptSomeObject(obj:object) {}
    acceptSomeObject({name:'ellie'});
    acceptSomeObject({number:123});







}