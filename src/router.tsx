import { lazy } from 'react';
import { createBrowserRouter, Outlet, } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/nav/Navbar';
import UserFooter from './pages/useronly/UserFooter';
import { TitleUpdater } from './reusables/TitleUpdater';
import Footer from './components/footer/Footer';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ChatraComponent from './ChatraComponent';


const About = lazy(() => import('./pages/About'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const BusinessLoans = lazy(() => import('./pages/business/BusinessLoans'));
const BusinessChecking = lazy(() => import('./pages/business/BusinessChecking'));
const ResourceDigitalAssets = lazy(() => import('./pages/resources/ResourceDigitalAssets'));
const Loans = lazy(() => import('./pages/personal/Loans'));
const InvestmentSolutions = lazy(() => import('./pages/personal/InvestmentSolutions'));
const Personal = lazy(() => import('./pages/personal/Personal'));
const PersonalIndex = lazy(() => import('./pages/personal/PersonalIndex'));
const PersonalChecking = lazy(() => import('./pages/personal/PersonalChecking'));
const PersonalSaving = lazy(() => import('./pages/personal/PersonalSaving'));
const Business = lazy(() => import('./pages/business/Business'));
const BusinessIndex = lazy(() => import('./pages/business/BusinessIndex'));
const BusinessBankingSolutions = lazy(() => import('./pages/business/BusinessBankingSolutions'));
const BusinessSavingAccount = lazy(() => import('./pages/business/BusinessSavingAccount'));
const BusinessCREL = lazy(() => import('./pages/business/BusinessCREL'));
const Resource = lazy(() => import('./pages/resources/Resource'));
const ResourceIndex = lazy(() => import('./pages/resources/ResourceIndex'));
const ResourceRASProgram = lazy(() => import('./pages/resources/ResourceRASProgram'));
const ResourcePAM = lazy(() => import('./pages/resources/ResourcePAM'));
const ResourceCAI = lazy(() => import('./pages/resources/ResourceCAI'));
const WaysToBank = lazy(() => import('./pages/WaysToBank'));



const AccountIndex = lazy(() => import('./pages/useronly/AccountIndex'));

const Deposit = lazy(() => import('./pages/useronly/Deposit'));
const BankTransfer = lazy(() => import('./pages/useronly/BankTransfer'));
const RequestLoan = lazy(() => import('./pages/useronly/RequestLoan'));
const Cards = lazy(() => import('./pages/useronly/Cards'));
const AccountStatement = lazy(() => import('./pages/useronly/AccountStatement'));
const ChangePassword = lazy(() => import('./pages/useronly/ChangePassword'));
const Support = lazy(() => import('./pages/useronly/Support'));
const DomesticTransfer = lazy(() => import('./pages/useronly/DomesticTransfer'))
const Fund = lazy(() => import('./pages/useronly/Fund'))
const UserProfile = lazy(() => import('./pages/useronly/UserProfile'));

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <ChatraComponent />
                <Navbar />
                <TitleUpdater />
                <Outlet />
                <Footer />
            </>
        ),
        children: [
            {
                path: '/',
                element: <Home />,
            },
            { path: 'about-us', element: <About /> },
            { path: 'contact-us', element: <ContactUs /> },
            {
                path: 'personal',
                element: <Personal />,
                children: [
                    { path: '', element: <PersonalIndex /> },
                    { path: 'personal-checking', element: <PersonalChecking /> },
                    { path: 'savings', element: <PersonalSaving /> },
                    { path: 'investment-solutions', element: <InvestmentSolutions /> },
                    { path: 'loans', element: <Loans /> },
                ],
            },
            {
                path: 'business',
                element: <Business />,
                children: [
                    { path: '', element: <BusinessIndex /> },
                    { path: 'business-banking-solutions', element: <BusinessBankingSolutions /> },
                    { path: 'business-savings-account', element: <BusinessSavingAccount /> },
                    { path: 'business-checking-account', element: <BusinessChecking /> },
                    { path: 'business-loans', element: <BusinessLoans /> },
                    { path: 'commercial-real-estate-lending', element: <BusinessCREL /> },
                ],
            },
            {
                path: 'resources',
                element: <Resource />,
                children: [
                    { path: '', element: <ResourceIndex /> },
                    { path: 'digital-assets', element: <ResourceDigitalAssets /> },
                    { path: 'retirement-&-spouse-program', element: <ResourceRASProgram /> },
                    { path: 'pamm-and-mam', element: <ResourcePAM /> },
                    { path: 'cannabis-investments', element: <ResourceCAI /> },
                ],
            }, {
                path: 'ways-to-bank',
                element: <WaysToBank />,
            },


        ],
    },
    {
        path: "account", element: <AccountIndex />
    },
    {
        path: "auth", element: <>
            <TitleUpdater />
            <Outlet />
        </>,
        children: [
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
        ]
    },
    {
        path: "account", element: <>
            <Outlet />
            <ChatraComponent />
            <TitleUpdater />
            <UserFooter />
        </>,
        children: [
            {
                path: "deposit",
                element: <Deposit />
            },
            {
                path: "account-statement", element: <AccountStatement />
            },
            {
                path: "loan",
                element: <RequestLoan />
            },
            {
                path: "cards",
                element: <Cards />
            },
            {
                path: "change-password",
                element: <ChangePassword />
            }, {
                path: "support",
                element: <Support />
            },
            {
                path: "domestic-transfer",
                element: <DomesticTransfer />
            }, {
                path: "bank-transfer",
                element: <BankTransfer />
            },
            {
                path: "fund",
                element: <Fund />
            },
            {
                path: "profile",
                element: <UserProfile />
            },
        ]

    }
]);
export default router;