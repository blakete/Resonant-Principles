<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <header>
                <h1 style="padding-bottom: 20px;">Blog 🗺</h1>
                <p>
                    Nascent thoughts and ideas.
                </p>
            </header>

            <section id="blog-posts">
                <h2 style="padding-bottom: 20px;">Posts</h2>
                <div class="card-columns">
                    <div v-for="post in posts" :key="post.id">
                        <v-card @click="this.$router.push({ path: `/blog/${post.id}` })">
                            <v-card-title>{{ post.title }}</v-card-title>
                        </v-card>
                    </div>
                </div>
            </section>
        </div>
        <section class='comments' aria-labelledby="comment">
            <h2 id="comment">Comments</h2>
            <Disqus />
        </section>
    </div>
</template>

<script>
export default {
    name: 'BlogPage',
    data: () => ({
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
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
    font-size: 20px;
}

.card-columns {
    display: flex;
    flex-direction: column;
}

.card-columns .v-card {
    margin-bottom: 1rem;
}
</style>
