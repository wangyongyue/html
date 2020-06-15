
function http(){

    this.url = function(){
      
      return "http://127.0.0.1:9090/p";
    }
    this.param = function(){

      return "";
    }
    this.requestType = function(){
      return "None";
    }
    this.clickIndex = function(index){
      console.log(index);
    }
    this.success = function(response){
      return [new Book({name:"book"}),
              new Book({name:"book"}),
              new Book({name:"book"}),
              new Book({name:"book"})];
    }
    this.failed = function(error){

    }


}