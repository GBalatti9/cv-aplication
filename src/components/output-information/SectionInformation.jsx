

export const SectionInformation = ({ data }) => {
    let timeInformation = data.filter((el) => el.name.includes('startDate') | el.name.includes('endDate') | el.name.includes('location'));
    
    data = data.filter((el) => !timeInformation.includes(el));
    return (
        <>
        {
            timeInformation.map((element, indexTime) => (
                <p key={ element.value + indexTime }>{ element.value }</p>
            ))
        }

        {
            data.map((element, dataIndex) => (
                <p key={ element + dataIndex }> { element.value } </p>
            ))
        }
        </>
    )
}
