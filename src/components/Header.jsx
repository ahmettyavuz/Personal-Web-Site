import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <div>
      <div>modi, dil</div>
      <div>içerik</div>
      <FontAwesomeIcon icon={faLinkedin} />
      <label className="">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          data-testid="darkMode-toggle"
          checked={true}
        />
        <div className=""></div>
        <span className="m">dark mod</span>
      </label>
    </div>
  );
}

export default Header;
