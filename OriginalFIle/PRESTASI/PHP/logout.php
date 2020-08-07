<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <title>Logout</title>
      <link rel="stylesheet" type="text/css" href="css.css">
</head>
<body>
     <center>
     <?php
     session_start();
     unset($_SESSION['ID'],$_SESSION['STATUS']);
     session_destroy();
     ?>
     <h4 id="prosessukses">Anda Berhasil Keluar</h4>
     <center>
     <?php
  header('refresh:2; url=../login.php');
  
     ?>
</body>
</html>