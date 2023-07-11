import React from "react";
import PlaySound from "react-sound";
import { useState, useEffect } from "react";

const SoundPage: React.FC = () => {
  const [play, { stop, pause }] = PlaySound("../sounds/miku.mp3");

  return (
    <div>
      ゲーム中に流れるBGMやSEを作成する役職です。
      音楽の知識が無い方でも少しの基礎を学べば曲を作ることが可能です！
      <div>
        <>
          <button onClick={() => play()}>音を鳴らす</button>
          <button onClick={() => stop()}>停止</button>
          <button onClick={() => pause()}>ポーズ</button>
        </>
      </div>
    </div>
  );
};
/*
export const RisingPitch = () => {
  const [playbackRate, setPlaybackRate] = React.useState(0.75);

  const [play] = PlaySound("../sounds/miku.wav", {
    playbackRate,
    // `interrupt` ensures that if the sound starts again before it's
    // ended, it will truncate it. Otherwise, the sound can overlap.
    interrupt: true,
  });

  const handleClick = () => {
    setPlaybackRate(playbackRate + 0.1);
    play();
  };

  return (
    <button onClick={handleClick}>
      <span role="img" aria-label="Person with lines near mouth">
        🗣
      </span>
    </button>
  );
};
*/
/*
const soundPlay:React.FC = () => {
  const [play, { stop, pause }] = PlaySound('../sounds/mikumiku.wav');

  return (
    <>
      <button onClick={() => play()}>音を鳴らす</button>
      <button onClick={() => stop()}>停止</button>
      <button onClick={() => pause()}>ポーズ</button>
    </>
  );
}
*/

export default SoundPage;
