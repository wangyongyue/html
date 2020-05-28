function table(arr,divId){
  this.arr = arr;
  this.divId = divId;
  var element
  var indexCallBack

  this.reload = function(){
    if (element != null) {
      element.innerHTML  = "";
    }

     element = document.getElementById(this.divId);
      for(b in this.arr){
         var div =  function(i){
          return arr[b].setDiv(function(){
            if (indexCallBack != null) {
              indexCallBack(i);
            }
          });
         }(b);
        element.appendChild(div);
      }
  }
  this.addData = function(data){

    this.push(data);
    var div =  function(i){
      return arr[b].setDiv(function(){
        if (indexCallBack != null) {
          indexCallBack(i);
        }
      });
    }(this.arr.length);
    element.appendChild(div);


  }
  this.reloadIndex = function(index){


    var m = this.arr[index];
    m.reload();

  }
  this.reloadData = function(data){

    for(i in this.arr){

      var m = this.arr[index];
      m.reload();

    }

  }
  this.reomveIndex = function(index){

    var m = this.arr[index];
    m.innerHTML = "";
    this.arr.splice(index, 1);

  }
  this.reomveData = function(data){

    data.innerHTML = ""
    for(i in this.arr){
      if (this.arr[index] == data) {
        this.arr.splice(i,1);
      }
    }

  }
  this.remvoeAll = function(){

    element.innerHTML = "";
  }

  this.tableIndex = function(callBack){

    indexCallBack = callBack;

  }


}

// function Base (model){
//   this.model = model
//   var div
//   var button

//   this.setDiv = function(callBack){

//      var content = document.createElement("div");
//      content.style.backgroundColor = 'red';
//      content.style.width = '100px'

//      button = document.createElement("button");
//      button.innerHTML = this.model.name;
//      button.onclick = function(){

//       callBack();

//      }
//     content.appendChild(button);
//     div = content;
//     return div;
//   }
//   this.getDiv = function(){

//     return div;
//   }


// }
