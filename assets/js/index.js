new WOW().init();

i = 0;
x = [ "assets/pic/home/2-2.png","assets/pic/home/2-21.png","assets/pic/home/2-22.png"]

z = 0;
y = [ "assets/pic/home/3-3.png","assets/pic/home/3-31.png","assets/pic/home/3-32.png"]

m = 0;
o = [ "assets/pic/home/4-2.png","assets/pic/home/4-21.png","assets/pic/home/4-22.png"]

j = 0;
s = [ "assets/pic/home/4-5.png","assets/pic/home/4-51.png","assets/pic/home/4-52.png"]

function myFunction(){
	var timeoutID = window.setInterval(display, 2000);  //設定每3秒執行一次display()
	function display(){
        i = (i + 1) % x.length;  //下一張圖片
        document.getElementById("play").innerHTML = "<img src='" + x[i] + "' class='d-block w-100'>" ;
	}

    var timeoutID2 = window.setInterval(display2, 2000);  //設定每3秒執行一次display()
	function display2(){
        z = (z + 1) % y.length;  //下一張圖片
        document.getElementById("play2").innerHTML = "<img src='" + y[z] + "' class='d-block s3-3'>" ;
    }

    var timeoutID3 = window.setInterval(display3, 2000);  //設定每3秒執行一次display()
	function display3(){
        m = (m + 1) % o.length;  //下一張圖片
        document.getElementById("play3").innerHTML = "<img src='" + o[m] + "' class='d-block'>" ;
    }

    var timeoutID4 = window.setInterval(display4, 2000);  //設定每3秒執行一次display()
	function display4(){
        j = (j + 1) % s.length;  //下一張圖片
        document.getElementById("play4").innerHTML = "<img src='" + s[j] + "' class='d-block'>" ;
    }

}