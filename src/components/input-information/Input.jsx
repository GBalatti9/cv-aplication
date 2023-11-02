

export const Input = ({ field }) => {
    return (
        <>
            <label htmlFor={field.name}>{field.title}</label>
            <br />
            <input
                type = "text"
                name = {field.name}
                placeholder={field.placeholder} />
            <br />
        </>
    )
}
