const listaProductos =
    [
        {
            id: 1,
            category: "Almacenamiento",
            name: "WD 2TB Portable HDD",
            price: 64000,
            description: "External Hard Drive - USB 3.0",
            img: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
            stock: 73
        },
        {
            id: 2,
            category: "Almacenamiento",
            name: "SanDisk 1TB SSD",
            price: 109000,
            description: "Internal SSD - SATA III 6 Gb/s",
            img: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
            stock: 105
        },
        {
            id: 3,
            category: "Almacenamiento",
            name: "Silicon Power 256GB SSD",
            price: 109000,
            description: "3D NAND A55 SATA III 2.5",
            img: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
            stock: 26
        },
        {
            id: 4,
            category: "Almacenamiento",
            name: "WD 4TB Gaming Drive",
            price: 114000,
            description: "Works with Playstation 4 Portable External Hard Drive",
            img: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
            stock: 96
        },
        {
            id: 5,
            category: "Monitores",
            name: "Acer 21.5-inch Monitor",
            price: 599000,
            description: "Full HD (1920 x 1080) IPS Ultra-Thin",
            img: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
            stock: 35
        },
        {
            id: 6,
            category: "Monitores",
            name: "Samsung 49-Inch Curved Monitor",
            price: 999990,
            description: "144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
            img: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
            stock: 15
        }
    ]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(listaProductos)
        }, 200)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(listaProductos.find(prod => prod.id === productId))
        }, 200)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(listaProductos.filter(prod => prod.category === category))
        }, 200);
    })
}