"use strict";
document.addEventListener("DOMContentLoaded", () => {

  (function() {
    // ------ 1. 使う要素を取得する ------
    const slider = document.querySelector(".slider-js");
    if (!slider) return;

    const slides = slider.querySelectorAll(".slide");
    const prevBtn = slider.querySelector(".slider-nav-prev");
    const nextBtn = slider.querySelector(".slider-nav-next");

    const interval = 4000;  // 何ミリ秒ごとに次へ進むか（4000 = 4秒）
    let current = 0;        // 今表示しているスライドの番号（0から数える）
    let timer;              // タイマーを止めるときに使う

    // ------ 2. 「n番目のスライドを表示する」関数 ------
    function show(n) {
      slides.forEach(function(slide, i) {
        slide.classList.toggle("active", i === n);
      });
      current = n;
    }

    // ------ 3. 「次のスライドへ」関数 ------
    function next() {
      const nextIndex = (current + 1) % slides.length;
      show(nextIndex);
    }

    // ------ 4. 「前のスライドへ」関数 ------
    function prev() {
      let prevIndex = current - 1;
      if (prevIndex < 0) prevIndex = slides.length - 1;
      show(prevIndex);
    }

    // ------ 5. タイマーを「開始」する関数 ------
    function startTimer() {
      timer = setInterval(next, interval);
    }

    // ------ 6. タイマーを「止める」関数 ------
    function stopTimer() {
      clearInterval(timer);
    }

    // ------ 7. 「次へ」ボタンが押されたとき ------
    if (nextBtn) {
      nextBtn.addEventListener("click", function() {
        stopTimer();
        next();
        startTimer();
      });
    }

    // ------ 8. 「前へ」ボタンが押されたとき ------
    if (prevBtn) {
      prevBtn.addEventListener("click", function() {
        stopTimer();
        prev();
        startTimer();
      });
    }

    // ------ 9. 最初に1枚目を表示して、タイマー開始 ------
    show(0);
    startTimer();
  })();

  //ハンバーガーメニュー
    $('.hum,.hum-close').on('click', function(){
      $('.nav_open').toggleClass('show');
      $('.hum').toggleClass('show-icons'); 
    });

    $('.nav_open a').on('click', function(){
      $('.nav_open').removeClass('show');
      $('.hum').removeClass('show-icons');
    });

  //To TOP
  const topBtn =document.getElementById('to_top');

  if(topBtn){
    window.addEventListener('scroll',() => {
      if (window.scrollY > 120){
        topBtn.classList.remove('hide')
      } else {
        topBtn.classList.add('hide')
      }
    });
  

    topBtn.addEventListener('click',() => {
      // console.log('OK')
      window.scrollTo({
        top:0,
        behavior:'smooth'
      });
    });
  }




  // MENUのJS
  let items = 
  [
    ['ソーキそば','1,200','~くせになるほど長時間煮込んだ軟骨ソーキ~'],
    ['ゆし豆腐そば','1,100','~香りと旨味が凝縮した島豆腐のトッピング~'],
    ['アーサそば','1,100','~沖縄の海でとれた新鮮なあおさをトッピング~'],
    ['三枚肉そば','1,100','~泡盛と醤油、砂糖で甘辛く煮込んだ豚の角煮~'],
    ['贅沢そば','1,300','~贅沢にソーキと三枚肉のダブルコンボ~'],
    ['まかないそば','1,200','~社員のまかないを商品化した裏メニュー~'],
  ];

  const thumbs =document.querySelectorAll('.thumb');
  if(thumbs.length > 0){
    thumbs.forEach(function (item,index) {
      item.onclick =function(){
        // console.log(items[index]);
        document.getElementById('bigimg').src = 'images/menu_'+ this.dataset.image;
        document.getElementById('name').textContent = items[index][0];
        document.getElementById('price').textContent = items[index][1];
        document.getElementById('description').textContent = items[index][2];

      }  
    });
  }

});
