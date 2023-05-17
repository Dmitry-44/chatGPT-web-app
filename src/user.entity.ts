
export type User = {
    user_id: number;
    user_name: string;
    request: number;
    tariff: UserTariff
}

export enum UserTariff {
    free = 'бесплатный'
}