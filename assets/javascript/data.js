const productsData = [
  {
    id: 1,
    name: " AMD Ryzen 5600G",
    bid: 140000,
    category: "Procesador",
    cardImg: "./assets/img/products/5600.jpg",
  },
  {
    id: 2,
    name: "AMD Ryzen 5600",
    bid: 140000,
    category: "Procesador",
    cardImg: "./assets/img/products/5600.jpg",
  },
  {
    id: 3,
    name: "AMD Ryzen 5600X",
    bid: 140000,
    category: "Procesador",
    cardImg: "./assets/img/products/5600.jpg",
  },
  {
    id: 4,
    name: "M. Schumacher",
    bid: 140000,
    category: "Placa Madre",
    cardImg: "./assets/img/products/5600.jpg",
  },
  {
    id: 5,
    name: "Fernando Alonso",
    bid: 140000,
    category: "Placa Madre",
    cardImg: "./assets/img/products/5600.jpg",
  },
  {
    id: 6,
    name: "Dominic Toretto",
    bid: 140000,
    category: "Placa Madre",
    cardImg: "./assets/img/products/5600.jpg",
  },
  {
    id: 7,
    name: "Donald Trump",
    bid: 140000,
    category: "Memoria RAM",
    cardImg: "./assets/img/products/5600.jpg",
  },
  {
    id: 8,
    name: "Xi Jinping",
    bid: 140000,
    category: "Memoria RAM",
    cardImg: "./assets/img/products/5600.jpg",
  },
  {
    id: 9,
    name: "Vladimir Putin",
    bid: 140000,
    category: "Memoria RAM",
    cardImg: "./assets/img/products/5600.jpg",
  },
  {
    id: 10,
    name: "Michael Jackson",
    bid: 140000,
    category: "Almacenamiento",
    cardImg: "./assets/img/products/5600.jpg",
  },
  {
    id: 11,
    name: "Bruno Mars",
    bid: 140000,
    category: "Almacenamiento",
    cardImg: "./assets/img/products/5600.jpg",
  },
  {
    id: 12,
    name: "Bad Bunny",
    bid: 140000,
    category: "Almacenamiento",
    cardImg: "./assets/img/products/5600.jpg",
  },
  {
    id: 13,
    name: "Keanu Reeves",
    bid: 140000,
    category: "Notebook",
    cardImg: "./assets/img/products/5600.jpg",
  },
  {
    id: 14,
    name: "Jason Stathan",
    bid: 140000,
    category: "Notebook",
    cardImg: "./assets/img/products/5600.jpg",
  },
  {
    id: 15,
    name: "Angelina Jolie",
    bid: 140000,
    category: "Notebook",
    cardImg: "./assets/img/products/5600.jpg",
  },
];

// Funcion para dividir el array en X cantidad de arrays
const DivideProductsInParts = (size) => {
  let productList = [];

  for (let i = 0; i < productsData.length; i += size) {
    productList.push(productsData.slice(i, i + size));
  }
  return productList;
};

// Appstate
const appState = {
  products: DivideProductsInParts(12),
  currentProductsIndex: 0,
  productsLimit: DivideProductsInParts(12).length,
  activeFilter: null,
};

// categorias para data
// Procesador
// Placa Madre
// Memoria Memoria RAM
// Almacenamiento
// Almacenamiento
// Teclados
// Mouse
// Impresoras
// Notebooks

// Funcion para convertir el valor del producto
//a su denominacion monetaria en Pesos Argentinos.
const toARG_Peso = (bid) => {
  return bid.toLocaleString("es-ar", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  });
};
