import React, { useRef } from "react";
import "/src/components/Interview/DI_Interview.css";
import { useEffect , useState } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useTimer } from 'react-timer-hook';
import Webcam from "react-webcam";

const DI_Interview = () => {
  const [text , setText] = useState("");
  const [isListening , setIsListening] = useState(false);
  //Generate from text//
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(API_KEY);
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const recognitionRef = useRef(null);

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      console.log("Speech recognition not supported by this browser.");
    } else {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = "en-US";
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.onresult = (event) => handleSpeechResult(event);
      recognitionRef.current = recognition;
    }
  }, []);

  const startListening = () => {
    setIsListening(true);
    if (recognitionRef.current) {
      recognitionRef.current.start();
      start(); // Start the timer when listening starts
    }
  };

  const stopListening = () => {
    setText('');
    setIsListening(false);
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

    const time = new Date();
    time.setSeconds(time.getSeconds() + 90);

    const {
      seconds,
      minutes,
      isRunning,
      start,
    } = useTimer({
      expiryTimestamp: time,
      autoStart: false,  // Do not start automatically
      onExpire: () => console.warn("onExpire called"),
    });
  
    const clear = () => {
      setText('');
    };
  
    const handleSpeechResult = (event) => {
      const results = event.results;
      if (!results) return;
  
      let finalTranscript = '';
      for (let i = 0; i < results.length; i++) {
        const result = results[i];
        if (result.isFinal) {
          finalTranscript += result[0].transcript;
        }
      }
      setText(finalTranscript);
      console.log(finalTranscript);
    };

    const generationConfig = {
      temperature: 0.5,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    };
  
    //prompt engineering//
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
      systemInstruction: "You will be acting as a HR interviewer and you will be generating follow-up question at a time based on the candidate's response in a formal and professional manner. Don't give any expression , just questions.",
    });

    async function generateQuestions() {
      try {
        const chatSession = model.startChat({
          generationConfig,
        });
        
        setLoading(true);
  
        const result = await chatSession.sendMessage(text);
        const finaltext = result.response.text();
        console.log(finaltext);
        setLoading(false);
        setData(finaltext);
      } catch (error) {
        setLoading(false);
        console.error("fetchDataFromGeminiAPI error: ", error);
      }
      stopListening();
    }

  return (
    <>
      <main className="mainClass" >
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
              {data? data : "Please tell us about yourself (Years of experience , Skills , etc) "}
            </p>
          </div>
        </section>

        <div className="flex-container">
          <div>
          <Webcam width={400} height={300}></Webcam>
          </div>
          <div className="tts-div">
            <p className="tts">Text to Speech Transcript</p>
            <br />
            <p className="transcript">
             {text ? text : "Transcript will be diplayed here"}
            </p>
          </div>
        </div>
        <section>
          <div className="timer-div">
            <p className="timer-text">Time remaining for question : {minutes}:{seconds} </p>
          
          </div>
        </section>
        <section className="buttons">
        <div className="start-div">
            <button className="start-btn btn1" onClick={startListening}>Start Interview</button>
          </div>
          <div className="submit-div">
            <button className="submit-btn btn1">End Interview</button>
          </div>
          <div className="transcript-div">
            <button className="submit-btn btn1"onClick={generateQuestions}>Next Question</button>
          </div>
        </section>
      </main> 
    </>
  );
};


export default DI_Interview;
