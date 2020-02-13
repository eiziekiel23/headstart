<?php
function __autoload($className) {
     include_once $className."php";
 }

$model = new Model();



?>