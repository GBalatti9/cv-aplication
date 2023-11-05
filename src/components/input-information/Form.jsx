import { useState } from "react";
import { Input } from "./Input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

export const Form = ({ updateState, fields, title }) => {

    const [open, setOpen] = useState(true);

    // console.log({ fields });

    const onInputValue = (e) => {
        let fieldValue = e.target.name;
        let value = e.target.value;
        updateState(fieldValue, value);
    }

    const toggleCollapse = () => {
        setOpen(!open);
    }
    return (
        <form className="m-4 p-1 rounded shadow bg-white form">
            <div
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded={open}
                onClick={toggleCollapse}
            >

                <div className="d-flex align-items-center justify-content-between p-1">
                    <h3 className="fw-bold p-1 fs-4"> {title} </h3>
                    <div className="item">
                        <FontAwesomeIcon icon={open ? faCaretUp : faCaretDown} size="lg" />
                    </div>
                </div>
            </div>
            <div className={`collapse ${open ? 'show' : ''}`} id="collapseExample">
                <div>
                    {
                        fields.map((field, index) => (
                            <Input
                                key={field + index}
                                field={field}
                                onInputValue={onInputValue} />
                        ))
                    }
                </div>
            </div>


        </form>
    )
}
