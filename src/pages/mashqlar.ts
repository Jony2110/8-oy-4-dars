// // 1. Funksiyalar

// // Masala 1: Maxsulotni hisoblash
// type Product = {
//     name: string;
//     price: number;
//   };
  
//   function calculateTotal(products: Product[]): number {
//     return products.reduce((total, product) => total + product.price, 0);
//   }
  
//   // Misol uchun:
//   const products: Product[] = [
//     { name: "Product 1", price: 10 },
//     { name: "Product 2", price: 20 },
//     { name: "Product 3", price: 15 },
//   ];
  
//   console.log("Total Price:", calculateTotal(products));
  
//   // Masala 2: Funksiyalarda Default Parametrlar
//   function greet(name: string, message: string = "Hello"): string {
//     return `${message}, ${name}!`;
//   }
  
//   // Misol uchun:
//   console.log(greet("John")); 
//   console.log(greet("John", "Hi")); 
  
//   // 2. Generics
  
//   // Masala 1: Generics Bilan List Komponenti
//   import React from "react";
  
//   type ListProps<T> = {
//     items: T[];
//     renderItem: (item: T) => React.ReactNode;
//   };
  
//   function List<T>({ items, renderItem }: ListProps<T>) {
//     return (
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{renderItem(item)}</li>
//         ))}
//       </ul>
//     );
//   }
  
//   // Misol uchun:
//   const numbers = [1, 2, 3, 4];
  
//   function App() {
//     return (
//       <List items={numbers} renderItem={(item) => <span>{item}</span>} />
//     );
//   }
  
//   // Masala 2: Generics Bilan Funksiya
//   function findMax<T>(items: T[], compare: (a: T, b: T) => number): T | null {
//     if (items.length === 0) return null;
//     return items.reduce((max, item) => (compare(max, item) > 0 ? max : item));
//   }
  
//   // Misol uchun:
//   const maxNumber = findMax(numbers, (a, b) => a - b);
//   console.log("Max Number:", maxNumber); 
  
//   // 3. Promise
  
//   // Masala 1: Promise Bilan Ma'lumot Olish
//   function fetchData(url: string): Promise<any> {
//     return fetch(url).then(response => response.json());
//   }
  
//   // Masala 2: Promise Bilan Error Handling
//   function fetchDataWithCatch(url: string): Promise<any> {
//     return fetch(url)
//       .then(response => response.json())
//       .catch(error => {
//         console.error("Error fetching data:", error);
//         throw error;
//       });
//   }
  
//   // 4. Async/Await
  
//   // Masala 1: Async/Await Bilan Ma'lumot Olish
//   async function fetchDataAsync(url: string): Promise<any> {
//     const response = await fetch(url);
//     return await response.json();
//   }
  
//   // Masala 2: Async/Await Bilan Xatolikni Qo‘lga Kiritish
//   async function fetchDataWithErrorHandling(url: string): Promise<any> {
//     try {
//       const response = await fetch(url);
//       return await response.json();
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       throw error;
//     }
//   }
  
//   // 5. Turlarni Tekshirish
  
//   // Masala 1: Turlarni Tekshirish
//   function isString(value: any): value is string {
//     return typeof value === 'string';
//   }
  
//   function isNumber(value: any): value is number {
//     return typeof value === 'number';
//   }
  
//   // Masala 2: Turlarni Tekshirish va Qabul Qilish
//   function processValue(value: any): string {
//     if (isString(value)) {
//       return `String value: ${value}`;
//     } else if (isNumber(value)) {
//       return `Number value: ${value}`;
//     } else {
//       return "Unknown value type";
//     }
//   }
  
//   // Misol uchun:
//   console.log(processValue("Hello")); 
//   console.log(processValue(123)); 
//   console.log(processValue(true)); 
  