Page({
   
  /**
   * 页面的初始数据
   */
  data: {
    setInter:"",
    num:[1,2,3],
    num2:[1,2,3],
    distance:0,
    input:[],
    input2:0,
    interval:1000,

  },
  input(e){
    let input=e.detail.value;
    for(let i=1;i<=input;i++){
      this.data.input.push(i)
    }
  },
  input2(e){
    let input2=e.detail.value;
    console.log(input2);
      this.setData({
        interval:parseInt(input2)*1000
      })
  },

  confirm(){
    console.log("input:"+this.data.input)
    this.setData({
      num2:this.data.input
    })
    this.data.distance=0;
    clearInterval(this.data.setInter);
    this.run(this.data.interval);
   
  },
  run(interval){
    if(this.data.num2.length>3){
      let i=0;
      var _this = this;
      //将计时器赋值给setInter
      this.data.setInter=setInterval(
          function () {
            if(i+3<_this.data.num2.length){
              _this.setData({
                num:_this.data.num.push(_this.data.num2[i+3]),
                distance:_this.data.distance+20
              });

            }
              
           
              
                i++;
              
          }
    , interval);   
    }
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   this.run(this.data.interval);

  //  while(true){
  //    setTimeout(function() {
  //      console.log("abc")
  //    },1000)
  //  }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})