import { Tg } from './main';

export function useTgUser() {
    const user: any = Tg.initDataUnsafe?.user
    console.log('useTgUser Tg', Tg)
    return { tgUser: user }
}