
export const Form = ({ updateState, fields }) => {

    console.log({ fields });
    const onInputValue = (e) => {
        let fieldValue = e.target.name;
        let value = e.target.value;
        updateState(fieldValue, value);
    }

    return (
        <form action="">

        {
            fields.map(( field, index ) => (
                <>
                    <label htmlFor={field.name}>{field.title}</label>
                    <br />
                    <input 
                        type="text"
                        name = { field.name }
                        placeholder = { field.placeholder }/>
                    <br />
                </>
            ))
        }
        </form>
    )
}
