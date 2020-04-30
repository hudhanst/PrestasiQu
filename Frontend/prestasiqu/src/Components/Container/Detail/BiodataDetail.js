import React from 'react'

const BiodataDetail = (BiodataData)=>{
    return(
        <div className="Biodata-section">
            <img src={BiodataData.BiodataData ? BiodataData.BiodataData.Profilepicture : null} className='biodata-img' alt='foto profile biodata' /><br />
            <h1 className='position-center'>Biodata</h1>
            <label>Nomer Induk:</label><br />
            <input type='text' className='Input-as-Info' name='NomerInduk' readOnly value={BiodataData.BiodataData ? BiodataData.BiodataData.NomerInduk : ""} /><br />
            <label>Nama:</label><br />
            <input type='text' className='Input-as-Info' name='Nama' readOnly value={BiodataData.BiodataData ? BiodataData.BiodataData.Nama : ""} /><br />
            <label>Agama:</label><br />
            <input type='text' className='Input-as-Info' name='Agama' readOnly value={BiodataData.BiodataData ? BiodataData.BiodataData.Agama : ""} /><br />
            <label>Tempat Lahir:</label><br />
            <input type='text' className='Input-as-Info' name='TempatLahir' readOnly value={BiodataData.BiodataData ? BiodataData.BiodataData.TempatLahir : ""} /><br />
            <label>Tanggal Lahir:</label><br />
            <input type='text' className='Input-as-Info' name='TanggalLahir' readOnly value={BiodataData.BiodataData ? BiodataData.BiodataData.TanggalLahir : ""} /><br />
            <label>Alamat:</label><br />
            <input type='text' className='Input-as-Info' name='Alamat' readOnly value={BiodataData.BiodataData ? BiodataData.BiodataData.Alamat : ""} /><br />
            <label>Nomer TLP:</label><br />
            <input type='text' className='Input-as-Info' name='NomerTLP' readOnly value={BiodataData.BiodataData ? BiodataData.BiodataData.NomerTLP : ""} /><br />
            <label>Email:</label><br />
            <input type='text' className='Input-as-Info' name='Email' readOnly value={BiodataData.BiodataData ? BiodataData.BiodataData.Email : ""} /><br />
            <label>Pendidikan Terakhir:</label><br />
            <input type='text' className='Input-as-Info' name='PendidikanTerakhir' readOnly value={BiodataData.BiodataData ? BiodataData.BiodataData.PendidikanTerakhir : ""} /><br />
            <label>Instansi Pendidikan Terakhir:</label><br />
            <input type='text' className='Input-as-Info' name='InstansiPendidikanTerakhir' readOnly value={BiodataData.BiodataData ? BiodataData.BiodataData.InstansiPendidikanTerakhir : ""} /><br />
            <label>Point:</label><br />
            <input type='text' className='Input-as-Info' name='Point' readOnly value={BiodataData.BiodataData ? BiodataData.BiodataData.Point : ""} /><br />
            <label>Status:</label><br />
            <input type='text' className='Input-as-Info' name='Status' readOnly value={BiodataData.BiodataData ? BiodataData.BiodataData.Status : ""} /><br />
        </div>
    )
}

export default BiodataDetail
