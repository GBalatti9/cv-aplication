
export const Form = ({ updateState, fields }) => {

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
                        <label htmlFor={field}>{field}</label>
                        <input
                            type="text"
                            name={field}
                            placeholder={field}
                            onInput={onInputValue} />
                    </>                    
                ))
            }
        </form>
    )
}
