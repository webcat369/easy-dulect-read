<template>
  <div class="Bookshelf">
    <Bookcase></Bookcase>
    <Search v-if="this.showPage"></Search>
    <ReadRecord v-if="this.showReadRecord"></ReadRecord>
  </div>
</template>

<script>
import Bookcase from '../components/Bookshelf/Bookcase'
import Search from '../components/Search'
import ReadRecord from '../components/PersonalCenter/ReadRecord'
import { mapActions, mapGetters } from 'vuex'
import { searchList } from '../api'
export default {
  name: 'Bookshelf',
  components: {
    Bookcase,
    Search,
    ReadRecord
  },
  created () {
    const currentUser = JSON.parse(localStorage.getItem('user'))
    if (currentUser) {
      console.log(currentUser)
      const currentUserData = currentUser[0]
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
          console.log(data.result)
        })
    } else {
      this.setBookList = []
      // searchList(this.currentUser.userId)
      //   .then(data => {
      //     // console.log(data.result, 'result')
      //     this.setBookList(data.result)
      //     // console.log(data.result)
      //   })
    }
  },
  computed: {
    ...mapGetters([
      'currentUser',
      'showPage',
      'showReadRecord'
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
