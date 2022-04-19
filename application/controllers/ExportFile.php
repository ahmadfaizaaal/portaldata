<?php
defined('BASEPATH') or exit('No direct script access allowed');

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class ExportFile extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        date_default_timezone_set('Asia/Bangkok');
        $this->load->model('M_Export', 'export');

        $this->_spreadsheet = new Spreadsheet();
        $this->_alphabet = range('A', 'Z');
        $this->_style_col = [
            'font' => ['bold' => true],
            'alignment' => [
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER
            ],
            'borders' => [
                'top' => ['borderStyle'  => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN],
                'right' => ['borderStyle'  => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN],
                'bottom' => ['borderStyle'  => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN],
                'left' => ['borderStyle'  => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN]
            ]
        ];

        // Buat sebuah variabel untuk menampung pengaturan style dari isi tabel
        $this->_style_row = [
            'alignment' => [
                'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER
            ],
            'borders' => [
                'allBorders' => ['borderStyle'  => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN]
            ]
        ];
    }

    private function _setWorksheetLayout($sheet, $param = [])
    {
        $columnSize = count($param['columnTitle']);

        $sheet->setCellValue('A1', $param['worksheetTitle']);
        $sheet->mergeCells('A1:' . $this->_alphabet[$columnSize - 1] . '1');
        $sheet->getStyle('A1')->getFont()->setBold(true);

        //SET COLUMN HEADER STYLE
        foreach ($param['columnTitle'] as $index => $column) {
            $sheet->setCellValue($this->_alphabet[$index] . '3', $column);
            $sheet->getStyle($this->_alphabet[$index] . '3')->applyFromArray($this->_style_col);
        }

        //SET COLUMN WIDTH
        foreach ($param['columnWidth'] as $index => $columnWidth) {
            $sheet->getColumnDimension($this->_alphabet[$index])->setWidth($columnWidth);
        }

        // SET ROW HEIGHT TO AUTO
        $sheet->getDefaultRowDimension()->setRowHeight(-1);

        // SET PAGE LAYOUT ORIENTATION
        $sheet->getPageSetup()->setOrientation(\PhpOffice\PhpSpreadsheet\Worksheet\PageSetup::ORIENTATION_LANDSCAPE);
    }

    private function _generateExcel($spreadsheet, $fileName)
    {
        // Proses file excel
        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header('Content-Disposition: attachment; filename="' . $fileName . '"'); // Set nama file excel nya
        header('Cache-Control: max-age=0');

        $writer = new Xlsx($spreadsheet);
        $writer->save('php://output');
    }

    public function sbuTransisi()
    {
        echo "Test";
        die;
        //ASOSIASI
        $this->_spreadsheet->setActiveSheetIndex(0);
        $sheet = $this->_spreadsheet->getActiveSheet();
        $sheet->setTitle('Asosiasi');
        $param = [
            'worksheetTitle' => 'Data SBU berdasarkan Asosiasi saat Permohonan',
            'columnTitle' => ['Nomor', 'Asosiasi BUJK', 'Jumlah Sertifikat'],
            'columnWidth' => [10, 20, 20]
        ];
        $this->_setWorksheetLayout($sheet, $param);
        $asosiasi = $this->export->getSBUbyAsosiasi();
        $no = 1;
        $numrow = 4;
        foreach ($asosiasi as $data) {
            $sheet->setCellValue('A' . $numrow, $no);
            $sheet->getStyle('A' . $numrow)->applyFromArray([
                'alignment' => [
                    'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER
                ]
            ]);
            $sheet->setCellValue('B' . $numrow, $data->asosiasi_bujk);
            $sheet->setCellValue('C' . $numrow, $data->jml_sertif);

            $sheet->getStyle('A' . $numrow . ':C' . $numrow)->applyFromArray($this->_style_row);

            $no++;
            $numrow++;
        }

        $this->_spreadsheet->createSheet();

        //JENIS
        $this->_spreadsheet->setActiveSheetIndex(1);
        $sheet = $this->_spreadsheet->getActiveSheet();
        $sheet->setTitle('Jenis');
        $param = [
            'worksheetTitle' => 'Data SBU berdasarkan Jenis',
            'columnTitle' => ['Nomor', 'Jenis Usaha', 'Detail Jenis Usaha', 'Jumlah Sertifikat'],
            'columnWidth' => [10, 20, 30, 20]
        ];
        $this->_setWorksheetLayout($sheet, $param);
        $jenis = $this->export->getSBUbyJenis();
        $no = 1;
        $numrow = 4;
        foreach ($jenis as $data) {
            $sheet->setCellValue('A' . $numrow, $no);
            $sheet->getStyle('A' . $numrow)->applyFromArray([
                'alignment' => [
                    'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER
                ]
            ]);
            $sheet->setCellValue('B' . $numrow, $data->jenis_usaha_bu);
            $sheet->setCellValue('C' . $numrow, $data->detail_jenis_usaha);
            $sheet->setCellValue('D' . $numrow, $data->jml_sertif);

            $sheet->getStyle('A' . $numrow . ':D' . $numrow)->applyFromArray($this->_style_row);

            $no++;
            $numrow++;
        }

        $this->_spreadsheet->createSheet();

        //KLASIFIKASI
        $this->_spreadsheet->setActiveSheetIndex(2);
        $sheet = $this->_spreadsheet->getActiveSheet();
        $sheet->setTitle('Klasifikasi');
        $param = [
            'worksheetTitle' => 'Data SBU berdasarkan Klasifikasi',
            'columnTitle' => ['Nomor', 'ID Klasifikasi KBLI', 'Klasifikasi KBLI', 'Jumlah Sertifikat'],
            'columnWidth' => [10, 30, 30, 20]
        ];
        $this->_setWorksheetLayout($sheet, $param);
        $klasifikasi = $this->export->getSBUbyKlasifikasi();
        $no = 1;
        $numrow = 4;
        foreach ($klasifikasi as $data) {
            $sheet->setCellValue('A' . $numrow, $no);
            $sheet->getStyle('A' . $numrow)->applyFromArray([
                'alignment' => [
                    'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER
                ]
            ]);
            $sheet->setCellValue('B' . $numrow, $data->id_klasifikasi_kbli);
            $sheet->setCellValue('C' . $numrow, $data->klasifikasi_kbli);
            $sheet->setCellValue('D' . $numrow, $data->jml_sertif);

            $sheet->getStyle('A' . $numrow . ':D' . $numrow)->applyFromArray($this->_style_row);

            $no++;
            $numrow++;
        }

        $this->_spreadsheet->createSheet();

        //SUB KLASIFIKASI
        $this->_spreadsheet->setActiveSheetIndex(3);
        $sheet = $this->_spreadsheet->getActiveSheet();
        $sheet->setTitle('Sub Klasifikasi');
        $param = [
            'worksheetTitle' => 'Data SBU berdasarkan Sub Klasifikasi',
            'columnTitle' => ['Nomor', 'ID Sub Klasifikasi KBLI', 'Sub Klasifikasi KBLI', 'Jumlah Sertifikat'],
            'columnWidth' => [10, 40, 40, 20]
        ];
        $this->_setWorksheetLayout($sheet, $param);
        $subKlasifikasi = $this->export->getSBUbySubKlasifikasi();
        $no = 1;
        $numrow = 4;
        foreach ($subKlasifikasi as $data) {
            $sheet->setCellValue('A' . $numrow, $no);
            $sheet->getStyle('A' . $numrow)->applyFromArray([
                'alignment' => [
                    'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER
                ]
            ]);
            $sheet->setCellValue('B' . $numrow, $data->id_sub_klasifikasi_kbli);
            $sheet->setCellValue('C' . $numrow, $data->klasifikasi_sub_kbli);
            $sheet->setCellValue('D' . $numrow, $data->jml_sertif);

            $sheet->getStyle('A' . $numrow . ':D' . $numrow)->applyFromArray($this->_style_row);

            $no++;
            $numrow++;
        }

        $this->_spreadsheet->createSheet();

        //KUALIFIKASI
        $this->_spreadsheet->setActiveSheetIndex(4);
        $sheet = $this->_spreadsheet->getActiveSheet();
        $sheet->setTitle('Kualifikasi');
        $param = [
            'worksheetTitle' => 'Data SBU berdasarkan Kualifikasi',
            'columnTitle' => ['Nomor', 'Kualfikasi KBLI Grup', 'Kualifikasi KBLI', 'Jumlah Sertifikat'],
            'columnWidth' => [10, 35, 35, 20]
        ];
        $this->_setWorksheetLayout($sheet, $param);
        $kualifikasi = $this->export->getSBUbyKualifikasi();
        $no = 1;
        $numrow = 4;
        foreach ($kualifikasi as $data) {
            $sheet->setCellValue('A' . $numrow, $no);
            $sheet->getStyle('A' . $numrow)->applyFromArray([
                'alignment' => [
                    'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER
                ]
            ]);
            $sheet->setCellValue('B' . $numrow, $data->kualifikasi_kbli_grup);
            $sheet->setCellValue('C' . $numrow, $data->kualifikasi_kbli);
            $sheet->setCellValue('D' . $numrow, $data->jml_sertif);

            $sheet->getStyle('A' . $numrow . ':D' . $numrow)->applyFromArray($this->_style_row);

            $no++;
            $numrow++;
        }

        $this->_spreadsheet->createSheet();

        //REKAP
        $this->_spreadsheet->setActiveSheetIndex(5);
        $sheet = $this->_spreadsheet->getActiveSheet();
        $sheet->setTitle('Rekap Data');
        $param = [
            'worksheetTitle' => 'Data Rekap SBU',
            'columnTitle' => ['Nomor', 'Nama Rekap', 'Jumlah Sertifikat'],
            'columnWidth' => [10, 35, 20]
        ];
        $this->_setWorksheetLayout($sheet, $param);
        $rekap = $this->export->getSBUbyRekap();
        $no = 1;
        $numrow = 4;
        foreach ($rekap as $data) {
            $sheet->setCellValue('A' . $numrow, $no);
            $sheet->getStyle('A' . $numrow)->applyFromArray([
                'alignment' => [
                    'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER
                ]
            ]);
            $sheet->setCellValue('B' . $numrow, $data->nama_rekap);
            $sheet->setCellValue('C' . $numrow, $data->jml_sertif);

            $sheet->getStyle('A' . $numrow . ':C' . $numrow)->applyFromArray($this->_style_row);

            $no++;
            $numrow++;
        }

        $this->_spreadsheet->setActiveSheetIndex(0);
        $this->_generateExcel($this->_spreadsheet, 'SBU Masa Transisi.xlsx');
    }

    public function export()
    {
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();

        // Buat sebuah variabel untuk menampung pengaturan style dari header tabel
        $style_col = [
            'font' => ['bold' => true], // Set font nya jadi bold
            'alignment' => [
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER, // Set text jadi ditengah secara horizontal (center)
                'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER // Set text jadi di tengah secara vertical (middle)
            ],
            'borders' => [
                'top' => ['borderStyle'  => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN], // Set border top dengan garis tipis
                'right' => ['borderStyle'  => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN],  // Set border right dengan garis tipis
                'bottom' => ['borderStyle'  => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN], // Set border bottom dengan garis tipis
                'left' => ['borderStyle'  => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN] // Set border left dengan garis tipis
            ]
        ];

        // Buat sebuah variabel untuk menampung pengaturan style dari isi tabel
        $style_row = [
            'alignment' => [
                'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER // Set text jadi di tengah secara vertical (middle)
            ],
            'borders' => [
                'top' => ['borderStyle'  => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN], // Set border top dengan garis tipis
                'right' => ['borderStyle'  => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN],  // Set border right dengan garis tipis
                'bottom' => ['borderStyle'  => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN], // Set border bottom dengan garis tipis
                'left' => ['borderStyle'  => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN] // Set border left dengan garis tipis
            ]
        ];

        $sheet->setCellValue('A1', "DATA SISWA"); // Set kolom A1 dengan tulisan "DATA SISWA"
        $sheet->mergeCells('A1:E1'); // Set Merge Cell pada kolom A1 sampai E1
        $sheet->getStyle('A1')->getFont()->setBold(true); // Set bold kolom A1

        // Buat header tabel nya pada baris ke 3
        $sheet->setCellValue('A3', "NO"); // Set kolom A3 dengan tulisan "NO"
        $sheet->setCellValue('B3', "NIS"); // Set kolom B3 dengan tulisan "NIS"
        $sheet->setCellValue('C3', "NAMA"); // Set kolom C3 dengan tulisan "NAMA"
        $sheet->setCellValue('D3', "JENIS KELAMIN"); // Set kolom D3 dengan tulisan "JENIS KELAMIN"
        $sheet->setCellValue('E3', "ALAMAT"); // Set kolom E3 dengan tulisan "ALAMAT"

        // Apply style header yang telah kita buat tadi ke masing-masing kolom header
        $sheet->getStyle('A3')->applyFromArray($style_col);
        $sheet->getStyle('B3')->applyFromArray($style_col);
        $sheet->getStyle('C3')->applyFromArray($style_col);
        $sheet->getStyle('D3')->applyFromArray($style_col);
        $sheet->getStyle('E3')->applyFromArray($style_col);

        // Panggil function view yang ada di SiswaModel untuk menampilkan semua data siswanya
        $siswa = $this->SiswaModel->view();

        $no = 1; // Untuk penomoran tabel, di awal set dengan 1
        $numrow = 4; // Set baris pertama untuk isi tabel adalah baris ke 4
        foreach ($siswa as $data) { // Lakukan looping pada variabel siswa
            $sheet->setCellValue('A' . $numrow, $no);
            $sheet->setCellValue('B' . $numrow, $data->nis);
            $sheet->setCellValue('C' . $numrow, $data->nama);
            $sheet->setCellValue('D' . $numrow, $data->jenis_kelamin);
            $sheet->setCellValue('E' . $numrow, $data->alamat);

            // Apply style row yang telah kita buat tadi ke masing-masing baris (isi tabel)
            $sheet->getStyle('A' . $numrow)->applyFromArray($style_row);
            $sheet->getStyle('B' . $numrow)->applyFromArray($style_row);
            $sheet->getStyle('C' . $numrow)->applyFromArray($style_row);
            $sheet->getStyle('D' . $numrow)->applyFromArray($style_row);
            $sheet->getStyle('E' . $numrow)->applyFromArray($style_row);

            $no++; // Tambah 1 setiap kali looping
            $numrow++; // Tambah 1 setiap kali looping
        }

        // Set width kolom
        $sheet->getColumnDimension('A')->setWidth(5); // Set width kolom A
        $sheet->getColumnDimension('B')->setWidth(15); // Set width kolom B
        $sheet->getColumnDimension('C')->setWidth(25); // Set width kolom C
        $sheet->getColumnDimension('D')->setWidth(20); // Set width kolom D
        $sheet->getColumnDimension('E')->setWidth(30); // Set width kolom E

        // Set height semua kolom menjadi auto (mengikuti height isi dari kolommnya, jadi otomatis)
        $sheet->getDefaultRowDimension()->setRowHeight(-1);

        // Set orientasi kertas jadi LANDSCAPE
        $sheet->getPageSetup()->setOrientation(\PhpOffice\PhpSpreadsheet\Worksheet\PageSetup::ORIENTATION_LANDSCAPE);

        // Set judul file excel nya
        $sheet->setTitle("Laporan Data Siswa");

        // Proses file excel
        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header('Content-Disposition: attachment; filename="Data Siswa.xlsx"'); // Set nama file excel nya
        header('Cache-Control: max-age=0');

        $writer = new Xlsx($spreadsheet);
        $writer->save('php://output');
    }
}
