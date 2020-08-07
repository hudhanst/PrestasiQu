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
      <h1>-Pengajuan Point-</h1>
      <div class="TombolTombol">
        <center><button id="TombolTambah">Tambah</button></center>
        

        <button id="TombolPrint">Print</button>
        
      
      


      </div>
      <div class="SearchBox">
      <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Cari Nama Kasus" title="Type in a name">
      <button id="filterbutton" onclick="hiddenfilter()">FILTER</button>
      <div id="hiddenfilter">
      <form action="#" method="post">
      <h3>Filter</h3><hr>
      Nama Murid<br>
      <center>
      <input type="text" name="namamurid" placeholder="cari berdasarkan nama murid"><br>
      </center>
      Jenis Pelanggaran<br>
      <center>
      <input type="text" name="jenispelanggaran" placeholder="Cari berdasarkan jenis pelanggaran"><br>
      </center>
      Tahun Diterima<br>
      <input type="date" name="tahunawal" id="tahunawal"  placeholder="Cari berdasarkan tahun awal">-
      <input type="date" name="tahunakhir" id="tahunakhir" placeholder="Cari berdasarkan tahun akhir"><br>
     
      <center>
      <input type="submit" value="FILTER" name="searching">
      </center>
      </form>
      </div>
    </div>
      <div class="DisplayData">
        <h3 onclick="hiddendata()" id="h3triger">Menunggu Konfirmasi</h3><hr>
        <div id="hiddendata">
        <center>
          <table id="myTable1">
            <tr>
              <th onclick="SortNumberData1(1)" width="1%">Index</th>
              <th onclick="SortNumberData1(2)" width="1%">No Pengajuan</th>
              <th onclick="SortStringData1(3)" width="1%">Nama Pengaju</th>                            
              <th onclick="SortStringData1(4)" width="1%">Nama yang Dituju</th>                            
              <th onclick="SortStringData1(5)" width="1%">Kasus</th>                            
              <th onclick="SortStringData1(6)" width="1%">Tanggal Pengajuan</th>                            
              <th width="1%">VIEW</th>
            </tr>
            <?php
$fetchsql = "SELECT * FROM prestasi_point WHERE vcStatus='DLY'";
$fetchresault = $conn->query($fetchsql);
$no = 1;
if($fetchresault->num_rows>0){
  while($row = $fetchresault->fetch_assoc()) {
    echo "<tr>";
    echo "<td hidden >".$row["iPointId"]."</td>";
    echo "<td>".$no++."</td>";
    echo "<td>".$row["iPointId"]."</td>";
    echo "<td>".$row["vcPengajuNama"]."</td>";
    echo "<td>".$row["vcDitujuNama"]."</td>";
    echo "<td>".$row["vcNamaPelanggaran"]."</td>";
    echo "<td>".$row["dtDiajukan"]."</td>";
    echo "<td><input type='button' name='viewe' value='view' id=".$row['iPointId']." class='point_view' onclick='model7()'/></td>";  
    echo "</tr>";

    
}
echo "</table>";
} else {
echo "0 results";
}


?>
        </center>
        </div>
        <h3 onclick="hiddendata1()" id="h3triger">Daftar Point Pelanggaran</h3><hr>
        <div id="hiddendata1">
        <center>
          <table id="myTable">
            <tr>
              <th onclick="SortNumberData(1)" width="1%">Index</th>
              <th onclick="SortNumberData(2)" width="1%">No Pengajuan</th>
              <th onclick="SortStringData(3)" width="19%">Nama Pengaju</th>                            
              <th onclick="SortStringData(4)" width="19%">Nama yang Dituju</th>                            
              <th onclick="SortStringData(5)" width="40%">Kasus</th>                            
              <th onclick="SortStringData(6)" width="19%">Tanggal Diterima</th>                            
              <th width="1%">VIEW</th>
            </tr>
            <?php
            if(isset($_POST['searching'])){
              $namamurid = $_POST['namamurid'];
              $jenispelanggaran = $_POST['jenispelanggaran'];
              $tahunawal = $_POST['tahunawal'];
              $tahunakhir = $_POST['tahunakhir'];
              if(empty($tahunakhir)){
                $fetchsql = "SELECT * FROM prestasi_point WHERE vcDitujuNama LIKE '%$namamurid%' AND vcJenisPelanggaran LIKE '%$jenispelanggaran%' AND dtDiterima >= '$tahunawal' AND vcStatus='ACC'";
              }else{
              $fetchsql = "SELECT * FROM prestasi_point WHERE vcDitujuNama LIKE '%$namamurid%' AND vcJenisPelanggaran LIKE '%$jenispelanggaran%' AND dtDiterima >= '$tahunawal' AND dtDiterima <= '$tahunakhir' AND vcStatus='ACC'";
              }
      //  echo $nisn;      
            }else{
              $fetchsql = "SELECT * FROM prestasi_point WHERE vcStatus='ACC'";
            }

// $fetchsql = "SELECT * FROM prestasi_point WHERE vcStatus='ACC'";
$fetchresault = $conn->query($fetchsql);
$no = 1;
if($fetchresault->num_rows>0){
  while($row = $fetchresault->fetch_assoc()) {
    echo "<tr>";
    echo "<td hidden >".$row["iPointId"]."</td>";
    echo "<td>".$no++."</td>";
    echo "<td>".$row["iPointId"]."</td>";
    echo "<td>".$row["vcPengajuNama"]."</td>";
    echo "<td>".$row["vcDitujuNama"]."</td>";
    echo "<td>".$row["vcNamaPelanggaran"]."</td>";
    echo "<td>".$row["dtDiterima"]."</td>";
    echo "<td><input type='button' name='viewe' value='view' id=".$row['iPointId']." class='point_view' onclick='model7()'/></td>";  
    echo "</tr>";

    
}
echo "</table>";
} else {
echo "0 results";
}


?>
        </center>
        <hr>
        </div>
      </div>
    </div>
  </div>

</body>

<div class="SemuaModal">
  <div class="fullapagemodal">
  <div class="TambahSiswaModal">
    <!-- The Modal -->
    <div id="myModal" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>
        <h1>Ajukan Point</h1>
        <center>
          <table id="myTable2">
            <tr>
              <th onclick="SortNumberData2(1)">Index</th>
              <th onclick="SortNumberData2(2)">NISN</th>
              <th onclick="SortStringData2(3)">Nama Siswa</th>                            
              <th onclick="SortStringData2(4)">Kelas</th>                            
              <th>VIEW</th>
              <th>POINT</th>
            </tr>
            <?php
$fetchsql = "SELECT * FROM prestasi_biodata WHERE vcStatus='siswa' OR vcStatus='Siswa'";
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
    echo "<td><input type='button' name='point' value='point' id=".$row['iBiodataId']." class='point_data' onclick='model6()'/></td>";  
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

  <div class="PointAjukanModal">
    <!-- The Modal -->
    <div id="myModal6" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <span class="close" id="modal6cancel">&times;</span>
        <h1>Pengajuan Point</h1>
        

        <div id="PointAjukanModal"></div>
      </div>
    </div>
  </div>

  <div class="PointViewModal">
    <!-- The Modal -->
    <div id="myModal7" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <span class="close" id="modal7cancel">&times;</span>
        <h1>View</h1>
        

        <div id="PointViewModal"></div>
      </div>
    </div>
  </div>

</div>



<!-- fullpage -->


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
    $('.point_view').click(function () {
      var PointViewId = $(this).attr("id");
      var UserId = "<?php echo $_SESSION['ID']?>";
      $.ajax({
        url: "PHP/modals.php",
        method: "post",
        data: {
          PointViewId: PointViewId,
          UserId: UserId

        },
        success: function (data) {
          $('#PointViewModal').html(data);
          //  $('#dataModal').modal("show");  
        }
      });
    });
  });
  $(document).ready(function () {
    $('.point_data').click(function () {
      var PointAjukanId = $(this).attr("id");
      var UserId = "<?php echo $_SESSION['ID']?>";
      $.ajax({
        url: "PHP/modals.php",
        method: "post",
        data: {
          PointAjukanId: PointAjukanId,
          UserId: UserId

        },
        success: function (data) {
          $('#PointAjukanModal').html(data);
          //  $('#dataModal').modal("show");  
        }
      });
    });
  });
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
      var urldata ="dataSiswa";
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
    td = tr[i].getElementsByTagName("td")[5];
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
  var modal6 = document.getElementById('myModal6');
  var modal7 = document.getElementById('myModal7');


  // Get the button that opens the modal
  var btn = document.getElementById("TombolTambah");


  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  var span1 = document.getElementById("cancel");
  var span2 = document.getElementById("batalkan");
  var span3 = document.getElementById("tidakviewe");
  var span4 = document.getElementById("modal4cancel");
  var span6 = document.getElementById("modal6cancel");
  var span7 = document.getElementById("modal7cancel");

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
  span6.onclick = function () {
    modal6.style.display = "none";
  }
  span7.onclick = function () {
    modal7.style.display = "none";
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
  window.onclick = function (event) {
    if (event.target == modal6) {
      modal6.style.display = "none";
    }
  }
  window.onclick = function (event) {
    if (event.target == modal7) {
      modal7.style.display = "none";
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
  function model6() {
    modal6.style.display = "block";
  }
  function model7() {
    modal7.style.display = "block";
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
function hiddendata() {
  var x = document.getElementById("hiddendata");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function hiddendata1() {
  var x = document.getElementById("hiddendata1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
</script>

</html>
