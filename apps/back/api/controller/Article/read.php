<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../config/database.php';
include_once '../../model/article.php';

$database = new Database();
$db = $database->getConnection();

$article = new Article($db);

$sql = isset($_POST['sql']) ? $_POST['sql'] : die();

switch ($sql) {
    case 'SELECT_Articles':
        $stmt = $article->readAll();
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
    break;

    case 'SELECT_Article':
        $id = isset($_POST['article_id']) ? $_POST['article_id'] : die();
        $stmt = $article->readOne($id);
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
                    "article_coverpath" => $article_coverpath,
                    "user_firstname" => $user_firstname,
                    "user_lastname" => $user_lastname,
                    "user_id" => $user_id,
                    "user_mail" => $user_mail,
                    "user_pseudo" => $user_pseudo,
                    "user_is_admin" => $user_is_admin
                );

                array_push($articles_arr["records"], $article_item);
            }

            echo json_encode($articles_arr);
        }

        else {
            echo json_encode(
                array("message" => "Article not found.")
            );
        }
    break;
}

?>
