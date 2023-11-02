import { Input } from "./Input";

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
                fields.map((field, index) => (
                    <Input key={field + index} field = { field } />
                ))
            }
        </form>
    )
}
