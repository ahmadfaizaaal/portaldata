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

		.f-16 {
			font-size: 16px
		}

		.text-middle {
			vertical-align: middle !important
		}

		.section-title {
			font-size: 4rem !important
		}

		.text-pupr-blue { color: #374774 }
		.bg-pupr-blue { background-color: #374774; color: #FFFFFF }
		.text-pupr-yellow { color: #EAB630 }
		.bg-pupr-yellow { background-color: #EAB630; color: #FFFFFF }

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

		<div class="row mt-5 mb-5 loading-skeleton" id="provinsi-registrasi-section">
			<?php // var_dump($data) ?>
			<div class="col-md-12 text-center skeleton-div">
				
				<h1 class="section-title"><b>Provinsi Registrasi BUJK</b></h1>
				<a href="#provinsi-registrasi-section" class="btn radius btn-lg bg-pupr-blue"><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Provinsi Registrasi BUJK</a>

				<canvas id="provRegistrasiMaps"></canvas>
			</div>
		</div>

		<div class="row" id="asosiasi-permohonan-sertifikat-section">
			<div class="col-md-12 text-center my-5 py-3">
				<h1 class="section-title bg-white"><b>Asosiasi Permohonan Sertifikat</b></h1>
				<a href="#asosiasi-permohonan-sertifikat-section" class="btn radius btn-lg bg-pupr-blue"><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Asosiasi Permohonan Sertifikat</a>
			</div>
			<div class="col-md-7">
				<table class="table table-bordered" width="100%" id="asosiasi-permohonan-sertifikat">
					<thead>
						<tr>
							<th class="text-center" width="60%">Asosiasi BUJK</th>
							<th class="text-center" width="40%">Total</th>
						</tr>
					</thead>
					<tbody>
						<tr><td colspan="2" class="text-center">Loading...</td></tr>
					</tbody>
				</table>
			</div>
			<div class="col-md-5 loading-skeleton">
				<div style="height: 522px; position: relative" class="chart-container skeleton-div" id="asosiasi-permohonan-sertifikat-chart-container">
					<canvas id="asosiasi-permohonan-sertifikat-chart" height="1044px"></canvas>
				</div>
			</div>
		</div>

		<div class="row" id="kualifikasi-sertifikat-section">
			<div class="col-md-12 text-center my-5 py-3">
				<h1 class="section-title"><b>Kualifikasi Sertifikat</b></h1>
				<a href="#kualifikasi-sertifkat-section" class="btn radius btn-lg bg-pupr-blue"><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Kualifikasi Sertifikat</a>
			</div>
			<div class="col-md-7">
				<table class="table table-bordered" width="100%" id="kualifikasi-sertifikat">
					<thead>
						<tr>
							<th class="text-center" colspan="3">Kualifikasi KBLI</th>
						</tr>
						<tr>
							<th class="text-center" width="40%">Group</th>
							<th class="text-center" width="30%">Kode</th>
							<th class="text-center" width="30%">Total</th>
						</tr>
					</thead>
					<tbody>
						<tr><td colspan="3" class="text-center">Loading...</td></tr>
					</tbody>
				</table>
			</div>
			<div class="col-md-5 loading-skeleton">
				<div style="height: 522px; position: relative" class="chart-container skeleton-div" id="kualifikasi-sertifikat-chart-container">
					<canvas id="kualifikasi-sertifikat-chart" height="1044px"></canvas>
				</div>
			</div>
		</div>

		<div class="row" id="jenis-sertifikat-section">
			<div class="col-md-12 text-center my-5 py-3">
				<h1 class="section-title"><b>Jenis Sertifikat</b></h1>
				<a href="#jenis-sertifkat-section" class="btn radius btn-lg bg-pupr-blue"><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Jenis Sertifikat</a>
			</div>
			<div class="col-md-7">
				<table class="table table-bordered" width="100%" id="jenis-sertifikat">
					<thead>
						<tr>
							<th class="text-center" colspan="3">Jenis SBU</th>
						</tr>
						<tr>
							<th class="text-center" width="40%">Group</th>
							<th class="text-center" width="30%">Jenis Usaha</th>
							<th class="text-center" width="30%">Total</th>
						</tr>
					</thead>
					<tbody>
						<tr><td colspan="3" class="text-center">Loading...</td></tr>
					</tbody>
				</table>
			</div>
			<div class="col-md-5 loading-skeleton">
				<div style="height: 522px; position: relative" class="chart-container skeleton-div" id="jenis-sertifikat-chart-container">
					<canvas id="jenis-sertifikat-chart" height="1044px"></canvas>
				</div>
			</div>
		</div>

	</div>
</section>

<script src="<?= BASE_THEME ?>landing/assets/js/vendor/dataTables.rowsGroup.js"></script>
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
		
		// Perfect Scrollbar Initialize
		// const ps = new PerfectScrollbar(".ps")

		const tableElementData = [{
			id: "#asosiasi-permohonan-sertifikat",
			index: "asosiasi_permohonan_sertifikat",
			fields: ["asosiasi_bujk", "jumlah_subklas"],
			centerIndex: [1],
			formating: ['text', 'number'],
			options: {
				scrollX: true,
				scrollY: "400px",
				order: [[1, "desc"]]
			}
		}, {
			id: "#kualifikasi-sertifikat",
			index: "kualifikasi_sertifikat",
			fields: ["kualifikasi_kbli_grup", "kualifikasi_kbli", "jumlah_subklas"],
			centerIndex: [0, 1, 2],
			formating: ['text', 'text', 'number'],
			options: {
				scrollX: true,
				rowsGroup: [0],
				paginate: false,
				ordering: false
			}
		}, {
			id: "#jenis-sertifikat",
			index: "jenis_sertifikat",
			fields: ["jenis_sbu_grup", "jenis_usaha_bu", "jumlah_subklas"],
			centerIndex: [0, 1, 2],
			formating: ['text', 'text', 'number'],
			options: {
				scrollX: true,
				rowsGroup: [0],
				paginate: false,
				ordering: false
			}
		}]

		$.get(baseUrl + "/bujk-dev/sbutransisi/ajax", (res) => { res = $.parseJSON(res)
			if (res.status == 200) {
				$(".loading-skeleton").removeClass("loading-skeleton")
				const resData = res.data
				const resDateRecord = new Date(res.dateRecord)
				
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

				/**
				 * @desc Sorting Function for ordering Array by another array
				 * @params Array / Object - array [raw array]
				 * @params Array - order [array of desired order]
				 * @params string - key [key index of sorting by]
				 * @return Array / Object - Sorted array or object
				*/
				function mapOrder (array, order, key) {
					array.sort( function (a, b) {
						var A = a[key], B = b[key];
						if (order.indexOf(A) > order.indexOf(B)) {
							return 1;
						} else {
							return -1;
						}
					});
					return array;
				};
				
				/**
				 * @desc Sorting Function for Multidimesional Array of Object
				 * @params String - valuePath [Dimension sorting by]
				 * @params Array / Object - valuePath [Dimension sorting by]
				 * @return Array / Object - Sorted array or object
				*/
				function sort(valuePath, array){
					let path = valuePath.split('.')  

					return array.sort((a, b) => {
						return getValue(b,path) -  getValue(a,path)    
					});

					function getValue(obj, path){
						path.forEach(path => obj = obj[path])
						return obj;
					}
				}

				/**
				 * @desc Optional Pre Pocessing Data List
				*/

				const rawKualifikasiSertifikat = resData.kualifikasi_sertifikat
				const indexOrderingKeyKualifikasiSertifikat= ["Besar", "Menengah", "Kecil", "Perseorangan"]
				resData.kualifikasi_sertifikat = mapOrder(rawKualifikasiSertifikat, indexOrderingKeyKualifikasiSertifikat, "kualifikasi_kbli_grup")

				const rawJenisSertifikat = resData.jenis_sertifikat
				const indexOrderingKeyJenisSertifikat = ["Jasa Konsultasi Konstruksi", "Pekerjaan Konstruksi", "Pekerjaan Konstruksi Terintegrasi", null]
				resData.jenis_sertifikat = mapOrder(rawJenisSertifikat, indexOrderingKeyJenisSertifikat, "jenis_sbu_grup")
				
				/**
				 * @desc DataTables mapping data
				*/

				tableElementData.map((data) => {
					
					$(`${data.id} tbody`).empty()

					$.each(resData[data.index], (idx, elm) => {
						$(`${data.id} tbody`).append(`<tr>${data.fields.map((field, fIndex) => {return `<td class="${data.centerIndex.includes(fIndex) ? "text-center text-middle bg-white" : "text-middle bg-white"}">${elm[field] != null ? (data.formating[fIndex] == "number" ? parseInt(elm[field]).toLocaleString() : elm[field]) : "-"}</td>`})}</tr>`)
					})

					$(data.id).DataTable(data.options)
				})
				
				/**
				 * @desc Chart Asosiasi Permohonan Sertifikat
				 * @plugin Chart.js 3.8
				 * @dataSource /bujk/sbutransisi [data: asosiasi_permohonan_sertifikat]
				*/

				const sortedDataAsosiasiPermohonanSertifikat = sort('jumlah_subklas', resData['asosiasi_permohonan_sertifikat'])
				const labelsAsosiasiPermohonanSertifikat = []
				const dataValueAsosiasiPermohonanSertifikat = []

				sortedDataAsosiasiPermohonanSertifikat.map((item, index) => {
					if (index < 15) {
						labelsAsosiasiPermohonanSertifikat.push(item.asosiasi_bujk)
						dataValueAsosiasiPermohonanSertifikat.push(parseInt(item.jumlah_subklas))
					}
				})

				const dataAsosiasiPermohonanSertifikat = {
					labels: labelsAsosiasiPermohonanSertifikat,
					datasets: [{
						axis: 'y',
						label: 'Total Sertifikat',
						data: dataValueAsosiasiPermohonanSertifikat,
						fill: true,
						backgroundColor: "rgb(55,71,116)",
						borderWidth: 1
					}]
				}

				const configAsosiasiPermohonanSertifikat = {
					type: 'bar',
					data: dataAsosiasiPermohonanSertifikat,
					options: {
						indexAxis: 'y',
						maintainAspectRatio: false,
						plugins: {
							title: {
								display: true,
								text: 'Asosiasi Permohonan Sertifikat Teratas'
							}
						}
					}
				}

				const asosiasiPermohonanSertifikatChart = new Chart(
					document.getElementById("asosiasi-permohonan-sertifikat-chart"),
					configAsosiasiPermohonanSertifikat
				)

				/**
				 * @desc Chart Kualifikasi Sertifikat
				 * @plugin Chart.js 3.8
				 * @dataSource /bujk/sbutransisi [data: kualifikasi_sertifikat]
				*/

				const sortedDataKualifikasiSertifikat = {}
				resData.kualifikasi_sertifikat.map((item) => {
					sortedDataKualifikasiSertifikat[item.kualifikasi_kbli_grup] = parseInt(sortedDataKualifikasiSertifikat[item.kualifikasi_kbli_grup] ?? 0) + item.jumlah_subklas
				})

				const labelsKualifikasiSertifikat = Object.keys(sortedDataKualifikasiSertifikat)
				const dataValueKualifikasiSertifikat = Object.values(sortedDataKualifikasiSertifikat)
				
				const dataKualifikasiSertifikat = {
					labels: labelsKualifikasiSertifikat,
					datasets: [{
						label: 'Kualifikasi',
						data: dataValueKualifikasiSertifikat,
						backgroundColor: [
							"rgb(55, 71, 116)",
							"rgb(234, 182, 48)",
							"rgb(216, 30, 91)",
							"rgb(30, 174, 78)",
						]
					}]
				};

				const configKualifikasiSertifikat = {
					type: 'pie',
					data: dataKualifikasiSertifikat,
					options: {
						scale: {
							ticks: {
								beginAtZero:true
							}
						}
					}
				};

				const kualifikasiSertifikatChart = new Chart(
					document.getElementById("kualifikasi-sertifikat-chart"),
					configKualifikasiSertifikat
				)
				
				/**
				 * @desc Chart Jenis Sertifikat
				 * @plugin Chart.js 3.8
				 * @dataSource /bujk/sbutransisi [data: jenis_sertifikat]
				*/

				const sortedDataJenisSertifikat = {}
				resData.jenis_sertifikat.map((item) => {
					sortedDataJenisSertifikat[(item.jenis_sbu_grup != null ? item.jenis_sbu_grup : "-")] = parseInt(sortedDataJenisSertifikat[(item.jenis_sbu_grup != null ? item.jenis_sbu_grup : "-")] ?? 0) + item.jumlah_subklas
				})

				const labelsJenisSertifikat = Object.keys(sortedDataJenisSertifikat)
				const dataValueJenisSertifikat = Object.values(sortedDataJenisSertifikat)
				
				const dataJenisSertifikat = {
					labels: labelsJenisSertifikat,
					datasets: [{
						label: 'Jenis',
						data: dataValueJenisSertifikat,
						backgroundColor: "rgb(55, 71, 116)"
					}]
				};

				const configJenisSertifikat = {
					type: 'radar',
					data: dataJenisSertifikat,
					options: {
						scale: {
							ticks: {
								beginAtZero:true
							}
						}
					}
				};

				const jenisSertifikatChart = new Chart(
					document.getElementById("jenis-sertifikat-chart"),
					configJenisSertifikat
				)

			} else {
				// error handling here
			}
		})
	})

	
</script>
