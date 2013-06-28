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
DROP DATABASE IF EXISTS `basedb`;
CREATE DATABASE IF NOT EXISTS `basedb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `basedb`;


-- 导出  表 basedb.qrtz_blob_triggers 结构
DROP TABLE IF EXISTS `qrtz_blob_triggers`;
CREATE TABLE IF NOT EXISTS `qrtz_blob_triggers` (
  `SCHED_NAME` varchar(120) NOT NULL,
  `TRIGGER_NAME` varchar(200) NOT NULL,
  `TRIGGER_GROUP` varchar(200) NOT NULL,
  `BLOB_DATA` blob,
  PRIMARY KEY (`SCHED_NAME`,`TRIGGER_NAME`,`TRIGGER_GROUP`),
  CONSTRAINT `qrtz_blob_triggers_ibfk_1` FOREIGN KEY (`SCHED_NAME`, `TRIGGER_NAME`, `TRIGGER_GROUP`) REFERENCES `qrtz_triggers` (`SCHED_NAME`, `TRIGGER_NAME`, `TRIGGER_GROUP`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  basedb.qrtz_blob_triggers 的数据：~0 rows (大约)
DELETE FROM `qrtz_blob_triggers`;
/*!40000 ALTER TABLE `qrtz_blob_triggers` DISABLE KEYS */;
/*!40000 ALTER TABLE `qrtz_blob_triggers` ENABLE KEYS */;


-- 导出  表 basedb.qrtz_calendars 结构
DROP TABLE IF EXISTS `qrtz_calendars`;
CREATE TABLE IF NOT EXISTS `qrtz_calendars` (
  `SCHED_NAME` varchar(120) NOT NULL,
  `CALENDAR_NAME` varchar(200) NOT NULL,
  `CALENDAR` blob NOT NULL,
  PRIMARY KEY (`SCHED_NAME`,`CALENDAR_NAME`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  basedb.qrtz_calendars 的数据：~0 rows (大约)
DELETE FROM `qrtz_calendars`;
/*!40000 ALTER TABLE `qrtz_calendars` DISABLE KEYS */;
/*!40000 ALTER TABLE `qrtz_calendars` ENABLE KEYS */;


-- 导出  表 basedb.qrtz_cron_triggers 结构
DROP TABLE IF EXISTS `qrtz_cron_triggers`;
CREATE TABLE IF NOT EXISTS `qrtz_cron_triggers` (
  `SCHED_NAME` varchar(120) NOT NULL,
  `TRIGGER_NAME` varchar(200) NOT NULL,
  `TRIGGER_GROUP` varchar(200) NOT NULL,
  `CRON_EXPRESSION` varchar(200) NOT NULL,
  `TIME_ZONE_ID` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`SCHED_NAME`,`TRIGGER_NAME`,`TRIGGER_GROUP`),
  CONSTRAINT `qrtz_cron_triggers_ibfk_1` FOREIGN KEY (`SCHED_NAME`, `TRIGGER_NAME`, `TRIGGER_GROUP`) REFERENCES `qrtz_triggers` (`SCHED_NAME`, `TRIGGER_NAME`, `TRIGGER_GROUP`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  basedb.qrtz_cron_triggers 的数据：~1 rows (大约)
DELETE FROM `qrtz_cron_triggers`;
/*!40000 ALTER TABLE `qrtz_cron_triggers` DISABLE KEYS */;
INSERT INTO `qrtz_cron_triggers` (`SCHED_NAME`, `TRIGGER_NAME`, `TRIGGER_GROUP`, `CRON_EXPRESSION`, `TIME_ZONE_ID`) VALUES
	('quartzScheduler', 'JOBTEST', '222', '0/30 * * * * ?', 'Asia/Shanghai');
/*!40000 ALTER TABLE `qrtz_cron_triggers` ENABLE KEYS */;


-- 导出  表 basedb.qrtz_fired_triggers 结构
DROP TABLE IF EXISTS `qrtz_fired_triggers`;
CREATE TABLE IF NOT EXISTS `qrtz_fired_triggers` (
  `SCHED_NAME` varchar(120) NOT NULL,
  `ENTRY_ID` varchar(95) NOT NULL,
  `TRIGGER_NAME` varchar(200) NOT NULL,
  `TRIGGER_GROUP` varchar(200) NOT NULL,
  `INSTANCE_NAME` varchar(200) NOT NULL,
  `FIRED_TIME` bigint(13) NOT NULL,
  `PRIORITY` int(11) NOT NULL,
  `STATE` varchar(16) NOT NULL,
  `JOB_NAME` varchar(200) DEFAULT NULL,
  `JOB_GROUP` varchar(200) DEFAULT NULL,
  `IS_NONCONCURRENT` varchar(1) DEFAULT NULL,
  `REQUESTS_RECOVERY` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`SCHED_NAME`,`ENTRY_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  basedb.qrtz_fired_triggers 的数据：~1 rows (大约)
DELETE FROM `qrtz_fired_triggers`;
/*!40000 ALTER TABLE `qrtz_fired_triggers` DISABLE KEYS */;
INSERT INTO `qrtz_fired_triggers` (`SCHED_NAME`, `ENTRY_ID`, `TRIGGER_NAME`, `TRIGGER_GROUP`, `INSTANCE_NAME`, `FIRED_TIME`, `PRIORITY`, `STATE`, `JOB_NAME`, `JOB_GROUP`, `IS_NONCONCURRENT`, `REQUESTS_RECOVERY`) VALUES
	('quartzScheduler', 'NON_CLUSTERED1371712899131', 'JOBTEST', '222', 'NON_CLUSTERED', 1371718590000, 5, 'ACQUIRED', NULL, NULL, '0', '0');
/*!40000 ALTER TABLE `qrtz_fired_triggers` ENABLE KEYS */;


-- 导出  表 basedb.qrtz_job_details 结构
DROP TABLE IF EXISTS `qrtz_job_details`;
CREATE TABLE IF NOT EXISTS `qrtz_job_details` (
  `SCHED_NAME` varchar(120) NOT NULL,
  `JOB_NAME` varchar(200) NOT NULL,
  `JOB_GROUP` varchar(200) NOT NULL,
  `DESCRIPTION` varchar(250) DEFAULT NULL,
  `JOB_CLASS_NAME` varchar(250) NOT NULL,
  `IS_DURABLE` varchar(1) NOT NULL,
  `IS_NONCONCURRENT` varchar(1) NOT NULL,
  `IS_UPDATE_DATA` varchar(1) NOT NULL,
  `REQUESTS_RECOVERY` varchar(1) NOT NULL,
  `JOB_DATA` blob,
  PRIMARY KEY (`SCHED_NAME`,`JOB_NAME`,`JOB_GROUP`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  basedb.qrtz_job_details 的数据：~1 rows (大约)
DELETE FROM `qrtz_job_details`;
/*!40000 ALTER TABLE `qrtz_job_details` DISABLE KEYS */;
INSERT INTO `qrtz_job_details` (`SCHED_NAME`, `JOB_NAME`, `JOB_GROUP`, `DESCRIPTION`, `JOB_CLASS_NAME`, `IS_DURABLE`, `IS_NONCONCURRENT`, `IS_UPDATE_DATA`, `REQUESTS_RECOVERY`, `JOB_DATA`) VALUES
	('quartzScheduler', 'JOBTEST', '222', '1222', 'com.lch.quartz.QuartzJob', '1', '0', '0', '0', _binary 0xACED0005737200156F72672E71756172747A2E4A6F62446174614D61709FB083E8BFA9B0CB020000787200266F72672E71756172747A2E7574696C732E537472696E674B65794469727479466C61674D61703FE8C3FBC55D280200015A0013616C6C6F77735472616E7369656E74446174617872001D6F72672E71756172747A2E7574696C732E4469727479466C61674D6170133F3F760A3F00025A000564697274794C00036D617074000F4C6A6176612F7574696C2F4D61703B787000737200116A6176612E7574696C2E486173684D61700507DAC13F603F000246000A6C6F6164466163746F724900097468726573686F6C6478703F4000000000000C770800000010000000007800);
/*!40000 ALTER TABLE `qrtz_job_details` ENABLE KEYS */;


-- 导出  表 basedb.qrtz_locks 结构
DROP TABLE IF EXISTS `qrtz_locks`;
CREATE TABLE IF NOT EXISTS `qrtz_locks` (
  `SCHED_NAME` varchar(120) NOT NULL,
  `LOCK_NAME` varchar(40) NOT NULL,
  PRIMARY KEY (`SCHED_NAME`,`LOCK_NAME`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  basedb.qrtz_locks 的数据：~1 rows (大约)
DELETE FROM `qrtz_locks`;
/*!40000 ALTER TABLE `qrtz_locks` DISABLE KEYS */;
INSERT INTO `qrtz_locks` (`SCHED_NAME`, `LOCK_NAME`) VALUES
	('quartzScheduler', 'TRIGGER_ACCESS');
/*!40000 ALTER TABLE `qrtz_locks` ENABLE KEYS */;


-- 导出  表 basedb.qrtz_paused_trigger_grps 结构
DROP TABLE IF EXISTS `qrtz_paused_trigger_grps`;
CREATE TABLE IF NOT EXISTS `qrtz_paused_trigger_grps` (
  `SCHED_NAME` varchar(120) NOT NULL,
  `TRIGGER_GROUP` varchar(200) NOT NULL,
  PRIMARY KEY (`SCHED_NAME`,`TRIGGER_GROUP`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  basedb.qrtz_paused_trigger_grps 的数据：~0 rows (大约)
DELETE FROM `qrtz_paused_trigger_grps`;
/*!40000 ALTER TABLE `qrtz_paused_trigger_grps` DISABLE KEYS */;
/*!40000 ALTER TABLE `qrtz_paused_trigger_grps` ENABLE KEYS */;


-- 导出  表 basedb.qrtz_scheduler_state 结构
DROP TABLE IF EXISTS `qrtz_scheduler_state`;
CREATE TABLE IF NOT EXISTS `qrtz_scheduler_state` (
  `SCHED_NAME` varchar(120) NOT NULL,
  `INSTANCE_NAME` varchar(200) NOT NULL,
  `LAST_CHECKIN_TIME` bigint(13) NOT NULL,
  `CHECKIN_INTERVAL` bigint(13) NOT NULL,
  PRIMARY KEY (`SCHED_NAME`,`INSTANCE_NAME`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  basedb.qrtz_scheduler_state 的数据：~0 rows (大约)
DELETE FROM `qrtz_scheduler_state`;
/*!40000 ALTER TABLE `qrtz_scheduler_state` DISABLE KEYS */;
/*!40000 ALTER TABLE `qrtz_scheduler_state` ENABLE KEYS */;


-- 导出  表 basedb.qrtz_simple_triggers 结构
DROP TABLE IF EXISTS `qrtz_simple_triggers`;
CREATE TABLE IF NOT EXISTS `qrtz_simple_triggers` (
  `SCHED_NAME` varchar(120) NOT NULL,
  `TRIGGER_NAME` varchar(200) NOT NULL,
  `TRIGGER_GROUP` varchar(200) NOT NULL,
  `REPEAT_COUNT` bigint(7) NOT NULL,
  `REPEAT_INTERVAL` bigint(12) NOT NULL,
  `TIMES_TRIGGERED` bigint(10) NOT NULL,
  PRIMARY KEY (`SCHED_NAME`,`TRIGGER_NAME`,`TRIGGER_GROUP`),
  CONSTRAINT `qrtz_simple_triggers_ibfk_1` FOREIGN KEY (`SCHED_NAME`, `TRIGGER_NAME`, `TRIGGER_GROUP`) REFERENCES `qrtz_triggers` (`SCHED_NAME`, `TRIGGER_NAME`, `TRIGGER_GROUP`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  basedb.qrtz_simple_triggers 的数据：~0 rows (大约)
DELETE FROM `qrtz_simple_triggers`;
/*!40000 ALTER TABLE `qrtz_simple_triggers` DISABLE KEYS */;
/*!40000 ALTER TABLE `qrtz_simple_triggers` ENABLE KEYS */;


-- 导出  表 basedb.qrtz_simprop_triggers 结构
DROP TABLE IF EXISTS `qrtz_simprop_triggers`;
CREATE TABLE IF NOT EXISTS `qrtz_simprop_triggers` (
  `SCHED_NAME` varchar(120) NOT NULL,
  `TRIGGER_NAME` varchar(200) NOT NULL,
  `TRIGGER_GROUP` varchar(200) NOT NULL,
  `STR_PROP_1` varchar(512) DEFAULT NULL,
  `STR_PROP_2` varchar(512) DEFAULT NULL,
  `STR_PROP_3` varchar(512) DEFAULT NULL,
  `INT_PROP_1` int(11) DEFAULT NULL,
  `INT_PROP_2` int(11) DEFAULT NULL,
  `LONG_PROP_1` bigint(20) DEFAULT NULL,
  `LONG_PROP_2` bigint(20) DEFAULT NULL,
  `DEC_PROP_1` decimal(13,4) DEFAULT NULL,
  `DEC_PROP_2` decimal(13,4) DEFAULT NULL,
  `BOOL_PROP_1` varchar(1) DEFAULT NULL,
  `BOOL_PROP_2` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`SCHED_NAME`,`TRIGGER_NAME`,`TRIGGER_GROUP`),
  CONSTRAINT `qrtz_simprop_triggers_ibfk_1` FOREIGN KEY (`SCHED_NAME`, `TRIGGER_NAME`, `TRIGGER_GROUP`) REFERENCES `qrtz_triggers` (`SCHED_NAME`, `TRIGGER_NAME`, `TRIGGER_GROUP`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  basedb.qrtz_simprop_triggers 的数据：~0 rows (大约)
DELETE FROM `qrtz_simprop_triggers`;
/*!40000 ALTER TABLE `qrtz_simprop_triggers` DISABLE KEYS */;
/*!40000 ALTER TABLE `qrtz_simprop_triggers` ENABLE KEYS */;


-- 导出  表 basedb.qrtz_triggers 结构
DROP TABLE IF EXISTS `qrtz_triggers`;
CREATE TABLE IF NOT EXISTS `qrtz_triggers` (
  `SCHED_NAME` varchar(120) NOT NULL,
  `TRIGGER_NAME` varchar(200) NOT NULL,
  `TRIGGER_GROUP` varchar(200) NOT NULL,
  `JOB_NAME` varchar(200) NOT NULL,
  `JOB_GROUP` varchar(200) NOT NULL,
  `DESCRIPTION` varchar(250) DEFAULT NULL,
  `NEXT_FIRE_TIME` bigint(13) DEFAULT NULL,
  `PREV_FIRE_TIME` bigint(13) DEFAULT NULL,
  `PRIORITY` int(11) DEFAULT NULL,
  `TRIGGER_STATE` varchar(16) NOT NULL,
  `TRIGGER_TYPE` varchar(8) NOT NULL,
  `START_TIME` bigint(13) NOT NULL,
  `END_TIME` bigint(13) DEFAULT NULL,
  `CALENDAR_NAME` varchar(200) DEFAULT NULL,
  `MISFIRE_INSTR` smallint(2) DEFAULT NULL,
  `JOB_DATA` blob,
  PRIMARY KEY (`SCHED_NAME`,`TRIGGER_NAME`,`TRIGGER_GROUP`),
  KEY `SCHED_NAME` (`SCHED_NAME`,`JOB_NAME`,`JOB_GROUP`),
  CONSTRAINT `qrtz_triggers_ibfk_1` FOREIGN KEY (`SCHED_NAME`, `JOB_NAME`, `JOB_GROUP`) REFERENCES `qrtz_job_details` (`SCHED_NAME`, `JOB_NAME`, `JOB_GROUP`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  basedb.qrtz_triggers 的数据：~1 rows (大约)
DELETE FROM `qrtz_triggers`;
/*!40000 ALTER TABLE `qrtz_triggers` DISABLE KEYS */;
INSERT INTO `qrtz_triggers` (`SCHED_NAME`, `TRIGGER_NAME`, `TRIGGER_GROUP`, `JOB_NAME`, `JOB_GROUP`, `DESCRIPTION`, `NEXT_FIRE_TIME`, `PREV_FIRE_TIME`, `PRIORITY`, `TRIGGER_STATE`, `TRIGGER_TYPE`, `START_TIME`, `END_TIME`, `CALENDAR_NAME`, `MISFIRE_INSTR`, `JOB_DATA`) VALUES
	('quartzScheduler', 'JOBTEST', '222', 'JOBTEST', '222', NULL, 1371718590000, 1371718560000, 5, 'ACQUIRED', 'CRON', 1371694115000, 0, NULL, 0, _binary '');
/*!40000 ALTER TABLE `qrtz_triggers` ENABLE KEYS */;


-- 导出  表 basedb.t_log 结构
DROP TABLE IF EXISTS `t_log`;
CREATE TABLE IF NOT EXISTS `t_log` (
  `id` int(11) NOT NULL,
  `operator` varchar(50) DEFAULT NULL,
  `operatorDate` datetime DEFAULT NULL,
  `descript` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  basedb.t_log 的数据：~77 rows (大约)
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
	(32, 'a', '2013-06-04 12:59:29', '查询账户'),
	(33, 'a', '2013-06-04 16:02:53', '查询账户'),
	(34, 'a', '2013-06-04 16:05:28', '查询账户'),
	(35, 'a', '2013-06-04 16:11:13', '查询账户'),
	(36, 'a', '2013-06-04 16:11:31', '查询角色'),
	(37, 'a', '2013-06-04 16:12:13', '查询日志'),
	(38, 'a', '2013-06-04 16:14:21', '查询账户'),
	(39, 'a', '2013-06-04 16:14:31', '查询账户'),
	(40, 'a', '2013-06-04 16:14:33', '查询账户'),
	(41, 'a', '2013-06-04 16:15:23', '查询账户'),
	(42, 'a', '2013-06-04 16:16:08', '查询账户'),
	(43, 'a', '2013-06-04 16:16:31', '查询账户'),
	(44, 'a', '2013-06-04 16:16:52', '查询账户'),
	(45, 'a', '2013-06-06 13:34:23', '查询账户'),
	(46, 'a', '2013-06-06 13:34:25', '查询角色'),
	(47, 'a', '2013-06-06 13:34:28', '查询日志'),
	(48, 'a', '2013-06-06 13:34:34', '查询日志'),
	(49, 'a', '2013-06-06 13:35:13', '查询角色'),
	(50, 'a', '2013-06-06 13:35:14', '查询账户'),
	(51, 'a', '2013-06-07 11:32:13', '查询账户'),
	(52, 'a', '2013-06-17 09:41:17', '查询账户'),
	(53, 'a', '2013-06-17 09:41:19', '查询角色'),
	(54, 'a', '2013-06-17 09:41:21', '查询日志'),
	(55, 'a', '2013-06-17 09:42:48', '查询账户'),
	(56, 'a', '2013-06-17 09:49:13', '查询账户'),
	(57, 'a', '2013-06-17 09:50:31', '查询角色'),
	(58, 'a', '2013-06-17 09:54:15', '查询账户'),
	(59, 'a', '2013-06-17 09:54:28', '查询角色'),
	(60, 'a', '2013-06-17 09:54:51', '查询角色'),
	(61, 'a', '2013-06-17 09:55:54', '查询账户'),
	(62, 'a', '2013-06-17 09:56:57', '查询角色'),
	(63, 'a', '2013-06-17 09:59:32', '查询角色'),
	(64, 'a', '2013-06-17 10:00:57', '查询角色'),
	(65, 't', '2013-06-17 10:12:01', '查询角色'),
	(66, 't', '2013-06-17 10:13:59', '查询账户'),
	(67, 't', '2013-06-17 10:14:41', '查询角色'),
	(68, 't', '2013-06-17 10:16:07', '查询角色'),
	(69, 't', '2013-06-17 10:17:13', '查询角色'),
	(70, 't', '2013-06-17 10:19:26', '查询角色'),
	(71, 'a', '2013-06-17 10:30:11', '查询账户'),
	(72, 'a', '2013-06-19 14:01:04', '查询角色'),
	(73, 'a', '2013-06-19 14:01:07', '查询账户'),
	(74, 'a', '2013-06-19 15:26:21', '查询日志'),
	(75, 'a', '2013-06-19 15:44:43', '查询账户'),
	(76, 'a', '2013-06-19 15:44:44', '查询角色'),
	(77, 'a', '2013-06-20 09:35:49', '查询账户'),
	(78, 'a', '2013-06-21 09:17:29', '查询账户');
/*!40000 ALTER TABLE `t_log` ENABLE KEYS */;


-- 导出  表 basedb.t_oper 结构
DROP TABLE IF EXISTS `t_oper`;
CREATE TABLE IF NOT EXISTS `t_oper` (
  `oper_id` varchar(32) NOT NULL,
  `oper_name` varchar(32) DEFAULT NULL,
  `oper_enname` varchar(64) DEFAULT NULL,
  `oper_remark` varchar(256) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `modify_time` datetime DEFAULT NULL,
  `os_mark` int(5) DEFAULT NULL,
  PRIMARY KEY (`oper_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  basedb.t_oper 的数据：~1 rows (大约)
DELETE FROM `t_oper`;
/*!40000 ALTER TABLE `t_oper` DISABLE KEYS */;
INSERT INTO `t_oper` (`oper_id`, `oper_name`, `oper_enname`, `oper_remark`, `create_time`, `modify_time`, `os_mark`) VALUES
	('0', '增加用户', '/addUser.html', '增加用户', NULL, NULL, NULL);
/*!40000 ALTER TABLE `t_oper` ENABLE KEYS */;


-- 导出  表 basedb.t_resource 结构
DROP TABLE IF EXISTS `t_resource`;
CREATE TABLE IF NOT EXISTS `t_resource` (
  `resource_id` varchar(32) NOT NULL,
  `resource_name` varchar(32) DEFAULT NULL,
  `resource_enname` varchar(64) DEFAULT NULL,
  `resource_remark` varchar(256) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `modify_time` datetime DEFAULT NULL,
  `os_mark` int(5) DEFAULT NULL,
  PRIMARY KEY (`resource_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  basedb.t_resource 的数据：~1 rows (大约)
DELETE FROM `t_resource`;
/*!40000 ALTER TABLE `t_resource` DISABLE KEYS */;
INSERT INTO `t_resource` (`resource_id`, `resource_name`, `resource_enname`, `resource_remark`, `create_time`, `modify_time`, `os_mark`) VALUES
	('0', '显示当前时间信息', 'show_time', 'show_time', NULL, NULL, NULL);
/*!40000 ALTER TABLE `t_resource` ENABLE KEYS */;


-- 导出  表 basedb.t_role 结构
DROP TABLE IF EXISTS `t_role`;
CREATE TABLE IF NOT EXISTS `t_role` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(10) NOT NULL COMMENT '名称',
  `role_enname` varchar(30) NOT NULL COMMENT '角色英文名',
  `role_remark` varchar(50) NOT NULL COMMENT '描述',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色表';

-- 正在导出表  basedb.t_role 的数据：~2 rows (大约)
DELETE FROM `t_role`;
/*!40000 ALTER TABLE `t_role` DISABLE KEYS */;
INSERT INTO `t_role` (`role_id`, `role_name`, `role_enname`, `role_remark`) VALUES
	(0, 'admin', 'admin', 'admin'),
	(1, 'user', 'user', 'user');
/*!40000 ALTER TABLE `t_role` ENABLE KEYS */;


-- 导出  表 basedb.t_role_oper 结构
DROP TABLE IF EXISTS `t_role_oper`;
CREATE TABLE IF NOT EXISTS `t_role_oper` (
  `oper_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`oper_id`,`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  basedb.t_role_oper 的数据：~1 rows (大约)
DELETE FROM `t_role_oper`;
/*!40000 ALTER TABLE `t_role_oper` DISABLE KEYS */;
INSERT INTO `t_role_oper` (`oper_id`, `role_id`) VALUES
	(0, 0);
/*!40000 ALTER TABLE `t_role_oper` ENABLE KEYS */;


-- 导出  表 basedb.t_role_resource 结构
DROP TABLE IF EXISTS `t_role_resource`;
CREATE TABLE IF NOT EXISTS `t_role_resource` (
  `resource_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`resource_id`,`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  basedb.t_role_resource 的数据：~1 rows (大约)
DELETE FROM `t_role_resource`;
/*!40000 ALTER TABLE `t_role_resource` DISABLE KEYS */;
INSERT INTO `t_role_resource` (`resource_id`, `role_id`) VALUES
	(0, 0);
/*!40000 ALTER TABLE `t_role_resource` ENABLE KEYS */;


-- 导出  表 basedb.t_role_url 结构
DROP TABLE IF EXISTS `t_role_url`;
CREATE TABLE IF NOT EXISTS `t_role_url` (
  `url_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`url_id`,`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  basedb.t_role_url 的数据：~5 rows (大约)
DELETE FROM `t_role_url`;
/*!40000 ALTER TABLE `t_role_url` DISABLE KEYS */;
INSERT INTO `t_role_url` (`url_id`, `role_id`) VALUES
	(0, 0),
	(0, 1),
	(1, 1),
	(3, 0),
	(3, 1);
/*!40000 ALTER TABLE `t_role_url` ENABLE KEYS */;


-- 导出  表 basedb.t_seq 结构
DROP TABLE IF EXISTS `t_seq`;
CREATE TABLE IF NOT EXISTS `t_seq` (
  `id` varchar(50) NOT NULL,
  `seq` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  basedb.t_seq 的数据：~2 rows (大约)
DELETE FROM `t_seq`;
/*!40000 ALTER TABLE `t_seq` DISABLE KEYS */;
INSERT INTO `t_seq` (`id`, `seq`) VALUES
	('TLOGID', 78),
	('USERID', 3);
/*!40000 ALTER TABLE `t_seq` ENABLE KEYS */;


-- 导出  表 basedb.t_url 结构
DROP TABLE IF EXISTS `t_url`;
CREATE TABLE IF NOT EXISTS `t_url` (
  `url_id` varchar(32) NOT NULL,
  `url_name` varchar(32) DEFAULT NULL,
  `URL` varchar(128) DEFAULT NULL,
  `oper_makr` varchar(32) DEFAULT NULL,
  `mark` varchar(256) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `modify_time` datetime DEFAULT NULL,
  `os_mark` int(5) DEFAULT NULL,
  PRIMARY KEY (`url_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  basedb.t_url 的数据：~3 rows (大约)
DELETE FROM `t_url`;
/*!40000 ALTER TABLE `t_url` DISABLE KEYS */;
INSERT INTO `t_url` (`url_id`, `url_name`, `URL`, `oper_makr`, `mark`, `create_time`, `modify_time`, `os_mark`) VALUES
	('0', '账户管理', '/toUserList.html', NULL, '账户管理', NULL, NULL, NULL),
	('1', '角色管理', '/toRoles.html', NULL, '角色管理', NULL, NULL, NULL),
	('3', '主界面', '/main.html', NULL, NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `t_url` ENABLE KEYS */;


-- 导出  表 basedb.t_user 结构
DROP TABLE IF EXISTS `t_user`;
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

-- 正在导出表  basedb.t_user 的数据：~3 rows (大约)
DELETE FROM `t_user`;
/*!40000 ALTER TABLE `t_user` DISABLE KEYS */;
INSERT INTO `t_user` (`user_id`, `username`, `userpwd`, `email`, `moble`, `status`, `receive`, `changeUser`, `changeTime`) VALUES
	(0, 'a', '96e79218965eb72c92a549dd5a330112', NULL, NULL, 1, 1, 'a', '2013-06-04'),
	(2, 't', '96e79218965eb72c92a549dd5a330112', NULL, NULL, 1, 1, 'a', '2013-06-04'),
	(3, 's', 'e10adc3949ba59abbe56e057f20f883e', NULL, NULL, 1, 1, 'a', '2013-06-04');
/*!40000 ALTER TABLE `t_user` ENABLE KEYS */;


-- 导出  表 basedb.t_user_role 结构
DROP TABLE IF EXISTS `t_user_role`;
CREATE TABLE IF NOT EXISTS `t_user_role` (
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  basedb.t_user_role 的数据：~3 rows (大约)
DELETE FROM `t_user_role`;
/*!40000 ALTER TABLE `t_user_role` DISABLE KEYS */;
INSERT INTO `t_user_role` (`user_id`, `role_id`) VALUES
	(0, 0),
	(2, 1),
	(3, 0);
/*!40000 ALTER TABLE `t_user_role` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
