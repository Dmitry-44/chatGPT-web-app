<script setup lang="ts">
	const tg = window.Telegram.WebApp
	let user = tg.initDataUnsafe.user
	user = {
		first_name: 'Dmitry',
		last_name: 'Sakovich',
		photo_url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/5d62c5f2-2855-434e-b949-26deffd73d2e/600x900'
	}
</script>

<template>
	<div class="profile__card">
		<div class="header">
			<img :src="user.photo_url" alt="фотография пользователя" class="profile__avatar">
			<h4 class="profile__username">{{ user.last_name }} {{ user.first_name  }}</h4>
		</div>
		<div class="info">
			<div class="d-flex">
				<span class="key">Осталось запросов:</span>
				<span class="value">44</span>
			</div>
			<div class="d-flex">
				<span class="key">Тариф:</span>
				<span class="value">Оптимальный</span>
			</div>
		</div>
	</div>
	<div class="actions">
		<button class="btn__simple">Улучшить тариф</button>
		<button class="btn__simple">Лайфхаки по использованию</button>
		<button class="btn__simple">Реферальная программа</button>
	</div>
</template>

<style>
.profile__card {
	background-color: var(--tg-theme-bg-color, #fff)
}
.header {
	display: flex;
}
.profile__avatar {
  border-radius: 50%;
  width: 100px; /* mobile размер */
  height: 100px; /* mobile размер */
  margin-right: 16px;
  object-fit: cover;
  /* остальные css свойства */
}
.profile__card .info {
	margin: 1rem 0;
}
.actions {
	margin-top: 5rem;
	width: 100%;
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
    font-size: 32px; /* большое устройство размер */
  }
}

</style>