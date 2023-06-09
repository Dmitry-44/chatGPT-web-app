
export type User = {
    user_id: number;
    user_name: string;
    request: number;
    tariff: UserTariff['name']
}


export type UserTariff = {
    id: number,
    name: string;
    price: number;
    description: string;
}

export const tariffs: UserTariff[] = [
    { id: 1, name: 'free', price: 0, description: ''},
    { id: 2, name: 'start', price: 5, description: 'это базовый тарифный план, который предназначен для пользователей, которые хотят пользоваться AI-сервисами нашего личного кабинета, но не планируют тратить много денег на это. За небольшую ежемесячную плату вы получаете доступ к базовым AI-функциям, таким как генерация текста, распознавание речи и обработка естественного языка.'},
    { id: 3, name: 'premium', price: 10, description: 'это промежуточный тарифный план, который подходит для пользователей, которые уже предпринимают первые шаги в области AI и хотят получить больше возможностей и функционала. В рамках этого тарифа вам доступны дополнительные функции, такие как перевод, машинное обучение и генерация голосовых сообщений.'},
    { id: 4, name: 'ultimate', price: 15, description: 'это самый продвинутый тарифный план, который предназначен для пользователей, которые работают с AI-сервисами на профессиональном уровне. В рамках этого тарифа вы получаете полный доступ к нашим продуктам и услугам, включая продвинутые AI-функции, интеграции с помощью API и обучение нашей модели на ваших данных. Кроме того, вы получаете персональную поддержку от нашей команды экспертов по AI.'},
]