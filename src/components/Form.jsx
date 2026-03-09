import { use } from "react";
import { useState } from "react"
import './Form.css'
//state : date inside a component thats changing
//props: datat in between components

function Form(props) {


    /*function handleSubmit(event) {
        event.preventDefault()
        alert("wewe")
    }*/

    const [name, setName] = useState("");
    const [URL, setURL] = useState("");


    let handleSubmit = (event) => {
        event.preventDefault();
        //alert('Form submitted from arrow');

        if (name === "" || URL === "") {
            alert("Cannot Be Empty");
        }
        else {
            console.log(name, URL);
            props.onNewSubmit({ name, URL })

            //Update the Table in this area
        }



    }

    let handleNameChange = (event) => {

        setName(event.target.value);

    }
    let handleURLChange = (event) => {
        setURL(event.target.value);
    }

    return (
        <div class="Form">
            <form onSubmit={handleSubmit}>
                <label for="linkName" >Enter Link Name: </label>
                <input type="text" name="linkName" onChange={handleNameChange} />
                <br />
                <label for="linkURL"> Enter Link URL: </label>
                <input type="text" name="linkURL" onChange={handleURLChange} />
                <br />
                <br />
                <input type="submit" disabled={name === "" || URL === ""} />

            </form>


        </div>

    )
}

export default Form;