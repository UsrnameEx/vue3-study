<template>
	<form @submit.prevent>
		<h4>Создание поста</h4>
		<UInput v-model="post.title" type="text" placeholder="Название"></UInput>
		<UInput v-model="post.description" type="text" placeholder="Описание"></UInput>
		<UButton @click="createPost" class="btn__create">Создать</UButton>
	</form>
</template>

<script>
export default {
	name: "PostForm",
	data() {
		return {
			post: {
				title: '',
				description: ''
			}
		}
	},
	
	methods: {
		createPost() {
			this.post.id = Date.now();
			
			this.$emit('create', this.post);
			
			this.post = {
				title: '',
				description: ''
			}
		}
	}
}
</script>

<style scoped>
form {
	display: flex;
	flex-direction: column;
}

.btn__create {
	align-self: flex-end;
	margin-top: 15px;
}

</style>