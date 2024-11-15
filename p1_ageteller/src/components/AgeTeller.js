import React from "react";
import partyPopper from "../assets/party-popper.jpg";

const AgeTeller = ({ date }) => {
  const timeSince = (date) => {
    let today = new Date().getTime();
    let other_date = new Date(date).getTime();
    let difference = Math.abs(today - other_date);

    let days = Math.floor(difference / (1000 * 3600 * 24));
    let years = Math.floor(days / 365);
    days -= years * 365;
    let months = Math.floor(days / 31);
    days -= months * 31;
    return `${years} years ${months} months, and ${days} days`;
  };
  return (
    <div className="Ageteller">
      <h3>{date}</h3>
      <p>Congrats on {timeSince(date)}!</p>
      <img src={partyPopper} alt="party-popper" className="partyPopper" />
    </div>
  );
};

export default AgeTeller;
