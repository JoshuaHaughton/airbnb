import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

const Search = ({ searchResults }) => {
  //Get queries from url
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header
        placeholder={`${location} | ${range} | ${numberOfGuests} ${numberOfGuests > 1 ? 'guests' : 'guest'}`}
      />

      <main className="flex">
        <section className="py-14 px-8 flex-grow">
          <p className="text-xs">
            300+ Stays - {range} - for {numberOfGuests} guest
            {numberOfGuests > 1 && `s`}
          </p>

          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in {location}
          </h1>

          <div className="hidden md:inline-flex space-x-3 py-5 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map(
              ({ img, title, location: locationData, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={locationData}
                  city={location}
                  title={title}
                  star={star}
                  description={description}
                  price={price}
                  total={total}
                />
              ),
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;

//Will run async functions and rebuild the page every time the user makes a request to /search , 
//Unlike getStaticProps which will only be rebuilt manually by the user
export async function getServerSideProps(context) {
  const searchResults = await fetch(
    "https://airbnb-32bf6-default-rtdb.firebaseio.com/searchData.json",
  ).then((res) => res.json());

  return {
    props: {
      searchResults,
    },
  };
}
