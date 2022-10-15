<template>
	<div class="app">
		<h1>Страница с постами</h1>
		<div class="app__buttons">
			<UButton @click="modalVisible = true">Создать пост</UButton>
			<USelect v-model="selectedSort" :options="sortOptions"></USelect>
		</div>
		<UModal v-model:show="modalVisible">
			<PostForm @create="createPost"></PostForm>
		</UModal>
		<PostList v-if="posts.length > 0"
		          :posts="sortedPosts"
		          @remove="removePost"
		></PostList>
		<div v-else>Загрузка ...</div>
	</div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from 'axios';
export default {
	name: "App",
	components: {PostList, PostForm},
	
	data() {
		return {
			posts: [],
			modalVisible: false,
			selectedSort: '',
			sortOptions: [
				{value: 'title', name: 'По названию'},
				{value: 'description', name: 'По описанию'}
			]
		}
	},
	
	mounted() {
		this.getPosts();
	},
	
	computed: {
		sortedPosts() {
			return [...this.posts].sort((a, b) => {
				return a[this.selectedSort]?.localeCompare(b[this.selectedSort]);
			});
		}
	},
	
	methods: {
		createPost(post) {
			this.posts.push(post);
			this.modalVisible = false;
		},
		
		removePost(id) {
			this.posts = this.posts.filter(p => p.id !== id);
		},
		
		async getPosts() {
			setTimeout(async () => {
				const response = await axios.get('http://localhost:8080/api/posts/getPosts.json');
				if (response.data.status === 'ok') {
					this.posts = response.data.items;
				}
			}, 1000);
		}
	},
	
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

.app__buttons {
	display: flex;
	justify-content: space-between;
	margin: 15px 0;
}
</style>