CREATE TABLE IF NOT EXISTS user (
	`id` VARCHAR(20) COLLATE utf8_unicode_ci NOT NULL COMMENT '編號',
	`user_name` VARCHAR(20) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '使用者名稱',
    `password` VARCHAR(50) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '密碼',
	`email` VARCHAR(80) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'email',
	`avatar_url` VARCHAR(200) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '地址',
    `created_date` DATETIME DEFAULT NULL COMMENT '建立時間',
    `updated_date` DATETIME DEFAULT NULL COMMENT '更新時間',
	PRIMARY KEY (`ID`)
) ENGINE=INNODB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='使用者';