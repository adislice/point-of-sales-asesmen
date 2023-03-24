-- phpMyAdmin SQL Dump
-- version 5.2.1-1.fc37.remi
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 24, 2023 at 06:02 PM
-- Server version: 10.5.18-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tes_asesmen`
--

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `name`, `price`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Cumi Bakar', '20000', 'https://parboaboa.com/data/foto_berita/cumi_bakar.webp', '2023-03-23 19:58:20', '2023-03-23 19:58:20'),
(2, 'Nasi Goreng', '18000', 'https://awsimages.detik.net.id/community/media/visual/2022/08/07/resep-nasi-goreng-ayam-dan-ebi_43.jpeg?w=700&q=90', '2023-03-23 21:39:05', '2023-03-23 21:39:05'),
(3, 'Es Teh', '5000', 'https://bebekbkb.com/wp-content/uploads/2020/02/es-teh-manis.jpg', '2023-03-23 21:40:29', '2023-03-23 21:40:29'),
(4, 'Es Jeruk', '5000', 'https://assets2.rumah-bumn.id/produk/1569553940.jpg', '2023-03-23 21:40:29', '2023-03-23 21:40:29'),
(5, 'Soto Ayam', '18000', 'https://caramembuat.id/wp-content/uploads/2022/08/Cara-Membuat-Soto-Ayam-Bening.webp', NULL, NULL),
(6, 'Tongseng Kambing', '20000', 'https://resepkoki.id/wp-content/uploads/2017/02/Resep-Tongseng-kambing.jpg', '2023-03-23 21:46:29', '2023-03-23 21:46:29'),
(7, 'Nasi Putih', '0', 'https://s.kaskus.id/r540x540/images/2015/01/26/3962554_20150126052847.jpg', NULL, NULL),
(8, 'Kepiting Saus Padang', '40000', 'https://img.okezone.com/content/2020/07/01/298/2239715/tanggal-muda-bahagia-yuk-masak-kepiting-saus-padang-ala-restoran-sDWJBo1lCl.jpg', NULL, NULL),
(9, 'Gulai Ayam', '25000', 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/11/03/2888339601.jpeg', NULL, NULL),
(10, 'Ayam Geprek', '22000', 'https://upload.wikimedia.org/wikipedia/commons/2/24/Ayam_geprek.png', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
