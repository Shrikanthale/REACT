import React from 'react'

function ShowDate(){
    const date = new Date()
    return(
        <div>
            <p>the Date is {date.getDate()}</p>
            <p>the mont is {date.getMonth() } </p>
            <p>the hours is {date.getHours() } </p>
            <p>the minutes is {date.getMinutes() } </p>
        </div>
    )
}

export default ShowDate 