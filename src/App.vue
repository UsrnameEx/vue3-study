<template>
	<div class="app">
		<h1>Страница с постами</h1>
		<UButton @click="modalVisible = true">Создать пост</UButton>
		<UModal v-model:show="modalVisible">
			<PostForm @create="createPost"></PostForm>
		</UModal>
		<PostList :posts="posts" @remove="removePost"></PostList>
	</div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import UModal from "@/components/UI/UModal";
import UButton from "@/components/UI/UButton";

export default {
	name: "App",
	components: {UButton, UModal, PostList, PostForm},
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
			modalVisible: false
		}
	},
	methods: {
		createPost(post) {
			this.posts.push(post);
			this.modalVisible = false;
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