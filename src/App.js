import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <header class="header">
            <img class="header-logo" src="/vega-logo.png" />
            <span class="header-text">DESIGN PORTFOLIO</span>
        </header>
        <section class="body-container">
            <img class="illustration" src="/lilith.png" />
            <div class="text-content">
                <div class="coming-soon-container">
                    <img class="desktop-coming-soon" src="/desktop-coming-soon.svg" />
                    <img class="mobile-coming-soon" src="/mobile-coming-soon.svg" />
                </div>
                <div>
                    <p>I am in an Age of Exploration — and I always will be. Driven by curiosity, adventure, and community my entire life, I approach design as an opportunity to craft meaningful experiences for users.</p>
                    <p>Check back to see my UI/UX and visual design portfolio, you won't regret it!</p>
                </div>
            </div>
        </section>
        </>
  );
}

export default App;
