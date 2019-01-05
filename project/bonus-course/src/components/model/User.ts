export interface User {
    age: number;
    confirmPassword: string;
    country: string;
    email: string;
    hobbies: Hobby[];
    password: string;
    terms: boolean;
}

export interface Hobby {
    id: number;
    value: string;
}