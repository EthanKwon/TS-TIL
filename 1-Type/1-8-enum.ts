{
    /**
     * Enum - ❌ 타입이 보장 되지 않아 사용하지 않아 Union Type을 이용해 대체 가능
     */
    //JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENT_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({
        'MONDAY' :0,
        "TUESDAY" :1,
        "WEDNESDAY" :2,
    })

    const dayOfToday = DAYS_ENUM.MONDAY;

    //TypeScript 

    enum Days {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }
    console.log(Days.Monday);
    const day = Days.Saturday;
    console.log(day);
}