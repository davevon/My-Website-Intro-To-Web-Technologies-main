
$(function(){
    var pages = ['index', 'about', 'contact'];
    var pathname = window.location.pathname;

    $('.nav-link').each(function(i){
        if(pathname.includes(pages[i])){
            $(this).addClass('active');
            $(this).attr('aria-current', 'page');
        }else if(this.className.includes('active')){
            $(this).removeClass('active');
        }
    });
});

var rate = 0;
 
function submitRate(){
	var user=document.getElementById('user').value;
	var review=document.getElementById('review').value;
	if(rate != 0 && user !="" && review !=""){
		var html=
		"<h4>User: <label class='text-primary'>" + user + "</label></h4>"
		+"<h4>Rating: <label class='text-primary'>" + rate + "</label></h4>"
		+"<h4>Review</h4>"
		+"<p>"+review+"</p>"
		+"<hr style='border-top:1px solid #000;'/>";
		document.getElementById('result').innerHTML+=html;
 
		document.getElementById('user').value="";
		document.getElementById('review').value="";
	}
}
 
function startRating(item){
	rate=item.id[0];
	sessionStorage.star = rate;
	for(var i=0;i<5;i++){
		if(i<rate){
			document.getElementById((i+1)).style.color="yellow";
		}
		else{
			document.getElementById((i+1)).style.color="black";
		}
	}
}