<?php
include('PHP/connection.php');

if ($conn->connect_error) {
    die("tidak terhubung ke database: " . $conn->connect_error);
} else{ ?>
<html>

<head>
    <link rel="stylesheet" type="text/css" href="css.css">
    <title></title>

</head>

<body>
    <div id="LoginContainer">
        <center>
            <img id="logologin" src="IMG&LOGO/Logo SMKN 26 Jakarta.png"><br>

            <h1>
                PRESTASIKU
            </h1>
            <h3>
                Informasi Mengenai Prestasi Siswa SMKN 26 Jakarta
            </h3>
            <div id="erormeasage">

            </div>

            <form method="POST" action="">
                <img id="logo" src="IMG&LOGO/user.png">
                <input id="TBUserNameSiswa" type="text" placeholder="Masukkan Username/NIS" name="TBUserNameSiswa"><br>
                <img id="logo" src="IMG&LOGO/padlock.png">
                <input id="siswapass" type="password" placeholder="Masukkan password" name="TBPasswordSiswa"><br>
                <input type="submit" value="Masuk" name="FormLoginSiswa">
            </form>


            <button id="myBtn"> Guru/Admin </button>
        </center>
    </div>
    <div class="LoginModal">

        <!-- Trigger/Open The Modal
        <button id="myBtn">Open Modal</button> -->

        <!-- The Modal -->
        <div id="myModal" class="modal">

            <!-- Modal content -->
            <div class="modal-content">
                <span class="close">&times;</span>
                <center>
                    <img id="logomodallogin" src="IMG&LOGO/Logo SMKN 26 Jakarta.png">

                    <h2>Login Guru dan Admin</h2>
                </center>
                <form action="" method="POST">
                    <img id="inputmodallogo" src="IMG&LOGO/user.png">
                    <input id="TBUserNameKaryawan" type="text" placeholder="Masukkan Username/NIS" name="TBUserNameKaryawan"><br>
                    <img id="inputmodallogo" src="IMG&LOGO/padlock.png">
                    <input id="TBPasswordKaryawan" type="password" placeholder="Masukkan password" name="TBPasswordKaryawan"><br>
                    <input type="submit" name="FormLoginKaryawan"><br>
                </form>
            </div>
        </div>
    </div>

    <script>
       
        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 
        btn.onclick = function () {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    </script>


</body>

</html>
<?php } 
// include('PHP/errors.php');
if (isset($_POST['FormLoginSiswa'])) {
    $username = $_POST['TBUserNameSiswa'];
    $password = $_POST['TBPasswordSiswa'];
    $status = "siswa";
    $query = "SELECT * FROM prestasi_user WHERE (iUserNomer='$username' OR vcUserName='$username') AND vcUserPassword='$password'AND `vcUserStatus` = '$status'";
        $results = mysqli_query($conn, $query);
        if (mysqli_num_rows($results) == 1) {
            session_start();
            $row = $results->fetch_array(MYSQLI_BOTH);
                $_SESSION['NomerInduk']=$row['iUserNomer'];                
                $_SESSION['STATUS']=$row['vcUserStatus'];  
                $xx = $_SESSION['NomerInduk'];
                $queryx = "SELECT * FROM prestasi_biodata WHERE iNomerInduk='$xx'";
                $resultsx = mysqli_query($conn, $queryx);
                $wor = $resultsx->fetch_array(MYSQLI_BOTH);
                $_SESSION['ID']=$wor['iBiodataId'];
          header('location: INDEX.php');
        }else {
            $_SESSION['Message'] = "Username atau password salah";
            echo $_SESSION['Message'];
        }
    }
    if (isset($_POST['FormLoginKaryawan'])) {
        $username = $_POST['TBUserNameKaryawan'];
        $password = $_POST['TBPasswordKaryawan'];
        $statusa = "guru";
        $statusb = "admin";
        $query = "SELECT * FROM prestasi_user WHERE (iUserNomer='$username' OR vcUserName='$username') AND vcUserPassword='$password' AND (vcUserStatus = '$statusa' OR vcUserStatus = '$statusb')";
        // $query = "SELECT * FROM prestasi_user WHERE (iUserNomer='$username' OR vcUserName='$username') AND vcUserPassword='$password' AND vcUserStatus = '$statusa'";
        // $query1 = "SELECT * FROM prestasi_user WHERE (iUserNomer='$username' OR vcUserName='$username') AND vcUserPassword='$password' AND vcUserStatus = '$statusb'";
            // $results = mysqli_query($conn, $query);
            $results = mysqli_query($conn, $query);
        if (mysqli_num_rows($results) == 1) {
            session_start();
            $row = $results->fetch_array(MYSQLI_BOTH);
                $_SESSION['NomerInduk']=$row['iUserNomer'];                
                $_SESSION['STATUS']=$row['vcUserStatus'];  
                $xx = $_SESSION['NomerInduk'];
                $queryx = "SELECT * FROM prestasi_biodata WHERE iNomerInduk='$xx'";
                $resultsx = mysqli_query($conn, $queryx);
                $wor = $resultsx->fetch_array(MYSQLI_BOTH);
                $_SESSION['ID']=$wor['iBiodataId'];
          header('location: INDEX.php');
        }else {
            $_SESSION['Message'] = "Username atau password salah";
            echo $_SESSION['Message'];
        }
            // $results1 = mysqli_query($conn, $query1);
            
            // if (mysqli_num_rows($results) == 1) {
            //     session_start();
            //     $row = $results->fetch_array(MYSQLI_BOTH);
            //     $_SESSION['NomerInduk']=$row['iUserNomer'];                
            //     $_SESSION['STATUS']=$row['vcUserStatus'];  
            //     // $xx = $_SESSION['NomerInduk'];
            //     // $queryx = "SELECT * FROM prestasi_biodata WHERE iNomerInduk='$xx'";
            //     // $resultsx = mysqli_query($conn, $queryx);
            //     // $wor = $resultsx->fetch_array(MYSQLI_BOTH);
            //     // $_SESSION['ID']=$wor['iBiodataId'];  
            //   header('location: INDEX.php');
            // }elseif(mysqli_num_rows($results1) == 1){
            //     session_start();
            // $row = $results->fetch_array(MYSQLI_BOTH);
            // $_SESSION['NomerInduk']=$row['iUserNomer'];                
            // $_SESSION['STATUS']=$row['vcUserStatus'];  
            // // $xx = $_SESSION['NomerInduk'];
            // // $queryx = "SELECT * FROM prestasi_biodata WHERE iNomerInduk='$xx'";
            // // $resultsx = mysqli_query($conn, $queryx);
            // // $wor = $resultsx->fetch_array(MYSQLI_BOTH);
            // // $_SESSION['ID']=$wor['iBiodataId'];
            //     header('location: INDEX.php');
            // }else{
            //     $_SESSION['Message'] = "Username atau password salah";
            //     echo $_SESSION['Message'];
            // }
        }
    
  

?>