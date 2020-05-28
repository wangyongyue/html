
function Controller(divId,http){

    var arr = [];
    var con = new table(arr,"div1");
    con.tableIndex(function(index){
      http.clickIndex(index);
    });
    var p = new POST(http);
    p.request();
    console.log(p)
    p.success((response) => {

       var array = http.success(response);
       for(i in array){
        arr.push(array[i]);
       }
       con.reload();

    });
    p.failed((error) => {

      http.failed(error);

    });
  
}