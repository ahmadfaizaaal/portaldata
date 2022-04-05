<?php
defined('BASEPATH') or exit('No direct script access allowed');

class M_GeneralSetting extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
        date_default_timezone_set('Asia/Bangkok');

        $this->_table = "tbl_portal_menu";
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

    public function listSubmenu($idParentmenu = null)
    {
        $this->db->select('*');
        $this->db->from('tbl_portal_menu');
        $this->db->where('id_parentmenu', $idParentmenu);
        $this->db->where('is_active', '1');
        $result = $this->db->get();
        if ($result->num_rows() > 0) {
            return $result->result();
        } else {
            return null;
        }
    }

    public function getListMenu($getChildById = null)
    {
        $this->db->order_by('seq', 'ASC');
        $where    = !is_null($getChildById) ? ['is_active' => 1, 'id_parentmenu' => $getChildById] : ['is_active' => 1, 'has_child' => 1, 'id_parentmenu IS NULL' => null];
        $result   = $this->db->get_where($this->_table, $where);
        $maxLevel = $this->db->select_max('menu_level')->get($this->_table)->row();
        return $result->num_rows() ? ['maxLevel' => $maxLevel ? $maxLevel->menu_level : 0, 'data' => $result->result()] : ['maxLevel' => 0, 'data' => []];
    }

    public function getListSubMenu($parentId)
    {
        $this->db->order_by('seq', 'ASC');
        $result = $this->db->get_where($this->_table, ['id_parentmenu' => $parentId, 'is_active' => '1']);
        return $result->num_rows() ? $result->result() : [];
    }

    public function getMenu($url)
    {
        $result = $this->db->get_where($this->_table, ['url' => $url]);
        return $result->row();
    }

    public function getIdMenu($url)
    {
        $sql = $this->db->get_where($this->_table, ['url' => $url]);
        $result = $sql->row();
        return $result->id_menu;
    }
}
