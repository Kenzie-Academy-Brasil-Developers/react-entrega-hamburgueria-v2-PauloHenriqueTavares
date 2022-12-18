export interface iLoginUser {
  email: string;
  password: string;
}
export interface iDataRegister {
  name: string;
  email: string;
  password: string;
}
export interface iDataLogin {
  email: string;
  password: string;
}

export interface iUserChildrenContext {
  children: React.ReactNode;
}
export interface iProductCard {
  element: {
    category: string;
    id: number;
    img: string;
    name: string;
    price: number;
  };
}
export interface iRegisterUser {
  email: string;
  password: string;
  name: string;
}
// export interface iElement {
//   category: string;
//   id: number;
//   img: string;
//   name: string;
//   price: number;
// }
// export interface iProcuts {}
// export interface iLoginUser {
//   email: string;
//   password: string;
// }
// export interface iFilter {
//   // category: string;
//   // id: number;
//   // img: string;
//   // name: string;
//   // price: number;
// }

// export interface iDataAddCArt {
//   data: object;
//   valor: number | string;
// }
