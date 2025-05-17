-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 17, 2025 at 08:51 PM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tp_web`
--

-- --------------------------------------------------------

--
-- Table structure for table `publications`
--

DROP TABLE IF EXISTS `publications`;
CREATE TABLE IF NOT EXISTS `publications` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `titre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_path` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `categorie` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'cinema',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `publications`
--

INSERT INTO `publications` (`id`, `titre`, `description`, `image_path`, `categorie`, `created_at`, `updated_at`) VALUES
(4, 'Publication 1', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur pariatur ipsum perferendis dolore sit.', 'https://img.freepik.com/free-psd/cinema-still-life-background_23-2150743148.jpg?t=st=1747503678~exp=1747507278~hmac=d2e122ce59f68b3f835dc31c00a8ee2bb47034840866e415ac7e49c0a3ee5c0f&w=1800', 'cinema', '2025-05-17 19:50:12', '2025-05-17 19:50:12'),
(5, 'Publication 2', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur pariatur ipsum perferendis dolore sit.', 'https://img.freepik.com/free-vector/finger-god-background-vector-aesthetic-brown-design_53876-156336.jpg?t=st=1747508188~exp=1747511788~hmac=85e9ea1f098240848cdf4bb34c9ca6f320c49441e02bb6f069f3e72212d69338&w=1800', 'art', '2025-05-17 19:50:52', '2025-05-17 19:50:52');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
