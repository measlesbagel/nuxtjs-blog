export default async ($content, params, error) => {
  const currentPage = parseInt(params.page)

  const perPage = 9

  const allArticles = await $content('projects', { deep: true }).fetch()

  const skipNumber = () => {
    if (currentPage === 1) {
      return 0
    }
    return (currentPage - 1) * perPage
  }

  const paginatedArticles = await $content('projects', { deep: true })
    .sortBy('createdAt', 'desc')
    .limit(perPage)
    .skip(skipNumber())
    .fetch()

  if (currentPage === 0 || !paginatedArticles.length) {
    return error({ statusCode: 404, message: 'No articles found!' })
  }

  return {
    allArticles,
    paginatedArticles,
  }
}
