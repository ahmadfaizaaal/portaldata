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
						
						<a href="#" id="download-full" class="btn text-white radius btn-lg bg-pupr-yellow px-5 py-3 mt-5 f-16 download-btn disabled" data-file-name="Rekapitulasi-Sertifikat-Badan-Usaha" data-sheet-name="Rekapitulasi SBU.Rekapitulasi BUJK.Periode Penerbitan Sertifikat.LSBU.Jenis Usaha.KBLI.Kualifikasi Sertifikat.Sub Klasifikasi Sertifikat" data-source="resData" data-order-index="jumlah_subklas.jumlah_bujk.waktu_proses_sertifikat.pelaksana_sertifikat.jenis_usaha_sertifikat.kbli_sertifikat.kualifikasi_sertifikat.sub_klasifikasi_sertifikat" disabled><span><i class="fa fa-solid fa-download"></i></span>&nbsp;&nbsp;Download Full Data SBU Reguler</a>
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

		<div class="row mt-5 mb-5 loading-skeleton" id="waktu-proses-sertifikat-section">
			<?php // var_dump($data) ?>
			<div class="col-md-12 text-center skeleton-div">
				
				<h1 class="section-title"><b>Periode Penerbitan Sertifkat</b></h1>
				<a id="download-waktu-proses-sertifikat" href="#waktu-proses-sertifikat-section" class="btn radius btn-lg bg-pupr-blue download-btn text-white disabled" data-file-name="Periode-Sertifikat-Badan-Usaha" data-sheet-name="Periode Sertifikat Sertifikat" data-source="resData.waktu_proses_sertifikat" data-order-index="waktu_sertifikat_sertifikat" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Periode Penerbitan Sertifikat</a>

				<div style="height: 522px; position: relative" class="chart-container skeleton-div" id="waktu-proses-sertifikat-chart-container">
					<canvas id="waktu-proses-sertifikat-chart" height="1044px"></canvas>
				</div>
			</div>
		</div>

		<div class="row" id="pelaksana-sertifikat-section">
			<div class="col-md-12 text-center my-5 py-3">
				<h1 class="section-title bg-white"><b>Lembaga Sertifikasi Badan Usaha (LSBU)</b></h1>
				<a id="download-pelaksana-sertifikat" href="#pelaksana-sertifikat-section" class="btn radius btn-lg bg-pupr-blue text-white download-btn disabled" data-file-name="Lembaga-Sertifikasi-Badan-Usaha" data-sheet-name="Lembaga Sertifikasi Badan Usaha" data-source="resData.pelaksana_sertifikat" data-order-index="pelaksana_sertifikat" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Lembaga Sertifikasi Badan Usaha</a>
			</div>
			<div class="col-md-12 loading-skeleton">
				<div style="height: 400px; position: relative" class="chart-container skeleton-div" id="pelaksana-sertifikat-chart-container">
					<canvas id="pelaksana-sertifikat-chart" height="400px"></canvas>
				</div>
			</div>
			<div class="col-md-12">
				<table class="table table-bordered" width="100%" id="pelaksana-sertifikat">
					<thead>	
						<tr>
							<th class="text-center">ID LSBU</th>
							<th class="text-center">Pelaksana Sertifikasi</th>
							<th class="text-center">Total</th>
						</tr>
					</thead>
					<tbody>
						<tr><td colspan="3" class="text-center">Loading...</td></tr>
					</tbody>
				</table>
			</div>
		</div>

		<div class="row" id="kualifikasi-sertifikat-section">
			<div class="col-md-12 text-center my-5 py-3">
				<h1 class="section-title"><b>Kualifikasi Sertifikat</b></h1>
				<a id="download-kualifiaksi" href="#kualifikasi-sertifkat-section" class="btn radius btn-lg bg-pupr-blue text-white download-btn disabled" data-file-name="Kualifikasi-Sertifikat-Badan-Usaha" data-sheet-name="Kualifikasi Sertifikat" data-source="resData.kualifikasi_sertifikat" data-order-index="kualifikasi_sertifikat" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Kualifikasi Sertifikat</a>
			</div>
			<div class="col-md-7">
				<table class="table table-bordered" width="100%" id="kualifikasi-sertifikat">
					<thead>
						<tr>
							<th class="text-center" width="10%">ID Kualifikasi</th>
							<th class="text-center" width="50%">Kualifikasi</th>
							<th class="text-center" width="40%">Total</th>
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

		<div class="row" id="jenis-usaha-sertifikat-section">
			<div class="col-md-12 text-center my-5 py-3">
				<h1 class="section-title"><b>Jenis Usaha Sertifikat</b></h1>
				<a id="download-jenis-usaha" href="#jenis-usaha-sertifkat-section" class="btn radius btn-lg bg-pupr-blue text-white download-btn disabled" data-file-name="Jenis-Usaha-Sertifikat-Badan-Usaha" data-sheet-name="Jenis Usaha Sertifikat" data-source="resData.jenis_usaha_sertifikat" data-order-index="jenis_usaha_sertifikat" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Jenis Usaha Sertifikat</a>
			</div>
			<div class="col-md-7">
				<table class="table table-bordered" width="100%" id="jenis-usaha-sertifikat">
					<thead>
						<tr>
							<th class="text-center" colspan="3">Jenis Usaha Sertifikat</th>
						</tr>
						<tr>
							<th class="text-center" width="5%">ID Jenis</th>
							<th class="text-center" width="60%">Jenis Usaha</th>
							<th class="text-center" width="35%">Total</th>
						</tr>
					</thead>
					<tbody>
						<tr><td colspan="3" class="text-center">Loading...</td></tr>
					</tbody>
				</table>
			</div>
			<div class="col-md-5 loading-skeleton">
				<div style="height: 422px; position: relative" class="chart-container skeleton-div" id="jenis-usaha-sertifikat-chart-container">
					<canvas id="jenis-usaha-sertifikat-chart" height="844px"></canvas>
				</div>
			</div>
		</div>

		<div class="row" id="kbli-sertifikat-section">
			<div class="col-md-12 text-center my-5 py-3">
				<h1 class="section-title"><b> Klasifikasi Baku Lapangan Usaha Indonesia (KBLI) Sertifikat</b></h1>
				<a id="download-kbli" href="#kbli-sertifkat-section" class="btn radius btn-lg bg-pupr-blue text-white download-btn disabled" data-file-name="Klasifikasi-Baku-Lapangan-Usaha-Indonesia" data-sheet-name="KBLI Sertifikat" data-source="resData.kbli_sertifikat" data-order-index="kbli_sertifikat" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data KBLI Sertifikat</a>
			</div>
			<div class="col-md-12">
				<table class="table table-bordered" width="100%" id="kbli-sertifikat">
					<thead>
						<tr>
							<th class="text-center" width="50%">Klasifikasi KBLI</th>
							<th class="text-center" width="50%">Total</th>
						</tr>
					</thead>
					<tbody>
						<tr><td colspan="2" class="text-center">Loading...</td></tr>
					</tbody>
				</table>
			</div>
		</div>
		
		<div class="row" id="subklasifikasi-sertifikat-section">
			<div class="col-md-12 text-center my-5 py-3">
				<h1 class="section-title"><b>Sub Klasifikasi Sertifikat</b></h1>
				<a id="download-subklasifikasi" href="#subklasifikasi-sertifkat-section" class="btn radius btn-lg bg-pupr-blue text-white download-btn disabled" data-file-name="Sub-Klasifikasi-Sertifikat-Badan-Usaha" data-sheet-name="Sub Klasifikasi Sertifikat" data-source="resData.sub_klasifikasi_sertifikat" data-order-index="sub_klasifikasi_sertifikat" disabled><span><i class="fa fa-solid fa-download"></i></span>&emsp;Download Data Sub Klasifikasi Sertifikat</a>
			</div>
			<div class="col-md-12">
				<table class="table table-bordered" width="100%" id="subklasifikasi-sertifikat">
					<thead>
						<tr>
							<th class="text-center" width="15%">Kode Sub Klasifikasi</th>
							<th class="text-center" width="70%">Sub Klasifikasi</th>
							<th class="text-center" width="15%">Total</th>
						</tr>
					</thead>
					<tbody>
						<tr><td colspan="3" class="text-center">Loading...</td></tr>
					</tbody>
				</table>
			</div>
		</div>

	</div>
</section>

<script src="<?= BASE_THEME ?>landing/assets/js/vendor/dataTables.rowsGroup.js"></script>
<script>
	var ctx       = document.getElementById("provRegistrasiMaps") // Get Canvas Element
	var baseUrl   = '<?= BASE_URL; ?>' // Project Root URL
	var themePath = '<?= BASE_THEME; ?>' // Theme Assets Path
	var devMode   = false // Dev Mode

	// Do Action on Window Loading Event
	$(window).on("load", function() {

		// Defining DataTables Configuration 
		const tableElementData = [{
			id: "#pelaksana-sertifikat",
			index: "pelaksana_sertifikat",
			fields: ["id_lsbu", "pelaksana_sertifikasi", "jumlah_subklas"],
			centerIndex: [0, 2],
			formating: ['text', 'text', 'number'],
			options: {
				scrollX: true,
				order: [[2, "desc"]],
			}
		}, {
			id: "#kualifikasi-sertifikat",
			index: "kualifikasi_sertifikat",
			fields: ["id_kualifikasi", "kualifikasi", "jumlah_subklas"],
			centerIndex: [0, 1, 2],
			formating: ['text', 'text', 'number'],
			options: {
				scrollX: true,
				rowsGroup: [0],
				paginate: false,
				ordering: false
			}
		}, {
			id: "#jenis-usaha-sertifikat",
			index: "jenis_usaha_sertifikat",
			fields: ["id_jenis_usaha", "jenis_usaha", "jumlah_subklas"],
			centerIndex: [0, 1, 2],
			formating: ['text', 'text', 'number'],
			options: {
				scrollX: true,
				rowsGroup: [0],
				paginate: false,
				ordering: false
			}
		}, {
			id: "#kbli-sertifikat",
			index: "kbli_sertifikat",
			fields: ["kbli", "jumlah_subklas"],
			centerIndex: [0, 1],
			formating: ['text', 'number'],
			options: {
				scrollX: true,
				scrollY: "640px",
				order: [[0, "asc"]],
				pageLength: 25,
				scrollCollapse: true,
				fnInitComplete: function () {
					const psinit = new PerfectScrollbar($(this)[0].offsetParent)
				},
				fnDrawCallback: function (oSettings) {
					const pscallback = new PerfectScrollbar($(this)[0].offsetParent)
				}
			}
		}, {
			id: "#subklasifikasi-sertifikat",
			index: "sub_klasifikasi_sertifikat",
			fields: ["kode_subklasifikasi", "subklasifikasi", "jumlah_subklas"],
			centerIndex: [0, 2],
			formating: ['text', 'text', 'number'],
			options: {
				scrollX: true,
				scrollY: "640px",
				order: [[1, "asc"]],
				pageLength: 25,
				scrollCollapse: true,
				fnInitComplete: function () {
					const psinit = new PerfectScrollbar($(this)[0].offsetParent)
				},
				fnDrawCallback: function (oSettings) {
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

		$.get(baseUrl + `/${devMode ? "bujk-dev" : "bujk"}/sbureguler/ajax`, (res) => { res = $.parseJSON(res)
			if (res.status == 200) {
				$(".loading-skeleton").removeClass("loading-skeleton")
				const resData = res.data
				const resDateRecord = new Date(res.dateRecord)
				
				const ElementLastUpdate = $("#ajax-last-update").html(" Data per Tanggal : " + resDateRecord.toLocaleString("ID"))
				const ElementJumlahSBU = $("#ajax-jumlah-sbu").html(( resData.jumlah_subklas.jumlah_subklas.toLocaleString() ))
				const ElementJumlahBUJK = $("#ajax-jumlah-bujk").html(( resData.jumlah_bujk.jumlah_bujk.toLocaleString() ))

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
				const indexOrderingKeyKualifikasiSertifikat= ["Besar", "Menengah", "Kecil", "Spesialis"]
				resData.kualifikasi_sertifikat = mapOrder(rawKualifikasiSertifikat, indexOrderingKeyKualifikasiSertifikat, "kualifikasi")

				const rawJenisSertifikat = resData.jenis_usaha_sertifikat
				const indexOrderingKeyJenisSertifikat = ["Pekerjaan Konstruksi", "Pekerjaan Konstruksi Terintegrasi", "Jasa Konsultasi Konstruksi", null]
				resData.jenis_sertifikat = mapOrder(rawJenisSertifikat, indexOrderingKeyJenisSertifikat, "jenis_usaha")
				
				/**
				 * @desc DataTables mapping data
				*/
				tableElementData.map((data) => {
					
					$(`${data.id} tbody`).empty()

					$.each(resData[data.index], (idx, elm) => {
						
						$(`${data.id} tbody`).append(`
							<tr>${
								data.fields.map((field, fIndex) => {
									return `<td class="${
										
										data.centerIndex.includes(fIndex) ? 
										"text-center text-middle bg-white" : 
										"text-middle bg-white"
									
									}">${
										elm[field] != null ? 
											(
												data.formating[fIndex] == "number" ? 
												parseInt(elm[field]).toLocaleString() : 
												elm[field]
											) : 
											"-"
									}</td>`
								})
							}</tr>`)
					})

					$(data.id).DataTable(data.options)
				})

				
				/**
				 * @desc Chart Waktu Proses Sertifikat
				 * @plugin Chart.js 3.8
				 * @dataSource /bujk/sbutransisi [data: waktu_proses_sertifikat]
				*/

				const bulanIndex = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
				resData['waktu_proses_sertifikat'].map((item, index) => {
					const fullDate = item.tahun_proses_sbu + "-" + (("0" + (bulanIndex.indexOf(item.bulan_proses_sbu) + 1)).slice(-2)) + "-01"
					resData['waktu_proses_sertifikat'][index]['fullDate'] = fullDate
				})
				resData['waktu_proses_sertifikat'].sort((a,b) => new Date(a.fullDate).getTime() - new Date(b.fullDate).getTime())

				const dataWaktuProsesSertifikat = {
					labels: resData['waktu_proses_sertifikat'].map(item => ( item.bulan_proses_sbu + " " + item.tahun_proses_sbu )),
					datasets: [{
						type: "line",
						label: 'Total Sertifikat',
						data: resData['waktu_proses_sertifikat'].map(item => ( item.jumlah_subklas )),
						borderColor: "rgb(55,71,116)",
						backgroundColor: "rgba(55,71,116,0.5)",
						pointStyle: 'circle',
						pointRadius: 10,
						pointHoverRadius: 15,
						tension: 0.4
					},{
						type: "bar",
						label: "",
						data: resData['waktu_proses_sertifikat'].map(item => ( item.jumlah_subklas )),
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
								text: 'Periode Sertifikat Berdasarkan Bulan'
							}
						}
					}
				}

				const waktuProsesSertifikatChart = new Chart(
					document.getElementById("waktu-proses-sertifikat-chart"),
					configWaktuProsesSertifikat
				)
				
				/**
				 * @desc Chart Pelaksana Sertifikat
				 * @plugin Chart.js 3.8
				 * @dataSource /bujk/sbutransisi [data: pelaksana_sertifikat]
				*/

				const sortedDataPelaksanaSertifikat = sort('jumlah_subklas', resData['pelaksana_sertifikat'])
				const labelsPelaksanaSertifikat = []
				const dataValuePelaksanaSertifikat = []

				sortedDataPelaksanaSertifikat.map((item, index) => {
					if (index < 15) {
						labelsPelaksanaSertifikat.push(item.pelaksana_sertifikasi)
						dataValuePelaksanaSertifikat.push(parseInt(item.jumlah_subklas))
					}
				})

				const dataPelaksanaSertifikat = {
					labels: labelsPelaksanaSertifikat,
					datasets: [{
						axis: 'y',
						label: 'Total Sertifikat',
						data: dataValuePelaksanaSertifikat,
						fill: true,
						backgroundColor: "rgb(55,71,116)",
						borderWidth: 1
					}]
				}

				const configPelaksanaSertifikat = {
					type: 'bar',
					data: dataPelaksanaSertifikat,
					options: {
						indexAxis: 'y',
						maintainAspectRatio: false,
						plugins: {
							title: {
								display: true,
								text: 'Lembaga Sertifikasi Badan Usaha Teratas'
							}
						}
					}
				}

				const pelaksanaSertifikatChart = new Chart(
					document.getElementById("pelaksana-sertifikat-chart"),
					configPelaksanaSertifikat
				)

				/**
				 * @desc Chart Kualifikasi Sertifikat
				 * @plugin Chart.js 3.8
				 * @dataSource /bujk/sbutransisi [data: kualifikasi_sertifikat]
				*/
				
				// ----- Remove to optimiuze ------
				const sortedDataKualifikasiSertifikat = {}
				resData.kualifikasi_sertifikat.map((item) => {
					sortedDataKualifikasiSertifikat[item.kualifikasi] = parseInt(sortedDataKualifikasiSertifikat[item.kualifikasi] ?? 0) + item.jumlah_subklas
				})
				// --------------------------------

				const labelsKualifikasiSertifikat = Object.keys(sortedDataKualifikasiSertifikat)
				const dataValueKualifikasiSertifikat = Object.values(sortedDataKualifikasiSertifikat)
				
				const dataKualifikasiSertifikat = {
					labels: labelsKualifikasiSertifikat,
					datasets: [{
						label: 'Kualifikasi',
						data: dataValueKualifikasiSertifikat,
						backgroundColor: [
							"rgb(234, 182, 48)",
							"rgb(216, 30, 91)",
							"rgb(55, 71, 116)",
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
				 * @desc Chart Jenis Usaha Sertifikat
				 * @plugin Chart.js 3.8
				 * @dataSource /bujk/sbutransisi [data: jenis_usaha_sertifikat]
				*/

				const sortedDataJenisUsahaSertifikat = {}
				resData.jenis_usaha_sertifikat.map((item) => {
					sortedDataJenisUsahaSertifikat[(item.jenis_usaha != null ? item.jenis_usaha : "-")] = parseInt(sortedDataJenisUsahaSertifikat[(item.jenis_usaha != null ? item.jenis_usaha : "-")] ?? 0) + item.jumlah_subklas
				})

				const labelsJenisUsahaSertifikat = Object.keys(sortedDataJenisUsahaSertifikat)
				const dataValueJenisUsahaSertifikat = Object.values(sortedDataJenisUsahaSertifikat)
				
				const dataJenisUsahaSertifikat = {
					labels: labelsJenisUsahaSertifikat,
					datasets: [{
						label: 'Jenis',
						data: dataValueJenisUsahaSertifikat,
						backgroundColor: "rgb(55, 71, 116)"
					}]
				};

				const configJenisUsahaSertifikat = {
					type: 'radar',
					data: dataJenisUsahaSertifikat,
					options: {
						scale: {
							ticks: {
								beginAtZero:true
							}
						}
					}
				};

				const jenisUsahaSertifikatChart = new Chart(
					document.getElementById("jenis-usaha-sertifikat-chart"),
					configJenisUsahaSertifikat
				)
				
				/**
				 * @desc Download Handler
				 * @plugin SheetJS
				 * @dataSource /bujk/sbutransisi
				*/

				const btnDownloads = $('.download-btn')

				const tableHeaders = {
					jenis_usaha_sertifikat: {
						id_jenis_usaha: "ID Jenis Usaha",
						jenis_usaha: "Jenis Usaha",
						jumlah_subklas: "Total Sertifikat"
					},
					jumlah_subklas: { jumlah_subklas: "Total SBU" }, 
					jumlah_bujk: { jumlah_bujk: "Total BUJK" },
					kbli_sertifikat: {
						kbli: "Nama Asosiasi",
						jumlah_subklas: "Total Sertifikat"
					},
					kualifikasi_sertifikat: {
						id_kualifikasi: "ID Kualifikasi",
						kualifikasi: "Kualifikasi",
						jumlah_subklas: "Total Sertifikat"
					},
					pelaksana_sertifikat: {
						id_lsbu: "ID LSBU",
						pelaksana_sertifikasi: "Pelaksana Sertifikasi",
						jumlah_subklas: "Total Sertifikat",
					},
					sub_klasifikasi_sertifikat: {
						kode_subklasifikasi: "Kode Sub Klasifikasi",
						subklasifikasi: "Sub Klasifikasi",
						jumlah_subklas: "Total Sertifikat"
					},
					waktu_proses_sertifikat: {
						tahun_proses_sbu: "Tahun Penerbitan SBU",
						bulan_proses_sbu: "Bulan Penerbitan SBU",
						jumlah_subklas: "Total Sertifikat"
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
								tempRow.push({text: (rawDataItems[resDataIndex][headerItem] ?? "(lain-lain)") })
							}))
							row.push(tempRow)
						})

						const sheetHeader = Object.keys(tableHeaders[dataSourceDimension]).map(headerItem => ({text: tableHeaders[dataSourceDimension][headerItem]}) )
						const sheetData = {
							sheetName: sheetName[0],
							data: [sheetHeader, ...row]
						}

						excelDataSet.push(sheetData)
						
					} else {
						if(dataSource[0] != "resData") return
						sheet.map((sheetItem, sheetIndex) => {
							const sheetHeader = Object.keys(tableHeaders[sheetItem]).map(headerItem => ({text: tableHeaders[sheetItem][headerItem]}) )
							const row = []

							if (Array.isArray(resData[sheetItem])) {
								resData[sheetItem].map((resDataItem, resDataIndex) => {
									const tempRow = []
									Object.keys(tableHeaders[sheetItem]).map((headerItem => {
										tempRow.push({text: (resData[sheetItem][resDataIndex][headerItem] ?? "(lain-lain)") })
									}))
									row.push(tempRow)
								})
							} else {
								Object.keys(tableHeaders[sheetItem]).map((headerItem => {
									row.push([{text: (resData[sheetItem][headerItem] ?? "(lain-lain)")}])
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
					$(btnItem).on("click", function (e) {
						e.preventDefault()
						e.stopImmediatePropagation()
						Jhxlsx.export(excelDataSet, {fileName: `${fileName}`, header: true})
					})

					$(btnItem).removeAttr("disabled").removeClass("disabled")
				})

			} else {
				// error handling here
			}
		})
	})

	
</script>
