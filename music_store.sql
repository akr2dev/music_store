/*
 Navicat Premium Data Transfer

 Source Server         : xampp
 Source Server Type    : MySQL
 Source Server Version : 100424
 Source Host           : localhost:3306
 Source Schema         : music_store

 Target Server Type    : MySQL
 Target Server Version : 100424
 File Encoding         : 65001

 Date: 27/06/2022 01:50:51
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for songs_tbl
-- ----------------------------
DROP TABLE IF EXISTS `songs_tbl`;
CREATE TABLE `songs_tbl`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `song` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `artist` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `language` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of songs_tbl
-- ----------------------------
INSERT INTO `songs_tbl` VALUES (1, 'Al Donya', 'Zap Tharwat', 'Arabic');
INSERT INTO `songs_tbl` VALUES (2, 'I Thought there was still time', 'CairoKee', 'Arabic');
INSERT INTO `songs_tbl` VALUES (5, 'Wicked Game', 'Camishe', 'English');

SET FOREIGN_KEY_CHECKS = 1;
