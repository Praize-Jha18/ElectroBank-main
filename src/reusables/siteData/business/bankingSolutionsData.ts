import ReUsableDetailsType from "../../types/reusableDetailsType";
type bASRtype  = {
    heading: string;
    list: string[];
}
const businessBankingSolutionsData: { detailsData: ReUsableDetailsType, listedItems: bASRtype, bottomListedItems: bASRtype } = {
    detailsData: {
        top: "In today’s economy, businesses must have tighter control over their finances. Our Business Banking Solutions team offers a wide range of products and services tailored to your unique challenges, providing a customized, solutions-based approach to meet all your financial needs. We’re here to manage your banking, allowing you to focus on growing your business.",
        mid: [
            { heading: "CDARS", body: "CDARS® offer depositors enhanced security and convenience. Enjoy FDIC insurance coverage exceeding $250,000 while working with a single financial institution. This investment option provides a smart, secure, and easy way to deposit funds." },
            { heading: "ICS", body: "Our Insured Consumer Sweep (ICS) product grants businesses access to coverage across multiple institutions, delivering one regular statement while safeguarding confidential information. Plus, we ensure your funds remain easily accessible." },
            { heading: "Lock Box", body: "If your company handles a high volume of customer payments, our Lock Box service directs these payments to a dedicated post office box. We retrieve and process payments daily, depositing funds directly into your company's bank account." },
            { heading: "Desktop Teller", body: `Desktop Teller is a cutting-edge service that allows you to deposit checks without visiting the bank, saving you valuable time. Simply scan checks, coupons, and money orders, and electronically transmit the scanned images for posting and clearing. All you need is a PC with internet access and a check scanner.
            
            Our Desktop Teller offers advanced features and functionality beyond standard remote capture options, allowing you and authorized co-workers to view previously scanned deposits for research and reporting. You'll also have access to HelpDesk support for comprehensive web-based training to ensure you're up and running quickly.` },
            { heading: "Merchant Card Processing", body: "With most consumers preferring debit or credit cards for payments, your business needs Merchant Card Processing to accept these forms of payment. We provide a full suite of payment processing services and complete merchant card processing capabilities." },
        ],
        bottom: null
    },
    
    listedItems: {
        heading: "Payment processing services include:",
        list: [
            "Credit card processing",
            "Equipment purchasing or leasing",
            "Check guarantee and authorization processing",
            "E-Commerce payment processing",
            "Convenient statement reconciliation"
        ]
    },
    
    bottomListedItems: {
        heading: "Full-service merchant card processing offers transaction processing capabilities including:",
        list: [
            "Fraud monitoring",
            "Reconciliation",
            "Automatic transfer of merchant funds",
            "Draft retrieval",
            "Chargeback"
        ]
    }
    
}
export default businessBankingSolutionsData;