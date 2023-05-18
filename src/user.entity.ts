
export type User = {
    user_id: number;
    user_name: string;
    request: number;
    tariff: UserTariff
}

// export type UserTariff = 'free' | 'start' | 'premium' | 'ultimate'

export type UserTariff = {
    name: string;
    price: number;
    description: string;
}

export const tariffs: UserTariff[] = [
    { name: 'free', price: 0, description: ''},
    { name: 'start', price: 5, description: ''},
    { name: 'premium', price: 10, description: ''},
    { name: 'ultimate', price: 15, description: ''},
]