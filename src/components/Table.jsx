import { useState } from "react";
import './Table.css'
function Table(props) {

    let rows = props.links.map((data) => {
        return (
            <tr>
                <td class="table">{data.name}</td>
                <td class="table">{data.URL}</td>
            </tr>
        )
    })

    return (
        <div >
            <table class="table">
                <thead>
                    <tr>
                        <th class="table">Link name</th>
                        <th class="table">Link URL</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>


            </table>


        </div>

    )
}

export default Table