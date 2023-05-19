<template>
    <div class="loader">
      <div class="loader__arc"></div>
    </div>
</template>

<style>
.loader {
  position: relative;
  width: 40px;
  height: 40px;
}

.loader__arc {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border: 4px solid transparent;
  border-top-color: #0088cc;
  border-radius: 50%;
  animation: loader-rotate 1s linear infinite;
}

.loader__arc:nth-child(1) {
  animation-delay: 0s;
}

@keyframes loader-rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>