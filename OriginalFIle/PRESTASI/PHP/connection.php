<?php
$servername = "localhost";
$username = "root";
$password = "";
$databasename = "prestasi";
$errors = array(); 
// $sql = "SELECT * FROM prestasi_user";

// Create connection
$conn = new mysqli($servername, $username, $password , $databasename);
// $pilihan= new mysqli_select_db($link, "prestasi");
// $tabel = mysqli_query($conn, $sql);
// Check connection
// if ($conn->connect_error) {
//     die("tidak terhubung ke database: " . $conn->connect_error);
// } 
// echo "koneksi sukses";
//  while($row = mysqli_fetch_assoc($tabel)) {
//    echo "id: " . $row["vcUserName"];
//  }
 

// if ($pilihan->connect_error){
//   die("tidak dapat memilih database" . $pilihan->connect_error);
// }
// echo "data base prestasi bisa diakses";


?>