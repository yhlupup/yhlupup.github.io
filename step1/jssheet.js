$(function(){

//图书分类部分
	//导航栏鼠标移入移出字体变色

	$(".navRight").mouseover(function(){
		$("#navFirst").css("color","black");
		$(this).css("color","red");
	}).mouseout(function() {
		$(this).css("color","black");
		$("#navFirst").css("color","red");
	});
	

	console.log(JSON.parse(localStorage.getItem("bookTypes")));
	var book=JSON.parse(localStorage.getItem("bookTypes"));
	console.log(book);
	$.each(book,function(index,item){
		console.log(item.title);
		var div1=`<div class='div1'>
			<span>${item.title}</span>
			<span class="iconfont" id="div1Icon">&#xe64a</span>

		</div>`;
		var div=$("<div></div>")
		div.append(div1);
		div.mouseover(function(){
			$(".over").show();
			$(".over").html("");
		for(var i=0;i<item.list.length;i++){
			var div3=`<div class='div3'>${item.list[i].name}</div>`;
			var div4=$("<div class='div4'></div>")
		var items=item.list[i].content;
			for(var j=0;j<items.length;j++){			
				var div5=`<span class='div5'>${items[j]}</span>`;
				div4.append(div5);
			}
			$(".over").append(div3);
			$(".over").append(div4);
		}
		}).mouseout(function(){
			$(".over").hide();
		})
		$(".left1").append(div);
		var div2=$("<div></div>");
		$.each(item.list,function(index,obj){
			var span=`<span class='div2'>${obj.name}</span>`;
			// var div3=`<div class='div2'>${obj.name}</div>`;
			div2.append(span);
			div.append(div2);
			$(".left1").append(div);
		})		
		$(".left1").append(div6);
		$(".over").mouseover(function(){
			$(".over").show();
		})
		$(".over").mouseout(function(){
			$(".over").hide();
		})
	})
		var div6=`<div>
				<a href="">全部商品分类......</a>
				</div>`;
		$(".left1").append(div6);

	//轮播图
	new Swiper(".swiper-container",{
		autoplay:{delay:2000,
		disableOnInteraction:false},//自动滑动
		loop:true,//环路循环
		pagination:{
			el:".swiper-pagination",//分页器
		},
		navigation:{
			nextEl:'.swiper-button-next',//前进后退箭头
			prevEl:'.swiper-button-prev',
		}
	})
	// 猜你喜欢
	$(".btm_top>div:eq(0)").css("border-top","5px solid red");
	var div=`<div class="btm_middle">
		<div class="btm_img">
			<img src="imgs/guessLikes/like01.jpg">
		</div>
		<div class="btm_text">
			<span class="text1">${guessLikes[0].title}</span>
			<br>
			<span class="text2">¥${guessLikes[0].newPrice}</span>
			&nbsp 
			<span class="text3"><del>¥${guessLikes[0].oldPrice}</del></span>
			<br>
			<span class="text4">${guessLikes[0].desc}</span>
		</div>
	</div>`
	$(".bottom").append(div);
	var div2=$("<div class='btm1_bottom'>");
	for(var i=1;i<guessLikes.length;i++){
		var div1=`<div class="btm1_bot">
		<div class="btm1_img">
			<img src="imgs/guessLikes/${guessLikes[i].img}">
		</div>
		<div class="btm1_text">
			<span class="text5">${guessLikes[i].title}</span>
			<br>
			<span class="text6">¥${guessLikes[i].newPrice}</span>
			<span class="text7"><del>¥${guessLikes[i].oldPrice}</del></span>
		</div>
		
	</div>`
	div2.append(div1);
	$(".bottom").append(div2);
	}
	//本周精选
		
	 $(".btm_t").click(function(){
	 	$(".botttomContent").css("left","560px");
	 	$(".botttomContent").animate({
	 		"left":"0px"},200);
	 	$(".btm1_bot").remove();
	 	$(".btm_middle").remove();
	 	$(".btm_top>div").css("border-top","5px solid transparent");
	 	$(this).css("border-top","5px solid red");
	 	var guessLikes=JSON.parse(localStorage.getItem("guessLikes"));
	 	var selected=JSON.parse(localStorage.getItem("selected"));
	 	var recommend=JSON.parse(localStorage.getItem("recommend"));
	 	var item;
        var pass;
	 	if(this.id=="guess"){
	 		pass="guessLikes";
	 		item=guessLikes;
	 	}else if(this.id=="select"){
	 		pass="selected";
	 		item=selected;
	 	}else{
	 		pass="recommend";
	 		item=recommend;
	 	}
	 	var div=`<div class="btm_middle">
		<div class="btm_img">
			<img src="imgs/${pass}/${item[0].img}">
		</div>
		<div class="btm_text">
			<span class="text1">${item[0].title}</span>
			<br>
			<span class="text2">¥${item[0].newPrice}</span>
			&nbsp 
			<span class="text3"><del>¥${item[0].oldPrice}</del></span>
			<br>
			<span class="text4">${item[0].desc}</span>
		</div>
	</div>`
	$(".botttomContent").append(div);
	var div2=$("<div class='btm1_bottom'>");
	for(var i=1;i<item.length;i++){
		var div1=`<div class="btm1_bot">
		<div class="btm1_img">
			<img src="imgs/${pass}/${item[i].img}">
		</div>
		<div class="btm1_text">
			<span class="text5">${item[i].title}</span>
			<br>
			<span class="text6">¥${item[i].newPrice}</span>
			<span class="text7"><del>¥${item[i].oldPrice}</del></span>
		</div>
		
	</div>`
	div2.append(div1);
	$(".botttomContent").append(div2);
	}
	 })
	 // 图书畅销榜
	 var bestSell=`<div class="bestSell"></div>`
	console.log(bestSelling);
	for(var i=0;i<bestSelling.length;i++){
		console.log(111);
		if (i<9) {
			var num="0"+(i+1)+".";
		}else {
			var num=i+1;
		}
		var divs=`<div class="right1_2_1">
		<div class="bestSell">
			<span class="bestSell">${num+bestSelling[i]}</span>
		</div>
		<div class="picGt">
			<span class="iconfont" id="111">&#xe64a</span>
		</div>
		</div>`
		$(".right1_2").append(divs);
		$(".right1_2_1").mouseover(function() {
			$(this).css("color","red");
		}).mouseout(function(){
			$(this).css("color","#111");
		});
	}

	// 淘书团热销
	// var taoshu=$(".taoshu1");
	for(var i=0;i<4;i++){
		var sell=
		`<div class="taoshu1">
			<div class="sell_img">
				<img src="imgs/taoshu/${taoshutuan[i].img}">
			</div>
			<div class="sell_desc">
				<a href=""><span>${taoshutuan[i].desc}</span></a>
			</div>
			<div class="price">
				<span>团购价</span>
				<span>${"¥"+taoshutuan[i].newPrice}</span>
				<span class="priceOld"><del>${"¥"+taoshutuan[i].oldPrice}</del></span>
			</div>
			<div class="zhekou">${(taoshutuan[i].newPrice*10/taoshutuan[i].oldPrice).toFixed(1)+"折"}</div>
		</div>`
		$(".sell_c").append(sell);
	}
	// 新书上架
	for(var i=0;i<newbooks.length;i++){
		console.log(i);
		var newbook=`<div class="bkslist">
			<div class="newbooks_name">
				<span>${newbooks[i].title}</span>
			</div>
			<div class="newbooks_author">
				<span>${newbooks[i].author}</span>
			</div>
			<div class="newbooks_nprice">
				<span>${"¥"+newbooks[i].newPrice}</span>
			</div>
			<div class="newbooks_oprice">
				<span><del>${"¥"+newbooks[i].oldPrice}</del></span>
			</div>
			<div class="newbooks_img">
				<img src="imgs/newbooks/${newbooks[i].img}">
			</div>
		</div>`
		$(".bookList").append(newbook);
	}
	//平台自营
	//自营好书推荐
	var selfRecom=`<div class="selfRecom">
		<div class="selfRecom_img">
			<img src="imgs/selfSupport/novel/novel01.jpg">
		</div>
		<div class="selfRecom_title">
			<span>${selfSupport[0].list[0].title}</span>
		</div>
		<div class="selfRecom_price">
			<span>${"¥"+selfSupport[0].list[0].newPrice}</span>
			<span><del>${"¥"+selfSupport[0].list[0].oldPrice}</del></span>
		</div>
	</div>`
	$(".selfRecommend").append(selfRecom);

	// 书单列表
	var li=["novel","poetry","suspense","youth"];
	var ids="";

	//初始列表
		function show(){
			for(let x=0;x<selfSupport[0].list.length;x++){
			console.log(111);
			var SupportList1=
			$(`<div class="SupportList">
				<div class="SupportList_img">
					<img src="imgs/selfSupport/novel/${selfSupport[0].list[x].img}">
				</div>
				<div class="SupportList_title">
					<span>${selfSupport[0].list[x].title}</span>
				</div>
				<div class="SupportList_price">
 					<span>${"¥"+selfSupport[0].list[x].newPrice}</span>
 					<span><del>${"¥"+selfSupport[0].list[x].oldPrice}</del></span>
				</div>
			</div>`)
			$("#novel").css("border-top","3px solid #b27f45");
			$(".selfSupportList").append(SupportList1);

			}
		}
	show();
	for(let i=0;i<selfSupport.length;i++){
		var selfSupport_title=$(`<div class="supportTitle">
				<span>${selfSupport[i].title}</span>
		</div>`)
		let ids=li[i];
		selfSupport_title.attr("id",ids);
		console.log(selfSupport_title[0].id);
		// console.log(selfSupport[i].title.id);
		$(".self").append(selfSupport_title);
		$(".self div:eq(1)").css("border-top","3px solid #b27f45");
		
		
		selfSupport_title.mouseover(function(){
			$(".self div:eq(1)").css("border-top","3px solid transparent");
			$(this).css("border-top","3px solid #b27f45");
			$(".selfSupportList").html("");
			for(let j=0;j<selfSupport[i].list.length;j++){
				console.log(this.id);
			var SupportList=
			$(`<div class="SupportList">
				<div class="SupportList_img">
					<img src="imgs/selfSupport/${this.id}/${selfSupport[i].list[j].img}">
				</div>
				<div class="SupportList_title">
					<span>${selfSupport[i].list[j].title}</span>
				</div>
				<div class="SupportList_price">
 					<span>${"¥"+selfSupport[i].list[j].newPrice}</span>
 					<span><del>${"¥"+selfSupport[i].list[j].oldPrice}</del></span>
				</div>
			</div>`)
			$(".selfSupportList").append(SupportList);
		}
		}).mouseout(function(){
			// $(".selfSupportList").html("");
			$(".supportTitle").css("border-top","3px solid transparent")
			$(this).css("border-top","3px solid #b27f45");
			// show();
		})
	}
	// 出版社直销
	function pressMouse(){
		var div=$(`<div>
					<div class="pressListTitle">
						<span>${pressList[0].name}</span>
					</div>
					<div class="pressListDesc">
						<span>${pressList[0].desc}</span>
					</div>
					</div>`)
				$(".pressListRight").append(div);
		var content=$(`<div class="pressListRightsele"></div>`)
		for(let j=0;j<pressList[0].list.length;j++){

			var pressListRightContent=$(`<div class="pressListRightContent">
					
				<div class="pressListBooks">
					<img src="imgs/press/${0}/${pressList[0].list[j].img}">
					<div class="pressListtitle">
						<span>${pressList[0].list[j].title}</span>
					</div>
						<span id="newTag">${"¥"+pressList[0].list[j].newPrice}</span>
 						<span><del>${"¥"+pressList[0].list[j].oldPrice}</del></span>
					</div>
				</div>`)
				content.append(pressListRightContent);
			}
				$(".pressListRight").append(content);
	}
	pressMouse();
	//悬浮事件
	var iconGt=$(`<span class="iconfont" id="pressGt">&#xe64a</span>`);
	for(let i=0;i<pressList.length;i++){
		console.log(111);
		var press=$(`<div class="press">			
			<span>${pressList[i].name}</span>
			<div>`)
		$(".pressListList").append(press);
		$(".pressListList>div:eq(0)").append(iconGt);
		$(".pressListList>div:eq(0)").css("color","white");
		$(".pressListList>div:eq(0)").css("background","#5eadb1");
		press.mouseenter(function(){
			$(".pressListList>div:eq(0)").css("background","");
			$(".pressListList>div:eq(0)").css("color","black");
			$(this).css("background","#5eadb1");
			$(this).css("color","white");
			$(".pressListRight").html("");
			$(this).append(iconGt)
			var div=$(`<div>
					<div class="pressListTitle">
						<span>${pressList[i].name}</span>
					</div>
					<div class="pressListDesc">
						<span>${pressList[i].desc}</span>
					</div>
					</div>`)
				$(".pressListRight").append(div);
			var content=$(`<div class="pressListRightsele"></div>`)
			for(let j=0;j<pressList[i].list.length;j++){

				var pressListRightContent=$(`<div class="pressListRightContent">
					
					<div class="pressListBooks">
						<img src="imgs/press/${i}/${pressList[i].list[j].img}">
						<div class="pressListtitle">
							<span>${pressList[i].list[j].title}</span>
						</div>
						<span id="newTag">${"¥"+pressList[i].list[j].newPrice}</span>
 						<span><del>${"¥"+pressList[i].list[j].oldPrice}</del></span>
					</div>

				</div>`)

				content.append(pressListRightContent);
				
			}
				$(".pressListRight").append(content);
		}).mouseleave(function(){
			$("#pressGt").remove();
			$(this).css("background","");
			$(this).css("color","black");
			// $(".pressListRight").html("");
			// $(".pressListList>div:eq(0)").css("background","#5eadb1");
			// $(".pressListList>div:eq(0)").css("color","white");
			// $(".pressListList>div:eq(0)").append(iconGt);
		
			// pressMouse();
		})
		//按钮点击事件
		$("#fontUp").click(function(){
			$(".press").css("position","relative");
			$(".press").css("top","-400px");
		})
		$("#fontDown").click(function(){

			$(".press").css("top","");
		})
	}

	








})
	