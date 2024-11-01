// Problem 1



const array = [
    {
        name : "Tania",
        age : 20,
        gender : "female"
    },
    {
        name : "Taosif",
        age : 21,
        gender : "male"
    },
    {
        name : "Yousuf Sarkar",
        age : 80,
        gender : "male"
    },
    {
        name : "Nowmi",
        age : 25,
        gender : "female"
    }
]

const mapFunction = (info) => {
    const filteredData = info.filter(gender => gender.gender !== 'female').map(person => person.name)

    return filteredData
    
}

console.log(mapFunction(array))