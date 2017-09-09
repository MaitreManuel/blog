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
$comment_authorid = isset($_POST['comment_authorid']) ? $_POST['comment_authorid'] : die();

$stmt = $comment->delete($comment_id, $comment_authorid);

if($stmt == true) {
    echo '{';
        echo '"message": "Comment was deleted."';
    echo '}';
} else {
    echo '{';
        echo '"message": "Unable to delete comment."';
    echo '}';
}

?>
