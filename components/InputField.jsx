import React from "react";
import { motion } from "framer-motion";

const InputField = props => {

  const validateInput = values => {
        if (values.some(f => f === "") || values[0].indexOf("@") === -1) {
            return true
        } else {
            return false
        }
    }

    if (props.type === "submit") {
        return (
            // <motion.div
            // initial={{ opacity: 1, x: 0 }}
            // animate={{ opacity: 0, x: "-100%" }}
            // transition={{ duration: 0.5 }}
            // >
            <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                </div>
            <input
                className='primaryBtn primaryBtn--big g__justify-self-center'
                type='submit'
                value={props.label}
                disabled={validateInput(props.formValues)}
            />
            </div>
            // </motion.div>
        )
    } else if (props.type === "textarea") {
        return (
           <label className="inputField__label">
                {props.label}
                <textarea
                    onChange={(e) => props.onChangeHandler(e.target.value)}
                    placeholder={props.placeholder}
                    value={props.value}
                    required={props.isRequired}
                    className="inputField__field"
                    rows={7}
                    name={props.name}
                />
            </label>
        );
    } else {
        return (
           
            <>
            <label className="inputField__label text-center block mb-2 font-medium text-gray-900 text-shadow-lg shadow-white dark:text-white">Get the Goods to Your Inbox</label>
                <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    </div>
                <input
                    onChange={(e) => props.onChangeHandler(e.target.value)}
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    required={props.isRequired}
                    className="inputField__field caret-warlock-400 bg-gray-50 border border-gray-300 text-gray-900 dark:focus:outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700/75 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-2 dark:focus:ring-warlock-400/75 dark:focus:border-6 dark:focus:border-warlock-500/90"
                    name={props.name}
                    />
                </div>
                </>
        );
    }


};

export default React.memo(InputField);