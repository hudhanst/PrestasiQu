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
</head>

<body>
  <div class="Kelas">
    <div class="Container">
      <h1>-Data Biodata Kelas-</h1>
      <div class="TombolTombol">
        <center><button id="TombolTambah">Tambah</button></center>

        <!-- <button id="TombolPrint">Print</button> -->

      </div>
      <!-- <div class="SearchBox">
        <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name">
      </div> -->
      <div class="DisplayData">
        <center>
          <table id="myTable">
            <tr>
              <th onclick="SortNumberData(1)">Index</th>
              <th onclick="SortStringData(2)">Tahun Ajar</th>
              <th onclick="SortStringData(3)">Nama Jurusan</th>
              <th onclick="SortNumberData(4)">Tingkat</th>
              <th onclick="SortNumberData(5)">Kelas</th>
              <!-- <th><a class="TombolShorting" id="ShortingId" data-order="desc" href="#">Index</th>
              <th><a class="TombolShorting" id="ShortingTahunAjar" data-order="desc" href="#">Tahun Ajar</th>
              <th><a class="TombolShorting" id="ShortingNamaJurusan" data-order="desc" href="#">Nama Jurusan</th>
              <th><a class="TombolShorting" id="ShortingTingkat" data-order="desc" href="#">Tingkat</th>
              <th><a class="TombolShorting" id="ShortingKelas" data-order="desc" href="#">Kelas</th> -->
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
            <?php
$fetchsql = "SELECT * FROM prestasi_kelas";
$fetchresault = $conn->query($fetchsql);
$no = 1;
if($fetchresault->num_rows>0){
  while($row = $fetchresault->fetch_assoc()) {
    echo "<tr>";
    echo "<td hidden >".$row["iKelasId"]."</td>";
    echo "<td>".$no++."</td>";
    echo "<td>".$row["vcTahunAjar"]."</td>";
    echo "<td>".$row["vcNamaJurusan"]."</td>";
    echo "<td>".$row["vcTingkat"]."</td>";
    echo "<td>".$row["vcKelas"]."</td>";
    echo "<td><input type='button' name='updatee' value='update' id=".$row['iKelasId']." class='updatee_data' onclick='model1()'/></td>";  
    echo "<td><input type='button' name='deletee' value='delete' id=".$row['iKelasId']." class='deletee_data' onclick='model2()'/></td>";  
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
  <div class="TambahKelasModal">

    <!-- The Modal -->
    <div id="myModal" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>
        <h1>Tambah Kelas</h1>
        <form method="POST" action="PHP/proses.php">
          <ul>
            <li>
              Tahun Ajaran<br>
              <input type="text" id="tahunawal" maxlength="4" name="TBTahunAwalTambahKelas" placeholder="Masukkan tahun awal:"
                required>
              -
              <input type="text" id="tahunakhir" maxlength="4" name="TBTahunAwkhirTambahKelas" placeholder="Masukkan tahun Akhir:"
                required>
            </li>
            <li>
              Nama Jurusan<br>
               <input type="text" id="" name="TBNamaJurusanTambahKelas" placeholder="Masukkan Nama Jurusan:"
                required>
            </li>
            <li>
              Tingkat<br>
              <select name="TBTingkatTambahKelas" required>
                <option value=""></option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </li>
            <li>
              Kelas<br>
               <input type="text" id="" name="TBKelasTambahKelas" placeholder="Masukkan Kelas:" required>
            </li>
          </ul>
          <input type="submit" name="FormTambahKelas">
        </form>
      </div>
    </div>
  </div>

  <div class="EditKelasModal">
    <!-- The Modal -->
    <div id="myModal1" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <span class="close" id="cancel">&times;</span>
        <h1>Edit</h1>


        <div id="EditKelasModal"></div>
      </div>
    </div>
  </div>

  <div class="HapusKelasModal">
    <!-- The Modal -->
    <div id="myModal2" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <span class="close" id="batalkan">&times;</span>
        <h1>Hapus Kelas</h1>
        <h2>Apakah Anda Yakin Menghapus Data Tersebut?</h2>

        <div id="DeleteKelasModal"></div>
      </div>
    </div>
  </div>



</div>

<script>
  $(document).ready(function () {
    $('.updatee_data').click(function () {
      var UpdateKelasId = $(this).attr("id");
      $.ajax({
        url: "PHP/modals.php",
        method: "post",
        data: {
          UpdateKelasId: UpdateKelasId
        },
        success: function (data) {
          $('#EditKelasModal').html(data);
          //  $('#dataModal').modal("show");  
        }
      });
    });
  });
  $(document).ready(function () {
    $('.deletee_data').click(function () {
      var DeleteKelasId = $(this).attr("id");
      $.ajax({
        url: "PHP/modals.php",
        method: "post",
        data: {
          DeleteKelasId: DeleteKelasId
        },
        success: function (data) {
          $('#DeleteKelasModal').html(data);
          //  $('#dataModal').modal("show");  
        }
      });
    });
  });
  // sort tabel number
  function SortNumber(n) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        //check if the two rows should switch place:
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
  // sort tabel data
  function SortData(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount++;
      } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
//   $(document).ready(function(){  
//       $(document).on('click', '.column_sort', function(){  
//            var column_name = $(this).attr("id");  
//            var order = $(this).data("order");  
//            var arrow = '';  
//            //glyphicon glyphicon-arrow-up  
//            //glyphicon glyphicon-arrow-down  
//            if(order == 'desc')  
//            {  
//                 arrow = '&nbsp;<span class="glyphicon glyphicon-arrow-down"></span>';  
//            }  
//            else  
//            {  
//                 arrow = '&nbsp;<span class="glyphicon glyphicon-arrow-up"></span>';  
//            }  
//            $.ajax({  
//                 url:"sort.php",  
//                 method:"POST",  
//                 data:{column_name:column_name, order:order},  
//                 success:function(data)  
//                 {  
//                      $('#employee_table').html(data);  
//                      $('#'+column_name+'').append(arrow);  
//                 }  
//            })  
//       });  
//  });  
  // Get the modal
  var modal = document.getElementById('myModal');
  var modal1 = document.getElementById('myModal1');
  var modal2 = document.getElementById('myModal2');


  // Get the button that opens the modal
  var btn = document.getElementById("TombolTambah");


  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  var span1 = document.getElementById("cancel");
  var span2 = document.getElementById("batalkan");
  var span4 = document.getElementById("btnbatalkan");

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
  span4.onclick = function () {
    modal2.style.display = "none";
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

  function model() {
    modal.style.display = "block";

  }

  function model1() {
    modal1.style.display = "block";
  }

  function model2() {

    modal2.style.display = "block";
  }
</script>

</html>
