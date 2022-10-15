<template>
	<div>
		<h1>Страница с постами</h1>
		<UInput v-model="searchQuery"></UInput>
		<div class="app__buttons">
			<USelect v-model="selectedSort" :options="sortOptions"></USelect>
		</div>
		<PostList
				v-if="posts.length > 0"
				:posts="searchedPosts"
		></PostList>
		<div v-else>Загрузка ...</div>
		<!--<div v-intersection="getMorePosts" class="observer"></div>-->
	</div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import {usePosts} from "@/hooks/usePosts";
import {useSortedPosts} from "@/hooks/useSortedPosts";
import {useSortAndSearch} from "@/hooks/useSortAndSearch";

export default {
	name: "App",
	components: {PostList, PostForm},
	
	data() {
		return {
			modalVisible: false,
			sortOptions: [
				{value: 'title', name: 'По названию'},
				{value: 'body', name: 'По описанию'}
			]
		}
	},
	
	setup(props){
		const {posts, countPages} = usePosts(10);
		const {sortedPosts, selectedSort} = useSortedPosts(posts);
		const {searchQuery, searchedPosts} = useSortAndSearch(sortedPosts);
		
		return {
			posts,
			countPages,
			sortedPosts,
			selectedSort,
			searchQuery,
			searchedPosts
		}
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