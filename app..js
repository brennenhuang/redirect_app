const msg = document.getElementById('msg');
const btn = document.getElementById('btnShare');

btn.addEventListener('click', async () => {
  if (!navigator.share) {
    msg.textContent = '❌ 此瀏覽器不支援 Web Share API，請用行動裝置測試';
    return;
  }
  try {
    await navigator.share({
      title: '我的評論',
      text: '這家店服務很棒，餐點也好吃，推薦！',
      url: 'https://www.google.com/maps/place/%E7%9A%AE%E7%91%AA%E6%96%AF%E5%B7%A5%E5%9D%8A(%E5%8F%B0%E5%8C%97%E5%BF%A0%E5%AD%9D%E9%96%80%E5%B8%82)%E3%80%8AFB%E9%A0%90%E7%B4%84%E5%88%B6%E3%80%8B/@25.0428737,121.5456309,17z/data=!4m8!3m7!1s0x3442abdad237b56f:0x7cf5b9e31bf67271!8m2!3d25.0428737!4d121.5482112!9m1!1b1!16s%2Fg%2F11kn74l_hs?entry=ttu&g_ep=EgoyMDI1MDkxNS4wIKXMDSoASAFQAw%3D%3D'
    });
    msg.textContent = '✅ 已呼叫系統分享';
  } catch (err) {
    msg.textContent = '⚠️ 使用者取消或分享失敗';
  }
});
