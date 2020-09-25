<template>
    <transition
            appear
            enter-active-class="animated animate__fadeInRight"
            leave-active-class="animated animate__fadeOutRight"
    >
        <div class="HelpAndAdvice">
            <div class="header">
                <img src="../../assets/icon/back.svg" alt="" @click.stop="back">
                <p>帮助与建议</p>
            </div>
            <div class="bottom">
                <happy-scroll hide-horizontal
                              hide-vertical
                              color="rgba(51,51,51,0.2)"
                              size="8"
                              :min-length-v="20"
                              resize
                              class="happy-slow"
                >
                    <div class="list">
                        <p>新手问题</p>
                        <van-collapse v-model="activeNames">
                            <van-collapse-item title="这里的小说真的免费吗？" name="1">
                                轻阅读小说致力于读者提供高质量的小说，这里的所有小说都没有版权方提供授权，随时面临着法律风险，您在使用过程中如遇任何问题，我们都改不负责，需要您自行承担后果，望您慎用，如果您实在是非常喜欢我们的APP，我们也将真心送上温馨提示：请您尽快购入相关保险，以防阅读过程中伴随您的意外可能随时发生。
                            </van-collapse-item>
                            <van-collapse-item title="这里真的包含海量小说吗？" name="2">
                                当您点开这个问题时，您将面对的使我们无情的嘲笑，您是有多么想不开才会使用我们开发的APP阅读小说，先不说您使用这款APP将面临着随时出发的Bug，就您在书城看到的所有小说，都是只能看看，并没有并不能真的阅读，如果这些问题都不能阻止您放弃阅读，那您对我们的APP一定是真爱，我们非常喜欢像您这样的用户，请您坚持下去，我们保证您的阅读之旅，惊喜连连。
                            </van-collapse-item>
                        </van-collapse>
                        <p>阅读问题</p>
                        <van-collapse v-model="activeNames">
                            <van-collapse-item title="为什么我想看的小说不能阅读？" name="3">
                                如果您点开这个问题，那您一定没有看我们“新手问题”的第二条，恭喜您没有遭到我们的无情嘲笑。面对您无知的发问，我们将大发慈悲的告诉您，如果您是真心想看小说，我们劝您还是放你这款APP，由于此款APP开发过程中，毫无人力物力，更加没有财力。全凭一个‘开发小白’的一腔热情才有了现在的您看到的成果。可能这只‘开发小白’写累了，所以没有小说内容是可以理解的，望您海涵。
                            </van-collapse-item>
                            <van-collapse-item title="如何对阅读器界面进行调节？" name="4">
                                不好意思，不能调节，对！您没看错，就是这么的无情，至于原因呢？功能太多了，‘小白’累了，能省就省...
                            </van-collapse-item>
                            <van-collapse-item title="为什么连载小说还没有更新？" name="5" >
                                对于您的这个问题呢，我们并没有办法解决，因为此款APP没有作者入驻，当然不会有能更新的小说，建议您换一本‘完结’的小说阅读。
                            </van-collapse-item>
                        </van-collapse>
                        <p>评论问题</p>
                        <van-collapse v-model="activeNames">
                            <van-collapse-item title="为什么不能写评论？" name="6">此功能正在开发中...</van-collapse-item>
                            <van-collapse-item title="评论规则" name="7">
                                1.发布评论时，请遵守您所在国家和中华人民共和国的法律法规，禁止发布政治相关内容 <br>
                                2.评论内容应该和所在页面的内容相关，禁止一切无意义和严重跑题的内容<br>
                                3.请尊重他人，友好评论，请像和他人面对面谈话时一样保持对他人的尊重<br>
                                4.禁止发布商业广告<br>
                                5.请勿使用类似“谢谢谢谢谢谢谢谢谢”、“哈哈哈哈哈哈哈哈”这样的术语。表达感谢请真诚，此种方式视为灌水。
                            </van-collapse-item>
                        </van-collapse>
                        <p>其他问题</p>
                        <van-collapse v-model="activeNames">
                            <van-collapse-item title="其他内容问题" name="8">
                                若有其他内容方面的问题，如章节缺失，顺序错乱等，请点击“个人中心”界面的“问题与反馈”，将您遇到的问题描述详细，提供完整的书籍信息，以及系统提示文案和对应截图给我们。虽然您的反馈我们不一定能看见，看见了也不一定能解决，但对于您的信任我们还是表示真挚的感谢。
                            </van-collapse-item>
                            <van-collapse-item title="遇到APP频繁遇到卡顿情况怎么办？" name="9">
                                若遇到APP频繁卡死，闪退等问题，这些都在我们的预料之中，对于这些我们始终保持着积极解决，努力完善的态度，但是Bug太强大，“小白”心有余而力不足，做不到面面俱到，望体谅。
                            </van-collapse-item>
                        </van-collapse>
                </div>
                </happy-scroll>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapActions } from 'vuex'
// 一款基于vue2.0的滚动条插件
import { HappyScroll } from 'vue-happy-scroll'
// 引入css，推荐将css放入main入口中引入一次即可。
import 'vue-happy-scroll/docs/happy-scroll.css'
import Vue from 'vue'
import { Collapse, CollapseItem } from 'vant'

Vue.use(Collapse)
Vue.use(CollapseItem)
export default {
  name: 'HelpAndAdvice',
  components: {
    HappyScroll
  },
  data () {
    return {
      activeNames: ['0']
    }
  },
  methods: {
    ...mapActions([
      'setHelpPAge'
    ]),
    back () {
      this.setHelpPAge(false)
    }
  }
}
</script>

<style lang="scss">
.HelpAndAdvice{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffffff;
    z-index: 1002;
    .header{
        width: 100%;
        height: 100px;
        line-height: 100px;
        /*background: #ffffff;*/
        display: flex;
        position: relative;
        border-bottom: 1px solid #f3f3f3;
        transform: translate3d(0,0,0);
        img{
            width: 60px;
            height: 60px;
            margin: 20px 20px;
        }
        p{
            font-size: 36px;
            color: #333333;
            font-weight: bold;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    .bottom{
        position: fixed;
        top: 100px;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        /*background: papayawhip;*/
        .happy-scroll-content{
            width: 100%;
            height: 100%;
            .list{
                width: 100%;
                height: 100%;
                p{
                    width:100%;
                    height: 100px;
                    line-height: 100px;
                    font-size: 30px;
                    font-weight: bold;
                    padding-left:25px;
                    box-sizing: border-box;
                    margin:  0 auto;
                    background: papayawhip;
                }
                .van-collapse{
                    width: 100%;
                    margin: 0 auto;
                    .van-collapse-item{
                        .van-cell__title{
                            height: 80px;
                            font-size: 28px;
                            line-height: 80px;
                        }
                        .van-icon-arrow::before {
                            line-height: 80px;
                            margin-right: 20px;
                        }
                        .van-collapse-item__wrapper{
                            .van-collapse-item__content{
                                font-size: 26px;
                                padding: 20px 20px;
                                box-sizing: border-box;
                            }
                        }
                    }

                }
            }
        }
    }
}
</style>
