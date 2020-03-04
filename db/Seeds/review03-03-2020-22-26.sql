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


