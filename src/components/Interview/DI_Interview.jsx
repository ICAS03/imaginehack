import React from "react";
import "/src/components/Interview/DI_Interview.css";

const DI_Interview = () => {
  return (
    <>
      <main className="mainClass">
        <div className="greeting">
          <p className="greeting-title">Digital Interview</p>
          <p className="greeting-desc">
            The digital interview will start once the play button is pressed
          </p>
          <p className="greeting-desc">
            The total time for this interview is 2 minutes 30 seconds (30 sec
            for each question)
          </p>
        </div>
        <section>
          <div className="text-display-div">
            <p className="text-display">Question 3 of 20</p>
          </div>
          <div className="q-display-div">
            <p className="q-display">
              Describe a time where you have to lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum
              vestibulum. Cras venenatis euismod malesuada. Nam vel imperdiet
              odio. Sed interdum velit vel ipsum efficitur tincidunt. Aliquam
              erat volutpat. Curabitur ultrices, tortor non tempor elementum,
              libero nunc interdum nibh, vitae
            </p>
          </div>
        </section>

        <div className="flex-container">
          <div>
            <img
              src="/src/assets/digital-interview.jpg"
              className="di-img"
            ></img>
          </div>
          <div className="tts-div">
            <p className="tts">Text to Speech Transcript</p>
            <br />
            <p className="transcript">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
              malesuada. Nam vel imperdiet odio. Sed interdum velit vel ipsum
              efficitur tincidunt. Aliquam erat volutpat. Curabitur ultrices,
              tortor non tempor elementum, libero nunc interdum nibh, vitae
              vulputate purus nunc sit amet purus. Nam malesuada, lorem in
              tincidunt condimentum, eros nisi faucibus nulla, ut bibendum elit
              sem ut nisi. Integer euismod, odio eu congue scelerisque, leo
              metus gravida lacus, eget scelerisque augue nulla non nisl. Donec
              vel metus ac odio tempor laoreet. Integer vel ante et nunc egestas
              congue. Curabitur pharetra, velit ut hendrerit interdum, arcu sem
              auctor nulla, sit amet suscipit massa nisi non sapien. Proin
              tincidunt, felis a venenatis ultrices, justo metus dictum erat, et
              efficitur metus elit at magna. Quisque accumsan magna vel quam
              posuere, quis vulputate lacus luctus. Nulla facilisi. Etiam
              scelerisque dui nec metus feugiat, vel posuere erat faucibus.
              Donec ullamcorper velit in massa scelerisque, id cursus augue
              sodales. Suspendisse potenti. Maecenas eget libero id neque
              tincidunt tempus a ut lectus. Vivamus cursus, purus ac
              sollicitudin viverra, velit libero tempus magna, et ultricies
              tortor risus ut orci. Duis faucibus lectus vitae nisi ornare, vel
              scelerisque enim lacinia. Donec vitae diam vel massa auctor
              blandit. Phasellus vel urna ac arcu commodo convallis. Aliquam
              erat volutpat. Nam id quam ac purus convallis dapibus non in eros.
            </p>
          </div>
        </div>
        <section>
          <div className="timer-div">
            <p className="timer-text">Time remaining for question : </p>
          </div>
        </section>
        <section>
          <div className="submit-div">
            <button className="submit-btn btn1">End Interview</button>
          </div>
        </section>
        <section>
          <div className="timer-div">
            <p className="timer-text">Text: </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default DI_Interview;
