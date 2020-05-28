function Book (model){
  this.model = model
  var div
  var button

  this.setDiv = function(callBack){

     var content = document.createElement("div");
     content.style.backgroundColor = 'red';

     button = document.createElement("button");
     button.innerHTML = this.model.name;
     button.onclick = function(){

      callBack();

     }
    content.appendChild(button);
    div = content;
    return div;
  }
  this.getDiv = function(){

    return div;
  }
  this.reload = function(){

    button.innerHTML = this.model.name;
  }


}
