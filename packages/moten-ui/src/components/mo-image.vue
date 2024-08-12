<script  lang="ts">
// import { ref } from 'vue'
import{defineComponent}from'vue-demi'
// const props=defineProps<{ src: string }>()

// const count = ref(0)
// console.log("src",props.src);
export default defineComponent({
  props: {
    src:String
  },
  data(){
    return{
      value:111
    }
  },
  mounted(){
    console.warn(this.value)
  }
})
</script>

<template>
   <img :src="src" >
</template>

<style scoped>
img{
  width: 500px;
  height: 500px;
  object-fit: contain;
}
</style>
