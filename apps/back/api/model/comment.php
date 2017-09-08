<?php

class Comment {

    private $conn;
    private $table_name = "comments";

    public $comment_id;
    public $comment_authorid;
    public $comment_articleid;
    public $comment_content;
    public $comment_title;
    public $comment_date;

    public function __construct($db) {
        $this->conn = $db;
    }

    function readAllFromId($article_id) {
        $query = "SELECT
                    comments.comment_id,
                    comments.comment_authorid,
                    comments.comment_articleid,
                    comments.comment_content,
                    comments.comment_date,
                    users.user_firstname,
                    users.user_lastname
                  FROM ". $this->table_name ."
                  INNER JOIN articles ON
                  comments.comment_articleid = :article_id
                  LEFT JOIN users
                  ON comments.comment_authorid = users.user_id
                  WHERE comments.comment_articleid = :article_id
                  GROUP BY comments.comment_id
                  ORDER BY comments.comment_date ASC";

        $stmt = $this->conn->prepare($query);
        $stmt->execute(array(
            'article_id' => $article_id
        ));

        return $stmt;
    }

    function create($comment_authorid, $comment_articleid, $comment_content, $comment_date) {
        $query = "INSERT INTO comments(comment_authorid, comment_articleid, comment_content, comment_title, comment_date)
                VALUES (:comment_authorid, :comment_articleid, :comment_content, '*NULL*', :comment_date)";

        $stmt = $this->conn->prepare($query);
        $res = $stmt->execute(array(
            'comment_authorid' => $comment_authorid,
            'comment_articleid' => $comment_articleid,
            'comment_content' => $comment_content,
            'comment_date' => $comment_date
        ));

        if($res) {
            return true;
        } else {
            return false;
        }
    }

    function update($comment_id, $comment_content) {
        $query = "UPDATE
                " . $this->table_name . "
            SET
                comment_content = :comment_content
            WHERE
                comment_id = :comment_id";

        $stmt = $this->conn->prepare($query);
        $res = $stmt->execute(array(
            'comment_id' => $comment_id,
            'comment_content' => $comment_content
        ));

        if($res) {
            return true;
        } else {
            return false;
        }
    }

    function delete($comment_id, $comment_authorid) {
        $query = "DELETE FROM " . $this->table_name . " WHERE comment_id = :comment_id
                    AND comment_authorid = :comment_authorid";

        $stmt = $this->conn->prepare($query);
        $res = $stmt->execute(array(
            'comment_id' => $comment_id,
            'comment_authorid' => $comment_authorid
        ));

        if($res) {
            return true;
        } else {
            return false;
        }
    }
}

?>
