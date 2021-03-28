{
    /**
     * Type Aliases
     */

    type Text = string;

    const name :Text = 'Ethan';
    const address : Text = 'korea';
    type Num = number;
    type Student = {
        name : string;
        age: number;
    }
    const student : Student = {
        name: 'ethan',
        age : 12
    };
    /**
     * String Literal Types
     */

    type Name = 'name';
    let ethanName : Name;
    ethanName = 'name';

    type JSON = 'json';
    const json :JSON = 'json';

    type Boal = true;
    const isCat: Boal = true;


}