<!--  -->
<template>
  <view>
    <AtButton type='primary' :onClick="handleClick">按钮文案</AtButton>
    <AtActionSheet
      cancelText='取消'
      :isOpened="isOpened"
      :on-cancel="handleCancel"
      :on-close="handleClose"
      title='清除位置信息后， 别人将不能查看到你'
    >
      <AtActionSheetItem
        :on-click="()=>clickBtn(1)"
      >
        按钮一
      </AtActionSheetItem>
      <AtActionSheetItem
        :on-click="()=>clickBtn(2)"
      >
        按钮二
      </AtActionSheetItem>
      <AtActionSheetItem
        :on-click="()=>clickBtn(3)"
      >
        <text class='danger'>清除位置信息并退出</text>
      </AtActionSheetItem>
    </AtActionSheet>
  </view>
</template>

<script>
import { AtButton,AtActionSheet,AtActionSheetItem } from 'taro-ui-vue'
export default {
  name: "taroui",
  components: {
      AtButton,AtActionSheet,AtActionSheetItem
  },
  data() {
    return {
      isOpened:false
    };
  },
  computed: {},
  methods: {
    handleClick () {
      this.isOpened = true;
    },
    handleCancel(){
      this.isOpened = false;
    },
    handleClose(){
      this.isOpened = false;
    },
    clickBtn(data){
      debugger
      console.log(data);
    }
  },
  onShow() {
    console.log(this.$store.state.auth);
  },
};
</script>
<style lang="scss" scoped></style>
