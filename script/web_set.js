// 另開視窗
function externalLinks() { 
 if (!document.getElementsByTagName) return; 
 var anchors = document.getElementsByTagName("a"); 
 for (var i=0; i<anchors.length; i++) { 
   var anchor = anchors[i]; 
   if (anchor.getAttribute("href") && 
       anchor.getAttribute("rel") == "external") 
     anchor.target = "_blank"; 
 } 
} 
window.onload = externalLinks;

//圖片延遲載入
$(function() {
  $("#page_container img").lazyload({placeholder : "../images/grey.gif",effect: "fadeIn"});
      });
	  
//選單設定
$(document).ready(function() {
	  $('#fullpage').fullpage({
		  //sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
		  anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
		  menu: '#menu',
		  afterLoad: function(anchorLink, index){
          
		  //賽事介紹
			if(anchorLink == 'secondPage'){
				//moving the image
				$('#about').find('.my_about').delay(500).animate({
					left: '0%'
				}, 1500, 'easeOutExpo');
			}
		  
		  //旅行社行程
			if(anchorLink == '3rdPage'){
				//moving the image
				$('#travel').find('#travel_list').delay(500).animate({
					left: '0%'
				}, 1500, 'easeOutExpo');
			}
		  
		  //相關報導
			if(anchorLink == '4thpage'){
				//moving the image
				$('#news').find('#news_list').delay(500).animate({
					left: '0%'
				}, 1500, 'easeOutExpo');
			}
			
		  //獨家活動
			if(anchorLink == 'lastPage'){
				//moving the image
				$('#event').find('#box_event').delay(500).animate({
					left: '0%'
				}, 1500, 'easeOutExpo');
			}		
			
		  }
	  });

  });
  
//FB分享按鈕
 (function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.0";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
	
//圖片輪播效果
jQuery(function(){
	jQuery('#camera_wrap_1').camera({
		height: '400px',
		loader: '',//bar
		pagination: false,
		thumbnails: true
	});
});   	  