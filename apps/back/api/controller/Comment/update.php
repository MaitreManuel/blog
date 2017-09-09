<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
include_once '../../model/comment.php';

$database = new Database();
$db = $database->getConnection();

$comment = new Comment($db);

$comment_id = isset($_POST['comment_id']) ? $_POST['comment_id'] : die();
$comment_content = isset($_POST['comment_content']) ? $_POST['comment_content'] : die();

$stmt = $comment->update($comment_id, $comment_content);

if($stmt == true) {
    echo '{';
        echo '"message": "Comment was updated."';
    echo '}';
} else {
    echo '{';
        echo '"message": "Unable to update comment."';
    echo '}';
}

?>
