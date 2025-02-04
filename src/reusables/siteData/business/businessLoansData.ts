import ReUsableDetailsType from "../../types/reusableDetailsType";

const businessLoansData: {
    detailsData: ReUsableDetailsType, listedItems: {
        heading: string;
        list: string[];
    }, featuresBottomData: {
        bold: string;
        light: string;
    }[], featuresTopData: {
        heading: string; bold: string;
        light: string;
    }[]
} = {
    detailsData: {
        top: "Explore our business loan options:",
        mid: [
            {
                heading: "Business Lines of Credit",
                body: `Manage your cash flow and inventory with a flexible business line of credit. Borrow up to a set limit and pay interest only on what you use. Easily draw and repay funds, secured by your company's assets, such as receivables or inventory.`
            },
            {
                heading: "Business Term Loans",
                body: "Need to invest in fixed assets? Our term loans offer financing for equipment purchases and tenant improvements, with terms tailored to the lifespan of the assets."
            },
            {
                heading: "SBA Guarantee Loan",
                body: "Access government-backed financing with the SBA’s 7(a) Loan Program, supporting a variety of financial needs with up to 85% guaranteed loans."
            },
        ],
        bottom: null
    },
    listedItems: {
        heading: "Loan Features:",
        list: [
            "Use funds for:",
            "Business expansion",
            "Land or building purchases",
            "Facility construction or renovation",
            "Equipment and inventory purchases",
            "Working capital and refinancing",
            "Terms up to:",
            "25 years for real estate",
            "10 years for equipment",
            "7 years for working capital",
            "Max loan amount: $5 million"
        ]
    },
    featuresTopData: [
        { heading: "Quick & Easy", bold: "Complete your application in as little as ten minutes online", light: "Or visit us for personalized assistance." },
        { heading: "Secure", bold: "Your data is encrypted", light: "Your personal and business information is safe with us." },
        { heading: "Fast Funding", bold: "Receive funds in as little as one business day", light: "Get the support you need, when you need it." },
    ],
    featuresBottomData: [
        { bold: "Flexible Credit Options", light: "Explore term loans and lines of credit with West Gate Bank and Fundation." },
        { bold: "Personalized Offers", light: "Receive tailored options from West Gate Bank or Fundation." },
        { bold: "Exceptional Service", light: "Friendly, professional support at every step." },
        { bold: "Streamlined Technology", light: "Enjoy a fast and efficient loan approval process." },
    ]
    
}
export default businessLoansData;