import { WorksInfo } from './WorkInfoTemplate';

import github from './images/GitHub.png';
import lineMain from './images/lineMain.png';
import lineImage from './images/lineimage.png';
import linesample from './images/linesample.png';
import portMain from './images/portMain.png';
import portSmall from './images/portSmall.png';
import portTop from './images/portTop.png';



export const Line = () => (
    <WorksInfo
        url="line"
        title="LINEAPIを用いたアルバイトのシフト集計サービス"
        image1={lineMain}
        image2={lineImage}
        image3={linesample}
        text={<>
            自身のアルバイト経験からシフト管理の形に課題を感じ、シフト希望を集め処理しやすい形で出力するサービスを作りました。<br />
            現在は、被雇用者がLINEアカウントにシフト希望を送信し、雇用者向けサイトにログインすることでその内容をエクセルファイルでダウンロードすることが出来ます。<br />
            継続的に開発を続けていてシフト調整を最適化問題と考え、入力されたデータを元にシフト案を生成することなどを考えています。<br />
            pythonで開発をしていて、LINEAPIを利用しています。デプロイにはHerokuを使用し、データベースも設けています。その他コードに関するこだわった点などはぜひお聞きください。
        </>}
        link={<a href="https://young-fjord-07670.herokuapp.com/" target="_blank" rel="noopener noreferrer">DEMOサイト</a>}
        githubIcon={github}
        githubLink="https://github.com/userbio/job_app"
    />
)

export const Portfolio = () => (
    <WorksInfo
        url="portfolio"
        title="ポートフォリオサイト"
        image1={portMain}
        image2={portTop}
        image3={portSmall}
        text={<>
            現在ご覧になっているこのサイトです。自身の学習の成果をまとめる場として作成しました。<br />
            技術的な面からは、Reactを用いてSPAとして開発しました。CSSデザインにも挑戦し、ある程度見栄えのするものになるように学習しました。<br />
            コンポーネントの考え方やCSSなど、フロントエンドの難しい部分もありましたが良い経験になったと感じています。<br />
            トップの背景画像は、大学の写真部の活動で撮影した春の桜並木の写真です。
        </>}
        link={<a href="https://userbio.github.io/portfolio/" target="_blank" rel="noopener noreferrer">LINK</a>}
        githubIcon={github}
        githubLink="https://github.com/userbio/portfolio"
    />
)

export const IPA = () => (
    <WorksInfo
        url="IPA"
        title="IPA　応用情報技術者試験　合格"
        text={<>
            セキュリティ、ネットワークやシステムについて幅広く学びサービスの制作やこれからの学習において、高度IT人材としての複数の視点を得るために受験しました。<br />
            それに加えてアルゴリズムやハードウェアの基礎知識やチームでの開発、フロー、マネジメントなど非常に多くのことを学びました。<br />
            ここで身についたITに関する情報のキャッチアップの習慣は今でも続いています。<br />
            この学びから技術や考え方の選択肢が増え、利用する技術の選定など様々な観点から検討する姿勢が身に付きました。<br />
            また試験に向けた学習の後もセキュリティに関する学習会に参加したり自身でサーバーを立てるなど、積極的に学びの活動を続けています。
        </>}
        link={<a href="https://www.jitec.ipa.go.jp/" target="_blank" rel="noopener noreferrer">主催IPA HP</a>}
        githubIcon=""
        githubLink=""
    />
)

export const Hardening = () => (
    <WorksInfo
        url="hardening"
        title="Micro Hardening for Youth 2021 参加"
        text={<>
            ECサイトへのサイバー攻撃を想定し、実際にサーバーを守ることでセキュリティに関する貴重な実践経験を得ることの出来る競技会、学習会に参加しました。<br />
            実際にサーバーを運用し攻撃に対応するという失敗の経験は非常に得難いものです。またセキュリティインシデントが発生した場合のチームでの対応に挑戦し、セキュリティ知識とチーム活動力を試したかったという2点が参加の主な理由です。<br />
            <br />
            実際に攻撃が仕掛けられ対応を迫られる中で防衛を行うことで知識だけに留まらず、焦りや危機感の中で適切な対応をしなければならない貴重な経験が出来ました。<br />
            また参加者の中での即席のチームでの活動だったため、厳しい状況でもコミュニケーションやチームワークを意識して活動に参加しました。<br />
            <br />
            ※画像はイメージです。
        </>}
        link={<a href="https://sc4y.connpass.com/event/223405/#:~:text=Micro%20Hardening%20%E3%81%AF%E3%80%8C%E8%A1%9B%E3%82%8B,%E7%94%9F%E3%81%BE%E3%82%8C%E3%81%9F%E3%82%B5%E3%83%96%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%A7%E3%81%99%E3%80%82" target="_blank" rel="noopener noreferrer">MH4Y2021 HP</a>}
        githubIcon=""
        githubLink=""
    />
)

/*react-scrollのスクロール先として、classnameを持ったCSSModule外のボックスが必要
  CSSModuleではclassnameが置き換えられるため、スクロール先を指定できない */
export const Default = () => (
    <div className="workContentBox"></div>
)

