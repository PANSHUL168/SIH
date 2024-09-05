import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

function NavbarBoot() {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between p-4 fixed w-full top-0 bg-[#03173e]">
      <div className="logo text-3xl font-mono font-bold text-white                  ">Aluminati</div>
      <div className="links">
        <ul className="flex text-white gap-5">
          <li
            onClick={() => {
              navigate("/directory");
            }}
            className="cursor-pointer font-mono text-xl hover:scale-110"
          >
            Directory
          </li>
          <li
            onClick={() => {
              navigate("/forum");
            }}
            className="cursor-pointer font-mono text-xl hover:scale-110"
          >
            Forum
          </li>
          <li
            onClick={() => {
              navigate("/event");
            }}
            className="cursor-pointer font-mono text-xl hover:scale-110"
          >
            Event
          </li>
          <li
            onClick={() => {
              navigate("/job");
            }}
            className="cursor-pointer font-mono text-xl hover:scale-110"
          >
            Jobs
          </li>
          <li
            onClick={() => {
              navigate("/donation");
            }}
            className="cursor-pointer font-mono text-xl hover:scale-110"
          >
            Donation
          </li>
        </ul>
      </div>
      <div className="profile flex gap-3 items-center">
        <div className="profile-pic h-[35px] w-[35px] ">
          <CgProfile className="text-white h-full w-full" />
        </div>
        <h1 className="font-bold text-white font-mono text-xl">Hi, John</h1>
      </div>
    </nav>
  );
}

export default NavbarBoot;
