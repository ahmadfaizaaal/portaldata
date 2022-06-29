<main>
	<style>
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

							<p class="user-info pt-3 mb-0 loading-skeleton"><span><i class="fa fa-user"></i>&emsp;Admin Datin DJBK&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span id="ajax-last-update">&nbsp;</span></p>

							<a href="#" id="download-full" class="btn text-white radius btn-lg bg-pupr-yellow px-5 py-3 mt-5 f-16 download-btn disabled" data-file-name="Rekapitulasi-Sertifikat-Badan-Usaha" data-sheet-name="Rekapitulasi SBU.Rekapitulasi BUJK.Provinsi Registrasi Sertifikat.Asosiasi Permohonan Sertifikat.Kualifikasi Sertifikat.Jenis Sertifikat.Klasifikasi Sertifikat.Sub Klasifikasi Sertifikat" data-source="resData" data-order-index="jumlah_subklas.jumlah_bujk.provinsi_registrasi_sertifikat.asosiasi_permohonan_sertifikat.kualifikasi_sertifikat.jenis_sertifikat.klasifikasi_sertifikat.sub_klasifikasi_sertifikat" disabled><span><i class="fa fa-solid fa-download"></i></span>&nbsp;&nbsp;Download Full Data BUJK Masa Transisi</a>
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
									<h2 class="font-weight-bold text-pupr-blue text-uppercase mb-0 ml-5">SUBKLAS</h2>
									<p class="text-gray-800 ml-5 mb-0">Sub Klasifikasi</p>
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

			<div class="row mt-5 mb-5 loading-skeleton" id="provinsi-domisili-section">
				<?php // var_dump($data) 
				?>
				<div class="col-md-12 text-center skeleton-div">

					<h1 class="section-title"><b>Provinsi Domisili Badan Usaha</b></h1>
					<a id="download-provinsi-domisili" href="#provinsi-domisili-section" class="btn radius btn-lg bg-pupr-blue download-btn text-white disabled" data-file-name="Provinsi-Domisili-Badan-Usaha" data-sheet-name="Provinsi Domisili Badan Usaha" data-source="resData.provinsi_domisili_bujk" data-order-index="provinsi_domisili_bujk" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Provinsi Domisili Badan Usaha</a>

					<canvas id="provDomisiliMaps"></canvas>
				</div>
			</div>

			<div class="row" id="asosiasi-bujk-section">
				<div class="col-md-12 text-center my-5 py-3">
					<h1 class="section-title bg-white"><b>Asosiasi Badan Usaha Jasa Konstruksi</b></h1>
					<a id="download-asosiasi-bujk" href="#asosiasi-bujk-section" class="btn radius btn-lg bg-pupr-blue text-white download-btn disabled" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Asosiasi Badan Usaha</a>
				</div>
				<div class="col-md-7">
					<table class="table table-bordered" width="100%" id="asosiasi-bujk">
						<thead>
							<tr>
								<th class="text-center" width="60%">Asosiasi BUJK</th>
								<th class="text-center" width="40%">Total</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td colspan="2" class="text-center">Loading...</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="col-md-5 loading-skeleton">
					<div style="height: 522px; position: relative" class="chart-container skeleton-div" id="asosiasi-bujk-chart-container">
						<canvas id="asosiasi-bujk-chart" height="1044px"></canvas>
					</div>
				</div>
			</div>

			<div class="row" id="bentuk-bujk-section">
				<div class="col-md-12 text-center my-5 py-3">
					<h1 class="section-title bg-white"><b>Bentuk Badan Usaha Jasa Konstruksi</b></h1>
					<a id="download-bentuk-bujk" href="#bentuk-bujk-section" class="btn radius btn-lg bg-pupr-blue text-white download-btn disabled" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Bentuk Badan Usaha</a>
				</div>
				<div class="col-md-7">
					<table class="table table-bordered" width="100%" id="bentuk-bujk">
						<thead>
							<tr>
								<th class="text-center" width="60%">Bentuk Badan Usaha</th>
								<th class="text-center" width="40%">Total</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td colspan="2" class="text-center">Loading...</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="col-md-5 loading-skeleton">
					<div style="height: 522px; position: relative" class="chart-container skeleton-div" id="bentuk-bujk-chart-container">
						<canvas id="bentuk-bujk-chart" height="1044px"></canvas>
					</div>
				</div>
			</div>

			<div class="row" id="jenis-bujk-section">
				<div class="col-md-12 text-center my-5 py-3">
					<h1 class="section-title bg-white"><b>Jenis Badan Usaha Jasa Konstruksi</b></h1>
					<a id="download-jenis-bujk" href="#jenis-bujk-section" class="btn radius btn-lg bg-pupr-blue text-white download-btn disabled" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Jenis Badan Usaha</a>
				</div>
				<div class="col-md-7">
					<table class="table table-bordered" width="100%" id="jenis-bujk">
						<thead>
							<tr>
								<th class="text-center" width="60%">Jenis Badan Usaha</th>
								<th class="text-center" width="40%">Total</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td colspan="2" class="text-center">Loading...</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="col-md-5 loading-skeleton">
					<div style="height: 522px; position: relative" class="chart-container skeleton-div" id="jenis-bujk-chart-container">
						<canvas id="jenis-bujk-chart" height="1044px"></canvas>
					</div>
				</div>
			</div>

			<div class="row" id="kualifikasi-sertifikat-section">
				<div class="col-md-12 text-center my-5 py-3">
					<h1 class="section-title"><b>Kualifikasi Sertifikat</b></h1>
					<a id="download-kualifiaksi" href="#kualifikasi-sertifkat-section" class="btn radius btn-lg bg-pupr-blue text-white download-btn disabled" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Kualifikasi Sertifikat</a>
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
							<tr>
								<td colspan="3" class="text-center">Loading...</td>
							</tr>
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
					<a id="download-jenis" href="#jenis-sertifkat-section" class="btn radius btn-lg bg-pupr-blue text-white download-btn disabled" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Jenis Sertifikat</a>
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
							<tr>
								<td colspan="3" class="text-center">Loading...</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="col-md-5 loading-skeleton">
					<div style="height: 522px; position: relative" class="chart-container skeleton-div" id="jenis-sertifikat-chart-container">
						<canvas id="jenis-sertifikat-chart" height="1044px"></canvas>
					</div>
				</div>
			</div>

			<div class="row" id="klasifikasi-sertifikat-section">
				<div class="col-md-12 text-center my-5 py-3">
					<h1 class="section-title"><b>Klasifikasi Sertifikat</b></h1>
					<a id="download-klasifikasi" href="#klasifikasi-sertifkat-section" class="btn radius btn-lg bg-pupr-blue text-white download-btn disabled" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Klasifikasi Sertifikat</a>
				</div>
				<div class="col-md-12">
					<table class="table table-bordered" width="100%" id="klasifikasi-sertifikat">
						<thead>
							<tr>
								<th class="text-center" width="15%">ID Klasifikasi</th>
								<th class="text-center" width="55%">Klasifikasi KBLI</th>
								<th class="text-center" width="30%">Total</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td colspan="3" class="text-center">Loading...</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div class="row" id=subklasifikasi-sertifikat-section">
				<div class="col-md-12 text-center my-5 py-3">
					<h1 class="section-title"><b>Sub Klasifikasi Sertifikat</b></h1>
					<a id="download-subklasifikasi" href="#subklasifikasi-sertifkat-section" class="btn radius btn-lg bg-pupr-blue text-white download-btn disabled" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Sub Klasifikasi Sertifikat</a>
				</div>
				<div class="col-md-12">
					<table class="table table-bordered" width="100%" id="subklasifikasi-sertifikat">
						<thead>
							<tr>
								<th class="text-center" width="15%">ID Sub Klasifikasi</th>
								<th class="text-center" width="70%">Sub Klasifikasi KBLI</th>
								<th class="text-center" width="15%">Total</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td colspan="3" class="text-center">Loading...</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

		</div>
	</section>

	<script src="<?= BASE_THEME ?>landing/assets/js/vendor/dataTables.rowsGroup.js"></script>
	<script>
		var ctx = document.getElementById("provDomisiliMaps") // Get Canvas Element
		var baseUrl = '<?= BASE_URL; ?>' // Project Root URL
		var themePath = '<?= BASE_THEME; ?>' // Theme Assets Path
		var devMode = false // Dev Mode

		// Comparing Data Provinsi Registrasi Database <-> Maps Geo
		function search(nameKey, myArray) {
			for (var i = 0; i < myArray.length; i++) {
				if (myArray[i].provinsi_bujk === nameKey.toUpperCase()) {
					return myArray[i];
				}
			}
		}

		// Do Action on Window Loading Event
		$(window).on("load", function() {

			// Defining DataTables Configuration 
			const tableElementData = [{
					id: "#asosiasi-bujk",
					index: "asosiasi_bujk",
					fields: ["asosiasi_bujk", "jumlah_bujk"],
					centerIndex: [1],
					formating: ['text', 'number'],
					options: {
						scrollX: true,
						scrollY: "400px",
						order: [
							[1, "desc"]
						]
					}
				},
				{
					id: "#bentuk-bujk",
					index: "bentuk_bujk",
					fields: ["bentuk_bu", "jumlah_bujk"],
					centerIndex: [1],
					formating: ['text', 'number'],
					options: {
						scrollX: true,
						// scrollY: "400px",
						order: [
							[1, "desc"]
						]
					}
				},
				{
					id: "#jenis-bujk",
					index: "jenis_bujk",
					fields: ["jenis_usaha_badan_usaha", "jumlah_bujk"],
					centerIndex: [1],
					formating: ['text', 'number'],
					options: {
						scrollX: true,
						// scrollY: "400px",
						order: [
							[1, "desc"]
						]
					}
				},
				{
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
				}, {
					id: "#klasifikasi-sertifikat",
					index: "klasifikasi_sertifikat",
					fields: ["id_klasifikasi_kbli", "klasifikasi_kbli", "jumlah_subklas"],
					centerIndex: [0, 2],
					formating: ['text', 'text', 'number'],
					options: {
						scrollX: true,
						scrollY: "640px",
						order: [
							[1, "asc"]
						],
						pageLength: 25
					}
				}, {
					id: "#subklasifikasi-sertifikat",
					index: "sub_klasifikasi_sertifikat",
					fields: ["id_sub_klasifikasi_kbli", "klasifikasi_sub_kbli", "jumlah_subklas"],
					centerIndex: [0, 2],
					formating: ['text', 'text', 'number'],
					options: {
						scrollX: true,
						scrollY: "640px",
						order: [
							[1, "asc"]
						],
						pageLength: 25,
						scrollCollapse: true,
						fnInitComplete: function() {
							const psinit = new PerfectScrollbar($(this)[0].offsetParent)
						},
						fnDrawCallback: function(oSettings) {
							const pscallback = new PerfectScrollbar($(this)[0].offsetParent)
						}
					}
				}
			]

			/**
			 * @desc GET SBU Masa Transisi Data via AJAX Request to /bujk[bujk-dev]/sbutransisi
			 * @defaultUrl /bujk/sbutransisi/ajax
			 * @note The URL is dynamic based on devMode Configuration. Please check the following controller before
			 * @return JSON / Object [Object of Result by REST API Response]
			 * 		{
			 * 			status: (integer) [status code. ie: 200, 404, 500, 400, 403],
			 * 			messages: (string) [Response Messages. ie: "SIJKT Badan Usaha -Sertifikat Badan Usaha Masa Transisi"],
			 * 			dateRecord: (string of Date) [DateTime Format of Data Record Date. ie: "2022-04-25T07:54:12.000Z"],
			 * 			data: { (object) [Object Datas]
			 * 				asosiasi_permohonan_sertifikat: [{..}, {..}] (Array of Object),
			 * 				jenis_sertifikat: [{..}, {..}] (Array of Object),
			 * 				jumlah_subklas: {..} (Single Object of Summary),
			 * 				jumlah_bujk: {..} (Single Object of Summary),
			 * 				klasifikasi_sertifikat: [{..}, {..}] (Array of Object),
			 * 				kualifikasi_sertifikat: [{..}, {..}] (Array of Object),
			 * 				provinsi_registrasi_sertifikat: [{..}, {..}] (Array of Object),
			 * 				sub_klasifikasi_sertifikat: [{..}, {..}] (Array of Object)
			 * 			}
			 * 		}
			 */

			$.get(baseUrl + `/${devMode ? "bujk-dev" : "bujk"}/bujktransisi/ajax`, (res) => {
				res = $.parseJSON(res)
				if (res.status == 200) {
					$(".loading-skeleton").removeClass("loading-skeleton")
					const resData = res.data
					const resDateRecord = new Date(res.dateRecord)

					const ElementLastUpdate = $("#ajax-last-update").html(" Data per Tanggal : " + resDateRecord.toLocaleString("ID"))
					const ElementJumlahSBU = $("#ajax-jumlah-sbu").html((resData.jumlah_subklas.jumlah_subklas.toLocaleString()))
					const ElementJumlahBUJK = $("#ajax-jumlah-bujk").html((resData.jumlah_bujk.jumlah_bujk.toLocaleString()))

					// Provinsi Registrasi Database Array
					const dataProvDomisili = resData.provinsi_domisili_bujk

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
									label: "Provinsi Domisili", // Defining Chart Legend
									outline: Indonesia, // Set Indonesia Outline Region
									data: indonesiaTopo.map(provinsi => ({
										feature: provinsi,
										value: (search(provinsi.properties.provinsi, dataProvDomisili) ? search(provinsi.properties.provinsi, dataProvDomisili).jumlah_bujk : 0)
									})) // Defining Compared Provinsi Registrasi Data with Map Geo
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

										const [{
											index
										}] = activePoints; // And then get the index value

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
					function mapOrder(array, order, key) {
						array.sort(function(a, b) {
							var A = a[key],
								B = b[key];
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
					function sort(valuePath, array) {
						let path = valuePath.split('.')

						return array.sort((a, b) => {
							return getValue(b, path) - getValue(a, path)
						});

						function getValue(obj, path) {
							path.forEach(path => obj = obj[path])
							return obj;
						}
					}

					/**
					 * @desc Optional Pre Pocessing Data List
					 */

					// const rawKualifikasiSertifikat = resData.kualifikasi_sertifikat
					// const indexOrderingKeyKualifikasiSertifikat = ["Besar", "Menengah", "Kecil", "Perseorangan"]
					// resData.kualifikasi_sertifikat = mapOrder(rawKualifikasiSertifikat, indexOrderingKeyKualifikasiSertifikat, "kualifikasi_kbli_grup")

					// const rawJenisSertifikat = resData.jenis_sertifikat
					// const indexOrderingKeyJenisSertifikat = ["Jasa Konsultasi Konstruksi", "Pekerjaan Konstruksi", "Pekerjaan Konstruksi Terintegrasi", null]
					// resData.jenis_sertifikat = mapOrder(rawJenisSertifikat, indexOrderingKeyJenisSertifikat, "jenis_sbu_grup")

					/**
					 * @desc DataTables mapping data
					 */

					const ps = []
					tableElementData.map((data) => {

						$(`${data.id} tbody`).empty()

						$.each(resData[data.index], (idx, elm) => {
							$(`${data.id} tbody`).append(`<tr>${data.fields.map((field, fIndex) => {return `<td class="${data.centerIndex.includes(fIndex) ? "text-center text-middle bg-white" : "text-middle bg-white"}">${elm[field] != null ? (data.formating[fIndex] == "number" ? parseInt(elm[field]).toLocaleString() : elm[field]) : "-"}</td>`})}</tr>`)
						})

						// const dataTablesOpt = {
						// 	fnInitComplete: function () {
						// 		ps[data.id] = new PerfectScrollbar('.dataTables_scrollBody')
						// 	},
						// 	fnDrawCallback: function (oSettings) {
						// 		ps[data.id] = new PerfectScrollbar('.dataTables_scrollBody')
						// 	}
						// , ...data.options}

						$(data.id).DataTable(data.options)
					})



					/**
					 * @desc Chart Asosiasi Badan Usaha Jasa Konstruksi
					 * @plugin Chart.js 3.8
					 * @dataSource /bujk/bujktransisi [data: asosiasi_bujk]
					 */

					const sortedDataAsosiasiBadanUsaha = sort('jumlah_bujk', resData['asosiasi_bujk'])
					const labelsAsosiasiBadanUsaha = []
					const dataValueAsosiasiBadanUsaha = []

					sortedDataAsosiasiBadanUsaha.map((item, index) => {
						if (index < 15) {
							labelsAsosiasiBadanUsaha.push(item.asosiasi_bujk)
							dataValueAsosiasiBadanUsaha.push(parseInt(item.jumlah_bujk))
						}
					})

					const dataAsosiasiBadanUsaha = {
						labels: labelsAsosiasiBadanUsaha,
						datasets: [{
							axis: 'y',
							label: 'Total Badan Usaha',
							data: dataValueAsosiasiBadanUsaha,
							fill: true,
							// backgroundColor: "rgb(55,71,116)",
							backgroundColor: "rgb(234,182,48)",
							borderWidth: 1
						}]
					}

					const configAsosiasiBadanUsaha = {
						type: 'bar',
						data: dataAsosiasiBadanUsaha,
						options: {
							indexAxis: 'y',
							maintainAspectRatio: false,
							plugins: {
								title: {
									display: true,
									text: 'Asosiasi Badan Usaha Jasa Konstruksi Teratas'
								}
							}
						}
					}

					const asosiasiBadanUsahaChart = new Chart(
						document.getElementById("asosiasi-bujk-chart"),
						configAsosiasiBadanUsaha
					)

					/**
					 * @desc Chart Bentuk Badan Usaha Jasa Konstruksi
					 * @plugin Chart.js 3.8
					 * @dataSource /bujk/bujktransisi [data: bentuk_bujk]
					 */

					const sortedDataBentukBadanUsaha = sort('jumlah_bujk', resData['bentuk_bujk'])
					const labelsBentukBadanUsaha = []
					const dataValueBentukBadanUsaha = []

					sortedDataBentukBadanUsaha.map((item, index) => {
						if (index < 15) {
							labelsBentukBadanUsaha.push(item.bentuk_bu)
							dataValueBentukBadanUsaha.push(parseInt(item.jumlah_bujk))
						}
					})

					const dataBentukBadanUsaha = {
						labels: labelsBentukBadanUsaha,
						datasets: [{
							axis: 'x',
							label: 'Total Badan Usaha',
							data: dataValueBentukBadanUsaha,
							fill: true,
							// backgroundColor: "rgb(55,71,116)",
							backgroundColor: "rgb(234,182,48)",
							borderWidth: 1
						}]
					}

					const configBentukBadanUsaha = {
						type: 'bar',
						data: dataBentukBadanUsaha,
						options: {
							indexAxis: 'x',
							maintainAspectRatio: false,
							plugins: {
								title: {
									display: true,
									text: 'Bentuk Badan Usaha Jasa Konstruksi'
								}
							}
						}
					}

					const BentukBadanUsahaChart = new Chart(
						document.getElementById("bentuk-bujk-chart"),
						configBentukBadanUsaha
					)

					/**
					 * @desc Chart Jenis Badan Usaha Jasa Konstruksi
					 * @plugin Chart.js 3.8
					 * @dataSource /bujk/bujktransisi [data: jenis_bujk]
					 */

					const sortedDataJenisBadanUsaha = sort('jumlah_bujk', resData['jenis_bujk'])
					const labelsJenisBadanUsaha = []
					const dataValueJenisBadanUsaha = []

					sortedDataJenisBadanUsaha.map((item, index) => {
						if (index < 15) {
							labelsJenisBadanUsaha.push(item.jenis_usaha_badan_usaha)
							dataValueJenisBadanUsaha.push(parseInt(item.jumlah_bujk))
						}
					})

					const dataJenisBadanUsaha = {
						labels: labelsJenisBadanUsaha,
						datasets: [{
							axis: 'x',
							label: 'Total Badan Usaha',
							data: dataValueJenisBadanUsaha,
							fill: true,
							// backgroundColor: "rgb(55,71,116)",
							backgroundColor: "rgb(234,182,48)",
							borderWidth: 1
						}]
					}

					const configJenisBadanUsaha = {
						type: 'bar',
						data: dataJenisBadanUsaha,
						options: {
							indexAxis: 'x',
							maintainAspectRatio: false,
							plugins: {
								title: {
									display: true,
									text: 'Jenis Badan Usaha Jasa Konstruksi'
								}
							}
						}
					}

					const JenisBadanUsahaChart = new Chart(
						document.getElementById("jenis-bujk-chart"),
						configJenisBadanUsaha
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
									beginAtZero: true
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
									beginAtZero: true
								}
							}
						}
					};

					const jenisSertifikatChart = new Chart(
						document.getElementById("jenis-sertifikat-chart"),
						configJenisSertifikat
					)

					/**
					 * @desc Download Handler
					 * @plugin SheetJS
					 * @dataSource /bujk/sbutransisi
					 */

					const btnDownloads = $('.download-btn')

					const tableHeaders = {
						jumlah_subklas: {
							jumlah_subklas: "Total SBU"
						},
						jumlah_bujk: {
							jumlah_bujk: "Total BUJK"
						},
						provinsi_registrasi_sertifikat: {
							provinsi_reg_bujk: "Nama Provinsi",
							jumlah_subklas: "Total Sertifikat"
						},
						asosiasi_permohonan_sertifikat: {
							asosiasi_bujk: "Nama Asosiasi",
							jumlah_subklas: "Total Sertifikat"
						},
						kualifikasi_sertifikat: {
							kualifikasi_kbli_grup: "Group Kualifikasi",
							kualifikasi_kbli: "Kualifikasi",
							jumlah_subklas: "Total Sertifikat"
						},
						jenis_sertifikat: {
							jenis_sbu_grup: "Jenis SBU Group",
							jenis_usaha_bu: "Jenis Usaha BU",
							jumlah_subklas: "Total Sertifikat"
						},
						klasifikasi_sertifikat: {
							id_klasifikasi_kbli: "ID Klasifikasi",
							klasifikasi_kbli: "Klasifikasi",
							jumlah_subklas: "Total Sertifikat",
						},
						sub_klasifikasi_sertifikat: {
							id_sub_klasifikasi_kbli: "ID Sub Klasifikasi",
							klasifikasi_sub_kbli: "Sub Klasifikasi",
							jumlah_subklas: "Total Sertifikat"
						}
					}

					btnDownloads.map((btnIndex, btnItem) => {
						const fileName = $(btnItem).data('file-name') ?? "Data-File-Export"
						const sheet = $(btnItem).data("order-index") ? $(btnItem).data('order-index').split(".") : []
						const totalSheet = sheet.length ?? 0
						const sheetName = $(btnItem).data('sheet-name') ? $(btnItem).data('sheet-name').split('.') : []
						const dataSource = $(btnItem).data('source') ? $(btnItem).data('source').split('.') : []
						if (!totalSheet) return
						if (!dataSource) return
						if (dataSource.length > 1) {

							// Single Sheet Download Handler

						} else {

							if (dataSource[0] != "resData") return
							const convertedData = []
							sheet.map((sheetItem, sheetIndex) => {
								const sheetHeader = Object.keys(tableHeaders[sheetItem]).map(headerItem => ({
									text: tableHeaders[sheetItem][headerItem]
								}))
								const row = []

								if (Array.isArray(resData[sheetItem])) {
									resData[sheetItem].map((resDataItem, resDataIndex) => {
										const tempRow = []
										Object.keys(tableHeaders[sheetItem]).map((headerItem => {
											tempRow.push({
												text: (resData[sheetItem][resDataIndex][headerItem] ?? "(lain-lain)")
											})
										}))
										row.push(tempRow)
									})
								} else {
									Object.keys(tableHeaders[sheetItem]).map((headerItem => {
										row.push([{
											text: (resData[sheetItem][headerItem] ?? "(lain-lain)")
										}])
									}))
								}

								const sheetData = {
									sheetName: sheetName[sheetIndex],
									data: [sheetHeader, ...row]
								}

								convertedData.push(sheetData)
							})

							// console.log(convertedData)
							$(btnItem).on("click", function(e) {
								e.preventDefault()
								e.stopImmediatePropagation()
								Jhxlsx.export(convertedData, {
									fileName: `${fileName}`,
									header: true
								})
							})

							$(btnItem).removeAttr("disabled").removeClass("disabled")
						}

					})

				} else {
					// error handling here
				}
			})
		})
	</script>