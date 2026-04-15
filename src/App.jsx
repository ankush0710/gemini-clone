import { useState } from "react";
import { URL } from "./constant";
import DisplayResult from "./components/DisplayResult";

function App() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState([]);

  let payload = {
    contents: [
      {
        parts: [{ text: question }],
      },
    ],
  };

  const handleAskQuestion = async () => {
    let response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    response = await response.json();
    let displayAnswer = response.candidates[0].content.parts[0].text;
    displayAnswer = displayAnswer
      .split("* ")
      .map((item) => item.trim())
      .filter((item) => item !== "");
    // console.log(response.candidates[0].content.parts[0].text);
    setResult([
      ...result,
      { type: "que", text: question },
      { type: "ans", text: displayAnswer },
    ]);
  };
  console.log(result);
  return (
    <>
      <div className="grid grid-cols-5 h-screen text-center">
        <div className="col-span-1 bg-zinc-800"></div>
        {/* main container consist answers and input box for question  */}
        <div className="col-span-4 p-10">
          <div id="container" className="h-110 overflow-scroll lg:h-135">
            <div className="text-zinc-300">
              <ul>
                {result.map((item, index) =>(
                  (item.type == "que") ? (
                    <li key={index} className="text-left p-2">
                      <DisplayResult
                        answer={item.text}
                        totalResult={1}
                        index={index}
                      />
                    </li>
                  ) : item.text.map((ansItem, ansIndex) => (
                    <li key={ansIndex} className="text-left p-2">
                      <DisplayResult
                        answer={ansItem}
                        totalResult={item.length}
                        index={ansIndex}
                      />
                    </li>
                  ))
                ))}
              </ul>
              {/* <ul>
                {result &&
                  result.map((item, index) => {
                    return (
                      <>
                        <li key={index} className="text-left p-2">
                          <DisplayResult answer={item} totalResult={result.length} index={index} />
                        </li>
                      </>
                    );
                  })}
              </ul> */}
            </div>
          </div>
          <div className="flex mx-auto w-1/2 h-16 bg-zinc-800 p-1 pr-5 text-white rounded-4xl border border-zinc-700">
            <input
              onChange={(e) => setQuestion(e.target.value)}
              value={question}
              type="text"
              className="w-full h-full p-3 outline-none"
              placeholder="Ask me anything"
            />
            <button onClick={() => handleAskQuestion()} className="text-lg p-2">
              Ask
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
