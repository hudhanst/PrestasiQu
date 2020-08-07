<?php   

 $output = '';  
 $order = $_POST["order"];  
 if($order == 'desc')  
 {  
      $order = 'asc';  
 }  
 else  
 {  
      $order = 'desc';  
 }  
 $connect = mysqli_connect("localhost", "root", " ", "prestasi");  
 $query = "SELECT * FROM prestasi_kelas ORDER BY ".$_POST["column_name"]." ".$_POST["order"]."";  
 $result = mysqli_query($connect, $query);  
 $output .= '  
 <table>  
      <tr>  
      <th><a class="TombolShorting" id="ShortingId" data-order="'.$order.'" href="#">Index</th>
      <th><a class="TombolShorting" id="ShortingTahunAjar" data-order="'.$order.'" href="#">Tahun Ajar</th>
      <th><a class="TombolShorting" id="ShortingNamaJurusan" data-order="'.$order.'" href="#">Nama Jurusan</th>
      <th><a class="TombolShorting" id="ShortingTingkat" data-order="'.$order.'" href="#">Tingkat</th>
      <th><a class="TombolShorting" id="ShortingKelas" data-order="'.$order.'" href="#">Kelas</th>
      <th>EDIT</th>
     <th>DELETE</th>
      </tr>   
 ';  
 while($row = mysqli_fetch_array($result))  
 {  
      $output .= '  
      <tr>  
           <td>' . $row["iKelasId"] . '</td>  
           <td>' . $row["vcTahunAjar"] . '</td>  
           <td>' . $row["vcNamaJurusan"] . '</td>  
           <td>' . $row["vcTingkat"] . '</td>  
           <td>' . $row["vcKelas"] . '</td>  
           echo "<td><input type="button" name="updatee" value="update" id='.$row['iKelasId'].' class="updatee_data" onclick="model1()"/></td>";  
           echo "<td><input type="button" name="deletee" value="delete" id='.$row['iKelasId'].' class="deletee_data" onclick="model2()"/></td>";  
    
      </tr>  
      ';  
 }  
 $output .= '</table>';  
 echo $output;  
 ?>