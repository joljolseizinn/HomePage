import styles from "./Program.module.css";
const ProgramPage: React.FC = () => {
    return (
        <div>
            <header>
                プログラマー
            </header>
            <div className={styles.ProBody}>
                ゲームの中心部分を作る役職です。グラフィッカーやサウンドコンポーザから渡された素材を制御、運用してゲームを形作る役職です。
	            基本的にはC/C++というプログラミング言語を使用しております。
		        経験者、初心者共に歓迎しておりますので「ゲームプログラミングをしたい」という志を持つ方、一緒に活動してみませんか？

                基本的にゲームプログラミング入門に最適なDXライブラリを使用してC言語でプログラミングを行います。
		        必要に応じてDirectXやOpenGLなどネイティブなものもいじります。
		        UnityやUnrealEngineを使ったゲーム制作も行っております。
		        iOS、Android端末向けのアプリケーションを作ることもあります。
            </div>
        </div>
    );
}
export default ProgramPage;