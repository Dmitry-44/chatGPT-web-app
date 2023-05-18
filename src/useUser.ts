import { Tg } from './main';
import type{ User } from './user.entity';


export function useUser() {
    const user: User = Tg.initDataUnsafe?.user?.id
    return { user }
}