

export const Input = ({ field, onInputValue }) => {
    return (
        <div className="p-2">
            <label 
                htmlFor={field.name}
                className="fw-bold">
                    {field.title}</label>
            <input
                type = "text"
                name = {field.name}
                placeholder={field.placeholder}
                onInput = {onInputValue}
                className="form-control bg-light fs-6"/>
        </div>
    )
}
