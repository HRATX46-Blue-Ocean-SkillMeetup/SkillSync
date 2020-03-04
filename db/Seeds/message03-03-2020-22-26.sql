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


