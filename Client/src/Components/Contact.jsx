import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Contact = ({ listing }) => {
  const [landlord, setLandLord] = useState(null);
  const [getLandLordError, setGetLandLordError] = useState(null);
  const [message, setMessage] = useState("");
  console.log(landlord);
  console.log(getLandLordError);

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandLord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);
  const onChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div>
      {landlord && (
        <div className="flex flex-col gap2">
          <p>
            Contact <span className="font-semibold">{landlord.username}</span>{" "}
            for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={onChange}
            className="w-full border p-3 rounded-lg"
            placeholder="Enter your message here..."
          ></textarea>
          <Link
            to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
            className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
          >
            Send Message
          </Link>
        </div>
      )}
    </div>
  );
};

export default Contact;
