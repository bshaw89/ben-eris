import React, {useState, useEffect} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import InputField from "./InputField";
import config from "../config"
import { motion } from "framer-motion"

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
                : ""
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
       <div className='flex justify-center'>

        <motion.button 
        whileHover={{scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        class="flex justify-center bg-gray-700/90 border-2 border-warlock-500/90 hover:bg-gray-600/90 hover:border-warlock-400 hover:text-warlock-400/90 text-warlock-500/90 font-bold text-lg py-2 px-4 rounded-full" type='submit'
        >
          subscribe
        </motion.button>

       </div>
      </form>
    );
};

export default CustomForm;