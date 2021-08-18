-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.5.9-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- haejwo 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `haejwo` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `haejwo`;

-- 테이블 haejwo.like 구조 내보내기
CREATE TABLE IF NOT EXISTS `like` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `request_id` int(10) unsigned NOT NULL,
  `ip` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 haejwo.like:~0 rows (대략적) 내보내기
DELETE FROM `like`;
/*!40000 ALTER TABLE `like` DISABLE KEYS */;
/*!40000 ALTER TABLE `like` ENABLE KEYS */;

-- 테이블 haejwo.request 구조 내보내기
CREATE TABLE IF NOT EXISTS `request` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '',
  `pw` varchar(50) NOT NULL DEFAULT '',
  `content` text NOT NULL DEFAULT '',
  `liked` int(11) DEFAULT 0,
  `date` date DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8;

-- 테이블 데이터 haejwo.request:~81 rows (대략적) 내보내기
DELETE FROM `request`;
/*!40000 ALTER TABLE `request` DISABLE KEYS */;
INSERT INTO `request` (`id`, `name`, `pw`, `content`, `liked`, `date`) VALUES
	(1, '123', '123', '123', 0, '2021-08-16'),
	(2, '123', '123', '123', 0, '2021-08-16'),
	(3, '123', '123', '123', 0, '2021-08-16'),
	(4, '123', '123', '123', 0, '2021-08-16'),
	(5, '123', '123', '123', 0, '2021-08-16'),
	(6, '123', '123', '123', 0, '2021-08-16'),
	(7, '123', '123', '123', 0, '2021-08-16'),
	(8, '123', '123', '123', 0, '2021-08-16'),
	(9, '123', '123', '123', 0, '2021-08-16'),
	(10, '123', '123', '123', 0, '2021-08-16'),
	(11, '123', '123', '123', 0, '2021-08-16'),
	(12, '123', '123', '123', 0, '2021-08-16'),
	(13, '123', '123', '123', 0, '2021-08-16'),
	(14, '123', '123', '123', 0, '2021-08-16'),
	(15, '123', '123', '123', 0, '2021-08-16'),
	(16, '123', '123', '123', 0, '2021-08-16'),
	(17, '123', '123', '123', 0, '2021-08-16'),
	(18, '123', '123', '123', 0, '2021-08-16'),
	(19, '123', '123', '123', 0, '2021-08-16'),
	(20, '123', '123', '123', 0, '2021-08-16'),
	(21, '123', '123', '123', 0, '2021-08-16'),
	(22, '123', '123', '123', 0, '2021-08-16'),
	(23, '123', '123', '123', 0, '2021-08-16'),
	(24, '123', '123', '123', 0, '2021-08-16'),
	(25, '123', '123', '123', 0, '2021-08-16'),
	(26, '123', '123', '123', 0, '2021-08-16'),
	(27, '123', '123', '123', 0, '2021-08-16'),
	(28, '123', '123', '123', 0, '2021-08-16'),
	(29, '123', '123', '123', 0, '2021-08-16'),
	(30, '123', '123', '123', 0, '2021-08-16'),
	(31, '123', '123', '123', 0, '2021-08-16'),
	(32, '123', '123', '123', 0, '2021-08-16'),
	(33, '123', '123', '123', 0, '2021-08-16'),
	(34, '123', '123', '123', 0, '2021-08-16'),
	(35, '123', '123', '123', 0, '2021-08-16'),
	(36, '123', '123', '123', 0, '2021-08-16'),
	(37, '123', '123', '123', 0, '2021-08-16'),
	(38, '123', '123', '123', 0, '2021-08-16'),
	(39, '123', '123', '123', 0, '2021-08-16'),
	(40, '123', '123', '123', 0, '2021-08-16'),
	(41, '123', '123', '123', 0, '2021-08-16'),
	(42, '123', '123', '123', 0, '2021-08-16'),
	(43, '123', '123', '123', 0, '2021-08-16'),
	(44, '123', '123', '123', 0, '2021-08-16'),
	(45, '123', '123', '123', 0, '2021-08-16'),
	(46, '123', '123', '123', 0, '2021-08-16'),
	(47, '123', '123', '123', 0, '2021-08-16'),
	(48, '123', '123', '123', 0, '2021-08-16'),
	(49, '123', '123', '123', 0, '2021-08-16'),
	(50, 'ㅇㄹㄴㅇㄹㄴㅇ', '123', '123', 0, '2021-08-16'),
	(51, 'ㅇㄹㄴㅇㄹㄴㅇ', '123', '123', 0, '2021-08-16'),
	(52, 'ㅇㄹㄴㅇㄹㄴㅇ', '123', '123', 0, '2021-08-16'),
	(53, 'ㅇㄹㄴㅇㄹㄴㅇ', '123', '123', 0, '2021-08-16'),
	(54, 'ㅇㄹㄴㅇㄹㄴㅇ', '123', '123', 0, '2021-08-16'),
	(55, 'ㅇㄹㄴㅇㄹㄴㅇ', '123', '123', 0, '2021-08-16'),
	(56, 'ㅇㄹㄴㅇㄹㄴㅇ', '123', '123', 0, '2021-08-16'),
	(57, 'ㅇㄹㄴㅇㄹㄴㅇ', '123', 'ㄴㅇㄹㄴㅇㄹㄴㅇ', 0, '2021-08-16'),
	(58, 'ㅇㄹㄴㅇㄹㄴㅇ', '123', 'ㄴㅇㄹㄴㅇㄹㄴㅇ', 0, '2021-08-16'),
	(59, 'ㅇㄹㄴㅇㄹㄴㅇ', '123', 'ㄴㅇㄹㄴㅇㄹㄴㅇ', 0, '2021-08-16'),
	(60, 'ㅇㄹㄴㅇㄹㄴㅇ', '123', 'ㄴㅇㄹㄴㅇㄹㄴㅇ', 0, '2021-08-16'),
	(61, 'ㅇㄹㄴㅇㄹㄴㅇ', '123', 'ㄴㅇㄹㄴㅇㄹㄴㅇ', 0, '2021-08-16'),
	(62, 'ㅇㄹㄴㅇㄹㄴㅇ', '123', 'ㄴㅇㄹㄴㅇㄹㄴㅇ', 0, '2021-08-16'),
	(63, 'ㅇㄹㄴㅇㄹㄴㅇ', '123', 'ㄴㅇㄹㄴㅇㄹㄴㅇ', 0, '2021-08-16'),
	(64, 'ㅇㄹㄴㅇㄹㄴㅇ', '123', 'ㄴㅇㄹㄴㅇㄹㄴㅇ', 0, '2021-08-16'),
	(65, 'ㅇㄹㄴㅇㄹㄴㅇ', '123', 'ㄴㅇㄹㄴㅇㄹㄴㅇ', 0, '2021-08-16'),
	(66, 'ㅇㄹㄴㅇㄹㄴㅇ', '123', 'ㄴㅇㄹㄴㅇㄹㄴㅇ', 0, '2021-08-16'),
	(67, 'ㅇㄹㄴㅇㄹㄴㅇ', '123', 'ㄴㅇㄹㄴㅇㄹㄴㅇ', 0, '2021-08-16'),
	(68, 'ㅇㄹㄴㅇㄹㄴㅇ', '123', 'ㄴㅇㄹㄴㅇㄹㄴㅇ', 0, '2021-08-16'),
	(69, 'ㅇㄹㄴㅇㄹㄴㅇ', '123', 'ㄴㅇㄹㄴㅇㄹㄴㅇ', 0, '2021-08-16'),
	(70, 'ㅇㄹㄴㅇㄹㄴㅇ', '123', 'ㄴㅇㄹㄴㅇㄹㄴㅇ', 0, '2021-08-16'),
	(71, 'ㅇㄹㄴㅇㄹㄴㅇ', '123', 'ㄴㅇㄹㄴㅇㄹㄴㅇ', 0, '2021-08-16'),
	(72, 'ㅇㄹㄴㅇㄹㄴㅇ', '123', 'ㄴㅇㄹㄴㅇㄹㄴㅇ', 0, '2021-08-16'),
	(73, 'ㅇㄹㄴㅇㄹㄴㅇ', '123', 'ㄴㅇㄹㄴㅇㄹㄴㅇ', 0, '2021-08-16'),
	(74, 'ㅇㄹㄴㅇㄹㄴㅇ', '123', 'ㄴㅇㄹㄴㅇㄹㄴㅇ', 0, '2021-08-16'),
	(75, '엄익균', '1111', 'CSS 해줘!', 0, '2021-08-16'),
	(76, '엄익균', '123', 'CSS 해줘!', 0, '2021-08-16'),
	(77, '', '', '', 0, '2021-08-16'),
	(78, '엄익균', '1234', 'css 해줘!!!!', 0, '2021-08-17'),
	(79, '엄익균', '1234', 'HTML 해줘!', 0, '2021-08-17'),
	(80, '엄익균', '1234', 'css 해줘!', 0, '2021-08-17'),
	(81, '123123123', '1234', '123', 0, '2021-08-17');
/*!40000 ALTER TABLE `request` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;