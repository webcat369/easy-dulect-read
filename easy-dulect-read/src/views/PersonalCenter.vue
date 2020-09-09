<template>
    <div content="PersonalCenter">
        <Personal></Personal>
    </div>
</template>

<script>
import Personal from '../components/PersonalCenter/Personal'
export default {
  name: 'PersonalCenter',
  components: {
    Personal
  }
}
</script>

<style scoped lang="scss">
.PersonalCenter{
    width: 100%;
    height: 200px;
}
</style>
