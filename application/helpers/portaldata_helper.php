<?php

$GLOBALS['CI'] = &get_instance();

if (!function_exists('loadPage')) {
    function loadPage($menu_title = null, $page_path = null,  $page_title = '', $data = [], $currentActiveMenu = 1)
    {

        global $CI;
        $CI->load->model('M_GeneralSetting', 'genset');

        $displayListMenu = [];
        $listMenu        = $CI->genset->getListMenu();
        if ($listMenu) {
            foreach ($listMenu['data'] as $key => $item) {
                $displayListMenu[$key]        = $item;
                $displayListMenu[$key]->child = $item->has_child ? $CI->genset->getListMenu($item->id_menu)['data'] : null;
            }
        }

        $data['displayListMenu'] = $displayListMenu;
        $data['currentActiveMenu'] = $currentActiveMenu;
        $data['menu'] = $menu_title;
        $data['pagePath'] = $page_path;
        $data['pageTitle'] = $page_title;

        $CI->load->view('components/header', $data);
        $CI->load->view('components/content-wrapper', $data);
        $CI->load->view('components/footer', $data);
    }
}
