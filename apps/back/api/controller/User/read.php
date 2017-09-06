<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../config/database.php';
include_once '../../model/user.php';

$database = new Database();
$db = $database->getConnection();

$user = new User($db);

$sql = isset($_POST['sql']) ? $_POST['sql'] : die();

switch ($sql) {
    case 'SELECT_Users':
        $stmt = $user->readAll();
        $num = $stmt->rowCount();

        if($num > 0) {

            $users_arr = array();
            $users_arr["records"] = array();

            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                extract($row);

                $user_item = array(
                    "user_firstname" => $user_lastname,
                    "user_lastname" => $user_firstname,
                    "user_id" => $user_id,
                    "user_mail" => $user_mail,
                    "user_password" => $user_password,
                    "user_pseudo" => $user_pseudo,
                    "user_is_admin" => $user_is_admin
                );

                array_push($users_arr["records"], $user_item);
            }

            echo json_encode($users_arr);
        }

        else {
            echo json_encode(
                array("message" => "No users found.")
            );
        }
    break;

    case 'SELECT_User':
        $mail = isset($_POST['user_mail']) ? $_POST['user_mail'] : die();
        $password = isset($_POST['user_password']) ? $_POST['user_password'] : die();
        $stmt = $user->readOne($mail, $password);
        $num = $stmt->rowCount();

        if($num > 0) {

            $users_arr = array();
            $users_arr["records"] = array();

            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                extract($row);

                $user_item = array(
                    "user_firstname" => $user_firstname,
                    "user_lastname" => $user_lastname,
                    "user_id" => $user_id,
                    "user_mail" => $user_mail,
                    "user_pseudo" => $user_pseudo,
                    "user_is_admin" => $user_is_admin
                );

                array_push($users_arr["records"], $user_item);
            }

            echo json_encode($users_arr);
        }

        else {
            echo json_encode(
                array("message" => "No users found.")
            );
        }
    break;
}
?>
