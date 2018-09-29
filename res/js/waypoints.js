var $skillbar =$('.skillbar');

$skillbar.waypoint(function(){

<script type="text/javascript">
$('.skillbar').waypoint(function(direction){
jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});
</script>

});