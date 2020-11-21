
// 日付  //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

const youbi = ["日","月","火","水","木","金","土"];
    
const date1 = new Date();
const date2 = date1.getFullYear() + "." + 
            (date1.getMonth() + 1)  + "." + 
            date1.getDate() +
            "("+ youbi[date1.getDay()] + ") " + // 0は日～6は土
            ("00" + (date1.getHours())).slice(-2) + ":" + 
            ("00" + (date1.getMinutes())).slice(-2); 
// console.log(date2); 
// 2020.11.21(土))20:36

const date3 = date1.getFullYear()  + 
            ("00" + (date1.getMonth() + 1)).slice(-2)  + 
            ("/" + ("00" + (date1.getDate())).slice(-2)) +
            ("/" + ("00" + (date1.getHours())).slice(-2)) +
            (":" + ("00" + (date1.getMinutes())).slice(-2)) ; 
// console.log(date3); 
$(".date").html(date2);
// 20200201


//ハンバーガー　//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

function hamburger() {
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('nav').classList.toggle('in');
  }
  document.getElementById('hamburger').addEventListener('click' , function () {
    hamburger();
} );


//折りたたむ　//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

$("#save").on("click", function textup(){
    $("#text_container").slideUp( [500] );
});

$(".date").on("dblclick", function textup(){
   $("#text_container").slideDown( [500] );
});


//データ取得、保存、表示    　//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

    //1.Save クリックイベント
    $("#save").on("click", function () {

    // val()で値を取得する
    const key = $("#title").val();
    const tx = $("#text").val();
    var value = { 'v1': tx, 'v2': date3 }

    // html側で入力されたデータを取得して確認
    console.log(key)
    console.log(value)
    // console.log(date3)


    // データを保存する
    localStorage.setItem(key, value); //一覧表示に追加
    // const html = `<li><span>${key}</span><span>${value}</span></li>`
    // const html = `<li><span>${key}</span><span>${value}</span></li>`
   
    const vdata = localStorage.getItem(value);
    // textElement = document.createTextNode('' + vdata);
    const datelist =`<li><a href="#">${date3}</a></li>`


    // $("#catch").append(html);
    $("#catch").append(datelist);



});

    //2.clear クリックイベント
    $("#clear").on('click', function () {
        // 保存されたデータ（localStorage）を消す
        localStorage.clear();

        //id="list"を削除する
        $("#title").val("");
        $("#text").val("");
    });