<script setup lang="ts">
import Modal from './Modal.vue';
import Loader from './Loader.vue';
import { tariffs, UserTariff } from '../user.entity';
import { nextTick, ref, Ref } from 'vue';
import { buyTariff } from '../user.service';
import { Tg } from '../main';

const activeTariff: Ref<UserTariff|null> =ref(null)
const modal:Ref<typeof Modal|null> = ref(null)
const loading = ref(false)
const user = Tg.initDataUnsafe?.user
const payLink: Ref<string> = ref('')


const selectTariff = async(tarifName: UserTariff['name']) => {
    activeTariff.value=tariffs.find(tarif=>tarif.name===tarifName)||null
    if(modal.value){
        modal.value['open']()
    }
    loading.value=true
    payLink.value = await buyTariff(user, activeTariff.value!).finally(()=>{loading.value=false})
}

const modalClose = ()=> {
    nextTick(()=>{
        payLink.value=''
    })
}

</script>
<template>
    <!-- <p>user: {{ user }}</p> -->
    <button 
        :key="tariff.name" 
        v-for="tariff in tariffs.filter(t=>t.price>0)" 
        class="btn__simple btn__tariff"
        :title="`Открыть описание тарифа ${tariff.name}`"
        @click="selectTariff(tariff.name)" 
        >
        <span class="tariff__name">{{ tariff.name }} {{ tariff.price }}$</span>
        <span>Описание преимуществ</span>
    </button>
    <a href="/" class="btn__simple btn__nav btn__back">Назад <img src="/src/assets/back_icon.svg" alt=""></a>
    <Modal ref="modal" @close="modalClose">
        <template v-slot:body>
            <div class="tariff__info">
                <span class="tariff__name">Тариф: {{ activeTariff?.name }}</span>
                <span class="tariff__descr">{{ activeTariff?.description }}</span>
                <Loader v-if="loading" />
                <a v-if="!loading&&payLink" class="btn__buy" :href="payLink" title="ссылка на страницу оплаты">
                    Купить
                </a>
            </div>
        </template>
    </Modal>
</template>

<style >
.btn__tariff {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #999;
    background: linear-gradient(to bottom, #ccc, #999);
    margin-bottom: .5rem;
    color: #fff;
    width: min(100%, 400px);
}

.tariff__name{
    font-weight: 700;
    font-size: 20px;
    margin-bottom: .5rem;
}
.btn__back {
    width: -webkit-fill-available;
    max-width: 400px;
    margin-top: 1rem;
}
.tariff__info {
    display: flex;
    flex-direction: column;
}
.tariff__descr{
    margin: .5rem 0 1rem 0;
}
.btn__buy {
    border: 1px solid currentColor;
    border-radius: 4px;
    font-size: 20px;
    font-weight: 400;
    padding: 10px;
    margin-top: .6rem;
    display: inline-flex;
    justify-content: center;
}
</style>