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

const foamSword = {
    name: "Foam Sword",
    price: 15,
    inStock: false,
    maker: "Walmart"
}

const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId +1

    toyObject.id = idForNewToy
    toys.push(toyObject)
}

addToyToInventory(foamSword)

for (const toy of toys) {
    console.log(`Our ${toy.name} is made by ${toy.maker} and costs ${toy.price}`)
}