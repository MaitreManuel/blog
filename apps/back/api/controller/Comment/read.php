<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../config/database.php';
include_once '../../model/comment.php';

$database = new Database();
$db = $database->getConnection();

$comment = new Comment($db);

$article_id = isset($_POST['article_id']) ? $_POST['article_id'] : die();

$stmt = $comment->readAllFromId($article_id);
$num = $stmt->rowCount();

if($num > 0) {

    $comments_arr = array();
    $comments_arr["records"] = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $comment_item = array(
            "comment_id" => $comment_id,
            "comment_authorid" => $comment_authorid,
            "comment_articleid" => $comment_articleid,
            "comment_content" => $comment_content,
            "comment_date" => $comment_date,
            "user_firstname" => $user_firstname,
            "user_lastname" => $user_lastname
        );

        array_push($comments_arr["records"], $comment_item);
    }

    echo json_encode($comments_arr);
}

else {
    echo json_encode(
        array("message" => "No comments found.")
    );
}

?>
