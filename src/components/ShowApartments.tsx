import { useState, useEffect } from "react";
import apartments from "../Postgresql/apartments.json";
import ApartmentContainer from "./ApartmentContainer";
import Pagination from "./Pagination";
import "./style/pagination.css";

interface Apartment {
  name: string;
  images: string[];
}

function ShowApartments(): JSX.Element {
  const [data, setData] = useState<Apartment[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  useEffect(() => {
    setData(apartments);
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = data.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="wrapper">
      <Pagination
        totalPosts={data.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
      {currentPost.map((apart) => (
        <ApartmentContainer
          key={apart.name}
          image={apart.images[1]}
          name={apart.name}
        />
      ))}
    </div>
  );
}

export default ShowApartments;
