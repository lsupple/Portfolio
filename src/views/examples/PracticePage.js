import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import PracticePageHeader from "components/Headers/PracticePageHeader";

function PracticePage()
{
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() 
    {
        document.body.classList.remove("profile-page");
    };
  });
    return(
        <>
        <ExamplesNavbar />
      <PracticePageHeader />
      <DemoFooter />
      </>
    );

}

export default PracticePage; 