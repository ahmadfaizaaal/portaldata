<main>
	<style>
		.loading-skeleton h1,
		.loading-skeleton h2,
		.loading-skeleton h3,
		.loading-skeleton h4,
		.loading-skeleton h5,
		.loading-skeleton h6,
		.loading-skeleton p,
		.loading-skeleton li,
		.loading-skeleton .btn,
		.loading-skeleton .skeleton-div,
		.loading-skeleton label,
		.loading-skeleton .form-control {
			color: transparent;
			appearance: none;
			-webkit-appearance: none;
			background-color: #eee;
			border-color: #eee;
		}
		.loading-skeleton h1::placeholder,
		.loading-skeleton h2::placeholder,
		.loading-skeleton h3::placeholder,
		.loading-skeleton h4::placeholder,
		.loading-skeleton h5::placeholder,
		.loading-skeleton h6::placeholder,
		.loading-skeleton p::placeholder,
		.loading-skeleton li::placeholder,
		.loading-skeleton .btn::placeholder,
		.loading-skeleton .skeleton-div::placeholder,
		.loading-skeleton label::placeholder,
		.loading-skeleton .form-control::placeholder {
			color: transparent;
		}

		@keyframes loading-skeleton {
		from {
			opacity: 0.4;
		}
		to {
			opacity: 1;
		}
		}
		.loading-skeleton {
			pointer-events: none;
			animation: loading-skeleton 1s infinite alternate;
		}
			.loading-skeleton img {
			filter: grayscale(100) contrast(0%) brightness(1.8);
		}
	</style>
<!--? Hero Start -->
<div class="slider-area2">

	<div class="slider-height3 hero-overly hero-bg6 d-flex align-items-center">
		<div class="container">

			<div class="row">

				<div class="col-xl-12">
					<div class="hero-cap2 pt-20 text-center">

						<p class="breadcrumbs mb-0"><span class="mr-3"><a href="<?= BASE_URL ?>">Beranda&nbsp;&nbsp;&nbsp;<i class="fa fa-solid fa-angle-right fa-xs"></i></a></span> <span class="default-yellow">Badan Usaha Jasa Konstruksi</span></p>
						
						<h2 class="pt-2"><?= $pageTitle; ?></h2>

						<p class="user-info pt-3 mb-0 loading-skeleton"><span><i class="fa fa-user"></i>&nbsp;Admin Datin DJBK&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;<span id="ajax-last-update">&nbsp;</span></p>
						
						<a href="<?= BASE_URL ?>/export-file/sbutransisi" class="genric-btn pupr radius mt-5"><span><i class="fa fa-solid fa-download"></i></span>&nbsp;Download Excel</a>
					</div>
				</div>

			</div>

		</div>
	</div>

</div>
<!-- Hero End -->

<!--? Blog Area Start -->
<section class="blog_area single-post-area section-padding">
	<div class="container">
		<div class="row">
			<!-- PROJECT REQUIREMENTS -->
			<div class="col-xl-6 col-md-6 mb-4">
				<div class="card border-bottom-pupr-blue shadow h-100 py-2">
					<div class="card-body">
						<div class="row no-gutters align-items-center pb-3" style="padding-top: inherit;">
							<div class="col-md-9 border-right-custom">
								<h2 class="font-weight-bold text-pupr-blue text-uppercase mb-0 ml-5">SBU</h2>
								<p class="text-gray-800 ml-5 mb-0">Sertifikat Badan Usaha</p>
							</div>
							<div class="col-md-3 px-2 loading-skeleton">
								<h1 class="text-center font-weight-bold text-pupr-orange" id="ajax-jumlah-sbu">&emsp;</h1>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- PROJECT STATUS -->
			<div class="col-xl-6 col-md-6 mb-4">
				<div class="card border-bottom-pupr-blue shadow h-100 py-2">
					<div class="card-body">
						<div class="row no-gutters align-items-center pb-3" style="padding-top: inherit;">
							<div class="col-md-9 border-right-custom">
								<h2 class="font-weight-bold text-pupr-blue text-uppercase mb-0 ml-5">BUJK</h2>
								<p class="text-gray-800 ml-5 mb-0">Badan Usaha Jasa Konstruksi</p>
							</div>
							<div class="col-md-3 px-2 loading-skeleton">
								<h1 class="text-center font-weight-bold text-pupr-orange" id="ajax-jumlah-bujk">&emsp;</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row mt-5 mb-5 loading-skeleton">
			<?php // var_dump($data) ?>
			<div class="col-md-12" style="min-height:583px">
				<h2 class="text-center font-weight-bolder">Provinsi Registrasi BUJK</h2>
				<canvas id="provRegistrasiMaps"></canvas>
			</div>
		</div>

		<div class="row">
			
		</div>
	</div>
</section>

<script>
	var ctx       = document.getElementById("provRegistrasiMaps") // Get Canvas Element
	var baseUrl   = '<?= BASE_URL; ?>' // Project Root URL
	var themePath = '<?= BASE_THEME; ?>' // Theme Assets Path

	// Comparing Data Provinsi Registrasi Database <-> Maps Geo
	function search(nameKey, myArray){
		for (var i=0; i < myArray.length; i++) {
			if (myArray[i].provinsi_reg_bujk === nameKey) {
				return myArray[i];
			}
		}
	}

	$(window).on("load", function() {
		$.get(baseUrl + "/bujk-dev/sbutransisi/ajax", (res) => { res = $.parseJSON(res)
			if (res.status == 200) {
				$(".loading-skeleton").removeClass("loading-skeleton")
				const resData = res.data
				const resDateRecord = new Date(res.dateRecord)
				console.log(res)
				
				const ElementLastUpdate = $("#ajax-last-update").html(" Data per Tanggal : " + resDateRecord.toLocaleString("ID"))
				const ElementJumlahSBU = $("#ajax-jumlah-sbu").html(( resData.jumlah_subklas.jumlah_subklas.toLocaleString() ))
				const ElementJumlahBUJK = $("#ajax-jumlah-bujk").html(( resData.jumlah_bujk.jumlah_bujk.toLocaleString() ))
				
				// Provinsi Registrasi Database Array
				const dataProvRegistrasi = resData.provinsi_registrasi_sertifikat
	
				// Get Asia Maps Geo Data
				$.getJSON(themePath + 'landing/assets/json/asiaTopo.json', function(asiaTopo) {
	
					// Get Indonesia Region Outline
					const countries = ChartGeo.topojson.feature(asiaTopo, asiaTopo.objects.continent_Asia_subunits).features;
					const Indonesia = countries.find((d) => d.properties.geounit === 'Indonesia');
	
					// Get Indonesia Provinsi Geolocation Segment
					$.getJSON(themePath + 'landing/assets/json/indonesiaTopo.json', function(topoData) {
						
						// Initialization Chart Geo Class with Indonesia Topology Data
						var indonesiaTopo = ChartGeo.topojson.feature(topoData, topoData.objects.topoindo).features
						
						// Define Datasets Chart Goe
						const data = {
							labels: indonesiaTopo.map(provinsi => provinsi.properties.provinsi),
							datasets: [{
								label: "Provinsi Registrasi", // Defining Chart Legend
								outline: Indonesia, // Set Indonesia Outline Region
								data: indonesiaTopo.map(provinsi => ({feature: provinsi, value: (search(provinsi.properties.provinsi, dataProvRegistrasi) ? search(provinsi.properties.provinsi, dataProvRegistrasi).jumlah_subklas : 0)})) // Defining Compared Provinsi Registrasi Data with Map Geo
							}]
						}
	
						// Chart Geo Configuration
						const config = {
							type: "choropleth", // Maps Type
							data, // Dataset
							options: {
								onClick: (e) => { // Defining On Click Event
									const activePoints = mapsChart.getElementsAtEventForMode(e, 'nearest', {
										intersect: true
									}, false) // Target Closest Click Point
									
									const [{ index }] = activePoints; // And then get the index value
	
									// Custom Click Event
									alert("Provinsi di klik " + data.datasets[0].data[index].feature.properties.provinsi + ". dengan Jumlah " + data.datasets[0].data[index].value.toLocaleString())
								},
								scales: {
									xy: {
										projection: "equalEarth" // Defining Maps Projection size equal to earth (show world atlas)
									}
								},
								plugins: {
									legend: {
										display: false // Hiding Legend Title
									}
								}
							}
						}
	
						var mapsChart = new Chart(ctx, config) // Chart Geo Instances
					});
	
				})
			} else {
				// error handling here
			}
		})
	})

	
</script>
