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

							<a href="#" id="download-full" class="btn text-white radius btn-lg bg-pupr-yellow px-5 py-3 mt-5 f-16 download-btn disabled" data-file-name="Rekapitulasi-TA-SKA-Masa-Transisi" data-sheet-name="Rekapitulasi TKK.Rekapitulasi Tenaga Ahli.Rekapitulasi Tenaga Ahli Asing.Provinsi Domisili TA.Kabupaten Kota Domisili TA" data-source="resData" data-order-index="jumlah_tkk.jumlah_ta.jumlah_ta_asing.provinsi_domisili_ta.kabkot_domisili_ta" disabled><span><i class="fa fa-solid fa-download"></i></span>&nbsp;&nbsp;Download Full Data Tenaga Ahli (SKA Masa Transisi)</a>
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
									<p class="text-gray-800 ml-5 mb-0">Tenaga Kerja</p>
								</div>
								<div class="col-md-5 px-2 loading-skeleton">
									<h1 class="text-center font-weight-bold text-pupr-orange" id="ajax-jumlah-tkk">&emsp;</h1>
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

					<h1 class="section-title"><b>Provinsi Domisili Tenaga Ahli</b></h1>
					<a id="download-provinsi-registrasi" href="#provinsi-registrasi-section" class="btn radius btn-lg bg-pupr-blue download-btn text-white disabled" data-file-name="Provinsi-Domisili-Tenaga-Ahli" data-sheet-name="Provinsi Domisili Tenaga Ahli" data-source="resData.provinsi_domisili_ta" data-order-index="provinsi_domisili_ta" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Provinsi Registrasi</a>

					<canvas id="provDomisiliTAMaps"></canvas>
				</div>
			</div>

			<div class="row" id="kabupaten-kota-section">
				<div class="col-md-12 text-center my-5 py-3">
					<h1 class="section-title"><b>Kabupaten/Kota Domisili Tenaga Ahli</b></h1>
					<a id="download-kabkot" href="#kabupaten-kota-section" class="btn radius btn-lg bg-pupr-blue text-white download-btn disabled" data-file-name="Kabupaten-Kota-Domisili-Tenaga-Ahli" data-sheet-name="Kabupaten Kota Domisili" data-source="resData.kabkot_domisili_ta" data-order-index="kabkot_domisili_ta" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Kabupaten Kota Domisili Tenaga Ahli</a>
				</div>
				<div class="col-md-12">
					<table class="table table-bordered" width="100%" id="kabupaten-kota">
						<thead>
							<tr>
								<th class="text-center" width="15%">Provinsi</th>
								<th class="text-center" width="70%">Kabupaten/Kota</th>
								<th class="text-center" width="15%">Total Tenaga Ahli</th>
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
		var ctx = document.getElementById("provDomisiliTAMaps") // Get Canvas Element
		var baseUrl = '<?= BASE_URL; ?>' // Project Root URL
		var themePath = '<?= BASE_THEME; ?>' // Theme Assets Path
		var devMode = false // Dev Mode

		// Comparing Data Provinsi Registrasi Database <-> Maps Geo
		function search(nameKey, myArray) {
			for (var i = 0; i < myArray.length; i++) {
				if (myArray[i].provinsi_personal === nameKey.toUpperCase()) {
					return myArray[i];
				}
			}
		}

		// Do Action on Window Loading Event
		$(window).on("load", function() {

			// Defining DataTables Configuration 
			const tableElementData = [{
				id: "#kabupaten-kota",
				index: "kabkot_domisili_ta",
				fields: ["provinsi_personal", "kabupaten_personal", "jumlah_ta"],
				centerIndex: [2],
				formating: ['text', 'text', 'number'],
				options: {
					scrollX: true,
					scrollY: "640px",
					pageLength: 25,
					scrollCollapse: true,
					order: [
						[0, "asc"]
					],
					fnInitComplete: function() {
						const psinit = new PerfectScrollbar($(this)[0].offsetParent)
					},
					fnDrawCallback: function(oSettings) {
						const pscallback = new PerfectScrollbar($(this)[0].offsetParent)
					}
				}
			}]

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

			$.get(baseUrl + `/${devMode ? "tenagakerja-dev" : "tenagakerja"}/ahli/ajax`, (res) => {
				res = $.parseJSON(res)
				if (res.status == 200) {
					$(".loading-skeleton").removeClass("loading-skeleton")
					const resData = res.data
					const resDateRecord = new Date(res.dateRecord)

					const ElementLastUpdate = $("#ajax-last-update").html(" Data per Tanggal : " + resDateRecord.toLocaleString("ID"))
					const ElementJumlahTKK = $("#ajax-jumlah-tkk").html((resData.jumlah_tkk.jumlah_tkk.toLocaleString()))
					const ElementJumlahTA = $("#ajax-jumlah-ta").html((resData.jumlah_ta.jumlah_ta.toLocaleString()))
					const ElementJumlahTAAsing = $("#ajax-jumlah-ta-asing").html((resData.jumlah_ta_asing.jumlah_ta_asing.toLocaleString()))

					// Provinsi Registrasi Database Array
					const dataProvRegistrasi = resData.provinsi_domisili_ta

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
										value: (search(provinsi.properties.provinsi, dataProvRegistrasi) ? search(provinsi.properties.provinsi, dataProvRegistrasi).jumlah_ta : 0)
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
					 * @desc Download Handler
					 * @plugin SheetJS
					 * @dataSource /bujk/sbutransisi
					 */

					const btnDownloads = $('.download-btn')

					const tableHeaders = {
						jumlah_tkk: {
							jumlah_tkk: "Total TKK"
						},
						jumlah_ta: {
							jumlah_ta: "Total Tenaga Ahli"
						},
						jumlah_ta_asing: {
							jumlah_ta_asing: "Total Tenaga Ahli Asing"
						},
						provinsi_domisili_ta: {
							provinsi_personal: "Nama Provinsi Domisili Tenaga Ahli",
							jumlah_ta: "Total Tenaga Ahli"
						},
						kabkot_domisili_ta: {
							provinsi_personal: "Provinsi Domisili Tenaga Ahli",
							kabupaten_personal: "Kabupaten/Kota Domisili Tenaga Ahli",
							jumlah_ta: "Total Tenaga Ahli"
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