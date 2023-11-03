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

    console.log({ value });

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
                title={'Personal Information'}
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
                    },
                    {
                        name: 'address',
                        title: 'Address',
                        placeholder: 'Enter your address'
                    }
                ]} />
            <Form
                updateState={updateState}
                title={'Education'}
                fields={[
                    {
                        name: 'school',
                        title: 'School',
                        placeholder: 'Enter school / university'
                    },
                    {
                        name: 'degree',
                        title: 'Degree',
                        placeholder: 'Enter your degree'
                    },
                    {
                        name: 'startDateStudy',
                        title: 'Start Date',
                        placeholder: 'Enter Start Date'
                    },
                    {
                        name: 'endDateStudy',
                        title: 'End Date',
                        placeholder: 'Enter End Date'
                    },
                    {
                        name: 'locationStudy',
                        title: 'Location',
                        placeholder: 'Enter Location'
                    },
                ]} />
            <Form
                updateState={updateState}
                title={'Experience'}
                fields={[
                    {
                        name: 'companyName',
                        title: 'Company Name',
                        placeholder: 'Enter Company Name'
                    },
                    {
                        name: 'position',
                        title: 'Position',
                        placeholder: 'Enter Position'
                    },
                    {
                        name: 'startDateWork',
                        title: 'Start Date',
                        placeholder: 'Enter Start Date'
                    },
                    {
                        name: 'endDateWork',
                        title: 'End Date',
                        placeholder: 'Enter End Date'
                    },
                    {
                        name: 'locationWork',
                        title: 'Location',
                        placeholder: 'Enter location'
                    },
                    {
                        name: 'descriptionWork',
                        title: 'Description',
                        placeholder: 'Enter Description'
                    },
                ]} />
            <h1>
                {value.firstName}
            </h1>
        </>
    )
}
