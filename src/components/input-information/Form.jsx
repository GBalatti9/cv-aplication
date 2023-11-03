import { useState } from "react";
import { Input } from "./Input";

export const Form = ({ updateState, fields, title }) => {

    const [open, setOpen] = useState(false);

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
        <form>
            <div
                // className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded={open}
                onClick={toggleCollapse}
            >
                <h3> {title} </h3>
            </div>
            <div className={`collapse ${open ? 'show' : ''}`} id="collapseExample">
                <div className="card">
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
