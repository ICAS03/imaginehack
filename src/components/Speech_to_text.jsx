import React from 'react'
import { useEffect , useState } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";

const Speech_to_text = () => {
    const [text , setText] = useState("");
    const [isListening , setIsListening] = useState(false);
    //Generate from text//
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
    const [data, setData] = useState(undefined);
    const [inputText, setInputText] = useState("");
    const [loading, setLoading] = useState(false);

    let recognition;

    useEffect(() => {
        if (!('webkitSpeechRecognition' in window)) {
          console.log('Speech recognition not supported by this browser.');
        } else {
          recognition = new window.webkitSpeechRecognition();
          recognition.lang = 'en-US';
          recognition.continuous = true;
          recognition.interimResults = true;
          recognition.onresult = (event) => handleSpeechResult(event);
        }
      }, []);

      const startListening = () => {
        setIsListening(true);
        recognition.start();
      };
    
      const stopListening = () => {
        setIsListening(false);
        recognition.stop();
      };
    
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
    
      async function fetchDataFromGeminiProAPI() {
        try {
        
          setLoading(true);
          const genAI = new GoogleGenerativeAI(API_KEY);
          const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
          const result = await model.generateContent(text);
          const finaltext = result.response.text();
          console.log(finaltext);
          setLoading(false);
          setData(finaltext);
        } catch (error) {
          setLoading(false);
          console.error("fetchDataFromGeminiAPI error: ", error);
        }
      }

  return (
    <div>
    <button onClick={isListening ? stopListening : startListening}>
      {isListening ? 'Stop Listening' : 'Start Listening'}
    </button>
    <button onClick={clear}>Clear</button>
    <div>
      <strong>Text:</strong>
      <p>{text}</p>
    </div>
    <button onClick={() => fetchDataFromGeminiProAPI()}>{loading ? "Loading..." : "Generate Transcript"}</button>
    <div>
      <strong>Generated Text:</strong>
      <p>{data}</p>
    </div>
  </div>
  )
}

export default Speech_to_text;