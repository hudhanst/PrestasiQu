-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 01, 2019 at 07:25 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `prestasi`
--

-- --------------------------------------------------------

--
-- Table structure for table `prestasi_biodata`
--

CREATE TABLE `prestasi_biodata` (
  `iBiodataId` bigint(255) NOT NULL,
  `iNomerInduk` bigint(255) NOT NULL,
  `vcBiodataNama` varchar(255) NOT NULL,
  `vcAgama` varchar(255) DEFAULT NULL,
  `vcTempatLahir` varchar(255) DEFAULT NULL,
  `dtTanggalLahir` date DEFAULT NULL,
  `vcAlamat` varchar(255) DEFAULT NULL,
  `vcNomerHP` varchar(255) DEFAULT NULL,
  `vcEmail` varchar(255) DEFAULT NULL,
  `vcPendidikanTerakhir` varchar(255) DEFAULT NULL,
  `vcInstansiPendidikanTerakhir` varchar(255) DEFAULT NULL,
  `vcBiodataKelas` varchar(255) DEFAULT NULL,
  `iPoint` int(64) NOT NULL,
  `vcStatus` varchar(64) NOT NULL,
  `blProfilePic` longblob
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prestasi_biodata`
--

INSERT INTO `prestasi_biodata` (`iBiodataId`, `iNomerInduk`, `vcBiodataNama`, `vcAgama`, `vcTempatLahir`, `dtTanggalLahir`, `vcAlamat`, `vcNomerHP`, `vcEmail`, `vcPendidikanTerakhir`, `vcInstansiPendidikanTerakhir`, `vcBiodataKelas`, `iPoint`, `vcStatus`, `blProfilePic`) VALUES
(27, 196109151993022001, 'dede yudhiaty', 'islam', 'jakarta', '1961-09-15', 'Jakarta,jl. h. taiman barat 1 no. 2 rt. 002/002 ps. rebo jakarta timur', '081310498338', 'dedesmkn26@gmail.com', '', 'ikip jakarta', 'GURU', 300, 'guru', NULL),
(28, 195902241984032000, 'efrida noerdin', 'islam', 'bangka', '1959-02-24', 'Jakarta,komplek ipkn blok b-3 bintaro, jakarta 12330', '081218692780', 'efrida.jasmine@yahoo.com', '', 'its surabaya', 'GURU', 300, 'guru', NULL),
(29, 12345678910, 'kuri asih', 'islam', 'jakarta', '1978-11-23', 'Jakarta,jl. mundu 1 rt. 05/04 no.2 pinang ranti, jakarta timur', '081311157823', 'kurismkn26@gmail.com', '', 'unindra', 'GURU', 300, 'guru', NULL),
(30, 196109021987032005, 'tri anitasih', 'islam', 'jakarta', '1961-09-21', 'Jakarta,jl. pratama no.6, rt.07/06, srengseng sawah, kec. jayakarsa, jakarta selatan', '081284017114', 'trianita61@yahoo.com', '', 'ikip jakarta', 'GURU', 300, 'guru', NULL),
(32, 34567891012, 'danial ahadian rahardja', 'islam', 'jakarta', '1988-11-27', 'Depok,jl. saminten 1 no. 169, kec. sukmajaya depok timur', '081319218989', 'danialsmkn26@gmail.com', '', 'unj', 'GURU', 300, 'guru', NULL),
(34, 45678910123, 'andhika dermawan', 'islam', 'jakarta', '1989-01-06', 'Jakarta,jl. cempaka putih barat rt.007/004 no.2, kec. cempaka putih jakarta pusat', '085693091616', 'dhikaderma@yahoo.co.id', '', 'universitas yarsi', 'ADMIN', 300, 'admin', NULL),
(35, 13389758, 'Gymnastiar Ramadhan', 'islam', 'jakarta', '2002-12-11', 'Jakarta,Jl. Suralaya No. 146 RT 004/04 Cipayung, Cilangkap, Jakarta Timur', '081519432610', 'gymnastiar32@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-1', 300, 'siswa', NULL),
(36, 15490937, 'Azis Zuhri Pratomo', 'islam', 'jakarta', '2002-08-05', 'Jakarta,Jl. Raya Mabes Hankam Rt 05/02 Kel. Bambu Apus , Kec. Cipayung , Jakarta Timur', '08997867213', 'ajisbhakun354@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-1', 325, 'siswa', NULL),
(37, 15072278, 'Luthfi Thufail Asiddiqi', 'islam', 'jakarta', '2001-11-28', 'Jakarta,Jl. Swadaya 5 RT 002/05, KEL. Cilangkap, KEC. Cipayung, Jakarta Timur.', '0895800019900', 'itslutas@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-2', 287, 'siswa', NULL),
(38, 24020202, 'Andin Maharani', 'islam', 'jakarta', '2001-11-28', 'Jakarta,Kp rawaterate rt 09 rw 01 no. 28', '085697352293', 'maharanz1122@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-1', 300, 'siswa', NULL),
(39, 20378533, 'Syabana Bimantara', 'islam', 'jakarta', '2002-10-23', 'Jakarta,Jl.Tegal Amba Rt 03/Rw 013 Duren Sawit,Jakarta Timur', '087882036019', 'syabana55@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-2', 250, 'siswa', NULL),
(40, 20394231, 'Muhamad Raka Pratama', 'islam', 'jakarta', '2002-06-04', 'Jakarta,Jl. Pisangan Baru Utara, Rt 006/012 Pisangan Baru Matraman Jakarta Timur', '085780183623', 'rakarangga87@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-1', 275, 'siswa', NULL),
(41, 20376245, 'Achmad Ardani Prasha', 'islam', 'jakarta', '2002-02-20', 'Jakarta,Jl. Pisangan Baru 2 No. 330, Kecamatan Matraman, Kelurahan Pisangan Baru, Jakarta Timur 13110, DKI Jakarta', '083806365226', 'Achmad.ardani17@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-1', 300, 'siswa', NULL),
(42, 23422947, 'Bari Azhari ', 'islam', 'jakarta', '2002-01-14', 'Jakarta,Kp. Pengarengan Rt.12/Rw.12 No.12', '088213130567', 'bariazhari97@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-1', 300, 'siswa', NULL),
(43, 23396443, 'Yasmine Haya Hamida', 'islam', 'jakarta', '2002-05-19', 'Jakarta,Komp. PTHII No. A 15 Kelapa Gading Timur, Jakarta Utara', '083875830233', 'yasminehh19@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-2', 300, 'siswa', NULL),
(44, 23413622, 'assyifa restu maharani putri', 'islam', 'malang', '2002-05-14', 'Jakarta,jl. skip ujung 02 rt.05/07 matraman', '085714836707', 'syfschool@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-2', 300, 'siswa', NULL),
(45, 20074900, 'Raden Muhammad Rivansyach Imannanda', 'islam', 'banyumas', '2002-08-12', 'Jakarta,Kp.pisangan RT 11/03, Penggilingan, Cakung, Jakarta Timur', '085852976253', 'rivansyach21@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-2', 300, 'siswa', NULL),
(46, 24625420, 'Prasetia Robbalddin Al Amir', 'islam', 'jakarta', '2002-07-12', 'Bekasi,Jl. Pangkalan Jati 6a no.63 rt 06/05', '0895378633433', 'Ijbaldin@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-2', 300, 'siswa', NULL),
(47, 17635901, 'Fauzan Rafli ', 'islam', 'jakarta', '2001-12-03', 'Bekasi,Jl.Jatibarang 1 No.24', '081281736706', 'fauzanrafli34@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-2', 300, 'siswa', NULL),
(48, 22597792, 'Michael Natanael ', 'kristen protestan', 'jakarta', '2002-12-30', 'Jakarta,Benteng Mas V No 12', '08974132561', 'mnatanael87@gmail.com ', 'SMP', 'SMP', '2017/2018-sija-11-1', 300, 'siswa', NULL),
(49, 15497871, 'Aditya Aryadipa', 'islam', 'jakarta', '2001-12-24', 'Jakarta,Jl.Tanah Koja 2 Rt 6 Rw 2 no.29', '08811382504', 'aryadipa1224@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-1', 300, 'siswa', NULL),
(50, 24337063, 'Yanuar Eka Saputra', 'islam', 'tangerang', '2002-01-18', 'Jakarta,Jl. Halmahera, perum Pulogebang permai, Pulogebang, Cakung, Jakarta Timur', '082112046941', 'ian.yes18@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-1', 300, 'siswa', NULL),
(51, 20790850, 'Handrian Wibisono', 'islam', 'bekasi', '2002-08-03', 'Jakarta,Jl. Pancawarga 4 no.12 rt5/4 kec. Cipinang Besar Selatan kel. Jatinegara Jakarta Timur', '081297505913', 'handrianwibisono302@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-1', 300, 'siswa', NULL),
(52, 24568799, 'Alfalah Lazuardi Mahmudi', 'islam', 'jakarta', '2001-12-25', 'Bekasi,Jl pondok kelapa raya ruko beach laundry no 37b', '088977392521', 'alfalahlazuardi@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-1', 300, 'siswa', NULL),
(53, 27656800, 'Nurfachri Daffa Alhakim', 'islam', 'jakarta', '2001-12-27', 'Tangerang,Jln.moncokerto 2 no.25', '-', 'nurfachridaffa17@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-1', 300, 'siswa', NULL),
(54, 26678904, 'Farhan Perdana Widarmawan', 'islam', 'jakarta', '2002-08-05', 'Jakarta,Jl rawamangun muka 1 no 21 rt 11 rw 12', '085218272002', 'perdanaw77@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-1', 300, 'siswa', NULL),
(55, 22786532, 'Muhammad Adam Abdurrahman', 'islam', 'jakarta', '2002-02-28', 'Jakarta,Jl.Layur Selatan no.5', '081381405533', 'Adam2802002@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-1', 300, 'siswa', NULL),
(56, 245676788, 'Nurrizkyta Aulia Hanifa ', 'islam', 'jakarta', '2003-12-04', 'Jakarta,Jl. Air zam zam kp rawaterate rt 010/001 cakung, Jakarta Timur ', '081261921680', 'nurrizkytaaulia@gmail.com ', 'SMP', 'SMP', '2018/2019-sija-10-1', 300, 'siswa', NULL),
(57, 20598240, 'Muhammad Luthfi Arifin', 'islam', 'jakarta', '2002-10-01', 'Jakarta,Jl.  Pedurenan Masjid 2 rt 006/04 no. 24, Setiabudi, jakarta selatan', '0816381528', 'luthfiarifin0222@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-1', 312, 'siswa', NULL),
(58, 20553072, 'Johannes Faomasi Gunawan', 'islam', 'jakarta', '2002-02-15', 'Bekasi,Jl Soka Merah 3 F5 No 6, Harapan Baru Regency Rt 010 Rw 013, Bekasi ', '087882317075', 'johannesfaomasi@yahoo.com', 'SMP', 'SMP', '2017/2018-sija-11-2', 300, 'siswa', NULL),
(59, 19890236, 'Ashandi Leonadi', 'islam', 'jakarta', '2001-08-13', 'Bekasi,Jl. Bambu Duri XII No. 58 J', '0895361165408', 'ashandileonadi@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-1', 300, 'siswa', NULL),
(60, 16601183, 'Muhammad Dani Asyrofi', 'islam', 'magelang', '2001-12-17', 'Jakarta,Jl. Tipar Cakung No.3 RT 06/05 ', '089610347663', 'ramdaniasyrofi@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-1', 300, 'siswa', NULL),
(61, 27677898, 'Yassin Dwi Cahyo', 'islam', 'nganjuk', '2003-04-14', 'Jakarta,Jalan Gang Perintis 1', '083875629946', 'yassin.dwi@smpn123jkt.sch.id', 'SMP', 'SMP', '2018/2019-sija-10-2', 300, 'siswa', NULL),
(62, 24456786, 'Mutia Zahra Ramadhan', 'islam', 'bekasi', '2002-11-21', 'Bekasi,Jl.Balai Rakyat, KP.Gempol RT.008 RW.01 NO.59', '089509181261', 'mutiaazhr21@gmail.com', 'SMP', 'SMP', '2018/2019-sija-10-1', 300, 'siswa', NULL),
(63, 23915248, 'Muhammad Zaelani Saputra', 'islam', 'jakarta', '2002-03-14', 'Jakarta,JL Persatuan No 52 Rt 02/06 Cipinang Besar Selatan, Jatinegara, Jakarta Timur,13410.', '081210669736', 'muhammadzaelanisap@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-1', 300, 'siswa', NULL),
(64, 26567888, 'Navisha wilarman', 'islam', 'jakarta', '2002-04-16', ',-', '-', '-', 'SMP', 'SMP', '2017/2018-sija-11-2', 300, 'siswa', NULL),
(65, 33239569, 'Ilyas Mubarrok', 'islam', 'jakarta', '2003-06-03', 'Jakarta,Kp. Pedurenan Rt 008/06 No. 60 Rawaterate, Cakung, Jakarta Timur', '081298807267', 'ilyasmbrk3@gmail.com', 'SMP', 'SMP', '2018/2019-sija-10-2', 300, 'siswa', NULL),
(66, 31757942, 'Wulan Sari', 'islam', 'jakarta', '2003-02-13', 'Jakarta,Jl. Penggilingan rt.04/rw.07 Cakung Jakarta Timur', '0895369047187', 'wulan130203@gmail.com', 'SMP', 'SMP', '2018/2019-sija-10-1', 300, 'siswa', NULL),
(67, 27391901, 'Dean Ahmad Tristan', 'islam', 'jakarta', '2002-07-18', 'Jakarta,Jl. H. Nasir No 17 RT 004/07 Duren Sawit Jakarta Timur', '-', 'v', 'SMP', 'SMP', '2017/2018-sija-11-2', 300, 'siswa', NULL),
(68, 21932643, 'Rifki Sulaeman', 'islam', 'jakarta', '2002-01-16', 'Jakarta,Jl.Kp.Sumur Gg.tahu Rt015/Rw017', '-', 'Rsulaeman611@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-1', 300, 'siswa', NULL),
(69, 21233935, 'Nugroho Priyo Utomo', 'islam', 'jakarta', '2002-03-11', 'Jakarta,Jl. mawar merah 2 gang haji arbi no.64', '089698762566', 'nugrohopu.dot@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-2', 300, 'siswa', NULL),
(70, 20795373, 'Bagas Saputra', 'islam', 'jakarta', '2002-09-07', 'Jakarta,Kp. Pulo Jahe RT 012/RW 014 No.17 Kel. Jatinegara, Kec. Cakung, Jakarta Timur 13930', '085781649657', 'bagassaputra26.bs@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-2', 300, 'siswa', NULL),
(71, 20918240, 'Muhammad Aqmal Khafidz Pratama', 'islam', 'pemalang', '2002-04-28', 'Jakarta,Jalan Swadaya Pam No.28, RT.1/RW.13, Jatinegara, Cakung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13930', '081297483705', 'aqmal.pratama81@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-2', 300, 'siswa', NULL),
(72, 21695530, 'Kristianto Wicaksana Dharma Putra', 'buddha', '', '2002-04-02', 'Bekasi,Perum Taman Modern Blok C4/3', '085718458438', 'Kristiantowicaksana@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-2', 300, 'siswa', NULL),
(73, 26686302, 'Adam Maulana', 'islam', 'jakarta', '2002-11-05', 'Bekasi,Jalan kalianyar raya', '-', 'adamjr014@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-2', 300, 'siswa', NULL),
(74, 20496028, 'Arroka Chitarra Lahagu', 'islam', 'purwokerto', '2002-04-03', 'Jakarta,Jl. Bangun Cipta Sarana Gang Q RT. 002 RW. 005 No. 29 Pegangsaan Dua Kelapa Gading Jakarta Utara', '085945427833', 'lahaguarroka@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-2', 300, 'siswa', NULL),
(75, 31606006, 'Kemas Muhammad Resky Muharam Sobri', 'islam', 'bekasi', '2003-03-03', 'Jakarta,Jl Mataram blok m5 no 1b komplek bea cukai sukapura cilincing Jakarta Utara ', '082123528254', 'kemasm.resky@gmail.com ', 'SMP', 'SMP', '2018/2019-sija-10-2', 300, 'siswa', NULL),
(76, 29089303, 'Mochammad Arfal Permana', 'islam', 'jakarta', '2001-10-29', 'Jakarta,Jl Pemuda 1 Rawamangun,Pulo Gadung', '089601973496', 'arpalpermana@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-2', 300, 'siswa', NULL),
(77, 20632308, 'Daeng Ahmad Nurdin', 'islam', 'jakarta', '2002-04-01', 'Jakarta,Kp. Pedaengan Rt 03/08, Kel. Penggilingan, Cakung, Jakarta Timur', '089635572028', 'daengtamvan138@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-2', 300, 'siswa', NULL),
(78, 29184347, 'Arinda aura oktaviani', 'islam', 'jakarta', '2002-10-31', 'Jakarta,Jl.wates 2 penggilingan Cakung Jaktim', '087789638259', 'arindaauraokta31@gmail.com', 'SMP', 'SMP', '2018/2019-sija-10-2', 300, 'siswa', NULL),
(79, 20451261, 'Denisa Febrianing', 'islam', 'wonogiri', '2002-02-02', 'Jakarta,Kp. Kandang Sapi Rt 04/06 Cakung Timur, Jakarta Timur', '083893942827', 'dfebrianing@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-1', 300, 'siswa', NULL),
(80, 20718929, 'Kireyna Nursahyani', 'islam', 'jakarta', '2002-08-10', 'Jakarta,Jl. Swadaya PLN Klender No. 21 rt08/rw02', '-', 'kireynanurs@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-1', 300, 'siswa', NULL),
(81, 20611810, 'Irfan Vihandoko', 'islam', 'jakarta', '2002-10-09', 'Jakarta,Jl. Marzuki 1 RT 005/017 No. 9 Kp.Jembatan, Penggilingan, Cakung, Jaktim', '083895237400', 'irfihan@gmail.com ', 'SMP', 'SMP', '2017/2018-sija-11-1', 300, 'siswa', NULL),
(82, 22577440, 'Marsha Nurtya Rachma', 'islam', 'jakarta', '2002-08-01', 'Jakarta,Jl. Batu Pandan Sutra No. 28', '0895333288564', 'marshanurtya@gmail.com', 'SMP', 'SMP', '2017/2018-sija-11-1', 300, 'siswa', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `prestasi_instansi`
--

CREATE TABLE `prestasi_instansi` (
  `iInstansiId` bigint(255) NOT NULL,
  `vcNamaInstansi` varchar(255) NOT NULL,
  `vcJenisInstansi` varchar(255) NOT NULL,
  `vcKetInstansi` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prestasi_instansi`
--

INSERT INTO `prestasi_instansi` (`iInstansiId`, `vcNamaInstansi`, `vcJenisInstansi`, `vcKetInstansi`) VALUES
(7, 'smkn 26 jakarta', 'Pendidikan', 'smkn 26 jakarta'),
(8, 'universitas Syiah Kuala', 'Pendidikan', 'universitas Syiah Kuala'),
(9, 'Dinas Pendidikan Kota Jakarta', 'Pemerintahan', 'Dinas Pendidikan Kota Jakarta');

-- --------------------------------------------------------

--
-- Table structure for table `prestasi_kelas`
--

CREATE TABLE `prestasi_kelas` (
  `iKelasId` int(255) NOT NULL,
  `vcTahunAjar` varchar(255) NOT NULL,
  `vcNamaJurusan` varchar(255) NOT NULL,
  `vcTingkat` varchar(255) NOT NULL,
  `vcKelas` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prestasi_kelas`
--

INSERT INTO `prestasi_kelas` (`iKelasId`, `vcTahunAjar`, `vcNamaJurusan`, `vcTingkat`, `vcKelas`) VALUES
(1, '2018/2019', 'sija', '10', '1'),
(2, '2018/2019', 'sija', '10', '2'),
(5, '2018/2019', 'sija', '11', '1'),
(6, '2018/2019', 'sija', '11', '2'),
(7, '2018/2019', 'sija', '12', '1'),
(8, '2018/2019', 'sija', '12', '2'),
(9, '2017/2018', 'sija', '10', '1'),
(10, '2017/2018', 'sija', '10', '2'),
(11, '2017/2018', 'sija', '11', '1'),
(12, '2017/2018', 'sija', '11', '2'),
(13, '2017/2018', 'sija', '12', '1'),
(14, '2017/2018', 'sija', '12', '2');

-- --------------------------------------------------------

--
-- Table structure for table `prestasi_pelanggaran`
--

CREATE TABLE `prestasi_pelanggaran` (
  `iPelanggaranId` bigint(255) NOT NULL,
  `vcNamaPelanggaran` varchar(255) NOT NULL,
  `vcJenisiPointPelanggaran` varchar(255) DEFAULT NULL,
  `iPointPelanggaran` int(64) NOT NULL,
  `vcKeteranganPelanggaran` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prestasi_pelanggaran`
--

INSERT INTO `prestasi_pelanggaran` (`iPelanggaranId`, `vcNamaPelanggaran`, `vcJenisiPointPelanggaran`, `iPointPelanggaran`, `vcKeteranganPelanggaran`) VALUES
(6, 'tidak mengerjakan tugas', 'Ringan', 25, 'mengurangi nilai akademik'),
(7, 'rambut tidak rapi', 'Ringan', 25, 'mengurangi estetika dalam berpakaian'),
(8, 'membuat kegaduhan di kelas', 'Ringan', 30, 'mengganggu kegiatan belajar mengajar'),
(9, 'terlambat', 'Ringan', 30, 'kurang disiplin terhadap waktu'),
(10, 'tidak piket', 'Ringan', 30, 'melalaikan tugas individu'),
(11, 'bolos', 'Ringan', 50, 'meninggalkan kelas dan ketinggalan pelajaran '),
(12, 'berkelahi', 'Sedang', 75, 'merugikan diri sendiri dan orang lain'),
(13, 'berkelahi', 'Berat', 100, 'melukai orang lain'),
(14, 'tawuran', 'Berat', 150, 'mencoreng nama naik sekolah'),
(15, 'membawa hp', 'Berat', 150, 'melanggar peraturan sekolah yang sudah ditetapkan'),
(16, 'pacaran', 'Berat', 150, 'berbuat seronoh dan tidak sopan'),
(17, 'pacaran', 'Berat', 300, 'berbuat seronoh dan tidak sopan');

-- --------------------------------------------------------

--
-- Table structure for table `prestasi_point`
--

CREATE TABLE `prestasi_point` (
  `iPointId` bigint(255) NOT NULL,
  `iPengajuPoint` bigint(255) NOT NULL,
  `iPengajuNI` bigint(255) NOT NULL,
  `vcPengajuNama` varchar(255) NOT NULL,
  `iDitujuPoint` bigint(255) NOT NULL,
  `iDitujuNISN` bigint(255) NOT NULL,
  `vcDitujuNama` varchar(255) NOT NULL,
  `iJenisPelanggaran` bigint(255) NOT NULL,
  `vcNamaPelanggaran` varchar(255) NOT NULL,
  `vcJenisPelanggaran` varchar(255) NOT NULL,
  `iPenguranganPoint` int(11) NOT NULL,
  `iSisaPoint` int(11) DEFAULT NULL,
  `vcKeteragan` varchar(255) DEFAULT NULL,
  `blLampiran` longblob,
  `dtDiajukan` varchar(255) NOT NULL,
  `dtDiterima` varchar(255) DEFAULT NULL,
  `vcStatus` varchar(255) NOT NULL,
  `iDiterima` bigint(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prestasi_point`
--

INSERT INTO `prestasi_point` (`iPointId`, `iPengajuPoint`, `iPengajuNI`, `vcPengajuNama`, `iDitujuPoint`, `iDitujuNISN`, `vcDitujuNama`, `iJenisPelanggaran`, `vcNamaPelanggaran`, `vcJenisPelanggaran`, `iPenguranganPoint`, `iSisaPoint`, `vcKeteragan`, `blLampiran`, `dtDiajukan`, `dtDiterima`, `vcStatus`, `iDiterima`) VALUES
(13, 27, 196109151993022001, 'dede yudhiaty', 37, 15072278, 'Luthfi Thufail Asiddiqi', 6, 'tidak mengerjakan tugas', 'Ringan', 25, 275, 'tidak mengerjakan tugas mapel skj', '', '2019-01-01,20:14:53', '2019-01-01,20:16:58', 'ACC', 34),
(14, 27, 196109151993022001, 'dede yudhiaty', 40, 20394231, 'Muhamad Raka Pratama', 7, 'rambut tidak rapi', 'Ringan', 25, 275, 'rambut tidak dicukur sudah terlalu panjang', '', '2019-01-01,20:15:56', '2019-01-01,21:17:19', 'ACC', 34),
(15, 34, 45678910123, 'andhika dermawan', 47, 17635901, 'Fauzan Rafli ', 7, 'rambut tidak rapi', 'Ringan', 25, 275, 'asd', '', '2019-01-01,21:17:42', '2019-01-01,21:18:03', 'TLK', 34),
(16, 34, 45678910123, 'andhika dermawan', 39, 20378533, 'Syabana Bimantara', 11, 'bolos', 'Ringan', 50, 250, '', '', '2019-01-01,21:19:12', '2019-01-01,21:19:38', 'ACC', 34),
(17, 34, 45678910123, 'andhika dermawan', 37, 15072278, 'Luthfi Thufail Asiddiqi', 9, 'terlambat', 'Ringan', 30, 245, '', '', '2019-01-01,21:19:21', '2019-01-02,00:46:56', 'TLK', 34),
(18, 34, 45678910123, 'andhika dermawan', 36, 15490937, 'Azis Zuhri Pratomo', 8, 'membuat kegaduhan di kelas', 'Ringan', 30, 295, '', '', '2019-01-02,00:46:44', NULL, 'DLY', NULL),
(19, 27, 196109151993022001, 'dede yudhiaty', 37, 15072278, 'Luthfi Thufail Asiddiqi', 6, 'tidak mengerjakan tugas', 'Ringan', 25, 275, 'tidak mengerjakan tugas mapel skj', NULL, '2019-01-01,20:14:53', '2017-01-01,20:16:58', 'ACC', 34);

-- --------------------------------------------------------

--
-- Table structure for table `prestasi_prestasi`
--

CREATE TABLE `prestasi_prestasi` (
  `iPrestasiId` bigint(20) NOT NULL,
  `iPengajuId` bigint(20) NOT NULL,
  `iPengajuNi` bigint(20) NOT NULL,
  `vcPengajuNama` varchar(255) NOT NULL,
  `iDitujuId` bigint(20) NOT NULL,
  `iDitujuNISN` bigint(20) NOT NULL,
  `vcDitujuNama` varchar(255) NOT NULL,
  `iPrestasi` bigint(20) DEFAULT NULL,
  `vcPrestasiNama` varchar(255) NOT NULL,
  `vcLembagaPemberi` varchar(255) NOT NULL,
  `vcNoSertifikat` varchar(255) DEFAULT NULL,
  `vcKatagori` varchar(255) NOT NULL,
  `vcTingkatPrestasi` varchar(255) DEFAULT NULL,
  `vcKeterangan` varchar(255) DEFAULT NULL,
  `lbLampiran` longblob,
  `dtDiajajukan` varchar(255) NOT NULL,
  `dtDIterima` varchar(255) DEFAULT NULL,
  `vcStatus` varchar(255) NOT NULL,
  `iDiterima` bigint(20) DEFAULT NULL,
  `iPenambahanPoint` int(11) DEFAULT NULL,
  `iPointAkhir` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prestasi_prestasi`
--

INSERT INTO `prestasi_prestasi` (`iPrestasiId`, `iPengajuId`, `iPengajuNi`, `vcPengajuNama`, `iDitujuId`, `iDitujuNISN`, `vcDitujuNama`, `iPrestasi`, `vcPrestasiNama`, `vcLembagaPemberi`, `vcNoSertifikat`, `vcKatagori`, `vcTingkatPrestasi`, `vcKeterangan`, `lbLampiran`, `dtDiajajukan`, `dtDIterima`, `vcStatus`, `iDiterima`, `iPenambahanPoint`, `iPointAkhir`) VALUES
(10, 29, 12345678910, 'kuri asih', 36, 15490937, 'Azis Zuhri Pratomo', 0, 'Jamboree Nasional Ke-X ', '9', '-', 'Kwartir Nasional', 'nasional', 'Kwartir Nasional', '', '2018-12-25,15:40:41', '2019-01-01,19:50:10', 'ACC', 34, 25, 325),
(11, 29, 12345678910, 'kuri asih', 37, 15072278, 'Luthfi Thufail Asiddiqi', 0, 'Kompetisi Nasional Video Animasi Saintifik', '7', '-', 'Video Animasi Saintifik', 'nasional', 'Video Animasi Saintifik', '', '2018-12-25,15:42:19', '2019-01-01,21:25:06', 'ACC', 34, 12, 287),
(12, 29, 12345678910, 'kuri asih', 57, 20598240, 'Muhammad Luthfi Arifin', 7, 'Juara 1 LKS IT software solution for business Jakarta Timur 1', 'smkn 26 jakarta', '-', 'software solution for business', 'kota', 'software solution for business', '', '2018-12-25,15:44:32', '2019-01-02,00:00:13', 'ACC', 34, 0, 312),
(13, 29, 12345678910, 'kuri asih', 58, 20553072, 'Johannes Faomasi Gunawan', 0, 'Juara Lomba Fotografi Tingkat SMA Sederajat Se Jabodetabek', 'Museum Sumpah Pemuda ', '-', 'Fotografi', 'kota', 'lomba tahun 2018', '', '2018-12-25,15:46:58', NULL, 'DLY', NULL, NULL, NULL),
(14, 29, 12345678910, 'kuri asih', 36, 15490937, 'Azis Zuhri Pratomo', 0, 'Jamboree Nasional Ke-X ', '9', '-', 'Kwartir Nasional', 'nasional', 'Kwartir Nasional', NULL, '2018-12-25,15:40:41', '2017-01-01,19:50:10', 'ACC', 34, 25, 325),
(15, 34, 45678910123, 'andhika dermawan', 36, 15490937, 'Azis Zuhri Pratomo', 0, 'ddddd', 'asd', '1221', 'dddasd', 'sekolah', 'gakkk', '', '2019-01-02,00:37:56', NULL, 'DLY', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `prestasi_user`
--

CREATE TABLE `prestasi_user` (
  `iUserId` bigint(255) NOT NULL,
  `iUserNomer` bigint(255) NOT NULL,
  `vcUserName` varchar(255) DEFAULT NULL,
  `vcUserPassword` varchar(255) NOT NULL,
  `vcUserStatus` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prestasi_user`
--

INSERT INTO `prestasi_user` (`iUserId`, `iUserNomer`, `vcUserName`, `vcUserPassword`, `vcUserStatus`) VALUES
(10, 1231234, ' ', '123', 'siswa'),
(18, 196109151993022001, ' ', '123', 'guru'),
(19, 195902241984032000, ' ', '123', 'guru'),
(20, 12345678910, ' ', '123', 'guru'),
(21, 196109021987032005, ' ', '123', 'guru'),
(22, 23456789101, ' ', '123', 'guru'),
(23, 34567891012, ' ', '123', 'guru'),
(25, 45678910123, ' ', '123', 'admin'),
(26, 13389758, ' ', '123', 'siswa'),
(27, 15490937, ' ', '123', 'siswa'),
(28, 15072278, ' ', '123', 'siswa'),
(29, 24020202, ' ', '123', 'siswa'),
(30, 20378533, ' ', '123', 'siswa'),
(31, 20394231, ' ', '123', 'siswa'),
(32, 20376245, ' ', '123', 'siswa'),
(33, 23422947, ' ', '123', 'siswa'),
(34, 23396443, ' ', '123', 'siswa'),
(35, 23413622, ' ', '123', 'siswa'),
(36, 20074900, ' ', '123', 'siswa'),
(37, 24625420, ' ', '123', 'siswa'),
(38, 17635901, ' ', '123', 'siswa'),
(39, 22597792, ' ', '123', 'siswa'),
(40, 15497871, ' ', '123', 'siswa'),
(41, 24337063, ' ', '123', 'siswa'),
(42, 20790850, ' ', '123', 'siswa'),
(43, 24568799, ' ', '123', 'siswa'),
(44, 27656800, ' ', '123', 'siswa'),
(45, 26678904, ' ', '123', 'siswa'),
(46, 22786532, ' ', '123', 'siswa'),
(47, 245676788, ' ', '123', 'siswa'),
(48, 20598240, ' ', '123', 'siswa'),
(49, 20553072, ' ', '123', 'siswa'),
(50, 19890236, ' ', '123', 'siswa'),
(51, 16601183, ' ', '123', 'siswa'),
(52, 27677898, ' ', '123', 'siswa'),
(53, 24456786, ' ', '123', 'siswa'),
(54, 23915248, ' ', '123', 'siswa'),
(55, 26567888, ' ', '123', 'siswa'),
(56, 33239569, ' ', '123', 'siswa'),
(57, 31757942, ' ', '123', 'siswa'),
(58, 27391901, ' ', '123', 'siswa'),
(59, 21932643, ' ', '123', 'siswa'),
(60, 21233935, ' ', '123', 'siswa'),
(61, 20795373, ' ', '123', 'siswa'),
(62, 20918240, ' ', '123', 'siswa'),
(63, 21695530, ' ', '123', 'siswa'),
(64, 26686302, ' ', '123', 'siswa'),
(65, 20496028, ' ', '123', 'siswa'),
(66, 31606006, ' ', '123', 'siswa'),
(67, 29089303, ' ', '123', 'siswa'),
(68, 20632308, ' ', '123', 'siswa'),
(69, 29184347, ' ', '123', 'siswa'),
(70, 20451261, ' ', '123', 'siswa'),
(71, 20718929, ' ', '123', 'siswa'),
(72, 20611810, ' ', '123', 'siswa'),
(73, 22577440, ' ', '123', 'siswa');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `prestasi_biodata`
--
ALTER TABLE `prestasi_biodata`
  ADD PRIMARY KEY (`iBiodataId`,`iNomerInduk`),
  ADD UNIQUE KEY `iNomerInduk` (`iNomerInduk`,`vcBiodataNama`,`vcStatus`);

--
-- Indexes for table `prestasi_instansi`
--
ALTER TABLE `prestasi_instansi`
  ADD PRIMARY KEY (`iInstansiId`,`vcNamaInstansi`),
  ADD UNIQUE KEY `vcNamaInstansi` (`vcNamaInstansi`);

--
-- Indexes for table `prestasi_kelas`
--
ALTER TABLE `prestasi_kelas`
  ADD PRIMARY KEY (`iKelasId`,`vcTahunAjar`,`vcNamaJurusan`,`vcTingkat`,`vcKelas`),
  ADD UNIQUE KEY `vcTahunAjar` (`vcTahunAjar`,`vcNamaJurusan`,`vcTingkat`,`vcKelas`);

--
-- Indexes for table `prestasi_pelanggaran`
--
ALTER TABLE `prestasi_pelanggaran`
  ADD PRIMARY KEY (`iPelanggaranId`,`vcNamaPelanggaran`);

--
-- Indexes for table `prestasi_point`
--
ALTER TABLE `prestasi_point`
  ADD PRIMARY KEY (`iPointId`);

--
-- Indexes for table `prestasi_prestasi`
--
ALTER TABLE `prestasi_prestasi`
  ADD PRIMARY KEY (`iPrestasiId`);

--
-- Indexes for table `prestasi_user`
--
ALTER TABLE `prestasi_user`
  ADD PRIMARY KEY (`iUserId`,`iUserNomer`),
  ADD UNIQUE KEY `iUserNomer` (`iUserNomer`),
  ADD UNIQUE KEY `iUserNomer_2` (`iUserNomer`),
  ADD UNIQUE KEY `iUserNomer_3` (`iUserNomer`,`vcUserStatus`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `prestasi_biodata`
--
ALTER TABLE `prestasi_biodata`
  MODIFY `iBiodataId` bigint(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT for table `prestasi_instansi`
--
ALTER TABLE `prestasi_instansi`
  MODIFY `iInstansiId` bigint(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `prestasi_kelas`
--
ALTER TABLE `prestasi_kelas`
  MODIFY `iKelasId` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `prestasi_pelanggaran`
--
ALTER TABLE `prestasi_pelanggaran`
  MODIFY `iPelanggaranId` bigint(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `prestasi_point`
--
ALTER TABLE `prestasi_point`
  MODIFY `iPointId` bigint(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `prestasi_prestasi`
--
ALTER TABLE `prestasi_prestasi`
  MODIFY `iPrestasiId` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `prestasi_user`
--
ALTER TABLE `prestasi_user`
  MODIFY `iUserId` bigint(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
