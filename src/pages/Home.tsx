import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>메인</p>
      <Link to="/login">Sign In</Link>
    </div>
  );
};

export default Home;
