<template>
  <div class="flex flex-col relative min-h-screen px-4 md:px-8">
    <navbar />
    <section
      class="container w-full py-4 mb-8 md:grid md:gap-8 md:items-center md:mx-auto"
    >
      <h1 class="container text-center md:text-left uppercase -mt-8">
        Projects
      </h1>
      <bloglist :posts="paginatedArticles" />
      <div v-if="allArticles.length">
        <pagination :total="allArticles.length" />
      </div>
    </section>
  </div>
</template>

<script>
import getProjects from '@/utils/getProjects'
import bloglist from '~/components/bloglist.vue'
import Pagination from '~/components/pagination.vue'
export default {
  components: { bloglist, Pagination },
  async asyncData({ $content, app, params, error }) {
    const content = await getProjects($content, params, error)
    return {
      allArticles: content.allArticles,
      paginatedArticles: content.paginatedArticles,
    }
  },
}
</script>
