import React, {useState, useEffect} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import InputField from "./InputField";

const CustomForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email
        });
    }

    useEffect(() => {
        if(status === "success") clearFields();
      }, [status])
    
      const clearFields = () => {
        setEmail('');
      }

    return (
        <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
        <h3 className="mc__title">
            {status === "success" 
                ? "Success!" 
                : "Join our email list for future updates."
            }
        </h3>

        {status === "sending" && (
          <div className="mc__alert mc__alert--sending">
            sending...
          </div>
        )}
        {status === "error" && (
          <div 
            className="mc__alert mc__alert--error"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}

        {status === "success" && (
          <div
            className="mc__alert mc__alert--success"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}

        {status !== "success" ? (
            <div className="mc__field-container">
            
                

            <InputField
                label="Email"
                onChangeHandler={setEmail}
                type="email"
                value={email}
                placeholder="your@email.com"
                isRequired
            />

            </div>
        ) : null}
      </form>
    );
};

export default CustomForm;