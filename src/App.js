import './App.css';
import logo from "./logo.png";
import footerImg from "./footer.png";

function App() {
  return (
    <div className="app d-flex flex-column align-items-start">
        <img src={logo} className="logo" alt="logo" />
        <div class="d-grid gap-4 col-8 mx-auto">
          <a href="https://wa.me/c/573053198052" class="btn btn-color" type="button"><strong>Whatsapp</strong></a>
          <a href="https://bitescol.com" class="btn btn-color" type="button"><strong>Tienda Online</strong></a>
          <a href="https://rappi.app.link/i2E0caXA9Hb" class="btn btn-color" type="button"><strong>Rappi Medellin</strong></a>
          <a href="https://rappi.app.link/NzGlQbCKlHb" class="btn btn-color" type="button"><strong>Rappi Bogotá</strong></a>
          <a href="https://www.tiktok.com/@bitesbymilahs" class="btn btn-color mb-10" type="button"><strong>TikTok</strong></a>
        </div>
        <img src={footerImg} className="footer-img" alt="footer"/>
    </div>
  );
}

export default App;
