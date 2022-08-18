<template>
<n-button @click="emitClick()" type="info" size="large">子->父</n-button>
</template>

<script setup>
import {NButton} from 'naive-ui'
import {ref} from 'vue'

let sub = ref('我是子组件')

const emits = defineEmits(['subClick'])

function emitClick() {
  emits('subClick', sub.value)
}
</script>

<style scoped>

</style>