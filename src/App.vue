<template>
<div class="app">
	<PostForm @create="createPost"></PostForm>
	<PostList :posts="posts" @remove="removePost"></PostList>
</div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
	name: "App",
	components: {PostList, PostForm},
	data() {
		return {
			posts: [
				{
					id: 1,
					title: 'Пост о JavaScript1',
					description: 'JavaScript универсальный язык программирования'
				},
				{
					id: 2,
					title: 'Пост о JavaScript2',
					description: 'JavaScript универсальный язык программирования'
				},
				{
					id: 2,
					title: 'Пост о JavaScript3',
					description: 'JavaScript универсальный язык программирования'
				}
			],
		}
	},
	methods: {
		createPost(post) {
			this.posts.push(post);
		},
		
		removePost(id) {
			this.posts = this.posts.filter(p => p.id !== id);
		}
	}
}
</script>
<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.app {
	padding: 20px;
}
</style>