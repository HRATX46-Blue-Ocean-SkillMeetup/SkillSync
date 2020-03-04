#
# TABLE STRUCTURE FOR: skill
#

DROP TABLE IF EXISTS `skill`;

CREATE TABLE `skill` (
  `skill_id` int(11) NOT NULL AUTO_INCREMENT,
  `categories` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `skill` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`skill_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `skill` (`skill_id`, `categories`, `skill`) VALUES (1, 'voluptas', 'libero');
INSERT INTO `skill` (`skill_id`, `categories`, `skill`) VALUES (2, 'in', 'et');
INSERT INTO `skill` (`skill_id`, `categories`, `skill`) VALUES (3, 'consequatur', 'deserunt');
INSERT INTO `skill` (`skill_id`, `categories`, `skill`) VALUES (4, 'quia', 'vel');
INSERT INTO `skill` (`skill_id`, `categories`, `skill`) VALUES (5, 'dolorum', 'aut');
INSERT INTO `skill` (`skill_id`, `categories`, `skill`) VALUES (6, 'enim', 'velit');
INSERT INTO `skill` (`skill_id`, `categories`, `skill`) VALUES (7, 'corporis', 'rerum');
INSERT INTO `skill` (`skill_id`, `categories`, `skill`) VALUES (8, 'blanditiis', 'voluptatem');
INSERT INTO `skill` (`skill_id`, `categories`, `skill`) VALUES (9, 'in', 'et');
INSERT INTO `skill` (`skill_id`, `categories`, `skill`) VALUES (10, 'in', 'molestiae');
INSERT INTO `skill` (`skill_id`, `categories`, `skill`) VALUES (11, 'facere', 'rerum');
INSERT INTO `skill` (`skill_id`, `categories`, `skill`) VALUES (12, 'quidem', 'velit');
INSERT INTO `skill` (`skill_id`, `categories`, `skill`) VALUES (13, 'eum', 'in');
INSERT INTO `skill` (`skill_id`, `categories`, `skill`) VALUES (14, 'nulla', 'aut');
INSERT INTO `skill` (`skill_id`, `categories`, `skill`) VALUES (15, 'et', 'animi');
INSERT INTO `skill` (`skill_id`, `categories`, `skill`) VALUES (16, 'voluptatem', 'modi');
INSERT INTO `skill` (`skill_id`, `categories`, `skill`) VALUES (17, 'cumque', 'perferendis');
INSERT INTO `skill` (`skill_id`, `categories`, `skill`) VALUES (18, 'earum', 'ullam');
INSERT INTO `skill` (`skill_id`, `categories`, `skill`) VALUES (19, 'quia', 'id');
INSERT INTO `skill` (`skill_id`, `categories`, `skill`) VALUES (20, 'saepe', 'non');


