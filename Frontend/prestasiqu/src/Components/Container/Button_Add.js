import React from 'react'

import BiodataAddSiswaModal from './Modal/Modal.Biodata_AddSiswa'

////// SISWA 
////// SISWA-ADD 
export const ButtonAddSiswa = () =>{
    return(
        <div>
            <BiodataAddSiswaModal />
            <button data-toggle="modal" data-target="#BiodataAddSiswaModal" className='btn btn-lg btn-block btn-colorize-green'>Create Siswa Biodata</button>

        </div>
    )
}