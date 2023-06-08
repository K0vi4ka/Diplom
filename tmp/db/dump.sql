-- MySQL dump 10.13  Distrib 8.0.31, for Linux (x86_64)
--
-- Host: localhost    Database: newstime
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `value` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `value` (`value`),
  UNIQUE KEY `value_2` (`value`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Спорт','2023-01-03 07:50:22','2023-01-03 07:50:22'),(2,'Политика','2023-01-03 07:50:29','2023-01-03 07:50:29'),(3,'Наука','2023-01-03 07:50:51','2023-01-03 07:50:51');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `value` varchar(255) DEFAULT NULL,
  `author` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `author` (`author`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`author`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (26,'Yadp',3,'2023-04-30 15:31:10','2023-04-30 15:31:10'),(27,'Yadp',3,'2023-04-30 15:34:18','2023-04-30 15:34:18'),(28,'Yes',3,'2023-04-30 15:35:57','2023-04-30 15:35:57'),(29,'And second yes',3,'2023-04-30 15:36:19','2023-04-30 15:36:19'),(34,'yes',3,'2023-05-02 06:14:11','2023-05-02 06:14:11'),(36,'next text\n',3,'2023-05-02 06:16:15','2023-05-02 06:16:15'),(37,'text',3,'2023-05-02 06:18:41','2023-05-02 06:18:41'),(38,'ПРосто пушечка\n',3,'2023-05-02 06:19:54','2023-05-02 06:19:54'),(39,'согласен\n',3,'2023-05-02 06:20:06','2023-05-02 06:20:06'),(40,'лул',3,'2023-05-02 06:22:54','2023-05-02 06:22:54'),(41,'нуы',3,'2023-05-02 06:28:37','2023-05-02 06:28:37'),(42,'some',3,'2023-05-02 06:31:14','2023-05-02 06:31:14'),(43,'ДААА!!!!',3,'2023-05-02 06:32:52','2023-05-02 06:32:52'),(44,'NEt',3,'2023-05-02 06:34:44','2023-05-02 06:34:44'),(45,'mDs',3,'2023-05-02 06:35:37','2023-05-02 06:35:37'),(46,'WORK',3,'2023-05-02 06:35:45','2023-05-02 06:35:45'),(51,'sdfasdfsdafsdadfs',3,'2023-05-19 10:26:42','2023-05-19 10:26:42'),(52,'asdfhasdfasdf',3,'2023-05-19 19:56:32','2023-05-19 19:56:32'),(53,'asdf',3,'2023-05-19 20:00:10','2023-05-19 20:00:10'),(54,'hkjj',3,'2023-05-19 20:02:55','2023-05-19 20:02:55'),(55,'asfadsf',3,'2023-05-19 20:04:54','2023-05-19 20:04:54'),(56,'asdf',3,'2023-05-19 20:07:15','2023-05-19 20:07:15'),(58,'afsdfas',3,'2023-05-19 20:10:11','2023-05-19 20:10:11'),(59,'asdsada',3,'2023-05-19 20:10:13','2023-05-19 20:10:13'),(61,'key',3,'2023-05-19 20:10:41','2023-05-19 20:10:41'),(62,'aasd',3,'2023-05-19 20:12:12','2023-05-19 20:12:12'),(63,'dasdsadad',3,'2023-05-19 20:12:22','2023-05-19 20:12:22'),(64,'asdfas',3,'2023-05-19 20:13:48','2023-05-19 20:13:48'),(66,'asdfasdf',2,'2023-05-19 20:18:36','2023-05-19 20:18:36'),(67,'chkgfgfk\n',2,'2023-05-19 20:20:04','2023-05-19 20:20:04'),(68,'sadfsdaffasd',2,'2023-05-19 20:21:05','2023-05-19 20:21:05'),(69,'asdf',2,'2023-05-20 11:28:16','2023-05-20 11:28:16'),(70,'asdfsad',2,'2023-05-20 11:35:23','2023-05-20 11:35:23'),(72,'NEW',2,'2023-05-20 11:43:49','2023-05-20 11:43:49'),(73,'sadf',2,'2023-05-20 11:46:03','2023-05-20 11:46:03'),(75,'asdf',2,'2023-05-20 11:49:13','2023-05-20 11:49:13'),(76,'asdasd',2,'2023-05-20 11:50:46','2023-05-20 11:50:46'),(78,'asdf',2,'2023-05-20 11:54:33','2023-05-20 11:54:33'),(80,'asd',2,'2023-05-20 11:58:09','2023-05-20 11:58:09'),(81,'asddsasad',2,'2023-05-20 11:58:54','2023-05-20 11:58:54'),(96,'фыаывафыва',3,'2023-06-05 21:56:49','2023-06-05 21:56:49'),(100,'asdfasdfasdf',3,'2023-06-05 22:01:34','2023-06-05 22:01:34'),(102,'фывафываф',3,'2023-06-05 22:21:28','2023-06-05 22:21:28'),(104,'НУ И ПРИЧЕМ ТУТ СПОРТ??? КТО ЭТО НАПИСАЛ',99,'2023-06-08 00:28:56','2023-06-08 00:28:56'),(105,'Я куплю это первым !!!!',99,'2023-06-08 00:32:44','2023-06-08 00:32:44'),(106,'Месси луччший!',99,'2023-06-08 00:33:50','2023-06-08 00:33:50'),(107,'Еда - это мышцы, а мышцы - это спорт.',2,'2023-06-08 00:34:56','2023-06-08 00:34:56'),(108,'Кто согласен со мной?\n',2,'2023-06-08 00:35:08','2023-06-08 00:35:08'),(109,'нет, я\n',2,'2023-06-08 00:35:22','2023-06-08 00:35:22'),(110,'Сколько фпс будет в CS?\n',2,'2023-06-08 00:36:06','2023-06-08 00:36:06');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commentpublic`
--

DROP TABLE IF EXISTS `commentpublic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `commentpublic` (
  `id` int NOT NULL AUTO_INCREMENT,
  `commentId` int DEFAULT NULL,
  `publicId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `commentpublic_commentId_publicId_unique` (`commentId`,`publicId`),
  KEY `publicId` (`publicId`),
  CONSTRAINT `commentpublic_ibfk_3` FOREIGN KEY (`commentId`) REFERENCES `comment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `commentpublic_ibfk_4` FOREIGN KEY (`publicId`) REFERENCES `publications` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commentpublic`
--

LOCK TABLES `commentpublic` WRITE;
/*!40000 ALTER TABLE `commentpublic` DISABLE KEYS */;
INSERT INTO `commentpublic` VALUES (96,96,43,'2023-06-05 21:56:49','2023-06-05 21:56:49'),(100,100,43,'2023-06-05 22:01:34','2023-06-05 22:01:34'),(102,102,43,'2023-06-05 22:21:28','2023-06-05 22:21:28'),(104,104,54,'2023-06-08 00:28:56','2023-06-08 00:28:56'),(105,105,57,'2023-06-08 00:32:44','2023-06-08 00:32:44'),(106,106,50,'2023-06-08 00:33:50','2023-06-08 00:33:50'),(107,107,54,'2023-06-08 00:34:56','2023-06-08 00:34:56'),(108,108,54,'2023-06-08 00:35:08','2023-06-08 00:35:08'),(109,109,57,'2023-06-08 00:35:22','2023-06-08 00:35:22'),(110,110,55,'2023-06-08 00:36:06','2023-06-08 00:36:06');
/*!40000 ALTER TABLE `commentpublic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likesForPublication`
--

DROP TABLE IF EXISTS `likesForPublication`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likesForPublication` (
  `id` int NOT NULL AUTO_INCREMENT,
  `publicId` int NOT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `publicId` (`publicId`),
  KEY `userId` (`userId`),
  CONSTRAINT `likesForPublication_ibfk_1` FOREIGN KEY (`publicId`) REFERENCES `publications` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `likesForPublication_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likesForPublication`
--

LOCK TABLES `likesForPublication` WRITE;
/*!40000 ALTER TABLE `likesForPublication` DISABLE KEYS */;
INSERT INTO `likesForPublication` VALUES (27,43,3,'2023-06-06 20:47:41','2023-06-06 20:47:41'),(28,57,99,'2023-06-08 00:32:52','2023-06-08 00:32:52'),(29,54,2,'2023-06-08 00:37:00','2023-06-08 00:37:00');
/*!40000 ALTER TABLE `likesForPublication` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `linkeSource`
--

DROP TABLE IF EXISTS `linkeSource`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `linkeSource` (
  `id` int NOT NULL AUTO_INCREMENT,
  `source` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `source` (`source`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `linkeSource`
--

LOCK TABLES `linkeSource` WRITE;
/*!40000 ALTER TABLE `linkeSource` DISABLE KEYS */;
INSERT INTO `linkeSource` VALUES (1,'asdas','2023-04-29 21:46:51','2023-04-29 21:46:51'),(2,'asdasddasasd','2023-04-29 21:46:51','2023-04-29 21:46:51'),(3,'asddasasdasdas','2023-04-29 21:48:09','2023-04-29 21:48:09'),(4,'asdasdasdasdasds','2023-04-29 21:48:09','2023-04-29 21:48:09'),(5,' elem.author','2023-04-29 21:49:58','2023-04-29 21:49:58'),(7,'Автомобильные новости','2023-04-29 21:50:52','2023-04-29 21:50:52'),(8,'Daily-Motor.Ru','2023-04-29 21:50:52','2023-04-29 21:50:52'),(9,'Сетевое издание Inkazan.ru','2023-05-02 09:52:55','2023-05-02 09:52:55'),(10,'GISMETEO.Новости','2023-05-02 09:52:55','2023-05-02 09:52:55'),(13,'3DNews','2023-05-03 08:24:44','2023-05-03 08:24:44'),(14,'МИР 24','2023-05-03 08:24:44','2023-05-03 08:24:44'),(18,'Life.ru','2023-05-11 11:05:23','2023-05-11 11:05:23'),(19,'Новости — РЗН.ИНФО','2023-05-11 11:05:23','2023-05-11 11:05:23'),(23,'РБК Спорт','2023-05-20 13:02:12','2023-05-20 13:02:12'),(24,'Sports.ru','2023-05-20 13:02:12','2023-05-20 13:02:12'),(25,'Sport24.ru - новости спорта онлайн в России и мире','2023-05-20 13:02:12','2023-05-20 13:02:12'),(26,'news.Sportbox.ru','2023-05-20 13:02:12','2023-05-20 13:02:12'),(27,'Бомбардир.ру','2023-05-20 13:02:12','2023-05-20 13:02:12'),(29,'Палач','2023-05-20 13:08:13','2023-05-20 13:08:13'),(30,'Спорт-Экспресс','2023-05-20 13:08:43','2023-05-20 13:08:43'),(44,'Life4me.plus по-русски','2023-05-20 13:12:01','2023-05-20 13:12:01'),(45,'Properm.ru - новости Перми','2023-05-20 13:12:01','2023-05-20 13:12:01'),(46,'BLITZ.plus','2023-05-20 13:13:03','2023-05-20 13:13:03'),(52,'Naked Science','2023-05-20 13:25:10','2023-05-20 13:25:10'),(53,'Meduza','2023-05-20 13:25:10','2023-05-20 13:25:10'),(57,'ТестовыйПуть','2023-05-22 16:37:31','2023-05-22 16:37:31'),(59,'Спорт Mail.ru','2023-05-22 16:40:32','2023-05-22 16:40:32'),(60,'Китайские автомобили','2023-05-22 16:41:53','2023-05-22 16:41:53'),(61,'КЛОПС - главный новостной сайт Калининграда','2023-05-22 16:42:01','2023-05-22 16:42:01'),(62,'Shazoo','2023-05-22 16:43:23','2023-05-22 16:43:23'),(63,'Наавтотрассе.ру','2023-05-22 16:45:10','2023-05-22 16:45:10'),(64,'ЕНВ','2023-05-22 16:45:10','2023-05-22 16:45:10'),(65,'ForkLog','2023-05-22 16:45:10','2023-05-22 16:45:10'),(66,'LiveJournal','2023-05-22 17:04:15','2023-05-22 17:04:15'),(67,'AstroNews.ru','2023-05-22 17:04:15','2023-05-22 17:04:15'),(68,'Рабочий Путь - все новости Смоленска','2023-05-22 17:04:15','2023-05-22 17:04:15'),(69,'Кубанские Новости','2023-06-05 14:30:46','2023-06-05 14:30:46'),(70,'Сибирь Реалии','2023-06-05 14:30:46','2023-06-05 14:30:46'),(71,'URA.RU','2023-06-05 15:58:57','2023-06-05 15:58:57'),(72,'Интерфакс','2023-06-06 20:57:29','2023-06-06 20:57:29'),(73,'DTF','2023-06-06 21:01:01','2023-06-06 21:01:01');
/*!40000 ALTER TABLE `linkeSource` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `linkedNews`
--

DROP TABLE IF EXISTS `linkedNews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `linkedNews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `source` int DEFAULT NULL,
  `link` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `categoryId` int DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `title` (`title`),
  UNIQUE KEY `source` (`source`),
  UNIQUE KEY `link` (`link`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `linkedNews_ibfk_1` FOREIGN KEY (`source`) REFERENCES `linkeSource` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `linkedNews_ibfk_2` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `linkedNews`
--

LOCK TABLES `linkedNews` WRITE;
/*!40000 ALTER TABLE `linkedNews` DISABLE KEYS */;
INSERT INTO `linkedNews` VALUES (1,'«Джеймс Уэбб» нашел рекордно далекое протоскопление галактик в очень ранней Вселенной - N + 1',1,'https://news.google.com/rss/articles/CBMiOWh0dHBzOi8vbnBsdXMxLnJ1L25ld3MvMjAyMy8wNC8yNy9wcm90b2NsdXN0ZXItZWFybHktandzdNIBPWh0dHBzOi8vbnBsdXMxLnJ1L25ld3MvMjAyMy8wNC8yNy9wcm90b2NsdXN0ZXItZWFybHktandzdC9hbXA?oc=5',3,'2023-04-27 15:12:00','2023-04-29 21:46:51','2023-04-29 21:46:51'),(2,'\"Мелодии Вселенной\": космическая музыка от НАСА - Euronews Русский',2,'https://news.google.com/rss/articles/CBMiaGh0dHBzOi8vcnUuZXVyb25ld3MuY29tL25leHQvMjAyMy8wNC8yNy9uYXNhLXJlbGVhc2VzLXNwZWN0YWN1bGFyLWFsYnVtLWZlYXR1cmluZy1zb3VuZHMtb2YtdGhlLXVuaXZlcnNl0gEA?oc=5',3,'2023-04-27 14:01:02','2023-04-29 21:46:52','2023-04-29 21:46:52'),(6,'В Россию официально приходит еще один китайский автобренд - Автомобильные новости',7,'https://news.google.com/rss/articles/CBMiH2h0dHBzOi8vbmV3cy5kcm9tLnJ1LzkzNzgwLmh0bWzSAQA?oc=5',2,'2023-04-28 10:53:05','2023-04-29 21:50:52','2023-04-29 21:50:52'),(7,'Назван лучший среднеразмерный седан в 2023 году – это не Toyota Camry - Daily-Motor.Ru',8,'https://news.google.com/rss/articles/CBMiJmh0dHBzOi8vZGFpbHktbW90b3IucnUvYXV0b25ld3MvMTE0NTcy0gEqaHR0cHM6Ly9kYWlseS1tb3Rvci5ydS9hdXRvbmV3cy8xMTQ1NzIvYW1w?oc=5',2,'2023-04-28 10:41:36','2023-04-29 21:50:52','2023-04-29 21:50:52'),(8,'Какова вероятность образования карстовых провалов под старыми домами Казани — Последние новости Казани и Татарстана - Сетевое издание Inkazan.ru',9,'https://news.google.com/rss/articles/CBMid2h0dHBzOi8vaW5rYXphbi5ydS9uZXdzLzIwMjMtMDQtMzAva2Frb3ZhLXZlcm95YXRub3N0LW9icmF6b3Zhbml5YS1rYXJzdG92eWgtcHJvdmFsb3YtcG9kLXN0YXJ5bWktZG9tYW1pLWthemFuaS0yOTE3MDQx0gEA?oc=5',3,'2023-04-30 17:57:14','2023-05-02 09:52:55','2023-05-02 09:52:55'),(9,'Ученые рассказали о необычном применении глиняных курительных трубок в старину - GISMETEO.Новости',10,'https://news.google.com/rss/articles/CBMidmh0dHBzOi8vd3d3Lmdpc21ldGVvLnJ1L25ld3Mvc2NpZW5jZS91Y2hlbnllLXJhc3NrYXphbGktby1uZW9ieWNobm9tLXByaW1lbmVuaWktZ2xpbnlhbnloLWt1cml0ZWxueWgtdHJ1Ym9rLXYtc3RhcmludS_SAQA?oc=5',3,'2023-04-30 15:21:00','2023-05-02 09:52:55','2023-05-02 09:52:55'),(10,'Российские ученые описали строение и поведение плиозавра - МИР 24',14,'https://news.google.com/rss/articles/CBMiWGh0dHBzOi8vbWlyMjQudHYvbmV3cy8xNjU1MDg2Ni9yb3NzaWlza2llLXVjaGVueWUtb3Bpc2FsaS1zdHJvZW5pZS1pLXBvdmVkZW5pZS1wbGlvemF2cmHSAQA?oc=5',3,'2023-05-02 06:45:00','2023-05-03 08:24:44','2023-05-03 08:24:44'),(11,'5 мужских ошибок, которые убивают страсть в отношениях раз и навсегда - Life.ru',18,'https://news.google.com/rss/articles/CBMiGWh0dHBzOi8vbGlmZS5ydS9wLzE1NzgxNTnSAR1odHRwczovL2xpZmUucnUvcC8xNTc4MTU5L2FtcA?oc=5',3,'2023-05-10 09:13:45','2023-05-11 11:05:23','2023-05-11 11:05:23'),(12,'Умерла 20-летняя студентка РГУ Виктория Бобкова — Новости — город Рязань на городском сайте RZN.info - Новости — РЗН.ИНФО',19,'https://news.google.com/rss/articles/CBMiVmh0dHBzOi8vd3d3LnJ6bi5pbmZvL25ld3MvMjAyMy81LzEwL3VtZXJsYS1zdHVkZW50a2Etcmd1LXZpa3Rvcml5YS1ib2Jrb3ZhLTI2ODI5Ny5odG1s0gEA?oc=5',3,'2023-05-10 07:29:48','2023-05-11 11:05:23','2023-05-11 11:05:23'),(13,'На ЧМ по хоккею от зрителя потребовали снять футболку с надписью «Россия» - РБК Спорт',23,'https://news.google.com/rss/articles/CBMiMWh0dHBzOi8vc3BvcnRyYmMucnUvbmV3cy82NDY3M2ZhZDlhNzk0NzI5OTY2Y2M4ZjnSATVodHRwczovL3Nwb3J0cmJjLnJ1L2FtcC9uZXdzLzY0NjczZmFkOWE3OTQ3Mjk5NjZjYzhmOQ?oc=5',1,'2023-05-19 09:03:18','2023-05-20 13:02:12','2023-05-20 13:02:12'),(14,'Агент Винисиуса назвал единственное место, куда бразилец может перейти из «Реала» - Бомбардир.ру',27,'https://news.google.com/rss/articles/CBMicGh0dHBzOi8vYm9tYmFyZGlyLnJ1L25ld3MvNjk2ODg0LWFnZW50LXZpbmlzaXVzYS1uYXp2YWwtZWRpbnN0dmVubm9lLW1lc3RvLWt1ZGEtYnJhemlsZWMtbW96aGV0LXBlcmV5dGktaXotcmVhbGHSASRodHRwczovL2JvbWJhcmRpci5ydS9uZXdzLzY5Njg4NC9hbXA?oc=5',1,'2023-05-19 05:59:00','2023-05-20 13:02:12','2023-05-20 13:02:12'),(15,'Чем в России заменяют Fanta и Mirinda? Попробовали все апельсиновые газировки - Палач',29,'https://news.google.com/rss/articles/CBMiNGh0dHBzOi8vY2xpY2stb3ItZGllLnJ1LzIwMjMvMDUvbmUtZmFudGEtbmUtbWlyaW5kYS_SAQA?oc=5',2,'2023-05-18 21:53:29','2023-05-20 13:08:13','2023-05-20 13:08:13'),(16,'У учёных остались 2 задачи в сфере ВИЧ: разработать вакцину и уничтожить вирусный резервуар - Life4me.plus по-русски',44,'https://news.google.com/rss/articles/CBMiLGh0dHBzOi8vbGlmZTRtZS5wbHVzL3J1L25ld3MvdmFrdHNpbmEtMTAwNzQv0gFBaHR0cHM6Ly9saWZlNG1lLnBsdXMvcnUvYW1wL2E3ZTgwZDJkLWU3NDgtNDQ3OC04NjRmLWU4MGM4Y2Q3NGQ0Zi8?oc=5',3,'2023-05-18 10:20:05','2023-05-20 13:12:01','2023-05-20 13:12:01'),(17,'«Был сброс какой-то химии». Жители Прикамья пожаловались на гибель рыб в реке — Последние новости Перми и края - Properm.ru - новости Перми',45,'https://news.google.com/rss/articles/CBMidWh0dHBzOi8vcHJvcGVybS5ydS9uZXdzLzIwMjMtMDUtMTgvYnlsLXNicm9zLWtha295LXRvLWhpbWlpLXpoaXRlbGktcHJpa2FteWEtcG96aGFsb3ZhbGlzLW5hLWdpYmVsLXJ5Yi12LXJla2UtMjkzMTUwOdIBAA?oc=5',3,'2023-05-18 09:56:00','2023-05-20 13:12:01','2023-05-20 13:12:01'),(18,'США хотят вернуть в строй «мертвый» космический телескоп - Naked Science ',52,'https://news.google.com/rss/articles/CBMiKWh0dHBzOi8vbmFrZWQtc2NpZW5jZS5ydS9jb21tdW5pdHkvODQ5MzE10gEA?oc=5',3,'2023-05-19 08:48:49','2023-05-20 13:25:10','2023-05-20 13:25:10'),(28,'Как космические компании планируют строить дороги и базы на Луне - Shazoo',62,'https://news.google.com/rss/articles/CBMiZGh0dHBzOi8vc2hhem9vLnJ1LzIwMjMvMDUvMjEvMTQzNjg4L2thay1rb3NtaWNlc2tpZS1rb21wYW5paS1wbGFuaXJ1aXV0LXN0cm9pdC1kb3JvZ2ktaS1iYXp5LW5hLWx1bmXSAQA?oc=5',3,'2023-05-21 14:00:00','2023-05-22 16:43:23','2023-05-22 16:43:23'),(29,'Представлено новое кросс-купе ЗИЛ-130 \"Москва\" 2023-2024 для российского бездорожья - Наавтотрассе.ру',63,'https://news.google.com/rss/articles/CBMiUGh0dHBzOi8vbmFhdnRvdHJhc3NlLnJ1L3JlbmRlcnkva3Jvc3Mta3VwZS16aWwtMTMwLW1vc2t2YS0yMDIzLTIwMjQtcmVuZGVyeS5odG1s0gEA?oc=5',2,'2023-05-21 01:01:23','2023-05-22 16:45:10','2023-05-22 16:45:10'),(30,'Чистотел обладает скрытым потенциалом: раскрываем его лекарственное и практическое применение | 20.05.2023 | NVL - ЕНВ',64,'https://news.google.com/rss/articles/CBMiKmh0dHBzOi8vbm92b3N0aXZsLnJ1L25ld3MvMjAyMzA1MjAvMzQ2MDIyL9IBAA?oc=5',2,'2023-05-20 18:25:25','2023-05-22 16:45:10','2023-05-22 16:45:10'),(31,'Футболисты «Спартака» обыграли ЦСКА в матче РПЛ - Спорт Mail.ru',59,'https://news.google.com/rss/articles/CBMiOGh0dHBzOi8vc3BvcnRtYWlsLnJ1L25ld3MvZm9vdGJhbGwtcnVzLXByZW1pZXIvNTYzMDE2MjIv0gE8aHR0cHM6Ly9zcG9ydG1haWwucnUvYW1wL25ld3MvZm9vdGJhbGwtcnVzLXByZW1pZXIvNTYzMDE2MjIv?oc=5',1,'2023-05-21 15:38:59','2023-05-22 16:48:04','2023-05-22 16:48:04'),(34,'«Спартак» не может, судья поможет. У ЦСКА куча вопросов к Карасёву после дерби - news.Sportbox.ru',26,'https://news.google.com/rss/articles/CBMioQFodHRwczovL25ld3Muc3BvcnRib3gucnUvVmlkeV9zcG9ydGEvRnV0Ym9sL1J1c3NpYS9wcmVtaWVyX2xlYWd1ZS9zcGJuZXdzX05JMTg5MjE5Ml9TcGFydGFrX25lX21vemhldF9zdWRqYV9wb21vemhldF9VX0NTS0Ffa3VjaGFfdm9wcm9zb3Zfa19LYXJhc292dV9wb3NsZV9kZXJiadIBAA?oc=5',1,'2023-05-21 16:08:15','2023-05-22 16:58:58','2023-05-22 16:58:58'),(36,'Сексуальная спортсменка - LiveJournal',66,'https://news.google.com/rss/articles/CBMiLmh0dHBzOi8vcHN5dGVhbWFuLmxpdmVqb3VybmFsLmNvbS8xNzUxNzUzLmh0bWzSATRodHRwczovL3BzeXRlYW1hbi5saXZlam91cm5hbC5jb20vMTc1MTc1My5odG1sP2FtcD0x?oc=5',3,'2023-05-21 04:07:30','2023-05-22 17:04:15','2023-05-22 17:04:15'),(37,'Солнечный телескоп Дэниела К. Иноуе опубликовал новые снимки - AstroNews.ru',67,'https://news.google.com/rss/articles/CBMiQmh0dHBzOi8vYXN0cm9uZXdzLnJ1L2NnaS1iaW4vbW5nLmNnaT9wYWdlPW5ld3MmbmV3cz0yMDIzMDUyMDIwMjQwOdIBRWh0dHBzOi8vd3d3LmFzdHJvbmV3cy5ydS9jZ2ktYmluL21uZy5jZ2k_cGFnZT1hbXAmbmV3cz0yMDIzMDUyMDIwMjQwOQ?oc=5',3,'2023-05-20 18:09:38','2023-05-22 17:04:15','2023-05-22 17:04:15'),(38,'В Смоленске ищут добровольцев среди близнецов для научного эксперимента - Рабочий Путь - все новости Смоленска',68,'https://news.google.com/rss/articles/CBMieWh0dHBzOi8vd3d3LnJhYm9jaHktcHV0LnJ1L25ld3MvMTc5NjMxLXYtc21vbGVuc2tlLWlzaGNodXQtZG9icm92b2x0c2V2LXNyZWRpLWJsaXpuZXRzb3YtZGx5YS1uYXVjaG5vZ28tZWtzcGVyaW1lbnRhLmh0bWzSAQA?oc=5',3,'2023-05-20 16:47:00','2023-05-22 17:04:15','2023-05-22 17:04:15'),(40,'В России создали систему поиска плагиата на 100 языках мира - Кубанские Новости',69,'https://news.google.com/rss/articles/CBMiaGh0dHBzOi8va3VibmV3cy5ydS9vYnNoY2hlc3R2by8yMDIzLzA2LzA0L3Ytcm9zc2lpLXNvemRhbGktc2lzdGVtdS1wb2lza2EtcGxhZ2lhdGEtbmEtMTAwLXlhenlrYWtoLW1pcmEv0gFsaHR0cHM6Ly9rdWJuZXdzLnJ1L2FtcC9vYnNoY2hlc3R2by8yMDIzLzA2LzA0L3Ytcm9zc2lpLXNvemRhbGktc2lzdGVtdS1wb2lza2EtcGxhZ2lhdGEtbmEtMTAwLXlhenlrYWtoLW1pcmEv?oc=5',3,'2023-06-04 12:21:47','2023-06-05 14:30:46','2023-06-05 14:30:46'),(41,'\"Мы – капля в океане космоса\". Астрофотография как образ жизни - Сибирь Реалии',70,'https://news.google.com/rss/articles/CBMiZGh0dHBzOi8vd3d3LnNpYnJlYWwub3JnL2EvbXkta2FwbHlhLXYtb2tlYW5lLWtvc21vc2EtYXN0cm9mb3RvZ3JhZml5YS1rYWstb2JyYXotemhpem5pLzMyNDI2MzA5Lmh0bWzSAWZodHRwczovL3d3dy5zaWJyZWFsLm9yZy9hbXAvbXkta2FwbHlhLXYtb2tlYW5lLWtvc21vc2EtYXN0cm9mb3RvZ3JhZml5YS1rYWstb2JyYXotemhpem5pLzMyNDI2MzA5Lmh0bWw?oc=5',3,'2023-06-04 03:25:34','2023-06-05 14:30:46','2023-06-05 14:30:46'),(47,'Что произошло в мире науки. Вечерний дайджест - Интерфакс',72,'https://news.google.com/rss/articles/CBMiJGh0dHBzOi8vd3d3LmludGVyZmF4LnJ1L3dvcmxkLzkwNDg3NNIBImh0dHBzOi8vd3d3LmludGVyZmF4LnJ1L2FtcC85MDQ4NzQ?oc=5',3,'2023-06-05 15:00:00','2023-06-06 20:57:29','2023-06-06 20:57:29'),(51,'Акатьева, Валиева, Загитова и Петросян пробежали трусцой «Забег на Никольской» и остановились перед финишем, п - Sports.ru',24,'https://news.google.com/rss/articles/CBMie2h0dHBzOi8vd3d3LnNwb3J0cy5ydS9maWd1cmUtc2thdGluZy8xMTE1MTgzOTU0LWFrYXRldmEtdmFsaWV2YS16YWdpdG92YS1pLXBldHJvc3lhbi1wcm9iZXpoYWxpLXRydXNjem9qLXphYmVnLW5hLW5pa28uaHRtbNIBcWh0dHBzOi8vd3d3LnNwb3J0cy5ydS9hbXAvbmV3cy8xMTE1MTgzOTU0LWFrYXRldmEtdmFsaWV2YS16YWdpdG92YS1pLXBldHJvc3lhbi1wcm9iZXpoYWxpLXRydXNjem9qLXphYmVnLW5hLW5pa28v?oc=5',1,'2023-06-05 17:42:08','2023-06-06 20:59:24','2023-06-06 20:59:24'),(55,'Акции Apple обновили рекорд перед возможной презентацией гарнитуры смешанной реальности — Жизнь на DTF - DTF',73,'https://news.google.com/rss/articles/CBMidGh0dHBzOi8vZHRmLnJ1L2xpZmUvMTg2OTkxOC1ha2NpaS1hcHBsZS1vYm5vdmlsaS1yZWtvcmQtcGVyZWQtdm96bW96aG5veS1wcmV6ZW50YWNpZXktZ2Fybml0dXJ5LXNtZXNoYW5ub3ktcmVhbG5vc3Rp0gEA?oc=5',2,'2023-06-05 16:49:39','2023-06-06 21:01:47','2023-06-06 21:01:47');
/*!40000 ALTER TABLE `linkedNews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
  `id` int NOT NULL AUTO_INCREMENT,
  `newsName` varchar(255) DEFAULT NULL,
  `filePath` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `newsName` (`newsName`),
  UNIQUE KEY `filePath` (`filePath`),
  UNIQUE KEY `newsName_2` (`newsName`),
  UNIQUE KEY `filePath_2` (`filePath`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (31,'А что случилось','news-storage/4234d11d0c5aa12ad37bb319d7099e1ca3ffdca1dd72124ca6bf58e76de4771b','2023-05-17 19:03:31','2023-05-17 19:03:31'),(32,'А что случилось!','news-storage/b94de4469e3185a53bb037c59f180e7f3fa3447e7104b21ba0b482a672d8f327','2023-05-17 19:05:39','2023-05-17 19:05:39'),(33,'А что случилось!!','news-storage/bb90d496aec734542dffe7fae0d728da25d20e492c4f98ac794f3a11eda928e3','2023-05-17 19:07:08','2023-05-17 19:07:08'),(34,'А что случилось!!!','news-storage/b71f0ace11822055613317c876f1e386fdd06ef444909e5c4825889b59c972c1','2023-05-17 19:11:32','2023-05-17 19:11:32'),(35,'ДОПОМОЖИТЕ МЭНИ','news-storage/4173d879b9969ccce3ff12cb11febc75a3ec1e6efb712d75d44ae290b2d17796','2023-05-17 21:11:25','2023-05-17 21:11:25'),(36,'ДОПОМОЖИТЕ МЭНИ!','news-storage/da81cd018cb1e1944da71a832d967572e5c1cb7e88e9693ecda240acab33b995','2023-05-17 21:14:06','2023-05-17 21:14:06'),(37,'NTN','news-storage/8755303766aba26b4d0608d2a292b94230674ba569e0979e391fe27883594882','2023-05-17 21:15:18','2023-05-17 21:15:18'),(38,'NTN1','news-storage/d4a8df54bc11d4f729d4e80d9f803666b5365e86c936b301c1a54c203c74d29f','2023-05-17 21:17:16','2023-05-17 21:17:16'),(39,'213','news-storage/d48ff4b2f68a10fd7c86f185a6ccede0dc0f2c48538d697cb33b6ada3f1e85db','2023-05-17 21:19:11','2023-05-17 21:19:11'),(40,'','news-storage/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855','2023-05-17 21:20:56','2023-05-17 21:20:56'),(43,'ФСТВС ответила Уоллесу: Запад завидует надежности российского оружия','news-storage/9ecc7409212113c920f1fa33f4e6f227a82293ecd2db562a37757f59db55a73c','2023-06-05 19:43:24','2023-06-05 19:43:24'),(44,'Россия подпишет со странами СНГ соглашение о данных мониторинга радиации','news-storage/b0771ae09378b272cc8e2ddb6add62414f10d668586f03ee67ab11df63316935','2023-06-06 20:55:24','2023-06-06 20:55:24'),(45,'Рачков об итогах голосования в состав непостоянных членов СБ ООН: продолжает развиваться политическое лицемерие','news-storage/9dbb010f583fcd1ceb0d05472eb09a2c8d2214f94df9f9b003e1013d186959ab','2023-06-07 16:35:45','2023-06-07 16:35:45'),(46,'Рыбаков о выборах в СБ ООН: на страны оказывалось давление с принуждением голосовать против Беларуси','news-storage/3d4767c7cc0d452310f352922d9cbbf10c1c9fede51874c99ef894ced3366483','2023-06-07 16:37:21','2023-06-07 16:37:21'),(47,'МИД: неизбрание Беларуси в Совет Безопасности ООН не снизит нашу активность в организации','news-storage/552abfd2aba86ca5343e2aa5634811de9f5a07146d85a25e93c536e1f2731aca','2023-06-07 16:38:23','2023-06-07 16:38:23'),(48,'Беларусь и Таджикистан подтвердили готовность к активизации политического и экономического диалога','news-storage/16af722aab1ec01eee147583ae7f62847598b93c739a952f2a7b6d15312eb47f','2023-06-07 16:39:22','2023-06-07 16:39:22'),(49,'Головченко прибыл с рабочим визитом в Сочи','news-storage/ff5cc99ccc61921e60f909cb52b1e215ce41d84934865422ae7955ee28e942ac','2023-06-07 16:40:48','2023-06-07 16:40:48'),(50,'Романо: Месси в ближайшие часы объявит о переходе в «Интер Майами»','news-storage/4b3c792a14830d3cfcf3270475af7961638a657b0255aa8f5ba2bc53545645e5','2023-06-07 17:25:46','2023-06-07 17:25:46'),(51,'Олимпийский чемпион Попов выступил против выступления россиян в нейтральном статусе на Олимпиаде-2024','news-storage/0f7217d3176b992d660f2f7b15da7f35ee8284b101abbadee848cab069fb9bbf','2023-06-07 17:27:50','2023-06-07 17:27:50'),(52,'Пятибратов не верит, что «Зениту» составят конкуренцию в следующем сезоне','news-storage/f4a3e089259b158308943cf00711d67cc1af4b524069992e55874b8df960810a','2023-06-07 17:30:04','2023-06-07 17:30:04'),(53,'Пятибратов назвал лучших игроков и тренеров сезона в РПЛ','news-storage/6293ca4b8eef7b394606e6f5965f8f1224e2d2744e06495d3394395351fbd8dd','2023-06-07 17:32:02','2023-06-07 17:32:02'),(54,'Диетолог назвала самую полезную часть в курице','news-storage/d9ba5db122910f1adb0141b28944fdd59a0d8c406c5682ff658131f43904dbf7','2023-06-07 17:32:59','2023-06-07 17:32:59'),(56,'ASUS представила видеокарту GeForce RTX 4070 Atlas Shark','news-storage/1acd689d34b1f7e2b948f7ce525dd1073ce41a50455fc5ddd6f3bf1e7218d369','2023-06-07 18:03:32','2023-06-07 18:03:32'),(57,'Умные телевизоры Sber начали работать быстрее','news-storage/bb0266f4c73ca580e8d5fad009e8d4effe0ce0278eb08ae74ef852638ff41418','2023-06-07 18:04:49','2023-06-07 18:04:49'),(58,'Apple представила устройство смешанной реальности Vision Pro по цене в 3500 долларов','news-storage/206a73b3df979213b94fa89acde8bab33641dd9fa36de11afb9966e105f4e866','2023-06-07 18:07:48','2023-06-07 18:07:48');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publications`
--

DROP TABLE IF EXISTS `publications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `newsId` int DEFAULT NULL,
  `usersId` int DEFAULT NULL,
  `categoryId` int DEFAULT NULL,
  `views` int DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `newsId` (`newsId`),
  KEY `usersId` (`usersId`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `publications_ibfk_4` FOREIGN KEY (`newsId`) REFERENCES `news` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `publications_ibfk_5` FOREIGN KEY (`usersId`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `publications_ibfk_6` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publications`
--

LOCK TABLES `publications` WRITE;
/*!40000 ALTER TABLE `publications` DISABLE KEYS */;
INSERT INTO `publications` VALUES (40,40,3,2,40,'2023-03-17 21:20:57','2023-05-17 21:20:57'),(43,43,3,2,49,'2023-03-05 19:43:24','2023-06-07 16:40:56'),(44,44,3,2,45,'2023-04-06 20:55:24','2023-06-07 16:31:22'),(45,45,3,2,60,'2023-04-07 16:35:45','2023-06-07 16:35:45'),(46,46,3,2,90,'2023-04-07 16:37:21','2023-06-07 16:47:48'),(47,47,3,2,4,'2023-05-07 16:38:23','2023-06-08 00:32:58'),(48,48,3,2,55,'2023-05-07 16:39:22','2023-06-07 16:39:22'),(49,49,3,2,81,'2023-06-07 16:40:49','2023-06-07 16:47:38'),(50,50,2,1,3,'2023-04-07 17:25:46','2023-06-08 00:33:14'),(51,51,2,1,30,'2023-03-07 17:27:50','2023-06-07 17:33:15'),(52,52,2,1,50,'2023-05-07 17:30:04','2023-06-07 17:33:10'),(53,53,2,1,100,'2023-06-07 17:32:02','2023-06-07 17:33:07'),(54,54,2,1,29,'2023-06-07 17:32:59','2023-06-08 00:36:59'),(55,56,2,3,101,'2023-03-07 18:03:32','2023-06-08 00:35:38'),(56,57,2,3,100,'2023-04-07 18:04:49','2023-06-07 18:08:07'),(57,58,2,3,102,'2023-05-07 18:07:48','2023-06-08 00:35:12');
/*!40000 ALTER TABLE `publications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `description` (`description`),
  UNIQUE KEY `description_2` (`description`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'user','2023-01-03 07:54:19','2023-01-03 07:54:19'),(2,'admin','2023-01-03 07:54:45','2023-01-03 07:54:45');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unconfirmUser`
--

DROP TABLE IF EXISTS `unconfirmUser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `unconfirmUser` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `token` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `userId` (`userId`),
  UNIQUE KEY `token` (`token`),
  CONSTRAINT `unconfirmUser_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unconfirmUser`
--

LOCK TABLES `unconfirmUser` WRITE;
/*!40000 ALTER TABLE `unconfirmUser` DISABLE KEYS */;
/*!40000 ALTER TABLE `unconfirmUser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user-roles`
--

DROP TABLE IF EXISTS `user-roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user-roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `rolesId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user-roles_rolesId_userId_unique` (`userId`,`rolesId`),
  KEY `rolesId` (`rolesId`),
  CONSTRAINT `user-roles_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user-roles_ibfk_4` FOREIGN KEY (`rolesId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user-roles`
--

LOCK TABLES `user-roles` WRITE;
/*!40000 ALTER TABLE `user-roles` DISABLE KEYS */;
INSERT INTO `user-roles` VALUES (2,2,2),(4,3,2),(6,4,2),(8,5,2),(10,6,2),(12,9,2),(14,10,2),(16,11,2),(18,13,2),(20,16,2),(22,17,2),(24,18,2),(50,48,1),(64,99,1);
/*!40000 ALTER TABLE `user-roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_token`
--

DROP TABLE IF EXISTS `user_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_token` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `user_token_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_token`
--

LOCK TABLES `user_token` WRITE;
/*!40000 ALTER TABLE `user_token` DISABLE KEYS */;
INSERT INTO `user_token` VALUES (1,2,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsImlhdCI6MTY4NjE4NDQ1OCwiZXhwIjoxNjg4Nzc2NDU4fQ.aEJTbr0l1kuJzi26DP3IpEoSNh5Klj_EtBpxjoZn1D0','2023-01-03 07:55:00','2023-06-08 00:34:18'),(2,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsImlhdCI6MTY4NDA3Njg2NCwiZXhwIjoxNjg2NjY4ODY0fQ.Mw9kXm5fEFICePqj21uhbmIIKqSq6frb-3nudmWtL70','2023-01-03 07:55:09','2023-05-14 15:07:44'),(4,4,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJzb21lbWFpbEBtYWlsLmNvbSIsImlhdCI6MTY3NTI0NzI0MCwiZXhwIjoxNjc3ODM5MjQwfQ.OWWi3064PLHSpnPVytB41nMmn_w-J72g7R3z2JmzaBM','2023-02-01 10:27:20','2023-02-01 10:27:20'),(5,5,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJleGFtcGxlQG1haWwucnUiLCJpYXQiOjE2NzU1MDYzMzUsImV4cCI6MTY3ODA5ODMzNX0.t3ylKCysm12PFyElREwOlc-zwnKOvxPsnqLrlK6MXII','2023-02-04 10:25:35','2023-02-04 10:25:35'),(6,6,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJnZW5hbWFpbC5jb21AbWFpbC5jb20iLCJpYXQiOjE2NzU1MDY2NjYsImV4cCI6MTY3ODA5ODY2Nn0.-P8I5pObCvQc3S998DpdOz62HBuaFaDPe2CTmJvoe6s','2023-02-04 10:31:06','2023-02-04 10:31:06'),(7,9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiJhc2Rhc2RAbWFpbC5jb20iLCJpYXQiOjE2NzU1MDY3NTAsImV4cCI6MTY3ODA5ODc1MH0.YVPptiBPVpZhCpO4etYQN7AToc_zZ2mnBSmiJm9yh9k','2023-02-04 10:32:30','2023-02-04 10:32:30'),(8,10,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoiYWRzZGFkYUBtYWlsLmNvbSIsImlhdCI6MTY3NTUwNjgxMiwiZXhwIjoxNjc4MDk4ODEyfQ.h2MMAtgjw8ky7SaHvvQXi4h2FNehPT7RKVdyYFA6kYc','2023-02-04 10:33:32','2023-02-04 10:33:32'),(9,11,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImVtYWlsIjoiZGFzZGFzZHNhQG1haWwuY29tIiwiaWF0IjoxNjc1NTA2ODg0LCJleHAiOjE2NzgwOTg4ODR9.DYLmR6IcWLdubjkoIlDWKb9e9yhd-4byJMuE0y5gdiA','2023-02-04 10:34:44','2023-02-04 10:34:44'),(10,13,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImVtYWlsIjoicHVwYW1haWxAbWFpbC5jb20iLCJpYXQiOjE2NzY4MTMwODcsImV4cCI6MTY3OTQwNTA4N30.rpBx0p-erKF808LTsnvTs7iRcmn3yILEF-5dLgh0xpc','2023-02-19 13:24:47','2023-02-19 13:24:47'),(11,16,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImVtYWlsIjoibHVwYWluQG1haWwuY29tIiwiaWF0IjoxNjc2ODEzMjkzLCJleHAiOjE2Nzk0MDUyOTN9.3_uuEot4PxVcmSFANHtOf3lMImHCY4T60Md7wht53uA','2023-02-19 13:28:13','2023-02-19 13:28:13'),(12,17,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsImVtYWlsIjoiYXNkZGFzZHNAbWFpbC5jb20iLCJpYXQiOjE2NzY4MTMzODIsImV4cCI6MTY3OTQwNTM4Mn0.8CuGPKKptfka5yZzmKAKHfNJZ3a0Zgt5oRsk9ucZUTs','2023-02-19 13:29:42','2023-02-19 13:29:42'),(13,18,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImVtYWlsIjoiZXhtcGxAZ21haWwuY29tIiwiaWF0IjoxNjc5MDg3NDUwLCJleHAiOjE2ODE2Nzk0NTB9.4_S2fS64nrOtChvA1nD1VzDi0CjBB0K0KJF-17exC8w','2023-03-17 21:10:50','2023-03-17 21:10:50'),(14,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODQwNzcyMzgsImV4cCI6MTY4NjY2OTIzOH0.QSxjwxelXJRabHjfIFR6LMIG-7fErivvSjsn5hpcJ-Q','2023-05-14 15:13:58','2023-05-14 15:13:58'),(15,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODQwNzczNDYsImV4cCI6MTY4NjY2OTM0Nn0.7Slgk3YpW2LUzqxiqf7Hw0ffh9YHjgo40M3DjLnPLPc','2023-05-14 15:15:46','2023-05-14 15:15:46'),(16,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODQxNzM4MTksImV4cCI6MTY4Njc2NTgxOX0.MlHOpeO6al3Ei1YAB104DD7YqYbibNRbCJk6xAiVqxM','2023-05-15 18:03:39','2023-05-15 18:03:39'),(17,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODQxNzQzMjAsImV4cCI6MTY4Njc2NjMyMH0.yfpT0ZVvkFTc5Xjx2hUbFF4Jkwq7tQkh2qgHMLN7hlo','2023-05-15 18:12:00','2023-05-15 18:12:00'),(18,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODQxNzQ5NDQsImV4cCI6MTY4Njc2Njk0NH0.mvzFo0gLWmlo1dgIauAKWIpBBNiYXLgRIsCCPsg_ITM','2023-05-15 18:22:24','2023-05-15 18:22:24'),(19,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODQzNDg0NTYsImV4cCI6MTY4Njk0MDQ1Nn0.LGYkcQ9IGzzwq11aW0nEI9smaCz6c-0xrvkKjEAuR60','2023-05-17 18:34:16','2023-05-17 18:34:16'),(20,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODQzNTc4NDAsImV4cCI6MTY4Njk0OTg0MH0.bQK_1hPHm8ZcLS3otx2VsYOzVrzLgJWNnzoFdHh2xmg','2023-05-17 21:10:40','2023-05-17 21:10:40'),(21,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODQzNTkxNDIsImV4cCI6MTY4Njk1MTE0Mn0.dVqUJNcc2IOx7dmBvIkAC3qImcbV23Bgttwi9cc-ioo','2023-05-17 21:32:22','2023-05-17 21:32:22'),(22,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODQzNTkxNTMsImV4cCI6MTY4Njk1MTE1M30.mvrRGyEoFY2hbrBz108zlMUiCjwmrQWLpyjqzaTU7uA','2023-05-17 21:32:33','2023-05-17 21:32:33'),(23,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODQzNTkzMDMsImV4cCI6MTY4Njk1MTMwM30.Zjf11BCdIgWx2OjPkyhPYx_oeiNhqq753l_1Y3foSio','2023-05-17 21:35:03','2023-05-17 21:35:03'),(24,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODQzNTkzNjQsImV4cCI6MTY4Njk1MTM2NH0.9jq_qr4mVLIbOpPj9Co9j0qGs10kmR0KbqISCb-re24','2023-05-17 21:36:04','2023-05-17 21:36:04'),(25,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODQ0MTQ4MDgsImV4cCI6MTY4NzAwNjgwOH0.l3GkYI4q5T90sQiFLcR_GtyzIvAPS0nLamzATpMvmRo','2023-05-18 13:00:08','2023-05-18 13:00:08'),(26,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODQ0MTY4OTAsImV4cCI6MTY4NzAwODg5MH0.DOonbbxdQsolA5YnLz01sBo7SILqdfLvvNhIOP8RFTw','2023-05-18 13:34:50','2023-05-18 13:34:50'),(27,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODQ0MTk1OTEsImV4cCI6MTY4NzAxMTU5MX0.j5LDQezR1FWF59gLCHKygF7U4e2NGfnFrMlcutyQhYI','2023-05-18 14:19:51','2023-05-18 14:19:51'),(28,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODQ0MTk3MzEsImV4cCI6MTY4NzAxMTczMX0.7mUHnnYhTQUiGfTFNvMaRPp2TeCDMUpSgOrwvL7PgDI','2023-05-18 14:22:11','2023-05-18 14:22:11'),(29,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODQ0MTk5NTEsImV4cCI6MTY4NzAxMTk1MX0.z2n1l6TxZR4jGVoBDAGDeQO0FF-AfhPYHKq_jSeSwYQ','2023-05-18 14:25:51','2023-05-18 14:25:51'),(30,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODQ0MjAyMTMsImV4cCI6MTY4NzAxMjIxM30.Txk0VvcGTPlx78UcEVPVZXx8GV1-VdQd9uaOAfs6X-E','2023-05-18 14:30:13','2023-05-18 14:30:13'),(31,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODQ0MjA0MzEsImV4cCI6MTY4NzAxMjQzMX0.pz_bgFyMcvHY37SxXNVljTmiiISWMv-_uyrWB4EG0qE','2023-05-18 14:33:51','2023-05-18 14:33:51'),(32,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODQ0OTA2NzMsImV4cCI6MTY4NzA4MjY3M30.64ky5LqwcZtpDUyHyIfYREMJztRDcP95p5S4___19vA','2023-05-19 10:04:33','2023-05-19 10:04:33'),(33,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODQ0OTA5NjMsImV4cCI6MTY4NzA4Mjk2M30.zte4l1Eg1hB45D-ZvJnYCmQDbbx6fxGGrf8jL2xyZ_4','2023-05-19 10:09:23','2023-05-19 10:09:23'),(34,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODQ0OTEwMjgsImV4cCI6MTY4NzA4MzAyOH0.uMMcOtUACAoUmwB00PQvEb_UUtQlNgDB3KMmKvvpcQg','2023-05-19 10:10:28','2023-05-19 10:10:28'),(35,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODQ0OTE3NDUsImV4cCI6MTY4NzA4Mzc0NX0.IFd__kze8N22mF4lNlSQH5IxzuC_rjb2uAu9EolAUyM','2023-05-19 10:22:25','2023-05-19 10:22:25'),(36,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODQ1MjYxODcsImV4cCI6MTY4NzExODE4N30.Beqt_GoRIvH0rMHcQOiG4p-nocHEwCK1HhiUWmWQoFI','2023-05-19 19:56:27','2023-05-19 19:56:27'),(37,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODQ1ODU2MTEsImV4cCI6MTY4NzE3NzYxMX0.dOZzmHkuDR-2v6F-9PYjZ8KPqL9p1UoNux0qfuAbNdM','2023-05-20 12:26:51','2023-05-20 12:26:51'),(38,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODQ3NzM2MDgsImV4cCI6MTY4NzM2NTYwOH0.sjE6M-MCZ1sAfJ7jZO9HA_5WxrnKuFkb2hqOyqc52FI','2023-05-22 16:40:08','2023-05-22 16:40:08'),(39,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODU2OTc4MDEsImV4cCI6MTY4ODI4OTgwMX0.I33MKE4b41VpWpfkXxLLDHaknjKG-2gZtNSD4btOJiA','2023-06-02 09:23:21','2023-06-02 09:23:21'),(40,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODU5NzAxMTgsImV4cCI6MTY4ODU2MjExOH0.yV7TRGm_ElSpCLNxbsDOUy7jdBcq6l2BFdD_72GMWjM','2023-06-05 13:01:58','2023-06-05 13:01:58'),(48,48,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDgsImVtYWlsIjoidmFuaWEuemFtaXJhbG92QHlhbmRleC5ydSIsImlhdCI6MTY4NjA0NjA1NCwiZXhwIjoxNjg4NjM4MDU0fQ.I6k0SDIyhV95OHGxTgtRjxAtKMb2PyLATVflOgtYKM8','2023-06-05 14:21:37','2023-06-06 10:07:34'),(49,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODU5NzUxODQsImV4cCI6MTY4ODU2NzE4NH0.FgEFZk8pjJtnL_V8bwnIrfOSMOsoAA7n7akmEQ1lC0g','2023-06-05 14:26:24','2023-06-05 14:26:24'),(50,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODU5NzUzNzMsImV4cCI6MTY4ODU2NzM3M30.c9wvdOoYy9pYFydgzZq78I90MGE8kS-PuycIVn_TtYw','2023-06-05 14:29:33','2023-06-05 14:29:33'),(51,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODU5ODgwMjAsImV4cCI6MTY4ODU4MDAyMH0.JntwgUGbzv5KgMAF_IjvHbeQfOw_xK45PRjL9NpqVtQ','2023-06-05 18:00:20','2023-06-05 18:00:20'),(52,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODU5OTM3MTAsImV4cCI6MTY4ODU4NTcxMH0.W-S45XF-9T47eH_yZ4bf8sopIZRX8UrPNlFsTQBpLQ8','2023-06-05 19:35:10','2023-06-05 19:35:10'),(53,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODU5OTYyNDcsImV4cCI6MTY4ODU4ODI0N30.vUTlJ2s2hRNg3WBuDDK7_9Ddi7YIddrPFUdNfhqHIcE','2023-06-05 20:17:27','2023-06-05 20:17:27'),(54,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODU5OTYzMjYsImV4cCI6MTY4ODU4ODMyNn0.4_P4nli-uRnlPu8wM6Yd7-ZL-TWcgaUhQjr4dRl6G_s','2023-06-05 20:18:46','2023-06-05 20:18:46'),(55,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODYwMDM5NTcsImV4cCI6MTY4ODU5NTk1N30.jHvjAjEsQXkcBl3iIaPhOAa4va8_0OKQ3lRNvJr-21U','2023-06-05 22:25:57','2023-06-05 22:25:57'),(56,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODYwMDQxNzgsImV4cCI6MTY4ODU5NjE3OH0.BTQQMDqFgelCi2EdKp_HKXmjk2Le5tQtmDK5QOCYXng','2023-06-05 22:29:38','2023-06-05 22:29:38'),(57,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODYwMDQyMjgsImV4cCI6MTY4ODU5NjIyOH0.VwKFI1FHqPNBYvQyuuTpAVr0Ph59P1ATc02Jw5E1-k0','2023-06-05 22:30:28','2023-06-05 22:30:28'),(58,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODYwMDQyNjMsImV4cCI6MTY4ODU5NjI2M30.beoKrFZzCbjCPtvnisJxtQsIWvGiadmyF1C7ELVOaoA','2023-06-05 22:31:03','2023-06-05 22:31:03'),(59,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODYwMzc4NjksImV4cCI6MTY4ODYyOTg2OX0.eUTG5zeo6d4hhRitqDdo2mhOaJU1r8LyynkRLarJwkE','2023-06-06 07:51:09','2023-06-06 07:51:09'),(60,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODYwNDM0NDQsImV4cCI6MTY4ODYzNTQ0NH0.LtgOeO11rhGTT69kblOigvPfLE2XptUWV_FYyfN28VU','2023-06-06 09:24:04','2023-06-06 09:24:04'),(61,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODYwNDM3NDAsImV4cCI6MTY4ODYzNTc0MH0.SOs_Dg5_2IFzLD_ri809dHD0rKbAdNUvadIwWAlXQMQ','2023-06-06 09:29:00','2023-06-06 09:29:00'),(62,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODYwNDU2MjAsImV4cCI6MTY4ODYzNzYyMH0.w77W6l9xXVyUM9Yk_-WHevwfv3D0jyqwBn1SD3sKXz0','2023-06-06 10:00:20','2023-06-06 10:00:20'),(71,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODYwODQyODQsImV4cCI6MTY4ODY3NjI4NH0.68eDW0WJFvJZncrtZ8fBRlHPvnN9cGAbFpLsBCifJ6c','2023-06-06 20:44:44','2023-06-06 20:44:44'),(72,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODYwODQzMzQsImV4cCI6MTY4ODY3NjMzNH0.40Spm9WX_xFe9dRnotEbnXxP0iw0igsAfh-K_SXVkKc','2023-06-06 20:45:34','2023-06-06 20:45:34'),(73,99,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTksImVtYWlsIjoiemFtaXJhbG92aXZhbjVAZ21haWwuY29tIiwiaWF0IjoxNjg2MDg0Mzg2LCJleHAiOjE2ODg2NzYzODZ9.GKglQRv0zCtfqX2JjhFH5YvN5B9kpLsYWLQW9ga3Er8','2023-06-06 20:46:26','2023-06-06 20:46:26'),(74,99,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTksImVtYWlsIjoiemFtaXJhbG92aXZhbjVAZ21haWwuY29tIiwiaWF0IjoxNjg2MDg0Mzk1LCJleHAiOjE2ODg2NzYzOTV9.6rXy7o-k-gTiahQc0xAF3lGvV4hwXGNEqjpZs2b7OOU','2023-06-06 20:46:35','2023-06-06 20:46:35'),(75,99,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTksImVtYWlsIjoiemFtaXJhbG92aXZhbjVAZ21haWwuY29tIiwiaWF0IjoxNjg2MDg0NDA5LCJleHAiOjE2ODg2NzY0MDl9.g_jUF8DztaWZ1-bRtmBbcVxkhCB25iEkYLYVnq9eYa0','2023-06-06 20:46:49','2023-06-06 20:46:49'),(76,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODYwODQ0MjgsImV4cCI6MTY4ODY3NjQyOH0.iAQMh9UdKlnY3XtMPZvtMhKQDOMOrXsvkVyTaaSSz3k','2023-06-06 20:47:08','2023-06-06 20:47:08'),(77,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODYwODQ0NTQsImV4cCI6MTY4ODY3NjQ1NH0.7marbALcTdRxjSjgdEwE9p1q1fK1TKBuxUrFtEVgTEk','2023-06-06 20:47:34','2023-06-06 20:47:34'),(78,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODYwODQ2NDgsImV4cCI6MTY4ODY3NjY0OH0.WreXrSeNWjh3VJxgM5VxlAcVIZ802b0e5P7FXhD_cTU','2023-06-06 20:50:48','2023-06-06 20:50:48'),(79,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODYwODQ3NDMsImV4cCI6MTY4ODY3Njc0M30.Th9bmbzvbL_owZbyHP4gjYX86ABa0OCT95kQGA9sfTc','2023-06-06 20:52:23','2023-06-06 20:52:23'),(80,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODYwOTMzNDUsImV4cCI6MTY4ODY4NTM0NX0.H0ESP4jRyAnGKikRJdwZjJjC8jBtD1xWkm2545bG0TI','2023-06-06 23:15:45','2023-06-06 23:15:45'),(81,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODYxNTU1NjcsImV4cCI6MTY4ODc0NzU2N30.OifWbJ5D_mJn2tiMlXs93kpJr8WnHIr9thwc8p383YI','2023-06-07 16:32:47','2023-06-07 16:32:47'),(82,99,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTksImVtYWlsIjoiemFtaXJhbG92aXZhbjVAZ21haWwuY29tIiwiaWF0IjoxNjg2MTg0MDg5LCJleHAiOjE2ODg3NzYwODl9.Skhu9pOke_oDRHX8O9-Gynx2qOMnmX10pIG9X8MESYA','2023-06-08 00:28:09','2023-06-08 00:28:09');
/*!40000 ALTER TABLE `user_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `FIO` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `nickname` (`nickname`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `nickname_2` (`nickname`),
  UNIQUE KEY `email_2` (`email`),
  UNIQUE KEY `phone` (`phone`),
  UNIQUE KEY `phone_2` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'Генадий Гена На','admin1','admin@mail.com',' - ','$2a$05$qZ3y9RmflTxah4HoxpcVnug9//x0GUreV2Mt8RniUw6zBd8cGZ1ne','2023-01-03 07:54:59','2023-06-06 09:25:12'),(3,'Генадий Гена На','admin2','admin2@mail.com','+375255405255','$2a$05$Pr3W.oF.CFCfAF9mDiMaV.zNujpgH1yGiHL/boNs1jlU2qNlkZmXy','2023-01-03 07:55:09','2023-06-05 22:41:32'),(4,'Somename Surname','vasya228','somemail@mail.com','+34534534534','$2a$05$T7H3gmulCi61SYkqdfWI1Oke7zxzOJJgk8KnL/4.f19BvB9zLxXAq','2023-02-01 10:27:20','2023-02-01 10:27:20'),(5,NULL,'ИванИваныч','example@mail.ru','+375 (23) 423-42-34','$2a$05$B1CRuSAL6blsZdIKjn/UQOPWpyTf4/WSMcZ.VXvCKH/yoBYS0/CQi','2023-02-04 10:25:35','2023-02-04 10:25:35'),(6,'Генадий Гена Нав','Usertest','genamail.com@mail.com',NULL,'$2a$05$BLQkN7vyYjZi/d9B8bDxguZQFsnJxxSXtlK4IzAzyWtlOz423ec.u','2023-02-04 10:31:06','2023-02-04 10:31:06'),(9,'Somename me','vasa228','asdasd@mail.com',NULL,'$2a$05$YbOm2Nn6WY8E8MwLzEoan.H.ZI7PQomIi/ArIiczzGr47ay9LiRZK','2023-02-04 10:32:30','2023-02-04 10:32:30'),(10,'asdasdasd asdasd asdas','asdasdasdasda','adsdada@mail.com','+375 (12) 312-31-21','$2a$05$DZNLG5NHbHmmUhxnb.pHHehVaJixEO0nSSI9virXj.rRJvnj1JEQW','2023-02-04 10:33:32','2023-02-04 10:33:32'),(11,'Ффывфы фывфывфы вфывфы','23djhdwq','dasdasdsa@mail.com','+375 (13) 123-12-31','$2a$05$WoTjWXJoUn6tVcegIcFG5OC2hLaj.d.a3sbCmS2./zLXd4p3JQdw2','2023-02-04 10:34:44','2023-02-04 10:34:44'),(13,'Пупа Пупа Пупа','pupaandlupa','pupamail@mail.com','+375 (12) 312-31-23','$2a$05$7Q5v8sgzJsm5f1BRI3TtseOv9cZoYYoNT415bzOZIeNkqnvYpRKZW','2023-02-19 13:24:47','2023-02-19 13:24:47'),(16,'Лупа Лупа Лупа','lupa','lupain@mail.com',NULL,'$2a$05$ki2VTmWDBD4xh/w8XXv7SOGjKQ5AS5xvkifz1xpyYrrK6D7dO2kIq','2023-02-19 13:28:13','2023-02-19 13:28:13'),(17,'ФЫВвф фывфвфы фывфыв','lkfkjaisdf','asddasds@mail.com','+375 (11) 231-23-12','$2a$05$BbOfCyGTxJyW1RhpURSl9uJBoY8BAVfIbrFXMuNfw7bHYD/tSzEse','2023-02-19 13:29:42','2023-02-19 13:29:42'),(18,'Пример пример','exampleName','exmpl@gmail.com','+375 (31) 231-31-23','$2a$05$jdLZ.9BcO02x..HoUjChmOmr7hqQ6l.EwlWOEAXuZ9Emq/Cs2Tt9G','2023-03-17 21:10:49','2023-03-17 21:10:49'),(48,NULL,'email2','vania.zamiralov@yandex.ru',NULL,'$2a$05$OmMZb/riQtxIyKc83FtfOeJF.MT42PofrvnWJKGXpFKmTTFyH.TF6','2023-06-05 14:21:37','2023-06-05 14:21:37'),(99,'Петров Петр Петрович','myaccount','zamiralovivan5@gmail.com','+375 (29) 827-57-38','$2a$05$xFKyhs3AfvX686IvAQL8V.qeBTKQOHIepgyzDJkmJe54/9qAx.N.G','2023-06-06 20:46:26','2023-06-06 20:56:37');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-08  0:39:03
