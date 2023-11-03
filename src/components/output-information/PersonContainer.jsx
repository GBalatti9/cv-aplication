import { HeaderInfo } from "./HeaderInfo";
import { SectionInformation } from "./SectionInformation";

export const PersonContainer = ({ value }) => {

    const educationData = [
        {
            name: 'school',
            value: value.school,
            className: 'fw-bold'
        },
        {
            name: 'degree',
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
            name: "companyName",
            value: value.companyName,
            className: 'fw-bold',
        },
        {
            name: "position",
            value: value.position,
        },
        {
            name: "startDateWork",
            value: value.startDateWork,
        },
        {
            name: "endDateWork",
            value: value.endDateWork,
        },
        {
            name: "locationWork",
            value: value.locationWork,
        },
        {
            name: "descriptionWork",
            value: value.descriptionWork,
        },
    ];

    return (
        <div className="bg-white min-height">
                <HeaderInfo
                    fullName={value.fullName}
                    email={value.email}
                    phoneNumber={value.phoneNumber}
                    address={value.address}
                />

            <SectionInformation 
                title = {'Education'}
                data={educationData}
            />
            <SectionInformation
                title = {'Professional Experience'}
                data={experienceData}
            />
        </div>
    )
}
