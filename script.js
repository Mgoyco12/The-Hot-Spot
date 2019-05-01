var imgUrl = [];
var item = [];
var price = [];
$(".add").click(function(){
    var num = parseInt($(".in3").val()); 
    var img = $(".in1").val();
    var name = $(".in2").val();
    imgUrl.push(img);
    item.push(name);
    price.push(num);
    });