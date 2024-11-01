// problem 2

const book = [
    {
        title : 'Hundred',
        author : 'Mr. x',
        year : 1999
    },
    {
        title : 'Bindubasini',
        author : 'Bonkim chandra',
        year : 1888
    },
    {
        title : 'Bisher Bashi',
        author : 'Kazi Nazrul',
        year : 1942
    }
]

const bookFunction = (bookinfo) => {
    const bookTitle = bookinfo.map(book => book.title)

    return bookTitle
}

console.log(bookFunction(book))