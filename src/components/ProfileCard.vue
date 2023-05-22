<script setup lang="ts">
import { computed, onBeforeMount, onMounted, Ref, ref } from 'vue';
import { Tg } from '../main';
import { Api } from '../services/Api';
import { User } from '../user.entity';

	let userInit = Tg.initDataUnsafe.user

	const user:Ref<User|null> = ref(null)

	const userName = computed(()=>userInit ? userInit?.first_name+' '+userInit?.last_name : null)

	onBeforeMount(async()=> {
		//test id 6189180632
		const userId = Tg.initDataUnsafe?.user?.id
		user.value = await Api.getUser(userId)
	})

</script>

<template>
	<div class="profile__card">
		<!-- <p>юзер с кнопки {{ userInit }}</p> -->
		<div class="header">
			<img :src="userInit?.photo_url || 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/5d62c5f2-2855-434e-b949-26deffd73d2e/600x900'" alt="фотография пользователя" class="profile__avatar">
			<h4 class="profile__username">{{ userName || userInit?.username }}</h4>
		</div>
		<div class="info">
			<div class="d-flex">
				<span class="key">Тип подписки:</span>
				<span class="value">{{ user?.tariff || 'FREE' }}</span>
			</div>
			<div class="d-flex">
				<span class="key">Осталось запросов:</span>
				<span class="value">{{ user?.request || '-' }}</span>
			</div>
			<div class="d-flex">
				<span class="key">Осталось изображений:</span>
				<span class="value">{{ '-' }}</span>
			</div>
		</div>

	</div>
	<div class="actions">
		<a href="/tariff" class="btn__simple btn__nav">Посмотреть тарифы <img src="/src/assets/eye_icon.svg" alt=""></a>
	</div>
</template>

<style>
.profile__card {
	/* background-color: var(--tg-theme-bg-color, #fff) */
}
.header {
	display: flex;
}
.profile__avatar {
  border-radius: 50%;
  width: 100px; 
  height: 100px;
  margin-right: 16px;
  object-fit: cover;
}
.profile__card .info {
	margin: 1rem 0;
}
.profile__username {
	font-size: 22px;
}
.actions {
	margin-top: 5rem;
	width: 100%;
	display: flex;
	flex-direction: column;
}
.actions button {
	width: min(100%, 300px);
	margin: .5rem auto;
}

/* для больших устройств ширина и высота аватарки увеличится */
@media (min-width: 768px) {
  .profile__avatar {
    width: 150px; /* большое устройство размер */
    height: 150px; /* большое устройство размер */
  }
} 

.username {
  font-size: 24px; /* mobile размер */
  /* остальные css свойства */
}

/* для больших устройств размер имени пользователя увеличится */
@media (min-width: 768px) {
  .username {
    font-size: 32px;
  }
}

</style>