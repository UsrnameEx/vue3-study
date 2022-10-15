import {computed, ref} from "vue";

export function useSortedPosts(posts) {
    const selectedSort = ref('');

    const sortedPosts = computed(() => {
        return [...posts.value].sort((a, b) => {
            return a[posts.value]?.localeCompare(b[posts.value]);
        });
    })

    return {
        selectedSort, sortedPosts
    }
}