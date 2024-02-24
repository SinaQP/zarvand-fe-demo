export function separateByThree(number: number): string {
    // Convert number to string
    let numStr: string = number.toString();
    
    // Split the string into groups of three digits
    let separated: string[] = [];
    for (let i: number = numStr.length; i > 0; i -= 3) {
        separated.unshift(numStr.substring(Math.max(0, i - 3), i));
    }
    
    // Join the groups with dots
    return separated.join('.');
}