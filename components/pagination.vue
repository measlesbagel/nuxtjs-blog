<template>
  <div class="container justify-items-center text-center mt-8">
    <span v-if="currentPage === 1" class="disabledStyle"> Prev </span>

    <nuxt-link
      v-else
      :to="{ name: 'blog-posts-page-page', params: { page: prevPage } }"
      class="buttonStyle"
    >
      Prev
    </nuxt-link>

    <span class="mx-1"> {{ currentPage }} of {{ totalPages }}</span>

    <span v-if="currentPage === totalPages" class="disabledStyle"> Next </span>

    <nuxt-link
      v-else
      :to="{ name: 'blog-posts-page-page', params: { page: nextPage } }"
      class="buttonStyle"
    >
      Next
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 9,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.perPage)
    },
    currentPage() {
      return parseInt(this.$route.params.page) || 1
    },
    prevPage() {
      return this.currentPage > 1 ? this.currentPage - 1 : 1
    },
    nextPage() {
      return this.currentPage < this.totalPages
        ? this.currentPage + 1
        : this.totalPages
    },
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
