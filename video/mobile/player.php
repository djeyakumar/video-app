<div id="Playerholder" class="videoWrapper">
<?php 
if($video['video_player'] == "embed") :
	// Temporary Tweak for Audio Playback; Currently was using the JW Player 5 embed code; no good for mobile @TODO
	if($video['source_id'] == $_sources['localhost']['source_id']) 
	{

		$tmp_parts = explode('.', $video['url_flv_raw']);
		$ext = array_pop($tmp_parts);
		$ext = strtolower($ext);

		if($ext == 'mp3' || $ext == 'ogg') {
			echo '<audio src="'. make_url_https($video['url_flv']) .'" preload="auto" controls></audio>';
		}
		else 
		{
			echo $video['embed_code'];
		}

	} 
	elseif($video['source_id'] == $_sources['dailymotion']['source_id'])
	{
		echo '<iframe src="//www.dailymotion.com/embed/video/' . $video['yt_id'] . '&logo=0&info=0&hideInfos=1" width="100%" height="280" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
	} 
	elseif($video['source_id'] == $_sources['vimeo']['source_id'])
	{
		echo '<iframe src="//player.vimeo.com/video/'.$video['yt_id'].'?color=20A8E1" width="100%" height="280" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
	} 
	else
	{
		echo $video['embed_code'];
	}
else :
?>
<?php if($video['source_id'] == $_sources['vimeo']['source_id']) {  ?>
<iframe src="//player.vimeo.com/video/<?php echo $video['yt_id'];?>?color=20A8E1" width="100%" height="280" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<?php
} else { 
?>
<noscript>
	<?php echo $lang['enable_javascript']; ?>
</noscript>
<link href="<?php echo _URL; ?>/players/video-js/video-js.min.css" rel="stylesheet">
<script type="text/javascript" src="<?php echo _URL; ?>/players/video-js/video.js"></script>
<script src="<?php echo _URL; ?>/players/video-js/plugins/youtube.js"></script>
<script src="<?php echo _URL; ?>/players/video-js/plugins/videojs.persistvolume.js"></script>
<?php if($video['source_id'] == $_sources['dailymotion']['source_id']) : ?>
<script src="<?php echo _URL; ?>/players/video-js/plugins/dailymotion.js"></script>
<?php endif; ?>
<?php if(_WATERMARKURL != '') : ?>
<script src="<?php echo _URL; ?>/players/video-js/plugins/videojs.logobrand.js"></script>
<?php endif; ?>

<video src="" id="video-js" class="video-js vjs-default-skin" poster="<?php if($video['source_id'] != $_sources['youtube']['source_id']) echo make_url_https($video['preview_image']); ?>" preload="auto" data-setup='{ "techOrder": [<?php if($video['source_id'] == $_sources['youtube']['source_id']) echo '"youtube",'; elseif($video['source_id'] == $_sources['dailymotion']['source_id']) echo '"dailymotion",'; ?>"html5","flash"], "controls": true, "autoplay": <?php echo _AUTOPLAY; ?> }' width="100%" height="280">
</video>
<?php
if( ! empty( $video_subtitles ) )
{
	foreach ($video_subtitles as $k => $subtitle)
	{
	echo '<track kind="captions" src="' . $subtitle['filename'] . '" srclang="' . $subtitle['language_tag'] . '" label="' . $subtitle['language'] . '">';
	}
}
?>

		<script type="text/javascript">
		var video = videojs('video-js').ready(function(){
			var player = this;
			
			player.on('loadedmetadata', function() {
				$('.vjs-big-play-button').addClass('vjs-pm-show-big-play');
				$('.vjs-control-bar').css({"display": "block"});
			});

				player.on('error', function(){
					var MediaError = player.error();
					
					if (MediaError.code == 4) {
						ajax_request("video", "do=report&vid=<?php echo $video['uniq_id'];?>&error-message="+ MediaError.message, "", "", false);
					}
				});

			<?php if(_WATERMARKURL != '') : ?>
			player.logobrand({
				image: "<?php echo _WATERMARKURL; ?>",
				destination: "<?php echo _WATERMARKLINK; ?>"
			});
			<?php endif; ?>

			<?php if($video['source_id'] == $_sources['localhost']['source_id'] || $video['source_id'] == $_sources['other']['source_id']) : ?>
			player.src([
				{
					src: "<?php echo _URL; ?>/mobile/videos.php?vid=<?php echo $video['uniq_id']; ?>",
					type: "<?php if($video['file_type'] != '') echo $video['file_type']; else echo "video/flv"; ?>"
				}
			]);
			<?php endif; ?>

			<?php if($video['source_id'] == $_sources['youtube']['source_id'] || $video['source_id'] == $_sources['dailymotion']['source_id']) : ?>
			player.src("<?php echo make_url_https($video['direct']); ?>");
			<?php endif; ?>


			<?php if($video['source_id'] == $_sources['vimeo']['source_id']) : ?>
			player.src([
				{
					src: "<?php echo _URL; ?>/mobile/videos.php?vid=<?php echo $video['uniq_id']; ?>",
					type: "video/mp4"
				}
			]);
			<?php endif; ?>

			<?php if($video['source_id'] == $_sources['mp3']['source_id']) : ?>
			player.src([
				{
					src: "<?php echo _URL; ?>/mobile/videos.php?vid=<?php echo $video['uniq_id']; ?>",
					type: "<?php if($video['file_type'] != '') echo $video['file_type']; else echo "audio/mp3"; ?>"
				}
			]);
			<?php endif; ?>

			<?php if($video['source_id'] == $_sources['imgur']['source_id'] || $video['source_id'] == $_sources['gfycat']['source_id']) : ?>
			player.src([
				{
					src: "<?php echo _URL; ?>/mobile/videos.php?vid=<?php echo $video['uniq_id']; ?>",
					type: "<?php if($video['file_type'] != '') echo $video['file_type']; else echo "video/mp4"; ?>"
				}
			]);
			<?php endif; ?>

			player.on('waiting', function() {
				$('.vjs-loading-spinner').removeClass('vjs-hidden');
			});

		});
		</script>

<?php 
}
endif; 
?>
</div>