import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Zapatillas Urbanas",
    description: "Zapatillas casuales de cuero sintético",
    price: 45000,
    stock: 12,
    category: "Calzado",
    imgUrl: "https://picsum.photos/seed/1/300/300",
  },
  {
    id: 2,
    name: "Campera Impermeable",
    description: "Campera con capucha, resistente al agua",
    price: 68000,
    stock: 5,
    category: "Ropa",
    imgUrl: "https://picsum.photos/seed/2/300/300",
  },
  {
    id: 3,
    name: "Mochila Urbana",
    description: "Mochila con compartimento acolchado para notebook",
    price: 39000,
    stock: 20,
    category: "Accesorios",
    imgUrl: "https://picsum.photos/seed/3/300/300",
  },
];