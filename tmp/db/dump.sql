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
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,'some comment',2,'2023-04-30 13:58:55','2023-04-30 13:58:55'),(26,'Yadp',3,'2023-04-30 15:31:10','2023-04-30 15:31:10'),(27,'Yadp',3,'2023-04-30 15:34:18','2023-04-30 15:34:18'),(28,'Yes',3,'2023-04-30 15:35:57','2023-04-30 15:35:57'),(29,'And second yes',3,'2023-04-30 15:36:19','2023-04-30 15:36:19');
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
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commentpublic`
--

LOCK TABLES `commentpublic` WRITE;
/*!40000 ALTER TABLE `commentpublic` DISABLE KEYS */;
INSERT INTO `commentpublic` VALUES (1,1,2,'2023-04-30 13:58:55','2023-04-30 13:58:55'),(28,28,2,'2023-04-30 15:35:57','2023-04-30 15:35:57'),(29,29,2,'2023-04-30 15:36:19','2023-04-30 15:36:19');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likesForPublication`
--

LOCK TABLES `likesForPublication` WRITE;
/*!40000 ALTER TABLE `likesForPublication` DISABLE KEYS */;
INSERT INTO `likesForPublication` VALUES (1,1,1,'2023-01-03 07:51:49','2023-01-03 07:51:49'),(2,1,2,'2023-01-03 07:51:49','2023-01-03 07:51:49'),(3,1,3,'2023-01-03 07:51:49','2023-01-03 07:51:49'),(4,2,2,'2023-01-03 07:51:49','2023-01-03 07:51:49'),(5,1,2,'2023-01-03 07:51:49','2023-01-03 07:51:49');
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `linkeSource`
--

LOCK TABLES `linkeSource` WRITE;
/*!40000 ALTER TABLE `linkeSource` DISABLE KEYS */;
INSERT INTO `linkeSource` VALUES (1,'asdas','2023-04-29 21:46:51','2023-04-29 21:46:51'),(2,'asdasddasasd','2023-04-29 21:46:51','2023-04-29 21:46:51'),(3,'asddasasdasdas','2023-04-29 21:48:09','2023-04-29 21:48:09'),(4,'asdasdasdasdasds','2023-04-29 21:48:09','2023-04-29 21:48:09'),(5,' elem.author','2023-04-29 21:49:58','2023-04-29 21:49:58'),(7,'Автомобильные новости','2023-04-29 21:50:52','2023-04-29 21:50:52'),(8,'Daily-Motor.Ru','2023-04-29 21:50:52','2023-04-29 21:50:52');
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
  `link` varchar(255) DEFAULT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `linkedNews`
--

LOCK TABLES `linkedNews` WRITE;
/*!40000 ALTER TABLE `linkedNews` DISABLE KEYS */;
INSERT INTO `linkedNews` VALUES (1,'«Джеймс Уэбб» нашел рекордно далекое протоскопление галактик в очень ранней Вселенной - N + 1',1,'https://news.google.com/rss/articles/CBMiOWh0dHBzOi8vbnBsdXMxLnJ1L25ld3MvMjAyMy8wNC8yNy9wcm90b2NsdXN0ZXItZWFybHktandzdNIBPWh0dHBzOi8vbnBsdXMxLnJ1L25ld3MvMjAyMy8wNC8yNy9wcm90b2NsdXN0ZXItZWFybHktandzdC9hbXA?oc=5',3,'2023-04-27 15:12:00','2023-04-29 21:46:51','2023-04-29 21:46:51'),(2,'\"Мелодии Вселенной\": космическая музыка от НАСА - Euronews Русский',2,'https://news.google.com/rss/articles/CBMiaGh0dHBzOi8vcnUuZXVyb25ld3MuY29tL25leHQvMjAyMy8wNC8yNy9uYXNhLXJlbGVhc2VzLXNwZWN0YWN1bGFyLWFsYnVtLWZlYXR1cmluZy1zb3VuZHMtb2YtdGhlLXVuaXZlcnNl0gEA?oc=5',3,'2023-04-27 14:01:02','2023-04-29 21:46:52','2023-04-29 21:46:52'),(6,'В Россию официально приходит еще один китайский автобренд - Автомобильные новости',7,'https://news.google.com/rss/articles/CBMiH2h0dHBzOi8vbmV3cy5kcm9tLnJ1LzkzNzgwLmh0bWzSAQA?oc=5',2,'2023-04-28 10:53:05','2023-04-29 21:50:52','2023-04-29 21:50:52'),(7,'Назван лучший среднеразмерный седан в 2023 году – это не Toyota Camry - Daily-Motor.Ru',8,'https://news.google.com/rss/articles/CBMiJmh0dHBzOi8vZGFpbHktbW90b3IucnUvYXV0b25ld3MvMTE0NTcy0gEqaHR0cHM6Ly9kYWlseS1tb3Rvci5ydS9hdXRvbmV3cy8xMTQ1NzIvYW1w?oc=5',2,'2023-04-28 10:41:36','2023-04-29 21:50:52','2023-04-29 21:50:52');
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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (9,'Какая-то научная новость','news-storage/aaeae14060a33878192c22a371974f7c037cd7a6f8a174066a269922e2acda87','2023-02-01 10:11:18','2023-02-01 10:11:18'),(10,'asdasdasdasd','news-storage/66b1132a0173910b01ee3a15ef4e69583bbf2f7f1e4462c99efbe1b9ab5bf808','2023-02-01 10:17:39','2023-02-01 10:17:39'),(11,'ПРИмер за другую дату статья','news-storage/5ad8523b797351cc80e4c2a0780cece0ac43811cd49c97af393022a9513b82f0','2023-04-30 20:33:02','2023-04-30 20:33:02');
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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publications`
--

LOCK TABLES `publications` WRITE;
/*!40000 ALTER TABLE `publications` DISABLE KEYS */;
INSERT INTO `publications` VALUES (1,9,3,1,35,'2023-02-01 10:11:18','2023-02-01 10:11:18'),(2,10,3,2,0,'2023-02-01 10:17:39','2023-02-01 10:17:39'),(17,11,3,2,40,'2023-04-30 20:33:02','2023-04-30 20:33:02');
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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user-roles`
--

LOCK TABLES `user-roles` WRITE;
/*!40000 ALTER TABLE `user-roles` DISABLE KEYS */;
INSERT INTO `user-roles` VALUES (2,2,1),(4,3,2),(6,4,2),(8,5,2),(10,6,2),(12,9,2),(14,10,2),(16,11,2),(18,13,2),(20,16,2),(22,17,2),(24,18,2);
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_token`
--

LOCK TABLES `user_token` WRITE;
/*!40000 ALTER TABLE `user_token` DISABLE KEYS */;
INSERT INTO `user_token` VALUES (1,2,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsImlhdCI6MTY3MjczMjUwMCwiZXhwIjoxNjc1MzI0NTAwfQ.YyEh-tWDdlj7looYTB8ozSKuQ2bePqCw0NtVGb3HRcM','2023-01-03 07:55:00','2023-01-03 07:55:00'),(2,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsImlhdCI6MTY4Mjg4MTA2MywiZXhwIjoxNjg1NDczMDYzfQ.PWQTRXo3Au2juT8FdDV63tTXsHxWc72Fp6XtFW2hfXI','2023-01-03 07:55:09','2023-04-30 18:57:43'),(3,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbjJAbWFpbC5jb20iLCJpYXQiOjE2ODI5NjgxMTAsImV4cCI6MTY4NTU2MDExMH0.-0_-uLt1_DSPTX4cVDLl6ELUzGSGvXHVJXmU0vqjoKk','2023-01-03 08:21:29','2023-05-01 19:08:30'),(4,4,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJzb21lbWFpbEBtYWlsLmNvbSIsImlhdCI6MTY3NTI0NzI0MCwiZXhwIjoxNjc3ODM5MjQwfQ.OWWi3064PLHSpnPVytB41nMmn_w-J72g7R3z2JmzaBM','2023-02-01 10:27:20','2023-02-01 10:27:20'),(5,5,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJleGFtcGxlQG1haWwucnUiLCJpYXQiOjE2NzU1MDYzMzUsImV4cCI6MTY3ODA5ODMzNX0.t3ylKCysm12PFyElREwOlc-zwnKOvxPsnqLrlK6MXII','2023-02-04 10:25:35','2023-02-04 10:25:35'),(6,6,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJnZW5hbWFpbC5jb21AbWFpbC5jb20iLCJpYXQiOjE2NzU1MDY2NjYsImV4cCI6MTY3ODA5ODY2Nn0.-P8I5pObCvQc3S998DpdOz62HBuaFaDPe2CTmJvoe6s','2023-02-04 10:31:06','2023-02-04 10:31:06'),(7,9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiJhc2Rhc2RAbWFpbC5jb20iLCJpYXQiOjE2NzU1MDY3NTAsImV4cCI6MTY3ODA5ODc1MH0.YVPptiBPVpZhCpO4etYQN7AToc_zZ2mnBSmiJm9yh9k','2023-02-04 10:32:30','2023-02-04 10:32:30'),(8,10,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoiYWRzZGFkYUBtYWlsLmNvbSIsImlhdCI6MTY3NTUwNjgxMiwiZXhwIjoxNjc4MDk4ODEyfQ.h2MMAtgjw8ky7SaHvvQXi4h2FNehPT7RKVdyYFA6kYc','2023-02-04 10:33:32','2023-02-04 10:33:32'),(9,11,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImVtYWlsIjoiZGFzZGFzZHNhQG1haWwuY29tIiwiaWF0IjoxNjc1NTA2ODg0LCJleHAiOjE2NzgwOTg4ODR9.DYLmR6IcWLdubjkoIlDWKb9e9yhd-4byJMuE0y5gdiA','2023-02-04 10:34:44','2023-02-04 10:34:44'),(10,13,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImVtYWlsIjoicHVwYW1haWxAbWFpbC5jb20iLCJpYXQiOjE2NzY4MTMwODcsImV4cCI6MTY3OTQwNTA4N30.rpBx0p-erKF808LTsnvTs7iRcmn3yILEF-5dLgh0xpc','2023-02-19 13:24:47','2023-02-19 13:24:47'),(11,16,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImVtYWlsIjoibHVwYWluQG1haWwuY29tIiwiaWF0IjoxNjc2ODEzMjkzLCJleHAiOjE2Nzk0MDUyOTN9.3_uuEot4PxVcmSFANHtOf3lMImHCY4T60Md7wht53uA','2023-02-19 13:28:13','2023-02-19 13:28:13'),(12,17,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsImVtYWlsIjoiYXNkZGFzZHNAbWFpbC5jb20iLCJpYXQiOjE2NzY4MTMzODIsImV4cCI6MTY3OTQwNTM4Mn0.8CuGPKKptfka5yZzmKAKHfNJZ3a0Zgt5oRsk9ucZUTs','2023-02-19 13:29:42','2023-02-19 13:29:42'),(13,18,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImVtYWlsIjoiZXhtcGxAZ21haWwuY29tIiwiaWF0IjoxNjc5MDg3NDUwLCJleHAiOjE2ODE2Nzk0NTB9.4_S2fS64nrOtChvA1nD1VzDi0CjBB0K0KJF-17exC8w','2023-03-17 21:10:50','2023-03-17 21:10:50');
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
  `roles` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `nickname` (`nickname`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `nickname_2` (`nickname`),
  UNIQUE KEY `email_2` (`email`),
  UNIQUE KEY `phone` (`phone`),
  UNIQUE KEY `phone_2` (`phone`),
  KEY `users_roles_foreign_idx` (`roles`),
  CONSTRAINT `users_roles_foreign_idx` FOREIGN KEY (`roles`) REFERENCES `likesForPublication` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,NULL,'admin','test-admin@mail.com',NULL,'$2a$05$iaZP8ogPEadF1tzGhDtyKuc6K5mFD07aVXBGBcL6ZBTLJZIkyPmfS','2023-01-03 07:51:49','2023-01-03 07:51:49',NULL),(2,NULL,'admin1','admin@mail.com',NULL,'$2a$05$qZ3y9RmflTxah4HoxpcVnug9//x0GUreV2Mt8RniUw6zBd8cGZ1ne','2023-01-03 07:54:59','2023-04-29 14:08:58',NULL),(3,NULL,'admin2','admin2@mail.com',NULL,'$2a$05$0m0cyVv1nDxhRYPqcwclYOrowPzhiNzAjSxo52QmHUQplptwKlRZy','2023-01-03 07:55:09','2023-04-29 14:19:48',NULL),(4,'Somename Surname','vasya228','somemail@mail.com','+34534534534','$2a$05$T7H3gmulCi61SYkqdfWI1Oke7zxzOJJgk8KnL/4.f19BvB9zLxXAq','2023-02-01 10:27:20','2023-02-01 10:27:20',NULL),(5,NULL,'ИванИваныч','example@mail.ru','+375 (23) 423-42-34','$2a$05$B1CRuSAL6blsZdIKjn/UQOPWpyTf4/WSMcZ.VXvCKH/yoBYS0/CQi','2023-02-04 10:25:35','2023-02-04 10:25:35',NULL),(6,'Генадий Гена Нав','Usertest','genamail.com@mail.com',NULL,'$2a$05$BLQkN7vyYjZi/d9B8bDxguZQFsnJxxSXtlK4IzAzyWtlOz423ec.u','2023-02-04 10:31:06','2023-02-04 10:31:06',NULL),(9,'Somename me','vasa228','asdasd@mail.com',NULL,'$2a$05$YbOm2Nn6WY8E8MwLzEoan.H.ZI7PQomIi/ArIiczzGr47ay9LiRZK','2023-02-04 10:32:30','2023-02-04 10:32:30',NULL),(10,'asdasdasd asdasd asdas','asdasdasdasda','adsdada@mail.com','+375 (12) 312-31-21','$2a$05$DZNLG5NHbHmmUhxnb.pHHehVaJixEO0nSSI9virXj.rRJvnj1JEQW','2023-02-04 10:33:32','2023-02-04 10:33:32',NULL),(11,'Ффывфы фывфывфы вфывфы','23djhdwq','dasdasdsa@mail.com','+375 (13) 123-12-31','$2a$05$WoTjWXJoUn6tVcegIcFG5OC2hLaj.d.a3sbCmS2./zLXd4p3JQdw2','2023-02-04 10:34:44','2023-02-04 10:34:44',NULL),(13,'Пупа Пупа Пупа','pupaandlupa','pupamail@mail.com','+375 (12) 312-31-23','$2a$05$7Q5v8sgzJsm5f1BRI3TtseOv9cZoYYoNT415bzOZIeNkqnvYpRKZW','2023-02-19 13:24:47','2023-02-19 13:24:47',NULL),(16,'Лупа Лупа Лупа','lupa','lupain@mail.com',NULL,'$2a$05$ki2VTmWDBD4xh/w8XXv7SOGjKQ5AS5xvkifz1xpyYrrK6D7dO2kIq','2023-02-19 13:28:13','2023-02-19 13:28:13',NULL),(17,'ФЫВвф фывфвфы фывфыв','lkfkjaisdf','asddasds@mail.com','+375 (11) 231-23-12','$2a$05$BbOfCyGTxJyW1RhpURSl9uJBoY8BAVfIbrFXMuNfw7bHYD/tSzEse','2023-02-19 13:29:42','2023-02-19 13:29:42',NULL),(18,'Пример пример','exampleName','exmpl@gmail.com','+375 (31) 231-31-23','$2a$05$jdLZ.9BcO02x..HoUjChmOmr7hqQ6l.EwlWOEAXuZ9Emq/Cs2Tt9G','2023-03-17 21:10:49','2023-03-17 21:10:49',NULL);
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

-- Dump completed on 2023-05-01 22:48:46
