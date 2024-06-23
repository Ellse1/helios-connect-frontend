



export default function AgreementAndExplanation(){
    return (
        <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-bold">Agreement and Explanation</h1>
            <p className="mt-5">By clicking Next you agree to the following:</p>
            <ul className="list-disc ml-5 mt-5">
                <li>That the data you provided is correct</li>
                <li>That you allow us to use the data for the purpose of this application</li>
                <li>That you allow us to store the data for the purpose of this application</li>
            </ul>
        </div>
    )
}