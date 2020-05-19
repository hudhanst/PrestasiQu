import React from 'react'

import Print from '../../Container/Print'
import PointDetail from '../../Container/Detail/PointDetail'
import PointTabelDataPoint from '../../Container/Detail/PointTabel.DataPoint'
import PointSubmissionDetailViewModal from '../../Container/Modal/Modal.PointSubmissionDetail_View'

class Point extends React.Component{
    render(){
        return(
            <div>
                <h1 className='position-center'>-Point-</h1>
                <Print />
                <PointDetail />
                <h4>Point History:</h4>
                <PointTabelDataPoint />
                <PointSubmissionDetailViewModal />
            </div>
        )
    }
}

export default Point