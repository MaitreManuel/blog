<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../config/database.php';
include_once '../../model/article.php';

$database = new Database();
$db = $database->getConnection();

$article = new Article($db);

$id = isset($_POST['article_id']) ? $_POST['article_id'] : die();

$stmt = $article->readOne($id);
$num = $stmt->rowCount();

if($num > 0) {

    $extract = $stmt->fetch(PDO::FETCH_ASSOC);
    extract($extract);

    $article_item = array(
        "article_id" => $article_id,
        "article_title" => $article_title,
        "article_intro" => $article_intro,
        "article_content" => $article_content,
        "article_authorid" => $article_authorid,
        "article_tagslist" => $article_tagslist,
        "article_publicationdate" => $article_publicationdate,
        "article_updatedate" => $article_updatedate,
        "article_coverpath" => $article_coverpath,
        "user_firstname" => $user_firstname,
        "user_lastname" => $user_lastname,
        "user_id" => $user_id,
        "user_mail" => $user_mail,
        "user_pseudo" => $user_pseudo,
        "user_is_admin" => $user_is_admin
    );

    echo json_encode($article_item);
}

else {
    echo json_encode(
        array("message" => "Article not found.")
    );
}

?>
