const names = ['fahim', 'shahriar', 'setu', 'fahim'];
function removeDuplicates(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        if (unique.includes(element) === false) {
            unique.push(element);
        }
        
    }
    return unique;
}
const result = removeDuplicates(names);
console.log(result);