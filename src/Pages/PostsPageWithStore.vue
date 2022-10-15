<template>
	<div>
		<h1>Страница с постами</h1>
		<UInput
				:model-value="searchQuery"
				@update:model-value="setSearchQuery"
		></UInput>
		<div class="app__buttons">
			<UButton @click="modalVisible = true">Создать пост</UButton>
			<USelect
					:model-value="selectedSort"
					@update:model-value="setSelectedSort"
					:options="sortOptions"
			></USelect>
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
import {mapState, mapGetters, mapActions, mapMutations} from "vuex";

export default {
	name: "App",
	components: {PostList, PostForm},
	
	data() {
		return {
			modalVisible: false
		}
	},
	
	mounted() {
		this.getPosts();
	},
	
	methods: {
		...mapMutations({
			setSearchQuery: 'post/setSearchQuery',
			setSelectedSort: 'post/setSelectedSort'
		}),
		
		...mapActions({
			getPosts: 'post/getPosts',
			getMorePosts: 'post/getMorePosts'
		}),
		
		createPost(post) {
			this.posts.push(post);
			this.modalVisible = false;
		},
		
		removePost(id) {
			this.posts = this.posts.filter(p => p.id !== id);
		},
		
	},
	
	computed: {
		...mapState({
			posts: state => state.post.posts,
			selectedSort: state => state.post.selectedSort,
			sortOptions: state => state.post.sortOptions,
			searchQuery: state => state.post.searchQuery,
			page: state => state.post.page,
			limit: state => state.post.limit,
			countPages: state => state.post.countPages
		}),
		
		...mapGetters({
			sortedPosts: 'post/sortedPosts',
			sortAndSearch: 'post/sortAndSearch'
		})
	}
	
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