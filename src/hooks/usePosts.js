import axios from "axios";
import {ref, onMounted} from "vue";

export function usePosts(limit) {
    const posts = ref([]);
    const countPages = ref(0);
    const page = ref(1);

    const fetching = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _page: page.value,
                _limit: limit
            }
        });

        countPages.value = Math.ceil(response.headers['x-total-count'] / limit);

        posts.value = [...posts.value, ...response.data];
    }

    onMounted(fetching);

    return {
        posts, countPages
    }
}