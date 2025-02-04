import ReUsableDetailsType from "./types/reusableDetailsType"

const ReUsableDatails = (props: { detailsData: ReUsableDetailsType }) => {

    return (
        <>
            <div className="bg-purple-50   px-[15%] max-mdLap:px-[6%] py-14 w-screen text-center">
                {/* max-mdLap:text-lg max-mdLap:leading-[1.6] max-tab:text-base max-mdPhone:text-sm */}
                <p className="text-lg font-medium text-center pb-8  font-numans  leading-relaxed   text-stone-500 max-mdLap:text-lg max-mdLap:leading-[1.6] max-tab:text-base max-mdPhone:text-sm" style={{ whiteSpace: 'pre-line' }}>{props.detailsData.top}</p>
                <div className=" df-fldc-ac gap-4 mb-6">
                    {props.detailsData.mid.map((value, key) => (
                        <div key={key}>
                            <h6 className="text-2xl pb-6 text-[#3a3a3a]  font-numans">{value.heading}</h6>
                            <p className="text-lg font-medium text-center  font-numans  leading-relaxed   text-stone-500 max-mdLap:text-lg max-mdLap:leading-[1.6] max-tab:text-base max-mdPhone:text-sm" style={{ whiteSpace: 'pre-line' }}>{value.body}</p>
                        </div>
                    ))}
                </div>
                {props.detailsData.bottom && <p
                    style={{ whiteSpace: 'pre-line' }} className="text-lg font-medium text-center py-8  font-numans  leading-relaxed   text-stone-500 max-mdLap:text-lg max-mdLap:leading-[1.6] max-tab:text-base max-mdPhone:text-sm"                  >{props.detailsData.bottom}</p>}
            </div>
        </>
    )
}

export default ReUsableDatails