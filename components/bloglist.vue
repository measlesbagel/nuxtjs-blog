<template>
	<div class="overflow-auto flex justify-start flex-wrap w-full md:ml-2">
		<div v-for="blog in posts" :key="blog.slug">
			<nuxt-link :to="blog.path">
				<div class="card mx-3 mb-4" :to="blog.path">
					<img
						:src="blog.image"
						alt=""
						class="h-80 w-80 md:w-100 md:h-100 object-cover rounded-2xl"
					/>
					<div class="p-3">
						<h3 class="font-bold lowercase">{{ blog.title }}</h3>
						<p class="text-sm lowercase">{{ blog.description }}</p>
					</div>
				</div>
			</nuxt-link>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		posts: {
			type: Array,
			required: true,
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
