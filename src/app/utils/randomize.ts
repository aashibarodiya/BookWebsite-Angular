
export function randomize<T>(array:T[]):T[]{
    var input=[...array];
    var result:T[]=[];

    while(input.length){
        var index=Math.floor( Math.random()*input.length);
        var item=input[index];
        result.push(item);
        input.splice(index,1); //remove from the input
    }

    return result;

}