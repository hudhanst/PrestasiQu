import React from 'react'

const AccountDetail= (AccountData)=>{
    return(
        <div className='account-section'>
            <h1 className='position-center'>Account</h1>
            <label>Nomer Induk:</label><br />
            <input type='text' className='Input-as-Info' name='account' readOnly value={AccountData.AccountData ? AccountData.AccountData.nomerinduk : ""} /><br />
            <label>Password:</label><br />
            <input type='password' className='Input-as-Info' name='password' readOnly value={AccountData.AccountData ? AccountData.AccountData.password : ""} /><br />
            {(() => {
                if (AccountData.AccountData) {
                    if (AccountData.AccountData.admin || AccountData.AccountData.superuser) {
                        return (
                            <div >
                                <label>Active:</label><br />
                                {/* <input type='checkbox' className='' name='active' readOnly checked={AccountData.AccountData ? AccountData.AccountData.active : false} /> <br /> */}
                                <div className='switch'>
                                <input type="checkbox" name='active' readOnly checked={AccountData.AccountData ? AccountData.AccountData.active : false} />
                                <span></span><br/>
                                </div><br/>
                                <label>Siswa:</label><br />
                                {/* <input type='checkbox' className='' name='siswa' readOnly checked={AccountData.AccountData ? AccountData.AccountData.siswa : false} /> <br /> */}
                                <div className='switch'>
                                <input type="checkbox" name='active' readOnly checked={AccountData.AccountData ? AccountData.AccountData.siswa : false} /><span></span><br/>
                                </div><br/>
                                <label>Staff:</label><br />
                                {/* <input type='checkbox' className='' name='staff' readOnly checked={AccountData.AccountData ? AccountData.AccountData.staff : false} /> <br /> */}
                                <div className='switch'>
                                <input type="checkbox" name='active' readOnly checked={AccountData.AccountData ? AccountData.AccountData.staff : false} /><span></span><br/>
                                </div><br/>
                                <label>Admin:</label><br />
                                {/* <input type='checkbox' className='' name='admin' readOnly checked={AccountData.AccountData ? AccountData.AccountData.admin : false} /> <br /> */}
                                <div className='switch'>
                                <input type="checkbox" name='active' readOnly checked={AccountData.AccountData ? AccountData.AccountData.admin : false} /><span></span><br/>
                                </div><br/>
                                <label>Supervisor:</label><br />
                                {/* <input type='checkbox' className='' name='supervisor' readOnly checked={AccountData.AccountData ? AccountData.AccountData.supervisor : false} /> <br /> */}
                                <div className='switch'>
                                <input type="checkbox" name='active' readOnly checked={AccountData.AccountData ? AccountData.AccountData.supervisor : false} /><span></span><br/>
                                </div><br/>
                                {/* <input type='checkbox' className='' name='superuser' readOnly checked={AccountData.AccountData ? AccountData.AccountData.superuser : false} /> <br /> */}
                                <label>Superuser:</label><br />
                                <div className='switch'>
                                <input type="checkbox" name='active' readOnly checked={AccountData.AccountData ? AccountData.AccountData.superuser : false} /><span></span><br/>
                                </div><br/>
                                <label>Last Login:</label><br />
                                <input type='text' className='Input-as-Info' name='account' readOnly value={AccountData.AccountData ? AccountData.AccountData.last_login : ""} /><br />
                            </div>
                        )
                    } else {
                        return (
                            <div>
                            </div>
                        )
                    }
                } else {
                    return (
                        <div>
                        </div>
                    )
                }
            }
            )()}
        </div>
    )
}
export default AccountDetail