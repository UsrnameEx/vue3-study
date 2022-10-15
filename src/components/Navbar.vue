<template>
	<div class="navbar">
		<div>Vue 3</div>
		<div class="navbar__buttons">
			<UButton @click="$router.push('/')">Главная</UButton>
			<UButton @click="$router.push('/posts')">Посты</UButton>
			<UButton @click="$router.push('/about')">О сайте</UButton>
			<UButton @click="$router.push('/store')">Store</UButton>
			<UButton @click="$router.push('/composition')">Composition</UButton>
		</div>
	</div>
</template>

<script>
export default {
	name: "Navbar",
}
</script>

<style scoped>
.navbar {
	height: 50px;
	background-color: lightgray;
	box-shadow: 2px 2px 4px gray;
	display: flex;
	align-items: center;
	padding: 0 15px;
}

.navbar__buttons {
	margin-left: auto;
}

</style>