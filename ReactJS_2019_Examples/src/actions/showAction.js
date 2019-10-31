export function addNumber(number){
    return{
        type:"ADD",
        payload:number
    };
}

export function subNmber(number){
    return{
        type:"SUB",
        payload:number
    }
}