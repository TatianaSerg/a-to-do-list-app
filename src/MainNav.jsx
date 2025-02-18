import { Link } from "react-router-dom";
import './MainNav.css';
import allTasksImg from "./assets/all_tasks.webp";
import completedTaskImg from "./assets/completed.jpg";
import pendingTaskImg from "./assets/pending.jpg";

function MainNav() {
  return (
    <header>
      <div className="goodWifye">
        <h1>A good housewife to-do list</h1>
      </div>
      <nav className="navbar">
        <Link to="/">
          <button className="navButton">
            <img src={allTasksImg} alt="All" className="navImage" />
            All
          </button>
        </Link>
        <Link to="/completed">
          <button className="navButton">
            <img src={completedTaskImg} alt="Completed" className="navImage" />
            Completed
          </button>
        </Link>
        <Link to="/pending">
          <button className="navButton">
            <img src={pendingTaskImg} alt="Pending" className="navImage" />
            Pending
          </button>
        </Link>
      </nav>
    </header>
  );
}

export default MainNav;



