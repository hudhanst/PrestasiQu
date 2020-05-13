import React from 'react'

const Filter = (parcel) =>{
    const onChange_Filter = (E) => {
        // console.log(E.target.value)
        // console.log('parcel.tablename',parcel.tablename)

        // var textinput, filter, usertable, tr, td, i, textValue
        const textinput = E.target.value
        const filter = textinput.toUpperCase()
        const usertable = document.getElementById(parcel.tablename)
        const tr = usertable.getElementsByTagName('tr')
        var i, td, txtValue

        // console.log('textinput',textinput)
        // console.log('filter',filter)
        // console.log('usertable',usertable)
        // console.log('tr',tr)
        for (i = 0; i<tr.length; i++){
            td = tr[i].getElementsByTagName("td")[parcel.tdnumber]
            if (td) {
                txtValue = td.textContent || td.innerText
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = ""
                } else {
                    tr[i].style.display = "none"
                }
            } 
        }
    }
    return(
        <div>
            <input type='text' className='Input-as-Filter' onChange={onChange_Filter} placeholder='Search Siswa Data by Nomer Induk' />
            <button className='btn btn-lg btn-colorize-green'>Filter</button>
        </div>
    )
}

export default Filter