import { useState, useEffect, useRef } from "react";

const Popup = () => {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const emailInputRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
      emailInputRef.current.focus(); // Focus on email input when the popup opens
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = (event) => {
    event.preventDefault();
    console.log(`Subscribed with email: ${email}`);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div className="overlay" onClick={handleClose} tabIndex={0}></div>
      <aside className="popup-container" aria-hidden={!isVisible}>
        <button
          className="popup-close"
          onClick={handleClose}
          aria-label="Close popup"
          ref={emailInputRef} // Set ref for focusing when the popup opens
        >
          X
        </button>
        <div className="popup-content">
          <h2 className="popup-heading">Win a trip to the Basque Country</h2>
          <p>Subscribe to our newsletter and enter a riffle to win a trip</p>
          <form onSubmit={handleSubscribe} className="popup-form">
            <label htmlFor="emailInput"></label>
            <input
              type="email"
              id="emailInput"
              value={email}
              onChange={handleEmailChange}
              placeholder="E-mail address"
              autoFocus // Automatically focus on email input when the popup opens
            />
            <button className="popup-button" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </aside>
    </>
  );
};

export default Popup;
