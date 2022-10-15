<template>
	<div>
		<h1>Страница с постами</h1>
		<UInput v-model="searchQuery"></UInput>
		<div class="app__buttons">
			<UButton @click="modalVisible = true">Создать пост</UButton>
			<USelect v-model="selectedSort" :options="sortOptions"></USelect>
		</div>
		<UModal v-model:show="modalVisible">
			<PostForm @create="createPost"></PostForm>
		</UModal>
		<PostList v-if="posts.length > 0"
		          :posts="sortAndSearch"
		          @remove="removePost"
		></PostList>
		<div v-else>Загрузка ...</div>
		<div v-intersection="getMorePosts" class="observer"></div>
	</div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from 'axios';
import UInput from "@/components/UI/UInput";

export default {
	name: "App",
	components: {UInput, PostList, PostForm},
	
	data() {
		return {
			posts: [],
			modalVisible: false,
			selectedSort: '',
			sortOptions: [
				{value: 'title', name: 'По названию'},
				{value: 'body', name: 'По описанию'}
			],
			searchQuery: '',
			page: 1,
			limit: 10,
			countPages: 1
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
		},
		
		sortAndSearch() {
			return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
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
			const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
				params: {
					_page: this.page,
					_limit: this.limit
				}
			});
			
			this.countPages = Math.ceil(response.headers['x-total-count'] / this.limit);
			
			this.posts = [...this.posts, ...response.data];
		},
		
		async getMorePosts() {
			this.page++;
			
			await this.getPosts();
		}
	},
	
}
</script>
<style scoped>
.app__buttons {
	display: flex;
	justify-content: space-between;
	margin: 15px 0;
}

.observer {
	height: 30px;
	background: green;
}
</style>