-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.1.51-community - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win32
-- HeidiSQL 版本:                  8.0.0.4396
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出 basedb 的数据库结构
CREATE DATABASE IF NOT EXISTS `basedb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `basedb`;


-- 导出  表 basedb.t_log 结构
CREATE TABLE IF NOT EXISTS `t_log` (
  `id` int(11) NOT NULL,
  `operator` varchar(50) DEFAULT NULL,
  `operatorDate` datetime DEFAULT NULL,
  `descript` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  basedb.t_log 的数据：~0 rows (大约)
DELETE FROM `t_log`;
/*!40000 ALTER TABLE `t_log` DISABLE KEYS */;
INSERT INTO `t_log` (`id`, `operator`, `operatorDate`, `descript`) VALUES
	(2, 'a', '2013-06-04 11:52:46', '查询账户'),
	(3, 'a', '2013-06-04 11:53:00', '查询日志'),
	(4, 'a', '2013-06-04 11:53:48', '查询账户'),
	(5, 'a', '2013-06-04 11:54:54', '查询日志'),
	(6, 'a', '2013-06-04 11:58:29', '查询日志'),
	(7, 'a', '2013-06-04 11:59:17', '查询日志'),
	(8, 'a', '2013-06-04 11:59:28', '查询账户'),
	(9, 'a', '2013-06-04 11:59:54', '查询账户'),
	(10, 'a', '2013-06-04 11:59:57', '查询账户'),
	(11, 'a', '2013-06-04 12:00:24', '查询角色'),
	(12, 'a', '2013-06-04 12:00:27', '查询日志'),
	(13, 'a', '2013-06-04 12:00:37', '查询账户'),
	(14, 'a', '2013-06-04 12:00:40', '查询账户'),
	(15, 'a', '2013-06-04 12:00:45', '查询账户'),
	(16, 'a', '2013-06-04 12:00:49', '查询日志'),
	(17, 'a', '2013-06-04 12:00:51', '查询日志'),
	(18, 'a', '2013-06-04 12:12:22', '查询账户'),
	(19, 'a', '2013-06-04 12:18:40', '查询账户'),
	(20, 'a', '2013-06-04 12:18:44', '查询角色'),
	(21, 'a', '2013-06-04 12:20:55', '查询账户'),
	(22, 'a', '2013-06-04 12:20:59', '查询角色'),
	(23, 'a', '2013-06-04 12:21:10', '添加账户'),
	(24, 'a', '2013-06-04 12:21:11', '查询账户'),
	(25, 'a', '2013-06-04 12:21:15', '查询角色'),
	(26, 'a', '2013-06-04 12:21:25', '修改账户'),
	(27, 'a', '2013-06-04 12:21:26', '查询账户'),
	(28, 'a', '2013-06-04 12:21:35', '查询角色'),
	(29, 'a', '2013-06-04 12:21:42', '查询日志'),
	(30, 'a', '2013-06-04 12:25:08', '查询日志'),
	(31, 'a', '2013-06-04 12:56:03', '查询账户'),
	(32, 'a', '2013-06-04 12:59:29', '查询账户');
/*!40000 ALTER TABLE `t_log` ENABLE KEYS */;


-- 导出  表 basedb.t_role 结构
CREATE TABLE IF NOT EXISTS `t_role` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(10) NOT NULL COMMENT '名称',
  `role_enname` varchar(30) NOT NULL COMMENT '角色英文名',
  `role_remark` varchar(50) NOT NULL COMMENT '描述',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色表';

-- 正在导出表  basedb.t_role 的数据：~1 rows (大约)
DELETE FROM `t_role`;
/*!40000 ALTER TABLE `t_role` DISABLE KEYS */;
INSERT INTO `t_role` (`role_id`, `role_name`, `role_enname`, `role_remark`) VALUES
	(0, 'admin', 'admin', 'admin');
/*!40000 ALTER TABLE `t_role` ENABLE KEYS */;


-- 导出  表 basedb.t_seq 结构
CREATE TABLE IF NOT EXISTS `t_seq` (
  `id` varchar(50) NOT NULL,
  `seq` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  basedb.t_seq 的数据：~0 rows (大约)
DELETE FROM `t_seq`;
/*!40000 ALTER TABLE `t_seq` DISABLE KEYS */;
INSERT INTO `t_seq` (`id`, `seq`) VALUES
	('TLOGID', 32),
	('USERID', 3);
/*!40000 ALTER TABLE `t_seq` ENABLE KEYS */;


-- 导出  表 basedb.t_user 结构
CREATE TABLE IF NOT EXISTS `t_user` (
  `user_id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL COMMENT '账户名',
  `userpwd` varchar(32) NOT NULL COMMENT '密码',
  `email` varchar(30) DEFAULT NULL COMMENT '邮箱',
  `moble` varchar(20) DEFAULT NULL COMMENT '手机号',
  `status` int(11) NOT NULL COMMENT '状态',
  `receive` int(11) NOT NULL COMMENT '是否接收短信/邮件提醒',
  `changeUser` varchar(20) DEFAULT NULL,
  `changeTime` date DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  KEY `AK_Identifier_2` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  basedb.t_user 的数据：~0 rows (大约)
DELETE FROM `t_user`;
/*!40000 ALTER TABLE `t_user` DISABLE KEYS */;
INSERT INTO `t_user` (`user_id`, `username`, `userpwd`, `email`, `moble`, `status`, `receive`, `changeUser`, `changeTime`) VALUES
	(0, 'a', 'e10adc3949ba59abbe56e057f20f883e', NULL, NULL, 1, 1, 'a', '2013-06-04'),
	(2, 't', '96e79218965eb72c92a549dd5a330112', NULL, NULL, 1, 1, 'a', '2013-06-04'),
	(3, 's', 'e10adc3949ba59abbe56e057f20f883e', NULL, NULL, 1, 1, 'a', '2013-06-04');
/*!40000 ALTER TABLE `t_user` ENABLE KEYS */;


-- 导出  表 basedb.t_user_role 结构
CREATE TABLE IF NOT EXISTS `t_user_role` (
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  basedb.t_user_role 的数据：~0 rows (大约)
DELETE FROM `t_user_role`;
/*!40000 ALTER TABLE `t_user_role` DISABLE KEYS */;
INSERT INTO `t_user_role` (`user_id`, `role_id`) VALUES
	(0, 0),
	(2, 0),
	(3, 0);
/*!40000 ALTER TABLE `t_user_role` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
