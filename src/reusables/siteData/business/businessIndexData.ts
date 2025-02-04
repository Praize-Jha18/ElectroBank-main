import img1 from "../../../assets/account.jpg"
import img2 from "../../../assets/loan.jpg"
import img3 from "../../../assets/businessCREL.jpg" 
const businessIndexData:{ items: {
    img: string;
    heading: string;
    body: string;
    link: string;
  }[]} = {
    items: [
      {
          img: img1,
          heading: "Business Accounts",
          body: "Simplify your financial operations with our tailored checking and savings accounts.",
          link: "/business/business-savings-account"
      },
      {
          img: img2,
          heading: "Growth Financing",
          body: "Unlock new opportunities with our business loans designed to fuel your expansion.",
          link: "/business/business-loans"
      },
      {
          img: img3,
          heading: "Commercial Real Estate Loans",
          body: "Secure funding for your next investment with our cost-effective real estate lending solutions.",
          link: "/business/commercial-real-estate-lending"
      },
  ]
  
}
export default businessIndexData;