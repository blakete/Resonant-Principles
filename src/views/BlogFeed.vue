<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <header>
                <h1 style="padding-bottom: 20px;">Blog 🚀 </h1>
                <p>
                    Incomplete thoughts and ideas iterating towards the truth.
                </p>
            </header>

            <section id="blog-posts">
                <h2 style="padding-bottom: 20px;">Posts</h2>
                <div class="card-columns">
                    <div v-for="post in posts" :key="post.id">
                        <div class="card no-select" @click="this.$router.push({ path: `/blog/${post.id}` })">
                            <h3>{{ post.title }}</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
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

.card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
