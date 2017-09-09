<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../config/database.php';
include_once '../../model/user.php';

$database = new Database();
$db = $database->getConnection();

$user = new User($db);

$mail = isset($_POST['user_mail']) ? $_POST['user_mail'] : die();
$password = isset($_POST['user_password']) ? $_POST['user_password'] : die();

$stmt = $user->readOne($mail, $password);
$num = $stmt->rowCount();

if($num > 0) {

    $extract = $stmt->fetch(PDO::FETCH_ASSOC);
    extract($extract);

    $user_item = array(
        "user_firstname" => $user_firstname,
        "user_lastname" => $user_lastname,
        "user_id" => $user_id,
        "user_mail" => $user_mail,
        "user_pseudo" => $user_pseudo,
        "user_is_admin" => $user_is_admin
    );

    echo json_encode($user_item);
}

else {
    echo json_encode(
        array("message" => "No users found.")
    );
}

?>
