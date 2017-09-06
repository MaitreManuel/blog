-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost:8080
-- Généré le :  Mer 06 Septembre 2017 à 16:37
-- Version du serveur :  5.7.19-0ubuntu0.16.04.1
-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `blog_trystan`
--

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

CREATE TABLE `articles` (
  `article_id` int(11) NOT NULL,
  `article_title` varchar(140) NOT NULL,
  `article_intro` varchar(140) NOT NULL,
  `article_content` longtext NOT NULL,
  `article_authorid` int(11) NOT NULL,
  `article_tagslist` text NOT NULL,
  `article_publicationdate` date NOT NULL,
  `article_updatedate` date DEFAULT NULL,
  `article_coverpath` varchar(250) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `articles`
--

INSERT INTO `articles` (`article_id`, `article_title`, `article_intro`, `article_content`, `article_authorid`, `article_tagslist`, `article_publicationdate`, `article_updatedate`, `article_coverpath`) VALUES
(1, 'Stage de dev web et mobile chez Reoliñ', 'Durant ma licence professionnelle, j\'ai effectué un stage de fin d\'études en tant que Développeur web et mobile dans la boîte Reoliñ.', 'Ce stage, d\'une durée de 16 semaines, a commencé le 15 mars et s\'est terminé le 04\njuillet 2017 au sein de l\'entreprise Eliasis, plus particulièrement pour la marque Reoliñ\nqu\'elle possède. Le stage s\'est effectué dans les locaux de l\'entreprise situé dans la zone\nartisanale de Kervignac pour développer les projets attribués.\nLes raisons pour lesquelles mon choix s\'est porté sur ce stage sont : les produits\ndéveloppés par l\'entreprise, apprendre de nouvelles technologies ainsi que me remettre à\nniveau pour certaines, la taille de l\'entreprise, préférant les effectifs réduits ainsi qu\'une\nhiérarchie implicite, Eliasis correspondait à mes attentes, les différents projets proposés et\nvariés (responsive design, cross-browsers, développement d\'applications web et mobile).\nL\'entreprise avait divers besoins à satisfaire auprès de ses clients. De base les\napplications qui ont été développées, sont prévues pour aider des festivals à gérer leur\norganisation par rapport à leur budget, leur effectif, leur matériel, leur\nréapprovisionnement et la gestion de problèmes rencontrés. L\'entreprise s\'est rendu\ncompte que certains utilisateurs ont besoin de ces applications sur place et n’ont pas\nforcément accès à un ordinateur relié à internet. Mon rôle principal aura été de résoudre\ncette problématique.', 0, 'stage;lpsil', '2017-09-05', NULL, 'https://www.orignal-communication.fr/wp-content/uploads/2015/10/reolin-header-1.jpg'),
(2, 'Définition du flux html', 'Dans le modèle des feuilles de style, tous les éléments d\'une page HTML se coulent dans des blocs (ou «boîtes») rectangulaires.', 'Le flux correspond à l\'écoulement des informations (ou données) dans le processus d\'interprétation des navigateurs. En toute logique, un navigateur commence par le haut de la page, place les éléments (balises) qu\'il rencontre les unes à la suite des autres, de gauche à droite puis de haut en bas, à ceci près que cela dépend si ce sont des balises bloc ou en-ligne (pour plus d\'informations sur cette distinction, voir cette page).\r\nIl est important de comprendre cette notion car certains éléments peuvent sortir du flux (et n\'influe donc pas sur le placement des éléments qui le suivent dans le code). Voir ci-dessous :\r\n\r\nLes blocs en position absolue (position:absolute) derrière lesquels du contenu peut se cacher n\'influent donc pas sur les blocs environnants. Ces boîtes sont positionnées en fonction de leurs blocs conteneurs.\r\nLes blocs en float, sortent du flux courant mais occupent un espace dans lequel le contenu environnant (précédent ou suivant) s\'écoule. (nous considérons tous ces éléments dans le même container, par exemple un DIV).\r\nLes blocs en position relative repousse le contenu qui le suit comme s\'il occupait sa place par défaut (alors qu\'il peut être décalé verticalement ou horizontalement). L\'emplacement de la boîte est calculé selon le flux normal. Ensuite la boîte est déplacée relativement à cette position dans le flux normal. Quand une boîte B a une position relative, l\'emplacement de la boîte suivante est calculé comme si B n\'avait pas été déplacée\r\nL\'emplacement de la boîte en fixe (position:fixed) est calculé comme pour \'absolute\', mais la boîte est en plus fixe par rapport à une référence donnée.', 0, 'flux;html;', '2017-09-05', NULL, 'http://cdn06.branchez-vous.com/wp-content/uploads/2015/01/html5-800x410.jpg'),
(3, 'Différentes positions CSS', 'Même si ça peut surprendre, l’essentiel du positionnement CSS se fait sans même qu\'on ait besoin d\'utiliser la propriété position.', 'Centrage des éléments\r\n\r\nVient toujours le moment où l\'on veut centrer des contenus ou tout un site. Pour centrer horizontalement un texte, on utilisera text-align. Pour centrer horizontalement un bloc, on utilisera la technique des marges automatiques. Enfin, le centrage vertical est le point compliqué. À l\'heure actuelle, la solution la plus compatible pour centrer verticalement un bloc est d\'utiliser un tableau de mise en page. À l\'avenir, on pourra utiliser display: table-cell sur un bloc conteneur pour centrer son contenu avec vertical-align: middle. (Là encore, si vous n’assurez pas la compatibilité IE7, vous pouvez utiliser display: table-cell sans hésitation.)\r\n\r\nPour des explications plus fournies, on peut lire: Centrer les éléments ou un site web en CSS et Un bloc centré horizontalement et verticalement dans la page.\r\n\r\nPositionnement absolu\r\n\r\nPour commencer, on n\'utilisera le positionnement absolu que dans les conditions suivantes: 1) si on sait comment faire pour positionner un élément en absolu par rapport à son parent ou ancêtre positionné (si cela ne vous dit rien, relire les articles indiqué en ressources!); 2) si on a une idée précise des conséquences du positionnement absolu (risque de chevauchement des contenus); 3) si on sait à l\'avance quels sont les contenus qui seront ainsi positionnés, et si ces contenus ne risquent pas de prendre de l\'ampleur et ainsi de déborder de l\'espace défini.\r\n\r\nUne fois ces précautions bien intégrées, on pourra utiliser le positionnement absolu de manière efficace pour quelques éléments de nos pages web.\r\n\r\nPositionnement relatif\r\n\r\nPour l\'essentiel, le positionnement relatif a deux usages concrets: 1) créer un nouveau référent pour les éléments enfants et descendants positionnés en absolu et 2) décaler légèrement (de quelques pixels, pas plus) un élément par rapport à sa position normale, pour réaliser un effet visuel. Toute autre utilisation, sans être impossible ou forcément incorrecte, est risquée.\r\n\r\nPositionnement fixe\r\n\r\nÀ n\'utiliser qu\'en connaissance de cause, avec beaucoup de précautions et en testant sur différentes configurations (et surtout différentes résolutions d\'écran). On n\'utilise que très rarement le positionnement fixe.\r\n\r\n', 0, 'position;css;', '2017-09-05', NULL, 'http://lyften.com/uploads/posts/css3-in-all-its-glory.png');

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

CREATE TABLE `comments` (
  `comment_id` int(11) NOT NULL,
  `comment_authorid` int(11) NOT NULL,
  `comment_articleid` int(11) NOT NULL,
  `comment_content` text NOT NULL,
  `comment_title` varchar(140) NOT NULL,
  `comment_date` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `comments`
--

INSERT INTO `comments` (`comment_id`, `comment_authorid`, `comment_articleid`, `comment_content`, `comment_title`, `comment_date`) VALUES
(1, 0, 1, 'J\'ai aussi réussi à passer mon permis moto durant ce stage !', '*NULL*', '2017-09-06 19:22:00'),
(6, 0, 3, 'Un titre racoleur...', '*NULL*', '2017-09-06 15:16:42'),
(7, 0, 2, 'ZUUUUUUUUT', '*NULL*', '2017-09-06 15:17:32'),
(8, 0, 2, 'Mais seigneur Lancelot...', '*NULL*', '2017-09-06 15:19:28');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `user_firstname` varchar(25) NOT NULL,
  `user_lastname` varchar(25) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_mail` varchar(60) NOT NULL,
  `user_password` varchar(60) NOT NULL,
  `user_pseudo` varchar(60) DEFAULT NULL,
  `user_is_admin` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`user_firstname`, `user_lastname`, `user_id`, `user_mail`, `user_password`, `user_pseudo`, `user_is_admin`) VALUES
('Trystan', 'Eveno', 0, 'trystan.eveno@gmail.com', 'oui', 'Maitre_Manuel', 1),
('Ron', 'Weasley', 1, 'ron.weasley@poudlard.com', 'pass', 'Sup3rKonar', 0),
('Cesar', 'Moroni', 2, 'justin@bridou.fr', 'pass', 'Saucisson', 0);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`article_id`);

--
-- Index pour la table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `articles`
--
ALTER TABLE `articles`
  MODIFY `article_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
