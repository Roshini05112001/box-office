import { useStarredShows } from "../lib/useStarredShows";

const Starred = () => {
  const [starredShows] = useStarredShows()

  return <div>Starredpage , starred {starredShows.length}</div>;
};

export default Starred;
