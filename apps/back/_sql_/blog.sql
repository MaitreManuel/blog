-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost:8080
-- Généré le :  Mar 05 Septembre 2017 à 10:57
-- Version du serveur :  5.7.19-0ubuntu0.16.04.1
-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `blog`
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
(1, 'Stage de dev web et mobile chez Reoliñ', 'Durant ma licence professionnelle, j\'ai effectué un stage de fin d\'études en tant que Développeur web et mobile dans la boîte Reoliñ.', '\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus interdum urna, ut maximus ante aliquet at. Vivamus feugiat vitae nibh vel tincidunt. Fusce a imperdiet dui. Nullam at feugiat dolor, ac hendrerit nulla. Donec sagittis nec velit a eleifend. Nunc sit amet vehicula libero, a blandit purus. Aenean vitae arcu vehicula, facilisis neque id, tristique ante. Curabitur ipsum odio, vehicula vitae fermentum nec, ultricies et lorem. Nullam eget scelerisque libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet malesuada arcu, vitae imperdiet libero. Donec a nunc justo. Maecenas luctus dui ut turpis porttitor, non sollicitudin justo ullamcorper.\r\n\r\nDonec at malesuada justo. Donec volutpat fermentum eleifend. Praesent faucibus, ligula a gravida iaculis, ipsum lectus dictum ex, a egestas sapien ipsum vel velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce ac tristique mi. Duis fermentum id tellus vitae molestie. Nam eu ex cursus, pharetra erat vel, ullamcorper velit. Nam id rutrum quam. Cras pretium pretium arcu et euismod. Aenean viverra risus et lectus luctus varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer quis sodales mauris, in vehicula enim. Cras lacinia orci et neque porttitor aliquam. Nulla vitae ultricies massa. Nam vitae ultrices magna. Phasellus mattis luctus arcu vitae euismod.\r\n\r\nFusce venenatis, mauris in porttitor dapibus, erat dui pulvinar tortor, ut lobortis dui ante at ligula. Cras sit amet lacus eu sapien tincidunt pulvinar id a orci. Sed posuere, lorem quis ullamcorper congue, sem tellus tincidunt ipsum, quis eleifend urna ligula eget lectus. Nunc a orci orci. Nullam ut lobortis mi. Morbi justo dolor, interdum sit amet libero sed, dapibus mollis enim. Curabitur lobortis nunc nisi, vitae hendrerit tortor viverra nec. Suspendisse tempor pharetra magna, ac hendrerit lorem euismod sit amet. In in finibus nisi, in iaculis dolor. Etiam blandit tincidunt nulla, a vulputate tellus eleifend nec. Sed id est diam. Vivamus vulputate metus lacus. Vestibulum at dui volutpat, consequat tellus at, egestas felis. Nullam eleifend eu orci eget tincidunt.\r\n\r\nProin vehicula nulla at lobortis dignissim. Etiam faucibus enim vel dolor semper, sit amet suscipit leo aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi mauris arcu, vulputate at venenatis nec, mollis convallis nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis cursus congue. Donec mollis mattis orci, at efficitur enim suscipit id. Sed tincidunt cursus placerat. Vivamus vitae lectus non ex interdum dictum vitae id leo. Duis tempus enim quis elit dictum, eget rhoncus ligula accumsan. Nunc iaculis nunc quis mi sodales lobortis. Proin maximus, purus sit amet faucibus finibus, elit enim feugiat ligula, sed accumsan lacus ante ut odio. Nunc finibus, nisi convallis interdum pellentesque, erat dui hendrerit risus, ac hendrerit nibh lorem at ex. Vivamus tempor faucibus risus, in suscipit felis suscipit eget. In laoreet, risus non fringilla euismod, lacus risus porttitor ipsum, eget bibendum dui nunc et libero. ', 0, 'stage;lpsil', '2017-09-05', NULL, NULL),
(2, 'Définition du flux html', 'Dans le modèle des feuilles de style, tous les éléments d\'une page HTML se coulent dans des blocs (ou «boîtes») rectangulaires.', 'Le flux correspond à l\'écoulement des informations (ou données) dans le processus d\'interprétation des navigateurs. En toute logique, un navigateur commence par le haut de la page, place les éléments (balises) qu\'il rencontre les unes à la suite des autres, de gauche à droite puis de haut en bas, à ceci près que cela dépend si ce sont des balises bloc ou en-ligne (pour plus d\'informations sur cette distinction, voir cette page).\r\nIl est important de comprendre cette notion car certains éléments peuvent sortir du flux (et n\'influe donc pas sur le placement des éléments qui le suivent dans le code). Voir ci-dessous :\r\n\r\nLes blocs en position absolue (position:absolute) derrière lesquels du contenu peut se cacher n\'influent donc pas sur les blocs environnants. Ces boîtes sont positionnées en fonction de leurs blocs conteneurs.\r\nLes blocs en float, sortent du flux courant mais occupent un espace dans lequel le contenu environnant (précédent ou suivant) s\'écoule. (nous considérons tous ces éléments dans le même container, par exemple un DIV).\r\nLes blocs en position relative repousse le contenu qui le suit comme s\'il occupait sa place par défaut (alors qu\'il peut être décalé verticalement ou horizontalement). L\'emplacement de la boîte est calculé selon le flux normal. Ensuite la boîte est déplacée relativement à cette position dans le flux normal. Quand une boîte B a une position relative, l\'emplacement de la boîte suivante est calculé comme si B n\'avait pas été déplacée\r\nL\'emplacement de la boîte en fixe (position:fixed) est calculé comme pour \'absolute\', mais la boîte est en plus fixe par rapport à une référence donnée.', 0, 'bLAL;', '2017-09-05', NULL, NULL),
(3, 'Différents positionnements CSS', 'Même si ça peut surprendre, l’essentiel du positionnement CSS se fait sans même qu\'on ait besoin d\'utiliser la propriété position.', 'Centrage des éléments\r\n\r\nVient toujours le moment où l\'on veut centrer des contenus ou tout un site. Pour centrer horizontalement un texte, on utilisera text-align. Pour centrer horizontalement un bloc, on utilisera la technique des marges automatiques. Enfin, le centrage vertical est le point compliqué. À l\'heure actuelle, la solution la plus compatible pour centrer verticalement un bloc est d\'utiliser un tableau de mise en page. À l\'avenir, on pourra utiliser display: table-cell sur un bloc conteneur pour centrer son contenu avec vertical-align: middle. (Là encore, si vous n’assurez pas la compatibilité IE7, vous pouvez utiliser display: table-cell sans hésitation.)\r\n\r\nPour des explications plus fournies, on peut lire: Centrer les éléments ou un site web en CSS et Un bloc centré horizontalement et verticalement dans la page.\r\n\r\nPositionnement absolu\r\n\r\nPour commencer, on n\'utilisera le positionnement absolu que dans les conditions suivantes: 1) si on sait comment faire pour positionner un élément en absolu par rapport à son parent ou ancêtre positionné (si cela ne vous dit rien, relire les articles indiqué en ressources!); 2) si on a une idée précise des conséquences du positionnement absolu (risque de chevauchement des contenus); 3) si on sait à l\'avance quels sont les contenus qui seront ainsi positionnés, et si ces contenus ne risquent pas de prendre de l\'ampleur et ainsi de déborder de l\'espace défini.\r\n\r\nUne fois ces précautions bien intégrées, on pourra utiliser le positionnement absolu de manière efficace pour quelques éléments de nos pages web.\r\n\r\nPositionnement relatif\r\n\r\nPour l\'essentiel, le positionnement relatif a deux usages concrets: 1) créer un nouveau référent pour les éléments enfants et descendants positionnés en absolu et 2) décaler légèrement (de quelques pixels, pas plus) un élément par rapport à sa position normale, pour réaliser un effet visuel. Toute autre utilisation, sans être impossible ou forcément incorrecte, est risquée.\r\n\r\nPositionnement fixe\r\n\r\nÀ n\'utiliser qu\'en connaissance de cause, avec beaucoup de précautions et en testant sur différentes configurations (et surtout différentes résolutions d\'écran). On n\'utilise que très rarement le positionnement fixe.\r\n\r\n', 0, 'bLAL;', '2017-09-05', NULL, NULL);

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
  `comment_date` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

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
('Cesar', 'Moroni', 3, 'justin@bridou.fr', 'pass', 'Saucisson', 0);

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
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
