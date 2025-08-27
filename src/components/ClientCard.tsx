interface Iclient {
    client: {
        referenenceName?: string;
        officeName?: string;
        clientName?: string;
        dateOfBirth?: string;
        passportNumber?: string;
        visaNumber?: string;
        idNumber?: string;
        koffileNumber?: string;
        medicalDate?: string;
        medicalFit?: boolean;
        clientNumber?: string;
        policeClearence?: boolean;
        mofaDate?: string;
        visaFingerDate?: string;
    };
}

const ClientCard = ({ client }: Iclient) => {
    return (
        <div className="text-gray-300">
            <div className="p-4 mb-4 border border-stone-700 rounded-lg bg-white/5">
                <p>
                    <strong>Name:</strong> {client.clientName}
                </p>
                <p>
                    <strong>Passport:</strong> {client.passportNumber}
                </p>
                <p>
                    <strong>Id:</strong> {client.idNumber}
                </p>
                <p>
                    <strong>Visa Number:</strong> {client.visaNumber}
                </p>
            </div>
        </div>
    );
};

export default ClientCard;
