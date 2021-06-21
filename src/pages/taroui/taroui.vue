<!--  -->
<template>
  <view>
    <scroll-view
      upperThreshold="50"
      class="scroll-view_H"
      @onScrollToUpper="scrolltoupper"
      @scroll="scroll"
      style="width: 100%">
      <Image
        style='width:100%;height: 100px;background: #fff;'
        src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
      />
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
      <AtButton type='primary' :onClick="handleClick"><Text>按钮文案</Text></AtButton>
      <picker
        mode='selector'
        :range="selector"
        :value="selectorValue"
      >
        <view class='demo-list-item'>
          <view class='demo-list-item__label'>
            <Text>国家地区</Text>
          </view>
          <view class='demo-list-item__value'>
            {{ selector[selectorValue] }}
          </view>
        </view>
      </picker>
      <view class='example-item'>
        <picker
          mode='date'
          :value="dateSel"
          @change="handleDateChange"
        >
          <view class='demo-list-item'>
            <view class='demo-list-item__label'><Text>请选择日期</Text></view>
            <view class='demo-list-item__value'>{{ dateSel }}</view>
          </view>
        </picker>
      </view>
      <view>
        <AtImagePicker
          multiple
          :files="files"
          :onChange="onChange"
          :onFail="onFail"
          :onImageClick="onImageClick"
        />
      </view>
      <view>
        <AtImagePicker
          multiple
          :files="files"
          :onChange="onChange"
          :onFail="onFail"
          :onImageClick="onImageClick"
        />
      </view>
      <view>
        <AtImagePicker
          multiple
          :files="files"
          :onChange="onChange"
          :onFail="onFail"
          :onImageClick="onImageClick"
        />
      </view>
      <view>
        <AtImagePicker
          multiple
          :files="files"
          :onChange="onChange"
          :onFail="onFail"
          :onImageClick="onImageClick"
        />
      </view>
      <view>
        <AtImagePicker
          multiple
          :files="files"
          :onChange="onChange"
          :onFail="onFail"
          :onImageClick="onImageClick"
        />
      </view>
      <view>
        <AtImagePicker
          multiple
          :files="files"
          :onChange="onChange"
          :onFail="onFail"
          :onImageClick="onImageClick"
        />
      </view>
      <view>
        <AtImagePicker
          multiple
          :files="files"
          :onChange="onChange"
          :onFail="onFail"
          :onImageClick="onImageClick"
        />
      </view>
      <view>
        <AtImagePicker
          multiple
          :files="files"
          :onChange="onChange"
          :onFail="onFail"
          :onImageClick="onImageClick"
        />
      </view>
      <view>
        <AtImagePicker
          multiple
          :files="files"
          :onChange="onChange"
          :onFail="onFail"
          :onImageClick="onImageClick"
        />
      </view>
      <view>
        <AtImagePicker
          multiple
          :files="files"
          :onChange="onChange"
          :onFail="onFail"
          :onImageClick="onImageClick"
        />
      </view>
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
    </scroll-view>
  </view>
</template>

<script>
import { AtButton,AtActionSheet,AtActionSheetItem,AtNavBar,AtImagePicker  } from 'taro-ui-vue';
import Taro from '@tarojs/taro';
export default {
  name: "taroui",
  components: {
      AtButton,AtActionSheet,AtActionSheetItem,AtNavBar,AtImagePicker
  },
  data() {
    return {
      isOpened:false,
      selector: ['中国', '美国', '巴西', '日本'],
      selectorValue: 0,
      dateSel: '2018-06-18',
      files: [
        {
          url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
        },
        {
          url: 'https://storage.360buyimg.com/mtd/home/221543234387016.jpg',
        },
        {
          url: 'https://storage.360buyimg.com/mtd/home/331543234387025.jpg',
        },
        {
          type: 'btn'
        }
      ]
    };
  },
  computed: {},
  methods: {
    onChange (files) {
      this.files = files
    },
    onFail (mes) {
      console.log(mes)
    },
    onImageClick (index, file) {
      console.log(index, file)
    },
    scrolltoupper(){
      Taro.showLoading({
        title: '加载中',
        icon: 'loading',
      });
    },
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
    handleDateChange (e) {
      this.dateSel = e.detail.value
    },
    handleCancel(){
      this.isOpened = false;
    },
    handleClose(){
      this.isOpened = false;
    },
    clickBtn(data){
      console.log(data);
    },
    scroll(data){
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
