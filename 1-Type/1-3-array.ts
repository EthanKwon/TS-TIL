{
    //Array
    const fruits:string[]= ['🍅','🍌'];
    const scores : Array<number> = [1,3,4];
    function printArray (fruits : readonly string[] ){};

    // Tuple - ❌ (사용 권장 안함) -> interface , type alias, class로 대체 가능 
    let student:[string, number];
    student = ['name', 123];
    student[0] // name
    student[1] // 123
}