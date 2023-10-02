function filterBy(arr, typeExclude) {
    return arr.filter(value => typeof value !== typeExclude);
}

console.log(filterBy(['hello', 'world', 23, '23', null], 'string'));