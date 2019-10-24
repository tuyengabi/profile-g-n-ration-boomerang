
scrollToView();

function scrollToView(){
    setTimeout(function() {
        document.getElementById('myDiv').scrollIntoView({behavior: "smooth"});      
        pause();    
    }, 3000);    
}

function pause(){
    setTimeout(function() {         
        var elmnt = document.getElementById("video");
        elmnt.scrollIntoView(true);  
        document.getElementById("video").remove();     
    }, 1000);    
}

// fade section

$(function(){
	$(window).scroll( function(){
		
		var bottom_of_window = $(window).scrollTop() + $(window).height();
		//fade-in
		$('.fade-ani').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight();
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				//$(this).removeClass('showing');
			}
		});

	});
});

// tuyen

var bar1 = new ldBar("#myItem1");
        var bar2 = document.getElementById('myItem1').ldBar;
        bar1.set(60);