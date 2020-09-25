<template>
    <div content="PersonalCenter">
        <Personal></Personal>
        <MessageLogging v-if="showMessageLogging"></MessageLogging>
        <Collect v-if="showCollect"></Collect>
        <BookReview v-if="showBookReview"></BookReview>
        <ReadRecord v-if="showReadRecord"></ReadRecord>
        <ReadPreferences v-if="showReadPreferences"></ReadPreferences>
        <HelpAndAdvice v-if="showHelpPage"></HelpAndAdvice>
        <Feedback v-if="showCoupleBackPage"></Feedback>
        <SetUpPage v-if="showSetPage"></SetUpPage>
    </div>
</template>

<script>
import Personal from '../components/PersonalCenter/Personal'
import MessageLogging from '../components/PersonalCenter/MessageLogging'
import Collect from '../components/PersonalCenter/Collect'
import BookReview from '../components/PersonalCenter/BookReview'
import ReadRecord from '../components/PersonalCenter/ReadRecord'
import ReadPreferences from '../components/PersonalCenter/ReadPreferences'
import HelpAndAdvice from '../components/PersonalCenter/HelpAndAdvice'
import Feedback from '../components/PersonalCenter/Feedback'
import SetUpPage from '../components/PersonalCenter/SetUpPage'
import { mapGetters } from 'vuex'
export default {
  name: 'PersonalCenter',
  components: {
    Personal,
    MessageLogging,
    Collect,
    BookReview,
    ReadRecord,
    ReadPreferences,
    HelpAndAdvice,
    Feedback,
    SetUpPage
  },
  computed: {
    ...mapGetters([
      'showMessageLogging',
      'showCollect',
      'showBookReview',
      'showReadRecord',
      'showReadPreferences',
      'showHelpPage',
      'showCoupleBackPage',
      'showSetPage'
    ])
  }
}
</script>

<style scoped lang="scss">
.PersonalCenter{
    width: 100%;
    height: 200px;
}
</style>
