<main>
    <!--? Hero Start -->
    <div class="slider-area2">
        <div class="slider-height3  hero-overly hero-bg6 d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="hero-cap2 pt-20 text-center">
                            <p class="breadcrumbs mb-0"><span class="mr-3"><a href="<?= BASE_URL ?>">Beranda&nbsp;&nbsp;&nbsp;<i class="fa fa-solid fa-angle-right fa-xs"></i></a></span> <span class="default-yellow">Badan Usaha Jasa Konstruksi</span></p>
                            <h2 class="pt-2"><?= $pageTitle; ?></h2>
                            <p class="user-info pt-3 mb-0"><span><i class="fa fa-user"></i>&nbsp;Admin Datin DJBK&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span><i class="fa fa-solid fa-calendar-days"></i>&nbsp;Last Update : 28 Maret 2022</span></p>
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
                                <div class="col-md-3">
                                    <h1 class="text-center font-weight-bold text-pupr-orange"><?= number_format(isset($data) ? ($data['jumlah_subklas'] ? $data['jumlah_subklas']['jumlah_subklas'] : 0) : 0) ?></h1>
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
                                <div class="col-md-3">
                                    <h1 class="text-center font-weight-bold text-pupr-orange"><?= number_format(isset($data) ? ($data['jumlah_bujk'] ? $data['jumlah_bujk']['jumlah_bujk'] : 0) : 0) ?></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-5 mb-5">
				<?php // var_dump($data) ?>
				<div class="col-md-12">
					<h2 class="text-center">Provinsi Registrasi BUJK</h2>
					<canvas id="provRegistrasiMaps"></canvas>
				</div>
            </div>

            <div class="row">
                
            </div>
        </div>
    </section>

    <script>
		var ctx = document.getElementById("provRegistrasiMaps")
		var themePath = '<?= BASE_THEME; ?>'

		function search(nameKey, myArray){
			for (var i=0; i < myArray.length; i++) {
				if (myArray[i].provinsi_reg_bujk === nameKey) {
					return myArray[i];
				}
			}
		}

		const dataProvRegistrasi = <?php echo json_encode($data['provinsi_registrasi_sertifikat']) ?>;

		$.getJSON(themePath + 'landing/assets/json/asiaTopo.json', function(asiaTopo) {

			const countries = ChartGeo.topojson.feature(asiaTopo, asiaTopo.objects.continent_Asia_subunits).features;
			const Indonesia = countries.find((d) => d.properties.geounit === 'Indonesia');
	
			$.getJSON(themePath + 'landing/assets/json/indonesiaTopo.json', function(topoData) {
				var indonesiaTopo = ChartGeo.topojson.feature(topoData, topoData.objects.topoindo).features
	
				const data = {
					labels: indonesiaTopo.map(provinsi => provinsi.properties.provinsi),
					datasets: [{
						label: "Provinsi Registrasi",
						outline: Indonesia,
						data: indonesiaTopo.map(provinsi => ({feature: provinsi, value: (search(provinsi.properties.provinsi, dataProvRegistrasi) ? search(provinsi.properties.provinsi, dataProvRegistrasi).jumlah_subklas : 0)}))
					}]
				}
				console.log(topoData)
				console.log(indonesiaTopo)
				const config = {
					type: "choropleth",
					data,
					options: {
						onClick: (e) => {
							const activePoints = mapsChart.getElementsAtEventForMode(e, 'nearest', {
								intersect: true
							}, false)
							const [{
								index
							}] = activePoints;
							

							// Custom Click Event
							alert("Provinsi di klik " + data.datasets[0].data[index].feature.properties.provinsi + ". dengan Jumlah " + data.datasets[0].data[index].value.toLocaleString())
						},
						scales: {
							xy: {
								projection: "equalEarth"
							}
						},
						plugins: {
							legend: {
								display: false
							}
						}
					}
				}
	
				var mapsChart = new Chart(ctx, config)
			});

		})
		
    </script>
