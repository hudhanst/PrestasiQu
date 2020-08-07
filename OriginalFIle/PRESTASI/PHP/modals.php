<?php include('connection.php');

// kelas
if(isset($_POST["UpdateKelasId"])) {
  $output='';
  $connect=mysqli_connect("localhost", "root", "", "prestasi");
  $query="SELECT * FROM prestasi_kelas WHERE iKelasId = '".$_POST["UpdateKelasId"]."'";

  $result=mysqli_query($connect, $query);

  while($row=mysqli_fetch_array($result)) {
    $output .='  
<form method="POST"action="PHP/proses.php"><ul><li>ID<br><input type="text"id="id"name="TBKelasId"value="'.$row["iKelasId"].'"readonly required></li><li>tahun ajar<br><input type="text"id="tahunajar"name="TBTahunAjar"value="'.$row["vcTahunAjar"].'"required></li><li>Nama Jurusan <br><input type="text"id=""name="TBNamaJurusan"value="'.$row["vcNamaJurusan"].'"required></li><li>Tingkat<br><select name="TBTingkatKelas"required><option value="'.$row["vcTingkat"].'"selected="selected">'.$row["vcTingkat"].'</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></li><li>Kelas<br><input type="text"id=""name="TBTambahkelas"value="'.$row["vcKelas"].'"required></li></ul><input type="submit"name="FormEditKelas"></form>';  

  }

  $output .=" ";
  echo $output;
}

if(isset($_POST["DeleteKelasId"])) {

  $output='';
  $connect=mysqli_connect("localhost", "root", "", "prestasi");
  $query="SELECT * FROM prestasi_kelas WHERE iKelasId = '".$_POST["DeleteKelasId"]."'";

  $result=mysqli_query($connect, $query);

  while($row=mysqli_fetch_array($result)) {
    $output .='  
<form method="POST"action="PHP/proses.php"><ul><li>ID<br><input type="text"id="id"name="TBKelasId"value="'.$row["iKelasId"].'"readonly></li><li>tahun ajar<br><input type="text"id="tahunajar"name="TBTahunAjar"value="'.$row["vcTahunAjar"].'"readonly></li><li>Nama Jurusan<br><input type="text"id=""name="TBNamaJurusan"value="'.$row["vcNamaJurusan"].'"readonly></li><li>Tingkat<br><input type="text"id=""name="TBTingkatKelas"value="'.$row["vcTingkat"].'"readonly></li><li>Kelas<br><input type="text"id=""name="TBTambahkelas"value="'.$row["vcKelas"].'"readonly></li></ul><input type="submit"name="FormHapusKelas"value="Hapus"><input id="btnbatalkan"type="button"value="BATALKAN"></form>';  

  }

  $output .=" ";
  echo $output;
}

//instansi
if(isset($_POST["VieweInstansiId"])) {
  $output='';
  $connect=mysqli_connect("localhost", "root", "", "prestasi");
  $query="SELECT * FROM prestasi_instansi WHERE iInstansiId = '".$_POST["VieweInstansiId"]."'";
  $result=mysqli_query($connect, $query);

  while($row=mysqli_fetch_array($result)) {
    $output .='  
<form method="POST"action="#"><ul><li>ID<br><input type="text"id="id"name="TBInstansiId"value="'.$row["iInstansiId"].'"readonly></li><li>Nama Instansi<br><input type="text"id="tahunajar"name="TBNamaInstansi"value="'.$row["vcNamaInstansi"].'"readonly></li><li>Jenis Instansi<br><input type="text"id=""name="TBJenisInstansi"value="'.$row["vcJenisInstansi"].'"readonly></li><li>Keterangan Instansi<br><input type="text"id=""name="TBKetInstansi"value="'.$row["vcKetInstansi"].'"readonly></li></ul></form>';  

  }

  $output .=" ";
  echo $output;
}

if(isset($_POST["UpdateInstansiId"])) {
  $output='';
  $connect=mysqli_connect("localhost", "root", "", "prestasi");
  $query="SELECT * FROM prestasi_instansi WHERE iInstansiId = '".$_POST["UpdateInstansiId"]."'";

  $result=mysqli_query($connect, $query);

  while($row=mysqli_fetch_array($result)) {
    $output .='  
<form method="POST"action="PHP/proses.php"><ul><li>ID<br><input type="text"id="id"name="TBInstansiId"value="'.$row["iInstansiId"].'"readonly></li><li>Nama Instansi<br><input type="text"id="tahunajar"name="TBNamaInstansi"value='.$row["vcNamaInstansi"].'required></li><li>Jenis Instansi<br><select name="TBJenisInstansi"required><option value="'.$row["vcJenisInstansi"].'"selected="selected">'.$row["vcJenisInstansi"].'</option><option value="Pendidikan">Pendidikan</option><option value="Pemerintahan">Pemerintahan</option><option value="Badan Usaha">Badan Usaha</option></select></li><li>Keterangan Instansi<br><input type="text"id=""name="TBKeteranganINstansi"value="'.$row["vcKetInstansi"].'"></li></ul><input type="submit"name="FormEditInstansi"></form>';  

  }

  $output .=" ";
  echo $output;
}

if(isset($_POST["DeleteInstansiId"])) {

  $output='';
  $connect=mysqli_connect("localhost", "root", "", "prestasi");
  $query="SELECT * FROM prestasi_instansi WHERE iInstansiId = '".$_POST["DeleteInstansiId"]."'";

  $result=mysqli_query($connect, $query);

  while($row=mysqli_fetch_array($result)) {
    $output .='  
<form method="POST"action="PHP/proses.php"><ul><li>ID<br><input type="text"id="id"name="TBInstansiId"value="'.$row["iInstansiId"].'"readonly></li><li>Nama Instansi<br><input type="text"id="tahunajar"name="TBNamaInstansi"value="'.$row["vcNamaInstansi"].'"readonly></li><li>Jenis Instansi<br><input type="text"id=""name="TBJenisInstansi"value="'.$row["vcJenisInstansi"].'"readonly></li><li>Keterangan Instansi<br><input type="text"id=""name="TBKetInstansi"value="'.$row["vcKetInstansi"].'"readonly></li></ul><input type="submit"name="FormHapusInstansi"value="Hapus"><input id="btnbatalkan"type="button"value="BATALKAN"></form>';  

  }

  $output .=" ";
  echo $output;
}

//  pelanggaran
if(isset($_POST["ViewePelanggaranId"])) {
  $output='';
  $connect=mysqli_connect("localhost", "root", "", "prestasi");
  $query="SELECT * FROM prestasi_pelanggaran WHERE iPelanggaranId = '".$_POST["ViewePelanggaranId"]."'";
  $result=mysqli_query($connect, $query);

  while($row=mysqli_fetch_array($result)) {
    $output .='  
<form method="POST"action="#"><ul><li>ID<br><input type="text"id="id"name="TBPelanggaranId"value="'.$row["iPelanggaranId"].'"readonly></li><li>Nama Pelanggaran<br><input type="text"id="tahunajar"name="TBNamaPelanggaran"value="'.$row["vcNamaPelanggaran"].'"readonly></li><li>Jenis Pelanggaran<br><input type="text"id=""name="TBJenisPelanggaran"value="'.$row["vcJenisiPointPelanggaran"].'"readonly></li><li>Point Pelanggaran<br><input type="text"id=""name="TBJenisPelanggaran"value="'.$row["iPointPelanggaran"].'"readonly></li><li>Keterangan Pelanggaran<br><input type="text"id=""name="TBKetPelanggaran"value="'.$row["vcKeteranganPelanggaran"].'"readonly></li></ul></form>';  

  }

  $output .=" ";
  echo $output;
}

if(isset($_POST["UpdatePelanggaranId"])) {
  $output='';
  $connect=mysqli_connect("localhost", "root", "", "prestasi");
  $query="SELECT * FROM prestasi_Pelanggaran WHERE iPelanggaranId = '".$_POST["UpdatePelanggaranId"]."'";

  $result=mysqli_query($connect, $query);

  while($row=mysqli_fetch_array($result)) {
    $output .='  
<form method="POST"action="PHP/proses.php"><ul><li>ID<br><input type="text"id="id"name="TBPelanggaranId"value="'.$row["iPelanggaranId"].'"readonly></li><li>Nama Pelanggaran<br><input type="text"id="tahunajar"name="TBNamaPelanggaran"value="'.$row["vcNamaPelanggaran"].'"required></li><li>Jenis Pelanggaran<br><select name="TBJenisPelanggaran"required><option value="'.$row["vcJenisiPointPelanggaran"].'"selected="selected">'.$row["vcJenisiPointPelanggaran"].'</option><option value="Ringan">Ringan</option><option value="Sedang">Sedang</option><option value="Berat">Berat</option></select></li><li>Point Pelanggaran<br><input type="text"id=""name="TBPointPelanggaran"value="'.$row["iPointPelanggaran"].'"></li><li>Keterangan Pelanggaran<br><input type="text"id=""name="TBKeteranganPelanggaran"value="'.$row["vcKeteranganPelanggaran"].'"></li></ul><input type="submit"name="FormEditPelanggaran"></form>';  

  }

  $output .=" ";
  echo $output;
}

if(isset($_POST["DeletePelanggaranId"])) {

  $output='';
  $connect=mysqli_connect("localhost", "root", "", "prestasi");
  $query="SELECT * FROM prestasi_Pelanggaran WHERE iPelanggaranId = '".$_POST["DeletePelanggaranId"]."'";

  $result=mysqli_query($connect, $query);

  while($row=mysqli_fetch_array($result)) {
    $output .='  
<form method="POST"action="PHP/proses.php"><ul><li>ID<br><input type="text"id="id"name="TBPelanggaranId"value="'.$row["iPelanggaranId"].'"readonly></li><li>Nama Pelanggaran<br><input type="text"id="tahunajar"name="TBNamaPelanggaran"value="'.$row["vcNamaPelanggaran"].'"readonly></li><li>Jenis Pelanggaran<br><input type="text"id=""name="TBJenisPelanggaran"value="'.$row["vcJenisiPointPelanggaran"].'"readonly></li><li>Point Pelanggaran<br><input type="text"id=""name="TBPointPelanggaran"value="'.$row["iPointPelanggaran"].'"readonly></li><li>Keterangan Pelanggaran<br><input type="text"id=""name="TBKetPelanggaran"value="'.$row["vcKeteranganPelanggaran"].'"readonly></li></ul><input type="submit"name="FormHapusPelanggaran"value="Hapus"></form>';  

  }

  $output .=" ";
  echo $output;
}

// data siswa 
if(isset($_POST["VieweDataSiswaId"])) {
  $output='';
  $output1='';
  $connect=mysqli_connect("localhost", "root", "", "prestasi");
  $query="SELECT * FROM prestasi_biodata WHERE iBiodataId = '".$_POST["VieweDataSiswaId"]."'";
  $result=mysqli_query($connect, $query);

  while($row=mysqli_fetch_array($result)) {
    if(empty($row['blProfilePic'])) {

      $row['blProfilePic']="IMG&LOGO/Logo SMKN 26 Jakarta.png";

    }

    else {
      $row['blProfilePic']="data:image/jpeg;base64,".base64_encode($row['blProfilePic'])."";
    }

    //  echo $row['blProfilePic'];
    $output .='  
<form method="POST"action="#"><ul><li>ID<br><input type="text"id="id"name="iBiodataId"value="'.$row["iBiodataId"].'"readonly></li><li>NISN<br><input type="text"id="id"name="TBiNomerInduk"value="'.$row["iNomerInduk"].'"readonly></li><li>Biodata Nama<br><input type="text"id="id"name="TBBiodataNama"value="'.$row["vcBiodataNama"].'"readonly></li><li>Agama<br><input type="text"id="id"name="TBAgama"value="'.$row["vcAgama"].'"readonly></li><li>Tempat Tanggal Lahir<br><input type="text"id="id"name="TBTempatTanggalLahir"value="'.$row["vcTempatLahir"].",
    ".$row["dtTanggalLahir"].'"readonly></li><li>Alamat<br><input type="text"id="id"name="TBAlamat"value="'.$row["vcAlamat"].'"readonly></li><li>No HP<br><input type="text"id="id"name="TBNoHP"value="'.$row["vcNomerHP"].'"readonly></li><li>Email<br><input type="text"id="tahunajar"name="TBEmail"value="'.$row["vcEmail"].'"readonly></li><li>Pendidikan Terakhir<br><input type="text"id=""name="TBPendidikanTerakhir"value="'.$row["vcPendidikanTerakhir"].",
    ".$row["vcInstansiPendidikanTerakhir"].'"readonly></li><li>Kelas<br><input type="text"id=""name="TBKelas"value="'.$row["vcBiodataKelas"].'"readonly></li><li>Point<br><input type="text"id=""name="TBPoint"value="'.$row["iPoint"].'"readonly></li><li>Profile Picture<br><center><img src="'.$row['blProfilePic'].'"/></center></li></ul></form>';  
$useridentifikasi=$row["iNomerInduk"];
    $useridentifikasi1=$row["vcStatus"];
    $query1="SELECT * FROM prestasi_user WHERE iUserNomer = '$useridentifikasi' AND vcUserStatus='$useridentifikasi1'";
    $result1=mysqli_query($connect, $query1);

    while($row=mysqli_fetch_array($result1)) {
      $output .='
<center><h2>User Login</h2></center><ul><li>UserName<br><input type="text"id="id"name="UserName"value="'.$row["vcUserName"].'"readonly></li><li>NISN<br><input type="password"id="id"name="UserPassword"value="'.$row["vcUserPassword"].'"readonly></li><ul>';

    }
  }

  $output .=" ";
  $output1 .=" ";
  echo $output;
  echo $output1;
}

if(isset($_POST["UpdateDataSiswaId"])) {
  $connect=mysqli_connect("localhost", "root", "", "prestasi");
  $query="SELECT * FROM prestasi_Biodata WHERE iBiodataId = '".$_POST["UpdateDataSiswaId"]."'";
  $result=mysqli_query($connect, $query);

  while($row=mysqli_fetch_array($result)) {
    $tanggal=$row["dtTanggalLahir"];
    list($part1, $part2)=explode(',', $row["vcAlamat"]);

    echo "<form method='POST' action='PHP/proses.php' enctype='multipart/form-data'>";
    echo "<ul>";
    echo "<li>";
    echo "ID<br>";
    echo "<input type='text' id='id' name='iBiodataId' value='".$row["iBiodataId"]."' readonly>";
    echo "</li>";
    echo "<li>";
    echo "NISN<br>";
    echo "<input type='text' id='id' name='TBiNomerInduk' value='".$row["iNomerInduk"]."' readonly>";
    echo "</li>";
    echo "<li>";
    echo "Biodata Nama<br>";
    echo "<input type='text' id='id' name='TBBiodataNama' value='".$row["vcBiodataNama"]."' required>";
    echo "</li>";
    echo "<li>";
    echo "Agama<br>";
    echo "<select name='TBAgama'>";
    echo "<option value='".$row["vcAgama"]."' selected='selected'>".$row["vcAgama"]."</option>";
    echo "<option value='buddha'>buddha</option>";
    echo "<option value='hindu'>hindu</option>";
    echo "<option value='islam'>islam</option>";
    echo "<option value='katolik'>katolik</option>";
    echo "<option value='kristen protestan'>kristen protestan</option>";
    echo "<option value='kong hu cu'>kong hu cu</option>";
    echo "</select>";
    echo "</li>";
    echo "<li>";
    echo "Tempat Tanggal Lahir<br>";
    echo "<input type='text' id='tabelkecil' name='TBTempatLahir' value='".$row["vcTempatLahir"]."'>";
    echo "<input type='date' id='tabelbesar' name='TBTanggalLahir' value='".$tanggal."'>";
    echo "</li>";
    echo "<li>";
    echo "Alamat<br>";
    echo "<select name='TBDaerah' id='tabelkecil'>";
    echo "<option value='".$part1."' selected='selected'>".$part1."</option>";
    echo "<option value='Bekasi'>Bekasi</option>";
    echo "<option value='Depok'>Depok</option>";
    echo "<option value='Jakarta'>Jakarta</option>";
    echo "<option value='Tangerang'>Tangerang</option>";
    echo "</select>";
    echo "<input type='text' id='tabelbesar' name='TBAlamat' placeholder='Masukkan alamat anda:' value='".$part2."'>";
    echo "</li>";
    echo "<li>";
    echo "No HP<br>";
    echo "<input type='text' id='id' name='TBNoHP' value='".$row["vcNomerHP"]."'>";
    echo "</li>";
    echo "<li>";
    echo "Email<br>";
    echo "<input type='text' id='tahunajar' name='TBEmail' value='".$row["vcEmail"]."'>";
    echo "</li>";
    echo "<li>";
    echo "Pendidikan Terakhir<br>";
    echo "<input type='text' id='' name='TBPendidikanTerakhir' value='".$row["vcInstansiPendidikanTerakhir"]."'>";
    echo "</li>";
    echo "<li>";
    echo "Kelas<br>";
    echo "<select name='TBKelasBiodata'>";
    echo "<option value='' ></option>";
    echo "<option value='".$row["vcBiodataKelas"]."' selected='selected'>".$row["vcBiodataKelas"]."</option>";
    $dropdownfetch="SELECT * FROM prestasi_kelas";
    $dropdowndata=$conn->query($dropdownfetch);

    while($row=$dropdowndata->fetch_assoc()) {
      echo "<option value=".$row['vcTahunAjar']."-".$row['vcNamaJurusan']."-".$row['vcTingkat']."-".$row['vcKelas'].">".$row['vcTahunAjar']."-".$row['vcNamaJurusan']."-".$row['vcTingkat']."-".$row['vcKelas']."</option>";
    }

    echo "</select>";
    echo "</li>";
    echo "<li>";
    echo "Photo Profile<br>";
    echo "<input type='file' name='FileIMG' onchange='readURL(this);' />";
    echo "<br><center>";
    echo "<img id='imgpriview' src='#' alt='your image'  /></center>";
    echo "</li>";
    echo "</ul>";
    echo "<input type='submit' name='FormEditDataSiswa'>";
    echo "</form>";
  }

}

if(isset($_POST["UpdateUserId"])) {
  $output='';
  // echo $_POST["UpdateUserId"];
  // echo $_POST["urldata"];
  $connect=mysqli_connect("localhost", "root", "", "prestasi");
  $query="SELECT * FROM prestasi_user WHERE iUserNomer = '".$_POST["UpdateUserId"]."'";
  $result=mysqli_query($connect, $query);

  while($row=mysqli_fetch_array($result)) {
    $output .='  
<form method="POST"action="PHP/proses.php"><ul><input type="text"id="id"name="URLDATA"value="'.$_POST["urldata"].'"hidden><li>User Id<br><input type="text"id="id"name="TBUserId"value="'.$row["iUserNomer"].'"readonly></li><li>User Name<br><input type="text"id="id"name="TBUserName"value="'.$row["vcUserName"].'"required></li><li>Password<br><input type="text"id="TBPassword"name="TBPassword"value="'.$row["vcUserPassword"].'"required></li></ul><input type="submit"name="FormEditUser"></form>';  

  }

  $output .=" ";
  echo $output;
}

if(isset($_POST["DeleteDataSiswaId"])) {

  $output='';
  $output1='';
  $connect=mysqli_connect("localhost", "root", "", "prestasi");
  $query="SELECT * FROM prestasi_biodata WHERE iBiodataId = '".$_POST["DeleteDataSiswaId"]."'";
  $result=mysqli_query($connect, $query);

  while($row=mysqli_fetch_array($result)) {

    $output .='  
<form method="POST"action="PHP/proses.php"><ul><li>ID<br><input type="text"id="id"name="iBiodataId"value="'.$row["iBiodataId"].'"readonly></li><li>NISN<br><input type="text"id="id"name="TBiNomerInduk"value="'.$row["iNomerInduk"].'"readonly></li><li>Biodata Nama<br><input type="text"id="id"name="TBBiodataNama"value="'.$row["vcBiodataNama"].'"readonly></li><li>Agama<br><input type="text"id="id"name="TBAgama"value="'.$row["vcAgama"].'"readonly></li><li>Tempat Tanggal Lahir<br><input type="text"id="id"name="TBTempatTanggalLahir"value="'.$row["vcTempatLahir"].",
    ".$row["dtTanggalLahir"].'"readonly></li><li>Alamat<br><input type="text"id="id"name="TBAlamat"value="'.$row["vcAlamat"].'"readonly></li><li>No HP<br><input type="text"id="id"name="TBNoHP"value="'.$row["vcNomerHP"].'"readonly></li><li>Email<br><input type="text"id="tahunajar"name="TBEmail"value="'.$row["vcEmail"].'"readonly></li><li>Pendidikan Terakhir<br><input type="text"id=""name="TBPendidikanTerakhir"value="'.$row["vcPendidikanTerakhir"].",
    ".$row["vcInstansiPendidikanTerakhir"].'"readonly></li><li>Kelas<br><input type="text"id=""name="TBKelas"value="'.$row["vcBiodataKelas"].'"readonly></li><li>Point<br><input type="text"id=""name="TBPoint"value="'.$row["iPoint"].'"readonly></li></ul><input type="submit"name="FormHapusDataSiswa"value="Hapus"></form>';

  }


  $output .=" ";
  echo $output;
}

// data guru
if(isset($_POST["VieweDataGuruId"])) {
  $output='';
  $output1='';
  $connect=mysqli_connect("localhost", "root", "", "prestasi");
  $query="SELECT * FROM prestasi_biodata WHERE iBiodataId = '".$_POST["VieweDataGuruId"]."'";
  $result=mysqli_query($connect, $query);

  while($row=mysqli_fetch_array($result)) {
    if(empty($row['blProfilePic'])) {

      $row['blProfilePic']="IMG&LOGO/Logo SMKN 26 Jakarta.png";

    }

    else {
      $row['blProfilePic']="data:image/jpeg;base64,".base64_encode($row['blProfilePic'])."";
    }

    $output .='  
<form method="POST"action="#"><ul><li>ID<br><input type="text"id="id"name="iBiodataId"value="'.$row["iBiodataId"].'"readonly></li><li>NIS<br><input type="text"id="id"name="TBiNomerInduk"value="'.$row["iNomerInduk"].'"readonly></li><li>Biodata Nama<br><input type="text"id="id"name="TBBiodataNama"value="'.$row["vcBiodataNama"].'"readonly></li><li>Agama<br><input type="text"id="id"name="TBAgama"value="'.$row["vcAgama"].'"readonly></li><li>Tempat Tanggal Lahir<br><input type="text"id="id"name="TBTempatTanggalLahir"value="'.$row["vcTempatLahir"].",
    ".$row["dtTanggalLahir"].'"readonly></li><li>Alamat<br><input type="text"id="id"name="TBAlamat"value="'.$row["vcAlamat"].'"readonly></li><li>No HP<br><input type="text"id="id"name="TBNoHP"value="'.$row["vcNomerHP"].'"readonly></li><li>Email<br><input type="text"id="tahunajar"name="TBEmail"value="'.$row["vcEmail"].'"readonly></li><li>Pendidikan Terakhir<br><input type="text"id=""name="TBPendidikanTerakhir"value="'.$row["vcPendidikanTerakhir"].",
    ".$row["vcInstansiPendidikanTerakhir"].'"readonly></li><li>Kelas<br><input type="text"id=""name="TBKelas"value="'.$row["vcBiodataKelas"].'"readonly></li><li>Profile Picture<br><center><img src="'.$row['blProfilePic'].'"/></center></li></ul></form>';  
$useridentifikasi=$row["iNomerInduk"];
    $useridentifikasi1=$row["vcStatus"];
    $query1="SELECT * FROM prestasi_user WHERE iUserNomer = '$useridentifikasi' AND vcUserStatus='$useridentifikasi1'";
    $result1=mysqli_query($connect, $query1);

    while($row=mysqli_fetch_array($result1)) {
      $output .='
<center><h2>User Login</h2></center><ul><li>UserName<br><input type="text"id="id"name="UserName"value="'.$row["vcUserName"].'"readonly></li><li>NISN<br><input type="password"id="id"name="UserPassword"value="'.$row["vcUserPassword"].'"readonly></li><ul>';

    }
  }

  $output .=" ";
  $output1 .=" ";
  echo $output;
  echo $output1;
}

if(isset($_POST["UpdateDataGuruId"])) {
  $connect=mysqli_connect("localhost", "root", "", "prestasi");
  $query="SELECT * FROM prestasi_Biodata WHERE iBiodataId = '".$_POST["UpdateDataGuruId"]."'";
  $result=mysqli_query($connect, $query);

  while($row=mysqli_fetch_array($result)) {
    $tanggal=$row["dtTanggalLahir"];
    list($part1, $part2)=explode(',', $row["vcAlamat"]);

    echo "<form method='POST' action='PHP/proses.php' enctype='multipart/form-data'>";
    echo "<ul>";
    echo "<li>";
    echo "ID<br>";
    echo "<input type='text' id='id' name='iBiodataId' value='".$row["iBiodataId"]."' readonly>";
    echo "</li>";
    echo "<li>";
    echo "NIS<br>";
    echo "<input type='text' id='id' name='TBiNomerInduk' value='".$row["iNomerInduk"]."' readonly>";
    echo "</li>";
    echo "<li>";
    echo "Biodata Nama<br>";
    echo "<input type='text' id='id' name='TBBiodataNama' value='".$row["vcBiodataNama"]."' required>";
    echo "</li>";
    echo "<li>";
    echo "Agama<br>";
    echo "<select name='TBAgama'>";
    echo "<option value='".$row["vcAgama"]."' selected='selected'>".$row["vcAgama"]."</option>";
    echo "<option value='buddha'>buddha</option>";
    echo "<option value='hindu'>hindu</option>";
    echo "<option value='islam'>islam</option>";
    echo "<option value='katolik'>katolik</option>";
    echo "<option value='kristen protestan'>kristen protestan</option>";
    echo "<option value='kong hu cu'>kong hu cu</option>";
    echo "</select>";
    echo "</li>";
    echo "<li>";
    echo "Tempat Tanggal Lahir<br>";
    echo "<input type='text' id='tabelkecil' name='TBTempatLahir' value='".$row["vcTempatLahir"]."'>";
    echo "<input type='date' id='tabelbesar' name='TBTanggalLahir' value='".$tanggal."'>";
    echo "</li>";
    echo "<li>";
    echo "Alamat<br>";
    echo "<select name='TBDaerah' id='tabelkecil'>";
    echo "<option value='".$part1."' selected='selected'>".$part1."</option>";
    echo "<option value='Bekasi'>Bekasi</option>";
    echo "<option value='Depok'>Depok</option>";
    echo "<option value='Jakarta'>Jakarta</option>";
    echo "<option value='Tangerang'>Tangerang</option>";
    echo "</select>";
    echo "<input type='text' id='tabelbesar' name='TBAlamat' placeholder='Masukkan alamat anda:' value='".$part2."'>";
    echo "</li>";
    echo "<li>";
    echo "No HP<br>";
    echo "<input type='text' id='id' name='TBNoHP' value='".$row["vcNomerHP"]."'>";
    echo "</li>";
    echo "<li>";
    echo "Email<br>";
    echo "<input type='text' id='tahunajar' name='TBEmail' value='".$row["vcEmail"]."'>";
    echo "</li>";
    echo "<li>";
    echo "Pendidikan Terakhir<br>";
    echo "<select name='TBPendidikanTerakhir'>";
    echo "<option value='".$row["vcPendidikanTerakhir"]."' selected='selected'>".$row["vcPendidikanTerakhir"]."</option>";
    echo "<option value='SD'>SD</option>";
    echo "<option value='SMP'>SMP</option>";
    echo "<option value='SMA'>SMA</option>";
    echo "<option value='S1'>S1</option>";
    echo "<option value='S2'>S2</option>";
    echo "<option value='S3'>S3</option>";
    echo "</select>";
    echo "</li>";
    echo "<li>";
    echo "Instansi Pendidikan Terakhir<br>";
    echo "<input type='text' id='' name='TBInstansiPendidikanTerakhir' value='".$row["vcInstansiPendidikanTerakhir"]."'>";
    echo "</li>";
    echo "<li>";
    echo "Photo Profile<br>";
    echo "<input type='file' name='FileIMG' onchange='readURL(this);' />";
    echo "<br><center>";
    echo "<img id='imgpriview' src='#' alt='your image'  /></center>";
    echo "</li>";
    echo "</ul>";
    echo "<input type='submit' name='FormEditDataGuru'>";
    echo "</form>";
  }
}

if(isset($_POST["DeleteDataGuruId"])) {

  $output='';
  $output1='';
  $connect=mysqli_connect("localhost", "root", "", "prestasi");
  $query="SELECT * FROM prestasi_biodata WHERE iBiodataId = '".$_POST["DeleteDataGuruId"]."'";
  $result=mysqli_query($connect, $query);

  while($row=mysqli_fetch_array($result)) {

    $output .='  
<form method="POST"action="PHP/proses.php"><ul><li>ID<br><input type="text"id="id"name="iBiodataId"value="'.$row["iBiodataId"].'"readonly></li><li>NISN<br><input type="text"id="id"name="TBiNomerInduk"value="'.$row["iNomerInduk"].'"readonly></li><li>Biodata Nama<br><input type="text"id="id"name="TBBiodataNama"value="'.$row["vcBiodataNama"].'"readonly></li><li>Agama<br><input type="text"id="id"name="TBAgama"value="'.$row["vcAgama"].'"readonly></li><li>Tempat Tanggal Lahir<br><input type="text"id="id"name="TBTempatTanggalLahir"value="'.$row["vcTempatLahir"].",
    ".$row["dtTanggalLahir"].'"readonly></li><li>Alamat<br><input type="text"id="id"name="TBAlamat"value="'.$row["vcAlamat"].'"readonly></li><li>No HP<br><input type="text"id="id"name="TBNoHP"value="'.$row["vcNomerHP"].'"readonly></li><li>Email<br><input type="text"id="tahunajar"name="TBEmail"value="'.$row["vcEmail"].'"readonly></li><li>Pendidikan Terakhir<br><input type="text"id=""name="TBPendidikanTerakhir"value="'.$row["vcPendidikanTerakhir"].",
    ".$row["vcInstansiPendidikanTerakhir"].'"readonly></li></ul><input type="submit"name="FormHapusDataGuru"value="Hapus"></form>';

  }


  $output .=" ";
  echo $output;
}

// data admin
if(isset($_POST["VieweDataAdminId"])) {
  $output='';
  $output1='';
  $connect=mysqli_connect("localhost", "root", "", "prestasi");
  $query="SELECT * FROM prestasi_biodata WHERE iBiodataId = '".$_POST["VieweDataAdminId"]."'";
  $result=mysqli_query($connect, $query);

  while($row=mysqli_fetch_array($result)) {
    if(empty($row['blProfilePic'])) {

      $row['blProfilePic']="IMG&LOGO/Logo SMKN 26 Jakarta.png";

    }

    else {
      $row['blProfilePic']="data:image/jpeg;base64,".base64_encode($row['blProfilePic'])."";
    }

    $output .='  
<form method="POST"action="#"><ul><li>ID<br><input type="text"id="id"name="iBiodataId"value="'.$row["iBiodataId"].'"readonly></li><li>NIS<br><input type="text"id="id"name="TBiNomerInduk"value="'.$row["iNomerInduk"].'"readonly></li><li>Biodata Nama<br><input type="text"id="id"name="TBBiodataNama"value="'.$row["vcBiodataNama"].'"readonly></li><li>Agama<br><input type="text"id="id"name="TBAgama"value="'.$row["vcAgama"].'"readonly></li><li>Tempat Tanggal Lahir<br><input type="text"id="id"name="TBTempatTanggalLahir"value="'.$row["vcTempatLahir"].",
    ".$row["dtTanggalLahir"].'"readonly></li><li>Alamat<br><input type="text"id="id"name="TBAlamat"value="'.$row["vcAlamat"].'"readonly></li><li>No HP<br><input type="text"id="id"name="TBNoHP"value="'.$row["vcNomerHP"].'"readonly></li><li>Email<br><input type="text"id="tahunajar"name="TBEmail"value="'.$row["vcEmail"].'"readonly></li><li>Pendidikan Terakhir<br><input type="text"id=""name="TBPendidikanTerakhir"value="'.$row["vcPendidikanTerakhir"].",
    ".$row["vcInstansiPendidikanTerakhir"].'"readonly></li><li>Kelas<br><input type="text"id=""name="TBKelas"value="'.$row["vcBiodataKelas"].'"readonly></li><li>Profile Picture<br><center><img src="'.$row['blProfilePic'].'"/></center></li></ul></form>';  
$useridentifikasi=$row["iNomerInduk"];
    $useridentifikasi1=$row["vcStatus"];
    $query1="SELECT * FROM prestasi_user WHERE iUserNomer = '$useridentifikasi' AND vcUserStatus='$useridentifikasi1'";
    $result1=mysqli_query($connect, $query1);

    while($row=mysqli_fetch_array($result1)) {
      $output .='
<center><h2>User Login</h2></center><ul><li>UserName<br><input type="text"id="id"name="UserName"value="'.$row["vcUserName"].'"readonly></li><li>NISN<br><input type="password"id="id"name="UserPassword"value="'.$row["vcUserPassword"].'"readonly></li><ul>';

    }
  }

  $output .=" ";
  $output1 .=" ";
  echo $output;
  echo $output1;
}

if(isset($_POST["UpdateDataAdminId"])) {
  $connect=mysqli_connect("localhost", "root", "", "prestasi");
  $query="SELECT * FROM prestasi_Biodata WHERE iBiodataId = '".$_POST["UpdateDataAdminId"]."'";
  $result=mysqli_query($connect, $query);

  while($row=mysqli_fetch_array($result)) {
    $tanggal=$row["dtTanggalLahir"];
    list($part1, $part2)=explode(',', $row["vcAlamat"]);

    echo "<form method='POST' action='PHP/proses.php' enctype='multipart/form-data'>";
    echo "<ul>";
    echo "<li>";
    echo "ID<br>";
    echo "<input type='text' id='id' name='iBiodataId' value='".$row["iBiodataId"]."' readonly>";
    echo "</li>";
    echo "<li>";
    echo "NIS<br>";
    echo "<input type='text' id='id' name='TBiNomerInduk' value='".$row["iNomerInduk"]."' readonly>";
    echo "</li>";
    echo "<li>";
    echo "Biodata Nama<br>";
    echo "<input type='text' id='id' name='TBBiodataNama' value='".$row["vcBiodataNama"]."' required>";
    echo "</li>";
    echo "<li>";
    echo "Agama<br>";
    echo "<select name='TBAgama'>";
    echo "<option value='".$row["vcAgama"]."' selected='selected'>".$row["vcAgama"]."</option>";
    echo "<option value='buddha'>buddha</option>";
    echo "<option value='hindu'>hindu</option>";
    echo "<option value='islam'>islam</option>";
    echo "<option value='katolik'>katolik</option>";
    echo "<option value='kristen protestan'>kristen protestan</option>";
    echo "<option value='kong hu cu'>kong hu cu</option>";
    echo "</select>";
    echo "</li>";
    echo "<li>";
    echo "Tempat Tanggal Lahir<br>";
    echo "<input type='text' id='tabelkecil' name='TBTempatLahir' value='".$row["vcTempatLahir"]."'>";
    echo "<input type='date' id='tabelbesar' name='TBTanggalLahir' value='".$tanggal."'>";
    echo "</li>";
    echo "<li>";
    echo "Alamat<br>";
    echo "<select name='TBDaerah' id='tabelkecil'>";
    echo "<option value='".$part1."' selected='selected'>".$part1."</option>";
    echo "<option value='Bekasi'>Bekasi</option>";
    echo "<option value='Depok'>Depok</option>";
    echo "<option value='Jakarta'>Jakarta</option>";
    echo "<option value='Tangerang'>Tangerang</option>";
    echo "</select>";
    echo "<input type='text' id='tabelbesar' name='TBAlamat' placeholder='Masukkan alamat anda:' value='".$part2."'>";
    echo "</li>";
    echo "<li>";
    echo "No HP<br>";
    echo "<input type='text' id='id' name='TBNoHP' value='".$row["vcNomerHP"]."'>";
    echo "</li>";
    echo "<li>";
    echo "Email<br>";
    echo "<input type='text' id='tahunajar' name='TBEmail' value='".$row["vcEmail"]."'>";
    echo "</li>";
    echo "<li>";
    echo "Pendidikan Terakhir<br>";
    echo "<select name='TBPendidikanTerakhir'>";
    echo "<option value='".$row["vcPendidikanTerakhir"]."' selected='selected'>".$row["vcPendidikanTerakhir"]."</option>";
    echo "<option value='SD'>SD</option>";
    echo "<option value='SMP'>SMP</option>";
    echo "<option value='SMA'>SMA</option>";
    echo "<option value='S1'>S1</option>";
    echo "<option value='S2'>S2</option>";
    echo "<option value='S3'>S3</option>";
    echo "</select>";
    echo "</li>";
    echo "<li>";
    echo "Instansi Pendidikan Terakhir<br>";
    echo "<input type='text' id='' name='TBInstansiPendidikanTerakhir' value='".$row["vcInstansiPendidikanTerakhir"]."'>";
    echo "</li>";
    echo "<li>";
    echo "Photo Profile<br>";
    echo "<input type='file' name='FileIMG' onchange='readURL(this);' />";
    echo "<br><center>";
    echo "<img id='imgpriview' src='#' alt='your image'  /></center>";
    echo "</li>";
    echo "</ul>";
    echo "<input type='submit' name='FormEditDataAdmin'>";
    echo "</form>";
  }
}

if(isset($_POST["DeleteDataAdminId"])) {

  $output='';
  $output1='';
  $connect=mysqli_connect("localhost", "root", "", "prestasi");
  $query="SELECT * FROM prestasi_biodata WHERE iBiodataId = '".$_POST["DeleteDataAdminId"]."'";
  $result=mysqli_query($connect, $query);

  while($row=mysqli_fetch_array($result)) {

    $output .='  
<form method="POST"action="PHP/proses.php"><ul><li>ID<br><input type="text"id="id"name="iBiodataId"value="'.$row["iBiodataId"].'"readonly></li><li>NISN<br><input type="text"id="id"name="TBiNomerInduk"value="'.$row["iNomerInduk"].'"readonly></li><li>Biodata Nama<br><input type="text"id="id"name="TBBiodataNama"value="'.$row["vcBiodataNama"].'"readonly></li><li>Agama<br><input type="text"id="id"name="TBAgama"value="'.$row["vcAgama"].'"readonly></li><li>Tempat Tanggal Lahir<br><input type="text"id="id"name="TBTempatTanggalLahir"value="'.$row["vcTempatLahir"].",
    ".$row["dtTanggalLahir"].'"readonly></li><li>Alamat<br><input type="text"id="id"name="TBAlamat"value="'.$row["vcAlamat"].'"readonly></li><li>No HP<br><input type="text"id="id"name="TBNoHP"value="'.$row["vcNomerHP"].'"readonly></li><li>Email<br><input type="text"id="tahunajar"name="TBEmail"value="'.$row["vcEmail"].'"readonly></li><li>Pendidikan Terakhir<br><input type="text"id=""name="TBPendidikanTerakhir"value="'.$row["vcPendidikanTerakhir"].",
    ".$row["vcInstansiPendidikanTerakhir"].'"readonly></li></ul><input type="submit"name="FormHapusDataAdmin"value="Hapus"></form>';

  }


  $output .=" ";
  echo $output;
}

// biodata

if(isset($_POST["UpdateBiodataId"])) {
  $connect=mysqli_connect("localhost", "root", "", "prestasi");
  //  echo $_POST["Statusdata"];
  $query="SELECT * FROM prestasi_Biodata WHERE iBiodataId = '".$_POST["UpdateBiodataId"]."'";
  $result=mysqli_query($connect, $query);

  while($row=mysqli_fetch_array($result)) {
    $tanggal=$row["dtTanggalLahir"];
    list($part1, $part2)=explode(',', $row["vcAlamat"]);

    echo "<form method='POST' action='PHP/proses.php' enctype='multipart/form-data'>";
    echo "<ul>";
    echo "<li>";
    echo "ID<br>";
    echo "<input type='text' id='id' name='iBiodataId' value='".$row["iBiodataId"]."' readonly>";
    echo "</li>";
    echo "<li>";
    echo "NIS<br>";
    echo "<input type='text' id='id' name='TBiNomerInduk' value='".$row["iNomerInduk"]."' readonly>";
    echo "</li>";
    echo "<li>";
    echo "Biodata Nama<br>";
    echo "<input type='text' id='id' name='TBBiodataNama' value='".$row["vcBiodataNama"]."' required>";
    echo "</li>";
    echo "<li>";
    echo "Agama<br>";
    echo "<select name='TBAgama'>";
    echo "<option value='".$row["vcAgama"]."' selected='selected'>".$row["vcAgama"]."</option>";
    echo "<option value='buddha'>buddha</option>";
    echo "<option value='hindu'>hindu</option>";
    echo "<option value='islam'>islam</option>";
    echo "<option value='katolik'>katolik</option>";
    echo "<option value='kristen protestan'>kristen protestan</option>";
    echo "<option value='kong hu cu'>kong hu cu</option>";
    echo "</select>";
    echo "</li>";
    echo "<li>";
    echo "Tempat Tanggal Lahir<br>";
    echo "<input type='text' id='tabelkecil' name='TBTempatLahir' value='".$row["vcTempatLahir"]."'>";
    echo "<input type='date' id='tabelbesar' name='TBTanggalLahir' value='".$tanggal."'>";
    echo "</li>";
    echo "<li>";
    echo "Alamat<br>";
    echo "<select name='TBDaerah' id='tabelkecil'>";
    echo "<option value='".$part1."' selected='selected'>".$part1."</option>";
    echo "<option value='Bekasi'>Bekasi</option>";
    echo "<option value='Depok'>Depok</option>";
    echo "<option value='Jakarta'>Jakarta</option>";
    echo "<option value='Tangerang'>Tangerang</option>";
    echo "</select>";
    echo "<input type='text' id='tabelbesar' name='TBAlamat' placeholder='Masukkan alamat anda:' value='".$part2."'>";
    echo "</li>";
    echo "<li>";
    echo "No HP<br>";
    echo "<input type='text' id='id' name='TBNoHP' value='".$row["vcNomerHP"]."'>";
    echo "</li>";
    echo "<li>";
    echo "Email<br>";
    echo "<input type='text' id='tahunajar' name='TBEmail' value='".$row["vcEmail"]."'>";
    echo "</li>";

    if($_POST["Statusdata"]=="siswa") {
      echo "<li>";
      echo "Pendidikan Terakhir<br>";
      echo "<input type='text' id='tahunajar' name='TBPendidikanTerakhir' value='".$row["vcPendidikanTerakhir"]."' readonly>";
      echo "</li>";
      echo "<li>";
      echo "Instansi Pendidikan Terakhir<br>";
      echo "<input type='text' id='' name='TBInstansiPendidikanTerakhir' value='".$row["vcInstansiPendidikanTerakhir"]."'>";
      echo "</li>";
      echo "<li>";
      echo "Kelas<br>";
      echo "<select name='TBKelasBiodata'>";
      echo "<option value='' ></option>";
      echo "<option value='".$row["vcBiodataKelas"]."' selected='selected'>".$row["vcBiodataKelas"]."</option>";
      $dropdownfetch="SELECT * FROM prestasi_kelas";
      $dropdowndata=$conn->query($dropdownfetch);

      while($row=$dropdowndata->fetch_assoc()) {
        echo "<option value=".$row['vcTahunAjar']."-".$row['vcNamaJurusan']."-".$row['vcTingkat']."-".$row['vcKelas'].">".$row['vcTahunAjar']."-".$row['vcNamaJurusan']."-".$row['vcTingkat']."-".$row['vcKelas']."</option>";
      }

      echo "</select>";
      echo "</li>";
    }

    else {
      echo "<li>";
      echo "Pendidikan Terakhir<br>";
      echo "<select name='TBPendidikanTerakhir' id='readonlysiswa'>";
      echo "<option value='".$row["vcPendidikanTerakhir"]."' selected='selected'>".$row["vcPendidikanTerakhir"]."</option>";
      echo "<option value='SD'>SD</option>";
      echo "<option value='SMP'>SMP</option>";
      echo "<option value='SMA'>SMA</option>";
      echo "<option value='S1'>S1</option>";
      echo "<option value='S2'>S2</option>";
      echo "<option value='S3'>S3</option>";
      echo "</select>";
      echo "</li>";
      echo "<li>";
      echo "Instansi Pendidikan Terakhir<br>";
      echo "<input type='text' id='' name='TBInstansiPendidikanTerakhir' value='".$row["vcInstansiPendidikanTerakhir"]."'>";
      echo "</li>";
      echo "<li>";
      echo "Kelas<br>";
      echo "<input type='text' id='' name='TBKelasBiodata' value='".$row["vcBiodataKelas"]."'readonly>";
      echo "</li>";

    }

    echo "<li>";
    echo "Photo Profile<br>";
    echo "<input type='file' name='FileIMG' onchange='readURL(this);' />";
    echo "<br><center>";
    echo "<img id='imgpriview' src='#' alt='your image'  /></center>";
    echo "</li>";
    echo "</ul>";
    echo "<input type='submit' name='FormEditBiodata'>";
    echo "</form>";
  }
}

// point
if(isset($_POST["PointAjukanId"])) {
  $connect=mysqli_connect("localhost", "root", "", "prestasi");
  //  echo $_POST["Statusdata"];
  // echo $_POST["UserId"];
  $query="SELECT * FROM prestasi_Biodata WHERE iBiodataId = '".$_POST["PointAjukanId"]."'";
  $query1="SELECT * FROM prestasi_Biodata WHERE iBiodataId = '".$_POST["UserId"]."'";
  $query2="SELECT * FROM prestasi_pelanggaran";
  $result=mysqli_query($connect, $query);
  $result1=mysqli_query($connect, $query1);
  $result2=mysqli_query($connect, $query2);
  date_default_timezone_set("Etc/GMT-7");
  $date=date("Y-m-d,H:i:s");
  //  echo $date;
  echo "<form method='POST' action='PHP/proses.php' >";



  while($row=mysqli_fetch_array($result)) {
    if(empty($row['blProfilePic'])) {

      $row['blProfilePic']="IMG&LOGO/Logo SMKN 26 Jakarta.png";

    }

    else {
      $row['blProfilePic']="data:image/jpeg;base64,".base64_encode($row['blProfilePic'])."";
    }

    echo "<h3>Biodata</h3><hr>";
    echo "<div class='modalkanan'>  
<img src='".$row['blProfilePic']."'/></div>";
echo "<div class='modalkiri'><ul>";
    echo "<li>";
    echo "ID<br>";
    echo "<input type='text' id='id' name='TBDitujuID' value='".$row["iBiodataId"]."' readonly>";
    echo "</li>";
    echo "<li>";
    echo "NISN<br>";
    echo "<input type='text' id='id' name='TBDitujuNI' value='".$row["iNomerInduk"]."' readonly>";
    echo "</li>";
    echo "<li>";
    echo "Biodata Nama<br>";
    echo "<input type='text' id='id' name='TBDitujuName' value='".$row["vcBiodataNama"]."' readonly>";
    echo "</li>";
    echo "<li>";
    echo "Kelas<br>";
    echo "<input type='text' id='id' name='TBDitujuKelas' value='".$row["vcBiodataKelas"]."' readonly>";
    echo "<input type='text' id='id' name='TBDituPoint' value='".$row["iPoint"]."' readonly>";
    echo "</li>";
    echo "</div>";
  }

  echo "<h3>Jenis Pelanggaran</h3><hr>";

  while($row=mysqli_fetch_array($result1)) {
    echo "<input type='text' id='id' name='TBPengajuId' value='".$row["iBiodataId"]."' hidden>";
    echo "<input type='text' id='id' name='TBPengajuNI' value='".$row["iNomerInduk"]."' hidden>";
    echo "<input type='text' id='id' name='TBPengajuNama' value='".$row["vcBiodataNama"]."' hidden>";
    echo "<input type='text' id='id' name='TBPengajuDate' value='".$date."' hidden>";
  }

  //  echo "<li>";
  echo "Pelanggaran Yang dilakukan<br>";
  echo "<select name='TBPelanggaran' required>";
  echo "<option value='' ></option>";

  while($row=mysqli_fetch_array($result2)) {
    echo "<option value='".$row["iPelanggaranId"].",".$row["vcNamaPelanggaran"].",".$row["vcJenisiPointPelanggaran"].",".$row["iPointPelanggaran"]."' >(".$row["vcJenisiPointPelanggaran"].")-".$row["vcNamaPelanggaran"]."- (".$row["iPointPelanggaran"].")</option>";
  }

  echo "</select><br>";
  // echo "</li>";
  // echo "<li>";
  echo "Keterangan<br>";
  echo "<input type='text' id='id' name='TBKeterangan' value=''><br>";
  // echo "</li>";
  // echo "<li>";
  echo "Lampiran<br><br>";
  echo "<input type='file' name='FileIMG' onchange='readURL(this);' />";
  echo "<br><center>";
  echo "<img id='imgpriview' src='#' alt='your image'  /></center>";
  // echo "</li>";
  echo "<ul>";
  echo "<input type='submit' name='FormPointAjukan'>";
  echo "</form>";
}

if(isset($_POST["PointViewId"])) {
  $connect=mysqli_connect("localhost", "root", "", "prestasi");
  //  echo $_POST["Statusdata"];
  // echo $_POST["UserId"];
  $query="SELECT * FROM prestasi_point WHERE iPointId = '".$_POST["PointViewId"]."'";

  $query2="SELECT * FROM prestasi_pelanggaran";
  $result=mysqli_query($connect, $query);

  $result2=mysqli_query($connect, $query2);

  while($row=mysqli_fetch_array($result)) {
    if($row['vcStatus']=="ACC") {
      echo "<h3 align='right'>Terkabulkan</h3><br>";
      echo "<h5 align='right'>Diterima Pada:".$row['dtDiterima']."</h5><br>";
    }

    else {
      echo "<h3 align='right'>Menunggu Konfirmasi</h3>";
      echo "<h5 align='right'>Diajukan Pada:".$row['dtDiajukan']."</h5><br>";
    }

    $query1="SELECT * FROM prestasi_Biodata WHERE iBiodataId = '".$row['iDitujuPoint']."'";
    $result1=mysqli_query($connect, $query1);

    while($wor=mysqli_fetch_array($result1)) {
      if(empty($wor['blProfilePic'])) {

        $wor['blProfilePic']="IMG&LOGO/Logo SMKN 26 Jakarta.png";

      }

      else {
        $wor['blProfilePic']="data:image/jpeg;base64,".base64_encode($wor['blProfilePic'])."";
      }

      echo "<h3>Biodata</h3><hr>";
      echo "<div class='modalkanan'>  
<img src='".$wor['blProfilePic']."'/></div>";
echo "<div class='modalkiri'><ul>";
      echo "<li>";
      echo "ID<br>";
      echo "<input type='text' id='id' name='TBDitujuID' value='".$wor["iBiodataId"]."' readonly>";
      echo "</li>";
      echo "<li>";
      echo "NISN<br>";
      echo "<input type='text' id='id' name='TBDitujuNI' value='".$wor["iNomerInduk"]."' readonly>";
      echo "</li>";
      echo "<li>";
      echo "Biodata Nama<br>";
      echo "<input type='text' id='id' name='TBDitujuName' value='".$wor["vcBiodataNama"]."' readonly>";
      echo "</li>";
      echo "<li>";
      echo "Kelas<br>";
      echo "<input type='text' id='id' name='TBDitujuKelas' value='".$wor["vcBiodataKelas"]."' readonly>";
      echo "</li>";
      echo "</div>";
    }

    echo "<h3>Data Pelanggaran</h3><hr>";

    echo "Diajukan Pada: <br>";
    echo "<input type='text' id='id' name='TBKeterangan' value='".$row["dtDiajukan"]."' readonly><br>";
    echo "Diajukan Oleh: <br>";
    echo "<input type='text' id='id' name='TBKeterangan' value='".$row["iPengajuNI"]."-".$row["vcPengajuNama"]."' readonly><br>";
    echo "Jenis Pelanggaran: <br>";
    echo "<input type='text' id='id' name='TBKeterangan' value='".$row["vcJenisPelanggaran"]."' readonly><br>";
    echo "Detail Pelanggaran: <br>";
    echo "<input type='text' id='id' name='TBKeterangan' value='".$row["vcNamaPelanggaran"]."' readonly><br>";
    echo "Sangsi Pengurangan Sebanyak: <br>";
    echo "<input type='text' id='id' name='TBKeterangan' value='-".$row["iPenguranganPoint"]."point' readonly><br>";
    echo "Keterangan: <br>";
    echo "<input type='text' id='id' name='TBKeterangan' value='".$row["vcKeteragan"]."' readonly><br>";
    echo "Lampiran: <br>";
    echo "<center>";

    if(empty($row['blLampiran'])) {
      echo "tidak ada <br>";
    }

    else {
      echo "lampiran ada<br>";
      // $row['blLampiran']="data:image/jpeg;base64,".base64_encode($row['blLampiran'])."";
      // echo '<img src="data:image/jpeg;base64,'.base64_encode($row['blLampiran'] ).'" height="200" width="200" class="img-thumnail" />';
    }

    echo "</center>";

    echo "<br>Sisa Point: ";
    echo "<h4>".$row["iSisaPoint"]."</h4>";


  }
  
}
if(isset($_POST["PointAccId"])) {
  $connect=mysqli_connect("localhost", "root", "", "prestasi");
  //  echo $_POST["Statusdata"];
  // echo $_POST["UserId"];
  $query="SELECT * FROM prestasi_point WHERE iPointId = '".$_POST["PointAccId"]."'";

  $query2="SELECT * FROM prestasi_pelanggaran";
  $result=mysqli_query($connect, $query);
  $accetor = $_POST["UserId"];
  date_default_timezone_set("Etc/GMT-7");
  $date=date("Y-m-d,H:i:s");

  $result2=mysqli_query($connect, $query2);

  while($row=mysqli_fetch_array($result)) {
    if($row['vcStatus']=="ACC") {
      echo "<h3 align='right'>Terkabulkan</h3><br>";
      echo "<h5 align='right'>Diterima Pada:".$row['dtDiterima']."</h5><br>";
    }

    else {
      echo "<h3 align='right'>Menunggu Konfirmasi</h3>";
      echo "<h5 align='right'>Diajukan Pada:".$row['dtDiajukan']."</h5><br>";
    }

    $query1="SELECT * FROM prestasi_Biodata WHERE iBiodataId = '".$row['iDitujuPoint']."'";
    $result1=mysqli_query($connect, $query1);

    while($wor=mysqli_fetch_array($result1)) {
      if(empty($wor['blProfilePic'])) {

        $wor['blProfilePic']="IMG&LOGO/Logo SMKN 26 Jakarta.png";

      }

      else {
        $wor['blProfilePic']="data:image/jpeg;base64,".base64_encode($wor['blProfilePic'])."";
      }

      echo "<h3>Biodata</h3><hr>";
      echo "<div class='modalkanan'>  
<img src='".$wor['blProfilePic']."'/></div>";
echo "<div class='modalkiri'><ul>";
// echo "<form method='POST' action='PHP/proses.php'>";
      // echo "<input type='text' id='id' name='TBaccptor' value='".$accetor."' hidden>";
      // echo "<input type='text' id='id' name='time' value='".$date."' hidden>";
      // echo "<input type='text' id='id' name='id' value='".$row['iPointId']."' hidden>";
      // echo "<input type='text' id='id' name='nisn' value='".$wor["iNomerInduk"]."' hidden>";


      echo "<li>";
      echo "ID<br>";
      echo "<input type='text' id='id' name='TBDitujuID' value='".$wor["iBiodataId"]."' readonly>";
      echo "</li>";
      echo "<li>";
      echo "NISN<br>";
      echo "<input type='text' id='id' name='TBDitujuNI' value='".$wor["iNomerInduk"]."' readonly>";
      echo "</li>";
      echo "<li>";
      echo "Biodata Nama<br>";
      echo "<input type='text' id='id' name='TBDitujuName' value='".$wor["vcBiodataNama"]."' readonly>";
      echo "</li>";
      echo "<li>";
      echo "Kelas<br>";
      echo "<input type='text' id='id' name='TBDitujuKelas' value='".$wor["vcBiodataKelas"]."' readonly>";
      echo "</li>";
      echo "</div>";
echo  "<form method='POST' action='PHP/proses.php'>";
echo "<input type='text' id='id' name='nisn' value='".$wor["iNomerInduk"]."' hidden >";


    }

    echo "<h3>Data Pelanggaran</h3><hr>";

    echo "Diajukan Pada: <br>";
    echo "<input type='text' id='id' name='dtDiajukan' value='".$row["dtDiajukan"]."' readonly><br>";
    echo "Diajukan Oleh: <br>";
    echo "<input type='text' id='id' name='iPengajuNI' value='".$row["iPengajuNI"]."-".$row["vcPengajuNama"]."' readonly><br>";
    echo "Jenis Pelanggaran: <br>";
    echo "<input type='text' id='id' name='vcJenisPelanggaran' value='".$row["vcJenisPelanggaran"]."' readonly><br>";
    echo "Detail Pelanggaran: <br>";
    echo "<input type='text' id='id' name='vcNamaPelanggaran' value='".$row["vcNamaPelanggaran"]."' readonly><br>";
    echo "Sangsi Pengurangan Sebanyak: <br>";

    echo "<input type='text' id='id' name='iPenguranganPoint' value='-".$row["iPenguranganPoint"]."point' readonly><br>";
    echo "Keterangan: <br>";
    echo "<input type='text' id='id' name='vcKeteragan' value='".$row["vcKeteragan"]."' readonly><br>";
    echo "Lampiran: <br>";
    echo "<center>";

    if(empty($row['blLampiran'])) {
      echo "tidak ada <br>";
    }

    else {
      echo "lampiran ada<br>";
      // $row['blLampiran']="data:image/jpeg;base64,".base64_encode($row['blLampiran'])."";
      // echo '<img src="data:image/jpeg;base64,'.base64_encode($row['blLampiran'] ).'" height="200" width="200" class="img-thumnail" />';
    }

    echo "</center>";

    echo "<br>Sisa Point: ";
    echo "<h4>".$row["iSisaPoint"]."</h4>";

    echo "status<br>";
echo"<select name='status' required>";
    echo "<option value='".$row["vcStatus"]."' selected='selected'>".$row["vcStatus"]."</option>";
    echo"<option value='DLY'>Delay</option>
    <option value='ACC'>Accept</option>
    <option value='TLK'>Tolak</option>
</select>";
echo "<input type='text' id='id' name='TBaccptor' value='".$accetor."' hidden>";
echo "<input type='text' id='id' name='time' value='".$date."' hidden>";
echo "<input type='text' id='id' name='sisaa' value='".$row["iSisaPoint"]."' hidden>";
echo "<input type='text' id='id' name='id' value='".$row['iPointId']."' hidden>";

echo "<input type='submit' name='FormAccPoint'>";
echo "</form>";
  }
  
}
// PRESTASI
if(isset($_POST["PrestasiAjukanId"])) {
  $connect=mysqli_connect("localhost", "root", "", "prestasi");
  //  echo $_POST["Statusdata"];
  // echo $_POST["UserId"];
  $query="SELECT * FROM prestasi_Biodata WHERE iBiodataId = '".$_POST["PrestasiAjukanId"]."'";
  $query1="SELECT * FROM prestasi_Biodata WHERE iBiodataId = '".$_POST["UserId"]."'";
  $query2="SELECT * FROM prestasi_pelanggaran";
  $result=mysqli_query($connect, $query);
  $result1=mysqli_query($connect, $query1);
  $result2=mysqli_query($connect, $query2);
  date_default_timezone_set("Etc/GMT-7");
  $date=date("Y-m-d,H:i:s");
  //  echo $date;
  echo "<form method='POST' action='PHP/proses.php' >";



  while($row=mysqli_fetch_array($result)) {
    if(empty($row['blProfilePic'])) {

      $row['blProfilePic']="IMG&LOGO/Logo SMKN 26 Jakarta.png";

    }

    else {
      $row['blProfilePic']="data:image/jpeg;base64,".base64_encode($row['blProfilePic'])."";
    }

    echo "<h3>Biodata</h3><hr>";
    echo "<div class='modalkanan'>  
<img src='".$row['blProfilePic']."'/></div>";
echo "<div class='modalkiri'><ul>";
    echo "<li>";
    echo "ID<br>";
    echo "<input type='text' id='id' name='TBDitujuID' value='".$row["iBiodataId"]."' readonly>";
    echo "</li>";
    echo "<li>";
    echo "NISN<br>";
    echo "<input type='text' id='id' name='TBDitujuNI' value='".$row["iNomerInduk"]."' readonly>";
    echo "</li>";
    echo "<li>";
    echo "Biodata Nama<br>";
    echo "<input type='text' id='id' name='TBDitujuName' value='".$row["vcBiodataNama"]."' readonly>";
    echo "</li>";
    echo "<li>";
    echo "Kelas<br>";
    echo "<input type='text' id='id' name='TBDitujuKelas' value='".$row["vcBiodataKelas"]."' readonly>";
    echo "<input type='text' id='id' name='TBDituPrestasi' value='".$row["iPoint"]."' readonly>";
    echo "</li>";
    echo "</div>";
  }

  echo "<h3>Detail Prestasi</h3><hr>";

  while($row=mysqli_fetch_array($result1)) {
    echo "<input type='text' id='id' name='TBPengajuId' value='".$row["iBiodataId"]."' hidden>";
    echo "<input type='text' id='id' name='TBPengajuNI' value='".$row["iNomerInduk"]."' hidden>";
    echo "<input type='text' id='id' name='TBPengajuNama' value='".$row["vcBiodataNama"]."' hidden>";
    echo "<input type='text' id='id' name='TBPengajuDate' value='".$date."' hidden>";
  }

  //  echo "<li>";
  echo "Nama Prestasi<br>";
  echo "<input type='text' id='id' name='TBNamaPrestasi' value='' required><br>";
  echo "Lembaga yang Memberikan Prestasi<br>";
  echo "<input type='text' id='id' name='TBLembaga' value='' required><br>";
  echo "No Seri Sertifikat<br>";
  echo "<input type='text' id='id' name='TBNoSertif' value=''><br>";
  echo "Katagori Prestasi<br>";
  echo "<input type='text' id='id' name='TBkatagori' value=''required><br>";
  echo "Tingkat Prestasi<br>";
  echo "<select name='TBTingkatPrestasi' required>";
  echo "<option value='' ></option>";
  echo "<option value='remisi' >remisi</option>";
  echo "<option value='sekolah' >sekolah</option>";
  echo "<option value='kota' >kota</option>";
  echo "<option value='daerah' >daerah</option>";
  echo "<option value='nasional' >nasional</option>";
  echo "<option value='internasional' >internasional</option>";
  echo "</select><br>";
  // echo "</li>";
  // echo "<li>";
  echo "Keterangan<br>";
  echo "<input type='text' id='id' name='TBKeterangan' value=''><br>";
  // echo "</li>";
  // echo "<li>";
  echo "Lampiran<br><br>";
  echo "<input type='file' name='FileIMG' onchange='readURL(this);' />";
  echo "<br><center>";
  echo "<img id='imgpriview' src='#' alt='your image'  /></center>";
  // echo "</li>";
  echo "<ul>";
  echo "<input type='submit' name='FormPrestasiAjukan'>";
  echo "</form>";
}

if(isset($_POST["PrestasiViewId"])) {
  $connect=mysqli_connect("localhost", "root", "", "prestasi");
  //  echo $_POST["Statusdata"];
  // echo $_POST["UserId"];
  $query="SELECT * FROM prestasi_prestasi WHERE iPrestasiId = '".$_POST["PrestasiViewId"]."'";

  // $query2="SELECT * FROM prestasi_Prestasi";
  $result=mysqli_query($connect, $query);

  // $result2=mysqli_query($connect, $query2);

  while($row=mysqli_fetch_array($result)) {
    if($row['vcStatus']=="ACC") {
      echo "<h3 align='right'>Terkabulkan</h3><br>";
      echo "<h5 align='right'>Diterima Pada:".$row['dtDIterima']."</h5><br>";
    }

    else {
      echo "<h3 align='right'>Menunggu Konfirmasi</h3>";
      echo "<h5 align='right'>Diajukan Pada:".$row['dtDiajajukan']."</h5><br>";
    }

    $query1="SELECT * FROM prestasi_Biodata WHERE iBiodataId = '".$row['iDitujuId']."'";
    $result1=mysqli_query($connect, $query1);

    while($wor=mysqli_fetch_array($result1)) {
      if(empty($wor['blProfilePic'])) {

        $wor['blProfilePic']="IMG&LOGO/Logo SMKN 26 Jakarta.png";

      }

      else {
        $wor['blProfilePic']="data:image/jpeg;base64,".base64_encode($wor['blProfilePic'])."";
      }

      echo "<h3>Biodata</h3><hr>";
      echo "<div class='modalkanan'>  
<img src='".$wor['blProfilePic']."'/></div>";
echo "<div class='modalkiri'><ul>";
      echo "<li>";
      echo "ID<br>";
      echo "<input type='text' id='id' name='TBDitujuID' value='".$wor["iBiodataId"]."' readonly>";
      echo "</li>";
      echo "<li>";
      echo "NISN<br>";
      echo "<input type='text' id='id' name='TBDitujuNI' value='".$wor["iNomerInduk"]."' readonly>";
      echo "</li>";
      echo "<li>";
      echo "Biodata Nama<br>";
      echo "<input type='text' id='id' name='TBDitujuName' value='".$wor["vcBiodataNama"]."' readonly>";
      echo "</li>";
      echo "<li>";
      echo "Kelas<br>";
      echo "<input type='text' id='id' name='TBDitujuKelas' value='".$wor["vcBiodataKelas"]."' readonly>";
      echo "</li>";
      echo "</div>";
    }

    echo "<h3>Data Prestasi</h3><hr>";

    echo "Diajukan Pada: <br>";
    echo "<input type='text' id='id' name='TBKeterangan' value='".$row["dtDiajajukan"]."' readonly><br>";
    echo "Diajukan Oleh: <br>";
    echo "<input type='text' id='id' name='TBKeterangan' value='".$row["iPengajuNi"]."-".$row["vcPengajuNama"]."' readonly><br>";
    echo "Prestasi: <br>";
    echo "<input type='text' id='id' name='TBKeterangan' value='".$row["vcPrestasiNama"]."' readonly><br>";
    echo "Diberikan Oleh: <br>";
    echo "<input type='text' id='id' name='TBKeterangan' value='".$row["vcLembagaPemberi"]."' readonly><br>";
    echo "No sertifikat: <br>";
    echo "<input type='text' id='id' name='TBKeterangan' value='".$row["vcNoSertifikat"]."' readonly><br>";
    echo "Detail Prestasi: <br>";
    echo "<input type='text' id='id' name='TBKeterangan' value='".$row["vcKatagori"]." , ".$row["vcTingkatPrestasi"]."' readonly><br>";
    echo "Point yang didapat: <br>";
    echo "<input type='text' id='id' name='TBKeterangan' value='+".$row["iPenambahanPoint"]."poin' readonly><br>";
    echo "Keterangan: <br>";
    echo "<input type='text' id='id' name='TBKeterangan' value='".$row["vcKeterangan"]."' readonly><br>";
    echo "Lampiran: <br>";
    echo "<center>";

    if(empty($row['blLampiran'])) {
      echo "tidak ada <br>";
    }

    else {
      echo "lampiran ada<br>";
      // $row['blLampiran']="data:image/jpeg;base64,".base64_encode($row['blLampiran'])."";
      // echo '<img src="data:image/jpeg;base64,'.base64_encode($row['blLampiran'] ).'" height="200" width="200" class="img-thumnail" />';
    }

    echo "</center>";

    echo "<br>Sisa Prestasi: ";
    echo "<h4>".$row["iPointAkhir"]."</h4>";


  }
}

if(isset($_POST["PrestasiAccId"])) {
  $connect=mysqli_connect("localhost", "root", "", "prestasi");
  $query="SELECT * FROM prestasi_prestasi WHERE iPrestasiId = '".$_POST["PrestasiAccId"]."'";
  $result=mysqli_query($connect, $query);
  date_default_timezone_set("Etc/GMT-7");
  $date=date("Y-m-d,H:i:s");
  // echo $date;
  $aceptor = $_POST["UserId"];
  $id = $_POST["PrestasiAccId"];
  // echo $aceptor;

  while($row=mysqli_fetch_array($result)) {
    if($row['vcStatus']=="ACC") {
      echo "<h3 align='right'>Terkabulkan</h3><br>";
      echo "<h5 align='right'>Diterima Pada:".$row['dtDIterima']."</h5><br>";
    }

    else {
      echo "<h3 align='right'>Menunggu Konfirmasi</h3>";
      echo "<h5 align='right'>Diajukan Pada:".$row['dtDiajajukan']."</h5><br>";
    }

    $query1="SELECT * FROM prestasi_Biodata WHERE iBiodataId = '".$row['iDitujuId']."'";
    $result1=mysqli_query($connect, $query1);

    while($wor=mysqli_fetch_array($result1)) {
      if(empty($wor['blProfilePic'])) {

        $wor['blProfilePic']="IMG&LOGO/Logo SMKN 26 Jakarta.png";

      }

      else {
        $wor['blProfilePic']="data:image/jpeg;base64,".base64_encode($wor['blProfilePic'])."";
      }

      echo "<h3>Biodata</h3><hr>";
      echo "<div class='modalkanan'>  
<img src='".$wor['blProfilePic']."'/></div>";
echo "<div class='modalkiri'><ul>";
      echo "<li>";
      echo "ID<br>";
      echo "<input type='text' id='id' name='TBDitujuID' value='".$wor["iBiodataId"]."' readonly>";
      echo "</li>";
      echo "<li>";
      echo "NISN<br>";
      echo "<input type='text' id='id' name='TBDitujuNI' value='".$wor["iNomerInduk"]."' readonly>";
      echo "</li>";
      echo "<li>";
      echo "Biodata Nama<br>";
      echo "<input type='text' id='id' name='TBDitujuName' value='".$wor["vcBiodataNama"]."' readonly>";
      echo "</li>";
      echo "<li>";
      echo "Kelas<br>";
      echo "<input type='text' id='id' name='TBDitujuKelas' value='".$wor["vcBiodataKelas"]."' readonly>";
      echo "</li>";
      echo "</div>";
      echo "<form method='POST' action='PHP/proses.php' >";

      echo "<input type='text' id='id' name='nisn' value='".$wor["iNomerInduk"]."' hidden>";

    }

    echo "<h3>Data Prestasi</h3><hr>";

    echo "Diajukan Pada: <br>";
    echo "<input type='text' id='id' name='TBKeterangan' value='".$row["dtDiajajukan"]."' readonly><br>";
    echo "Diajukan Oleh: <br>";
    echo "<input type='text' id='id' name='TBKeterangan' value='".$row["iPengajuNi"]."-".$row["vcPengajuNama"]."' readonly><br>";
    echo "Prestasi: <br>";
    echo "<input type='text' id='id' name='TBKeterangan' value='".$row["vcPrestasiNama"]."' readonly><br>";
    echo "Diberikan Oleh: <br>";
    echo "<input type='text' id='id' name='TBKeterangan' value='".$row["vcLembagaPemberi"]."' readonly><br>";
    echo "<select name='dataperusahaan' required>";
    echo "<option></option>";
     $queryperusahaan = "SELECT * FROM prestasi_instansi";
     $resultperusahaan=mysqli_query($connect, $queryperusahaan);
     while($owr=mysqli_fetch_array($resultperusahaan)) {
       echo "<option value='".$owr["iInstansiId"].",".$owr["vcNamaInstansi"]."' >".$owr["vcNamaInstansi"]."</option>";
     }
    
    echo "</select><br>";
    echo "No sertifikat: <br>";
    echo "<input type='text' id='id' name='TBKeterangan' value='".$row["vcNoSertifikat"]."' readonly><br>";
    echo "Tingkat Prestasi: <br>";
    echo "<input type='text' id='id' name='TBKeterangan' value='".$row["vcTingkatPrestasi"]."' readonly><br>";
     echo "Katagori<br>";
    echo"<select name='tbKatagori' required>";
        echo "<option value='".$row["vcKatagori"]."' selected='selected'>".$row["vcKatagori"]."</option>";
        echo"<option value='Pendidikan'>Pendidikan</option>
        <option value='Seni'>Seni</option>
        <option value='Olahraga'>Olahra</option>
        <option value='remisi'>remisi</option>
        <option value='lainnya'>lainnya</option>
    </select><br>";    
    echo "Point yang didapat: <br>";
    echo "<input type='text' id='id' name='tbpoint' value='' required><br>";
    echo "Keterangan: <br>";
    echo "<input type='text' id='id' name='TBKeterangan' value='".$row["vcKeterangan"]."' readonly><br>";
    echo "Lampiran: <br>";
    echo "<center>";

    if(empty($row['blLampiran'])) {
      echo "tidak ada <br>";
    }

    else {
      echo "lampiran ada<br>";
      // $row['blLampiran']="data:image/jpeg;base64,".base64_encode($row['blLampiran'])."";
      // echo '<img src="data:image/jpeg;base64,'.base64_encode($row['blLampiran'] ).'" height="200" width="200" class="img-thumnail" />';
    }

    echo "</center>";

    echo "<br>Sisa Point: ";
    echo "<h4>".$row["iPointAkhir"]."</h4>";
  echo "<input type='text' id='id' name='acceptor' value='".$aceptor."'hidden><br>";
  echo "<input type='text' id='id' name='date' value='".$date."'hidden><br>";
  echo "<input type='text' id='id' name='id' value='".$id."'hidden><br>";

  echo "status<br>";
  echo"<select name='status' required>";
      echo "<option value='".$row["vcStatus"]."'selected='selected'>".$row["vcStatus"]."</option>";
      echo"<option value='DLY'>Delay</option>
      <option value='ACC'>Accept</option>
      <option value='TLK'>Tolak</option>
  </select>";
    echo "<input type='submit' name='FormAccPrestasi'>";  
    echo "</form>";


  }
}
?>