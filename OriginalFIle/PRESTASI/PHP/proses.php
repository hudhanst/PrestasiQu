<link rel = "stylesheet" href = "../css.css" >
    <?php
include('connection.php');
if(!$conn){
  echo'tidak konek database';
}else {
  echo " ";
}

$perintah = !empty($_GET['perintah']) ? $_GET['perintah'] : '';

// Kelas
if (isset($_POST['FormTambahKelas'])) {
    $tahunajar = $_POST['TBTahunAwalTambahKelas']."/".$_POST['TBTahunAwkhirTambahKelas'];
    $namajurusan = $_POST['TBNamaJurusanTambahKelas'];
    $tingkat = $_POST['TBTingkatTambahKelas'];
    $kelas = $_POST['TBKelasTambahKelas'];
    $insert = "INSERT INTO prestasi_kelas (vcTahunAjar, vcNamaJurusan, vcTingkat, vcKelas) VALUE ('$tahunajar','$namajurusan','$tingkat','$kelas')";
        if(!mysqli_query($conn, $insert)){
            echo "<h4 id=prosesgagal >ID Gagal Ditambah</h4>";        
          unset($tahunajar, $namajurusan,  $tingkat, $kelas);
          header("refresh:2; url=../BiodataKelas.php"); 
      }else{
        echo "<h4 id=prosessukses >ID berhasil Ditambah</h4>";
          unset($tahunajar, $namajurusan,  $tingkat, $kelas);
          header("refresh:2; url=../BiodataKelas.php");
      }
      
  }
  if (isset($_POST['FormEditKelas'])) {
      $KelasID = $_POST['TBKelasId'];
      $TahunAjar = $_POST['TBTahunAjar'];
      $NamaJurusan = $_POST['TBNamaJurusan'];
      $TingkatKelas = $_POST['TBTingkatKelas'];
      $Kelas = $_POST['TBTambahkelas'];
      $edit = "UPDATE prestasi_kelas  SET vcTahunAjar='$TahunAjar', vcNamaJurusan='$NamaJurusan', vcTingkat='$TingkatKelas', vcKelas='$Kelas' WHERE iKelasId= $KelasID";
      if (mysqli_query($conn, $edit)) {
          echo "<h4 id=prosessukses >ID berhasil Diupdate".$KelasID.
          "</h4>";
          unset($KelasID, $TahunAjar, $NamaJurusan, $TingkatKelas, $Kelas);
          header("refresh:2; url=../BiodataKelas.php");
      } else {
          echo "<h4 id=prosesgagal >ID gagal  Diupdate</h4>";
          unset($KelasID, $TahunAjar, $NamaJurusan, $TingkatKelas, $Kelas);
          header("refresh:2; url=../BiodataKelas.php");
      }
  }
if (isset($_POST['FormHapusKelas'])) {
  $KelasID = $_POST['TBKelasId'];
  $delete= "DELETE FROM prestasi_kelas WHERE iKelasId='$KelasID'";
      if(!mysqli_query($conn, $delete)){
        echo "<h4 id=prosesgagal >ID gagal dihapus".$KelasID."</h4>";        
        unset($KelasID);
        header("refresh:2; url=../BiodataKelas.php");
    }else{
        echo "<h4 id=prosessukses >ID Berhasil Dihapus".$KelasID."</h4>";        
        unset($KelasID);
        header("refresh:2; url=../BiodataKelas.php");
    }
    
}
// instansi
if (isset($_POST['FormTambahInstansi'])) {
    $NamaInstansi = $_POST['TBNamaInstansi'];
    $JenisInstansi = $_POST['TBJenisInstansi'];
    $KeteranganINstansi = $_POST['TBKeteranganINstansi'];
    $insert = "INSERT INTO prestasi_instansi (vcNamaInstansi, vcJenisInstansi, vcKetInstansi) VALUE ('$NamaInstansi','$JenisInstansi','$KeteranganINstansi')";
        if(!mysqli_query($conn, $insert)){
        echo "<h4 id=prosesgagal >ID gagal Ditambah</h4>";          
          unset($NamaInstansi, $JenisInstansi,  $KeteranganINstansi);
          header("refresh:2; url=../Biodatainstansi.php"); 
      }else{
        echo "<h4 id=prosessukses >ID berhasil Ditambah</h4>";          
        unset($NamaInstansi, $JenisInstansi,  $KeteranganINstansi);          
          header("refresh:2; url=../Biodatainstansi.php");
      }
      
  }
  if(isset($_POST['FormEditInstansi'])){
    $InstansiID = $_POST['TBInstansiId'];
    $NamaInstansi = $_POST['TBNamaInstansi'];
    $JenisInstansi = $_POST['TBJenisInstansi'];
    $KeteranganINstansi = $_POST['TBKeteranganINstansi'];
    $edit ="UPDATE prestasi_instansi  SET vcNamaInstansi='$NamaInstansi', vcJenisInstansi='$JenisInstansi', vcKetInstansi='$KeteranganINstansi' WHERE iInstansiId= $InstansiID";
        if(mysqli_query($conn,$edit)){
        echo "<h4 id=prosessukses >ID berhasil Diupdate".$InstansiID."</h4>";
        unset($InstansiID, $NamaInstansi,  $JenisInstansi, $TingkatKelas, $KeteranganINstansi); 
        header("refresh:2; url=../Biodatainstansi.php");
            }
        else{
                echo "<h4 id=prosesgagal >ID gagal  Diupdate</h4>";
        unset($InstansiID, $NamaInstansi,  $JenisInstansi, $TingkatKelas, $KeteranganINstansi);                 
                header("refresh:2; url=../Biodatainstansi.php");
    }
}
if (isset($_POST['FormHapusInstansi'])) {
  $InstansiID = $_POST['TBInstansiId'];
  $delete= "DELETE FROM prestasi_instansi WHERE iInstansiId='$InstansiID'";
      if(!mysqli_query($conn, $delete)){
        echo "<h4 id=prosesgagal >ID gagal dihapus".$InstansiID."</h4>";        
        unset($InstansiID);
        header("refresh:2; url=../Biodatainstansi.php");
    }else{
        echo "<h4 id=prosessukses >ID Berhasil Dihapus".$InstansiID."</h4>";        
        unset($InstansiID);
        header("refresh:2; url=../Biodatainstansi.php");
    }
    
}
// pelanggaran
if (isset($_POST['FormTambahPelanggaran'])) {
    $NamaPelanggaran = $_POST['TBNamaPelanggaran'];
    $JenisPelanggaran = $_POST['TBJenisPelanggaran'];
    $PointPelanggaran = $_POST['TBPointPelanggaran'];
    $KeteranganPelanggaran = $_POST['TBKeteranganPelanggaran'];
    $insert = "INSERT INTO prestasi_Pelanggaran (vcNamaPelanggaran, vcJenisiPointPelanggaran,iPointPelanggaran , vcKeteranganPelanggaran) VALUE ('$NamaPelanggaran','$JenisPelanggaran','$PointPelanggaran','$KeteranganPelanggaran')";
        if(!mysqli_query($conn, $insert)){
        echo "<h4 id=prosesgagal >ID gagal Ditambah</h4>";          
          unset($NamaPelanggaran, $JenisPelanggaran, $PointPelanggaran,  $KeteranganPelanggaran);
          header("refresh:2; url=../datapelanggaran.php"); 
      }else{
        echo "<h4 id=prosessukses >ID berhasil Ditambah</h4>";          
          unset($NamaPelanggaran, $JenisPelanggaran, $PointPelanggaran,  $KeteranganPelanggaran);        
          header("refresh:2; url=../datapelanggaran.php");
      }
      
  }
  if(isset($_POST['FormEditPelanggaran'])){
    $PelanggaranID = $_POST['TBPelanggaranId'];
    $NamaPelanggaran = $_POST['TBNamaPelanggaran'];
    $JenisPelanggaran = $_POST['TBJenisPelanggaran'];
    $PointPelanggaran = $_POST['TBPointPelanggaran'];
    $KeteranganPelanggaran = $_POST['TBKeteranganPelanggaran'];
    $edit ="UPDATE prestasi_Pelanggaran  SET vcNamaPelanggaran='$NamaPelanggaran', vcJenisiPointPelanggaran='$JenisPelanggaran', iPointPelanggaran='$PointPelanggaran', vcKeteranganPelanggaran='$KeteranganPelanggaran' WHERE iPelanggaranId= $PelanggaranID";
        if(mysqli_query($conn,$edit)){
        echo "<h4 id=prosessukses >ID berhasil Diupdate".$PelanggaranID."</h4>";
        unset($PelanggaranID, $NamaPelanggaran,  $JenisPelanggaran, $PointPelanggaran, $KeteranganPelanggaran); 
        header("refresh:2; url=../datapelanggaran.php");
            }
        else{
                echo "<h4 id=prosesgagal >ID gagal  Diupdate</h4>";
        unset($PelanggaranID, $NamaPelanggaran,  $JenisPelanggaran, $PointPelanggaran, $KeteranganPelanggaran);                 
                header("refresh:2; url=../datapelanggaran.php");
    }
}
if (isset($_POST['FormHapusPelanggaran'])) {
  $PelanggaranID = $_POST['TBPelanggaranId'];
  $delete= "DELETE FROM prestasi_Pelanggaran WHERE iPelanggaranId='$PelanggaranID'";
      if(!mysqli_query($conn, $delete)){
        echo "<h4 id=prosesgagal >ID gagal dihapus".$PelanggaranID."</h4>";        
        unset($PelanggaranID);
        header("refresh:2; url=../datapelanggaran.php");
    }else{
        echo "<h4 id=prosessukses >ID Berhasil Dihapus".$PelanggaranID."</h4>";        
        unset($PelanggaranID);
        header("refresh:2; url=../datapelanggaran.php");
    }
    
}
// data siswa
if (isset($_POST['FormTambahDataSiswa'])) {
    $NISN = $_POST['TBNISN'];
    $NamaSiswa = $_POST['TBNamaSiswa'];
    $Agama = $_POST['TBAgama'];
    $TempatLahir = $_POST['TBTempatLahir'];
    $TanggalLahir = $_POST['TBTanggalLahir'];
    $Alamat = $_POST['TBDaerah'].",".$_POST['TBAlamat'];
    $NoHP = $_POST['TBNoHP'];
    $Email = $_POST['TBEmail'];
    $PendidikanTerakhir = $_POST['TBPendidikanTerakhir'];
    $TempatPendidikanTerakhir = $_POST['TBTempatPendidikanTerakhir'];
    $KelasBiodata = $_POST['TBKelasBiodata'];
    $Point = $_POST['TBPoint'];
    $Status = $_POST['TBStatus'];
    $insert = "INSERT INTO prestasi_biodata (iNomerInduk, vcBiodataNama, vcAgama, vcTempatLahir, dtTanggalLahir, vcAlamat, vcNomerHP, vcEmail, vcPendidikanTerakhir, vcInstansiPendidikanTerakhir, vcBiodataKelas, iPoint, vcStatus) VALUE ('$NISN','$NamaSiswa','$Agama','$TempatLahir','$TanggalLahir','$Alamat','$NoHP','$Email','$PendidikanTerakhir','$TempatPendidikanTerakhir','$KelasBiodata','$Point','$Status')";
        if(!mysqli_query($conn, $insert)){
            echo "<h4 id=prosesgagal >ID gagal Ditambah</h4>";          
            unset($NISN, $NamaSiswa, $Agama,  $TempatLahir, $TanggalLahir, $Alamat, $NoHP, $Email, $PendidikanTerakhir , $TempatPendidikanTerakhir, $KelasBiodata, $Point, $Status);
            header("refresh:2; url=../dataSiswa.php"); 
        }else{
            $insert1 = "INSERT INTO prestasi_user (iUserNomer, vcUserName, vcUserPassword , vcUserStatus) VALUE ('$NISN',' ','123','$Status')";
            if(!mysqli_query($conn, $insert1)){
                $delete = "DELETE FROM prestasi_biodata WHERE iNomerInduk='$NISN'";
                mysqli_query($conn, $delete);
                echo "<h4 id=proseswarning >berbahaya</h4>";          
                unset($NISN, $NamaSiswa, $Agama,  $TempatLahir, $TanggalLahir, $Alamat, $NoHP, $Email, $PendidikanTerakhir , $TempatPendidikanTerakhir, $KelasBiodata, $Point, $Status);                       
                header("refresh:2; url=../dataSiswa.php");
                
    }else{
        echo "<h4 id=prosessukses >ID berhasil Ditambah</h4>";          
        unset($NISN, $NamaSiswa, $Agama,  $TempatLahir, $TanggalLahir, $Alamat, $NoHP, $Email, $PendidikanTerakhir , $TempatPendidikanTerakhir, $KelasBiodata, $Point, $Status);      
        header("refresh:2; url=../dataSiswa.php");
    } 
  }
}
  if(isset($_POST['FormEditDataSiswa'])){
    $BiodataId = $_POST['iBiodataId'];
    $NISN = $_POST['TBiNomerInduk'];
    $NamaSiswa = $_POST['TBBiodataNama'];
    $Agama = $_POST['TBAgama'];
    $TempatLahir = $_POST['TBTempatLahir'];
    $TanggalLahir = $_POST['TBTanggalLahir'];
    $Alamat = $_POST['TBDaerah'].",".$_POST['TBAlamat'];
    $NoHP = $_POST['TBNoHP'];
    $Email = $_POST['TBEmail'];
    $TempatPendidikanTerakhir = $_POST['TBPendidikanTerakhir'];
    $KelasBiodata = $_POST['TBKelasBiodata'];
    if ($_FILES['FileIMG']['size'] == 0 ){
        $edit ="UPDATE prestasi_biodata  SET vcBiodataNama='$NamaSiswa', vcAgama='$Agama', vcTempatLahir='$TempatLahir', dtTanggalLahir='$TanggalLahir', vcAlamat='$Alamat', vcNomerHP='$NoHP', vcEmail='$Email', vcInstansiPendidikanTerakhir='$TempatPendidikanTerakhir', vcBiodataKelas='$KelasBiodata' WHERE iBiodataId= $BiodataId";
    }else{
        $file = addslashes(file_get_contents($_FILES["FileIMG"]["tmp_name"]));
        $edit ="UPDATE prestasi_biodata  SET vcBiodataNama='$NamaSiswa', vcAgama='$Agama', vcTempatLahir='$TempatLahir', dtTanggalLahir='$TanggalLahir', vcAlamat='$Alamat', vcNomerHP='$NoHP', vcEmail='$Email', vcInstansiPendidikanTerakhir='$TempatPendidikanTerakhir', vcBiodataKelas='$KelasBiodata', blProfilePic='$file' WHERE iBiodataId= $BiodataId";
    }
        if(mysqli_query($conn,$edit)){
        echo "<h4 id=prosessukses >ID berhasil Diupdate".$BiodataId."</h4>";
        unset($BiodataId, $NISN, $NamaSiswa, $Agama,  $TempatLahir, $TanggalLahir, $Alamat, $NoHP, $Email, $TempatPendidikanTerakhir, $KelasBiodata);         
        header("refresh:2; url=../dataSiswa.php");
            }
        else{
                echo "<h4 id=prosesgagal >ID gagal  Diupdate</h4>";
                unset($BiodataId, $NISN, $NamaSiswa, $Agama,  $TempatLahir, $TanggalLahir, $Alamat, $NoHP, $Email, $TempatPendidikanTerakhir, $KelasBiodata);         
                header("refresh:2; url=../dataSiswa.php");
    }
}

if (isset($_POST['FormEditUser'])) {
    $URLDATA = $_POST['URLDATA'];
    $UserId = $_POST['TBUserId'];
    $UserName = $_POST['TBUserName'];
    $UserPass = $_POST['TBPassword'];
    $edit = "UPDATE prestasi_user  SET vcUserName='$UserName', vcUserPassword='$UserPass' WHERE iUserNomer= $UserId";
    if (mysqli_query($conn, $edit)) {
        echo "<h4 id=prosessukses >ID berhasil Diupdate".$UserId.
        "</h4>";
        unset($UserId, $UserName, $UserPass);
        header("refresh:2; url=../$URLDATA.php");
    } else {
        echo "<h4 id=prosesgagal >ID gagal  Diupdate</h4>";
        unset($UserId, $UserName, $UserPass);
        header("refresh:2; url=../$URLDATA.php");
    }
}

if (isset($_POST['FormHapusDataSiswa'])) {
  $BiodataId = $_POST['iBiodataId'];
  $NISN = $_POST['TBiNomerInduk'];
  $delete= "DELETE FROM prestasi_biodata WHERE iBiodataId='$BiodataId'";
      if(!mysqli_query($conn, $delete)){
        echo "<h4 id=prosesgagal >ID gagal dihapus".$BiodataId."</h4>";        
        unset($BiodataId);
        header("refresh:2; url=../dataSiswa.php");
    }else{
         $delete1= "DELETE FROM prestasi_user WHERE iUserNomer='$NISN'";
         if(!mysqli_query($conn, $delete1)){
            echo "<h4 id=proseswarning >berbahaya</h4>";
            unset($BiodataId, $NISN);
            header("refresh:2; url=../dataSiswa.php");
         }else{
            echo "<h4 id=prosessukses >ID Berhasil Dihapus".$BiodataId."</h4>";        
            unset($BiodataId, $NISN);
            header("refresh:2; url=../dataSiswa.php");
         }
    }
    
}
// data guru

if (isset($_POST['FormTambahDataGuru'])) {
    $NISN = $_POST['TBNIS'];
    $NamaGuru = $_POST['TBNamaGuru'];
    $Agama = $_POST['TBAgama'];
    $TempatLahir = $_POST['TBTempatLahir'];
    $TanggalLahir = $_POST['TBTanggalLahir'];
    $Alamat = $_POST['TBDaerah'].",".$_POST['TBAlamat'];
    $NoHP = $_POST['TBNoHP'];
    $Email = $_POST['TBEmail'];
    $PendidikanTerakhir = $_POST['TBPendidikanTerakhir'];
    $TempatPendidikanTerakhir = $_POST['TBTempatPendidikanTerakhir'];
    $KelasBiodata = $_POST['TBKelasBiodata'];
    $Point = $_POST['TBPoint'];
    $Status = $_POST['TBStatus'];
    $insert = "INSERT INTO prestasi_biodata (iNomerInduk, vcBiodataNama, vcAgama, vcTempatLahir, dtTanggalLahir, vcAlamat, vcNomerHP, vcEmail, vcPendidikanTerakhir, vcInstansiPendidikanTerakhir, vcBiodataKelas, iPoint, vcStatus) VALUE ('$NISN','$NamaGuru','$Agama','$TempatLahir','$TanggalLahir','$Alamat','$NoHP','$Email','$PendidikanTerakhir','$TempatPendidikanTerakhir','$KelasBiodata','$Point','$Status')";
        if(!mysqli_query($conn, $insert)){
            echo "<h4 id=prosesgagal >ID gagal Ditambah</h4>";          
            unset($NISN, $NamaGuru, $Agama,  $TempatLahir, $TanggalLahir, $Alamat, $NoHP, $Email, $PendidikanTerakhir , $TempatPendidikanTerakhir, $KelasBiodata, $Point, $Status);
            header("refresh:2; url=../dataGuru.php"); 
        }else{
            $insert1 = "INSERT INTO prestasi_user (iUserNomer, vcUserName, vcUserPassword , vcUserStatus) VALUE ('$NISN',' ','123','$Status')";
            if(!mysqli_query($conn, $insert1)){
                $delete = "DELETE FROM prestasi_biodata WHERE iNomerInduk='$NISN'";
                mysqli_query($conn, $delete);
                echo "<h4 id=proseswarning >berbahaya</h4>";          
                unset($NISN, $NamaGuru, $Agama,  $TempatLahir, $TanggalLahir, $Alamat, $NoHP, $Email, $PendidikanTerakhir , $TempatPendidikanTerakhir, $KelasBiodata, $Point, $Status);                       
                header("refresh:2; url=../dataGuru.php");
                
    }else{
        echo "<h4 id=prosessukses >ID berhasil Ditambah</h4>";          
        unset($NISN, $NamaGuru, $Agama,  $TempatLahir, $TanggalLahir, $Alamat, $NoHP, $Email, $PendidikanTerakhir , $TempatPendidikanTerakhir, $KelasBiodata, $Point, $Status);      
        header("refresh:2; url=../dataGuru.php");
    } 
  }
}

if(isset($_POST['FormEditDataGuru'])){
    $BiodataId = $_POST['iBiodataId'];
    $NISN = $_POST['TBiNomerInduk'];
    $NamaGuru = $_POST['TBBiodataNama'];
    $Agama = $_POST['TBAgama'];
    $TempatLahir = $_POST['TBTempatLahir'];
    $TanggalLahir = $_POST['TBTanggalLahir'];
    $Alamat = $_POST['TBDaerah'].",".$_POST['TBAlamat'];
    $NoHP = $_POST['TBNoHP'];
    $Email = $_POST['TBEmail'];
    $InstansiPendidikanTerakhir = $_POST['TBInstansiPendidikanTerakhir'];
    $PendidikanTerakhir = $_POST['TBPendidikanTerakhir'];
    if ($_FILES['FileIMG']['size'] == 0 ){
        $edit ="UPDATE prestasi_biodata  SET vcBiodataNama='$NamaGuru', vcAgama='$Agama', vcTempatLahir='$TempatLahir', dtTanggalLahir='$TanggalLahir', vcAlamat='$Alamat', vcNomerHP='$NoHP', vcEmail='$Email', vcInstansiPendidikanTerakhir='$InstansiPendidikanTerakhir', vcPendidikanTerakhir='$PendidikanTerakhir' WHERE iBiodataId= $BiodataId";
    }else{
        $file = addslashes(file_get_contents($_FILES["FileIMG"]["tmp_name"]));
        $edit ="UPDATE prestasi_biodata  SET vcBiodataNama='$NamaGuru', vcAgama='$Agama', vcTempatLahir='$TempatLahir', dtTanggalLahir='$TanggalLahir', vcAlamat='$Alamat', vcNomerHP='$NoHP', vcEmail='$Email', vcInstansiPendidikanTerakhir='$InstansiPendidikanTerakhir', vcPendidikanTerakhir='$PendidikanTerakhir', blProfilePic='$file' WHERE iBiodataId= $BiodataId";
    }
        if(mysqli_query($conn,$edit)){
        echo "<h4 id=prosessukses >ID berhasil Diupdate".$BiodataId."</h4>";
        unset($BiodataId, $NISN, $NamaGuru, $Agama,  $TempatLahir, $TanggalLahir, $Alamat, $NoHP, $Email, $TempatPendidikanTerakhir, $KelasBiodata);         
        header("refresh:2; url=../dataGuru.php");
            }
        else{
                echo "<h4 id=prosesgagal >ID gagal  Diupdate</h4>";
                unset($BiodataId, $NISN, $NamaGuru, $Agama,  $TempatLahir, $TanggalLahir, $Alamat, $NoHP, $Email, $TempatPendidikanTerakhir, $KelasBiodata);         
                header("refresh:2; url=../dataGuru.php");
    }
}

if (isset($_POST['FormHapusDataGuru'])) {
    $BiodataId = $_POST['iBiodataId'];
    $NISN = $_POST['TBiNomerInduk'];
    $delete= "DELETE FROM prestasi_biodata WHERE iBiodataId='$BiodataId'";
        if(!mysqli_query($conn, $delete)){
          echo "<h4 id=prosesgagal >ID gagal dihapus".$BiodataId."</h4>";        
          unset($BiodataId);
          header("refresh:2; url=../dataGuru.php");
      }else{
           $delete1= "DELETE FROM prestasi_user WHERE iUserNomer='$NISN'";
           if(!mysqli_query($conn, $delete1)){
              echo "<h4 id=proseswarning >berbahaya</h4>";
              unset($BiodataId, $NISN);
              header("refresh:2; url=../dataGuru.php");
           }else{
              echo "<h4 id=prosessukses >ID Berhasil Dihapus".$BiodataId."</h4>";        
              unset($BiodataId, $NISN);
              header("refresh:2; url=../dataGuru.php");
           }
      }
      
  }
// biodata
if(isset($_POST['FormEditBiodata'])){
    $BiodataId = $_POST['iBiodataId'];
    $NISN = $_POST['TBiNomerInduk'];
    $NamaAdmin = $_POST['TBBiodataNama'];
    $Agama = $_POST['TBAgama'];
    $TempatLahir = $_POST['TBTempatLahir'];
    $TanggalLahir = $_POST['TBTanggalLahir'];
    $Alamat = $_POST['TBDaerah'].",".$_POST['TBAlamat'];
    $NoHP = $_POST['TBNoHP'];
    $Email = $_POST['TBEmail'];
    $InstansiPendidikanTerakhir = $_POST['TBInstansiPendidikanTerakhir'];
    $PendidikanTerakhir = $_POST['TBPendidikanTerakhir'];
    if ($_FILES['FileIMG']['size'] == 0 ){
        $edit ="UPDATE prestasi_biodata  SET vcBiodataNama='$NamaAdmin', vcAgama='$Agama', vcTempatLahir='$TempatLahir', dtTanggalLahir='$TanggalLahir', vcAlamat='$Alamat', vcNomerHP='$NoHP', vcEmail='$Email', vcInstansiPendidikanTerakhir='$InstansiPendidikanTerakhir', vcPendidikanTerakhir='$PendidikanTerakhir' WHERE iBiodataId= $BiodataId";
    }else{
        $file = addslashes(file_get_contents($_FILES["FileIMG"]["tmp_name"]));
        $edit ="UPDATE prestasi_biodata  SET vcBiodataNama='$NamaAdmin', vcAgama='$Agama', vcTempatLahir='$TempatLahir', dtTanggalLahir='$TanggalLahir', vcAlamat='$Alamat', vcNomerHP='$NoHP', vcEmail='$Email', vcInstansiPendidikanTerakhir='$InstansiPendidikanTerakhir', vcPendidikanTerakhir='$PendidikanTerakhir', blProfilePic='$file' WHERE iBiodataId= $BiodataId";
    }
        if(mysqli_query($conn,$edit)){
        echo "<h4 id=prosessukses >ID berhasil Diupdate".$BiodataId."</h4>";
        unset($BiodataId, $NISN, $NamaAdmin, $Agama,  $TempatLahir, $TanggalLahir, $Alamat, $NoHP, $Email, $TempatPendidikanTerakhir, $KelasBiodata);         
        header("refresh:2; url=../Biodata.php");
            }
        else{
                echo "<h4 id=prosesgagal >ID gagal  Diupdate</h4>";
                unset($BiodataId, $NISN, $NamaAdmin, $Agama,  $TempatLahir, $TanggalLahir, $Alamat, $NoHP, $Email, $TempatPendidikanTerakhir, $KelasBiodata);         
                header("refresh:2; url=../Biodata.php");
    }
} 

//   data admin

if (isset($_POST['FormTambahDataAdmin'])) {
    $NISN = $_POST['TBNIS'];
    $NamaAdmin = $_POST['TBNamaAdmin'];
    $Agama = $_POST['TBAgama'];
    $TempatLahir = $_POST['TBTempatLahir'];
    $TanggalLahir = $_POST['TBTanggalLahir'];
    $Alamat = $_POST['TBDaerah'].",".$_POST['TBAlamat'];
    $NoHP = $_POST['TBNoHP'];
    $Email = $_POST['TBEmail'];
    $PendidikanTerakhir = $_POST['TBPendidikanTerakhir'];
    $TempatPendidikanTerakhir = $_POST['TBTempatPendidikanTerakhir'];
    $KelasBiodata = $_POST['TBKelasBiodata'];
    $Point = $_POST['TBPoint'];
    $Status = $_POST['TBStatus'];
    $insert = "INSERT INTO prestasi_biodata (iNomerInduk, vcBiodataNama, vcAgama, vcTempatLahir, dtTanggalLahir, vcAlamat, vcNomerHP, vcEmail, vcPendidikanTerakhir, vcInstansiPendidikanTerakhir, vcBiodataKelas, iPoint, vcStatus) VALUE ('$NISN','$NamaAdmin','$Agama','$TempatLahir','$TanggalLahir','$Alamat','$NoHP','$Email','$PendidikanTerakhir','$TempatPendidikanTerakhir','$KelasBiodata','$Point','$Status')";
        if(!mysqli_query($conn, $insert)){
            echo "<h4 id=prosesgagal >ID gagal Ditambah</h4>";          
            unset($NISN, $NamaAdmin, $Agama,  $TempatLahir, $TanggalLahir, $Alamat, $NoHP, $Email, $PendidikanTerakhir , $TempatPendidikanTerakhir, $KelasBiodata, $Point, $Status);
            header("refresh:2; url=../dataAdmin.php"); 
        }else{
            $insert1 = "INSERT INTO prestasi_user (iUserNomer, vcUserName, vcUserPassword , vcUserStatus) VALUE ('$NISN',' ','123','$Status')";
            if(!mysqli_query($conn, $insert1)){
                $delete = "DELETE FROM prestasi_biodata WHERE iNomerInduk='$NISN'";
                mysqli_query($conn, $delete);
                echo "<h4 id=proseswarning >berbahaya</h4>";          
                unset($NISN, $NamaAdmin, $Agama,  $TempatLahir, $TanggalLahir, $Alamat, $NoHP, $Email, $PendidikanTerakhir , $TempatPendidikanTerakhir, $KelasBiodata, $Point, $Status);                       
                header("refresh:2; url=../dataAdmin.php");
                
    }else{
        echo "<h4 id=prosessukses >ID berhasil Ditambah</h4>";          
        unset($NISN, $NamaAdmin, $Agama,  $TempatLahir, $TanggalLahir, $Alamat, $NoHP, $Email, $PendidikanTerakhir , $TempatPendidikanTerakhir, $KelasBiodata, $Point, $Status);      
        header("refresh:2; url=../dataAdmin.php");
    } 
  }
}

if(isset($_POST['FormEditDataAdmin'])){
    $BiodataId = $_POST['iBiodataId'];
    $NISN = $_POST['TBiNomerInduk'];
    $NamaAdmin = $_POST['TBBiodataNama'];
    $Agama = $_POST['TBAgama'];
    $TempatLahir = $_POST['TBTempatLahir'];
    $TanggalLahir = $_POST['TBTanggalLahir'];
    $Alamat = $_POST['TBDaerah'].",".$_POST['TBAlamat'];
    $NoHP = $_POST['TBNoHP'];
    $Email = $_POST['TBEmail'];
    $InstansiPendidikanTerakhir = $_POST['TBInstansiPendidikanTerakhir'];
    $PendidikanTerakhir = $_POST['TBPendidikanTerakhir'];
    if ($_FILES['FileIMG']['size'] == 0 ){
        $edit ="UPDATE prestasi_biodata  SET vcBiodataNama='$NamaAdmin', vcAgama='$Agama', vcTempatLahir='$TempatLahir', dtTanggalLahir='$TanggalLahir', vcAlamat='$Alamat', vcNomerHP='$NoHP', vcEmail='$Email', vcInstansiPendidikanTerakhir='$InstansiPendidikanTerakhir', vcPendidikanTerakhir='$PendidikanTerakhir' WHERE iBiodataId= $BiodataId";
    }else{
        $file = addslashes(file_get_contents($_FILES["FileIMG"]["tmp_name"]));
        $edit ="UPDATE prestasi_biodata  SET vcBiodataNama='$NamaAdmin', vcAgama='$Agama', vcTempatLahir='$TempatLahir', dtTanggalLahir='$TanggalLahir', vcAlamat='$Alamat', vcNomerHP='$NoHP', vcEmail='$Email', vcInstansiPendidikanTerakhir='$InstansiPendidikanTerakhir', vcPendidikanTerakhir='$PendidikanTerakhir', blProfilePic='$file' WHERE iBiodataId= $BiodataId";
    }
        if(mysqli_query($conn,$edit)){
        echo "<h4 id=prosessukses >ID berhasil Diupdate".$BiodataId."</h4>";
        unset($BiodataId, $NISN, $NamaAdmin, $Agama,  $TempatLahir, $TanggalLahir, $Alamat, $NoHP, $Email, $TempatPendidikanTerakhir, $KelasBiodata);         
        header("refresh:2; url=../dataAdmin.php");
            }
        else{
                echo "<h4 id=prosesgagal >ID gagal  Diupdate</h4>";
                unset($BiodataId, $NISN, $NamaAdmin, $Agama,  $TempatLahir, $TanggalLahir, $Alamat, $NoHP, $Email, $TempatPendidikanTerakhir, $KelasBiodata);         
                header("refresh:2; url=../dataAdmin.php");
    }
}

if (isset($_POST['FormHapusDataAdmin'])) {
    $BiodataId = $_POST['iBiodataId'];
    $NISN = $_POST['TBiNomerInduk'];
    $delete= "DELETE FROM prestasi_biodata WHERE iBiodataId='$BiodataId'";
        if(!mysqli_query($conn, $delete)){
          echo "<h4 id=prosesgagal >ID gagal dihapus".$BiodataId."</h4>";        
          unset($BiodataId);
          header("refresh:2; url=../dataAdmin.php");
      }else{
           $delete1= "DELETE FROM prestasi_user WHERE iUserNomer='$NISN'";
           if(!mysqli_query($conn, $delete1)){
              echo "<h4 id=proseswarning >berbahaya</h4>";
              unset($BiodataId, $NISN);
              header("refresh:2; url=../dataAdmin.php");
           }else{
              echo "<h4 id=prosessukses >ID Berhasil Dihapus".$BiodataId."</h4>";        
              unset($BiodataId, $NISN);
              header("refresh:2; url=../dataAdmin.php");
           }
      }
      
  }
  

//   point

if (isset($_POST['FormPointAjukan'])) {
    list($part1, $part2 ,$part3 ,$part4) = explode(',', $_POST["TBPelanggaran"]);
    $PengajuId = $_POST['TBPengajuId'];
    $PengajuNI = $_POST['TBPengajuNI'];
    $PengajuNama = $_POST['TBPengajuNama'];
    $PengajuDate = $_POST['TBPengajuDate'];

    $DitujuID = $_POST['TBDitujuID'];
    $DitujuNI = $_POST['TBDitujuNI'];
    $DitujuName = $_POST['TBDitujuName'];
    $DituPoint = (int)$_POST['TBDituPoint'];
    // $DituPoint = $_POST['TBDituPoint'];

    $PelanggaranID = $part1;
    $PelanggaranNama = $part2;
    $PelanggaranJenis = $part3;
    // $PelanggaranPoint = $part4;
    $PelanggaranPoint = (int)$part4;
    // echo $part1."-";
    // echo $part2."-";
    // echo $part3."-";
    // echo $part4."-";
    
    $PointAkhir = $DituPoint - $PelanggaranPoint;
    // echo $PointAkhir;

    $Keterangan = $_POST['TBKeterangan'];
    $FileIMG = $_POST['FileIMG'];
    $Status = 'DLY';
    $insert = "INSERT INTO prestasi_point (iPengajuPoint, iPengajuNI, vcPengajuNama, iDitujuPoint, iDitujuNISN, vcDitujuNama, iJenisPelanggaran, vcNamaPelanggaran, vcJenisPelanggaran, iPenguranganPoint, iSisaPoint, vcKeteragan, blLampiran, dtDiajukan, vcStatus) 
    VALUE ('$PengajuId','$PengajuNI','$PengajuNama','$DitujuID','$DitujuNI','$DitujuName','$PelanggaranID','$PelanggaranNama','$PelanggaranJenis','$PelanggaranPoint','$PointAkhir','$Keterangan','$FileIMG','$PengajuDate','$Status')";
        if(!mysqli_query($conn, $insert)){
            echo "<h4 id=prosesgagal >ID gagal Ditambah</h4>";          
            header("refresh:2; url=../point.php"); 
        // }else{
        //     $insert1 = "UPDATE prestasi_biodata SET iPoint='$PointAkhir' WHERE iBiodataId='$DitujuID'";
        //     if(!mysqli_query($conn, $insert1)){
        //         echo "<h4 id=proseswarning >Point tidak Berkurang</h4>";          
        //         header("refresh:2; url=../point.php");
    }else{
        echo "<h4 id=prosessukses >ID berhasil Ditambah</h4>";          
        header("refresh:2; url=../point.php");
    // } 
  }
}
if (isset($_POST['FormAccPoint'])) {
    
    
    $time = $_POST['time'];
    $id = $_POST['id'];
    $nisn = $_POST['nisn'];
    $accetor = $_POST['TBaccptor'];
    $Status = $_POST['status'];
    $iSisaPoint = $_POST['sisaa'];
    $insert = "UPDATE prestasi_point SET dtDiterima='$time', vcStatus='$Status', iDiterima='$accetor' WHERE iPointId= $id";
        if(!mysqli_query($conn, $insert)){
            echo "<h4 id=prosesgagal >ID gagal Ditambah</h4>";          
            header("refresh:2; url=../accpoint.php"); 
        }else{
            if($Status=="ACC"){
                $insert1 = "UPDATE prestasi_biodata SET iPoint='$iSisaPoint' WHERE iNomerInduk='$nisn'";
                if(!mysqli_query($conn, $insert1)){
                echo "<h4 id=proseswarning >Point tidak Berkurang</h4>";          
                header("refresh:2; url=../accpoint.php");
            }else{
                  echo "<h4 id=prosessukses >ID berhasil Ditambah</h4>";          
                  header("refresh:2; url=../accpoint.php");
            }
    }else{
        echo "<h4 id=prosessukses >ID berhasil Ditolak atau di dly</h4>";          
        header("refresh:2; url=../accpoint.php");
    } 
  }
}
//   prestasi

if (isset($_POST['FormPrestasiAjukan'])) {
    
    $PengajuId = $_POST['TBPengajuId'];
    $PengajuNI = $_POST['TBPengajuNI'];
    $PengajuNama = $_POST['TBPengajuNama'];
    $PengajuDate = $_POST['TBPengajuDate'];

    $DitujuID = $_POST['TBDitujuID'];
    $DitujuNI = $_POST['TBDitujuNI'];
    $DitujuName = $_POST['TBDitujuName'];

    $iPrestasi = 0;
    $TBNamaPrestasi = $_POST['TBNamaPrestasi'];
    $TBLembaga = $_POST['TBLembaga'];
    $TBNoSertif = $_POST['TBNoSertif'];
    $TBkatagori = $_POST['TBkatagori'];
    $TBTingkatPrestasi = $_POST['TBTingkatPrestasi'];
    $Keterangan = $_POST['TBKeterangan'];
    $FileIMG = $_POST['FileIMG'];
    $Status = 'DLY';
    $insert = "INSERT INTO prestasi_prestasi (iPengajuId, iPengajuNi, vcPengajuNama, iDitujuId, iDitujuNISN, vcDitujuNama, iPrestasi, vcPrestasiNama, vcLembagaPemberi, vcNoSertifikat, vcKatagori, vcTingkatPrestasi, vcKeterangan, lbLampiran, dtDiajajukan, vcStatus) 
    VALUE ('$PengajuId','$PengajuNI','$PengajuNama','$DitujuID','$DitujuNI','$DitujuName','$iPrestasi','$TBNamaPrestasi','$TBLembaga','$TBNoSertif','$TBkatagori','$TBTingkatPrestasi','$Keterangan','$FileIMG','$PengajuDate','$Status')";
        if(!mysqli_query($conn, $insert)){
            echo "<h4 id=prosesgagal >ID gagal Ditambah</h4>";          
            header("refresh:2; url=../Prestasi.php"); 
        }else{
        echo "<h4 id=prosessukses >ID berhasil Ditambah</h4>";          
        header("refresh:2; url=../Prestasi.php");
    
  }
}

if (isset($_POST['FormAccPrestasi'])) {
    
    list($part1, $part2) = explode(',', $_POST["dataperusahaan"]);
    
    $namaperusahaan = $part2;
    $idperusahaan = $part1;
    $katagori = $_POST['tbKatagori'];
    $point = (int)$_POST['tbpoint'];
    $nisn = $_POST['nisn'];
    $id = $_POST['id'];
    $penerima = $_POST['acceptor'];
    $date = $_POST['date'];
    $Status = $_POST['status'];
    $ccc = "SELECT * FROM prestasi_biodata WHERE iNomerInduk='$nisn'";
    $result=mysqli_query($conn, $ccc);
    while($row=mysqli_fetch_array($result)) {
        $ipointawal = (int)$row["iPoint"];
    }
    $pointakhir = $ipointawal + $point;
    $insert = "UPDATE prestasi_prestasi SET iPrestasi='$idperusahaan', vcLembagaPemberi='$namaperusahaan', vcKeterangan='$katagori', dtDIterima='$date',vcStatus='$Status', iDiterima='$penerima', iPenambahanPoint='$point', iPointAkhir='$pointakhir' WHERE iPrestasiId= $id";
        if(!mysqli_query($conn, $insert)){
            echo "<h4 id=prosesgagal >ID gagal Ditambah</h4>";          
            header("refresh:2; url=../accprestasi.php"); 
        }else{
            if($Status=="ACC"){
                $insert1 = "UPDATE prestasi_biodata SET iPoint='$pointakhir' WHERE iNomerInduk='$nisn'";
                if(!mysqli_query($conn, $insert1)){
                echo "<h4 id=proseswarning >Point tidak Berkurang</h4>";          
                header("refresh:2; url=../accprestasi.php");
            }else{
                  echo "<h4 id=prosessukses >ID berhasil Ditambah</h4>";          
                  header("refresh:2; url=../accprestasi.php");
            }
    }else{
        echo "<h4 id=prosessukses >ID berhasil Ditolak atau Di dly</h4>";          
        header("refresh:2; url=../accprestasi.php");
    } 
}


}


?>