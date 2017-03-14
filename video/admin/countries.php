<?php
	$showm = '3';
	$load_scrolltofixed = 1;
	$_page_title = 'Countries';
	include('header.php');
	$status = 0;

	if(isset($_GET['mode'])) {
		if($_GET['mode'] == 'delete') {
			$id = (isset($_GET['id']) && !empty($_GET['id'])) ? $_GET['id'] : '';
			if(!empty($id)) {
				$sql = "DELETE FROM pm_videos_countries WHERE countryid='{$id}'";
				$res = mysql_query($sql);
				$status = 1;
				$statusMessage = "Country Deleted.";
			}
		}

		if($_GET['mode'] == 'edit') {
			$id = (isset($_GET['id']) && !empty($_GET['id'])) ? $_GET['id'] : '';
			$country = (isset($_POST['country']) && !empty($_POST['country'])) ? $_POST['country'] : '';
			if(!empty($id)) {
				$sql = "UPDATE pm_videos_countries SET country='{$country}' WHERE countryid='{$id}'";
				$res = mysql_query($sql);
				$status = 1;
				$statusMessage = "Country Updated.";
			}
		}

		if($_GET['mode'] == 'add') {
			$country = (isset($_POST['country']) && !empty($_POST['country'])) ? $_POST['country'] : '';
			if(!empty($country)) {
				$sql = "INSERT INTO pm_videos_countries (country) VALUES('{$country}')";
				$res = mysql_query($sql);
				$status = 1;
				$statusMessage = "Country name saved.";
			} else {
				$status = 2;
				$statusMessage = "Country name should not be empty.";
			}
		}
	}
?>
	<div id="adminPrimary">
		<div class="content">
			<h2><?=$_page_title;?></h2>
			<?php if($status == 1) : ?>
				<div class="alert alert-success">
					<strong>Success!</strong>  <?=$statusMessage;?>
				</div>
			<?php endif; ?>

			<?php if($status == 2) : ?>
				<div class="alert alert-danger">
					<strong>Error!</strong> <?=$statusMessage;?>
				</div>
			<?php endif; ?>

			<div class="tablename">
				<div class="qsFilter">
					<div class="row-fluid">
						<div class="span4">
						</div>
						<div class="span8">
							<a href="#modal_add_country" class="btn btn-success btn-strong pull-right" data-toggle="modal">Add new country</a>
						</div>
					</div>
				</div>
			</div>

			<table id="country_table" cellpadding="0" cellspacing="0" width="100%" class="table table-striped table-bordered pm-tables tablesorter">
				<thead>
					<tr>
						<th width="5%">ID</th>
						<th width="85%">Country</th>
						<th width="10%" align="center" style="width: 90px;">Action</th>
					</tr>
				</thead>
				<tbody>
					<?php $countries = list_countries();?>
					<?php foreach ($countries as $key => $country) : ?>
					<tr>
						<td width="5%"><strong><?=$country['id'];?></strong></td>
						<td width="85%">
							<div class="country-text">
								<strong><?=$country['name'];?></strong>
							</div>
							<div class="country-edit-form">
								<form method="POST" action="countries.php?mode=edit&id=<?=$country['id'];?>" class="form-inline">
									<input name="country" size="15" type="text" value="<?=$country['name'];?>">
    								<button name="update" type="submit" value="Update" class="btn btn-success">Update</button>
    							</form>
   							</div>
						</td>
						<td align="center" class="table-col-action" style="text-align: center">
							<a href="#" onclick="deleteCountry(<?=$country['id'];?>)" rel="tooltip" data-original-title="Delete">
								<i class="icon-remove"></i>
							</a>
						</td>
					</tr>
					<?php endforeach;?>
				</tbody>
			</table>
		</div>
	</div>

	<div class="modal fade" id="modal_add_country" role="dialog">
		<div class="modal-dialog modal-sm">
			<form method="POST" action="countries.php?mode=add" id="country_form">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Country</h4>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<label for="email">Country Name:</label>
							<input type="text" class="form-control" id="country" name="country" />
						</div>
					</div>
					<div class="modal-footer">
						<a onclick="addCountry()" class="btn btn-success btn-strong">Save</a>
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					</div>
				</div>
			</form>
		</div>
	</div>
	<link rel="stylesheet" type="text/css" media="screen" href="https://cdn.datatables.net/1.10.13/css/jquery.dataTables.min.css" />
	<script src="https://cdn.datatables.net/1.10.13/js/jquery.dataTables.min.js" type="text/javascript"></script>
	<script type="text/javascript">
		$(document).ready(function() {
		    $('#country_table').DataTable({
		    	"pageLength": 5
		    });
		} );
		function addCountry() {
			$("#country_form").submit();
		}
		function deleteCountry(id) {
			var r = confirm("Are you sure to delete ?");
			if (r == true) {
			    window.location.href = "countries.php?mode=delete&id="+id;
			}
		}

		$(".table tr").hover(function() {
			$(this).find(".country-text").hide();
			$(this).find(".country-edit-form").show();
		}, function() {
			$(this).find(".country-text").show();
			$(this).find(".country-edit-form").hide();
		});
	</script>

	<style type="text/css">

		.country-edit-form {
			display: none;
		}

	</style>
<?php include('footer.php'); ?>