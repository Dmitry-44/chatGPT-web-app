<script setup lang="ts">
import { ref } from 'vue';


const isOpen = ref(false)
const emit = defineEmits(['close', 'open'])

const open = () => {
	isOpen.value=true
	emit('open')
}
const close = () => {
	isOpen.value=false
	emit('close')
}

defineExpose({
	open,
	close
})

</script>

<template>
	<div :class="['modal-overlay', {active: isOpen}]"></div>
	<div :class="['modal',  {active: isOpen}]">
		<slot name="body"></slot>
		<button class="close-modal" title="зыкрыть модальное окно" @click="close"><img src="/src/assets/close.svg" alt=""></button>
	</div>
</template>

<style>

  /* стили для затемнения страницы */
  .modal-overlay {
   position:absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0,0,0,0.3); /* полупрозрачный черный цвет */
   z-index: 1; /* размещаем на верхнем слое */
   opacity: 0;
   transition: opacity .8s;
   visibility: hidden;
  }

  /* стили для модального окна */
.modal {
	position: absolute;
	top: 50%;
	left: 50%;
	background-color: #fff;
	width: 80%;
	max-width: 720px;
	padding: 40px 20px 20px 20px;
	z-index: 2; /* размещаем на слое выше затемнения */
	transition: transform 1s cubic-bezier(0.23, 1, 0.320, 1), visibility 1s;
	transform: translate(-50%, 500px);
	visibility: hidden;
}

.modal-overlay.active{
	opacity: 1;
	visibility: visible;
}
.modal.active {
	transform: translate(-50%, -50%);
	visibility: visible;
}

/* стили для кнопки закрытия */
.close-modal {
	position: absolute;
	top: 0px;
	right: 0px;
	width: 40px;
	height: 40px;
	padding: 0;
	z-index: 3; /* размещаем на слое выше модального окна */
}

.close-modal img {
	width: 40px;
	height: 40px;
	transition: opacity 0.5;
}
.close-modal:hover img {
	opacity: .8;
}

</style>