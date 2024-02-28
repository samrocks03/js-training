// clone using Object.assign
// memory

const obj = {
    k1: "vl1",
    k2: "vl2",
    k3: "vl3",
    k4: "vl4",
    k5: "vl5",
    k6: "vl6",
};

console.log(obj);
const obj2 = Object.assign({},obj);
obj2["k7"] = "vl7";
obj2["k8"] = {
    1: "hello 1",
    2: "hello 2",
    3: "hello 3",
    num: "bru 4"
}
console.log(obj2);

// Optional chaining
// console.log(obj2?.k8?.num)

// console.log("K8",obj2.k8.3)