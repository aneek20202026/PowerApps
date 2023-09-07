import React, { useEffect, useRef } from 'react';
import '../design/home.css';

function Home() {
  const cubeRef = useRef(null);

  useEffect(() => {
    const cube = cubeRef.current;
    let rotation = 0;

    const animate = () => {
      rotation += 0.01;
      cube.style.transform = `rotateX(${rotation}deg) rotateY(${rotation}deg)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="CubeApp">
      <div className="cube" ref={cubeRef}>
        <div className="face front">
          <div className="ups">
            <div className="box1">one</div>
            <div className="box2">two</div>
            <div className="box3">three</div>
          </div>
          <div className="mid">
            <div className="box1">one</div>
            <div className="box2">two</div>
            <div className="box3">three</div>
          </div>
          <div className="low">
            <div className="box1">one</div>
            <div className="box2">two</div>
            <div className="box3">three</div>
          </div>
        </div>
        <div className="face back">
          <div className="ups">
            <div className="box1">one</div>
            <div className="box2">two</div>
            <div className="box3">three</div>
          </div>
          <div className="mid">
            <div className="box1">one</div>
            <div className="box2">two</div>
            <div className="box3">three</div>
          </div>
          <div className="low">
            <div className="box1">one</div>
            <div className="box2">two</div>
            <div className="box3">three</div>
          </div>
        </div>
        <div className="face lefts">
          <div className="ups">
            <div className="box1">one</div>
            <div className="box2">two</div>
            <div className="box3">three</div>
          </div>
          <div className="mid">
            <div className="box1">one</div>
            <div className="box2">two</div>
            <div className="box3">three</div>
          </div>
          <div className="low">
            <div className="box1">one</div>
            <div className="box2">two</div>
            <div className="box3">three</div>
          </div>
        </div>
        <div className="face rights">
          <div className="ups">
            <div className="box1">one</div>
            <div className="box2">two</div>
            <div className="box3">three</div>
          </div>
          <div className="mid">
            <div className="box1">one</div>
            <div className="box2">two</div>
            <div className="box3">three</div>
          </div>
          <div className="low">
            <div className="box1">one</div>
            <div className="box2">two</div>
            <div className="box3">three</div>
          </div>
        </div>
        <div className="face top">
          <div className="ups">
            <div className="box1">one</div>
            <div className="box2">two</div>
            <div className="box3">three</div>
          </div>
          <div className="mid">
            <div className="box1">one</div>
            <div className="box2">two</div>
            <div className="box3">three</div>
          </div>
          <div className="low">
            <div className="box1">one</div>
            <div className="box2">two</div>
            <div className="box3">three</div>
          </div>
        </div>
        <div className="face bottom">
          <div className="ups">
            <div className="box1">one</div>
            <div className="box2">two</div>
            <div className="box3">three</div>
          </div>
          <div className="mid">
            <div className="box1">one</div>
            <div className="box2">two</div>
            <div className="box3">three</div>
          </div>
          <div className="low">
            <div className="box1">one</div>
            <div className="box2">two</div>
            <div className="box3">three</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;