import "../styles/FormResponsePage.css";
import { Link } from "react-router-dom";

const FormResponsePage = () => {
  return (
    <>
      <div class="main-container">
        <div class="body">
          <h4>Message Sent</h4>
          <h1>Thanks a lot for reaching out</h1>
          <h3>
            <Link to="/">Go back to home page</Link>
          </h3>
        </div>
      </div>
    </>
  );
};

export default FormResponsePage;
