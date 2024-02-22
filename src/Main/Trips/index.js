import React, { useRef, useState } from "react";
import styles from "./Trips.module.css";
import Weather from "../../store/Weather";
import { observer } from "mobx-react-lite";
import classNames from "classnames";

const Trips = observer(() => {
  const [searchValue, setSearchValue] = useState("");
  const containerRef = useRef(null);
  const [isSorted, setIsSorted] = useState(false);

  const toggleModale = () => {
    Weather.handlerModalWindow();
  };

  const handleCard = (e) => {
    Weather.toggleCard(e.currentTarget.id);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSort = () => {
    setIsSorted(!isSorted);
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const sortedTrips = [...Weather.trips].sort((a, b) => {
    if (isSorted) {
      return new Date(a.start) - new Date(b.start);
    }
    return Weather.trips;
  });

  const filteredTrips = sortedTrips.filter(
    (trip) =>
      searchValue === "" ||
      trip.city.toLowerCase().includes(searchValue.toLowerCase())
  );

  const cardActive = classNames(styles.card, styles.cardActive);
  return (
    <div>
      <h1 className={styles.title}>
        <span className={styles.firstWord}>Weather</span> forecast
      </h1>
      <input
        className={styles.input}
        type="text"
        value={searchValue}
        onChange={handleSearch}
        placeholder="Search your trip"
      />
      <span className={styles.sort} onClick={handleSort}>
        {isSorted ? "Reset" : "Sort"}
      </span>
      {Weather.trips.length > 4 ? (
        <div className={styles.scrollButtons}>
          <button onClick={scrollLeft}>{"<"}</button>
          <button onClick={scrollRight}>{">"}</button>
        </div>
      ) : (
        ""
      )}
      <section ref={containerRef} className={styles.container}>
        {filteredTrips.map((trip, index) => {
          return (
            <article
              id={trip.id}
              onClick={handleCard}
              key={index}
              className={trip.isActive ? cardActive : styles.card}
            >
              <img src={`cities/${trip.city}.jpg`} alt={trip.city} />
              <h2>{trip.city}</h2>
              <p>
                {trip.start} - {trip.end}
              </p>
            </article>
          );
        })}

        <article onClick={toggleModale} className={styles.card}>
          <img src="cardAdd.png" alt="logoCardAdd"></img>
        </article>
      </section>
    </div>
  );
});

export default Trips;
