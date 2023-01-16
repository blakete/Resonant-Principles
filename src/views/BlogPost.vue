<template>
    <div class="main-page-container" v-if="!loading">
        <div class="main-page-content">
            <h1 style="padding-bottom: 20px;">{{ this.posts[this.$route.params.id].title }}</h1>
            <div class="blog-post-content" v-html="this.posts[this.$route.params.id].content">
            </div>
        </div>
        <section class='comments' aria-labelledby="comment">
            <h2 id="comment">Comments</h2>
            <Disqus ref="disqus" :lang="lang" @new-comment="newComment" />
        </section>
    </div>
</template>

<script>
export default {
    name: 'BlogPost',
    props: ["post"],
    data: () => ({
        loading: true,
        posts: [],
        error: null,
        baseURL: 'http://localhost:8080'
    }),
    created() {
        this.loadPosts()
    },
    methods: {
        async loadPosts() {
            this.loading = true
            try {
                const res = await fetch('/posts.json')
                if (!res.ok) throw new Error('Error load post')
                this.posts = await res.json()
                this.loading = false
            } catch (e) {
                this.loading = false
                this.error = e
            }
        },
    },
    mounted() {
        console.log("Hello blog id: " + this.$route.params.id)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
li {
    font-size: 22px;
    padding-bottom: 10px;
}

li li {
    padding-top: 10px;
    padding-bottom: 0px;
    font-size: 20px;
}

span {
    cursor: pointer;
    color: blue;
    text-decoration: underline;
}
</style>
