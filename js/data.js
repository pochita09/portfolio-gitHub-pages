/* サイト共通データ — テキスト・ツール情報はここだけ編集する */

const SITE = {
  name: 'Akihiro Takahashi',
  tagline: '現場の業務課題をAIで解決する',
  intro1: 'Claude をはじめとするAIを活用し、業務の無駄を削る小さなツールを作っています。',
  intro2: 'バイブコーディングで、アイデアをすばやくカタチに。',
  about: '現場のヒアリングから、業務の無駄を見つけ、AIツールで解決します。実際の仕事の流れと関係部署の声をもとに、本当に必要なものだけを素早く形にします。',
  email: 'your@email.com',
};

const TOOLS = [
  /* ===== 代表ツール（featured: true） ===== */
  {
    id: 'tool-1',
    featured: true,
    href: 'tools/tool-report-agent.html',
    thumb: null,
    thumbImg: 'https://img.youtube.com/vi/Ykko1A4yw2c/hqdefault.jpg',
    name: '現場報告書作成ツール',
    category: '現場 / 報告書',
    description: '画像とExcelファイルを添付するだけで現場報告書を数十秒で自動作成します。',
    /* 個別ページ用データ */
    points: [
      { label: '作成時間', value: '30分 → 数十秒' },
      { label: '対象業務', value: '現場系の報告業務' },
      { label: '入力方法', value: '写真を添付するだけ' },
    ],
    before: '現場から戻るたびに、写真を見返しながら手入力で報告書を作成。1件あたり30分以上かかることも。',
    after: 'スマホで写真を撮ってAIに送るだけ。報告書の下書きが数十秒で完成し、確認・送付するだけでよくなる。',
    steps: [
      '現場で写真を撮影する',
      'ツールに写真を送信する',
      '生成された報告書を確認して送付する',
    ],
    background: '現場担当者が毎日1時間近く報告書作成に費やしていると聞き、「写真さえあれば内容は書けるのでは」と考えて作りました。',
    tech: ['画像解析AI', '文書生成AI', 'Gemini API', 'バイブコーディング'],
  },
  {
    id: 'tool-2',
    featured: true,
    href: 'tools/tool-qa-agent.html',
    thumb: null,
    thumbImg: 'https://img.youtube.com/vi/m-RAh11qkL4/hqdefault.jpg',
    name: '育休制度サポートAI（RAG）',
    category: '人事 / 制度',
    description: '社内規程をもとに、育休制度の疑問にAIがリアルタイムで答えます。',
  },
  {
    id: 'tool-3',
    featured: true,
    href: 'tools/tool-osint-agent.html',
    thumb: null,
    thumbImg: 'images/mosaic_image.png',
    name: '情報収集エージェント',
    category: '情報収集',
    description: '大量のRSSフィードから重要な記事だけを自動で抽出し、要約して届けます。',
  },
  {
    id: 'tool-6',
    featured: true,
    href: 'tools/tool-obsidian-gmail.html',
    thumb: null,
    thumbImg: 'images/obsidian-ai-demo.jpg',
    name: 'Obsidian連携で育てるAI社員',
    category: '業務基盤 / AI社員',
    description: 'Obsidianのノートを“自分の脳”にして、自分の代わりに動くAI社員を育てます。',
  },
  {
    id: 'tool-5',
    featured: false,
    href: 'tools/tool-code-review.html',
    thumb: null,
    thumbImg: 'images/review-demo.png',
    name: 'コード・セキュリティレビュー体制',
    category: '開発支援 / コードレビュー',
    description: '自作スラッシュコマンド3本と公式 /security-review で、セキュリティ・コスト・データ・ロジックの4領域をチェックします。',
  },
];
