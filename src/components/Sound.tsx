import React from "react";
import "./SoundPage.module.css";
import PlaySound from "use-sound";
import Sound from "../sounds/miku.wav";
import SE_A from "../sounds/CatSe.mp3";
import BGM_A from "../sounds/kokouno.mp3";
import SE_B from "../sounds/decision.mp3";
import SE_C from "../sounds/item.mp3";
import BGM_B from "../sounds/labyrinth.mp3";
import BGM_C from "../sounds/stage.mp3";

const SoundPage: React.FC = () => {
  const [mikuPlay] = PlaySound(Sound, { volume: 1 });
  const [SE_APlay] = PlaySound(SE_A, { volume: 1 });
  const [SE_BPlay] = PlaySound(SE_B, { volume: 1 });
  const [SE_CPlay] = PlaySound(SE_C, { volume: 1 });
  const [BGM_APlay] = PlaySound(BGM_A, { volume: 0.8 });
  const [BGM_BPlay] = PlaySound(BGM_B, { volume: 0.8 });
  const [BGM_CPlay] = PlaySound(BGM_C, { volume: 0.8 });

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
                <button onClick={() => SE_APlay()}>効果音サンプルA</button>
              </>
            </td>
            <td>
              <>
                <button onClick={() => BGM_APlay()}>BGMサンプルA</button>
              </>
            </td>
            <td>
              <>
                <button onClick={() => mikuPlay()}>初音ミクサンプル</button>
              </>
            </td>
          </tr>
          <tr>
            <td>
              <>
                <button onClick={() => SE_BPlay()}>効果音サンプルB</button>
              </>
            </td>
            <td>
              <>
                <button onClick={() => BGM_BPlay()}>BGMサンプルB</button>
              </>
            </td>
          </tr>
          <tr>
            <td>
              <>
                <button onClick={() => SE_CPlay()}>効果音サンプルC</button>
              </>
            </td>
            <td>
              <>
                <button onClick={() => BGM_CPlay()}>BGMサンプルC</button>
              </>
            </td>
          </tr>
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
