import { useState } from "react"
import { Form } from "./Form"


export const FormContainer = ({updateState}) => {

    return (
        <div className="col-4 offset-1 overflow-scroll">
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
    )
}
