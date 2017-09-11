<?php

class Article {

    private $conn;
    private $table_name = "articles";

    public $article_id;
    public $article_title;
    public $article_intro;
    public $article_content;
    public $article_authorid;
    public $article_tagslist;
    public $article_publicationdate;
    public $article_updatedate;
    public $article_coverpath;

    public function __construct($db) {
        $this->conn = $db;
    }

    function readAll() {
        $query = "SELECT
                    article_id,
                    article_title,
                    article_intro,
                    article_coverpath,
                    article_tagslist
                    FROM ". $this->table_name;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt;
    }

    function readOne($id) {
        $query = "SELECT
                    article_id,
                    article_title,
                    article_intro,
                    article_content,
                    article_authorid,
                    article_tagslist,
                    article_publicationdate,
                    article_updatedate,
                    article_coverpath,
                    user_firstname,
                    user_lastname,
                    user_id,
                    user_mail,
                    user_pseudo,
                    user_is_admin
                    FROM ". $this->table_name ." INNER JOIN users ON article_authorid = user_id WHERE article_id = :article_id";

        $stmt = $this->conn->prepare($query);
        $stmt->execute(array(
            'article_id' => $id
        ));

        return $stmt;
    }

    function create($article_title, $article_intro, $article_content, $article_authorid, $article_tagslist, $article_coverpath, $article_publicationdate, $article_updatedate) {
        $query = "INSERT INTO articles(article_title, article_intro, article_content, article_authorid, article_tagslist, article_coverpath, article_publicationdate, article_updatedate)
                VALUES (:article_title, :article_intro, :article_content, :article_authorid, :article_tagslist, :article_coverpath, :article_publicationdate, :article_updatedate)";

        $stmt = $this->conn->prepare($query);
        $res = $stmt->execute(array(
            'article_title' => $article_title,
            'article_intro' => $article_intro,
            'article_content' => $article_content,
            'article_authorid' => $article_authorid,
            'article_tagslist' => $article_tagslist,
            'article_coverpath' => $article_coverpath,
            'article_publicationdate' => $article_publicationdate,
            'article_updatedate' => $article_updatedate
        ));

        if($res) {
            return true;
        } else {
            return false;
        }
    }
}

?>
