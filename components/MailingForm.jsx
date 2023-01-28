import MailchimpSubscribe from "react-mailchimp-subscribe"
import CustomForm from './CustomForm'

const MailchimpFormContainer = props => {

    const postUrl = `https://gmail.us12.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`;

    return (
        <div className="mc__form-container">
            <MailchimpSubscribe 
                url={postUrl}
                // url={"testing"}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    );
};

export default MailchimpFormContainer;