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

$comment_authorid = isset($_POST['comment_authorid']) ? $_POST['comment_authorid'] : die();
$comment_articleid = isset($_POST['comment_articleid']) ? $_POST['comment_articleid'] : die();
$comment_content = isset($_POST['comment_content']) ? $_POST['comment_content'] : die();
$comment_date = date('Y-m-d H:i:s');

$stmt = $comment->create($comment_authorid, $comment_articleid, $comment_content, $comment_date);

if($stmt == true) {
    echo '{';
        echo '"message": "Comment was created."';
    echo '}';
} else {
    echo '{';
        echo '"message": "Unable to create comment."';
    echo '}';
}
?>
