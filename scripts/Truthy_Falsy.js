const x = undefined;
//False: 0, undefined, null, ''


console.log(!!x);

const list = [];

const object = {};

console.log(!!list);
console.log(!!object)

if (list.length > 0) {
    console.log(list)
}