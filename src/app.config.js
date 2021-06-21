export default {
  pages: [
    'pages/index/index',
    'pages/mv/index',
    'pages/shortvideo/index',
    'pages/me/index',
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
      text: "辣图",
      iconPath: "./assest/tab-bar/image.png",
      selectedIconPath: "./assest/tab-bar/image-active.png",
    },{
      pagePath: "pages/mv/index",
      iconPath: "./assest/tab-bar/mv.png",
      selectedIconPath: "./assest/tab-bar/mv-active.png",
      text: "mv"
    },{
      pagePath: "pages/shortvideo/index",
      iconPath: "./assest/tab-bar/shiping.png",
      selectedIconPath: "./assest/tab-bar/shiping-active.png",
      text: "短视频"
    },{
      pagePath: "pages/me/index",
      iconPath: "./assest/tab-bar/wode.png",
      selectedIconPath: "./assest/tab-bar/wode-active.png",
      text: "我的"
    }]
  },
  "subPackages": [
    {
      "root": "pages/imagepage/",
      "pages": [
        'pages/hanfu/index',
        'pages/jk/index',
        'pages/luoli/index',
        'pages/nvpu/index',
        'pages/yujie/index',
      ]
    },
    {
      "root": "pages/mvpage/",
      "pages": [
        'pages/jiqing/index',
      ]
    }
  ]
}
