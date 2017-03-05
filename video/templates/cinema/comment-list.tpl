	<ul class="pm-ul-comments{if $tpl_name == 'article-read'} article-comments{elseif $tpl_name == 'video-watch'} video-comments{/if}">
	    <li id="preview_comment"></li>
		{if is_array($most_liked_comment) && ($most_liked_comment.up_vote_count > 2)}
			<li id="comment-999" class="pm-top-comment border-radius4">
            	<div class="pm-top-comment-head">{$lang.top_comment}</div>
				{include file='comment-list-li-body.tpl' comment_data=$most_liked_comment}
			</li>
		{/if}
	    {foreach from=$comment_list key=k item=comment_data name=comment_foreach}
		<li id="comment-{$smarty.foreach.comment_foreach.iteration}" {if $comment_data.downvoted}class="opac5"{/if}>
			{include file='comment-list-li-body.tpl'}
	    </li>
		{/foreach}
	</ul>