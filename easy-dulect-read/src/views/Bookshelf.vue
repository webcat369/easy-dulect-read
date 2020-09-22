<template>
  <div class="Bookshelf">
    <Bookcase></Bookcase>
  </div>
</template>

<script>
import Bookcase from '../components/Bookshelf/Bookcase'
export default {
  name: 'Bookshelf',
  components: {
    Bookcase
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.Bookshelf{
  width: 100%;
  height: 100%;
    .text{
        width: 300px;
        height: 350px;
        img{
            display: inline-block;
            width: 250px;
            height: 300px;
        }
        p{
            text-align: center;
            font-size: 30px;
        }
    }
}
</style>
