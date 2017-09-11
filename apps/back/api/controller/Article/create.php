<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
include_once '../../model/article.php';

$database = new Database();
$db = $database->getConnection();

$article = new Article($db);

$article_title = isset($_POST['article_title']) ? $_POST['article_title'] : die();
$article_intro = isset($_POST['article_intro']) ? $_POST['article_intro'] : die();
$article_content = isset($_POST['article_content']) ? $_POST['article_content'] : die();
$article_authorid = isset($_POST['article_authorid']) ? $_POST['article_authorid'] : die();
$article_tagslist = isset($_POST['article_tagslist']) ? $_POST['article_tagslist'] : die();
$article_coverpath = isset($_POST['article_coverpath']) ? $_POST['article_coverpath'] : die();
$article_publicationdate = date('Y-m-d H:i:s');
$article_updatedate = date('Y-m-d H:i:s');

$stmt = $article->create($article_title, $article_intro, $article_content, $article_authorid, $article_tagslist, $article_coverpath, $article_publicationdate, $article_updatedate);

if($stmt == true) {
    echo '{';
        echo '"message": "Article was created."';
    echo '}';
} else {
    echo '{';
        echo '"message": "Unable to create article."';
    echo '}';
}

?>
