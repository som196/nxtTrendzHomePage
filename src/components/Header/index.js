import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="webiste-logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="logo-img"
        alt="website logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="nav-logout"
      />
    </div>

    <div className="header-items-container">
      <ul className="home-header">Home</ul>
      <ul className="products-header">Products</ul>
      <ul className="carts-header">Cart</ul>
      <button type="button" className="btn">
        Logout
      </button>
    </div>
    <div className="header-items-container-small">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
        className="nav-home"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="nav-products"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="nav-cart"
      />
    </div>
  </nav>
)

export default Header
