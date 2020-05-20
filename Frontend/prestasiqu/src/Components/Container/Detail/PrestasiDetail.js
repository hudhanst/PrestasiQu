import React from 'react'

import { connect } from 'react-redux'

import { GetPrestasiDetail } from '../../../Store/Actions/Prestasi.Actions'

class PrestasiDetail extends React.Component {
    componentDidMount() {
        const { user } = this.props.auth
        if (user) {
            this.props.GetPrestasiDetail(user.profile)
        }
    }
    render() {
        const {Prestasi_Score} = this.props.prestasi
        return (
            <div>
                <h3><b>Your point are:</b></h3>
                {Prestasi_Score ? (
                    <div className={`pointscore ${Prestasi_Score >= 250 ?
                        'pointgood' : (`${Prestasi_Score >= 150 ?
                            'pointwarning' : (`${Prestasi_Score >= 50 ?
                                'pointdenger' : 'pointdead'}`
                            )}`
                        )}`
                    }>
                        {Prestasi_Score}
                    </div>
                ) : null}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    prestasi: state.Prestasi,
    auth: state.Auth,
})
export default connect(mapStateToProps, { GetPrestasiDetail })(PrestasiDetail)