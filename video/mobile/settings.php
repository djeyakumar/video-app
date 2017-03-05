<?php
// +-------------------------------------------------------------------------+
// | Mobile Melody Plug-in for PHP Melody ( www.phpsugar.com )
// +-------------------------------------------------------------------------+
// | MOBILE MELODY IS NOT FREE SOFTWARE
// | If you have downloaded this software from a website other
// | than www.phpsugar.com or if you have received
// | this software from someone who is not a representative of
// | phpSugar, you are involved in an illegal activity.
// | ---
// | In such case, please contact: support@phpsugar.com.
// +-------------------------------------------------------------------------+
// | Developed by: phpSugar (www.phpsugar.com) / support@phpsugar.com
// | Copyright: (c) 2004-2015 PhpSugar.com. All rights reserved.
// +-------------------------------------------------------------------------+

require_once('../config.php');
require_once('../include/functions.php');
require_once('../include/user_functions.php');
require_once('../include/article_functions.php');
require_once('../include/islogged.php');
require_once('../include/settings.php');
require_once('functions.php');

$_mobile_supported_sources = array(0, 1, 2, 3, 5, 16, 18, 30, 44, 53, 57, 75);

define('_BROWSE_LIMIT', 5); // no. of videos to list on any browsing page
define('_BROWSE_ART_LIMIT', 5); // no. of articles to list on any browsing page
define('_FEATURED_LIMIT', 5); // no. of featured videos to display in the homepage slider
define('_NEW_LIMIT', 5); // no. of new videos to list on the homepage
define('_COMMENTS_LIMIT', 5); // no. of comments to show
define('_RELATED_LIMIT', 5); // no. of related videos to show
define('_SEARCH_RESULTS_LIMIT', 10); // no. of search results
define('_SHOW_CAT_COUNT', 1); // show count of items next to each category
define('_SHOW_BOOKMARK_TTIP', 1); // show the bookmark popup

define('_ENABLE_TRACKER', 1); // use the tracking code set in the PHP Melody admin area
define('_RTL', 0); // enable Right-to-Left text orientation 