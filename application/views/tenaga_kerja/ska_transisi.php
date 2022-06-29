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

							<p class="breadcrumbs mb-0"><span class="mr-3"><a href="<?= BASE_URL ?>">Beranda&nbsp;&nbsp;&nbsp;<i class="fa fa-solid fa-angle-right fa-xs"></i></a></span> <span class="default-yellow">Tenaga Kerja Konstruksi</span></p>

							<h2 class="pt-2"><?= $pageTitle; ?></h2>

							<p class="user-info pt-3 mb-0 loading-skeleton"><span><i class="fa fa-user"></i>&emsp;Admin Datin DJBK&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span id="ajax-last-update">&nbsp;</span></p>

							<a href="#" id="download-full" class="btn text-white radius btn-lg bg-pupr-yellow px-5 py-3 mt-5 f-16 download-btn disabled" data-file-name="Rekapitulasi-Badan-Usaha-Jasa-Konstruksi" data-sheet-name="Rekapitulasi Subklas.Rekapitulasi BUJK.Provinsi Domisili Badan Usaha.Asosiasi Badan Usaha.Bentuk Badan Usaha.Jenis Badan Usaha.Kualifikasi Badan Usaha.Sifat Usaha Badan Usaha" data-source="resData" data-order-index="jumlah_subklas.jumlah_bujk.provinsi_domisili_bujk.asosiasi_bujk.bentuk_bujk.jenis_bujk.kualifikasi_bujk.sifat_usaha_bujk" disabled><span><i class="fa fa-solid fa-download"></i></span>&nbsp;&nbsp;Download Full Data BUJK Masa Transisi</a>
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
				<!-- JUMLAH TKK -->
				<div class="col-xl-4 col-md-4 mb-4">
					<div class="card border-bottom-pupr-blue shadow h-100 py-2">
						<div class="card-body">
							<div class="row no-gutters align-items-center pb-3" style="padding-top: inherit;">
								<div class="col-md-7 border-right-custom">
									<h2 class="font-weight-bold text-pupr-blue text-uppercase mb-0 ml-5">SKA</h2>
									<p class="text-gray-800 ml-5 mb-0">Sertifikat Keahlian</p>
								</div>
								<div class="col-md-5 px-2 loading-skeleton">
									<h1 class="text-center font-weight-bold text-pupr-orange" id="ajax-jumlah-ska">&emsp;</h1>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- JUMLAH TENAGA AHLI -->
				<div class="col-xl-4 col-md-4 mb-4">
					<div class="card border-bottom-pupr-blue shadow h-100 py-2">
						<div class="card-body">
							<div class="row no-gutters align-items-center pb-3" style="padding-top: inherit;">
								<div class="col-md-7 border-right-custom">
									<h2 class="font-weight-bold text-pupr-blue text-uppercase mb-0 ml-5">TA</h2>
									<p class="text-gray-800 ml-5 mb-0">Tenaga Ahli</p>
								</div>
								<div class="col-md-5 px-2 loading-skeleton">
									<h1 class="text-center font-weight-bold text-pupr-orange" id="ajax-jumlah-ta">&emsp;</h1>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- JUMLAH TENAGA ASING -->
				<div class="col-xl-4 col-md-4 mb-4">
					<div class="card border-bottom-pupr-blue shadow h-100 py-2">
						<div class="card-body">
							<div class="row no-gutters align-items-center pb-3" style="padding-top: inherit;">
								<div class="col-md-7 border-right-custom">
									<h2 class="font-weight-bold text-pupr-blue text-uppercase mb-0 ml-5">TA ASING</h2>
									<p class="text-gray-800 ml-5 mb-0">Tenaga Ahli Asing</p>
								</div>
								<div class="col-md-5 px-2 loading-skeleton">
									<h1 class="text-center font-weight-bold text-pupr-orange" id="ajax-jumlah-ta-asing">&emsp;</h1>
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

					<h1 class="section-title"><b>Provinsi Domisili Badan Usaha Jasa Konstruksi</b></h1>
					<a id="download-provinsi-domisili" href="#provinsi-domisili-section" class="btn radius btn-lg bg-pupr-blue download-btn text-white disabled" data-file-name="Provinsi-Domisili-Badan-Usaha" data-sheet-name="Provinsi Domisili Badan Usaha" data-source="resData.provinsi_domisili_bujk" data-order-index="provinsi_domisili_bujk" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Provinsi Domisili Badan Usaha</a>

					<canvas id="provDomisiliMaps"></canvas>
				</div>
			</div>

			<div class="row" id="asosiasi-bujk-section">
				<div class="col-md-12 text-center my-5 py-3">
					<h1 class="section-title bg-white"><b>Asosiasi Badan Usaha Jasa Konstruksi</b></h1>
					<a id="download-asosiasi-bujk" href="#asosiasi-bujk-section" class="btn radius btn-lg bg-pupr-blue text-white download-btn disabled" data-file-name="Asosiasi-Badan-Usaha" data-sheet-name="Asosiasi Badan Usaha" data-source="resData.asosiasi_bujk" data-order-index="asosiasi_bujk" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Asosiasi Badan Usaha</a>
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
					<div style="height: 522px; position: relative" class="chart-container skeleton-div pl-5" id="asosiasi-bujk-chart-container">
						<canvas id="asosiasi-bujk-chart" height="1044px"></canvas>
					</div>
				</div>
			</div>

			<div class="row" id="bentuk-bujk-section">
				<div class="col-md-12 text-center my-5 py-3">
					<h1 class="section-title bg-white"><b>Bentuk Badan Usaha Jasa Konstruksi</b></h1>
					<a id="download-bentuk-bujk" href="#bentuk-bujk-section" class="btn radius btn-lg bg-pupr-blue text-white download-btn disabled" data-file-name="Bentuk-Badan-Usaha" data-sheet-name="Bentuk Badan Usaha" data-source="resData.bentuk_bujk" data-order-index="bentuk_bujk" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Bentuk Badan Usaha</a>
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
					<a id="download-jenis-bujk" href="#jenis-bujk-section" class="btn radius btn-lg bg-pupr-blue text-white download-btn disabled" data-file-name="Jenis-Badan-Usaha" data-sheet-name="Jenis Badan Usaha" data-source="resData.jenis_bujk" data-order-index="jenis_bujk" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Jenis Badan Usaha</a>
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
					<div style="height: 522px; position: relative" class="chart-container skeleton-div pl-5" id="jenis-bujk-chart-container">
						<canvas id="jenis-bujk-chart" height="1044px"></canvas>
					</div>
				</div>
			</div>

			<div class="row" id="kualifikasi-bujk-section">
				<div class="col-md-12 text-center my-5 py-3">
					<h1 class="section-title"><b>Kualifikasi Badan Usaha Jasa Konstruksi</b></h1>
					<a id="download-kualifiaksi" href="#kualifikasi-bujk-section" class="btn radius btn-lg bg-pupr-blue text-white download-btn disabled" data-file-name="Kualifikasi-Badan-Usaha" data-sheet-name="Kualifikasi Badan Usaha" data-source="resData.kualifikasi_bujk" data-order-index="kualifikasi_bujk" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Kualifikasi Badan Usaha</a>
				</div>
				<div class="col-md-7">
					<table class="table table-bordered" width="100%" id="kualifikasi-bujk">
						<thead>
							<tr>
								<th class="text-center" width="60%">Kualifikasi Badan Usaha</th>
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
					<div style="height: 522px; position: relative" class="chart-container skeleton-div pl-5" id="kualifikasi-bujk-chart-container">
						<canvas id="kualifikasi-bujk-chart" height="1044px"></canvas>
					</div>
				</div>
			</div>

			<div class="row" id="sifat-usaha-bujk-section">
				<div class="col-md-12 text-center my-5 py-3">
					<h1 class="section-title bg-white"><b>Sifat Usaha Badan Usaha Jasa Konstruksi</b></h1>
					<a id="download-sifat-usaha-bujk" href="#sifat-usaha-bujk-section" class="btn radius btn-lg bg-pupr-blue text-white download-btn disabled" data-file-name="Sifat-Usaha-Badan-Usaha" data-sheet-name="Sifat Usaha Badan Usaha" data-source="resData.sifat_usaha_bujk" data-order-index="sifat_usaha_bujk" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Sifat Usaha Badan Usaha</a>
				</div>
				<div class="col-md-7">
					<table class="table table-bordered" width="100%" id="sifat-usaha-bujk">
						<thead>
							<tr>
								<th class="text-center" width="60%">Sifat Usaha Badan Usaha</th>
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
					<div style="height: 522px; position: relative" class="chart-container skeleton-div pl-5" id="sifat-usaha-bujk-chart-container">
						<canvas id="sifat-usaha-bujk-chart" height="1044px"></canvas>
					</div>
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
					id: "#kualifikasi-bujk",
					index: "kualifikasi_bujk",
					fields: ["kualifikasi_bujk", "jumlah_bujk"],
					centerIndex: [1],
					formating: ['text', 'number'],
					options: {
						scrollX: true,
						// rowsGroup: [0],
						// paginate: false,
						ordering: false
					}
				},
				{
					id: "#sifat-usaha-bujk",
					index: "sifat_usaha_bujk",
					fields: ["sifat_usaha", "jumlah_bujk"],
					centerIndex: [1],
					formating: ['text', 'number'],
					options: {
						scrollX: true,
						// scrollY: "400px",
						order: [
							[1, "desc"]
						]
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

			$.get(baseUrl + `/${devMode ? "tenagakerja-dev" : "tenagakerja"}/skatransisi/ajax`, (res) => {
				res = $.parseJSON(res)
				if (res.status == 200) {
					$(".loading-skeleton").removeClass("loading-skeleton")
					const resData = res.data
					const resDateRecord = new Date(res.dateRecord)

					const ElementLastUpdate = $("#ajax-last-update").html(" Data per Tanggal : " + resDateRecord.toLocaleString("ID"))
					const ElementJumlahSKA = $("#ajax-jumlah-ska").html((resData.jumlah_subklas.jumlah_subklas.toLocaleString()))
					const ElementJumlahTA = $("#ajax-jumlah-ta").html((resData.jumlah_ta.jumlah_ta.toLocaleString()))
					const ElementJumlahTAAsing = $("#ajax-jumlah-ta-asing").html((resData.jumlah_ta_asing.jumlah_ta_asing.toLocaleString()))

					// Provinsi Registrasi Database Array
					const dataProvDomisili = resData.provinsi_registrasi

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

					const rawKualifikasiBadanUsaha = resData.kualifikasi_bujk
					const indexOrderingKeyKualifikasiBadanUsaha = ["Besar", "Menengah", "Kecil", "Perseorangan"]
					resData.kualifikasi_bujk = mapOrder(rawKualifikasiBadanUsaha, indexOrderingKeyKualifikasiBadanUsaha, "kualifikasi_bujk")

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
					 * @desc Chart Kualifikasi Badan Usaha
					 * @plugin Chart.js 3.8
					 * @dataSource /bujk/sbutransisi [data: kualifikasi_bujk]
					 */

					const sortedDataKualifikasiBadanUsaha = {}
					resData.kualifikasi_bujk.map((item) => {
						sortedDataKualifikasiBadanUsaha[item.kualifikasi_bujk] = parseInt(sortedDataKualifikasiBadanUsaha[item.kualifikasi_bujk] ?? 0) + item.jumlah_bujk
					})

					const labelsKualifikasiBadanUsaha = Object.keys(sortedDataKualifikasiBadanUsaha)
					const dataValueKualifikasiBadanUsaha = Object.values(sortedDataKualifikasiBadanUsaha)

					const dataKualifikasiBadanUsaha = {
						labels: labelsKualifikasiBadanUsaha,
						datasets: [{
							label: 'Kualifikasi',
							data: dataValueKualifikasiBadanUsaha,
							backgroundColor: [
								"rgb(55, 71, 116)",
								"rgb(234, 182, 48)",
								"rgb(216, 30, 91)",
								"rgb(30, 174, 78)",
							]
						}]
					};

					const configKualifikasiBadanUsaha = {
						type: 'pie',
						data: dataKualifikasiBadanUsaha,
						options: {
							scale: {
								ticks: {
									beginAtZero: true
								}
							}
						}
					};

					const kualifikasiBadanUsahaChart = new Chart(
						document.getElementById("kualifikasi-bujk-chart"),
						configKualifikasiBadanUsaha
					)

					/**
					 * @desc Chart Sifat Usaha Badan Usaha
					 * @plugin Chart.js 3.8
					 * @dataSource /bujk/sbutransisi [data: sifat_usaha_bujk]
					 */

					const sortedDataSifatUsahaBadanUsaha = {}
					resData.sifat_usaha_bujk.map((item) => {
						sortedDataSifatUsahaBadanUsaha[item.sifat_usaha] = parseInt(sortedDataSifatUsahaBadanUsaha[item.sifat_usaha] ?? 0) + item.jumlah_bujk
					})

					const labelsSifatUsahaBadanUsaha = Object.keys(sortedDataSifatUsahaBadanUsaha)
					const dataValueSifatUsahaBadanUsaha = Object.values(sortedDataSifatUsahaBadanUsaha)

					const dataSifatUsahaBadanUsaha = {
						labels: labelsSifatUsahaBadanUsaha,
						datasets: [{
							label: 'Sifat Usaha',
							data: dataValueSifatUsahaBadanUsaha,
							backgroundColor: [
								"rgb(55, 71, 116)",
								"rgb(234, 182, 48)",
								"rgb(216, 30, 91)"
							]
						}]
					};

					const configSifatUsahaBadanUsaha = {
						type: 'pie',
						data: dataSifatUsahaBadanUsaha,
						options: {
							scale: {
								ticks: {
									beginAtZero: true
								}
							}
						}
					};

					const sifatUsahaBadanUsahaChart = new Chart(
						document.getElementById("sifat-usaha-bujk-chart"),
						configSifatUsahaBadanUsaha
					)

					/**
					 * @desc Download Handler
					 * @plugin SheetJS
					 * @dataSource /bujk/sbutransisi
					 */

					const btnDownloads = $('.download-btn')

					const tableHeaders = {
						jumlah_subklas: {
							jumlah_subklas: "Total Sub Klasifikasi"
						},
						jumlah_bujk: {
							jumlah_bujk: "Total BUJK"
						},
						provinsi_domisili_bujk: {
							provinsi_bujk: "Nama Provinsi",
							jumlah_bujk: "Total BUJK"
						},
						asosiasi_bujk: {
							asosiasi_bujk: "Nama Asosiasi",
							jumlah_bujk: "Total BUJK"
						},
						bentuk_bujk: {
							bentuk_bu: "Bentuk Badan Usaha",
							jumlah_bujk: "Total BUJK"
						},
						jenis_bujk: {
							jenis_usaha_badan_usaha: "Jenis Badan Usaha",
							jumlah_bujk: "Total BUJK"
						},
						kualifikasi_bujk: {
							kualifikasi_bujk: "Kualifikasi Badan Usaha",
							jumlah_bujk: "Total BUJK"
						},
						sifat_usaha_bujk: {
							sifat_usaha: "Sifat Usaha Badan Usaha",
							jumlah_bujk: "Total BUJK"
						}
					}

					btnDownloads.map((btnIndex, btnItem) => {
						const fileName = $(btnItem).data('file-name') ?? "Data-File-Export"
						const sheet = $(btnItem).data("order-index") ? $(btnItem).data('order-index').split(".") : []
						const totalSheet = sheet.length ?? 0
						const sheetName = $(btnItem).data('sheet-name') ? $(btnItem).data('sheet-name').split('.') : []
						const dataSource = $(btnItem).data('source') ? $(btnItem).data('source').split('.') : []
						const excelDataSet = []

						if (!totalSheet) return
						if (!dataSource) return
						if (dataSource.length > 1) {

							const sheetIndex = 0
							const currentDataSource = dataSource[0]
							const dataSourceDimension = dataSource[1]
							if (currentDataSource != "resData") return

							const rawDataItems = resData[dataSourceDimension]
							const row = []

							if (!Array.isArray(rawDataItems)) return
							rawDataItems.map((resDataItem, resDataIndex) => {
								const tempRow = []
								Object.keys(tableHeaders[dataSourceDimension]).map((headerItem => {
									tempRow.push({
										text: (rawDataItems[resDataIndex][headerItem] ?? "(lain-lain)")
									})
								}))
								row.push(tempRow)
							})

							const sheetHeader = Object.keys(tableHeaders[dataSourceDimension]).map(headerItem => ({
								text: tableHeaders[dataSourceDimension][headerItem]
							}))
							const sheetData = {
								sheetName: sheetName[0],
								data: [sheetHeader, ...row]
							}

							excelDataSet.push(sheetData)

						} else {
							if (dataSource[0] != "resData") return
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

								excelDataSet.push(sheetData)
							})

						}

						// console.log(convertedData)
						$(btnItem).on("click", function(e) {
							e.preventDefault()
							e.stopImmediatePropagation()
							Jhxlsx.export(excelDataSet, {
								fileName: `${fileName}`,
								header: true
							})
						})

						$(btnItem).removeAttr("disabled").removeClass("disabled")
					})

				} else {
					alert("error")
					// error handling here
				}
			})
		})
	</script>