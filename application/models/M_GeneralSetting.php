<?php
defined('BASEPATH') or exit('No direct script access allowed');

class M_GeneralSetting extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
        date_default_timezone_set('Asia/Bangkok');
    }

    public function listMenu()
    {
        $this->db->select('*');
        $this->db->from('tbl_portal_menu');
        $this->db->where('menu_level', 1);
        $this->db->where('has_child !=', '0');
        $this->db->where('is_active', '1');
        $result = $this->db->get();
        if ($result->num_rows() > 0) {
            return $result->result();
        } else {
            return null;
        }
    }

    public function listSubmenu($id_parentmenu = null)
    {
        $this->db->select('*');
        $this->db->from('tbl_portal_menu');
        $this->db->where('id_parentmenu', $id_parentmenu);
        $this->db->where('is_active', '1');
        $result = $this->db->get();
        if ($result->num_rows() > 0) {
            return $result->result();
        } else {
            return null;
        }
    }
}
