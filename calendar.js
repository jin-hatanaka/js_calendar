const date = new Date();
const year = date.getFullYear();

const optionError = (month) => {
  console.error(`${month} is neither a month number (1..12) nor a name`);
  process.exit(1);
};

const option = (argv) => {
  const num = Number(argv);

  // -mの引数が整数でなければエラーを表示
  if (!Number.isInteger(num)) {
    optionError(argv);
  }

  // -mの引数が不正な月(1月〜12月以外)であればエラーを表示
  if (num < 1 || 12 < num) {
    optionError(num);
  }

  return num - 1;
};

const month = process.argv[3] === undefined ? date.getMonth() : option(process.argv[3]);

// 指定した月の1日と最終日を取得
const firstDay = new Date(year, month, 1);
const lastDay = new Date(year, month + 1, 0);
// 1 = 日, 2 = 月, ..., 7 = 土 に変換
let dayOfWeek = firstDay.getDay() + 1;

// カレンダーのヘッダーを表示
console.log(`      ${month + 1}月 ${year}    `);
console.log('日 月 火 水 木 金 土');

let calendar = '';

// 1日までの位置を揃えるようにスペースを表示
calendar += '   '.repeat(dayOfWeek - 1);

for (let date = 1; date <= lastDay.getDate(); date++) {
  // 2桁右詰め
  calendar += String(date).padStart(2, ' ') + ' ';

  // 土曜日で改行
  if (dayOfWeek % 7 === 0) {
    calendar += '\n';
  }

  dayOfWeek++;
}

console.log(calendar);
