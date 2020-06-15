function POST(h){
    this.h = h;
    var successCallBack;
    var failedCallBack;
    this.request = function(){
       var that = this;
       var xmlhttp = new XMLHttpRequest();
       xmlhttp.onreadystatechange = function()
       {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var response = JSON.parse( xmlhttp.responseText);
          console.log(response);
          if (response.code == 1)
          {
            successCallBack(response);
          }else{
            failedCallBack(response.message);
          }
        }else{

          if (that.h.requestType() === "None") {
            successCallBack(null);
          }
        }

    }
    xmlhttp.open("POST",this.h.url(),true);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    xmlhttp.send(this.h.param());

    }

    this.success = function(callBack){

      successCallBack = callBack;
    }
    this.failed = function(callBack){

      failedCallBack = callBack;

    }


}

