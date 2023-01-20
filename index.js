const standardizeInput = function(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
};

const myEach = function(collection, callback) {
    let newCollection = standardizeInput(collection);

    for (let index = 0; index < newCollection.length; index++) {
        callback(newCollection[index]);
    };
    return collection;
};

const myMap = function(collection, callback) {
    let newCollection = standardizeInput(collection);

    const newArr = [];

    for (let index = 0; index < newCollection.length; index++) {
        newArr.push(callback(newCollection[index]));
    };
    return newArr;
};

const myReduce = function(collection, callback, acc) {
    let newCollection = standardizeInput(collection);

    if (!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
    };

    const len = newCollection.length;

    for (let i = 0; i < len; i++) {
        acc = callback(acc, newCollection[i], newCollection);
    };
    return acc;
};

const myFind = function(collection, predicate) {
    let newCollection = standardizeInput(collection);

    for (let index = 0; index < newCollection.length; index++) {
        if (predicate(newCollection[index])) return newCollection[index];
    };
    return undefined;
};

const myFilter = function(collection, predicate) {
    let newCollection = standardizeInput(collection);

    const newArr = [];

    for (let index = 0; index < newCollection.length; index++) {
        if (predicate(newCollection[index])) newArr.push(newCollection[index]);
    };
    return newArr;
};

const mySize = function(collection) {
    const newCollection = standardizeInput(collection);
    return newCollection.length;
};

const myFirst = function(arr, stop=false) {
    return (stop) ? arr.slice(0, stop) : arr[0];
};

const myLast = function(arr, start=false) {
    return (start) ? arr.slice(arr.length-start, arr.length) : arr[arr.length-1];
};

const myKeys = function(object) {
    const keys = [];
    for (let key in object) {
        keys.push(key);
    };
    return keys;
};

const myValues = function(object) {
    const values = [];
    for (let key in object) {
        values.push(object[key]);
    };
    return values;
};