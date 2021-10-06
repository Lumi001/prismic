import React from "react";

const FormSuccess = ({setIsActive}) => {
  return (
    <div className="successCard">
      <section>
        <h3>Your Message Is Well Received!</h3>
        {/* <p>Need More Information? Reach out to our Sales Team!</p> */}
        <button onClick={() => setIsActive(false)}>{"Got it"}</button>
      </section>
      <style jsx>
        {`
          .successCard {
            display: flex;
            background: #313131;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            padding: 20px 5px;
            width: 500px;
            margin: auto;
          }
          .successCard section {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
          }
          .successCard h3,
          .successCard p {
            color: white;
            width: fit-content;
            max-width: 400px;
            margin: 10px 0px;
            text-align: center;
          }

          .successCard button {
            margin: 10px 0px;
            padding: 15px 40px;
            background: #0e82f8;
            color: white;
            border-radius: 5px;
            border: none;
            font-size:1rem;
          }
          @media screen and (max-width: 991px) {
            .successCard {
              max-width: 90vw;
              margin: auto;
              padding: 10px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default FormSuccess;
