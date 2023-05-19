import { Api } from "./services/Api"
import { User, UserTariff } from "./user.entity"


export const UpgradeTariff = () => {
    return 
}

export const buyTariff = async (user: any, tariff: UserTariff) => {
    return Api.getPayLink(user.id, tariff.id)
}