<template>
  <div class="container mt-8 flex justify-between px-4 md:px-8">
    <nuxt-link
      :to="{ name: 'blog-posts-page-page', params: { page: prevPage } }"
      class="flex items-end"
      :class="{
        'btn-enabled': currentPage > 1,
        'btn-disabled': currentPage <= 1,
      }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-chevron-double-left pr-1"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
        />
        <path
          fill-rule="evenodd"
          d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
        />
      </svg>

      Newer
    </nuxt-link>

    <div class="py-2">
      <span class="mx-1"> {{ currentPage }} of {{ totalPages }}</span>
    </div>

    <nuxt-link
      :to="{ name: 'blog-posts-page-page', params: { page: nextPage } }"
      class="flex items-end"
      :class="{
        'btn-enabled': currentPage < totalPages,
        'btn-disabled': currentPage >= totalPages,
      }"
    >
      Older
      <div class="items-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-chevron-double-right pl-1"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
          />
          <path
            fill-rule="evenodd"
            d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
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
