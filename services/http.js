
function http(){

    this.url = function(){
      
      return "http://127.0.0.1:9090/p";
    }
    this.param = function(){

      return "";
    }
    this.clickIndex = function(index){

      console.log(index);
    }
    this.success = function(response){

      var book  = new Book({name:response.data[0].data});
      return [book];

    }
    this.failed = function(error){


    }


}