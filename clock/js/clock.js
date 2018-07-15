var canvas = document.getElementById('tutorial');
var deg = Math.PI / 180;
if(canvas.getContext){  
var ctx = canvas.getContext('2d');
}
function draw(){

    //获取本地时间
    var  nowtime = new Date();
    var hours = nowtime.getHours();
    var minutes = nowtime.getMinutes();
    var seconds = nowtime.getSeconds();
  
    //清除画布（防止覆盖）  
    ctx.clearRect(0,0,1300,900); 
    ctx.lineWidth = 2;
    ctx.fillStyle = "black";
    ctx.font = "bold 25px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(hours+":"+minutes+":"+seconds,400,500);

    //设置小时的范围不超过12
    hours = hours > 12 ? hours-12:hours;
    //设置时针的精准位置
    hours = hours + minutes/60;
    ctx.lineCap = "round";
    //时钟框
    ctx.beginPath();
    ctx.arc(400,300,149,0,2 * Math.PI,true);
    ctx.moveTo(544,300);
    ctx.arc(400,300,144,0,2*Math.PI,false);
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    //分针
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'rgba(14,54,244,0.7)'; 
    ctx.save();
    ctx.translate(400,300);
    ctx.rotate(minutes*6*deg);
    ctx.moveTo(0,5);
    ctx.lineTo(0,-115) ;
    ctx.stroke();
    ctx.restore();
    ctx.closePath();
    //时针
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.strokeStyle = 'rgba(55,0,204,0.7)'; 
    ctx.save();
    ctx.translate(400,300);
    ctx.rotate(hours*30*deg+90*deg);
    ctx.moveTo(5,0);
    ctx.lineTo(-75,0);
    ctx.stroke();
    ctx.restore();
    ctx.closePath();
    //秒针
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "red"; 
    ctx.save();
    ctx.translate(400,300);
    ctx.rotate(seconds*6*deg +15* 6*deg);
    ctx.moveTo(5,0);
    ctx.lineTo(-75,0);
    ctx.stroke();
    ctx.restore();
    ctx.closePath();
    //刻度(小时)
    for(var i = 0;i < 12;i++){
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = "black";
    ctx.save();
    ctx.translate(400,300);
    ctx.rotate(i*30*deg);
    ctx.moveTo(0,144);
    ctx.lineTo(0,136);
    ctx.stroke();
    ctx.restore();
    ctx.closePath();
    }
    //刻度(分钟)  
    for(var i = 0;i < 60;i++){  
    ctx.beginPath();  
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#0022aa";   
    ctx.save();  
    ctx.translate(400,300);  
    ctx.rotate(i * 6 *deg);  
    ctx.moveTo(0,138);   
    ctx.lineTo(0,144);  
    ctx.stroke();   
    ctx.restore();  
    ctx.closePath();  
    }  
    //字体
    ctx.font = "bold 18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "black";
    ctx.fillText("12",400,176);
    ctx.fillText("3",524,300);
    ctx.fillText("6",400,424);
    ctx.fillText("9",276,300);

}
setInterval(draw,1000);


