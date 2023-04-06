
import './style.scss'

export function NavBar() {
  return (
    <nav className="NavBar">
      <a href="" className="NavBar__logo">Mercantte</a>

      <ul className="NavBar__page-navigation">
        <li className="NavBar__page-navigation__discovery"></li>
        <li className="NavBar__page-navigation__about"></li>
        <li className="NavBar__page-navigation__contact-us"></li>
      </ul>

      <div className="NavBar__user-settings">
        <div className="NavBar__user-settings__profile"></div>
        <div className="NavBar__user-settings__cart"></div>
      </div>

    </nav>

  )
}