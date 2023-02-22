type Photo = {
  id: number;
  path: string;
};

type productType = {
  id: number;
  name: string;
  mark: string;
  description: string;
  price: number;
  quantity: number;
  status: Status;
  seller: userType;
  category: Category;
  reviews: [Reviews];
};

export type reviewsType = {
  id: number;
  rating: number;
  review: string;
  user: userType;
  createdAt: date;
};

export type userType = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  country: string;
  address?: string;
  phone?: number;
  description?: string;
  photo?: Photo;
  status: Status;
};

type Photo = {
  id: string;
  path: string;
};

export type cartType = {
  id: number;
  user: userType;
  products: productType;
  quantity: number;
  status: Status;
};

export { productType };
