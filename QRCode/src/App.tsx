import "./styles/App.scss";
import qrCode from "./assets/image-qr-code.png";

const App = () => {
  return (
    <>
      <div className="qr-card">
        <img src={qrCode} alt="QR-Code" className="qr-code-img"></img>
        <div className="qr-code-headline">
          Improve your front-end <br /> skils by building projects
        </div>
        <div className="qr-code-subject">
          Scan the QR Code to visit Frontend <br />
          Mentor and take your coding skills to <br /> the next level
        </div>
      </div>
    </>
  );
};

export default App;
