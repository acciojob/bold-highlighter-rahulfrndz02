
function highlight() {
    //Write your code here
	var highlight = document.getElementsByTagName("strong")
  for(let i=0; i<highlight.length; i++){
	  highlight[i].style.color = "rgb(0, 128, 0)"
  }
}


function return_normal() {
    //Write your code here
	var highlight = document.getElementsByTagName("strong")
  for(let i=0; i<highlight.length; i++){
	  highlight[i].style.color = "rgb(0, 0, 0)"
  }
}
