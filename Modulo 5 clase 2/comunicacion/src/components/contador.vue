<template>
  <div>
    <h2>{{ titulo }}</h2> 
    <p>Estado: {{ cuenta }}</p>
    <button @click="incrementar">Incrementar</button>
  </div>
</template>

<script>
export default {
  name: "contador",
  props: ["titulo"],
  data() {
    return {
      cuenta: 0,
    };
  },
  methods: {
    incrementar() {
      this.cuenta++;
      this.$emit("incrementado",this.titulo,this.cuenta);
    }
  }
};
</script>