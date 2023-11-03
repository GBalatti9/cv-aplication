import { Input } from "./Input";

export const Form = ({ updateState, fields, title }) => {

    console.log({ fields });
    const onInputValue = (e) => {
        let fieldValue = e.target.name;
        let value = e.target.value;
        updateState(fieldValue, value);
    }

    return (
        <form action="">

            <h3> { title } </h3>

            {
                fields.map((field, index) => (
                    <Input key={field + index} field = { field } />
                ))
            }
            
        </form>
    )
}
