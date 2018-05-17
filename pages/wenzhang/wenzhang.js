var app = getApp();

Page({
  data: {
    height: 20,
    focus: false,
    datalist: "" // 数据
  },
  bindButtonTap: function (e) {
    this.setData({
      focus: true
    })
 
  },
  bindTextAreaBlur: function (e) {
    console.log("--------" + e.detail.value + app.globalData.g_userInfo.nickName + app.globalData.g_userInfo.avatarUrl)
    // post gRPC server
    wx.request({
      url: "https://wx.golang.ltd:7878/TJData",
      method: 'GET',
      data: {
        Protocol: "1",
        Protocol2: "2", // 发表吐槽
        nickName: app.globalData.g_userInfo.nickName,
        avatarUrl: app.globalData.g_userInfo.avatarUrl,
        param: e.detail.value
      },
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        // 更新数据缓存
        console.log(res.data)
      },
      fail: function (err) {
        console.log(err)
      },
      complete: function () { }
    })
  }
})