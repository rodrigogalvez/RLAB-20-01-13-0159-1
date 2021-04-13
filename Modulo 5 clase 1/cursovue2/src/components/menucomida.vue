<template>
    <div>
        <h1>Menú el día</h1>
        <ul>
            <li v-for="comida of listado" :key="comida">
                {{comida}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"menucomida",
    props: ["listado"]
}
</script>
