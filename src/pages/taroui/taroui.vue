<!--  -->
<template>
  <view>
    <AtButton type='primary' :onClick="handleClick">按钮文案</AtButton>
  </view>
</template>

<script>
import { AtButton } from 'taro-ui-vue'
export default {


  name: "taroui",

  components: {
      AtButton
  },

  data() {
    return {};
  },

  computed: {},

  methods: {
    handleClick () {
      console.log('click button')
    }
  },
  onShow() {
    console.log(this.$store.state.auth);
  },
};
</script>
<style lang="scss" scoped></style>
