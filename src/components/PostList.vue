<template>
	<div v-if="posts.length > 0">
		<h3>Список постов</h3>
		<post-item
				v-for="post in posts"
				:post="post"
				:key="post.id"
				@remove="$emit('remove', post.id)"
		/>
	</div>
	
	<h2 v-else class="posts__empty">
		Список постов пуст
	</h2>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
	name: "PostList",
	components: {PostItem},
	props: {
		posts: {
			type: Array,
			required: true
		}
	}
}
</script>

<style scoped>
.posts__empty {
	color: red;
}
</style>