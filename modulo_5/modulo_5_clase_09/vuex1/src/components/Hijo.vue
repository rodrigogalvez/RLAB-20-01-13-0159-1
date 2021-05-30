<template>
  <div>
    <h1>Número general - en hijo</h1>
    <p>Número: {{ $store.state.numero }}</p>
  </div>
</template>

<script>
export default {
  name: "Hijo",
};
</script>
