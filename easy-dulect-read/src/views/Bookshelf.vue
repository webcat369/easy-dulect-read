<template>
  <div class="Bookshelf">
          <div class="text" @click="readIt">
              <img src="./../assets/images/yuanlong.jpg">
              <p>元龙</p>
          </div>
  </div>
</template>

<script>
export default {
  name: 'Bookshelf',
  methods: {
    readIt () {
      this.$router.push('/detailPage')
    }
  }
}
</script>

<style scoped lang="scss">
.Bookshelf{
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
