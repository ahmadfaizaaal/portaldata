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
                            <a href="<?= BASE_URL ?>/export-file/sbutransisi" class="genric-btn pupr radius mt-5"><span><i class="fa-solid fa-download"></i></span>&nbsp;Download Excel</a>
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
                                    <h1 class="text-center font-weight-bold text-pupr-orange">19.233</h1>
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
                                    <h1 class="text-center font-weight-bold text-pupr-orange">19.233</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-5 mb-5">
                <div class="col-xl-12 col-lg-12 col-md-12" id="chart-maps"></div>
            </div>

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
                                        <div class="col-md-4">
                                            <div id="bar"></div>
                                            <div class="quote-wrapper">
                                                <div class="quotes button-group-area text-center pt-3">
                                                    <a href="<?= WEBAPI_URL ?>/auth?r=portal-data" class="genric-btn pupr radius"><span><i class="fa-solid fa-download"></i></span>&nbsp;Download Excel</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <table class="table table-striped table-responsive dataTableChart" id="table-<?= $item->id_menu ?>">
                                                <thead>
                                                    <tr>
                                                        <!-- <th scope="col">ID Badan Usaha</th>
                                                        <th scope="col">Nama</th>
                                                        <th scope="col">NPWP</th>
                                                        <th scope="col">Bentuk BU</th>
                                                        <th scope="col">Email</th> -->
                                                        <th scope="col">ID Jenis Usaha</th>
                                                        <th scope="col">Jenis Usaha BU</th>
                                                        <th scope="col">Detail Jenis Usaha</th>
                                                        <th scope="col">Jumlah Sertifikat</th>

                                                    </tr>
                                                </thead>
                                                <tbody id="showDataChart" class="showDataChart">

                                                </tbody>
                                            </table>
                                        </div>
                                    <?php elseif ($item->position == 'R') : ?>
                                        <div class="col-md-8">
                                            <table class="table table-striped table-responsive dataTableChart" id="table-<?= $item->id_menu ?>">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">ID Jenis Usaha</th>
                                                        <th scope="col">Jenis Usaha BU</th>
                                                        <th scope="col">Detail Jenis Usaha</th>
                                                        <th scope="col">Jumlah Sertifikat</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="showDataChart" class="showDataChart">

                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="col-md-4">
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
                                    <!-- <div id="chart-maps"></div> -->
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
                    enabled: false,
                    buttonOptions: {
                        verticalAlign: 'bottom'
                    },
                    enableMouseWheelZoom: false,
                },

                colorAxis: {
                    min: 0
                },
                series: [{
                    data: data,
                    name: 'Random data',
                    states: {
                        hover: {
                            color: '#EAB630'
                        }
                    },
                    dataLabels: {
                        enabled: false,
                        format: '{point.name}'
                    }
                }]
            });

        })();

        $(function() {

            // showDataChart();

            function datatableLanguage() {
                return {
                    "decimal": "",
                    "emptyTable": "Tidak ada data untuk ditampilkan",
                    "info": "Menmapilkan _START_ sampai _END_ dari _TOTAL_ data",
                    "infoEmpty": "Menampilkan data kosong",
                    "infoFiltered": "(filter dari _MAX_ total data)",
                    "infoPostFix": "",
                    "thousands": ".",
                    "lengthMenu": "Menampilkan _MENU_ Record",
                    "loadingRecords": "Memuat...",
                    "processing": "Loading...",
                    "search": "Cari:",
                    "zeroRecords": "Data tidak ditemukan",
                    "paginate": {
                        "first": "Pertama",
                        "last": "Terakhir",
                        "next": "Selanjutnya",
                        "previous": "Sebelumnya"
                    },
                    "aria": {
                        "sortAscending": ": activate to sort column ascending",
                        "sortDescending": ": activate to sort column descending"
                    }
                }
            }

            var base_url = '<?= BASE_URL ?>'

            // const datatables = {
            //     tableIds: ['#table-27', '#table-28', '#table-29', '#table-30', '#table-31', '#table-33'],
            //     tableLabels: [
            //         {
            //             data: 
            //         }
            //     ]
            // }

            $('#table-27').DataTable({
                responsive: true,
                processing: true,
                serverSide: true,
                scrollX: true,
                autoWidth: false,
                lengthMenu: [
                    [10, 15, 20, 25, 50, 75, 100, 500, -1],
                    [10, 15, 20, 25, 50, 75, 100, 500, "Semua"]
                ],
                columns: [{
                        data: "id_jenis"
                    },
                    {
                        data: "jenis_usaha_bu"
                    },
                    {
                        data: "detail_jenis_usaha"
                    },
                    {
                        data: "jml_sertif"
                    },
                ],
                columnDefs: [{
                    width: "20%",
                    targets: [0, 1, 2, 3]
                }, ],
                ajax: {
                    url: `${base_url}/bujk/ajax-sbu-transisi`,
                    dataSrc: (response) => {
                        if (response.status != 200) {
                            alert(response.messages)
                        }

                        return response.data
                    }
                },
                language: datatableLanguage(),
                fnInitComplete: function() {
                    // const ps = new PerfectScrollbar('.dataTables_scrollBody');
                    // initPlugin()
                },
                fnDrawCallback: function(oSettings) {
                    // const ps = new PerfectScrollbar('.dataTables_scrollBody');
                    // initPlugin()
                }
            });

            // Highcharts.mapChart('chart-maps', {

            // });
        });
    </script>