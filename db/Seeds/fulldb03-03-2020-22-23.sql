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


#
# TABLE STRUCTURE FOR: message
#

DROP TABLE IF EXISTS `message`;

CREATE TABLE `message` (
  `message_id` int(11) NOT NULL AUTO_INCREMENT,
  `message_text` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `message_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `visited` tinyint(1) DEFAULT NULL,
  `from_username` int(11) NOT NULL,
  `to_username` int(11) NOT NULL,
  PRIMARY KEY (`message_id`),
  KEY `from_username` (`from_username`),
  KEY `to_username` (`to_username`),
  CONSTRAINT `message_ibfk_1` FOREIGN KEY (`from_username`) REFERENCES `user` (`user_id`),
  CONSTRAINT `message_ibfk_2` FOREIGN KEY (`to_username`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `message` (`message_id`, `message_text`, `message_date`, `visited`, `from_username`, `to_username`) VALUES (1, 'Ipsum distinctio suscipit et deserunt labore. Sapiente aut iure voluptas totam esse. Quibusdam aut corrupti eligendi. Maiores molestiae aut voluptatem quas.', '2008-03-31 09:21:36', 1, 13, 19);
INSERT INTO `message` (`message_id`, `message_text`, `message_date`, `visited`, `from_username`, `to_username`) VALUES (2, 'Iste ex sed illo ad. Qui vitae necessitatibus aliquam quas veniam quam et sit. Ipsam aut sint iusto placeat.', '1997-06-21 08:21:50', 1, 8, 12);
INSERT INTO `message` (`message_id`, `message_text`, `message_date`, `visited`, `from_username`, `to_username`) VALUES (3, 'Quos laudantium autem consequuntur qui nobis pariatur. Et recusandae error eos eaque officia quae. Omnis distinctio ab omnis repellendus nemo voluptas minima. Est voluptatibus natus a eius. Qui et rerum provident et consectetur quos.', '1974-07-11 06:56:37', 1, 18, 15);
INSERT INTO `message` (`message_id`, `message_text`, `message_date`, `visited`, `from_username`, `to_username`) VALUES (4, 'Qui ut laborum voluptatem at ipsa facere. Sit vitae nemo consequuntur quia. Non quam voluptate voluptatem. Est nisi quisquam recusandae magni non eaque.', '1982-02-26 10:23:16', 0, 13, 10);
INSERT INTO `message` (`message_id`, `message_text`, `message_date`, `visited`, `from_username`, `to_username`) VALUES (5, 'Qui quia ad pariatur omnis doloremque. Accusantium quia sapiente quae architecto eum error et. Sit autem consequatur nam facere. Aliquam hic nam eius eum aut dolor. Enim quos ullam omnis qui ducimus totam ab est.', '1986-11-29 21:00:02', 0, 11, 2);
INSERT INTO `message` (`message_id`, `message_text`, `message_date`, `visited`, `from_username`, `to_username`) VALUES (6, 'Rerum corrupti id numquam eius. Error iure numquam cumque quae laboriosam quod odio. Facilis distinctio sequi ex doloremque rerum alias. Dolorum magnam aspernatur et ad.', '1989-05-21 17:32:14', 0, 4, 4);
INSERT INTO `message` (`message_id`, `message_text`, `message_date`, `visited`, `from_username`, `to_username`) VALUES (7, 'Cumque eius aut aut officia maxime. Sint quia dignissimos veritatis eos excepturi nobis id. Repellendus molestias quia provident velit commodi accusamus.', '1985-03-18 16:38:42', 1, 8, 17);
INSERT INTO `message` (`message_id`, `message_text`, `message_date`, `visited`, `from_username`, `to_username`) VALUES (8, 'Suscipit fugiat voluptate ut in sit. Sapiente quo enim soluta molestias. Et provident quia voluptate. Cupiditate nesciunt perferendis tenetur odio omnis blanditiis labore.', '2004-01-23 10:40:08', 0, 19, 4);
INSERT INTO `message` (`message_id`, `message_text`, `message_date`, `visited`, `from_username`, `to_username`) VALUES (9, 'Tempore deserunt accusamus rem ut. Provident praesentium pariatur velit ut corrupti consequatur quia nobis.', '2014-05-09 22:38:04', 1, 2, 10);
INSERT INTO `message` (`message_id`, `message_text`, `message_date`, `visited`, `from_username`, `to_username`) VALUES (10, 'Rerum suscipit architecto et quisquam id maiores cumque. Quam quo vel omnis iusto delectus. Sunt quis alias nostrum qui perferendis maiores molestiae.', '2012-09-07 22:55:16', 0, 13, 4);
INSERT INTO `message` (`message_id`, `message_text`, `message_date`, `visited`, `from_username`, `to_username`) VALUES (11, 'Ad consequatur consequatur asperiores. Corrupti voluptas necessitatibus officiis quo debitis odio. Vel illo doloremque consequatur ut sunt placeat.', '1997-03-09 18:53:58', 0, 7, 11);
INSERT INTO `message` (`message_id`, `message_text`, `message_date`, `visited`, `from_username`, `to_username`) VALUES (12, 'Rem sapiente et et velit qui iusto ut. Sed atque sapiente explicabo voluptates. Eligendi perspiciatis quo atque facere. Aut maxime assumenda nam omnis possimus sequi mollitia. Eum sed sunt culpa nam qui eum et.', '2010-06-15 01:04:38', 0, 10, 1);
INSERT INTO `message` (`message_id`, `message_text`, `message_date`, `visited`, `from_username`, `to_username`) VALUES (13, 'Vitae cum et tenetur eaque rerum nostrum. Et maxime doloribus repudiandae aut est. Voluptatum labore doloribus et autem. Autem placeat cumque nobis est.', '2007-09-19 21:31:19', 0, 4, 4);
INSERT INTO `message` (`message_id`, `message_text`, `message_date`, `visited`, `from_username`, `to_username`) VALUES (14, 'Saepe nobis nemo eaque libero qui quasi. Expedita non neque dolorem. Repellat ad earum neque eveniet maxime consequatur. Molestiae explicabo sed unde nobis non laboriosam.', '2020-02-28 05:42:44', 1, 6, 19);
INSERT INTO `message` (`message_id`, `message_text`, `message_date`, `visited`, `from_username`, `to_username`) VALUES (15, 'Modi est et incidunt quia rem a atque qui. Minima et officiis saepe quidem aut maiores dolores. Illum ea illum ut dolore. Harum fugiat et cum sed quaerat.', '1989-07-12 04:00:10', 1, 17, 19);
INSERT INTO `message` (`message_id`, `message_text`, `message_date`, `visited`, `from_username`, `to_username`) VALUES (16, 'Aut quis voluptates nisi iure. Voluptatum est et et. Est voluptas sit eaque beatae dolore. Repellendus officia eligendi nam id et quaerat vel eligendi.', '2001-09-19 04:17:18', 1, 15, 10);
INSERT INTO `message` (`message_id`, `message_text`, `message_date`, `visited`, `from_username`, `to_username`) VALUES (17, 'Natus repudiandae quam earum dolorem. Eaque quo facilis ipsa porro nulla non. Doloremque quia delectus vitae dolore eveniet.', '1982-01-23 17:04:50', 0, 17, 2);
INSERT INTO `message` (`message_id`, `message_text`, `message_date`, `visited`, `from_username`, `to_username`) VALUES (18, 'Maiores sit dolor assumenda expedita enim sint. Minima eaque repellendus molestiae. Voluptatum maxime voluptate placeat veritatis ab et quo recusandae.', '2002-08-22 04:43:19', 1, 1, 15);
INSERT INTO `message` (`message_id`, `message_text`, `message_date`, `visited`, `from_username`, `to_username`) VALUES (19, 'Voluptatem repellat placeat sapiente perspiciatis dolor culpa. Architecto aut veritatis est ut omnis. Quas id voluptatibus qui temporibus. Ea sit voluptates quis sed ut. Nesciunt ea beatae tenetur perferendis cupiditate illo et.', '2012-06-01 03:15:56', 1, 17, 14);
INSERT INTO `message` (`message_id`, `message_text`, `message_date`, `visited`, `from_username`, `to_username`) VALUES (20, 'Maiores illum vero aut. Quod occaecati dolore fuga inventore suscipit dignissimos praesentium. Aut eaque debitis dolores nihil veniam ea vero. Doloremque consequuntur quis nobis omnis illo quo in. Commodi et velit qui tenetur libero.', '1974-10-27 15:55:12', 1, 4, 8);


#
# TABLE STRUCTURE FOR: posting
#

DROP TABLE IF EXISTS `posting`;

CREATE TABLE `posting` (
  `posting_id` int(11) NOT NULL AUTO_INCREMENT,
  `role` enum('mentor','mentee') COLLATE utf8_unicode_ci DEFAULT NULL,
  `skill_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`posting_id`),
  KEY `skill_id` (`skill_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `posting_ibfk_1` FOREIGN KEY (`skill_id`) REFERENCES `skill` (`skill_id`),
  CONSTRAINT `posting_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `posting` (`posting_id`, `role`, `skill_id`, `user_id`, `creation_date`) VALUES (1, 'mentor', 1, 1, '1980-01-23 12:28:52');
INSERT INTO `posting` (`posting_id`, `role`, `skill_id`, `user_id`, `creation_date`) VALUES (2, 'mentee', 5, 2, '2004-05-13 18:57:57');
INSERT INTO `posting` (`posting_id`, `role`, `skill_id`, `user_id`, `creation_date`) VALUES (3, 'mentor', 9, 3, '2017-04-01 14:50:15');
INSERT INTO `posting` (`posting_id`, `role`, `skill_id`, `user_id`, `creation_date`) VALUES (4, 'mentee', 13, 4, '2004-06-09 03:31:39');
INSERT INTO `posting` (`posting_id`, `role`, `skill_id`, `user_id`, `creation_date`) VALUES (5, 'mentor', 17, 5, '1984-04-26 12:37:11');
INSERT INTO `posting` (`posting_id`, `role`, `skill_id`, `user_id`, `creation_date`) VALUES (6, 'mentee', 2, 6, '1988-04-27 13:22:32');
INSERT INTO `posting` (`posting_id`, `role`, `skill_id`, `user_id`, `creation_date`) VALUES (7, 'mentor', 6, 7, '2007-05-17 04:11:51');
INSERT INTO `posting` (`posting_id`, `role`, `skill_id`, `user_id`, `creation_date`) VALUES (8, 'mentee', 10, 8, '1986-07-26 07:06:19');
INSERT INTO `posting` (`posting_id`, `role`, `skill_id`, `user_id`, `creation_date`) VALUES (9, 'mentor', 14, 9, '1991-07-13 18:32:43');
INSERT INTO `posting` (`posting_id`, `role`, `skill_id`, `user_id`, `creation_date`) VALUES (10, 'mentee', 18, 10, '1997-12-07 11:37:47');
INSERT INTO `posting` (`posting_id`, `role`, `skill_id`, `user_id`, `creation_date`) VALUES (11, 'mentor', 3, 11, '1987-10-10 09:19:19');
INSERT INTO `posting` (`posting_id`, `role`, `skill_id`, `user_id`, `creation_date`) VALUES (12, 'mentee', 7, 12, '2002-02-15 01:30:14');
INSERT INTO `posting` (`posting_id`, `role`, `skill_id`, `user_id`, `creation_date`) VALUES (13, 'mentor', 11, 13, '1991-07-30 03:29:27');
INSERT INTO `posting` (`posting_id`, `role`, `skill_id`, `user_id`, `creation_date`) VALUES (14, 'mentee', 15, 14, '1992-02-07 08:24:09');
INSERT INTO `posting` (`posting_id`, `role`, `skill_id`, `user_id`, `creation_date`) VALUES (15, 'mentor', 19, 15, '1993-08-11 07:28:07');
INSERT INTO `posting` (`posting_id`, `role`, `skill_id`, `user_id`, `creation_date`) VALUES (16, 'mentee', 4, 16, '2004-11-05 20:15:44');
INSERT INTO `posting` (`posting_id`, `role`, `skill_id`, `user_id`, `creation_date`) VALUES (17, 'mentor', 8, 17, '1997-08-21 06:00:58');
INSERT INTO `posting` (`posting_id`, `role`, `skill_id`, `user_id`, `creation_date`) VALUES (18, 'mentee', 12, 18, '1987-08-02 15:28:31');
INSERT INTO `posting` (`posting_id`, `role`, `skill_id`, `user_id`, `creation_date`) VALUES (19, 'mentor', 16, 19, '2005-10-29 23:19:00');
INSERT INTO `posting` (`posting_id`, `role`, `skill_id`, `user_id`, `creation_date`) VALUES (20, 'mentee', 20, 20, '1979-07-31 14:02:07');


#
# TABLE STRUCTURE FOR: review
#

DROP TABLE IF EXISTS `review`;

CREATE TABLE `review` (
  `review_id` int(11) NOT NULL AUTO_INCREMENT,
  `rating` tinyint(4) NOT NULL,
  `skill_id` int(11) NOT NULL,
  `description` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `reviewer_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `review_date` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`review_id`),
  KEY `skill_id` (`skill_id`),
  KEY `user_id` (`user_id`),
  KEY `reviewer_id` (`reviewer_id`),
  CONSTRAINT `review_ibfk_1` FOREIGN KEY (`skill_id`) REFERENCES `skill` (`skill_id`),
  CONSTRAINT `review_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `review_ibfk_3` FOREIGN KEY (`reviewer_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `review` (`review_id`, `rating`, `skill_id`, `description`, `reviewer_id`, `user_id`, `review_date`) VALUES (1, 5, 1, 'Est qui quaerat voluptatem esse accusantium maiores. Expedita est eum exercitationem qui. Unde soluta mollitia eum nihil eum iusto.', 11, 20, '2006-07-04 15:16:43');
INSERT INTO `review` (`review_id`, `rating`, `skill_id`, `description`, `reviewer_id`, `user_id`, `review_date`) VALUES (2, 1, 5, 'Molestiae asperiores rerum impedit totam. Repellendus quibusdam in at harum et quas. Possimus quo totam modi aspernatur cupiditate delectus beatae.', 15, 14, '1980-01-21 06:28:59');
INSERT INTO `review` (`review_id`, `rating`, `skill_id`, `description`, `reviewer_id`, `user_id`, `review_date`) VALUES (3, 5, 2, 'Eaque sequi et non suscipit at. Voluptates suscipit non rerum ut accusantium. Aliquam aperiam sunt autem vel iste. Velit esse et alias.', 10, 18, '2000-10-25 14:28:01');
INSERT INTO `review` (`review_id`, `rating`, `skill_id`, `description`, `reviewer_id`, `user_id`, `review_date`) VALUES (4, 2, 9, 'Adipisci iste praesentium voluptatum. Quaerat ut neque consequatur velit voluptatem optio hic. Voluptatum ullam ipsum quibusdam autem.', 2, 4, '1975-09-09 05:58:47');
INSERT INTO `review` (`review_id`, `rating`, `skill_id`, `description`, `reviewer_id`, `user_id`, `review_date`) VALUES (5, 2, 2, 'Ab sed corrupti eius molestiae et. Et at sapiente unde voluptatem et totam. Optio error omnis velit aut iure esse.', 8, 5, '1971-06-05 15:22:27');
INSERT INTO `review` (`review_id`, `rating`, `skill_id`, `description`, `reviewer_id`, `user_id`, `review_date`) VALUES (6, 1, 14, 'Inventore neque autem facere ut sunt. At corporis occaecati id sunt velit provident neque nostrum.', 6, 13, '1982-12-27 11:48:28');
INSERT INTO `review` (`review_id`, `rating`, `skill_id`, `description`, `reviewer_id`, `user_id`, `review_date`) VALUES (7, 1, 19, 'Quia vitae eum aliquam vitae eligendi sint. Ut ab consequuntur molestias maxime aliquam beatae. Facere ratione fuga earum et voluptatem. Assumenda fugit sequi voluptate.', 17, 18, '2014-02-13 16:40:05');
INSERT INTO `review` (`review_id`, `rating`, `skill_id`, `description`, `reviewer_id`, `user_id`, `review_date`) VALUES (8, 3, 12, 'Expedita quasi earum recusandae. Id necessitatibus et similique nemo. Nulla dolor pariatur fugit a suscipit corporis.', 5, 4, '1977-02-21 23:10:05');
INSERT INTO `review` (`review_id`, `rating`, `skill_id`, `description`, `reviewer_id`, `user_id`, `review_date`) VALUES (9, 4, 6, 'Velit dolor itaque et ipsa. Et aut et ut recusandae. Et quam labore deserunt eaque. Et eos provident laborum possimus rerum est est.', 1, 19, '1987-02-13 09:28:20');
INSERT INTO `review` (`review_id`, `rating`, `skill_id`, `description`, `reviewer_id`, `user_id`, `review_date`) VALUES (10, 3, 9, 'Tempore et doloremque voluptas beatae enim. Placeat numquam numquam libero laborum quas qui quis nam.', 1, 5, '1999-03-05 13:51:09');
INSERT INTO `review` (`review_id`, `rating`, `skill_id`, `description`, `reviewer_id`, `user_id`, `review_date`) VALUES (11, 4, 4, 'Distinctio repellat sed provident eligendi harum deserunt quasi sit. Ut consequuntur quas repellendus velit repellendus occaecati recusandae. Optio id eos voluptates laboriosam corrupti dolor.', 2, 16, '2018-09-20 22:20:43');
INSERT INTO `review` (`review_id`, `rating`, `skill_id`, `description`, `reviewer_id`, `user_id`, `review_date`) VALUES (12, 1, 4, 'Similique est est ut autem id. Deleniti amet laborum quas quos et. Et est consequatur molestias magnam quia temporibus. Dolores deleniti provident voluptatem aut et.', 7, 10, '1973-12-02 17:04:25');
INSERT INTO `review` (`review_id`, `rating`, `skill_id`, `description`, `reviewer_id`, `user_id`, `review_date`) VALUES (13, 1, 18, 'Ipsum adipisci doloremque vero ipsum consequatur accusantium ut. Harum labore neque et in a. Ad et recusandae aut numquam minima et vel. Provident cum omnis accusantium quisquam beatae illo consequatur.', 8, 20, '2005-07-09 00:25:33');
INSERT INTO `review` (`review_id`, `rating`, `skill_id`, `description`, `reviewer_id`, `user_id`, `review_date`) VALUES (14, 5, 15, 'Vero ut veritatis dolores. Commodi enim fugit animi perferendis. Ut molestias quam natus ratione sunt commodi asperiores illo. Maxime quis deserunt corrupti autem minima reiciendis quae.', 17, 1, '1970-07-13 00:37:10');
INSERT INTO `review` (`review_id`, `rating`, `skill_id`, `description`, `reviewer_id`, `user_id`, `review_date`) VALUES (15, 1, 18, 'Recusandae error ut sunt. Ex esse quidem qui ducimus doloremque. Tempore ad quibusdam consequatur totam.', 18, 9, '1991-06-08 20:27:35');
INSERT INTO `review` (`review_id`, `rating`, `skill_id`, `description`, `reviewer_id`, `user_id`, `review_date`) VALUES (16, 4, 3, 'Dolor sed facere est aut dolor aut quas. Autem sapiente dolor perspiciatis aut rerum eum dolor quam. Cum et ipsa qui labore inventore. Dignissimos mollitia aut maiores dolor praesentium.', 11, 14, '2002-06-21 13:32:52');
INSERT INTO `review` (`review_id`, `rating`, `skill_id`, `description`, `reviewer_id`, `user_id`, `review_date`) VALUES (17, 4, 16, 'Ut adipisci veritatis molestiae modi sed. Quia voluptatem aspernatur suscipit et dolor eveniet vero. Libero voluptate rerum quia eos. Voluptates nihil totam quo quo provident.', 9, 11, '2015-12-11 08:19:07');
INSERT INTO `review` (`review_id`, `rating`, `skill_id`, `description`, `reviewer_id`, `user_id`, `review_date`) VALUES (18, 3, 13, 'Quaerat at id et deleniti aut est qui. Sapiente quaerat qui exercitationem qui. Aut voluptatum consequatur quaerat sed enim ut occaecati. Autem architecto consectetur magni veniam quo delectus ex.', 1, 15, '2000-06-17 19:12:39');
INSERT INTO `review` (`review_id`, `rating`, `skill_id`, `description`, `reviewer_id`, `user_id`, `review_date`) VALUES (19, 1, 16, 'Qui quas nihil quae reiciendis. Adipisci qui eos atque assumenda facere et omnis. Repellat non commodi consequatur at aliquid et. Magnam quibusdam et dolore a fugit voluptatem.', 7, 16, '1974-03-22 19:38:27');
INSERT INTO `review` (`review_id`, `rating`, `skill_id`, `description`, `reviewer_id`, `user_id`, `review_date`) VALUES (20, 1, 14, 'Eum non et quae eaque vitae. Cum facilis earum est modi architecto ex. At rerum eos aperiam accusamus.', 16, 17, '1978-08-18 15:23:46');


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


#
# TABLE STRUCTURE FOR: test
#

DROP TABLE IF EXISTS `test`;

CREATE TABLE `test` (
  `likes` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `test` (`likes`) VALUES (5);


#
# TABLE STRUCTURE FOR: user
#

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` char(64) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `location` char(5) COLLATE utf8_unicode_ci NOT NULL,
  `bio` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_photo` text COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `user` (`user_id`, `email`, `password`, `username`, `location`, `bio`, `user_photo`) VALUES (1, 'qwyman@example.org', 'dc11eaeb30d0037b3ad260fb8a665a4acbf1ed24', 'xwiza', '63204', 'Voluptas sed soluta ipsum nisi consectetur odit quia. Fugit aut consequatur doloremque ipsam. Eaque a id eum qui expedita at.', 'http://lorempixel.com/640/480/');
INSERT INTO `user` (`user_id`, `email`, `password`, `username`, `location`, `bio`, `user_photo`) VALUES (2, 'jaleel72@example.com', '8c9d0e814f7e3b02056ffe829751f002ef8e33c0', 'cathrine.klein', '41245', 'Est officiis et aliquam adipisci. Alias dolor debitis non alias culpa. Quia quaerat eius pariatur qui nostrum. Eos qui nostrum qui harum corporis ex quasi.', 'http://lorempixel.com/640/480/');
INSERT INTO `user` (`user_id`, `email`, `password`, `username`, `location`, `bio`, `user_photo`) VALUES (3, 'walter.nasir@example.com', 'bd5b8613456e7935b6fa13b13d03cf953ea2d609', 'ybogan', '92022', 'Veniam aut totam deleniti vero voluptatum. Asperiores repudiandae et totam vero qui et et. Aut et molestiae iusto rem voluptates dolorem aut qui.', 'http://lorempixel.com/640/480/');
INSERT INTO `user` (`user_id`, `email`, `password`, `username`, `location`, `bio`, `user_photo`) VALUES (4, 'thiel.lourdes@example.org', 'c591aeaae79ac7a45b967d3eca3b3eedb22cf305', 'schmeler.vilma', '84644', 'Quae nisi ut qui. Et eaque voluptas aut suscipit. Et omnis voluptatem placeat aut nostrum et deserunt.', 'http://lorempixel.com/640/480/');
INSERT INTO `user` (`user_id`, `email`, `password`, `username`, `location`, `bio`, `user_photo`) VALUES (5, 'ari.senger@example.org', 'c7d05df20e866fed749a94b46a0bc2b4dd555563', 'haag.haylie', '70296', 'Excepturi deleniti sed quidem. Minus mollitia assumenda a et. Optio sequi accusantium maiores dicta tempora delectus.', 'http://lorempixel.com/640/480/');
INSERT INTO `user` (`user_id`, `email`, `password`, `username`, `location`, `bio`, `user_photo`) VALUES (6, 'lavina45@example.net', '92ad2b5a317fd95a2107fc92e0964db922fc404e', 'ndenesik', '88938', 'Est asperiores sed et consequatur. Quam aut totam iure dolore omnis. Eligendi accusamus omnis rerum quo vel iure voluptatem. Occaecati voluptatem incidunt quis nobis impedit et repellendus.', 'http://lorempixel.com/640/480/');
INSERT INTO `user` (`user_id`, `email`, `password`, `username`, `location`, `bio`, `user_photo`) VALUES (7, 'tessie.goldner@example.com', '30ac143f44508aa6964dc27fc3a16e69e554503f', 'xkunze', '65379', 'Non cum quibusdam ut id voluptatum voluptatem. Reiciendis quasi recusandae rem dolorem sint expedita. Reiciendis praesentium sint voluptatem.', 'http://lorempixel.com/640/480/');
INSERT INTO `user` (`user_id`, `email`, `password`, `username`, `location`, `bio`, `user_photo`) VALUES (8, 'christina74@example.com', '20008253c0705f3102ed55661486ac6b4cbcc60d', 'glehner', '69655', 'Sint aut vel qui fugiat unde consequatur. Eum quos facilis praesentium inventore est sit. Quaerat exercitationem illum aut itaque laboriosam.', 'http://lorempixel.com/640/480/');
INSERT INTO `user` (`user_id`, `email`, `password`, `username`, `location`, `bio`, `user_photo`) VALUES (9, 'april.marks@example.com', 'c3a84e81cc6afc1720dbeeb8b3e7ef8e0816a559', 'gloria92', '14336', 'Eveniet ut quasi a itaque dolores corrupti nulla. Id laudantium omnis voluptatibus et hic. Optio tenetur enim magnam nobis rerum labore. Consequatur eum aspernatur enim quisquam consequuntur quo.', 'http://lorempixel.com/640/480/');
INSERT INTO `user` (`user_id`, `email`, `password`, `username`, `location`, `bio`, `user_photo`) VALUES (10, 'breinger@example.com', '8a7144a2882a935b1139105bc98dae555ed540e5', 'heller.thurman', '59635', 'Velit nihil sed et. Qui quibusdam laboriosam eaque et architecto autem quis. Quia id ducimus qui sed et omnis perferendis. Sit soluta doloremque officiis corporis commodi et reprehenderit.', 'http://lorempixel.com/640/480/');
INSERT INTO `user` (`user_id`, `email`, `password`, `username`, `location`, `bio`, `user_photo`) VALUES (11, 'kweimann@example.net', '374a6079dd149c3b237572e31cec654095d2ce77', 'hettinger.rebekah', '81928', 'Inventore qui aut distinctio ad sint autem. Expedita ut asperiores dolores delectus. Nulla qui nesciunt eum ut aut sapiente.', 'http://lorempixel.com/640/480/');
INSERT INTO `user` (`user_id`, `email`, `password`, `username`, `location`, `bio`, `user_photo`) VALUES (12, 'dooley.stefanie@example.com', 'dd383c9de666ac130472ece961b2bda954eb5290', 'lurline.paucek', '12353', 'Labore modi nesciunt ipsum est. Sed natus nemo repellat eum enim inventore totam et.', 'http://lorempixel.com/640/480/');
INSERT INTO `user` (`user_id`, `email`, `password`, `username`, `location`, `bio`, `user_photo`) VALUES (13, 'lwolff@example.net', '70e6c9c5acaf3862cd040556229704c97100ce1c', 'connelly.caterina', '71191', 'Excepturi quam deserunt est illum voluptatem qui quia. Nemo ipsam reiciendis et quia deleniti. Autem dolores tempora excepturi voluptates explicabo.', 'http://lorempixel.com/640/480/');
INSERT INTO `user` (`user_id`, `email`, `password`, `username`, `location`, `bio`, `user_photo`) VALUES (14, 'qgreenfelder@example.net', '8485954145777be8136c72b961f6ca439c288b83', 'vonrueden.janae', '41516', 'Esse sed repellat inventore dolore. Quia dolores modi voluptatem dignissimos inventore. Nisi porro maiores voluptas corporis omnis. Nam consectetur sed eum aliquam laborum.', 'http://lorempixel.com/640/480/');
INSERT INTO `user` (`user_id`, `email`, `password`, `username`, `location`, `bio`, `user_photo`) VALUES (15, 'jessica40@example.org', '93676cf7e6ab300c3574050c5fa1c7a8121b48a2', 'carey13', '33731', 'Eos voluptates et fuga voluptatem modi. Beatae ea laborum aut sit doloremque laudantium. Qui et voluptas neque adipisci consequuntur sed ut. Blanditiis cumque in nihil tempore et porro aliquid.', 'http://lorempixel.com/640/480/');
INSERT INTO `user` (`user_id`, `email`, `password`, `username`, `location`, `bio`, `user_photo`) VALUES (16, 'marks.robyn@example.org', '5a084135c8b6d89ffec39061535b63d3ea42eb65', 'desiree.johnson', '45525', 'Ut aut omnis aperiam in. A amet laboriosam inventore vel. Quo et qui voluptatem sequi. Nam et molestiae perferendis quo.', 'http://lorempixel.com/640/480/');
INSERT INTO `user` (`user_id`, `email`, `password`, `username`, `location`, `bio`, `user_photo`) VALUES (17, 'rice.lyric@example.com', 'c538a7dcbac6b35f66a0ac8941a8dfb5cd369882', 'micheal.pouros', '02927', 'Vitae iste ea eius fugit vitae iste omnis. Et officia adipisci fuga libero quia. Qui autem est velit voluptas sit.', 'http://lorempixel.com/640/480/');
INSERT INTO `user` (`user_id`, `email`, `password`, `username`, `location`, `bio`, `user_photo`) VALUES (18, 'bergnaum.ariel@example.org', '796f25c5321ca746e4bd141178a59c537019afe7', 'kaylah.will', '52792', 'Porro omnis libero esse nihil. Non qui reprehenderit et consequuntur ut minus id. Nesciunt odio inventore libero.', 'http://lorempixel.com/640/480/');
INSERT INTO `user` (`user_id`, `email`, `password`, `username`, `location`, `bio`, `user_photo`) VALUES (19, 'billie44@example.com', 'c5101d5d4f788ad7255f10296e314e31792b4d38', 'ransom13', '71076', 'Qui quo quo qui minima possimus assumenda. Praesentium id nihil non architecto dicta quibusdam. Et velit rem totam. Enim quas sunt voluptas laudantium.', 'http://lorempixel.com/640/480/');
INSERT INTO `user` (`user_id`, `email`, `password`, `username`, `location`, `bio`, `user_photo`) VALUES (20, 'clinton.gottlieb@example.net', 'f3f067953a304504603865fcde74ced9a3f7ef73', 'lcormier', '59297', 'Deleniti et aut voluptatem quasi. Aliquid numquam mollitia aut ut quisquam ut laudantium. Ut sit blanditiis id saepe voluptates sint consequatur.', 'http://lorempixel.com/640/480/');


#
# TABLE STRUCTURE FOR: user_skill
#

DROP TABLE IF EXISTS `user_skill`;

CREATE TABLE `user_skill` (
  `user_id` int(11) NOT NULL,
  `skill_id` int(11) NOT NULL,
  `role` enum('mentor','mentee') COLLATE utf8_unicode_ci DEFAULT NULL,
  KEY `user_id` (`user_id`),
  KEY `skill_id` (`skill_id`),
  CONSTRAINT `user_skill_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `user_skill_ibfk_2` FOREIGN KEY (`skill_id`) REFERENCES `skill` (`skill_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `user_skill` (`user_id`, `skill_id`, `role`) VALUES (3, 2, 'mentor');
INSERT INTO `user_skill` (`user_id`, `skill_id`, `role`) VALUES (19, 16, 'mentee');
INSERT INTO `user_skill` (`user_id`, `skill_id`, `role`) VALUES (9, 15, 'mentor');
INSERT INTO `user_skill` (`user_id`, `skill_id`, `role`) VALUES (16, 10, 'mentee');
INSERT INTO `user_skill` (`user_id`, `skill_id`, `role`) VALUES (6, 9, 'mentor');
INSERT INTO `user_skill` (`user_id`, `skill_id`, `role`) VALUES (7, 3, 'mentee');
INSERT INTO `user_skill` (`user_id`, `skill_id`, `role`) VALUES (13, 15, 'mentor');
INSERT INTO `user_skill` (`user_id`, `skill_id`, `role`) VALUES (17, 6, 'mentee');
INSERT INTO `user_skill` (`user_id`, `skill_id`, `role`) VALUES (13, 5, 'mentor');
INSERT INTO `user_skill` (`user_id`, `skill_id`, `role`) VALUES (17, 14, 'mentee');
INSERT INTO `user_skill` (`user_id`, `skill_id`, `role`) VALUES (20, 15, 'mentor');
INSERT INTO `user_skill` (`user_id`, `skill_id`, `role`) VALUES (14, 12, 'mentee');
INSERT INTO `user_skill` (`user_id`, `skill_id`, `role`) VALUES (3, 5, 'mentor');
INSERT INTO `user_skill` (`user_id`, `skill_id`, `role`) VALUES (2, 13, 'mentee');
INSERT INTO `user_skill` (`user_id`, `skill_id`, `role`) VALUES (20, 19, 'mentor');
INSERT INTO `user_skill` (`user_id`, `skill_id`, `role`) VALUES (18, 3, 'mentee');
INSERT INTO `user_skill` (`user_id`, `skill_id`, `role`) VALUES (1, 16, 'mentor');
INSERT INTO `user_skill` (`user_id`, `skill_id`, `role`) VALUES (18, 9, 'mentee');
INSERT INTO `user_skill` (`user_id`, `skill_id`, `role`) VALUES (11, 14, 'mentor');
INSERT INTO `user_skill` (`user_id`, `skill_id`, `role`) VALUES (19, 16, 'mentee');


