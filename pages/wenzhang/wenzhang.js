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
  // 问答数据操作
  bindTextAreaBlur: function (e) {
    console.log("--------" + e.detail.value + app.globalData.g_userInfo.nickName + app.globalData.g_userInfo.avatarUrl)
    // post gRPC server
    wx.request({

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