import { useState } from "react"
import { Form } from "./components/input-information/Form";

const fields = ['fullName', 'email', 'phoneNumber'];

export const Container = () => {

    const [value, setValue] = useState(
        { 
            firstName: 'Juan',
            email: '@.com',
            placeholder: 'placeholder'
        });

        console.log({value});

    const updateState = (fieldValue, value) => {
        console.log({ fieldValue, value });

        setValue((prevValue) => ({
            ...prevValue,
            [fieldValue]: value,
        }))

    }



    return (
        <>
            <Form
                updateState={updateState}
                fields={[
                    {
                        name: 'fullName',
                        title: 'Full Name',
                        placeholder: 'Enter your full name'
                    },
                    {
                        name: 'email',
                        title: 'Email',
                        placeholder: 'Enter your email'
                    },
                    {
                        name: 'phoneNumber',
                        title: 'Phone Number',
                        placeholder: 'Enter your phone number'
                    }
                ]} />
            <h1>
                {value.firstName}
            </h1>
        </>
    )
}
