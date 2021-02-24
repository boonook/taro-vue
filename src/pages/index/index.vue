<template>
  <view class="index">
    <!-- <text>{{ msg }}</text> -->
    <icon size="60" type="success" />
    <icon size="60" type="info" />
    <icon size="60" type="warn" color="#ccc" />
    <icon size="60" type="warn" />
    <icon size="60" type="waiting" />
    <icon size="20" type="success_no_circle" />
    <icon size="20" type="warn" />
    <icon size="20" type="success" />
    <icon size="20" type="download" />
    <icon size="20" type="clear" color="red" />
    <icon size="20" type="search" />

    <button class="btn-max-w" plain type="primary" @tap="toTaroUI()">
      按钮
    </button>

    <button class="btn-max-w" plain type="primary" @tap="toTaroStore()">
      操作store
    </button>

    <button class="btn-max-w" plain type="primary" @tap="getData()">
      网络请求
    </button>
  </view>
</template>

<script>
import "./index.scss";
import Taro from "@tarojs/taro";
import {mapActions} from 'vuex'
import { getWxarticleChaptersJson } from "@/src/servers/servers";

export default {
  data() {
    return {
      msg: "Hello world!",
      btn: [
        {
          text: "页面主操作 Normal",
          size: "default",
          type: "primary"
        },
        {
          text: "页面主操作 Loading",
          size: "default",
          type: "primary",
          loading: true
        },
        {
          text: "页面主操作 Disabled",
          size: "default",
          type: "primary",
          disabled: true
        },
        {
          text: "页面次要操作 Normal",
          size: "default",
          type: "default"
        },
        {
          text: "页面次要操作 Disabled",
          size: "default",
          type: "default",
          disabled: true
        },
        {
          text: "警告类操作 Normal",
          size: "default",
          type: "warn"
        },
        {
          text: "警告类操作 Disabled",
          size: "default",
          type: "warn",
          disabled: true
        }
      ]
    };
  },

  /**
   * 页面创建时执行，此生命周期在小程序端对应小程序页面的 onLoad 生命周期。此生命周期可以访问 getCurrentInstance().router
   */
  onLoad(options) {
    console.log("onLoad options = ", options);
  },
  /**
   * 页面加载时触发，一个页面只会调用一次，此时页面 DOM 尚未准备好，还不能和视图层进行交互
   */
  onCreate() {
    console.log("onCreate...");
  },

  /**
   * 页面初次渲染完成时触发，一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互
   */
  mounted() {
    console.log("mounted...");
    // this.getData();
  },

  /**
   * 页面即将更新
   */
  beforeUpdate() {
    console.log("beforeUpdate...");
  },
  /**
   * 页面更新完毕
   */
  updated() {
    console.log("updated...");
  },
  /**
   * 页面卸载时触发，如 redirectTo 或 navigateBack 到其他页面时
   */
  beforeDestroy() {
    console.log("beforeDestroy...");
  },

  /**
   * 页面显示/切入前台时触发
   */
  onShow() {
    console.log("onShow...");
  },

  /**
   * 页面隐藏/切入后台时触发， 如 navigateTo 或底部 tab 切换到其他页面，小程序切入后台等
   */
  onHide() {
    console.log("onHide...");
  },

  /**
   * 监听用户下拉刷新事件
   */
  onPullDownRefresh() {
    console.log("onPullDownRefresh...");
  },

  methods: {
    ...mapActions([
      'handle',
    ]),
    getData() {
      let that = this;
      getWxarticleChaptersJson()
        .then(res => {
          that.msg = res;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },

    toTaroStore(){
      this.handle(true).then(res=>{
        debugger
      })
    },

    toTaroUI() {
      Taro.navigateTo({
        url: "/pages/taroui/taroui?id=1",
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          acceptDataFromOpenedPage: function(data) {
            console.log(data);
          },
          someEvent: function(data) {
            console.log(data);
          }
        }
        // success: function(res) {
        //   // 通过eventChannel向被打开页面传送数据
        //   res.eventChannel.emit("acceptDataFromOpenerPage", { data: "test" });
        // }
      }).then(res => {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit("acceptDataFromOpenerPage", { data: "test" });
      });
    }
  }
};
</script>
