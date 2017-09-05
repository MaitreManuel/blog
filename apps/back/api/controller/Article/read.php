<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

echo '-- Includes -- ';

include_once '../../config/database.php';
include_once '../../model/article.php';

echo '-- Database -- ';

$database = new Database();
$db = $database->getConnection();

echo '-- New Article -- ';
$article = new Article($db);

echo '-- Read Database Articles -- ';
$stmt = $article->read();
$num = $stmt->rowCount();

if($num > 0) {

    $articles_arr = array();
    $articles_arr["records"] = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $article_item = array(
            "article_id" => $article_id,
            "article_title" => $article_title,
            "article_intro" => $article_intro,
            "article_content" => $article_content,
            "article_authorid" => $article_authorid,
            "article_tagslist" => $article_tagslist,
            "article_publicationdate" => $article_publicationdate,
            "article_updatedate" => $article_updatedate,
            "article_coverpath" => $article_coverpath
        );

        array_push($articles_arr["records"], $article_item);
    }

    echo json_encode($articles_arr);
}

else {
    echo json_encode(
        array("message" => "No articles found.")
    );
}
?>
