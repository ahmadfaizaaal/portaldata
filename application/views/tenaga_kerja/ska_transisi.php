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

							<a href="#" id="download-full" class="btn text-white radius btn-lg bg-pupr-yellow px-5 py-3 mt-5 f-16 download-btn disabled" data-file-name="Rekapitulasi-SKA-Masa-Transisi" data-sheet-name="Rekapitulasi SKA.Rekapitulasi Tenaga Ahli.Rekapitulasi Tenaga Ahli Asing.Provinsi Registrasi.Asosiasi.Bidang SKA.Kualifikasi SKA.Sub Bidang SKA.Periode Pembuatan Sertifikat" data-source="resData" data-order-index="jumlah_subklas.jumlah_ta.jumlah_ta_asing.provinsi_registrasi.asosiasi.bidang.kualifikasi.sub_bidang.waktu_proses" disabled><span><i class="fa fa-solid fa-download"></i></span>&nbsp;&nbsp;Download Full Data SKA Masa Transisi</a>
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
									<h2 class="font-weight-bold text-pupr-blue text-uppercase mb-0 ml-5">TOTAL</h2>
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
									<h2 class="font-weight-bold text-pupr-blue text-uppercase mb-0 ml-5">TOTAL</h2>
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
									<h2 class="font-weight-bold text-pupr-blue text-uppercase mb-0 ml-5">TOTAL</h2>
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

			<div class="row mt-5 mb-5 loading-skeleton" id="provinsi-registrasi-section">
				<?php // var_dump($data) 
				?>
				<div class="col-md-12 text-center skeleton-div">

					<h1 class="section-title"><b>Provinsi Registrasi</b></h1>
					<a id="download-provinsi-registrasi" href="#provinsi-registrasi-section" class="btn radius btn-lg bg-pupr-blue download-btn text-white disabled" data-file-name="Provinsi-Registrasi-SKA" data-sheet-name="Provinsi Registrasi SKA" data-source="resData.provinsi_registrasi" data-order-index="provinsi_registrasi" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Provinsi Registrasi</a>

					<canvas id="provRegistrasiMaps"></canvas>
				</div>
			</div>

			<div class="row" id="asosiasi-section">
				<div class="col-md-12 text-center my-5 py-3">
					<h1 class="section-title bg-white"><b>Asosiasi</b></h1>
					<a id="download-asosiasi" href="#asosiasi-section" class="btn radius btn-lg bg-pupr-blue text-white download-btn disabled" data-file-name="Asosiasi" data-sheet-name="Asosiasi" data-source="resData.asosiasi" data-order-index="asosiasi" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Asosiasi</a>
				</div>
				<div class="col-md-7">
					<table class="table table-bordered" width="100%" id="asosiasi">
						<thead>
							<tr>
								<th class="text-center" width="60%">Asosiasi</th>
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
					<div style="height: 522px; position: relative" class="chart-container skeleton-div pl-5" id="asosiasi-chart-container">
						<canvas id="asosiasi-chart" height="1044px"></canvas>
					</div>
				</div>
			</div>

			<div class="row" id="bidang-sertifikat-section">
				<div class="col-md-12 text-center my-5 py-3">
					<h1 class="section-title bg-white"><b>Bidang Sertifikat Keahlian</b></h1>
					<a id="download-bidang-sertifikat" href="#bidang-sertifikat-section" class="btn radius btn-lg bg-pupr-blue text-white download-btn disabled" data-file-name="Bidang-sertifikat-keahlian" data-sheet-name="Bidang Sertifikat Keahlian" data-source="resData.bidang" data-order-index="bidang" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Bidang Sertifikat Keahlian</a>
				</div>
				<div class="col-md-7">
					<table class="table table-bordered" width="100%" id="bidang-sertifikat">
						<thead>
							<tr>
								<th class="text-center" width="15%">ID</th>
								<th class="text-center" width="70%">Bidang SKA</th>
								<th class="text-center" width="15%">Total</th>
								<!-- <th class="text-center" width="60%">Bidang Sertifikat Keahlian</th>
								<th class="text-center" width="40%">Total</th> -->
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
					<div style="height: 522px; position: relative" class="chart-container skeleton-div pl-5" id="bidang-sertifikat-chart-container">
						<canvas id="bidang-sertifikat-chart" height="1044px"></canvas>
					</div>
				</div>
			</div>

			<div class="row" id="kualifikasi-ska-section">
				<div class="col-md-12 text-center my-5 py-3">
					<h1 class="section-title"><b>Kualifikasi Sertifikat Keahlian</b></h1>
					<a id="download-kualifiaksi" href="#kualifikasi-ska-section" class="btn radius btn-lg bg-pupr-blue text-white download-btn disabled" data-file-name="Kualifikasi-SKA" data-sheet-name="Kualifikasi SKA" data-source="resData.kualifikasi" data-order-index="kualifikasi" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Kualifikasi</a>
				</div>
				<div class="col-md-7">
					<table class="table table-bordered" width="100%" id="kualifikasi-ska">
						<thead>
							<tr>
								<th class="text-center" width="60%">Kualifikasi Sertifikat Keahlian</th>
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
					<div style="height: 522px; position: relative" class="chart-container skeleton-div pl-5" id="kualifikasi-ska-chart-container">
						<canvas id="kualifikasi-ska-chart" height="1044px"></canvas>
					</div>
				</div>
			</div>

			<div class="row" id="sub-bidang-ska-section">
				<div class="col-md-12 text-center my-5 py-3">
					<h1 class="section-title bg-white"><b>Sub Bidang Sertifikat Keahlian</b></h1>
					<a id="download-sub-bidang-ska" href="#sub-bidang-ska-section" class="btn radius btn-lg bg-pupr-blue text-white download-btn disabled" data-file-name="Sub-bidang-ska-SKA" data-sheet-name="Sub Bidang SKA" data-source="resData.sub_bidang" data-order-index="sub_bidang" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Sub Bidang Sertifikat Keahlian</a>
				</div>
				<div class="col-md-7">
					<table class="table table-bordered" width="100%" id="sub-bidang-ska">
						<thead>
							<tr>
								<th class="text-center" width="15%">ID</th>
								<th class="text-center" width="70%">Sub Bidang SKA</th>
								<th class="text-center" width="15%">Total</th>
								<!-- <th class="text-center" width="60%">Sub Bidang SKA</th>
								<th class="text-center" width="40%">Total</th> -->
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
					<div style="height: 522px; position: relative" class="chart-container skeleton-div pl-5" id="sub-bidang-ska-chart-container">
						<canvas id="sub-bidang-ska-chart" height="1044px"></canvas>
					</div>
				</div>
			</div>

			<div class="row mt-5 mb-5 loading-skeleton" id="waktu-proses-sertifikat-section">
				<?php // var_dump($data) 
				?>
				<div class="col-md-12 text-center skeleton-div">

					<h1 class="section-title"><b>Periode Penerbitan Sertifkat</b></h1>
					<a id="download-waktu-proses-sertifikat" href="#waktu-proses-sertifikat-section" class="btn radius btn-lg bg-pupr-blue download-btn text-white disabled" data-file-name="Periode-Sertifikat-Keahlian" data-sheet-name="Periode Sertifikat Sertifikat" data-source="resData.waktu_proses" data-order-index="waktu_proses" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Periode Penerbitan Sertifikat</a>

					<div style="height: 522px; position: relative" class="chart-container skeleton-div" id="waktu-proses-sertifikat-chart-container">
						<canvas id="waktu-proses-sertifikat-chart" height="1044px"></canvas>
					</div>
				</div>
			</div>

		</div>
	</section>

	<script src="<?= BASE_THEME ?>landing/assets/js/vendor/dataTables.rowsGroup.js"></script>
	<script>
		var ctx = document.getElementById("provRegistrasiMaps") // Get Canvas Element
		var baseUrl = '<?= BASE_URL; ?>' // Project Root URL
		var themePath = '<?= BASE_THEME; ?>' // Theme Assets Path
		var devMode = false // Dev Mode

		// Comparing Data Provinsi Registrasi Database <-> Maps Geo
		function search(nameKey, myArray) {
			for (var i = 0; i < myArray.length; i++) {
				if (myArray[i].provinsi_regitrasi === nameKey) {
					return myArray[i];
				}
			}
		}

		// Do Action on Window Loading Event
		$(window).on("load", function() {

			// Defining DataTables Configuration 
			const tableElementData = [{
					id: "#asosiasi",
					index: "asosiasi",
					fields: ["asosiasi", "jumlah_subklas"],
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
					id: "#bidang-sertifikat",
					index: "bidang",
					fields: ["id_bidang", "bidang", "jumlah_subklas"],
					centerIndex: [0, 2],
					formating: ['text', 'text', 'number'],
					options: {
						scrollX: true,
						// scrollY: "400px",
						order: [
							[2, "desc"]
						]
					}
				},
				{
					id: "#kualifikasi-ska",
					index: "kualifikasi",
					fields: ["kualifikasi", "jumlah_subklas"],
					centerIndex: [1],
					formating: ['text', 'number'],
					options: {
						scrollX: true,
						// rowsGroup: [0],
						// paginate: false,
						order: [
							[1, "desc"]
						]
					}
				},
				{
					id: "#sub-bidang-ska",
					index: "sub_bidang",
					fields: ["id_sub_bidang", "sub_bidang", "jumlah_subklas"],
					centerIndex: [0, 2],
					formating: ['text', 'text', 'number'],
					options: {
						scrollX: true,
						scrollY: "400px",
						order: [
							[2, "desc"]
						],
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
					const dataProvRegistrasi = resData.provinsi_registrasi

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
									data: indonesiaTopo.map(provinsi => ({
										feature: provinsi,
										value: (search(provinsi.properties.provinsi, dataProvRegistrasi) ? search(provinsi.properties.provinsi, dataProvRegistrasi).jumlah_subklas : 0)
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

					// const rawKualifikasiBadanUsaha = resData.kualifikasi_bujk
					// const indexOrderingKeyKualifikasiBadanUsaha = ["Besar", "Menengah", "Kecil", "Perseorangan"]
					// resData.kualifikasi_bujk = mapOrder(rawKualifikasiBadanUsaha, indexOrderingKeyKualifikasiBadanUsaha, "kualifikasi_bujk")

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
					 * @desc Chart Asosiasi SKA
					 * @plugin Chart.js 3.8
					 * @dataSource /tenagakerja/skatransisi [data: asosiasi]
					 */

					const sortedDataAsosiasi = sort('jumlah_subklas', resData['asosiasi'])
					const labelsAsosiasi = []
					const dataValueAsosiasi = []

					sortedDataAsosiasi.map((item, index) => {
						if (index < 15) {
							labelsAsosiasi.push(item.asosiasi)
							dataValueAsosiasi.push(parseInt(item.jumlah_subklas))
						}
					})

					const dataAsosiasi = {
						labels: labelsAsosiasi,
						datasets: [{
							axis: 'y',
							label: 'Total Subklas',
							data: dataValueAsosiasi,
							fill: true,
							// backgroundColor: "rgb(55,71,116)",
							backgroundColor: "rgb(234,182,48)",
							borderWidth: 1
						}]
					}

					const configAsosiasi = {
						type: 'bar',
						data: dataAsosiasi,
						options: {
							indexAxis: 'y',
							maintainAspectRatio: false,
							plugins: {
								title: {
									display: true,
									text: 'Asosiasi'
								}
							}
						}
					}

					const asosiasiBadanUsahaChart = new Chart(
						document.getElementById("asosiasi-chart"),
						configAsosiasi
					)

					/**
					 * @desc Chart Bidang Sertifikat Keahlian
					 * @plugin Chart.js 3.8
					 * @dataSource /tenagakerja/skatransisi [data: bidang]
					 */

					const sortedDataBidangSKA = {}
					resData.bidang.map((item) => {
						sortedDataBidangSKA[item.bidang] = parseInt(sortedDataBidangSKA[item.bidang] ?? 0) + item.jumlah_subklas
					})

					const labelsBidangSKA = Object.keys(sortedDataBidangSKA)
					const dataValueBidangSKA = Object.values(sortedDataBidangSKA)

					const dataBidangSKA = {
						labels: labelsBidangSKA,
						datasets: [{
							label: 'Bidang SKA',
							data: dataValueBidangSKA,
							// backgroundColor: Object.values(Utils.CHART_COLORS)
							backgroundColor: [
								'rgb(201, 203, 207)',
								'rgb(255, 159, 64)',
								'rgb(75, 192, 192)',
								'rgb(54, 162, 235)',
								'rgb(153, 102, 255)',
								"rgb(234, 182, 48)",
								'rgb(255, 99, 132)'
							]
						}]
					};

					const configBidangSKA = {
						type: 'doughnut',
						data: dataBidangSKA,
						options: {
							responsive: true,
							plugins: {
								legend: {
									position: 'top',
								},
							}
						}
					};

					const bidangSKAChart = new Chart(
						document.getElementById("bidang-sertifikat-chart"),
						configBidangSKA
					)

					/**
					 * @desc Chart Kualifikasi SKA
					 * @plugin Chart.js 3.8
					 * @dataSource /tenagakerja/skatransisi [data: kualifikasi]
					 */

					const sortedDataKualifikasiSKA = {}
					resData.kualifikasi.map((item) => {
						sortedDataKualifikasiSKA[item.kualifikasi] = parseInt(sortedDataKualifikasiSKA[item.kualifikasi] ?? 0) + item.jumlah_subklas
					})

					const labelsKualifikasiSKA = Object.keys(sortedDataKualifikasiSKA)
					const dataValueKualifikasiSKA = Object.values(sortedDataKualifikasiSKA)

					const dataKualifikasiSKA = {
						labels: labelsKualifikasiSKA,
						datasets: [{
							label: 'Kualifikasi',
							data: dataValueKualifikasiSKA,
							backgroundColor: [
								'rgb(255, 99, 132)',
								"rgb(234, 182, 48)",
								'rgb(75, 192, 192)'
							]
						}]
					};

					const configKualifikasiSKA = {
						type: 'doughnut',
						data: dataKualifikasiSKA,
						options: {
							responsive: true,
							plugins: {
								legend: {
									position: 'top',
								},
							}
						}
					};

					const kualifikasiSKAChart = new Chart(
						document.getElementById("kualifikasi-ska-chart"),
						configKualifikasiSKA
					)

					/**
					 * @desc Chart Sub Bidang SKA
					 * @plugin Chart.js 3.8
					 * @dataSource /tenagakerja/skatransisi [data: sub_bidang]
					 */

					const sortedDataSubBidangSKA = sort('jumlah_subklas', resData['sub_bidang'])
					const labelsSubBidangSKA = []
					const dataValueSubBidangSKA = []

					sortedDataSubBidangSKA.map((item, index) => {
						if (index < 15) {
							labelsSubBidangSKA.push(item.sub_bidang)
							dataValueSubBidangSKA.push(parseInt(item.jumlah_subklas))
						}
					})

					const dataSubBidangSKA = {
						labels: labelsSubBidangSKA,
						datasets: [{
							axis: 'y',
							label: 'Total Subklas',
							data: dataValueSubBidangSKA,
							fill: true,
							// backgroundColor: "rgb(55,71,116)",
							backgroundColor: "rgb(234,182,48)",
							borderWidth: 1
						}]
					}

					const configSubBidangSKA = {
						type: 'bar',
						data: dataSubBidangSKA,
						options: {
							indexAxis: 'y',
							maintainAspectRatio: false,
							plugins: {
								title: {
									display: true,
									text: 'Sub Bidang Sertifikat Keahlian'
								}
							}
						}
					}

					const subBidangSKAChart = new Chart(
						document.getElementById("sub-bidang-ska-chart"),
						configSubBidangSKA
					)

					/**
					 * @desc Chart Waktu Proses Sertifikat
					 * @plugin Chart.js 3.8
					 * @dataSource /tenagakerja/skatransisi [data: waktu_proses]
					 */

					const bulanIndex = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
					resData['waktu_proses'].map((item, index) => {
						const fullDate = item.tahun_proses_ska + "-" + (("0" + (bulanIndex.indexOf(item.bulan_proses_ska) + 1)).slice(-2)) + "-01"
						resData['waktu_proses'][index]['fullDate'] = fullDate
					})
					resData['waktu_proses'].sort((a, b) => new Date(a.fullDate).getTime() - new Date(b.fullDate).getTime())

					const dataWaktuProsesSertifikat = {
						labels: resData['waktu_proses'].map(item => (item.bulan_proses_ska + " " + item.tahun_proses_ska)),
						datasets: [{
							type: "line",
							label: 'Total SKA',
							data: resData['waktu_proses'].map(item => (item.jumlah_subklas)),
							borderColor: "rgb(55,71,116)",
							backgroundColor: "rgba(55,71,116,0.5)",
							pointStyle: 'circle',
							pointRadius: 10,
							pointHoverRadius: 15,
							tension: 0.4
						}, {
							type: "bar",
							label: "",
							data: resData['waktu_proses'].map(item => (item.jumlah_subklas)),
							borderColor: "rgb(234, 182, 48)",
							backgroundColor: "rgba(234, 182, 48, 0.8)",
						}]
					}

					const configWaktuProsesSertifikat = {
						type: 'line',
						data: dataWaktuProsesSertifikat,
						options: {
							indexAxis: 'x',
							maintainAspectRatio: false,
							plugins: {
								title: {
									display: true,
									text: 'Periode SKA Berdasarkan Bulan'
								}
							}
						}
					}

					const waktuProsesSertifikatChart = new Chart(
						document.getElementById("waktu-proses-sertifikat-chart"),
						configWaktuProsesSertifikat
					)

					/**
					 * @desc Download Handler
					 * @plugin SheetJS
					 * @dataSource /bujk/sbutransisi
					 */

					const btnDownloads = $('.download-btn')

					const tableHeaders = {
						jumlah_subklas: {
							jumlah_subklas: "Total SKA"
						},
						jumlah_ta: {
							jumlah_ta: "Total Tenaga Ahli"
						},
						jumlah_ta_asing: {
							jumlah_ta_asing: "Total Tenaga Ahli Asing"
						},
						provinsi_registrasi: {
							provinsi_regitrasi: "Nama Provinsi Registrasi",
							jumlah_subklas: "Total Subklas"
						},
						asosiasi: {
							asosiasi: "Nama Asosiasi",
							jumlah_subklas: "Total Subklas"
						},
						bidang: {
							id_bidang: "ID Bidang SKA",
							bidang: "Bidang SKA",
							jumlah_subklas: "Total Subklas"
						},
						kualifikasi: {
							kualifikasi: "Kualifikasi SKA",
							jumlah_subklas: "Total Subklas"
						},
						sub_bidang: {
							id_sub_bidang: "ID Sub Bidang SKA",
							sub_bidang: "Sub Bidang SKA",
							jumlah_subklas: "Total Subklas"
						},
						waktu_proses: {
							tahun_proses_ska: "Tahun Penerbitan SKA",
							bulan_proses_ska: "Bulan Penerbitan SKA",
							jumlah_subklas: "Total Subklas"
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