<template>
	<div class="post">
		<div class="post__info">
			<div><strong>Название:</strong> {{ post.title }}</div>
			<div><strong>Описание:</strong> {{ post.description }}</div>
		</div>
		
		<div class="post__buttons">
			<UButton @click="$emit('remove', post.id)">Удалить</UButton>
		</div>
	</div>
</template>

<script>
import UButton from "@/components/UI/UButton";
export default {
	name: "PostItem",
	components: {UButton},
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
</style>