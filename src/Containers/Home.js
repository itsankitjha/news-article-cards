import React, { useEffect, useState } from "react";
import HomeView from "Views/Home";

const Home = () => {
  const [articles, setArtcles] = useState([]);
  const [toggleLoader, setToggleLoaders] = useEffect(false);
  useEffect(() => {
    ((async) => {
      await;
    })();
  }, []);

  return (
    <div>
      <HomeView />
    </div>
  );
};

export default Home;
