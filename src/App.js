import './App.css';
import logo from "./logo.png";
import footerImg from "./footer.png";

function App() {
  return (
    <div className="app">
        <img src={logo} className="logo" alt="logo" />
        <div class="d-grid gap-4 col-8 mx-auto">
          <button class="btn btn-color" type="button">Whatsapp</button>
          <button class="btn btn-color" type="button">Tienda Online</button>
          <button class="btn btn-color" type="button">TikTok</button>
        </div>
        <footer><img src={footerImg} className='footer-img' alt="footer"/></footer>
    </div>
  );
}

export default App;
