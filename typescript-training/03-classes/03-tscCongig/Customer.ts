class Customer{
    private _firstName: string;
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    private _lastName: string;
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

    constructor(theFirst:string,theLast:string){
        this._firstName=theFirst;
        this._lastName=theLast;
    }

}

    let myCustomer=new Customer("Martin","Dixon");

    // myCustomer.firstName="martin";
    // myCustomer.lastName="Dixon";
    console.log(myCustomer.firstName);
    console.log(myCustomer.lastName);
    //Remember we can use "tsc --init" and bring tscconfig.json and manually set noEmitOnError and run command normally
    //without using compiler flag.
    