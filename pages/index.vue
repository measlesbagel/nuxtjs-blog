<template>
  <div class="flex flex-col relative min-h-screen px-8 md:px-0">
    <navbar />
    <section
      class="container banner-wrapper relative w-full py-4 mb-8 md:grid md:gap-8 md:items-center md:mx-auto"
    >
      <div class="text-left">
        <p class="font-semibold text-2xl m-0 mb-2 leading-snug">
          hello my name is
        </p>
        <h1 class="font-black text-6xl mb-4 leading-none">Myles Cagle</h1>
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
      <h2 class="font-bold mb-4 text-4xl">Latest Blog Posts</h2>
      <div class="flex flex-row justify-between">
        <div v-for="doc in docs" :key="doc.slug">
          <nuxt-link :to="doc.path">{{ doc.title }}</nuxt-link>
        </div>
      </div>
    </section>
    <section class="container mx-auto pt-10">
      <h2 class="font-bold mb-4 text-4xl">Latest Projects</h2>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const docs = await $content('blog-posts').sortBy('date').fetch()
    return { docs }
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
