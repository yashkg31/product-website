import { useParams } from "react-router-dom";

const Irrulas500 = () => {
  const params = useParams();
  return (
    <div>
      <h1>Page of {params.model}</h1>
    </div>
  );
};

export default Irrulas500;