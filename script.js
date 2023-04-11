document.getElementById("language-switch").addEventListener("click", function () {
  const chineseContent = document.querySelectorAll(".chinese");
  const englishContent = document.querySelectorAll(".english");

  chineseContent.forEach(element => {
      element.style.display = element.style.display === "none" ? "" : "none";
  });

  englishContent.forEach(element => {
      element.style.display = element.style.display === "none" ? "" : "none";
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const languageSwitch = document.getElementById("language-switch");
  const chineseText = document.querySelectorAll(".chinese");
  const englishText = document.querySelectorAll(".english");
  let language = "chinese";

  // 隐藏英文内容
  englishText.forEach(text => text.style.display = "none");

  languageSwitch.addEventListener("click", function() {
      if (language === "chinese") {
          chineseText.forEach(text => text.style.display = "none");
          englishText.forEach(text => text.style.display = "block");
          language = "english";
      } else {
          chineseText.forEach(text => text.style.display = "block");
          englishText.forEach(text => text.style.display = "none");
          language = "chinese";
      }
  });
});
