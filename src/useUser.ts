import { Ref, ref } from 'vue';
import { Tg } from './main';
import { Api } from './services/Api';
import { User } from './user.entity';


const user: Ref<User|null> = ref(null)

export const fetchUser = async() => {
   user.value = await Api.getUser(Tg.initDataUnsafe?.user?.id ||  parseInt(import.meta.env.VITE_TEST_USER_ID, 10))
}

export const useUser = () => {
    return {
        user: user
    }
}