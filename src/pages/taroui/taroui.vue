<!--  -->
<template>
  <view>
    <AtNavBar
      :onClickRgIconSt="handleClick"
      :onClickRgIconNd="handleClick"
      :onClickLeftIcon="handleClick"
      color='#000'
      title='NavBar 导航栏示例'
      leftText='返回'
      leftIconType="chevron-left"
      rightFirstIconType='bullet-list'
      rightSecondIconType='user'
    />
    <AtButton type='primary' :onClick="handleClick">按钮文案</AtButton>
    <picker
      mode='selector'
      :range="selector"
      :value="selectorValue"
    >
      <view class='demo-list-item'>
        <view class='demo-list-item__label'>国家地区</view>
        <view class='demo-list-item__value'>
          {{ selector[selectorValue] }}
        </view>
      </view>
    </picker>
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
import { AtButton,AtActionSheet,AtActionSheetItem,AtNavBar,picker } from 'taro-ui-vue';
import Taro from '@tarojs/taro';
export default {
  name: "taroui",
  components: {
      AtButton,AtActionSheet,AtActionSheetItem,AtNavBar,picker
  },
  data() {
    return {
      isOpened:false,
      selector: ['中国', '美国', '巴西', '日本'],
      selectorValue: 0,
    };
  },
  computed: {},
  methods: {
    handleClick () {
      Taro.showLoading({
        title: '加载中',
        icon: 'loading'
      });
      setTimeout(()=>{
        Taro.hideLoading();
      },2000);
      this.isOpened = true;
    },
    handleCancel(){
      this.isOpened = false;
    },
    handleClose(){
      this.isOpened = false;
    },
    clickBtn(data){
      console.log(data);
    }
  },
  onShow() {
    ////Taro-跨端环境判断
    console.log(process.env.TARO_ENV);
    console.log(this.$store.state.auth);
  },
};
</script>
<style lang="scss" scoped></style>
