import React, {useState, useEffect} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import InputField from "./InputField";
import config from "../config"
import { motion, useAnimationControls } from "framer-motion"

const CustomForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');
    const [isClicked, setIsClicked] = useState(true);
    const [success, setSuccess] = useState(true);

    const controls = useAnimationControls()

    const variants = {
      unClicked: { opacity: 1, x: 0 },
      clicked: { rotate: 360, opacity: 0, x: "-500%", transition: { type: "spring", duration: 1.5, damping: 20, stiffness: 20 } },
      noSuccess: { opacity: 1, x: 0 },
      success: { rotate: -360, opacity: 0, x: "200%", transition: { type: "spring", duration: 0.5, damping: 10, stiffness: 15 } },
      buttonNoSuccess: { opacity: 0, x: "200%", y: "-200%"},
      buttonSuccess: { rotate: -360, opacity: 1, x: 0, y: 0, transition: { type: "spring", delay: 0.5, duration: 1.2, bounce: 0.3 }}
    }

    let buttonMsg = "submit";

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email
        });
    }

    useEffect(() => {
        if(status === "success") clearFields(), setIsClicked(), setSuccess();
      }, [status])
    
      const clearFields = () => {
        setEmail('');
      }

      if (status === "sending") 
        buttonMsg = "sending..." ;

    return (
        <form className="flex flex-col items-center mc__form" onSubmit={(e) => handleSubmit(e)}>
            {/* {status === "success" 
                ? "Success!" 
                : ""
            } */}

        {status === "error" && (
          <div 
            className="flex flex-row justify-center mc__alert mc__alert--error bg-gray-500/20 text-white text-center text-shadow-lg shadow-white dark:text-white border rounded-full"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}

          <motion.button
          initial={{opacity: 0}}
          variants={variants}
          animate={success ? "buttonNoSuccess" : "buttonSuccess"}
          transition={{ duration: 1.5 }}
          whileHover={{ opacity: 0.7 }}
          whileTap={{ opacity: 0.7 }}
          className="flex justify-center self-center bg-emerald-600/30 border-2 border-emerald-200/90 text-emerald-200/90 font-bold text-lg py-2 px-4 rounded-full hover:cursor-default" type='button'
          >
            success!
          </motion.button>

          <motion.div
            key="emailForm"
            animate={success ? "noSuccess" : "success" }
            variants={variants}
            className="flex"
          >
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
          </motion.div>
        <div className='flex justify-center'>
        <motion.button 
        whileHover={{scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        // onClick={handleClick}
        animate={isClicked ? "unClicked" : "clicked"}
        variants={variants}
        className="flex justify-center bg-gray-700/90 border-2 border-warlock-500/90 hover:bg-gray-600/90 hover:border-warlock-400 hover:text-warlock-400/90 text-warlock-500/90 font-bold text-lg py-2 px-4 rounded-full" type='submit'
        >
          {/* <Toggle onClick={() => setIsClicked(isClicked => !isClicked)} /> */}
          
          {buttonMsg}
        </motion.button>

       </div>
      </form>
    );
};

export default CustomForm;