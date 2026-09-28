CREATE TABLE `schools` (
	`id` int AUTO_INCREMENT NOT NULL,
	`ownerId` int NOT NULL,
	`name` varchar(180) NOT NULL,
	`country` varchar(80) NOT NULL,
	`city` varchar(100) NOT NULL,
	`currency` varchar(40) NOT NULL DEFAULT 'FCFA',
	`studentCount` int NOT NULL DEFAULT 0,
	`teacherCount` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `schools_id` PRIMARY KEY(`id`)
);
