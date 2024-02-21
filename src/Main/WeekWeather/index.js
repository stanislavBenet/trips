import React, { useEffect, useState } from "react";
import styles from "./WeekWeather.module.css";
import Weather from "../../store/Weather";
import { observer } from "mobx-react-lite";
import { reaction } from "mobx";
import { getDayOfWeek } from "../../utils/utils";

const WeekWeather = observer(() => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    Weather.fetchTripsWeather();

    const weatherReaction = reaction(
      () => Weather.weather,
      (weatherData) => {
        setWeather(weatherData);
      }
    );
    return () => {
      weatherReaction();
    };
  }, [Weather.activeTrip]);

  if (!weather || !weather.days) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2>Week</h2>
      <section className={styles.container}>
        {weather.days.map((i, index) => {
          return (
            <article key={index} className={styles.card}>
              <h3>{getDayOfWeek(i.datetime)}</h3>
              <img
                width="40px"
                src={`weathericons/${i.icon}.png`}
                alt={i.icon}
              />
              <p>
                {Math.round(i.tempmax)}°/{Math.round(i.tempmin)}°
              </p>
            </article>
          );
        })}
      </section>
    </>
  );
});

export default WeekWeather;
