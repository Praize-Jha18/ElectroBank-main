import ReUsableMiddleSectionsType from "../../types/reusableMiddleSectionsType";
import { faClone } from "@fortawesome/free-regular-svg-icons"
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"
import { faBuromobelexperte, faHouzz } from "@fortawesome/free-brands-svg-icons"
import { faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons"
import { faHornbill, faSimplybuilt } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from "@fortawesome/free-regular-svg-icons"

import img1 from "../../../assets/personalboy.jpg"
import img2 from "../../../assets/loan.jpg"
import img3 from "../../../assets/personalchecking.avif"
import img4 from "../../../assets/investment.avif"

import ReUsableDetailsType from "../../types/reusableDetailsType";


const personal: string = "personal";

const investmentSolutionsData: { data: ReUsableMiddleSectionsType } = {
    data: {
        heading: "Our Investment Solutions",
        subheading: "Building an international investment portfolio shouldn’t be left to chance. In partnership with our investment manager, Melville Douglas, we offer a comprehensive range of international investment solutions tailored to your needs.",
        title: "ADVANTAGES OF OUR INTERNATIONAL INVESTMENT SOLUTIONS",
        body: [
            { icon: faBriefcase, heading: "Active Management", body: "We implement an active investment strategy with a strong focus on strategic alignment." },
            { icon: faClone, heading: "Diverse Options", body: "Select from a variety of actively managed international investment solutions." },
            { icon: faBuromobelexperte, heading: "Tailored Risk", body: "We provide guidance to build a portfolio that aligns with your investment objectives." },
            { icon: faHouzz, heading: "Proven Strategy", body: "Our rigorous, research-based process consistently delivers exceptional results." }
        ]
    }
    
};
const loansData: { data: ReUsableMiddleSectionsType } = {
    data: {
        heading: "Personal Loans",
        subheading: "Discover a world of opportunities. Secure a personal loan that provides the flexibility and convenience to help you confidently achieve your life and financial goals.",
        title: "ADVANTAGES OF OUR PERSONAL LOANS",
        body: [
            { icon: faSimplybuilt, heading: "HASSLE-FREE", body: "Enjoy a straightforward application process since you are already a client." },
            { icon: faCircle, heading: "FLEXIBILITY", body: "Select from a variety of personal loans tailored to meet diverse needs." },
            { icon: faMoneyBill1Wave, heading: "CURRENCY OPTIONS", body: "Our loans are offered in the currency of your account, primarily in sterling or US dollars." },
            { icon: faHornbill, heading: "DIVERSE TERMS", body: "Choose from short to long-term loans that are renewable." }
        ]
    }
    
};
const personalCheckingData: { detailsData: ReUsableDetailsType } = {
    detailsData: {
        top: "Whether you're switching banks or opening a new checking account, EliteOceanic Savings® offers a range of accounts tailored to your financial needs. As a local community bank, we reinvest your deposits into the communities we serve. Choosing EliteOceanic Savings means you get a great account, excellent service, and contribute to the flourishing of your community.",
        mid: [
            { heading: "Completely Free Checking", body: "Enjoy no minimum balance and no monthly service charge, allowing you to avoid the hassle of extra fees." },
            { heading: "Direct Free Checking with Interest", body: "Set up at least one direct deposit or automatic payment, and earn competitive interest without worrying about maintaining a minimum balance or incurring monthly service charges." },
            { heading: "High Interest Checking", body: "This account is perfect for customers with higher balances, offering a better interest rate and added benefits. Maintain a $1,500 minimum balance to avoid a $6 monthly fee." },
            { heading: "50+ Free Checking with Interest", body: "Available for customers aged 50 and above, this free account features a competitive interest rate, no minimum balance requirement, and no monthly service charge." },
            { heading: "Overdraft Privilege", body: "Protect your checking account from accidental overdrafts. Overdraft Privilege (ODP) helps you avoid costly charges from merchants for returned checks and spares you from the inconvenience of denied purchases." }
        ],
        bottom: "If you accidentally overdraft your checking account, Overdraft Privilege can assist. Instead of automatically returning unpaid items (checks, etc.) due to insufficient funds, EliteOceanic Savings® may, at our discretion, consider covering your reasonable overdrafts.*"
    }
    
};
const personalIndexData: { items: { img: string, heading: string, body: string, link: string }[] } = {
    items: [
        { img: img1, heading: "Checking", body: "Manage your finances with confidence and ease.", link: `/${personal}/personal-checking` },
        { img: img3, heading: "Savings", body: "Prepare for future expenses and commit to your savings goals.", link: `/${personal}/savings` },
        { img: img2, heading: "Loans", body: "Discover budget-friendly options to support your next steps.", link: `/${personal}/loans` },
        { img: img4, heading: "Investment Solutions", body: "We offer personalized investment solutions tailored for our clients.", link: `/${personal}/investment-solutions` }
    ]
    
};
const personalSavingData: { detailsData: ReUsableDetailsType } = {
    detailsData: {
        top: "Whether you're saving for a rainy day, planning a sunny vacation, or dreaming of your ideal home, we offer various options to help you save. Plus, with EliteOceanic Savings®, your deposits are reinvested into the community, supporting the financial health of your neighborhood while you build your future.",
        mid: [
            { heading: "Personal Savings Accounts", body: "Kickstart your savings journey with a flexible account tailored to your goals." },
            { heading: "Money Market Accounts", body: "Our Money Market Accounts reward you with competitive interest rates for maintaining higher balances." },
            { heading: "Certificates of Deposit (CDs)", body: "Choose from a variety of CDs with competitive rates and terms to suit your investment objectives and cash flow needs." },
            { heading: "Health Savings Accounts", body: "Health Savings Accounts (HSAs) help cover medical expenses for you and your dependents. Contributions are tax-exempt, earnings grow tax-deferred, and funds used for qualified medical expenses are tax-free. Unused assets can also be leveraged for retirement." },
            { heading: "Individual Retirement Accounts", body: "Take advantage of tax benefits with our Individual Retirement Accounts (IRAs), available in both Traditional and Roth options to help you save for retirement." }
        ],
        bottom: null
    }
    
}
export { investmentSolutionsData, loansData, personalCheckingData, personalIndexData, personalSavingData };