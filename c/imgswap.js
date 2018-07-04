//------------------------------------------------------------------------------
//------Attach the click functions using moo.dom
//------------------------------------------------------------------------------
	function AttachClicks(){
		$S('a.thumblink').action ({
			onclick: function(){
				return swapimg(this);
			}
		});

	}
	//And run it
	addEvent(window, 'load', AttachClicks);


//------------------------------------------------------------------------------
//------Swap the image
//------------------------------------------------------------------------------
	
	function swapimg(element){
		var id = element.title;

		var newimg = document.getElementById('img'+id).innerHTML;

		document.getElementById('imgcontainer').innerHTML = newimg;

		return false;
	}

//------------------------------------------------------------------------------
//------Add an event
//------------------------------------------------------------------------------

function addEvent(obj, evType, fn){
 if (obj.addEventListener){
   obj.addEventListener(evType, fn, true);
   return true;
 } else if (obj.attachEvent){
   var r = obj.attachEvent("on"+evType, fn);
   return r;
 } else {
   return false;
 }
}
