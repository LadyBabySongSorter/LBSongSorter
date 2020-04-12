// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'img/';
// 0:順番に　1:昔の
var bln_ResultMode = 1;
// 0:テキスト　1:イラスト　2:テキスト＋イラスト
var int_ResultImg = 2;
// イラスト表示時、何位までをイラスト表示にするか。
var int_ResultRank = 3;

// ソート用のテーブルを
// 0:残す　1:消す
var bln_ResultStyle = 0;

// ソート進捗バーの表示
// 0:表示　1:消す
var bln_ProgessBar = 1;

// Maximum number of result rows before being broken off into another table.
var maxRows = 20;

// * タイトル情報（編集可能。最後の行に”,”を付けないようにしてください）
var int_Colspan = 4;
var ary_TitleData = [
  "LADYBABY",
  "TIFKA LADYBABY",
  "LADYBABY 4 ",
  "BRATS" 
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）, 
//   "タイトルID"（先頭から0, 1, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）h"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
  [1, "OVERTURE OVERSEA",           [1,0,0,0], "bmsong/og_image.jpg"],
  [1, "Nippon Manju",               [1,0,0,0], "bmsong/og_image.jpg"],
  [1, "Renge CHANCE!",              [1,0,0,0], "bmsong/og_image.jpg"],
  [1, "Beardchan Robot",            [1,0,0,0], "bmsong/og_image.jpg"],
  [1, "ULTRA☆LUCKY",                [1,0,0,0], "bmsong/og_image.jpg"],
  [1, "C'est Si Bon Kibun",         [1,0,0,0], "bmsong/og_image.jpg"],
  [1, "SCHOOL OF HARD KNOCKS",      [1,0,0,0], "bmsong/og_image.jpg"],
  [1, "Ageage MONEY",               [1,0,0,0], "bmsong/og_image.jpg"],
  [1, "Love Innocent Acid Kawaii",  [1,0,0,0], "bmsong/og_image.jpg"],
  
   [1, "Pelo",                      [0,1,0,0], "bmsong/TIFKALB.jpg"],
  [1, "Me! Me! Me!",                [0,1,0,0], "bmsong/TIFKALB.jpg"],
  [1, "Sanpai! Goshuin girl☆",      [0,1,0,0], "bmsong/TIFKALB.jpg"],
  [1, "Easter Bunny",               [0,1,0,0], "bmsong/TIFKALB.jpg"],
  [1, "Generation Hard Knocks",     [0,1,0,0], "bmsong/TIFKALB.jpg"],
  [1, "Onigiric Reviver ",          [0,1,0,0], "bmsong/TIFKALB.jpg"],
  [1, "Shibuya CROSSING",           [0,1,0,0], "bmsong/TIFKALB.jpg"],
  [1, "Shan Shan Shantan",          [0,1,0,0], "bmsong/TIFKALB.jpg"],
  [1, "Pinky! Pinky!",              [0,1,0,0], "bmsong/TIFKALB.jpg"],
  [1, "LADY BABY BLUE",             [0,1,0,0], "bmsong/TIFKALB.jpg"],
 
  [1, "Hoshi no Nai Sora",          [0,0,1,0], "bmsong/lb4.jpg"],
  [1, "bite me",                    [0,0,1,0], "bmsong/lb4.jpg"],
  [1, "Biribiri Money",             [0,0,1,0], "bmsong/lb4.jpg"],
  [1, "Dame Dame Tono",             [0,0,1,0], "bmsong/damedametono.jpg"],
  [1, "Riot Anthem",                [0,0,1,0], "bmsong/riotanthem.jpg"],
  [1, "Haten ni Raimei",            [0,0,1,0], "bmsong/LB4-2.jpg"],
  [1, "God’s Not",                  [0,0,1,0], "bmsong/LB4-2.jpg"],
  [1, "LB4 Future",                 [0,0,1,0], "bmsong/LB4-2.jpg"],
  [1, "Endless end hello",          [0,0,1,0], "bmsong/lb4.jpg"],
  [1, "Misogi Island",              [0,0,1,0], "bmsong/lb4.jpg"],
  [1, "Reburn",                     [0,0,1,0], "bmsong/lb4.jpg"],
  
  
  [1, "Pain",                       [0,0,0,1], "bmsong/BRATS.jpg"],
  [1, "Kaihou Seyo",                [0,0,0,1], "bmsong/BRATS.jpg"],
  [1, "Doudatte Yokatta",           [0,0,0,1], "bmsong/BRATS.jpg"],
  [1, "Unfair",                     [0,0,0,1], "bmsong/unfair.jpg"],  
  [1, "Lost Place",                 [0,0,0,1], "bmsong/BRATS.jpg"],
  [1, "Kimarigoto",                 [0,0,0,1], "bmsong/BRATS.jpg"],  
  [1, "Big Bad World",              [0,0,0,1], "bmsong/BRATS.jpg"],
  [1, "Seitouka Pride Monster",     [0,0,0,1], "bmsong/BRATS.jpg"],
  [1, "Nonai Shokyo Game",          [0,0,0,1], "bmsong/BRATS.jpg"],
  [1, "Ainikoiyo",                  [0,0,0,1], "bmsong/BRATS.jpg"],
  [1, "Nakattakoto",                [0,0,0,1], "bmsong/BRATS.jpg"],
  [1, "14 Year old disease",        [0,0,0,1], "bmsong/14yearolddisease.png"],  
  [1, "Misery",                     [0,0,0,1], "bmsong/Misery.jpg"],
  [1, "Excuser",                    [0,0,0,1], "bmsong/excuser.jpg"],  
  [1, "No more No more",            [0,0,0,1], "bmsong/nomorenomore.jpg"],
  [1, "Ms.Downer",                  [0,0,0,1], "bmsong/msdowner.jpg"],
  [1, "Gan Gan Do It!",             [0,0,0,1], "bmsong/gangandoit.jpg"],
  
  
];
