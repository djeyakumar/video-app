CREATE TABLE IF NOT EXISTS `pm_videos_countries` (
  `countryid` smallint(3) NOT NULL AUTO_INCREMENT,
  `country` varchar(150) NOT NULL DEFAULT '',
  PRIMARY KEY (`countryid`)
);

INSERT INTO pm_videos_countries (country) VALUES 
('Argentina'),
('Aruba'),
('Australia'),
('Austria'),
('Bahamas'),
('Belgium'),
('Bolivia'),
('Botswana'),
('Brazil'),
('Bulgaria'),
('Canada'),
('Chile'),
('China'),
('Congo'),
('Czech Republic'),
('Denmark'),
('Federal Republic of Yugoslavia'),
('Fiji'),
('Finland'),
('France'),
('French Polynesia'),
('Georgia'),
('Germany'),
('Greece'),
('Hong Kong'),
('Hungary'),
('Iceland'),
('India'),
('Indonesia'),
('Ireland'),
('Israel'),
('Italy'),
('Jamaica'),
('Japan'),
('Jordan'),
('Kenya'),
('Lebanon'),
('Lithuania'),
('Luxembourg'),
('Malaysia'),
('Malta'),
('Mexico'),
('Monaco'),
('Morocco'),
('Netherlands'),
('New Zealand'),
('Nigeria'),
('Norway'),
('Palau'),
('Panama'),
('Peru'),
('Philippines'),
('Poland'),
('Portugal'),
('Puerto Rico'),
('Qatar'),
('Romania'),
('Russia'),
('Saudi Arabia'),
('Serbia'),
('Singapore'),
('Slovakia'),
('Slovenia'),
('South Africa'),
('South Korea'),
('Spain'),
('Sri Lanka'),
('Sweden'),
('Switzerland'),
('Taiwan'),
('Tanzania'),
('Thailand'),
('Tunisia'),
('Turkey'),
('UK'),
('Ukraine'),
('United Arab Emirates'),
('USA'),
('Vietnam'),
('West Germany'),
('Yugoslavia'),
('Zambia');


ALTER TABLE pm_videos
ADD COLUMN country_id INT NOT NULL DEFAULT 0;

ALTER TABLE pm_videos
ADD COLUMN video_year INT NOT NULL DEFAULT 0;

ALTER TABLE pm_videos
ADD COLUMN video_type INT NOT NULL DEFAULT 0;

ALTER TABLE pm_videos
ADD COLUMN recommended enum('0','1') NOT NULL DEFAULT '0';

ALTER TABLE pm_videos_urls
ADD COLUMN alt_direct1 varchar(255) NULL DEFAULT '';

ALTER TABLE pm_videos_urls
ADD COLUMN alt_direct2 varchar(255) NULL DEFAULT '';