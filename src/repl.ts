export function cleanInput(input:string):string[]{
    return input.trim().toLowerCase().split(/\s{1,}/);
}
1
console.log(cleanInput("  Hello  World  "));