export const addTodo=(num)=>{
    return {
        type:"INCREMENT",
        num:num,
    }
}
export const decTodo=(num)=>{
    return {
        type:"DECRMENT",
        num:num
    }
}

export const updateText=(text)=>{
    return {
        type:"TEXT_UPDATE"
        ,text:text
    }
}