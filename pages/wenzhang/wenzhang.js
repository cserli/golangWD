

Page({
  data: {
    height: 20,
    focus: false,
    datalist:"" // 数据
  },
  bindButtonTap: function (e) {
    this.setData({
      focus: true
    }),
    // post gRPC server
    wx.navigateTo({
      // wx.request({
      // url: "https://wx.golang.ltd:7878/TJData",
      url: "../setting/setting",
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        //console.log(res.data)
      },
      fail: function (err) {
        console.log(err)
      },
      complete: function () { }
    })
  },
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
  }
})