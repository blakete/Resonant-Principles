<template>
    <div class="about-page">

        <header>
            <h1>Blog 🗺</h1>
            <p>
                Nascent thoughts and ideas.
            </p>
        </header>

        <section id="blog-posts">
            <h2>Posts</h2>
            <div class="card-columns">
                <div v-for="post in posts" :key="post.id">
                    <v-card>
                        <v-card-title>{{ post.title }}</v-card-title>
                        <v-card-subtitle>{{ post.author }}</v-card-subtitle>
                        <v-card-text>{{ post.content }}</v-card-text>
                    </v-card>
                </div>
            </div>

            <!-- <div>
                <ul>
                    <li v-show="loading">
                        <h3>Loading</h3>
                    </li>
                    <li v-for="post in posts" :key="`post-${post.id}`">
                        <h3 v-text="post.title" :id="`title-post-${post.id}`" />

                        <router-link :to="{ name: 'blog', params: { id: post.id } }" :id="`link-post-${post.id}`"
                            :aria-describedby="`link-post-${post.id} title-post-${post.id}`">
                            See post
                        </router-link>

                        -

                        todo add comments count
                    </li>
                </ul>
                <div v-show="error">
                    {{ error }}
                </div>
            </div>  -->

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
  