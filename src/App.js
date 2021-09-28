import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "😂": "Face with Tears of Joy",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "😍": "Smiling Face with Heart-Eyes",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "😝": "Squinting Face with Tongue",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😶": "Face Without Mouth",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "😬": "Grimacing Face",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "😪": "Sleepy Face",
  "😴": "Sleeping Face",
  "😷": "Face with Medical Mask",
  "😵": "Dizzy Face",
  "😎": "Smiling Face with Sunglasses",
  "😕": "Confused Face",
  "😳": "Flushed Face",
  "😦": "Frowning Face with Open Mouth",
  "😧": "Anguished Face",
  "😨": "Fearful Face",
  "😰": "Anxious Face with Sweat",
  "😥": "Sad but Relieved Face",
  "😢": "Crying Face",
  "😭": "Loudly Crying Face",
  "😱": "Face Screaming in Fear",
  "😖": "Confounded Face",
  "😣": "Persevering Face",
  "😞": "Disappointed Face"
};

var emojiArray = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var newmeaning = emojiDictionary[userInput];
    if (newmeaning === undefined) {
      newmeaning = "we don't have this in our database";
    }

    setMeaning(newmeaning);
  }

  function emojiClickHandler(emoji) {
    var userInput = emojiDictionary[emoji];
    setMeaning(userInput);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter!</h1>
      <input
        placeholder="Enter emoji here to see meaning..."
        onChange={emojiInputHandler}
      />
      <div className="meaning">{meaning}</div>
      <div>
        {emojiArray.map(function (emoji) {
          return (
            <span
              className="emoji-design"
              onClick={() => emojiClickHandler(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
