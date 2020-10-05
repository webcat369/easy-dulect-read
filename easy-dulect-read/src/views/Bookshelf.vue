<template>
  <div class="Bookshelf">
    <Bookcase></Bookcase>
  </div>
</template>

<script>
import Bookcase from '../components/Bookshelf/Bookcase'
import { mapActions, mapGetters } from 'vuex'
import { searchList } from '../api'
export default {
  name: 'Bookshelf',
  components: {
    Bookcase
  },
  created () {
    if (this.currentUser.userId === '0') {
      const currentUser = localStorage.getItem('user')
      const currentUserData = JSON.parse(currentUser)[0]
      this.setCurrentUser({
        userName: currentUserData.userName,
        userId: currentUserData.userId,
        userGender: currentUserData.userGender,
        userAvatar: currentUserData.userAvatar,
        isShow: false
      })
      searchList(this.currentUser.userId)
        .then(data => {
          this.setBookList(data.result)
          // console.log(data.result)
        })
    } else {
      console.log('未登录')
    }
  },
  computed: {
    ...mapGetters([
      'currentUser'
    ])
  },
  methods: {
    ...mapActions([
      'setCurrentUser',
      'setBookList'
    ])
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
