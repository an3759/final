/*////////////////step1//////////////////////////*/
function toStep2() {
	var c = document.getElementById("price");

	if(c.innerHTML == 0){
		alert("還沒選購喔!");
	  	this.style.disable = true;
	}
	else{
    	document.getElementById("step1").style.display = "none";
    	document.getElementById("step2").style.display = "block";
	} 
}






new Vue({
    el:'#step1',
    data:{
        productList:[
            {
                'name': '愛噁沙內搭衣',//產品名稱
                'num': 3,//數量
                'price': 4999//單價
            },
                        {
                'name': '好美麗圍兜兜',//產品名稱
                'num': 10,//數量
                'price': 2999//單價
            },
                        {
                'name': '石上昕簽名照',//產品名稱
                'num': 1,//數量
                'price': 9//單價
            }
        ],
    },
    computed: {
            isSelectAll:function(){
                return this.productList.every(function (val) { return val.select});
            },
            getTotal:function(){
                var list = this.productList.filter(function (item) {return item.select});
                var totalPrice = 0;
                var totalNum = 0;
                for(var i=0,len=list.length;i<len;i++){
            totalNum += list[i].num;
            totalPrice += list[i].num*list[i].price;
        }
                return {totalNum:totalNum, totalPrice:totalPrice};
            }
        },
    methods:{
            selectAll:function(_isSelect){
                for (var i = 0, len = this.productList.length; i < len; i++) {
                    this.productList[i].select = !_isSelect;
                }
            },
            deleteProduct:function(index){
                this.productList.splice(index,1);
            },
            deleteSelectedProduct:function(){
                this.productList=this.productList.filter(function (item) {return !item.select});
            }
    },
    mounted:function () {
            var _this=this;
            //為productList新增select（是否選中）欄位，初始值為true
            this.productList.map(function (item) {
                _this.$set(item, 'select', false);
            })
        }
})


/////////////////////////step2/////////////////////////////////////
function choosepay1() {
	document.getElementById("function1").style.display = "block";
	document.getElementById("function2").style.display = "none";	
}
function choosepay2() {
	document.getElementById("function1").style.display = "none";
	document.getElementById("function2").style.display = "block";	
}

function back() {
	document.getElementById("step1").style.display = "block";
    document.getElementById("step2").style.display = "none";	
}