<template>
	<div class="flex flex-col relative min-h-screen px-8">
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
					class="rounded-3xl block w-full h-full shadow-lg border-2 border-gray-200"
					src="../static/profile.jpeg"
					alt=""
					width="128"
					height="128"
				/>
			</div>
		</section>
		<section class="container mx-auto pt-10">
			<h2 class="mb-4">Latest Blog Posts</h2>
			<bloglist :posts="blogs" />
		</section>
		<section class="container mx-auto pt-10">
			<h2 class="mb-4">Latest Projects</h2>
			<div class="justify-center">
				<bloglist :posts="projs" />
			</div>
		</section>
	</div>
</template>

<script>
export default {
	async asyncData({ $content }) {
		const blogs = await $content('blog-posts')
			.sortBy('createdAt', 'desc')
			.limit(3)
			.fetch()
		const projs = await $content('projects')
			.sortBy('createdAt', 'desc')
			.limit(3)
			.fetch()
		return { blogs, projs }
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
