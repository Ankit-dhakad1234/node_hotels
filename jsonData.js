const jsonString = '{"name":"john","age":30,"city":"new york"}';
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject.name);
// we can covert json string to object and 
// also we can convert json object to string 

const objectToConvert = {
    name:"Alice",
    age:25
};

const json = JSON.stringify(objectToConvert);
console.log(json);
console.log(typeof json)