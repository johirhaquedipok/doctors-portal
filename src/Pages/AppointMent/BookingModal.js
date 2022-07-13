import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const { _id, name, slots } = treatment;
  const [user] = useAuthState(auth);
  const formatedDate = format(date, "pp");
  // handle booking
  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(_id, name, slot);

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formatedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: e.target.phone.value,
    };

    // post data to the server
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // to close the modal
        if (data.success) {
          toast("Appointment submitted successfully!");
        } else {
          toast.error(
            `You already have an appointment onf ${data.booking?.date} at ${data.booking?.slot}!`
          );
        }
        refetch();
        setTreatment(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />

      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-center">{name}</h3>
          <form
            className="grid grid-cols-1 gap-3 justify-items-center"
            onSubmit={handleBooking}
          >
            <input
              type="text"
              value={format(date, "PP") || ""}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs "
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, idx) => (
                <option key={idx} defaultValue={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              value={user?.displayName || ""}
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs "
            />
            <input
              type="text"
              name="email"
              value={user?.email || ""}
              placeholder="Email Address"
              className="input input-bordered w-full max-w-xs "
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs "
            />
            <input
              type="submit"
              value="submit"
              placeholder="Type here"
              className="btn btn-secondary w-full max-w-xs "
            />
          </form>
          <div className="modal-action">
            {/* <label htmlFor="booking-modal" className="btn">
              Yay!
            </label> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
