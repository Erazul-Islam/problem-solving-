// problem 4

const car = [
    {
        make : 'Honda',
        model : 'F3',
        year : 1980
    },
    {
        make : 'Volvo',
        model : 'X3',
        year : 1880
    },
    {
        make : 'Toyota',
        model : 'T3',
        year : 2023
    },
    {
        make : 'Mercedes',
        model : 'm4',
        year : 1770
    }
]

const sortFunction = (info) => {
    const data = info.sort((a,b) => a.year - b.year)

    return data
}

console.log(sortFunction(car))