const userInfo = [
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


const updateFunction = (info,name,age) => {
        const findUser = info.find(user => user.name === name)

        if(findUser){
            findUser.age = age
        }else {
            console.log(`${name} is not found`)
        }

        return findUser
}

console.log(updateFunction(userInfo,"Taosif",22))