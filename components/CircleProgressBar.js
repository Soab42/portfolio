<<<<<<< HEAD
import React, { useEffect, useRef, useState } from "react";

export default function CircleProgressBar(props) {
  const [index, setIndex] = useState(0);
  const { name, skill, icon } = props.skill;
  const [status, setStatus] = useState(0);
  const [statusColor, setStatusColor] = useState("#69cddf89");
  const [isVisible, setIsVisible] = useState();
  const slideInRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        entry.isIntersecting && observer.unobserve(slideInRef.current);
      },
      {
        threshold: 0.5,
      }
    );

    // console.log(observer);
    observer.observe(slideInRef.current);

    return () => observer.unobserve(slideInRef.current);
  }, [isVisible]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (index < skill) {
        isVisible && setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 5);

    return () => {
      clearInterval(interval);
    };
  }, [index, skill, isVisible]);

  useEffect(() => {
    if (index < 65) {
      setStatus(0);
      setStatusColor("#69cddf89");
    } else if (index < 80) {
      setStatus(123);
      setStatusColor("#ee725cbf");
    } else if (index <= 100) {
      setStatus(240);
      setStatusColor("#590a7489");
    }
  }, [index]);

  return (
    <div
      style={{
        display: "flex",
        color: "black",
        flexDirection: "column",
        transition: "all .5s",
      }}
      ref={slideInRef}
    >
      <div
        className="portion"
        style={{
          background: `conic-gradient(${statusColor} ${
            index * 3.6
          }deg, transparent 0deg)`,
          transition: "all 1s",
        }}
      >
        <div className="content-skill">
          <span>{icon}</span>
          <strong>{name.replace("_", " ")}</strong>
        </div>
      </div>
      <span
        className="status"
        style={{
          background: statusColor,
          transition: "all 1s",
          overflow: "hidden",
          width: "150px",
          paddingLeft: "45px",
        }}
      >
        <div
          className="statusSkill"
          style={{ transform: `translateX(-${status}px)` }}
        >
          <div>Familiar</div>
          <div>Comfortable</div>
          <div>Expert</div>
        </div>
      </span>
    </div>
  );
}
=======
import React, { useEffect, useRef, useState } from "react";

export default function CircleProgressBar(props) {
  const [index, setIndex] = useState(0);
  const { name, skill, icon } = props.skill;
  const [status, setStatus] = useState(0);
  const [statusColor, setStatusColor] = useState("#69cddf89");
  const [isVisible, setIsVisible] = useState();
  const slideInRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        entry.isIntersecting && observer.unobserve(slideInRef.current);
      },
      {
        threshold: 0.5,
      }
    );

    // console.log(observer);
    observer.observe(slideInRef.current);

    return () => observer.unobserve(slideInRef.current);
  }, [isVisible]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (index < skill) {
        isVisible && setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 5);

    return () => {
      clearInterval(interval);
    };
  }, [index, skill, isVisible]);

  useEffect(() => {
    if (index < 65) {
      setStatus(0);
      setStatusColor("#69cddf89");
    } else if (index < 80) {
      setStatus(123);
      setStatusColor("#ee725cbf");
    } else if (index <= 100) {
      setStatus(240);
      setStatusColor("#590a7489");
    }
  }, [index]);

  return (
    <div
      style={{
        display: "flex",
        color: "black",
        flexDirection: "column",
        transition: "all .5s",
      }}
      ref={slideInRef}
    >
      <div
        className="portion"
        style={{
          background: `conic-gradient(${statusColor} ${
            index * 3.6
          }deg, transparent 0deg)`,
          transition: "all 1s",
        }}
      >
        <div className="content-skill">
          <span>{icon}</span>
          <strong>{name.replace("_", " ")}</strong>
        </div>
      </div>
      <span
        className="status"
        style={{
          background: statusColor,
          transition: "all 1s",
          overflow: "hidden",
          width: "150px",
          paddingLeft: "45px",
        }}
      >
        <div
          className="statusSkill"
          style={{ transform: `translateX(-${status}px)` }}
        >
          <div>Familiar</div>
          <div>Comfortable</div>
          <div>Expert</div>
        </div>
      </span>
    </div>
  );
}
>>>>>>> 41aacb10138a7bc96d479eebc451410c1dd06ab7
