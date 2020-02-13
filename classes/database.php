<?php
/**
 * Set a database connection.
 */
class Database {
    public $hostname     = "localhost";
    public $databaseName = "examdatabase";
    public $username     = "root";
    public $password     = "";

    public function startConnection() {       
        try {
            return new PDO ("mysql:host=$this->hostname;dbname=$this->databaseName", $this->username, $this->password);
        } 
        catch(PDOException $e) {
            echo "There was a problem connecting to the database: ". $e->getMessage();
            die();
        }
    }
}
?>