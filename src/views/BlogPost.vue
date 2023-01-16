<template>
    <div class="main-page-container" v-if="!loading">
        <div class="main-page-content">
            <header>
                <h1 style="padding-bottom: 20px;">{{ this.posts[this.$route.params.id].title }}</h1>
            </header>
            <section id="blog-post" v-html="this.posts[this.$route.params.id].content">
            </section>
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
    }
}
</script>

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

ol {
    padding-left: 10px;
}

ul {
    padding-left: 10px;
}
</style>
