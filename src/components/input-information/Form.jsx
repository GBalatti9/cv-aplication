import { useState } from "react";
import { Input } from "./Input";

export const Form = ({ updateState, fields, title }) => {

    const [open, setOpen] = useState(true);

    console.log({ fields });

    const onInputValue = (e) => {
        let fieldValue = e.target.name;
        let value = e.target.value;
        updateState(fieldValue, value);
    }

    const toggleCollapse = () => {
        setOpen(!open);
    }
    return (
        <form className="m-4 p-1 rounded shadow bg-white">
            <div
                // className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded={open}
                onClick={toggleCollapse}
            >
                <h3 className="fw-bold text-center p-1 fs-4"> {title} </h3>
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
