<template>
  <div></div>
</template>

<script>
export default {
  middleware({ redirect }) {
    return redirect('301', '/projects/page/1')
  },
}
</script>
