

export const SectionInformation = ({ data, title }) => {
    console.log('SECTION');

    let timeInformation = data.filter((el) => el.name.includes('startDate') | el.name.includes('endDate') | el.name.includes('location'));
    const [ start, end, location ] = timeInformation;
    data = data.filter((el) => !timeInformation.includes(el));
    const [ company, position ] = data;
    return (
        <div className="row p-3">
            <div className="col-11 m-auto">
                <h3 className="fs-5 bg-secondary-subtle text-center custom-text-color fw-bold p-1">
                    {title}
                </h3>
                <div className="row">
                <div className="col-3 d-flex flex-column">
                    <div className="text-center">
                        { start.value } - { end.value }
                    </div>
                    <div className="text-center">
                        { location.value }
                    </div>
                </div>
                <div className="col-7">

                <div>
                    <p>
                        <span className="fw-bold">
                        {company.value}
                        </span>
                        
                        <br />
                        {position.value}
                        </p>

                </div>
                </div>
                </div>
            </div>
        </div>
    )
}
