

export const HeaderInfo = ({ fullName, email, phoneNumber, address }) => {
    return (
        <div>
            <h1> { fullName } </h1>
            <p> { email } </p>
            <p> { phoneNumber } </p>
            <p> { address } </p>
        </div>
    )
}
