import "./navbar.css";
import { useState } from "react";
import Dash from "./Dashboard";
import Over from "./Overview";
import Form from "./Form";
export default function Nav() {

  const [flag,Set]=useState(false);
  const [currentComponent, setCurrentComponent] = useState("dashboard");
function Open() {
  setTimeout(() => {
    Set(true);
  }, 50); 
}
function Close()
{
  Set(false);
}

const renderComponent = () => {
  switch (currentComponent) {
    case "dashboard":
      return <Dash />;
    case "overview":
      return <Over />;
    case "transactions":
      return <Form/>
    // case "transactions":
    //   return <Transactions />;
    // case "goals":
    //   return <Goals />;
    default:
      return <Dash />;
  }
};

  return (
    <div className="Complete">
      <div className={`SideBar ${flag ? "expanded" : "collapsed"}`}>
       <div className="Tag">
         <svg className="expenso" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M3.17157 7.17157C4.01536 6.32778 5.22954 6.09171 7.25179 6.02566L8.75208 6.00188C9.1435 6 9.55885 6 10 6H14C14.4412 6 14.8565 6 15.2479 6.00188L16.7482 6.02566C18.7705 6.09171 19.9846 6.32778 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H9.99998C6.22876 22 4.34314 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14C2 10.2288 2 8.34315 3.17157 7.17157Z" fill="#c0c7dd"></path> <path d="M12.75 10C12.75 9.58579 12.4142 9.25 12 9.25C11.5858 9.25 11.25 9.58579 11.25 10V10.0102C10.1612 10.2845 9.25 11.143 9.25 12.3333C9.25 13.7903 10.6151 14.75 12 14.75C12.8242 14.75 13.25 15.2826 13.25 15.6667C13.25 16.0507 12.8242 16.5833 12 16.5833C11.1758 16.5833 10.75 16.0507 10.75 15.6667C10.75 15.2525 10.4142 14.9167 10 14.9167C9.58579 14.9167 9.25 15.2525 9.25 15.6667C9.25 16.857 10.1612 17.7155 11.25 17.9898V18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18V17.9898C13.8388 17.7155 14.75 16.857 14.75 15.6667C14.75 14.2097 13.3849 13.25 12 13.25C11.1758 13.25 10.75 12.7174 10.75 12.3333C10.75 11.9493 11.1758 11.4167 12 11.4167C12.8242 11.4167 13.25 11.9493 13.25 12.3333C13.25 12.7475 13.5858 13.0833 14 13.0833C14.4142 13.0833 14.75 12.7475 14.75 12.3333C14.75 11.143 13.8388 10.2845 12.75 10.0102V10Z" fill="#c0c7dd"></path> <path d="M12.0522 1.25H11.9482C11.0497 1.24997 10.3005 1.24995 9.70568 1.32991C9.07789 1.41432 8.51109 1.59999 8.05562 2.05546C7.60015 2.51093 7.41448 3.07773 7.33007 3.70552C7.27275 4.13189 7.25653 5.15147 7.25195 6.02566L8.75224 6.00188C8.75677 5.15523 8.77116 4.24407 8.8167 3.9054C8.87874 3.44393 8.98596 3.24644 9.11628 3.11612C9.24659 2.9858 9.44409 2.87858 9.90555 2.81654C10.3886 2.7516 11.0362 2.75 12.0002 2.75C12.9642 2.75 13.6117 2.7516 14.0948 2.81654C14.5562 2.87858 14.7537 2.9858 14.884 3.11612C15.0144 3.24644 15.1216 3.44393 15.1836 3.9054C15.2292 4.24407 15.2436 5.15523 15.2481 6.00188L16.7484 6.02566C16.7438 5.15147 16.7276 4.13189 16.6702 3.70552C16.5858 3.07773 16.4002 2.51093 15.9447 2.05546C15.4892 1.59999 14.9224 1.41432 14.2946 1.32991C13.6999 1.24995 12.9506 1.24997 12.0522 1.25Z" fill="#c0c7dd"></path> </g></svg>
        <p>{flag ? "Expenso":""}</p>
       </div>
       {flag ? (
  <svg onClick={Close} className="sideButton" width="30px" height="30px" viewBox="-16.8 -16.8 57.60 57.60" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.96">
    <g id="SVGRepo_bgCarrier" strokeWidth="0">
      <rect x="-16.8" y="-16.8" width="57.60" height="57.60" rx="8.064" fill="rgba(250, 250, 250, 0.4)" />
    </g>
    <g id="SVGRepo_iconCarrier">
      <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#ffffff"/>
    </g>
  </svg>
) : (
  <svg onClick={Open} className="sideButton1" width="30px" height="30px" viewBox="-16.8 -16.8 57.60 57.60" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)" stroke="#ffffff" strokeWidth="0.96">
    <g id="SVGRepo_bgCarrier" strokeWidth="0">
      <rect x="-16.8" y="-16.8" width="57.60" height="57.60" rx="8.064" fill="rgba(250, 250, 250, 0.4)" />
    </g>
    <g id="SVGRepo_iconCarrier">
      <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#ffffff"/>
    </g>
  </svg>
)}

       <div className="icons">
       <div className="Dashboard" onClick={() => setCurrentComponent("dashboard")}>
       <svg className="SideBarButtons" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 12C13 11.4477 13.4477 11 14 11H19C19.5523 11 20 11.4477 20 12V19C20 19.5523 19.5523 20 19 20H14C13.4477 20 13 19.5523 13 19V12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <path d="M4 5C4 4.44772 4.44772 4 5 4H9C9.55228 4 10 4.44772 10 5V12C10 12.5523 9.55228 13 9 13H5C4.44772 13 4 12.5523 4 12V5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <path d="M4 17C4 16.4477 4.44772 16 5 16H9C9.55228 16 10 16.4477 10 17V19C10 19.5523 9.55228 20 9 20H5C4.44772 20 4 19.5523 4 19V17Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <path d="M13 5C13 4.44772 13.4477 4 14 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H14C13.4477 8 13 7.55228 13 7V5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> </g></svg>
       <p>{flag ? "Dashboard":""}</p>
       </div>
       <div className="Dashboard" onClick={() => setCurrentComponent("overview")}>
       <svg className="SideBarButtons" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19 10.5714V18C19 19.1046 18.1046 20 17 20H6C4.89543 20 4 19.1046 4 18V7C4 5.89543 4.89543 5 6 5H13.4286"stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <circle cx="18" cy="6" r="1" stroke="#ffffff" strokeWidth="2" /><path d="M8 15L11 11L13 13L16 9"stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
       <p>{flag ? "Overview":""}</p>
       </div>
       <div className="Dashboard" onClick={() => setCurrentComponent("transactions")}>
       <svg className="SideBarButtons" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="5.5" cy="7.5" r="1" stroke="#ffffff"/><path d="M8.5 6.5H19.5" stroke="#ffffff" strokeLinecap="round"/><path d="M8.5 8.5H14.5" stroke="#ffffff" strokeLinecap="round"/><circle cx="5.5" cy="12" r="1" stroke="#ffffff"/><path d="M8.5 11H16.5" stroke="#ffffff" strokeLinecap="round"/><path d="M8.5 13H15.5" stroke="#ffffff" strokeLinecap="round"/><circle cx="5.5" cy="16.5" r="1" stroke="#ffffff"/><path d="M8.5 15.5H18" stroke="#ffffff" strokeLinecap="round"/><path d="M8.5 17.5H12.5" stroke="#ffffff" strokeLinecap="round"/></svg>
       <p>{flag ? "Transactions":""}</p>
       </div>
       <div className="Dashboard">
       <svg className="SideBarButtons" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="15 6 15 9 18 9 21 6 18 6 18 3 15 6" fill="#ffffff" strokeWidth="2"/><path d="M15 9l-2.5 2.5M15 6V9h3l3-3H18V3Z" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/><path d="M12.33 3H12a9 9 0 1 0 9 9c0-.11 0-.22 0-.33" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/><path d="M16.9 13A5 5 0 1 1 11 7.1" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
       <p>{flag ? "Goals":""}</p>
       </div>
       </div>
      </div>
      
        {renderComponent()}
     
     </div>
  );
}