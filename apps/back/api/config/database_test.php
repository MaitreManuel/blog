<?php

    $dblib='mysql';
    $hostname='localhost';
    $dbname='blog';

    $user='root';
    $password='root';

    try {
        echo '-- Connection -- ';
        $db = new PDO($dblib.':host='.$hostname.';dbname='.$dbname.'', $user, $password);
        echo '-- PDO -- ';
        $db->exec('SET NAMES utf8');
        echo '-- Success -- ';
    } catch(Exception $e) {
        echo 'Erreur : '. $e->getMessage();
    }

?>
