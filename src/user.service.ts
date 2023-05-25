import { Api } from "./services/Api"
import { store } from "./store"
import { User, UserTariff } from "./user.entity"


export const getUser = async(id: number) => {
    const user = await Api.getUser(id)
    if(user)
    store.setUser(user)
}

export const buyTariff = async (user: User, tariff: UserTariff) => {
    return Api.getPayLink(user.user_id, tariff.id)
}