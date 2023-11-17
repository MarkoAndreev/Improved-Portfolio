import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faFile,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [overAboutMe, setOverAboutMe] = useState(false);
  const [overContactMe, setOverContactMe] = useState(false);
  const [overPortfolio, setOverPortfolio] = useState(false);
  const [overResume, setOverResume] = useState(false);

  return (
    <ul className="nav-form">
      <li>
        <Link
          to= "/AboutMe"
          onMouseOver={() => setOverAboutMe(true)}
          onMouseLeave={() => setOverAboutMe(false)}
        >
          <FontAwesomeIcon
            icon={faUser}
            size="2xl"
            style={overAboutMe ? { color: "var(--darkerRed)" } : { color: "var(--red)" }}
          />
        </Link>
      </li>
      <li>
        <Link
          to="/ContactMe"
          onMouseOver={() => setOverContactMe(true)}
          onMouseLeave={() => setOverContactMe(false)}
        >
          <FontAwesomeIcon
            icon={faPhone}
            size="2xl"
            style={overContactMe ? { color: "var(--darkerRed)" } : { color: "var(--red)" }}
          />
        </Link>
      </li>
      <li>
        <Link
          to="/Resume"
          onMouseOver={() => setOverPortfolio(true)}
          onMouseLeave={() => setOverPortfolio(false)}
        >
          <FontAwesomeIcon
            icon={faFile}
            size="2xl"
            style={overPortfolio ? { color: "var(--darkerRed)" } : { color: "var(--red)" }}
          />
        </Link>
      </li>
      <li>
        <Link
          to="/Portfolio"
          onMouseOver={() => setOverResume(true)}
          onMouseLeave={() => setOverResume(false)}
        >
          <FontAwesomeIcon
            icon={faFolder}
            size="2xl"
            style={overResume ? { color: "var(--darkerRed)" } : { color: "var(--red)" }}
          />
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
