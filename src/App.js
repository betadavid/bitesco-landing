import './App.css';
import logo from "./logo.png";
import footerImg from "./footer.png";

function App() {
  return (
    <div className="app d-flex flex-column align-items-start">
        <img src={logo} className="logo" alt="logo" />
        <div class="d-grid gap-4 col-8 mx-auto">
          <button class="btn btn-color" type="button">Whatsapp</button>
          <a href="https://bitescol.com" class="btn btn-color" type="button">Tienda Online</a>
          <a href="https://www.tiktok.com/@bitesbymilahs" class="btn btn-color mb-10" type="button">TikTok</a>
        </div>
        <img src={footerImg} className="footer-img" alt="footer"/>
    </div>
  );
}

export default App;
