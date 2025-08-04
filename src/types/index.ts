export interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
    role: 'user' | 'admin';
    projects: Project[];
    createdAt: Date;
};

export interface Project {
    _id: string;
    title: string;
    description: string;
    price: number;
    images: string[];
    category: string;
    userId: string;
    createdAt: Date;
}

export interface Product {
    _id: string,
    name: string,
    description: string,
    price: number,
    images: string[],
    category: string,
    stock: number,
    createdAt: Date
};

export interface CartItem {
    product: Product;
    quantity: number;
};



export interface Order {
    _id: string;
    userId: string;
    items: CartItem[];
    totalAmount: number;
    status: 'pending' | 'paid' | 'shipped' | 'delivered';
    razorpayOrderId?: string;
    azorpayPaymentId?: string;
    createdAt: Date;
}