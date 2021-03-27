{
    // //JavaScript 😱
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }

    // //TypeScript 😆
    // function tsAdd(num1:number, num2:number):number{
    //     return num1 + num2
    // }

    // //-----------------------------------------------------

    // //JavaScript 😱
    // function jsFetchNum(id) {
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     })
    // }

    // //TypeScript 😆
    // function tsFetchNum(id:string):Promise<number>{
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject)=> {
    //         resolve(100);
    //     })
    // }

    //JavaScript ✨ => TypeScript 
    // Optional parameter (전달 할 인자를 자유롭게 조절 할 수 있음)
    function printName(firstName:string, lastName?: string){
        console.log(firstName);
        console.log(lastName);
    }

    // printName('Ethan', 'Kwon'); 
    // printName('Ethan'); 
    // printName('Anna');

    // Default parameter
    function printMessage(message :string = 'default message') {
        console.log(message);
    }

    // printMessage();

    // Rest parameter (모든 인자를 같은 타입으로 제한 없이 받을 수 있음)

    function addNumber(...numbers: number[] ):number{
        return numbers.reduce((a,b) => a+b);
    }

    console.log(addNumber(1,2));
    console.log(addNumber(1,2,3,4));
    console.log(addNumber(1,2,3,4,5,6));

}