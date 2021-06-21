export default {
  pages: [
    'pages/index/index',
    'pages/taroui/taroui'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#666",
    selectedColor: "#b4282d",
    backgroundColor: "#fafafa",
    borderStyle: 'black',
    list: [{
      pagePath: "pages/index/index",
      text: "首页",
      iconPath: "./assest/tab-bar/home.png",
      selectedIconPath: "./assest/tab-bar/home-active.png",
    },{
      pagePath: "pages/taroui/taroui",
      iconPath: "./assest/tab-bar/user.png",
      selectedIconPath: "./assest/tab-bar/user-active.png",
      text: "我的"
    }]
  },
}
