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
  <link rel="stylesheet" href="css.css">
  <link rel="stylesheet" href="print.css">
</head>

<body>
  <div class="DataSiswa">
    <div class="Container">
      <h1>-Prestasi-</h1>
      <div class="TombolTombol">
        <center><button id="TombolTambah" hidden>Tambah</button></center>
        

        <button id="TombolPrint">Print</button>
        
      
      


      </div>
      <!-- <div class="SearchBox">
      <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name">
      </div> -->
      <div class="DisplayData">
        <h3>Prestasi anda adalah:</h3>
        <?php
        $connect = mysqli_connect("localhost", "root", "", "prestasi"); 
        $query = "SELECT * FROM prestasi_biodata WHERE iBiodataId = '".$_SESSION['ID']."'";
        $result = mysqli_query($conn, $query);
        while($row = mysqli_fetch_array($result)){
          echo "<center><h4>".$row["iPoint"]."</h4></center>";
        }
        ?>
        <h3>Riwayat Prestasi:</h3><hr>

        <center>
          <table id="myTable">
            <tr>
              <th onclick="SortData(0)" width="1%">Index</th>
              <th onclick="SortData(1)" width="1%">No Pengajuan</th>
              <th onclick="SortData(2)" width="29%">Nama Pengaju</th>                            
              <th onclick="SortData(3)" width="29%">Nama yang Dituju</th>                            
              <th onclick="SortData(4)" width="19%">Prestasi</th>                            
              <th onclick="SortData(5)" width="19%">Tanggal Diterima</th>                            
              <th width="2%">VIEW</th>
            </tr>
            <?php
$fetchsql = "SELECT * FROM prestasi_prestasi WHERE vcStatus='ACC' AND iDitujuId='".$_SESSION['ID']."'";
$fetchresault = $conn->query($fetchsql);
$no = 1;
if($fetchresault->num_rows>0){
  while($row = $fetchresault->fetch_assoc()) {
    echo "<tr>";
    echo "<td hidden >".$row["iPrestasiId"]."</td>";
    echo "<td>".$no++."</td>";
    echo "<td>".$row["iPrestasiId"]."</td>";
    echo "<td>".$row["vcPengajuNama"]."</td>";
    echo "<td>".$row["vcDitujuNama"]."</td>";
    echo "<td>".$row["vcPrestasiNama"]."</td>";
    echo "<td>".$row["dtDIterima"]."</td>";
    echo "<td><input type='button' name='viewe' value='view' id=".$row['iPrestasiId']." class='Prestasi_view' onclick='model7()'/></td>";  
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
  <div class="fullapagemodal">
  

  <div class="PrestasiAjukanModal">
    <!-- The Modal -->
    <div id="myModal6" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <span class="close" id="modal6cancel">&times;</span>
        <h1>Pengajuan Prestasi</h1>
        

        <div id="PrestasiAjukanModal"></div>
      </div>
    </div>
  </div>

  <div class="PrestasiViewModal">
    <!-- The Modal -->
    <div id="myModal7" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <span class="close" id="modal7cancel">&times;</span>
        <h1>View</h1>
        

        <div id="PrestasiViewModal"></div>
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
    $('.Prestasi_view').click(function () {
      var PrestasiViewId = $(this).attr("id");
      var UserId = "<?php echo $_SESSION['ID']?>";
      $.ajax({
        url: "PHP/modals.php",
        method: "post",
        data: {
          PrestasiViewId: PrestasiViewId,
          UserId: UserId

        },
        success: function (data) {
          $('#PrestasiViewModal').html(data);
          //  $('#dataModal').modal("show");  
        }
      });
    });
  });
  $(document).ready(function () {
    $('.Prestasi_data').click(function () {
      var PrestasiAjukanId = $(this).attr("id");
      var UserId = "<?php echo $_SESSION['ID']?>";
      $.ajax({
        url: "PHP/modals.php",
        method: "post",
        data: {
          PrestasiAjukanId: PrestasiAjukanId,
          UserId: UserId

        },
        success: function (data) {
          $('#PrestasiAjukanModal').html(data);
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
  // var modal = document.getElementById('myModal');
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
</script>

</html>
