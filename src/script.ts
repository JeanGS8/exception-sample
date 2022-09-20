class SystemError{
    public message: string;
    public type: string;

    constructor(message: string, type: string){
        this.message = message;
        this.type = type;
    }
}

try{
    console.log('antes do erro')
    throw new SystemError ('Erro que eu mesmo gerei', 'abstrato');
    console.log('depois do erro');
}
catch(error){
    if(error instanceof SystemError){
        console.log(`${error.type}: ${error.message}`);
    }
    else{
        console.log(`[ERROR] ${error.message}`);
    }
}
console.log('acabou!!!');