#
# TABLE STRUCTURE FOR: booking
#

DROP TABLE IF EXISTS `booking`;

CREATE TABLE `booking` (
  `booking_id` int(11) NOT NULL AUTO_INCREMENT,
  `skill_id` int(11) NOT NULL,
  `requester_id` int(11) NOT NULL,
  `requestee_id` int(11) NOT NULL,
  PRIMARY KEY (`booking_id`),
  KEY `skill_id` (`skill_id`),
  KEY `requester_id` (`requester_id`),
  KEY `requestee_id` (`requestee_id`),
  CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`skill_id`) REFERENCES `skill` (`skill_id`),
  CONSTRAINT `booking_ibfk_2` FOREIGN KEY (`requester_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `booking_ibfk_3` FOREIGN KEY (`requestee_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `booking` (`booking_id`, `skill_id`, `requester_id`, `requestee_id`) VALUES (1, 20, 13, 17);
INSERT INTO `booking` (`booking_id`, `skill_id`, `requester_id`, `requestee_id`) VALUES (2, 10, 18, 8);
INSERT INTO `booking` (`booking_id`, `skill_id`, `requester_id`, `requestee_id`) VALUES (3, 7, 19, 2);
INSERT INTO `booking` (`booking_id`, `skill_id`, `requester_id`, `requestee_id`) VALUES (4, 2, 4, 19);
INSERT INTO `booking` (`booking_id`, `skill_id`, `requester_id`, `requestee_id`) VALUES (5, 10, 2, 13);
INSERT INTO `booking` (`booking_id`, `skill_id`, `requester_id`, `requestee_id`) VALUES (6, 15, 11, 11);
INSERT INTO `booking` (`booking_id`, `skill_id`, `requester_id`, `requestee_id`) VALUES (7, 18, 2, 8);
INSERT INTO `booking` (`booking_id`, `skill_id`, `requester_id`, `requestee_id`) VALUES (8, 16, 2, 9);
INSERT INTO `booking` (`booking_id`, `skill_id`, `requester_id`, `requestee_id`) VALUES (9, 15, 2, 16);
INSERT INTO `booking` (`booking_id`, `skill_id`, `requester_id`, `requestee_id`) VALUES (10, 10, 5, 8);
INSERT INTO `booking` (`booking_id`, `skill_id`, `requester_id`, `requestee_id`) VALUES (11, 6, 4, 1);
INSERT INTO `booking` (`booking_id`, `skill_id`, `requester_id`, `requestee_id`) VALUES (12, 3, 14, 18);
INSERT INTO `booking` (`booking_id`, `skill_id`, `requester_id`, `requestee_id`) VALUES (13, 11, 1, 17);
INSERT INTO `booking` (`booking_id`, `skill_id`, `requester_id`, `requestee_id`) VALUES (14, 12, 2, 20);
INSERT INTO `booking` (`booking_id`, `skill_id`, `requester_id`, `requestee_id`) VALUES (15, 11, 12, 2);
INSERT INTO `booking` (`booking_id`, `skill_id`, `requester_id`, `requestee_id`) VALUES (16, 3, 6, 12);
INSERT INTO `booking` (`booking_id`, `skill_id`, `requester_id`, `requestee_id`) VALUES (17, 14, 3, 13);
INSERT INTO `booking` (`booking_id`, `skill_id`, `requester_id`, `requestee_id`) VALUES (18, 1, 18, 15);
INSERT INTO `booking` (`booking_id`, `skill_id`, `requester_id`, `requestee_id`) VALUES (19, 10, 13, 17);
INSERT INTO `booking` (`booking_id`, `skill_id`, `requester_id`, `requestee_id`) VALUES (20, 5, 2, 1);


