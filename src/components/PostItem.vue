<template>
	<div class="post">
		<div class="post__info">
			<div><strong>ID:</strong> {{ post.id }}</div>
			<div><strong>Название:</strong> {{ post.title }}</div>
			<div><strong>Описание:</strong> {{ post.body }}</div>
		</div>
		
		<div class="post__buttons">
			<UButton @click="$router.push(`/posts/${post.id}`)">Открыть</UButton>
			<UButton @click="$emit('remove', post.id)">Удалить</UButton>
		</div>
	</div>
</template>

<script>
export default {
	name: "PostItem",
	props: {
		post: {
			type: Object,
			required: true
		}
	}
}
</script>

<style scoped>
.post {
	padding: 15px;
	border: 2px solid teal;
	margin-top: 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.post__buttons {
	display: flex;
}
</style>