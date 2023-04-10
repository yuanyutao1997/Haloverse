// 在这里添加您的 JavaScript 代码以实现交互效果
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

document.addEventListener("DOMContentLoaded", function () {
    const languageSwitch = document.getElementById("language-switch");
    const languageSwitch2 = document.getElementById("language-switch-2"); // 添加第二个切换按钮的引用
    const chineseText = document.querySelectorAll(".chinese");
    const englishText = document.querySelectorAll(".english");
    let language = "chinese";

    languageSwitch.addEventListener("click", function () {
        if (language === "chinese") {
            chineseText.forEach(text => text.style.display = "none");
            englishText.forEach(text => text.style.display = "block");
            language = "english";
        } else if (language === "english") {
            chineseText.forEach(text => text.style.display = "block");
            englishText.forEach(text => text.style.display = "none");
            language = "chinese";
        }
    });

    // 添加第二个切换按钮的事件监听器
    languageSwitch2.addEventListener("click", function () {
        if (language === "chinese") {
            chineseText.forEach(text => text.style.display = "none");
            englishText.forEach(text => text.style.display = "block");
            language = "english";
        } else if (language === "english") {
            chineseText.forEach(text => text.style.display = "block");
            englishText.forEach(text => text.style.display = "none");
            language = "chinese";
        }
    });
});
