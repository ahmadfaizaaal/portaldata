<section class="wantToWork-area">
    <div class="container">
        <div class="wants-wrapper w-padding2">
            <div class="row justify-content-between">
                <div class="col-xl-8 col-lg-8 col-md-7">
                    <div class="wantToWork-caption wantToWork-caption2">
                        <img src="<?= BASE_THEME; ?>img/portal-logo-v4.png" alt="" width="30%" class="mb-30">
                        <!-- <p>Users and submit their own items. You can create different packages and by connecting with your
                                    PayPal or Stripe account charge users for registration to your directory portal.</p> -->
                    </div>
                    <div>
                        <ul>
                            <li><span class="fa fa-solid fa-location-dot">&nbsp;</span><span class="font-weight-bold">Alamat :</span>
                                <p class="ml-4">Jl. Pattimura No. 20, Kebayoran Baru, Jakarta Selatan, DKI Jakarta</p>
                            </li>
                            <li><span class="fa fa-reguler fa-globe">&nbsp;</span><span class="font-weight-bold">Website :</span>
                                <p class="ml-4">binakonstruksi.pu.go.id</p>
                            </li>
                            <li><span class="fa fa-solid fa-at">&nbsp;</span><span class="font-weight-bold">Email :</span>
                                <p class="ml-4">portaldjbk@pu.go.id</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-5">
                    <div class="footer-social f-right sm-left">
                        <a href="https://twitter.com/pupr_binakons" target="_blank"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.facebook.com/puprbinakonstruksi" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <!-- <a href="#"><i class="fab fa-pinterest-p"></i></a> -->
                        <a href="https://www.instagram.com/pupr_binakonstruksi/" target="_blank"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</main>
<footer>
    <div class="footer-wrapper pt-0">
        <!-- footer-bottom -->
        <div class="footer-bottom-area">
            <div class="container">
                <div class="footer-border">
                    <div class="row d-flex justify-content-between align-items-center">
                        <div class="col-xl-12 col-lg-12 ">
                            <div class="footer-copy-right">
                                <p class="font-weight-bold text-center">
                                    <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                                    &copy;&nbsp;Direktorat Jenderal Bina Konstruksi | Kementerian Pekerjaan Umum dan Perumahan Rakyat &nbsp;-&nbsp;
                                    <script>
                                        document.write(new Date().getFullYear());
                                    </script>
                                    <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>


<!-- <div id="shortcut-menu">
    <a title="Kategori" href="javascript:void(0)" onclick="shortcutToggle()"> <i class="fa fa-solid fa-list"></i></a>
</div>
<div id="shortcut-container" class="shortcut-container">
    <p class="font-weight-bold text-right mb-2 pt-3">Data berdasarkan&nbsp;:</p>
    <ul class="sub-shortcut text-right">
        <?php
        // $subMenu = $this->genset->getListSubMenu($currentActiveMenu);
        // var_dump($subMenu);
        // if ($subMenu) {
           //  foreach ($subMenu as $key => $item) {
        ?>
                <li class="pt-3 pb-1 scroll-to-section"><a href="#<?php // echo $item->url ?>"><?php // echo $item->title ?><i class="fa-solid fa-caret-left ml-3"></i></a></li>
        <?php
            // }
        // }
        ?>
        <?php //} 
        ?>
    </ul>
</div> -->
<!-- Scroll Up -->
<div id="back-top">
    <a title="Kembali ke atas" href="#"> <i class="fa fa-solid fa-angle-up"></i></a>
</div>

<script>
    // $(function() {
    //     var title = '<?php // echo $pageTitle ?>';
    //     if (title === 'beranda') {
    //         document.getElementById("shortcut-menu").style.display = "none";
    //     }
    //     document.getElementById("shortcut-container").style.display = "none";
    // });

    $('.scroll-to-section').on('click', 'a', function(e) {
        showSection($(this).attr('href'), true);
    });

    function showSection(section, isAnimate) {
        var
            direction = section.replace(/#/, ''),
            reqSection = document.getElementById(direction),
            reqSectionPos = parseInt(reqSection.offsetTop) - 140;

        if (isAnimate) {
            $('body, html').animate({
                    scrollTop: reqSectionPos
                },
                800);
            return false;
        } else {
            $('body, html').scrollTop(reqSectionPos);
        }

    };

    function shortcutToggle() {
        var elem = document.getElementById("shortcut-container");
        if (elem.style.display === "none") {
            elem.style.animation = "fadeInOpacity 1s ease-in";
            elem.style.display = "block";
        } else {
            elem.style.animation = "fadeOutOpacity 1s ease-out";
            setTimeout(function() {
                elem.style.display = "none";
            }, 800);
        }
    }
</script>

</body>

</html>
