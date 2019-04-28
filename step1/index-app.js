// 轮播图
$(function(){
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

// 图书分类拼接
	$.each(bookTypes,function(index,item){
	// 	console.log(item.title);
	var bookListContent=$(`<div class="bookListContent"></div>`)

		var div=`
			<div class='bookListTitle'>
				<span>${item.title}</span>
			</div>`;
		bookListContent.append(div);
		var div1=$(`<div class="bookListName"></div>`);
		for(let i=0;i<item.list.length;i++){
			var span=$(`<span >${item.list[i].name+"&nbsp"}</span>`);
			div1.append(span);
		}
		bookListContent.append(div1);
		var picture=`
			<div class='bookListPicture'>
				<img src="imgs/types/${item.img}">
			</div>`;
		bookListContent.append(picture);
		$(".bookList").append(bookListContent);

	})
	
//淘书团
	for(var i=0;i<4;i++){
		var sell=
		`<div class="taoshu">
			<div class="sell_img">
				<img src="imgs/taoshu/${taoshutuan[i].img}">
			</div>
			<div class="sell_desc">
				<a href=""><span>${taoshutuan[i].desc}</span></a>
			</div>
			<div class="price">
				<span>团购价</span>
				<span>${"¥"+taoshutuan[i].newPrice}</span>
				<span><del>${"¥"+taoshutuan[i].oldPrice}</del></span>
			</div>
			<div class="zhekou">${(taoshutuan[i].newPrice*10/taoshutuan[i].oldPrice).toFixed(1)+"折"}</div>
		</div>`
		$(".selectBookList").append(sell);
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
			<div class="newbooks_img">
				<img src="imgs/newbooks/${newbooks[i].img}">
			</div>
		</div>`
		$(".newBooksList").append(newbook);
	}
//畅销榜
	for(var i=0;i<4;i++){
		var bestSell=
		`<div class="bestSell">
			<div class="bestSell_img">
				<img src="imgs/taoshu/${taoshutuan[i].img}">
			</div>
			<div class="bestSellRight">
				<div class="bestSell_title">
					<span>${taoshutuan[i].title}</span>
				</div>
				<div class="bestSellProduce">
					<span >${taoshutuan[i].author}</span>
					<span >${taoshutuan[i].publishDate}</span>
					<span >${taoshutuan[i].publishing}</span>

				</div>
				<div class="bestSellPrice">
					<span class="nprice">${"¥"+taoshutuan[i].newPrice+"&nbsp"}</span>
					<span >${"("+(taoshutuan[i].newPrice*10/taoshutuan[i].oldPrice).toFixed(1)+"折"+")"+"&nbsp"}</span>
					<span>定价:  <del>${"¥"+taoshutuan[i].oldPrice}</del></span>
				</div>
					<i class="iconfont" id="iconFont5">&#xe78f</i>
			</div>
		</div>`
		$(".bestSellingList").append(bestSell);
	}







})

	






