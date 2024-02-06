<template>
  <div>
    <ul>
      <p><strong>Type:</strong> {{ detail.type }}</p>
      <p><strong>Name:</strong>: {{ detail.name }}</p>
      <p><strong>Hits:</strong>: {{ detail.hits }}</p>
      <p><strong>Bandwidth:</strong>: {{ detail.bandwidth }}</p>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    detail: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>