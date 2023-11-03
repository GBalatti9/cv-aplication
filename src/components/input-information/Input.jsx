

export const Input = ({ field, onInputValue }) => {
    return (
        <>
            <label htmlFor={field.name}>{field.title}</label>
            <br />
            <input
                type = "text"
                name = {field.name}
                placeholder={field.placeholder}
                onInput = {onInputValue}/>
            <br />
        </>
    )
}
