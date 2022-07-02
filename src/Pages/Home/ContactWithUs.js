import appointment from "../../assets/images/appointment.png";
import CommonButton from "../Common/CommonButton";

const ContactWithUs = () => {
  return (
    <div className="py-16" style={{ backgroundImage: `url(${appointment})` }}>
      <div className=" mb-9 text-center">
        <h2 className="text-xl font-bold text-secondary mb-1.5">Contact Us</h2>
        <p className="text-3xl font-normal text-white">
          Stay connected with us
        </p>
      </div>
      <div className="flex items-center flex-col">
        <input
          type="text"
          placeholder="Email Address"
          class="input w-full max-w-xs mb-5"
        />
        <input
          type="text"
          placeholder="Subject"
          class="input w-full max-w-xs mb-5"
        />
        <input
          type="text"
          placeholder="your Message"
          class="input w-full max-w-xs mb-5"
        />
        <CommonButton>Submit</CommonButton>
      </div>
    </div>
  );
};

export default ContactWithUs;
