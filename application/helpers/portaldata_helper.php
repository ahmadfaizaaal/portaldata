<?php

$GLOBALS['CI'] = &get_instance();

if (!function_exists('load_page')) {
    function load_page($menu_title = null, $page_path = null,  $page_title = '', $data = [])
    {

        global $CI;
        $CI->load->model('M_GeneralSetting', 'genset');

        $menu = $CI->genset->listMenu();
        $submenuMapping = array();
        $subSubmenuMapping = array();
        for ($i = 0; $i < count($menu); $i++) {
            $submenu = $CI->genset->listSubmenu($menu[$i]->id_menu);
            $temp = array(
                'id_parentmenu' => $menu[$i]->id_menu,
                'child_menu' => $submenu
            );
            // for ($j = 0; $j < count($submenu); $i++) {
            //     $subSubmenu = $CI->genset->listSubmenu($submenu[$j]->id_menu);
            //     $tempSubSubmenu = array(
            //         'id_parentmenu' => $submenu[$j]->id_menu,
            //         'child_menu' => $subSubmenu
            //     );
            //     array_push($subSubmenuMapping, $tempSubSubmenu);
            // }
            array_push($submenuMapping, $temp);
        }

        $data['listMenu'] = $menu;
        $data['listSubmenu'] = $submenuMapping;
        // $data['listSubSubmenu'] = $subSubmenuMapping;
        $data['page_path'] = $page_path;
        $data['menu'] = $menu_title;
        $data['page_title'] = $page_title;

        $CI->load->view('components/header', $data);
        $CI->load->view('components/content-wrapper', $data);
        $CI->load->view('components/footer', $data);
    }
}
