import axios from "axios";

export const postModule = {
    state: () => ({
        posts: [],
        selectedSort: '',
        sortOptions: [
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
        ],
        searchQuery: '',
        page: 1,
        limit: 10,
        countPages: 1
    }),
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((a, b) => {
                return a[state.selectedSort]?.localeCompare(b[state.selectedSort]);
            });
        },

        sortAndSearch(state, getters) {
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setPage(state, page) {
            state.page = page;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setCountPages(state, totalPages) {
            state.countPages = totalPages;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
    },
    actions: {
        async getPosts({state, commit}) {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: state.page,
                    _limit: state.limit
                }
            });

            commit('setCountPages', Math.ceil(response.headers['x-total-count'] / state.limit));

            commit('setPosts', [...state.posts, ...response.data]);
        },

        async getMorePosts({state, commit, dispatch}) {
            commit('setPage', state.page += 1);

            dispatch('getPosts');
        }
    },
    namespaced: true
}