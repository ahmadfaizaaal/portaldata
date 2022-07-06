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

							<a href="#" id="download-full" class="btn text-white radius btn-lg bg-pupr-yellow px-5 py-3 mt-5 f-16 download-btn disabled" data-file-name="Rekapitulasi-SKK-Masa-Reguler" data-sheet-name="Rekapitulasi SKK.Rekapitulasi TKK.Jabatan Kerja.Klasifikasi SKK.Subklasifikasi SKK.Kualifikasi SKK.Pelaksana Sertifikasi.Periode Pembuatan Sertifikat" data-source="resData" data-order-index="jumlah_subklas.jumlah_tkk.jabatan_kerja.klasifikasi_sertifikat.sub_klasifikasi_sertifikat.kualifikasi_sertifikat.pelaksana_sertifikat.waktu_proses_sertifikat" disabled><span><i class="fa fa-solid fa-download"></i></span>&nbsp;&nbsp;Download Full Data SKK Masa Reguler</a>
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
				<!-- SERTIFIKAT KOMPETENSI KERJA -->
				<div class="col-xl-6 col-md-6 mb-4">
					<div class="card border-bottom-pupr-blue shadow h-100 py-2">
						<div class="card-body">
							<div class="row no-gutters align-items-center pb-3" style="padding-top: inherit;">
								<div class="col-md-9 border-right-custom">
									<h2 class="font-weight-bold text-pupr-blue text-uppercase mb-0 ml-5">TOTAL</h2>
									<p class="text-gray-800 ml-5 mb-0">Sertifikat Kompetensi Kerja (SKK)</p>
								</div>
								<div class="col-md-3 px-2 loading-skeleton">
									<h1 class="text-center font-weight-bold text-pupr-orange" id="ajax-jumlah-skk">&emsp;</h1>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- TENAGA KERJA KONSTRUKSI -->
				<div class="col-xl-6 col-md-6 mb-4">
					<div class="card border-bottom-pupr-blue shadow h-100 py-2">
						<div class="card-body">
							<div class="row no-gutters align-items-center pb-3" style="padding-top: inherit;">
								<div class="col-md-9 border-right-custom">
									<h2 class="font-weight-bold text-pupr-blue text-uppercase mb-0 ml-5">TOTAL</h2>
									<p class="text-gray-800 ml-5 mb-0">Tenaga Kerja Konstruksi (TKK)</p>
								</div>
								<div class="col-md-3 px-2 loading-skeleton">
									<h1 class="text-center font-weight-bold text-pupr-orange" id="ajax-jumlah-tkk">&emsp;</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="row" id="jabker-section">
				<div class="col-md-12 text-center my-5 py-3">
					<h1 class="section-title bg-white"><b>Jabatan Kerja</b></h1>
					<a id="download-jabker" href="#jabker-section" class="btn radius btn-lg bg-pupr-blue text-white download-btn disabled" data-file-name="Jabatan Kerja" data-sheet-name="Jabatan Kerja" data-source="resData.jabatan_kerja" data-order-index="jabatan_kerja" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Jabatan Kerja</a>
				</div>
				<div class="col-md-12 loading-skeleton">
					<div style="height: 400px; position: relative" class="chart-container skeleton-div" id="jabker-chart-container">
						<canvas id="jabker-chart" height="400px"></canvas>
					</div>
				</div>
				<div class="col-md-12 mt-5">
					<table class="table table-bordered" width="100%" id="jabker">
						<thead>
							<tr>
								<th class="text-center" width="20%">ID Jabker</th>
								<th class="text-center" width="60%">Jabatan Kerja</th>
								<th class="text-center" width="20%">Total Subklas</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td colspan="2" class="text-center">Loading...</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div class="row" id="klasifikasi-sertifikat-section">
				<div class="col-md-12 text-center my-5 py-3">
					<h1 class="section-title bg-white"><b>Klasifikasi Sertifikat Kompetensi Kerja</b></h1>
					<a id="download-klasifikasi-sertifikat" href="#klasifikasi-sertifikat-section" class="btn radius btn-lg bg-pupr-blue text-white download-btn disabled" data-file-name="klasifikasi-sertifikat-kompetensi" data-sheet-name="Klasifikasi SKK" data-source="resData.klasifikasi_sertifikat" data-order-index="klasifikasi_sertifikat" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Klasifikasi Sertifikat Kompetensi Kerja</a>
				</div>
				<div class="col-md-7">
					<table class="table table-bordered" width="100%" id="klasifikasi-sertifikat">
						<thead>
							<tr>
								<th class="text-center" width="20%">ID Klasifikasi</th>
								<th class="text-center" width="60%">Klasifikasi SKK</th>
								<th class="text-center" width="20%">Total Subklas</th>
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
					<div style="height: 522px; position: relative" class="chart-container skeleton-div pl-5" id="klasifikasi-sertifikat-chart-container">
						<canvas id="klasifikasi-sertifikat-chart" height="1044px"></canvas>
					</div>
				</div>
			</div>

			<div class="row" id="sub-klasifikasi-sertifikat-section">
				<div class="col-md-12 text-center my-5 py-3">
					<h1 class="section-title bg-white"><b>Sub Klasifikasi Sertifikat Kompetensi Kerja</b></h1>
					<a id="download-sub-klasifikasi-sertifikat" href="#sub-klasifikasi-sertifikat-section" class="btn radius btn-lg bg-pupr-blue text-white download-btn disabled" data-file-name="sub-klasifikasi-sertifikat-kompetensi" data-sheet-name="Sub Klasifikasi SKK" data-source="resData.sub_klasifikasi_sertifikat" data-order-index="sub_klasifikasi_sertifikat" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Sub Klasifikasi Sertifikat Kompetensi Kerja</a>
				</div>
				<div class="col-md-7">
					<table class="table table-bordered" width="100%" id="sub-klasifikasi-sertifikat">
						<thead>
							<tr>
								<th class="text-center" width="20%">ID Sub Klasifikasi</th>
								<th class="text-center" width="60%">Sub Klasifikasi SKK</th>
								<th class="text-center" width="20%">Total Subklas</th>
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
					<div style="height: 522px; position: relative" class="chart-container skeleton-div pl-5" id="sub-klasifikasi-sertifikat-chart-container">
						<canvas id="sub-klasifikasi-sertifikat-chart" height="1044px"></canvas>
					</div>
				</div>
			</div>

			<div class="row" id="kualifikasi-skk-section">
				<div class="col-md-12 text-center my-5 py-3">
					<h1 class="section-title"><b>Kualifikasi Sertifikat Kompetensi Kerja</b></h1>
					<a id="download-kualifiaksi-skk" href="#kualifikasi-skk-section" class="btn radius btn-lg bg-pupr-blue text-white download-btn disabled" data-file-name="Kualifikasi-SKK" data-sheet-name="Kualifikasi SKK" data-source="resData.kualifikasi_sertifikat" data-order-index="kualifikasi_sertifikat" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Kualifikasi Sertifikat Kompetensi Kerja</a>
				</div>
				<div class="col-md-7">
					<table class="table table-bordered" width="100%" id="kualifikasi-skk">
						<thead>
							<tr>
								<th class="text-center" width="40%">Kualifikasi</th>
								<th class="text-center" width="30%">Jenjang</th>
								<th class="text-center" width="30%">Total Subklas</th>
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
					<div style="height: 522px; position: relative" class="chart-container skeleton-div" id="kualifikasi-skk-chart-container">
						<canvas id="kualifikasi-skk-chart" height="1044px"></canvas>
					</div>
				</div>
			</div>

			<div class="row" id="pelaksana-skk-section">
				<div class="col-md-12 text-center my-5 py-3">
					<h1 class="section-title bg-white"><b>Pelaksana Sertifikasi Kompetensi Kerja</b></h1>
					<a id="download-pelaksana-skk" href="#pelaksana-skk-section" class="btn radius btn-lg bg-pupr-blue text-white download-btn disabled" data-file-name="Pelaksana SKK" data-sheet-name="Pelaksana SKK" data-source="resData.pelaksana_sertifikat" data-order-index="pelaksana_sertifikat" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Pelaksana Sertifikasi Kompetensi Kerja</a>
				</div>
				<div class="col-md-12 loading-skeleton">
					<div style="height: 400px; position: relative" class="chart-container skeleton-div" id="pelaksana-skk-chart-container">
						<canvas id="pelaksana-skk-chart" height="400px"></canvas>
					</div>
				</div>
				<div class="col-md-12 mt-5">
					<table class="table table-bordered" width="100%" id="pelaksana-skk">
						<thead>
							<tr>
								<th class="text-center" width="20%">ID LSP</th>
								<th class="text-center" width="60%">Pelaksana Sertifikasi</th>
								<th class="text-center" width="20%">Total Subklas</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td colspan="2" class="text-center">Loading...</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div class="row mt-5 mb-5 loading-skeleton" id="waktu-proses-sertifikat-section">
				<?php // var_dump($data) 
				?>
				<div class="col-md-12 text-center skeleton-div">

					<h1 class="section-title"><b>Periode Penerbitan Sertifkat</b></h1>
					<a id="download-waktu-proses-sertifikat" href="#waktu-proses-sertifikat-section" class="btn radius btn-lg bg-pupr-blue download-btn text-white disabled" data-file-name="Periode-Sertifikat-Kompetensi-Kerja" data-sheet-name="Periode Penerbitan Sertifikat" data-source="resData.waktu_proses_sertifikat" data-order-index="waktu_proses_sertifikat" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Periode Penerbitan Sertifikat</a>

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
		// function search(nameKey, myArray) {
		// 	for (var i = 0; i < myArray.length; i++) {
		// 		if (myArray[i].provinsi_regitrasi === nameKey) {
		// 			return myArray[i];
		// 		}
		// 	}
		// }

		// Do Action on Window Loading Event
		$(window).on("load", function() {

			// Defining DataTables Configuration 
			const tableElementData = [{
					id: "#jabker",
					index: "jabatan_kerja",
					fields: ["id_jabatan_kerja", "jabatan_kerja", "jumlah_subklas"],
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
				},
				{
					id: "#klasifikasi-sertifikat",
					index: "klasifikasi_sertifikat",
					fields: ["id_klasifikasi", "klasifikasi", "jumlah_subklas"],
					centerIndex: [0, 2],
					formating: ['text', 'text', 'number'],
					options: {
						scrollX: true,
						paginate: false,
						// scrollY: "400px",
						order: [
							[2, "desc"]
						]
					}
				},
				{
					id: "#sub-klasifikasi-sertifikat",
					index: "sub_klasifikasi_sertifikat",
					fields: ["id_subklasifikasi", "subklasifikasi", "jumlah_subklas"],
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
					id: "#kualifikasi-skk",
					index: "kualifikasi_sertifikat",
					fields: ["kualifikasi", "jenjang", "jumlah_subklas"],
					centerIndex: [0, 1, 2],
					formating: ['text', 'text', 'number'],
					options: {
						scrollX: true,
						rowsGroup: [0],
						paginate: false,
						ordering: false
					}
				},
				{
					id: "#pelaksana-skk",
					index: "pelaksana_sertifikat",
					fields: ["id_lsp", "pelaksana_sertifikasi", "jumlah_subklas"],
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

			$.get(baseUrl + `/${devMode ? "tenagakerja-dev" : "tenaga-kerja"}/skk-reguler/ajax`, (res) => {
				res = $.parseJSON(res)
				if (res.status == 200) {
					$(".loading-skeleton").removeClass("loading-skeleton")
					const resData = res.data
					const resDateRecord = new Date(res.dateRecord)

					const ElementLastUpdate = $("#ajax-last-update").html(" Data per Tanggal : " + resDateRecord.toLocaleString("ID"))
					const ElementJumlahSKK = $("#ajax-jumlah-skk").html((resData.jumlah_subklas.jumlah_subklas.toLocaleString()))
					const ElementJumlahTKK = $("#ajax-jumlah-tkk").html((resData.jumlah_tkk.jumlah_tkk.toLocaleString()))

					// Provinsi Registrasi Database Array
					// const dataProvRegistrasi = resData.provinsi_registrasi

					// Get Asia Maps Geo Data
					// $.getJSON(themePath + 'landing/assets/json/asiaTopo.json', function(asiaTopo) {

					// 	// Get Indonesia Region Outline
					// 	const countries = ChartGeo.topojson.feature(asiaTopo, asiaTopo.objects.continent_Asia_subunits).features;
					// 	const Indonesia = countries.find((d) => d.properties.geounit === 'Indonesia');

					// 	// Get Indonesia Provinsi Geolocation Segment
					// 	$.getJSON(themePath + 'landing/assets/json/indonesiaTopo.json', function(topoData) {

					// 		// Initialization Chart Geo Class with Indonesia Topology Data
					// 		var indonesiaTopo = ChartGeo.topojson.feature(topoData, topoData.objects.topoindo).features

					// 		// Define Datasets Chart Goe
					// 		const data = {
					// 			labels: indonesiaTopo.map(provinsi => provinsi.properties.provinsi),
					// 			datasets: [{
					// 				label: "Provinsi Registrasi", // Defining Chart Legend
					// 				outline: Indonesia, // Set Indonesia Outline Region
					// 				data: indonesiaTopo.map(provinsi => ({
					// 					feature: provinsi,
					// 					value: (search(provinsi.properties.provinsi, dataProvRegistrasi) ? search(provinsi.properties.provinsi, dataProvRegistrasi).jumlah_subklas : 0)
					// 				})) // Defining Compared Provinsi Registrasi Data with Map Geo
					// 			}]
					// 		}

					// 		// Chart Geo Configuration
					// 		const config = {
					// 			type: "choropleth", // Maps Type
					// 			data, // Dataset
					// 			options: {
					// 				onClick: (e) => { // Defining On Click Event
					// 					const activePoints = mapsChart.getElementsAtEventForMode(e, 'nearest', {
					// 						intersect: true
					// 					}, false) // Target Closest Click Point

					// 					const [{
					// 						index
					// 					}] = activePoints; // And then get the index value

					// 					// Custom Click Event
					// 					alert("Provinsi di klik " + data.datasets[0].data[index].feature.properties.provinsi + ". dengan Jumlah " + data.datasets[0].data[index].value.toLocaleString())
					// 				},
					// 				scales: {
					// 					xy: {
					// 						projection: "equalEarth" // Defining Maps Projection size equal to earth (show world atlas)
					// 					}
					// 				},
					// 				plugins: {
					// 					legend: {
					// 						display: false // Hiding Legend Title
					// 					}
					// 				}
					// 			}
					// 		}

					// 		var mapsChart = new Chart(ctx, config) // Chart Geo Instances
					// 	});

					// })

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
					 * @desc Chart Jabatan Kerja
					 * @plugin Chart.js 3.8
					 * @dataSource /tenaga-kerja-konstruksi/skk-reguler [data: jabatan_kerja]
					 */

					const sortedDataJabker = sort('jumlah_subklas', resData['jabatan_kerja'])
					const labelsJabker = []
					const dataValueJabker = []

					sortedDataJabker.map((item, index) => {
						if (index < 15) {
							labelsJabker.push(item.jabatan_kerja)
							dataValueJabker.push(parseInt(item.jumlah_subklas))
						}
					})

					const dataJabker = {
						labels: labelsJabker,
						datasets: [{
							axis: 'y',
							label: 'Total Subklas',
							data: dataValueJabker,
							fill: true,
							// backgroundColor: "rgb(55,71,116)",
							backgroundColor: "rgb(234,182,48)",
							borderWidth: 1
						}]
					}

					const configJabker = {
						type: 'bar',
						data: dataJabker,
						options: {
							indexAxis: 'y',
							maintainAspectRatio: false,
							plugins: {
								title: {
									display: true,
									text: 'Jabatan Kerja Teratas'
								}
							}
						}
					}

					const jabkerChart = new Chart(
						document.getElementById("jabker-chart"),
						configJabker
					)

					/**
					 * @desc Chart Pie Klasifikasi SKK
					 * @plugin Chart.js 3.8
					 * @dataSource /tenaga-kerja-konstruksi/skk-reguler [data: klasifikasi_sertifikat]
					 */

					const sortedDataKlasifikasiSKK = {}
					resData.klasifikasi_sertifikat.map((item) => {
						// sortedDataKlasifikasiSKK[item.klasifikasi] = parseInt(sortedDataKlasifikasiSKK[item.klasifikasi] ?? 0) + ((item.jumlah_subklas / total) * 100).toFixed(2)
						sortedDataKlasifikasiSKK[item.klasifikasi] = parseInt(sortedDataKlasifikasiSKK[item.klasifikasi] ?? 0) + item.jumlah_subklas
					})

					const labelsKlasifikasiSKK = Object.keys(sortedDataKlasifikasiSKK)
					const dataValueKlasifikasiSKK = Object.values(sortedDataKlasifikasiSKK)

					const dataKlasifikasiSKK = {
						labels: labelsKlasifikasiSKK,
						datasets: [{
							label: 'Klasifikasi',
							data: dataValueKlasifikasiSKK,
							backgroundColor: [
								'rgb(255, 99, 132)',
								"rgb(234, 182, 48)",
								'rgb(75, 192, 192)'
							]
						}]
					};

					const footer = (tooltipItems) => {
						let sum = 0;

						tooltipItems.forEach(function(tooltipItem) {
							sum += tooltipItem.parsed.y;
						});
						return 'Sum: ' + sum;
					};

					const configKlasifikasiSKK = {
						type: 'doughnut',
						data: dataKlasifikasiSKK,
						options: {
							responsive: true,
							plugins: {
								legend: {
									position: 'top',
								},
								tooltip: {
									callbacks: {
										label: function(context) {
											let dataset = context.dataset
											let total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
												return previousValue + currentValue;
											});
											let currentValue = dataset.data[context.dataIndex];
											let precentage = ((currentValue / total) * 100);
											return context.label + " : " + precentage.toFixed(2) + "%";
										}
									}
								}
							}
						}
					};

					const klasifikasiSKK = new Chart(
						document.getElementById("klasifikasi-sertifikat-chart"),
						configKlasifikasiSKK
					)

					/**
					 * @desc Chart Sub Klasifikasi Sertifikat Kompetensi
					 * @plugin Chart.js 3.8
					 * @dataSource /tenaga-kerja-konstruksi/skk-reguler [data: sub_klasifikasi_sertifikat]
					 */

					const sortedSubKlasifikasiSKK = sort('jumlah_subklas', resData['sub_klasifikasi_sertifikat'])
					const labelsSubKlasifikasiSKK = []
					const dataValueSubKlasifikasiSKK = []

					sortedSubKlasifikasiSKK.map((item, index) => {
						if (index < 15) {
							labelsSubKlasifikasiSKK.push(item.subklasifikasi)
							dataValueSubKlasifikasiSKK.push(parseInt(item.jumlah_subklas))
						}
					})

					const dataSubKlasifikasiSKK = {
						labels: labelsSubKlasifikasiSKK,
						datasets: [{
							axis: 'y',
							label: 'Total Subklas',
							data: dataValueSubKlasifikasiSKK,
							fill: true,
							// backgroundColor: "rgb(55,71,116)",
							backgroundColor: "rgb(234,182,48)",
							borderWidth: 1
						}]
					}

					const configSubKlasifikasiSKK = {
						type: 'bar',
						data: dataSubKlasifikasiSKK,
						options: {
							indexAxis: 'y',
							maintainAspectRatio: false,
							plugins: {
								title: {
									display: true,
									text: 'Sub Klasifikasi Sertifikat Kompetensi Kerja'
								}
							}
						}
					}

					const JenisSubKlasifikasiSKK = new Chart(
						document.getElementById("sub-klasifikasi-sertifikat-chart"),
						configSubKlasifikasiSKK
					)

					/**
					 * @desc Chart Kualifikasi SKK
					 * @plugin Chart.js 3.8
					 * @dataSource /tenaga-kerja-konstruksi/skk-reguler [data: kualifikasi_sertifikat]
					 */

					const sortedDataKualifikasiSKK = {}
					resData.kualifikasi_sertifikat.map((item) => {
						sortedDataKualifikasiSKK[item.kualifikasi] = parseInt(sortedDataKualifikasiSKK[item.kualifikasi] ?? 0) + item.jumlah_subklas
					})

					const labelsKualifikasiSKK = Object.keys(sortedDataKualifikasiSKK)
					const dataValueKualifikasiSKK = Object.values(sortedDataKualifikasiSKK)

					const dataKualifikasiSKK = {
						labels: labelsKualifikasiSKK,
						datasets: [{
							label: 'Kualifikasi',
							data: dataValueKualifikasiSKK,
							backgroundColor: [
								'rgb(255, 99, 132)',
								"rgb(234, 182, 48)",
								'rgb(75, 192, 192)'
							]
						}]
					};

					const configKualifikasiSKK = {
						type: 'doughnut',
						data: dataKualifikasiSKK,
						options: {
							responsive: true,
							plugins: {
								legend: {
									position: 'top',
								},
								tooltip: {
									callbacks: {
										label: function(context) {
											let dataset = context.dataset
											let total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
												return previousValue + currentValue;
											});
											let currentValue = dataset.data[context.dataIndex];
											let precentage = ((currentValue / total) * 100);
											return context.label + " : " + precentage.toFixed(2) + "%";
										}
									}
								}
							}
						}
					};

					const kualifikasiSKKChart = new Chart(
						document.getElementById("kualifikasi-skk-chart"),
						configKualifikasiSKK
					)

					/**
					 * @desc Chart Pelaksana Sertifikasi Kompetensi
					 * @plugin Chart.js 3.8
					 * @dataSource /tenaga-kerja-konstruksi/skk-reguler [data: pelaksana_sertifikat]
					 */

					const sortedDataPelaksanaSertifikasi = sort('jumlah_subklas', resData['pelaksana_sertifikat'])
					const labelsPelaksanaSertifikasi = []
					const dataValuePelaksanaSertifikasi = []

					sortedDataPelaksanaSertifikasi.map((item, index) => {
						if (index < 15) {
							labelsPelaksanaSertifikasi.push(item.pelaksana_sertifikasi)
							dataValuePelaksanaSertifikasi.push(parseInt(item.jumlah_subklas))
						}
					})

					const dataPelaksanaSertifikasi = {
						labels: labelsPelaksanaSertifikasi,
						datasets: [{
							axis: 'y',
							label: 'Total Subklas',
							data: dataValuePelaksanaSertifikasi,
							fill: true,
							// backgroundColor: "rgb(55,71,116)",
							backgroundColor: "rgb(234,182,48)",
							borderWidth: 1
						}]
					}

					const configPelaksanaSertifikasi = {
						type: 'bar',
						data: dataPelaksanaSertifikasi,
						options: {
							indexAxis: 'y',
							maintainAspectRatio: false,
							plugins: {
								title: {
									display: true,
									text: 'Pelaksana Sertifikasi Teratas'
								}
							}
						}
					}

					const pelaksanaSertifikasiChart = new Chart(
						document.getElementById("pelaksana-skk-chart"),
						configPelaksanaSertifikasi
					)

					/**
					 * @desc Chart Waktu Proses Sertifikat
					 * @plugin Chart.js 3.8
					 * @dataSource /tenaga-kerja-konstruksi/skk-reguler [data: waktu_proses_sertifikat]
					 */

					const bulanIndex = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
					resData['waktu_proses_sertifikat'].map((item, index) => {
						const fullDate = item.tahun_proses_skk + "-" + (("0" + (bulanIndex.indexOf(item.bulan_proses_skk) + 1)).slice(-2)) + "-01"
						resData['waktu_proses_sertifikat'][index]['fullDate'] = fullDate
					})
					resData['waktu_proses_sertifikat'].sort((a, b) => new Date(a.fullDate).getTime() - new Date(b.fullDate).getTime())

					const dataWaktuProsesSertifikat = {
						labels: resData['waktu_proses_sertifikat'].map(item => (item.bulan_proses_skk + " " + item.tahun_proses_skk)),
						datasets: [{
							type: "line",
							label: 'Total SKK',
							data: resData['waktu_proses_sertifikat'].map(item => (item.jumlah_subklas)),
							borderColor: "rgb(55,71,116)",
							backgroundColor: "rgba(55,71,116,0.5)",
							pointStyle: 'circle',
							pointRadius: 10,
							pointHoverRadius: 15,
							tension: 0.4
						}, {
							type: "bar",
							label: "",
							data: resData['waktu_proses_sertifikat'].map(item => (item.jumlah_subklas)),
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
									text: 'Periode SKK Berdasarkan Bulan'
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
							jumlah_subklas: "Total Sertifikat"
						},
						jumlah_tkk: {
							jumlah_tkk: "Total Tenaga Kerja Konstruksi"
						},
						jabatan_kerja: {
							id_jabatan_kerja: "ID Jabatan Kerja",
							jabatan_kerja: "Jabatan Kerja",
							jumlah_subklas: "Total Subklas"
						},
						klasifikasi_sertifikat: {
							id_klasifikasi: "ID Klasifikasi",
							klasifikasi: "Klasifikasi SKK",
							jumlah_subklas: "Total Subklas"
						},
						sub_klasifikasi_sertifikat: {
							id_subklasifikasi: "ID Sub Klasifikasi",
							subklasifikasi: "Sub Klasifikasi SKK",
							jumlah_subklas: "Total Subklas"
						},
						kualifikasi_sertifikat: {
							kualifikasi: "Kualifikasi SKK",
							jenjang: "Jenjang Kualifikasi",
							jumlah_subklas: "Total Subklas"
						},
						pelaksana_sertifikat: {
							id_lsp: "ID LSP",
							pelaksana_sertifikasi: "Pelaksana Sertifikasi",
							jumlah_subklas: "Total Subklas"
						},
						waktu_proses_sertifikat: {
							tahun_proses_skk: "Tahun Penerbitan SKK",
							bulan_proses_skk: "Bulan Penerbitan SKK",
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