const toys = [
    {
        id: 1,
        name: "Teddy Bear",
        price: 25,
        inStock: true,
        maker: "Fuzzy Bears"
    },
    {
        id: 2,
        name: "Action Figure",
        price: 40,
        inStock: true,
        maker: "Hasbro"
    },
    {
        id: 3,
        name: "Board Game",
        price: 100,
        inStock: false,
        maker: "Cool Board Game Makers"
    }
]
const legoSet = {
    id: 4,
    name: "Lego Set",
    price: 50000,
    inStock: true,
    maker: "Lego comapny"
}

const basketball = {
    id: 5,
    name: "Basketball",
    price: 10,
    inStock: false,
    maker: "Spalding"
}

toys.push(legoSet)

toys.push(basketball)

for (const toy of toys) {
    console.log(toy.name)
}