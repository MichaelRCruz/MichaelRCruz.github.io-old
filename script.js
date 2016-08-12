// background color interaction with the "sun"
var _left, _top, _leftTop;
$(document).ready(function() {
	$('#sun').draggable({
		drag: function(){
			var $sunPos = $('#sun');
			var $offset = $sunPos.offset();
			_left = $offset.left;
			_top = $offset.top;
			$sunPos.html ( "left: " + _left + ", top: " + _top );
			var $width = ($(document).width())/255;
			var $height = ($(document).height())/255;
			var $winLeft = parseInt(_left/$width, 10);
			var $winTop = parseInt(_top/$height, 10);
			var $winLeftTop = (-($winLeft+($winTop*1.5))/2)+255;
			_leftTop = $winLeftTop;
			$("#above").css("background-color", "rgb(150,"+_leftTop+","+_leftTop+")");
			}
	});
});
