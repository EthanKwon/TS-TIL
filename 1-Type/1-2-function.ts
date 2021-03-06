{
    // //JavaScript π±
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }

    // //TypeScript π
    // function tsAdd(num1:number, num2:number):number{
    //     return num1 + num2
    // }

    // //-----------------------------------------------------

    // //JavaScript π±
    // function jsFetchNum(id) {
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     })
    // }

    // //TypeScript π
    // function tsFetchNum(id:string):Promise<number>{
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject)=> {
    //         resolve(100);
    //     })
    // }

    //JavaScript β¨ => TypeScript 
    // Optional parameter (μ λ¬ ν  μΈμλ₯Ό μμ λ‘­κ² μ‘°μ  ν  μ μμ)
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

    // Rest parameter (λͺ¨λ  μΈμλ₯Ό κ°μ νμμΌλ‘ μ ν μμ΄ λ°μ μ μμ)

    function addNumber(...numbers: number[] ):number{
        return numbers.reduce((a,b) => a+b);
    }

    console.log(addNumber(1,2));
    console.log(addNumber(1,2,3,4));
    console.log(addNumber(1,2,3,4,5,6));

}