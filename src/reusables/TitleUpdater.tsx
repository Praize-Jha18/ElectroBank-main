import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const TitleUpdater = () => {
    const location = useLocation();

    useEffect(() => {
        // Define titles for each route with a fallback for undefined routes
        const titles: { [key: string]: string; } = {
            '/': ' EliteOceanic Savings',
            '/about-us': 'About Us - EliteOceanic Savings',
            '/contact-us': 'Contact Us - EliteOceanic Savings',
            '/ways-to-bank': 'Ways To Banks - EliteOceanic Savings',
            '/auth/login': 'Login - EliteOceanic Savings',
            '/auth/register': 'Register - EliteOceanic Savings',

            // personal
            '/personal': 'Personal - EliteOceanic Savings',
            '/personal/personal-checking': 'Personal Checking - EliteOceanic Savings',
            '/personal/savings': 'Savings - EliteOceanic Savings',
            '/personal/loans': 'Loans - EliteOceanic Savings',
            '/personal/investment-solutions': 'Investment Solutions - EliteOceanic Savings',

            //  business
            '/business': 'Business - EliteOceanic Savings',
            '/business/business-banking-solutions': 'Business Banking Solutions - EliteOceanic Savings',
            '/business/business-savings-account': 'Business Savings Account- EliteOceanic Savings',
            '/business/business-checking-account': 'Business Checking Account - EliteOceanic Savings',
            '/business/business-loans': 'Business Loans - EliteOceanic Savings',
            '/business/commercial-real-estate-lending': 'Commercial Real Estate Lending - EliteOceanic Savings',

            //  resources
            '/resources': 'Resources - EliteOceanic Savings',
            '/resources/digital-assets': 'Digital Assets - EliteOceanic Savings',
            '/resources/retirement-&-spouse-program': 'Retirement & Spouse Program - EliteOceanic Savings',
            '/resources/pamm-and-mam': 'Pamm And Mam - EliteOceanic Savings',
            '/resources/cannabis-investments': 'Cannabis Investments - EliteOceanic Savings',

            '/account': 'Home - EliteOceanic Savings',
            '/account/deposit': 'Deposit - EliteOceanic Savings',
            '/account/loan': 'Loan - EliteOceanic Savings',
            '/account/cards': 'Card - EliteOceanic Savings',
            '/account/bank-transfer': 'Bank Transfer - EliteOceanic Savings',
            '/account/account-statement': 'Account Statement - EliteOceanic Savings',
            '/account/domestic-transfer': 'Domestic Transfer - EliteOceanic Savings',
            '/account/change-password': 'Change Password - EliteOceanic Savings',
            '/account/fund': 'Fund - EliteOceanic Savings',
            '/account/profile': 'Profile - EliteOceanic Savings',
            '/account/support': 'Support - EliteOceanic Savings',

        };

        console.log(location.pathname);
        // Update the document title based on the current route
        document.title = titles[location.pathname] || '';

    }, [location]);

    return null;
};
