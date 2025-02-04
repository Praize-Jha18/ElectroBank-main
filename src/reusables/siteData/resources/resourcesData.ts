import ReUsableDetailsType from "../../types/reusableDetailsType"

const resourceCAIData: { detailsData: ReUsableDetailsType } = {
    detailsData: {
        top: `
            Institutional investors are increasingly optimistic about the growth potential of cannabis-derived products. According to the Bank of Montreal, the market could reach $194 billion globally by 2025 if the U.S. federal government legalizes cannabis, as reported by Business Insider. 
    
            Such growth would not only elevate cannabis stocks but also attract new entrants into the market. Numerous cannabis-related stocks, such as Cronos Group Inc. (CRON), Aurora Cannabis Inc. (ACB), Canopy Growth Corp. (CGC), and Tilray Inc. (TLRY), are already trading on North American exchanges. 
    
            At EliteOceanic Savings, we are committed to helping investors make the most of their deposits by collaborating with professional fund managers to optimize investment returns in this thriving sector.`,
        mid: [
            {
                heading: "Significance for Investors",
                body: `The rapid acceptance of cannabis investments on Wall Street is noteworthy. A recent survey by EisnerAmper found that nearly 33% of 120 senior executives in private equity, venture capital, hedge funds, and institutional investment view the cannabis industry as having the highest growth potential this year, second only to technology. Hedge funds are particularly bullish, with 37% ranking cannabis first.
    
                Consequently, substantial capital is flowing into various cannabis investments. The market value of public cannabis stocks in the U.S. and Canada has soared to tens of billions of dollars. In the first half of 2019 alone, venture capital firms invested $1.3 billion across 150 cannabis-related deals, surpassing the entire $1 billion invested in 2018, according to Pitchbook. Private equity firms have also ramped up their investments, contributing $474 million to 19 cannabis-related transactions in 2018 and continuing at an even faster pace in 2019.
    
                With such remarkable growth, it's clear why many investors are keen to explore publicly traded cannabis stocks.`
            }
        ],
        bottom: null
    }
    
};


const resourceDigitalAssetsData: { detailsData: ReUsableDetailsType } = {
    detailsData: {
        top: `
            Cryptocurrency is a digital asset designed for secure virtual transactions. Unlike physical money, cryptocurrencies exist solely as data—you can't hold a Bitcoin or store Ethereum in a safe. Owning Bitcoin means you have the consensus of the entire Bitcoin network, confirming its legitimacy and your ownership.
    
            You don’t need to be a crypto expert to profit in this space. Our seasoned traders know the optimal moments to buy and sell various coins. Trades are automated but supervised by professionals, ensuring accuracy and safeguarding your funds.`,
        mid: [
            {
                heading: "What Cryptocurrency Miners Do",
                body: `Cryptocurrencies operate like cash but are mined like gold. Mining involves verifying crypto transactions, with individuals worldwide transferring e-coins between wallets while miners utilize computational power to maintain the blockchain and validate these exchanges.`
            }
        ],
        bottom: `When a new cryptocurrency is launched, its founders set a limit on how many coins will be mined. Once that limit is reached, no more can be produced. Bitcoin, the first digital currency, remains the standard for all cryptocurrencies. Other notable coins in the crypto hall of fame include Ethereum, Ripple, Litecoin, EOS, and various offshoots like Bitcoin Cash and Bitcoin Gold.`
    }
    
};


const resourcePAMData: { detailsData: ReUsableDetailsType } = {
    detailsData: {
        top: `
            PAMM (Percentage Allocation Management Module) and MAM (Multi-Account Manager) accounts empower fund managers to oversee multiple client accounts from a single master account without the need for a dedicated investment fund.
    
            In these systems, the performance—profits and losses—of a PAMM or MAM account manager is distributed proportionally among the managed accounts. Each client's account is linked to the manager's main account, ensuring that all trades executed by the manager are reflected in their accounts based on their respective allocations.`,
        mid: [
            {
                heading: "Managed Accounts",
                body: `At Ace Bank, the balance of a PAMM Master account represents the collective deposits of all clients. To safeguard investors' funds, client deposits remain in their individual trading accounts. Our managers do not have direct access to these accounts, ensuring no unauthorized withdrawals can occur.`
            },
            {
                heading: "What is a PAMM Account?",
                body: `A PAMM account features a management module that allocates trade sizes according to a specified percentage. This approach, offered by many forex brokers, allows investors to assign a portion of their account to one or multiple managers.
    
                The manager's PAMM account serves as a "master account," where its capital equals the total of all connected sub-accounts. When a trade is executed, it is automatically divided among the sub-accounts based on their equity percentages. For example, if a manager places a 100-lot trade on EURUSD and an individual sub-account holds 1% of the master account's equity, that sub-account will reflect a trade of 1 lot.`
            },
            {
                heading: "What is a MAM Account?",
                body: `It's important to distinguish a MAM account from the MetaQuotes multi-terminal system, which has its own limitations. A MAM account employs the percentage allocation method like a PAMM account but offers enhanced flexibility. Fund managers can tailor trades and adjust risk profiles for each sub-account according to individual client preferences.`
            },
        ],
        bottom: `
            For instance, the manager can allocate trades on a fixed basis, specifying the number of lots for each individual account. This fixed allocation can also be implemented using a LAMM (Lot Allocation Management Module) account. Additionally, managers can adjust leverage levels for sub-accounts, accommodating clients who wish to pursue greater risk opportunities.
        `
    }
    
};

const resourceRASProgramData: { detailsData: ReUsableDetailsType } = {
    detailsData: {
        top: `
            Advances in healthcare have significantly extended life expectancy, particularly in developed countries. This increase in lifespan raises a critical question: without sufficient personal savings or pensions, how will individuals ensure they don’t outlive their retirement funds?
    
            During economic downturns, many retirees may feel compelled to re-enter the workforce—whether on a part-time, seasonal, or full-time basis—to secure additional income and access essential benefits like health insurance.
    
            At EliteOceanic Savings, we understand the importance of a solid retirement strategy. Our well-structured retirement portfolios are tailored to meet the unique needs of each investor. Our vision is for you to retire confidently, without the fear of running out of money.`,
        mid: [
            {
                heading: "How Does a Retirement Plan Work?",
                body: `A pension plan is a retirement strategy requiring employers to contribute to a fund reserved for an employee's future benefits. These funds are invested on behalf of the worker, generating income upon retirement.
    
                In essence, retirement planning encompasses preparing for life after employment, considering not just financial aspects but also lifestyle choices. This holistic approach addresses how you’ll spend your time, where you’ll live, and when to fully transition from work.`
            }
        ],
        bottom: `
            The focus on retirement planning evolves through different life stages. In the early years, it’s primarily about saving enough money. Mid-career, it shifts to setting specific financial goals and actions to achieve them. Upon reaching retirement age, the focus changes from accumulating assets to what planners term the distribution phase, where your years of saving start paying out, rather than paying in.
        `
    }
    
}

export { resourceCAIData, resourceDigitalAssetsData, resourcePAMData ,resourceRASProgramData};