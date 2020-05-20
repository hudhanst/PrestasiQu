import React from 'react'

import Print from '../../Container/Print'
import PrestasiDetail from '../../Container/Detail/PrestasiDetail'
import PrestasiTabelDataPrestasi from '../../Container/Detail/PrestasiTabel.DataPrestasi'
import PrestasiSubmissionDetailViewModal from '../../Container/Modal/Modal.PrestasiSubmissionDetail_View'

class Prestasi extends React.Component{
    render(){
        return(
            <div>
                <h1 className='position-center'>-Prestasi-</h1>
                <Print />
                <PrestasiDetail />
                <h4>Prestasi History:</h4>
                <PrestasiTabelDataPrestasi />
                <PrestasiSubmissionDetailViewModal />
            </div>
        )
    }
}

export default Prestasi