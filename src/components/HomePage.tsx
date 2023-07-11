import { Twitter } from "@material-ui/icons";
import { SvgIcon } from "@material-ui/core";
import styles from "./HomePage.module.css";
import { blue } from "@material-ui/core/colors";
const HomePage: React.FC = () => {
  return (
    <div>
      <div >
        <div className={styles.Home}>
        <p className={styles.Top}>
          我々コンピュータ部はゲームアプリケーションをチーム制作する団体です。
        </p>
        </div>
        <div className={styles.Body}>
        <p>主に9月の東京ゲームショウ、10月の翔風祭に向けての制作を行っております。</p>
        <p>それ以外にもGameJamへの参加、学内で行われるソフトウェアコンテストへの応募など積極的に取り組んでおります。
        </p>
        <p>
          製作するゲームのジャンルは文化祭用ということもあり、簡単なアクション・パズル・クイズなど誰でも簡単に遊べるようなものが中心となります。
        </p>
        <p>ゲーム制作に経験は必要ありません！ヤル気があれば経験不問！！</p>
        <p>ゲーム制作に携わってみたい、何かを作ってみたい、何かを始めてみたい…</p>
        <p>そんな方はどうぞ部室へ見学にお越しください。</p>
        </div>
      </div>
      <footer>
        <a className={styles.twitter} href="https://twitter.com/tuis_computer">
          <Twitter color="primary" fontSize="large"></Twitter>
        </a>
      </footer>
    </div>
  );
};

export default HomePage;
