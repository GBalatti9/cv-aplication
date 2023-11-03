import { HeaderInfo } from "./HeaderInfo";
import { SectionInformation } from "./SectionInformation";

export const PersonContainer = ({ value }) => {
    console.log(value);

    const educationData = [
        {
            name: 'School',
            value: value.school,
        },
        {
            name: 'Degree',
            value: value.degree,
        },
        {
            name: 'startDateStudy',
            value: value.startDateStudy,
        },
        {
            name: 'endDateStudy',
            value: value.endDateStudy,
        },
        {
            name: 'locationStudy',
            value: value.locationStudy,
        },
    ]

    const experienceData = [
        {
            name: "Company Name",
            value: value.companyName,
        },
        {
            name: "Position",
            value: value.position,
        },
        {
            name: "Start Date",
            value: value.startDateWork,
        },
        {
            name: "End Date",
            value: value.endDateWork,
        },
        {
            name: "Location",
            value: value.locationWork,
        },
        {
            name: "Description",
            value: value.descriptionWork,
        },
    ];

    return (
        <>
            <HeaderInfo
                fullName={value.fullName}
                email={value.email}
                phoneNumber={value.phoneNumber}
                address={value.address}
            />

            <SectionInformation
                data={educationData}
            />
            <SectionInformation
                data={experienceData}
            />
        </>
    )
}
