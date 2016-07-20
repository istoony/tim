<?php 

if(!$_POST['url']) die("0");

$page = (int)$_POST['url'];

if(file_exists('pages/'.$page.'index.html'))
echo file_get_contents('pages/'.$page.'index.html');

else echo 'There is no such page!';


?>
