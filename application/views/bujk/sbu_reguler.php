<main>
    <!--? Hero Start -->
    <div class="slider-area2">
        <div class="slider-height3  hero-overly hero-bg4 d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="hero-cap2 pt-20 text-center">
                            <p class="breadcrumbs mb-0"><span class="mr-3"><a href="<?= BASE_URL ?>">Beranda&nbsp;&nbsp;&nbsp;<i class="fa fa-solid fa-angle-right fa-xs"></i></a></span> <span class="default-yellow">Badan Usaha Jasa Konstruksi</span></p>
                            <h2 class="pt-2"><?= $pageTitle; ?></h2>
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
                                <h2 style="color: #2d2d2d;"><?= $item->title; ?></h2>
                                <ul class="blog-info-link mt-3">
                                    <li><a href="#"><i class="fa fa-user"></i> Admin Datin DJBK</a></li>
                                    <li><a href="#"><i class="fa fa-solid fa-calendar-days"></i> Last Update : 28 Maret 2022</a></li>
                                </ul>
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
                                                        <th scope="col" style="width: 2%;">No.</th>
                                                        <th scope="col" style="width: 13%;">NIP</th>
                                                        <th scope="col" style="width: 25%;">Nama Pegawai</th>
                                                        <th scope="col" style="width: 20%;">Alamat</th>
                                                        <th scope="col" style="width: 5%;">No.Telp</th>

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
                                                        <th scope="col" style="width: 2%;">No.</th>
                                                        <th scope="col" style="width: 13%;">NIP</th>
                                                        <th scope="col" style="width: 25%;">Nama Pegawai</th>
                                                        <th scope="col" style="width: 20%;">Alamat</th>
                                                        <th scope="col" style="width: 5%;">No.Telp</th>

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
                            <div class="d-sm-flex justify-content-between text-center"></div>
                        </div>
                    </div>
                <?php endforeach; ?>
                <!-- KATEGORI B -->
                <!-- <div class="col-lg-12 posts-list" id="catB">
                    <div class="single-post">
                        <div class="blog_details">
                            <h2 style="color: #2d2d2d;">Rekap Data BUJK Pemilik Sertifikat Badan Usaha</h2>
                            <ul class="blog-info-link mt-3">
                                <li><a href="#"><i class="fa fa-user"></i> Admin Datin DJBK</a></li>
                                <li><a href="#"><i class="fa fa-solid fa-calendar-days"></i> Last Update : 28 Maret 2022</a></li>
                            </ul>
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
                                        <tbody id="showDataChart2" class="showDataChart">

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
                            </div>
                        </div>
                    </div>
                    <div class="navigation-top mt-3">
                        <div class="d-sm-flex justify-content-between text-center"></div>
                    </div>
                </div> -->
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
        $(function() {

            showDataChart();

            $('.dataTableChart').DataTable({
                "lengthMenu": [
                    [5, 10, 25, 50, -1],
                    [5, 10, 25, 50, "All"]
                ]
            });

            Highcharts.mapChart('chart-maps', {

            });
        });

        //SHOW DATA CHART
        function showDataChart() {
            var html = '';
            var i;
            for (i = 0; i < 25; i++) {
                html += '<tr>' +
                    '<th scope="col" style="width: 2%;">' + (i + 1) + '</th>' +
                    '<td scope="col" style="width: 13%;">' + '1234567' + '</td>' +
                    '<td scope="col" style="width: 25%;">' + 'Rudy Habibie' + '</td>' +
                    '<td scope="col" style="width: 20%;">' + 'Jakarta Selatan' + '</td>' +
                    '<td scope="col" style="width: 5%;">' + '0851234567' + '</td>' +
                    '</tr>';
            }
            $('.showDataChart').html(html);
            // $('#showDataChart2').html(html);
        }
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