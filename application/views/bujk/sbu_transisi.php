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
                <!-- KATEGORI A -->
                <?php foreach ($displayListSubmenu as $index => $item) : ?>
                    <div class="col-lg-12 posts-list" id="<?= $item->url; ?>">
                        <div class="single-post">
                            <div class="blog_details">
                                <h2 style="color: #2d2d2d;"><?= $item->title_desc; ?></h2>
                                <!-- <ul class="blog-info-link mt-3">
                                    <li><a href="#"><i class="fa fa-user"></i> Admin Datin DJBK</a></li>
                                    <li><a href="#"><i class="fa fa-solid fa-calendar-days"></i> Last Update : 28 Maret 2022</a></li>
                                </ul> -->
                                <div class="row mt-5">
                                    <?php if ($item->position == 'L') : ?>
                                        <div class="col-md-6">
                                            <div id="bar"></div>
                                            <div class="quote-wrapper">
                                                <div class="quotes button-group-area text-center pt-3">
                                                    <a href="<?= WEBAPI_URL ?>/auth?r=portal-data" class="genric-btn pupr radius"><span><i class="fa-solid fa-download"></i></span>&nbsp;Download Excel</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <table class="table table-striped table-responsive dataTableChart" id="dataTableChart">
                                                <thead>
                                                    <tr>
                                                        <!-- <th scope="col" style="width: 2%;">No.</th>
                                                        <th scope="col" style="width: 13%;">NIP</th>
                                                        <th scope="col" style="width: 25%;">Nama Pegawai</th>
                                                        <th scope="col" style="width: 20%;">Alamat</th>
                                                        <th scope="col" style="width: 5%;">No.Telp</th> -->
                                                        <th scope="col"></th>
                                                        <th scope="col">Nama</th>
                                                        <th scope="col">NPWP</th>
                                                        <th scope="col">Bentuk BU</th>
                                                        <th scope="col">Email</th>

                                                    </tr>
                                                </thead>
                                                <tbody id="showDataChart" class="showDataChart">

                                                </tbody>
                                            </table>
                                        </div>
                                    <?php elseif ($item->position == 'R') : ?>
                                        <div class="col-md-6">
                                            <table class="table table-striped table-responsive dataTableChart" id="dataTableChart">
                                                <thead>
                                                    <tr>
                                                        <!-- <th scope="col" style="width: 2%;">No.</th>
                                                        <th scope="col" style="width: 13%;">NIP</th>
                                                        <th scope="col" style="width: 25%;">Nama Pegawai</th>
                                                        <th scope="col" style="width: 20%;">Alamat</th>
                                                        <th scope="col" style="width: 5%;">No.Telp</th> -->
														<th scope="col"></th>
                                                        <th scope="col">Nama</th>
                                                        <th scope="col">NPWP</th>
                                                        <th scope="col">Bentuk BU</th>
                                                        <th scope="col">Email</th>

                                                    </tr>
                                                </thead>
                                                <tbody id="showDataChart" class="showDataChart">

                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="col-md-6">
                                            <div id="line"></div>
                                            <div class="quote-wrapper">
                                                <div class="quotes button-group-area text-center pt-3">
                                                    <a href="<?= WEBAPI_URL ?>/auth?r=portal-data" class="genric-btn pupr radius"><span><i class="fa-solid fa-download"></i></span>&nbsp;Download Excel</a>
                                                </div>
                                            </div>
                                        </div>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                        <div class="navigation-top mt-3">
                            <div class="d-sm-flex justify-content-between text-center mb-5"></div>
                        </div>
                    </div>
                <?php endforeach; ?>
                <!-- KATEGORI B -->
                <div class="col-lg-12 posts-list" id="catB">
                    <div class="single-post">
                        <div class="blog_details">
                            <h2 style="color: #2d2d2d;">Maps Contoh</h2>
                            <div class="row mt-5">
                                <div class="col-md-6">
                                    <table class="table table-striped table-responsive dataTableChart" id="dataTableChart2">
                                        <thead>
                                            <tr>
                                                <th scope="col" style="width: 2%;">No.</th>
                                                <th scope="col" style="width: 13%;">NIP</th>
                                                <th scope="col" style="width: 25%;">Nama Pegawai</th>
                                                <th scope="col" style="width: 20%;">Alamat</th>
                                                <th scope="col" style="width: 5%;">No.Telp</th>

                                            </tr>
                                        </thead>
                                        <tbody id="showDataChart3" class="showDataChart">

                                        </tbody>
                                    </table>
                                </div>
                                <div class="col-md-6">
                                    <div id="chart-maps"></div>
                                    <div class="quote-wrapper">
                                        <div class="quotes button-group-area text-center pt-3">
                                            <a href="<?= WEBAPI_URL ?>/auth?r=portal-data" class="genric-btn pupr radius"><span><i class="fa-solid fa-download"></i></span>&nbsp;Download Excel</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="navigation-top mt-3">
                        <div class="d-sm-flex justify-content-between text-center mb-5"></div>
                    </div>
                </div>
                <!-- KATEGORI C -->
                <!-- <div class="col-lg-12 posts-list" id="catC">
                    <div class="single-post">
                        <div class="blog_details">
                            <h2 style="color: #2d2d2d;">Maps Contoh</h2>
                            <ul class="blog-info-link mt-3">
                                <li><a href="#"><i class="fa fa-user"></i> Admin Datin DJBK</a></li>
                                <li><a href="#"><i class="fa fa-solid fa-calendar-days"></i> Last Update : 28 Maret 2022</a></li>
                            </ul>
                            <div class="row mt-5">
                                <div class="col-md-12">
                                    <div id="chart-maps"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="navigation-top mt-3">
                        <div class="d-sm-flex justify-content-between text-center"></div>
                    </div>
                </div> -->
            </div>
        </div>
    </section>

    <script>
        (async () => {

            const topology = await fetch(
                'https://code.highcharts.com/mapdata/countries/id/id-all.topo.json'
            ).then(response => response.json());

            // Prepare demo data. The data is joined to map using value of 'hc-key'
            // property by default. See API docs for 'joinBy' for more info on linking
            // data and map.
            const data = [
                ['id-3700', 10],
                ['id-ac', 11],
                ['id-jt', 12],
                ['id-be', 13],
                ['id-bt', 14],
                ['id-kb', 15],
                ['id-bb', 16],
                ['id-ba', 17],
                ['id-ji', 18],
                ['id-ks', 19],
                ['id-nt', 20],
                ['id-se', 21],
                ['id-kr', 22],
                ['id-ib', 23],
                ['id-su', 0],
                ['id-ri', 25],
                ['id-sw', 26],
                ['id-ku', 27],
                ['id-la', 28],
                ['id-sb', 29],
                ['id-ma', 30],
                ['id-nb', 31],
                ['id-sg', 32],
                ['id-st', 33],
                ['id-pa', 34],
                ['id-jr', 35],
                ['id-ki', 36],
                ['id-1024', 37],
                ['id-jk', 38],
                ['id-go', 39],
                ['id-yo', 40],
                ['id-sl', 41],
                ['id-sr', 42],
                ['id-ja', 43],
                ['id-kt', 44]
            ];

            // Create the chart
            Highcharts.mapChart('chart-maps', {
                chart: {
                    map: topology
                },

                title: {
                    text: 'Peta Indonesia'
                },

                // subtitle: {
                //     text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/id/id-all.topo.json">Indonesia</a>'
                // },

                mapNavigation: {
                    enabled: true,
                    buttonOptions: {
                        verticalAlign: 'bottom'
                    }
                },

                colorAxis: {
                    min: 0
                },

                series: [{
                    data: data,
                    name: 'Random data',
                    states: {
                        hover: {
                            color: '#BADA55'
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }]
            });

        })();

        $(function() {

            // showDataChart();

			function datatableLanguage() {
				return {
					"decimal":        "",
					"emptyTable":     "Tidak ada data untuk ditampilkan",
					"info":           "Menmapilkan _START_ sampai _END_ dari _TOTAL_ data",
					"infoEmpty":      "Menampilkan data kosong",
					"infoFiltered":   "(filter dari _MAX_ total data)",
					"infoPostFix":    "",
					"thousands":      ".",
					"lengthMenu":     "Menampilkan _MENU_ Record",
					"loadingRecords": "Memuat...",
					"processing":     "Loading...",
					"search":         "Cari:",
					"zeroRecords":    "Data tidak ditemukan",
					"paginate": {
						"first":      "Pertama",
						"last":       "Terakhir",
						"next":       "Selanjutnya",
						"previous":   "Sebelumnya"
					},
					"aria": {
						"sortAscending":  ": activate to sort column ascending",
						"sortDescending": ": activate to sort column descending"
					}
				}
			}

			var base_url = '<?= BASE_URL ?>' 

            $('.dataTableChart').DataTable({
				processing: true,
				serverSide: true,
				scrollX: true,
				autoWidth: false,
				lengthMenu: [[10, 15, 20, 25, 50, 75, 100, 500, -1], [10, 15, 20, 25, 50, 75, 100, 500, "Semua"]],
				columns: [
					{ data: "id_bu" },
					{ data: "nama" },
					{ data: "npwp" },
					{ data: "bentuk_bu" },
					{ data: "email" },
				],
				columnDefs: [
					{ width: "20%", targets: [0, 1, 2, 3, 4] },
				],
				ajax: {
					url: `${base_url}/bujk/ajax-sbu-transisi`,
					dataSrc: ( response ) => {
						if( response.status != 200 ) {
							alert(response.messages)
						}

						return response.data
					}
				},
				language: datatableLanguage(),
				fnInitComplete: function () {
					// const ps = new PerfectScrollbar('.dataTables_scrollBody');
					// initPlugin()
					
					var currentTable = this
					// Apply the search
					currentTable.api().columns().every( function () {
						var column = this;
		
						$( 'input, select', this.header() ).on( 'keyup clear change', function (e) {
							console.log(this.value)

							if(e.keyCode === 10 && e.keyCode === 13) {
								return;
							} else {
								if (column.visible()) {
									console.log('here')
									currentTable.api().column( column.index() ).search( this.value ).draw();
								}
							}
						} );
					} );
				},
				fnDrawCallback: function (oSettings) {
					// const ps = new PerfectScrollbar('.dataTables_scrollBody');
					// initPlugin()
				}
			});

            // Highcharts.mapChart('chart-maps', {

            // });
        });

        //SHOW DATA CHART
        // function showDataChart() {
        //     var html = '';
        //     var i;
        //     for (i = 0; i < 25; i++) {
        //         html += '<tr>' +
        //             '<th scope="col" style="width: 2%;">' + (i + 1) + '</th>' +
        //             '<td scope="col" style="width: 13%;">' + '1234567' + '</td>' +
        //             '<td scope="col" style="width: 25%;">' + 'Rudy Habibie' + '</td>' +
        //             '<td scope="col" style="width: 20%;">' + 'Jakarta Selatan' + '</td>' +
        //             '<td scope="col" style="width: 5%;">' + '0851234567' + '</td>' +
        //             '</tr>';
        //     }
        //     $('.showDataChart').html(html);
        //     // $('#showDataChart2').html(html);
        // }
        // $.ajax({
        //     type: 'ajax',
        //     method: 'post',
        //     url: '<?= BASE_URL . 'staff/showDataPenghulu'; ?>',
        //     async: false,
        //     dataType: 'json',
        //     success: function(data) {
        //         var html = '';
        //         var i;
        //         for (i = 0; i < data.length; i++) {
        //             html += '<tr>' +
        //                 '<th scope="col" style="width: 2%;">' + (i + 1) + '</th>' +
        //                 '<td scope="col" style="width: 13%;">' + data[i].NIP + '</td>' +
        //                 '<td scope="col" style="width: 25%;">' + data[i].NAME + '</td>' +
        //                 '<td scope="col" style="width: 20%;">' + data[i].ADDRESS + '</td>' +
        //                 '<td scope="col" style="width: 5%;">' + data[i].PHONE + '</td>' +
        //                 '<td scope="col" style="width: 40%">' +
        //                 '<a href="javascript:;" class="btn round btn-sm btn-icon btn-info viewPenghulu" style="margin-left:5px;" data-toggle="tooltip" data-placement="bottom" title="LIhat Detail" data="' + data[i].OFFICER_ID + '"><i class="ft-eye"></i></a>' +
        //                 '<a href="javascript:;" class="btn round btn-sm btn-icon btn-warning editPenghulu" style="margin-left:5px;" data-toggle="tooltip" data-placement="bottom" title="Edit" data="' + data[i].OFFICER_ID + '"><i class="ft-edit-2"></i></a>' +
        //                 '<a href="javascript:;" class="btn round btn-sm btn-icon btn-danger deletePenghulu" style="margin-left:5px;" data-toggle="tooltip" data-placement="bottom" title="Hapus" data="' + data[i].OFFICER_ID + '"><i class="ft-x"></i></a>' +
        //                 '</td>' +
        //                 '</tr>';
        //         }
        //         $('#showDataPenghulu').html(html);
        //         $('[data-toggle="tooltip"]').tooltip();
        //     },
        //     error: function() {
        //         swal("Error!", "Could not get Data from Database!", "error");
        //     }
        // });
    </script>
