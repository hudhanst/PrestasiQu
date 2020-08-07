<?php
include('PHP/connection.php');
session_start();
// if(empty($_SESSION['ID']) or (!($_SESSION['STATUS']=="siswa"))){
if(empty($_SESSION['ID'])){
  session_destroy();
  header('location: login.php');
}else{

}
if($_SESSION['STATUS']=="siswa"){
  echo '
  <div class="NavigatorMenu">

    <div id="NavigatorKiri">
      <a href="INDEX.php"><img src="IMG&LOGO/Logo SMKN 26 Jakarta.png"></a>

    </div>
    <div id="NavigatorKanan">
      <ul>
        <li><a id="marginmenu" href="Biodata.php">Biodata</a>
  
        </li>
        <li><a id="marginmenu" href="RiwayatPrestasi.php">Prestasi</a>
        <ul>
                    <li id="menu21"><a href="Prestasi.php">Pengajuan Prestasi</a></li>   
                   
                </ul>
        </li>
        <li><a id="marginmenu" href="Riwayatpoint.php">Point</a>
          
        </li>

        </li>
        <li><a href="PHP/logout.php">LogOut</a></li>
      </ul>
    </div>
  </div>
  ';      
}elseif ($_SESSION['STATUS']=="guru") {
  echo '
  <div class="NavigatorMenu">

    <div id="NavigatorKiri">
      <a href="INDEX.php"><img src="IMG&LOGO/Logo SMKN 26 Jakarta.png"></a>

    </div>
    <div id="NavigatorKanan">
      <ul>
        <li><a id="marginmenu" href="Biodata.php">Biodata</a>
          <ul>
                  <li id="menu11"><a href="datasiswa.php">Data Siswa</a></li>
                  <li id="menu12"><a href="dataguru.php">Data Guru</a></li>
                  <li id="menu13"><a href="dataadmin.php">Data Admin</a></li>    
                  <li id="menu14"><a href="BiodataKelas.php">Data Kelas</a></li>    
                  <li id="menu15"><a href="Biodatainstansi.php">Data Instansi</a></li>    
                  <li id="menu16"><a href="DataPelanggaran.php">Data Pelanggaran</a></li>    
               </ul>
        </li>
        <li><a id="marginmenu" href="RiwayatPrestasi.php">Prestasi</a>
          <ul>
                    <li id="menu21"><a href="Prestasi.php">Pengajuan Prestasi</a></li>   
                   
                </ul>
        </li>
        <li><a id="marginmenu" href="Riwayatpoint.php">Point</a>
          <ul>
                    <li id="menu31"><a href="point.php">Pengajuan point</a></li>   
                
                </ul>
        </li>

        </li>
        <li><a href="PHP/logout.php">LogOut</a></li>
      </ul>
    </div>
  </div>
  ';      
}else{
  echo ' 
  <div class="NavigatorMenu">

    <div id="NavigatorKiri">
      <a href="INDEX.php"><img src="IMG&LOGO/Logo SMKN 26 Jakarta.png"></a>

    </div>
    <div id="NavigatorKanan">
      <ul>
        <li><a id="marginmenu" href="Biodata.php">Biodata</a>
          <ul>
                  <li id="menu11"><a href="datasiswa.php">Data Siswa</a></li>
                  <li id="menu12"><a href="dataguru.php">Data Guru</a></li>
                  <li id="menu13"><a href="dataadmin.php">Data Admin</a></li>    
                  <li id="menu14"><a href="BiodataKelas.php">Data Kelas</a></li>    
                  <li id="menu15"><a href="Biodatainstansi.php">Data Instansi</a></li>    
                  <li id="menu16"><a href="DataPelanggaran.php">Data Pelanggaran</a></li>    
               </ul>
        </li>
        <li><a id="marginmenu" href="RiwayatPrestasi.php">Prestasi</a>
          <ul>
                    <li id="menu21"><a href="Prestasi.php">Pengajuan Prestasi</a></li>   
                    <li id="menu22"><a href="accprestasi.php">ACC Pengajuan Prestasi</a></li>   
                </ul>
        </li>
        <li><a id="marginmenu" href="Riwayatpoint.php">Point</a>
          <ul>
                    <li id="menu31"><a href="point.php">Pengajuan point</a></li>   
                    <li id="menu32"><a href="accpoint.php">ACC Pengajuan point</a></li>     
                </ul>
        </li>

        </li>
        <li><a href="PHP/logout.php">LogOut</a></li>
      </ul>
    </div>
  </div>
  ';
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="css.css">
  <link rel="stylesheet" href="print.css">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
  <script src="jQueryv2.2.0.js"></script>
  <!-- <script>
    
  function hidemenu(){
    var parameter = "<?php echo $_SESSION['STATUS'] ?>";
    if(parameter=="admin"){
      console.log("admin");
    }else{
      if(parameter="guru"){
      document.getElementById("menu11").style.display = "none";
      document.getElementById("menu12").style.display = "none";
      document.getElementById("menu13").style.display = "none";
      document.getElementById("menu14").style.display = "none";
      document.getElementById("menu15").style.display = "none";
      document.getElementById("menu16").style.display = "none";
      document.getElementById("menu22").style.display = "none";
      document.getElementById("menu32").style.display = "none";
      console.log("guru");
      }else{
        if(parameter=="siswa"){
      document.getElementById("menu11").style.display = "none";
      document.getElementById("menu12").style.display = "none";
      document.getElementById("menu13").style.display = "none";
      document.getElementById("menu14").style.display = "none";
      document.getElementById("menu15").style.display = "none";
      document.getElementById("menu16").style.display = "none";
      document.getElementById("menu21").style.display = "none";
      document.getElementById("menu22").style.display = "none";
      document.getElementById("menu31").style.display = "none";
      document.getElementById("menu32").style.display = "none";
      console.log("siswa");

        }
      }
    }
  }
  </script> -->
  
        
</head>

<body >

  


  <div class="biodata">
    <div class="Container">
      <?php
      $output='';
      $query = "SELECT * FROM prestasi_biodata WHERE iBiodataId = '".$_SESSION['ID']."'";
      $result = mysqli_query($conn, $query);
      while($row = mysqli_fetch_array($result)){
        if(empty($row['blProfilePic'])){
      
          $row['blProfilePic']="IMG&LOGO/Logo SMKN 26 Jakarta.png";
          
         }else{
              $row['blProfilePic']="data:image/jpeg;base64,".base64_encode($row['blProfilePic'])."";
         }
        $output .= '  
      <div class="PhotoProfile">
      <img src="'.$row['blProfilePic'].'"/>
      </div>

      <div class="TombolTombol">
        <!-- <center><button id="TombolTambah">Tambah</button></center> -->
        <button id="TombolPrint">Print</button>
      </div>
      <div class="SearchBox">
      </div>
      <div class="DisplayData">
        <h1>Biodata</h1>
        <ul>
          <li>Nomer Induk<br><input type="text" name="" id="" value="'.$row['iNomerInduk'].'" readonly></li>
          <li>Nama<br><input type="text" name="" id="" value="'.$row['vcBiodataNama'].'" readonly></li>
          <li>Agama<br><input type="text" name="" id="" value="'.$row['vcAgama'].'" readonly></li>
          <li>Tempat Tanggal Lahir<br><input type="text" name="" id="" value="'.$row['vcTempatLahir'].",".$row['dtTanggalLahir'].'" readonly></li>
          <li>Alamat<br><input type="text" name="" id="" value="'.$row['vcAlamat'].'" readonly></li>
          <li>No Hp<br><input type="text" name="" id="" value="'.$row['vcNomerHP'].'" readonly></li>
          <li>Email<br><input type="text" name="" id="" value="'.$row['vcEmail'].'" readonly></li>
          <li>Pendidikan Terakhir<br><input type="text" name="" id="" value="'.$row['vcPendidikanTerakhir'].",".$row['vcInstansiPendidikanTerakhir'].'" readonly></li>
          <li>Kelas<br><input type="text" name="" id="" value="'.$row['vcBiodataKelas'].'" readonly></li>
          <li>Status<br><input type="text" name="" id="" value="'.$row['vcStatus'].'" readonly></li>
          <input type="button" name="updatee" value="update" id="'.$row['iBiodataId'].'" class="updatee_data" onclick="model1()"/>
          ';
    }
    $output .= " ";  
      echo $output;  
    ?>    
    <?php
    $output='';
    $query = "SELECT * FROM prestasi_user WHERE iUserNomer = '".$_SESSION['NomerInduk']."'";//nisn
    $result = mysqli_query($conn, $query);
    while($row = mysqli_fetch_array($result)){
    $output='
    <div class="username">
          <h1>User Name</h1>
          <li>User Name<br><input type="text" name="" id="" value="'.$row['vcUserName'].'"readonly></li>
          <li>Password<br><input type="text" name="" id="" value="'.$row['vcUserPassword'].'"readonly></li>
          <input type="button" name="updatee2" value="user" id="'.$row['iUserNomer'].'" class="updatee_data2" onclick="model4()"/> 
          </div>
        </ul>
    ';
    }
    $output .= " ";  
      echo $output;

    ?>
    

      </div>

    </div>

  </div>

</body>

<div class="SemuaModal">
    <div class="EditGuruModal">
        <!-- The Modal -->
        <div id="myModal1" class="modal">
    
          <!-- Modal content -->
          <div class="modal-content">
            <span class="close" id="cancel">&times;</span>
            <h1>Edit</h1>
    
    
            <div id="EditGuruModal"></div>
          </div>
        </div>
      </div>
    
      <div class="EditUserModal">
        <!-- The Modal -->
        <div id="myModal4" class="modal">
    
          <!-- Modal content -->
          <div class="modal-content">
            <span class="close" id="modal4cancel">&times;</span>
            <h1>Edit</h1>
    
    
            <div id="EditUserModal"></div>
          </div>
        </div>
      </div>


</div>

<script>
  
  
  $(document).ready(function () {
    $('.updatee_data').click(function () {
      var UpdateBiodataId = $(this).attr("id");
      var Statusdata = "<?php echo $_SESSION['STATUS']?>";
      $.ajax({
        url: "PHP/modals.php",
        method: "post",
        data: {
          UpdateBiodataId: UpdateBiodataId,
          Statusdata: Statusdata
        },
        success: function (data) {
          $('#EditGuruModal').html(data);
          //  $('#dataModal').modal("show");  
        }
      });
    });
  });
  $(document).ready(function () {
    $('.updatee_data2').click(function () {
      var UpdateUserId = $(this).attr("id");
      var urldata ="biodata";
      $.ajax({
        url: "PHP/modals.php",
        method: "post",
        data: {
          UpdateUserId: UpdateUserId,
          urldata:urldata
        },
        success: function (data) {
          $('#EditUserModal').html(data);
          //  $('#dataModal').modal("show");  
        }
      });
    });
  });


  
  // Get the modal
  var modal1 = document.getElementById('myModal1');
  var modal4 = document.getElementById('myModal4');
 
  // Get the <span> element that closes the modal
  var span1 = document.getElementById("cancel");
  var span4 = document.getElementById("modal4cancel");

 
  // When the user clicks on <span> (x), close the modal
  span1.onclick = function () {
    modal1.style.display = "none";
  }
  span4.onclick = function () {
    modal4.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }
  window.onclick = function (event) {
    if (event.target == modal4) {
      modal4.style.display = "none";
    }
  }

  function model1() {
    modal1.style.display = "block";
  }

  
  function model4() {
    modal4.style.display = "block";
  }
  document.querySelector("#TombolPrint").addEventListener("click", function () {
      window.print();
    });
</script>

</html>
