import { useState } from "react"
import { Form } from "./components/Form";

const fields = ['fullName', 'email', 'phoneNumber'];

export const Container = () => {

    const [value, setValue] = useState({ firstName: 'Juan' });



    const updateState = ( fieldValue, value ) => {
        console.log({ fieldValue, value });

        setValue((prevValue) => ({
            ...prevValue,
            [fieldValue]: value,
        }))

    }



    return (
        <>
            <Form 
                updateState = { updateState } 
                fields      = { fields } />
            <h1>
                {value.firstName}
            </h1>
        </>
    )
}
