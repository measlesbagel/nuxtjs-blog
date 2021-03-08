<template>
  <div class="flex flex-col relative min-h-screen px-8">
    <navbar />
    <section
      class="container w-full py-4 mb-8 md:grid md:gap-8 md:items-center md:mx-auto"
    >
      <article class="prose prose-sm md:prose-xl">
        <h1 class="font-black">{{ doc.title }}</h1>
        <nuxt-content :document="doc" />
      </article>
    </section>
  </div>
</template>

<script>
import navbar from '~/../nuxtjs-blog/components/navbar.vue'
export default {
  components: { navbar },
  async asyncData({ $content, params }) {
    const doc = await $content(`projects/${params.slug}`).fetch()

    return { doc }
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
