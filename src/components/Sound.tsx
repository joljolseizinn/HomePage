import React, { useState } from "react";
import styles from "./Sound.module.css";
import PlaySound from "use-sound";
import { Button ,Box ,Grid, TableBody} from "@material-ui/core";
import PlayIcon from "@material-ui/icons/PlayCircleFilled";
import PauseIcon from "@material-ui/icons/PauseCircleFilled";
import StopIcon from "@material-ui/icons/Stop";
import Sound from "../sounds/miku.wav";
import SE_A from "../sounds/CatSe.mp3";
import BGM_A from "../sounds/kokouno.mp3";
import SE_B from "../sounds/decision.mp3";
import SE_C from "../sounds/item.mp3";
import BGM_B from "../sounds/labyrinth.mp3";
import BGM_C from "../sounds/stage.mp3";

const SoundPage: React.FC = () => {
  const [mikuPlay, { stop: stopMiku }] = PlaySound(Sound, { volume: 1 });
  const [SE_APlay, { stop: stopSE_A }] = PlaySound(SE_A, { volume: 1 });
  const [SE_BPlay, { stop: stopSE_B }] = PlaySound(SE_B, { volume: 1 });
  const [SE_CPlay, { stop: stopSE_C }] = PlaySound(SE_C, { volume: 1 });
  const [BGM_APlay, { stop: stopBGM_A }] = PlaySound(BGM_A, { volume: 0.8 });
  const [BGM_BPlay, { stop: stopBGM_B }] = PlaySound(BGM_B, { volume: 0.8 });
  const [BGM_CPlay, { stop: stopBGM_C }] = PlaySound(BGM_C, { volume: 0.8 });

  const [PlaySE_A, setPlaySE_A] = useState(false);
  const SE_APlayer = () => {
    if (!PlaySE_A) {
      SE_APlay();
    } else {
      stopSE_A();
    }
  };

  const [PlaySE_B, setPlaySE_B] = useState(false);
  const SE_BPlayer = () => {
    if (!PlaySE_B) {
      SE_BPlay();
    } else {
      stopSE_B();
    }
  };

  const [PlaySE_C, setPlaySE_C] = useState(false);
  const SE_CPlayer = () => {
    if (!PlaySE_C) {
      SE_CPlay();
    } else {
      stopSE_C();
    }
  };

  const [PlayBGM_A, setPlayBGM_A] = useState(false);
  const BGM_APlayer = () => {
    if (!PlayBGM_A) {
      BGM_APlay();
    } else {
      stopBGM_A();
    }
  };

  const [PlayBGM_B, setPlayBGM_B] = useState(false);
  const BGM_BPlayer = () => {
    if (!PlayBGM_B) {
      BGM_BPlay();
    } else {
      stopBGM_B();
    }
  };

  const [PlayBGM_C, setPlayBGM_C] = useState(false);
  const BGM_CPlayer = () => {
    if (!PlayBGM_C) {
      BGM_CPlay();
    } else {
      stopBGM_C();
    }
  };

  const [PlayMiku, setPlayMiku] = useState(false);
  const MikuPlayer = () => {
    if (!PlayMiku) {
      mikuPlay();
    } else {
      stopMiku();
    }
  };

  return (
    <>
      <Grid container alignItems='center' justifyContent='center' direction="column">
        <p>
          ゲーム中に流れるBGMやSEを作成する役職です。
          音楽の知識が無い方でも少しの基礎を学べば曲を作ることが可能です！
        </p>
        <Box pt={3}>
          <table className={styles.table}>
            <tr>
              <th>効果音</th>
              <th>BGM</th>
              <th>ボカロ</th>
            </tr>
            <tr>
              <td>
                <Button
                  //className={styles.SE}
                  variant="contained" 
                  style={{backgroundColor: "#fef263",}}
                  onClick={() => (setPlaySE_A(!PlaySE_A), SE_APlayer())}
                >
                  効果音サンプルA
                  {PlaySE_A ? <StopIcon /> : <PlayIcon />}
                </Button>
              </td>
              <td>
                <Button
                  //className={styles.BGM}
                  variant="contained" color="primary"
                  onClick={() => (setPlayBGM_A(!PlayBGM_A), BGM_APlayer())}
                >
                  BGMサンプルA
                  {PlayBGM_A ? <StopIcon /> : <PlayIcon />}
                </Button>
              </td>
              <td>
                <Button
                  //className={styles.Miku}
                  variant="contained" style={{backgroundColor: "#bbc8e6",}}
                  onClick={() => (setPlayMiku(!PlayMiku), MikuPlayer())}
                >
                  初音ミクサンプル
                  {PlayMiku ? <StopIcon /> : <PlayIcon />}
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button
                  //className={styles.SE}
                  variant="contained" style={{backgroundColor: "#fef263",}}
                  onClick={() => (setPlaySE_B(!PlaySE_B), SE_BPlayer())}
                >
                  効果音サンプルB
                  {PlaySE_B ? <StopIcon /> : <PlayIcon />}
                </Button>
              </td>
              <td>
                <Button
                  //className={styles.BGM}
                  variant="contained" color="primary"
                  onClick={() => (setPlayBGM_B(!PlayBGM_B), BGM_BPlayer())}
                >
                  BGMサンプルB
                  {PlayBGM_B ? <StopIcon /> : <PlayIcon />}
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button
                  //className={styles.SE}
                  variant="contained" style={{backgroundColor: "#fef263",}}
                  onClick={() => (setPlaySE_C(!PlaySE_C), SE_CPlayer())}
                >
                  効果音サンプルC
                  {PlaySE_C ? <StopIcon /> : <PlayIcon />}
                </Button>
              </td>
              <td>
                <Button
                  //className={styles.BGM}
                  variant="contained" color="primary"
                  onClick={() => (setPlayBGM_C(!PlayBGM_C), BGM_CPlayer())}
                >
                  BGMサンプルC
                  {PlayBGM_C ? <StopIcon /> : <PlayIcon />}
                </Button>
              </td>
            </tr>
          </table>
        </Box>
      </Grid>
    </>
  );
};

export default SoundPage;
