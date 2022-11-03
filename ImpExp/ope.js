const add =(num1,num2)=>{    //hear add() is heaving private scope
    return num1 + num2;
};

const sub =(num1,num2) =>{
    return num1 - num2;
}

const mul =(num1,num2) =>{
    return num1 * num2;
}

const div =(num1,num2) =>{
    return num1 / num2;
}

module.exports = {add:add,sub:sub,mul:mul,div:div} // now the scope is Public