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
      url: 'https://example.com'
    });
    msg.textContent = '✅ 已呼叫系統分享';
  } catch (err) {
    msg.textContent = '⚠️ 使用者取消或分享失敗';
  }
});
