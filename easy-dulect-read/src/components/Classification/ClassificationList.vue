<template>
    <div class="ClassificationList">
        <ScrollView>
            <div class="box">
                <div class="grid">
                    <div class="four"
                         @click.stop="ShowChannel('现代言情')"
                    >
                        <div class="top" v-if="this.ChannelType==='girl'&& this.modernRank === '现代言情榜'">
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/a3c6/62163e818671a85477b9b0728a0fa586_360x480.jpg" alt="">
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5f3e4cbfbc63b_360x480.jpg" alt="">
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/a3c6/0a4287c9a118c08a0c8dda0cb447ee33_360x480.jpg" alt="">
                        </div>
                        <div class="top" v-if="this.ChannelType==='boy'&& this.modernRank === '现代言情榜'">
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/1c38/73b8503042d1a84d114fdbca9cf321ab_360x480.jpg" alt="">
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5c10ba7f8bf89_360x480.jpg" alt="">
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/a3c6/eabb8f8ed1309902315b1a5e95872a39_360x480.jpg" alt="">
                        </div>
                        <p ref="modernRank">现代言情榜</p>
                    </div>
                    <div class="four" @click.stop="ShowChannel('古代言情')">
                        <div class="top" v-if="this.ChannelType==='girl'&& this.ancientRank === '古代言情榜'">
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5f0bf39c0be27_360x480.jpg" alt="">
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5efbfe0376793_360x480.jpg" alt="">
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5f1e40a5757e2_360x480.jpg" alt="">
                        </div>
                        <div class="top" v-if="this.ChannelType==='boy'&& this.ancientRank === '古代言情榜'">
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/a3c6/c6f84415c22488bad62730a96fff2a0b_360x480.jpg" alt="">
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/38b3/6001c0df345c28f87a6c45b3c193cc24_360x480.jpg" alt="">
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/a3c6/c6f84415c22488bad62730a96fff2a0b_360x480.jpg" alt="">
                        </div>
                        <p ref="ancientRank">古代言情榜</p>
                    </div>
                </div>
            </div>
        </ScrollView>
    </div>
</template>

<script>
import ScrollView from '../ScrollView'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ClassificationList',
  mounted () {
    this.modernRank = this.$refs.modernRank.innerHTML
    this.ancientRank = this.$refs.ancientRank.innerHTML
  },
  components: {
    ScrollView
  },
  props: {
    ChannelType: {
      type: String,
      default: '',
      require: true
    }
  },
  data () {
    return {
      modernRank: '',
      ancientRank: ''
    }
  },
  computed: {
    ...mapGetters([
      'channelTitle'
    ])
  },
  methods: {
    ...mapActions([
      'setShowChannel',
      'setChannelType',
      'setChannelTitle'
    ]),
    ShowChannel (channelTitle) {
      // console.log(channelTitle)
      this.setShowChannel(true)
      this.setChannelType(this.ChannelType)
      this.setChannelTitle(channelTitle)
    }
  }
}
</script>

<style scoped lang="scss">
.ClassificationList{
    position: fixed;
    width: 100%;
    /*background: #c2baee;*/
    overflow: hidden;
    .box{
        .grid{
            width: 75%;
            height:640px;
            /*background: #e7555b;*/
            margin: 20px 18px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .four{
                width: 260px;
                height: 260px;
                /*background: #facc41;*/
                margin-bottom: 20px;
                .top{
                    width: 100%;
                    height: 100%;
                    position: relative;
                    img{
                        border-radius: 10px;
                        &:nth-of-type(1){
                            height: 80%;
                            position: absolute;
                            top: 30px;
                            left: 30px;
                            z-index: 99;
                        }
                        &:nth-of-type(2){
                            height: 70%;
                            position: absolute;
                            top: 45px;
                            left: 75px;
                            z-index: 88;
                        }
                        &:nth-of-type(3){
                            height: 60%;
                            position: absolute;
                            top: 50px;
                            left: 115px;
                        }
                    }
                }
                p{
                    width: 260px;
                    text-align: center;
                    font-size: 30px;
                    color: #333333;
                }
            }
        }
    }
}
</style>
