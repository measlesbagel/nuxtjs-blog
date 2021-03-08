<template>
  <header class="flex justify-center mb-6 h-20">
    <div class="container flex items-center justify-between md:text-lg">
      <div>
        <a href="/">
          <strong>home</strong>
        </a>
      </div>
      <nav class="ml-auto md:text">
        <ul class="flex">
          <li class="font-semibold lowercase ml-6">
            <a href="/about">about</a>
          </li>
          <li class="font-semibold lowercase ml-6">
            <a href="/blog-posts/page/1">blog</a>
          </li>
          <li class="font-semibold lowercase ml-6">
            <a href="/projects/page/1">projects</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
