import './style.css';

export const HeaderInfo = ({ fullName, email, phoneNumber, address }) => {
    return (
        <div className="custom-background-header d-flex flex-column text-center p-3 border text-white">
            <div>
                <h1> {fullName} </h1>
            </div>
            <div className="d-flex justify-content-around col-10 m-auto">
                <p> {email} </p>
                <p> {phoneNumber} </p>
                <p> {address} </p>
            </div>
        </div>
    )
}
