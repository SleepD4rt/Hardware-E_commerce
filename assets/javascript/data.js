const productsData = [
  {
    id: 1,
    name: " AMD Ryzen 5600G",
    bid: 193500,
    category: "Procesador",
    cardImg: "./assets/img/products/5600.jpg",
  },
  {
    id: 2,
    name: "AMD Ryzen 5600",
    bid: 210000,
    category: "Procesador",
    cardImg: "./assets/img/products/5600.jpg",
  },
  {
    id: 3,
    name: "AMD Ryzen 5600X",
    bid: 260000,
    category: "Procesador",
    cardImg: "./assets/img/products/5600.jpg",
  },
  {
    id: 4,
    name: "MSI B550 MAG TOMAHAWK",
    bid: 300000,
    category: "Placa Madre",
    cardImg: "./assets/img/products/B550Tomahawk.jpg",
  },
  {
    id: 5,
    name: "Gigabyte A320-DS3",
    bid: 95000,
    category: "Placa Madre",
    cardImg: "./assets/img/products/GA-A320-DS3.png",
  },
  {
    id: 6,
    name: "Gigabyte H610M-H",
    bid: 100000,
    category: "Placa Madre",
    cardImg: "./assets/img/products/H610M-H.jpg",
  },
  {
    id: 7,
    name: "Kingston Fury RENEGADE 8 GB 3600 Mhz DDR4",
    bid: 32700,
    category: "Memoria RAM",
    cardImg: "./assets/img/products/renegade.png",
  },
  {
    id: 8,
    name: "Crucial 2666 Mhz 8 GB 2666 Mhz",
    bid: 18600,
    category: "Memoria RAM",
    cardImg: "./assets/img/products/CRUCIALRAM.jpg",
  },
  {
    id: 9,
    name: "GEIL ORION DDR4 8 GB 3200 Mhz ",
    bid: 60200,
    category: "Memoria RAM",
    cardImg: "./assets/img/products/orion.png",
  },
  {
    id: 10,
    name: "SSD Kingston A400 240 GB",
    bid: 23100,
    category: "Almacenamiento",
    cardImg: "./assets/img/products/a400-240.jpg",
  },
  {
    id: 11,
    name: "SSD M.2 NVMe Kingston Renegade 1 TB ",
    bid: 166500,
    category: "Almacenamiento",
    cardImg: "./assets/img/products/nvme-renegade.jpg",
  },
  {
    id: 12,
    name: "HDD Western Digital Blue 1 TB",
    bid: 76000,
    category: "Almacenamiento",
    cardImg: "./assets/img/products/WDBlueHDD.jpg",
  },
  {
    id: 13,
    name: "Lenovo IdeaPad 15ARE05 ",
    bid: 550000,
    category: "Notebook",
    cardImg: "./assets/img/products/ideapad.webp",
  },
  {
    id: 14,
    name: "ASUS TUF Gaming F15",
    bid: 950000,
    category: "Notebook",
    cardImg: "./assets/img/products/asustuf.jpg",
  },
  {
    id: 15,
    name: "Bangho MAX PRO L5 I7",
    bid: 700000,
    category: "Notebook",
    cardImg: "./assets/img/products/bangho.jpg",
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
  products: DivideProductsInParts(15),
  currentProductsIndex: 0,
  productsLimit: DivideProductsInParts(15).length,
  activeFilter: null,
};

// categorias para data
// Procesador
// Placa Madre
// Memoria Memoria RAM
// Almacenamiento

// Funcion para convertir el valor del producto
//a su denominacion monetaria en Pesos Argentinos.
const toARG_Peso = (bid) => {
  return bid.toLocaleString("es-ar", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  });
};
