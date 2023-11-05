import { useEffect, useState } from "react"
import { Form } from "./components/input-information/Form";
import { PersonContainer } from "./components/output-information/PersonContainer";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { FormContainer } from "./components/input-information/FormContainer";


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
    const [loader, setLoader] = useState(false);

    const downloadPDF = () => {
        setLoader(true);
    }

    useEffect(() => {
        if (loader) {
            const cvElement = document.querySelector('.cv');
            html2canvas(cvElement).then((canvas) => {
                const imgData = canvas.toDataURL('img/png');
                const doc = new jsPDF('p', 'mm', 'a4');
                const componentWidth = doc.internal.pageSize.getWidth();
                const componentHeight = doc.internal.pageSize.getHeight();
                doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
                doc.save('cv.pdf');
                setLoader(false);
            })
            console.log(cvElement);
        }
    }, [loader])



    const updateState = (fieldValue, value) => {
        console.log({ fieldValue, value });

        setValue((prevValue) => ({
            ...prevValue,
            [fieldValue]: value,
        }))

    }

    return (
        <div className="row bg-body-secondary m-auto">
            <h1 className="text-center m-2">Build your CV</h1>
                <div className="container-btn">

                    <button type="button btn" onClick={downloadPDF} disabled={loader}>
                        {
                            loader 
                            ? <span>Downloading</span>
                            : <span>Download</span>
                        }
                    </button>
                </div>
                <FormContainer updateState={updateState}/>
            <div className="col-6 m-2">
                <PersonContainer value={value} />
            </div>
        </div>
    )
}
