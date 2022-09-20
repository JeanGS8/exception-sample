var SystemError = /** @class */ (function () {
    function SystemError(message, type) {
        this.message = message;
        this.type = type;
    }
    return SystemError;
}());
try {
    console.log('antes do erro');
    throw new SystemError('Erro que eu mesmo gerei', 'abstrato');
    console.log('depois do erro');
}
catch (error) {
    if (error instanceof SystemError) {
        console.log("".concat(error.type, ": ").concat(error.message));
    }
    else {
        console.log("[ERROR] ".concat(error.message));
    }
}
console.log('acabou!!!');
