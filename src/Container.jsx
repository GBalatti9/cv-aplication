import { useState } from "react"
import { Form } from "./components/input-information/Form";
import { PersonContainer } from "./components/output-information/PersonContainer";

const fields = ['fullName', 'email', 'phoneNumber'];

let person = {
    fullName: 'John Doe',
    email: 'johndoe@gmail.com',
    phoneNumber: '+54 1166554433',
    address: 'Crist Drive 2066',
    school: 'Reed College',
    degree: 'Software Engineer',
    startDateStudy: '1972',
    endDateStudy: '1974',
    locationStudy: 'Portland, Oregon',
    companyName: 'Apple',
    position: 'Developer',
    startDateWork: '1976',
    endDateWork: '1980',
    locationWork: 'Cupertino, California',
}

export const Container = () => {

    const [value, setValue] = useState(person);

    const updateState = (fieldValue, value) => {
        console.log({ fieldValue, value });

        setValue((prevValue) => ({
            ...prevValue,
            [fieldValue]: value,
        }))

    }

    return (
        <div className="row bg-body-secondary">
            <div className="col-4 overflow-scroll">
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
                        }
                    ]} />
            </div>
            <div className="col-6 m-2">
                <PersonContainer value={value} />
            </div>
        </div>
    )
}
