import React from "react";
import "./SoundPage.module.css";
import PlaySound from "use-sound";
import Sound from "../sounds/miku.wav";
import CatSE from "../sounds/CatSe.mp3";
import Kokouno from "../sounds/kokouno.mp3";

const SoundPage: React.FC = () => {
  const [mikuPlay] = PlaySound(Sound, { volume: 1 });
  const [SE_CatPlay] = PlaySound(CatSE, { volume: 1 });
  const [KokoPlay] = PlaySound(Kokouno, { volume: 1 });

  return (
    <div>
      ゲーム中に流れるBGMやSEを作成する役職です。
      音楽の知識が無い方でも少しの基礎を学べば曲を作ることが可能です！
      <div>
        <table>
          <tr>
            <th>効果音</th>
            <th>BGM</th>
            <th>ボカロ</th>
          </tr>
          <tr>
            <td>
              <>
                <button onClick={() => SE_CatPlay()}>効果音サンプルA</button>
              </>
            </td>
            <td>
              <>
                <button onClick={() => KokoPlay()}>BGMサンプルA</button>
              </>
            </td>
            <td>
              <>
                <button onClick={() => mikuPlay()}>初音ミクサンプル</button>
              </>
            </td>
          </tr>
          <tr></tr>
        </table>
      </div>
    </div>
  );
};
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
