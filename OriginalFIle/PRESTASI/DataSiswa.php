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
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
  <script src="jQueryv2.2.0.js"></script>
  <script src="js.js"></script>
  <link rel="stylesheet" href="css.css">
  <link rel="stylesheet" href="print.css">
</head>

<body>
  <div class="DataSiswa">
    <div class="Container">
      <h1>-Data Siswa-</h1>
      <div class="TombolTombol">
        <center><button id="TombolTambah">Tambah</button></center>
        

        <button id="TombolPrint">Print</button>
        
      
      


      </div>
      <div class="SearchBox">
      <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name">
      <button id="filterbutton" onclick="hiddenfilter()">FILTER</button>
      <div id="hiddenfilter">
      <form action="#" method="post">
      <h3>Filter</h3><hr>
      Nisn<br>
      <center>
      <input type="text" name="nisn" placeholder="cari berdasarkan NISN"><br>
</center>
      Kelas<br>
      <center>
      <input type="text" name="kelas" placeholder="Cari berdasarkan kelas"><br>
      <input type="submit" value="FILTER" name="searching">
      </center>
      </form>
      </div>
    </div>
      <div class="DisplayData">
        <center>
          <table id="myTable">
            <tr>
              <th onclick="SortNumberData(1)" width="1%">Index</th>
              <th onclick="SortNumberData(2)" width="10%">NISN</th>
              <th onclick="SortStringData(3)" width="35%">Nama Siswa</th>              
              <th onclick="SortStringData(4)" width="25%">Kelas</th>              
              <th width="1%">VIEW</th>
              <th width="25%">EDIT</th>
              <th width="1%">DELETE</th>
            </tr>
            <?php
            if(isset($_POST['searching'])){
              $nisn = $_POST['nisn'];
              $kelas = $_POST['kelas'];
      $fetchsql = "SELECT * FROM prestasi_biodata WHERE iNomerInduk LIKE '%$nisn%' AND vcBiodataKelas LIKE '%$kelas%' AND vcStatus='siswa'";
      //  echo $nisn;      
            }else{
      $fetchsql = "SELECT * FROM prestasi_biodata WHERE vcStatus='siswa' OR vcStatus='SISWA'";
            }
// $fetchsql = "SELECT * FROM prestasi_biodata WHERE vcStatus='siswa' OR vcStatus='SISWA'";
$fetchresault = $conn->query($fetchsql);
$no = 1;
if($fetchresault->num_rows>0){
  while($row = $fetchresault->fetch_assoc()) {
    echo "<tr>";
    echo "<td hidden >".$row["iBiodataId"]."</td>";
    echo "<td>".$no++."</td>";
    echo "<td>".$row["iNomerInduk"]."</td>";
    echo "<td>".$row["vcBiodataNama"]."</td>";
    echo "<td>".$row["vcBiodataKelas"]."</td>";
    echo "<td><input type='button' name='viewe' value='view' id=".$row['iBiodataId']." class='viewe_data' onclick='model3()'/></td>";  
    echo "<td><input type='button' name='updatee' value='update' id=".$row['iBiodataId']." class='updatee_data' onclick='model1()'/>
              <input type='button' name='updatee2' value='user' id=".$row['iNomerInduk']." class='updatee_data2' onclick='model4()'/></td>";  
    echo "<td><input type='button' name='deletee' value='delete' id=".$row['iBiodataId']." class='deletee_data' onclick='model2()'/></td>";  
    echo "</tr>";

    
}
echo "</table>";
} else {
echo "0 results";
}


?>
        </center>
      </div>
    </div>
  </div>

</body>
<div class="SemuaModal">
  <div class="TambahSiswaModal">

    <!-- The Modal -->
    <div id="myModal" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>
        <h1>Tambah Siswa</h1>
        <form method="POST" action="PHP/proses.php">
          <ul>
          <li>
              NISN<br>
               <input type="text" id="" name="TBNISN" placeholder="Masukkan Nama NISN:"
                required>
            </li>
            <li>
              Nama Siswa<br>
               <input type="text" id="" name="TBNamaSiswa" placeholder="Masukkan Nama Siswa:"
                required>
            </li>
            <li>
              Agama<br>
              <select name="TBAgama" >
              <option value=""></option>
                <option value="buddha">buddha</option>
                <option value="hindu">hindu</option>
                <option value="islam">islam</option>
                <option value="katolik">katolik</option>
                <option value="kristen protestan">kristen protestan</option>
                <option value="kong hu cu">kong hu cu</option>
              </select>
            </li>
            <li>
              Tempat Tanggal Lahir<br>
              <input type="text" id="tabelkecil"  name="TBTempatLahir" placeholder="Masukkan Tempat anda lahir" >
              <input type="date" id="tabelbesar"  name="TBTanggalLahir" placeholder="Masukkan Tanggal Lahir Anda" >
            </li>
            <li>
            Alamat<br>
            <select name="TBDaerah" id="tabelkecil">
              <option value=""></option>
                <option value="Bekasi">Bekasi</option>
                <option value="Depok">Depok</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Tangerang">Tangerang</option>
              </select>
               <input type="text" id="tabelbesar" name="TBAlamat" placeholder="Masukkan alamat anda:" >
            </li>
            <li>
            Nomer HP<br>
               <input type="text" id="" name="TBNoHP" placeholder="Masukkan No HP anda:">
            </li><li>
            Email<br>
               <input type="text" id="" name="TBEmail" placeholder="Masukkan Email anda:">
            </li>
            <!-- <li>
            Pendidikan Terakhir<br> -->
            <select name="TBPendidikanTerakhir" hidden>
              <option value=""></option>
                <option value="SD">SD</option>
                <option value="SMP" selected="selected">SMP</option>
                <option value="SMA">SMA</option>
                <option value="S1">S1</option>
                <option value="S2">S2</option>
                <option value="S3">S3</option>
              </select>
            <!-- </li> -->
            <!-- <li>
            Tempat Pendidikan Terakhir<br> -->
               <input type="text" id=""  name="TBTempatPendidikanTerakhir" placeholder="Masukkan Pendidikan Terakhir" value="SMP" hidden >
            <!-- </li> -->
            <li>
            Kelas<br>
               <select name="TBKelasBiodata">
                <option value=""></option>
                <?php
                  $dropdownfetch ="SELECT * FROM prestasi_kelas";
                  $dropdowndata = $conn->query($dropdownfetch);
                  while($row = $dropdowndata->fetch_assoc()){
                  echo "<option value=".$row['vcTahunAjar']."-".$row['vcNamaJurusan']."-".$row['vcTingkat']."-".$row['vcKelas'].">".$row['vcTahunAjar']."-".$row['vcNamaJurusan']."-".$row['vcTingkat']."-".$row['vcKelas']."</option>";
                  }
                ?> 
                </select>
            </li>
            <!-- <li>
            Point<br> -->
               <input type="text" id="" name="TBPoint" placeholder="Masukkan Point anda:" value='300' hidden>
            <!-- </li> -->
            <!-- <li>
            Status<br> -->
            <select name="TBStatus" hidden >
              <option value=""></option>
                <option value="siswa" selected="selected">siswa</option>
                <option value="guru">guru</option>
                <option value="admin">admin</option>
              </select>
            <!-- </li> -->
          </ul>
          <input type="submit" name="FormTambahDataSiswa">
        </form>
      </div>
    </div>
  </div>

  <div class="EditSiswaModal">
    <!-- The Modal -->
    <div id="myModal1" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <span class="close" id="cancel">&times;</span>
        <h1>Edit</h1>


        <div id="EditSiswaModal"></div>
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

  <div class="HapusSiswaModal">
    <!-- The Modal -->
    <div id="myModal2" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <span class="close" id="batalkan">&times;</span>
        <h1>Hapus Siswa</h1>
        <h2>Apakah Anda Yakin Menghapus Data Tersebut?</h2>

        <div id="DeleteSiswaModal"></div>
      </div>
    </div>
  </div>

  <div class="VieweSiswaModal">
    <!-- The Modal -->
    <div id="myModal3" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <span class="close" id="tidakviewe">&times;</span>
        <h1>View Data Siswa</h1>
        

        <div id="VieweSiswaModal"></div>
      </div>
    </div>
  </div>




</div>

<script>
  
  $(document).ready(function () {
    $('.updatee_data').click(function () {
      var UpdateDataSiswaId = $(this).attr("id");
      $.ajax({
        url: "PHP/modals.php",
        method: "post",
        data: {
          UpdateDataSiswaId: UpdateDataSiswaId
        },
        success: function (data) {
          $('#EditSiswaModal').html(data);
          //  $('#dataModal').modal("show");  
        }
      });
    });
  });
  $(document).ready(function () {
    $('.updatee_data2').click(function () {
      var UpdateUserId = $(this).attr("id");
      var urldata ="DataSiswa";
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
  $(document).ready(function () {
    $('.deletee_data').click(function () {
      var DeleteDataSiswaId = $(this).attr("id");
      $.ajax({
        url: "PHP/modals.php",
        method: "post",
        data: {
          DeleteDataSiswaId: DeleteDataSiswaId
        },
        success: function (data) {
          $('#DeleteSiswaModal').html(data);
          //  $('#dataModal').modal("show");  
        }
      });
    });
  });
  $(document).ready(function () {
    $('.viewe_data').click(function () {
      var VieweDataSiswaId = $(this).attr("id");
      $.ajax({
        url: "PHP/modals.php",
        method: "post",
        data: {
          VieweDataSiswaId: VieweDataSiswaId
        },
        success: function (data) {
          $('#VieweSiswaModal').html(data);
          //  $('#dataModal').modal("show");  
        }
      });
    });
  });
 


function myFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  // input1 = document.getElementById("myInput1");
  // alert(input.value);
  //  console.log(input.value);
  //  console.log(input1.value);
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

      function readURL(input) {
        model=document.getElementById('imgpriview');
        model.style.display = "block";
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#imgpriview')
                    .attr('src', e.target.result)
                    .width(150)
                    .height(200);
            };

            reader.readAsDataURL(input.files[0]);
        }
    } 
      






  // Get the modal
  var modal = document.getElementById('myModal');
  var modal1 = document.getElementById('myModal1');
  var modal2 = document.getElementById('myModal2');
  var modal3 = document.getElementById('myModal3');
  var modal4 = document.getElementById('myModal4');


  // Get the button that opens the modal
  var btn = document.getElementById("TombolTambah");


  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  var span1 = document.getElementById("cancel");
  var span2 = document.getElementById("batalkan");
  var span3 = document.getElementById("tidakviewe");
  var span4 = document.getElementById("modal4cancel");

  // When the user clicks the button, open the modal 
  btn.onclick = function () {
    modal.style.display = "block";
  }


  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }
  span1.onclick = function () {
    modal1.style.display = "none";
  }
  span2.onclick = function () {
    modal2.style.display = "none";
  }
  span3.onclick = function () {
    modal3.style.display = "none";
  }
  span4.onclick = function () {
    modal4.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  window.onclick = function (event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }
  window.onclick = function (event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  }
  window.onclick = function (event) {
    if (event.target == modal3) {
      modal3.style.display = "none";
    }
  }
  window.onclick = function (event) {
    if (event.target == modal4) {
      modal4.style.display = "none";
    }
  }

  function model() {
    modal.style.display = "block";

  }

  function model1() {
    modal1.style.display = "block";
  }

  function model2() {
    modal2.style.display = "block";
  }
  function model3() {
    modal3.style.display = "block";
  }
  function model4() {
    modal4.style.display = "block";
  }
  document.querySelector("#TombolPrint").addEventListener("click", function () {
      window.print();
    });
    function hiddenfilter() {
  var x = document.getElementById("hiddenfilter");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
</script>

</html>
