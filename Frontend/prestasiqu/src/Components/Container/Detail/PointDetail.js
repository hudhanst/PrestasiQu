import React from 'react'

import { connect } from 'react-redux'

import { GetPointDetail } from '../../../Store/Actions/Point.Actions'

class PointDetail extends React.Component {
    componentDidMount() {
        const { user } = this.props.auth
        if (user) {
            this.props.GetPointDetail(user.profile)
        }
    }
    render() {
        const {Point_Score} = this.props.point
        // console.log('tes',this.props.point)
        // const Point_Score = 99
        // console.log(Point_Score)
        return (
            <div>
                <h3><b>Your point are:</b></h3>
                {Point_Score ? (
                    <div className={`pointscore ${Point_Score >= 250 ?
                        'pointgood' : (`${Point_Score >= 150 ?
                            'pointwarning' : (`${Point_Score >= 50 ?
                                'pointdenger' : 'pointdead'}`
                            )}`
                        )}`
                    }>
                        {Point_Score}
                    </div>
                ) : null}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    point: state.Point,
    auth: state.Auth,
})
export default connect(mapStateToProps, { GetPointDetail })(PointDetail)