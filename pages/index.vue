<template>
  <div class="flex flex-col relative min-h-screen px-8 md:px-4 lg:px-0">
    <navbar />
    <section
      class="container banner-wrapper relative w-full py-4 mb-8 md:grid md:gap-8 md:items-center md:mx-auto"
    >
      <div class="text-left">
        <h3 class="m-0 mb-2 leading-snug">hello my name is</h3>
        <h1 class="mb-4 leading-none">Myles Cagle</h1>
        <p class="p-sm">
          Welcome to my blog! Hopefully you find something interesting.
        </p>
      </div>
      <div class="hidden md:block">
        <img
          class="rounded-3xl block w-full h-full"
          src="../static/profile.jpeg"
          alt=""
          width="128"
          height="128"
        />
      </div>
    </section>
    <section class="container mx-auto pt-10">
      <h2 class="mb-4">Latest Blog Posts</h2>
      <div
        class="grid grid-flow-col grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-4 justify-between"
      >
        <div v-for="blog in posts" :key="blog.slug">
          <nuxt-link :to="blog.path">
            <div class="card col-start-auto" :to="blog.path">
              <img :src="blog.image" alt="" class="w-full" />
              <div class="p-3">
                <h3>{{ blog.title }}</h3>
                <p class="text-sm">{{ blog.description }}</p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="container mx-auto pt-10">
      <h2 class="mb-4">Latest Projects</h2>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('blog-posts')
      .sortBy('date', 'desc')
      .limit(3)
      .fetch()
    return { posts }
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
@media (min-width: 768px) {
  .banner-wrapper {
    grid-template-columns: 45% 1fr;
  }
}
</style>
