document.addEventListener('DOMContentLoaded', function() {
    const drawButton = document.getElementById('drawButton');
    const resultContainer = document.getElementById('resultContainer');
    const fortuneLevel = document.getElementById('fortuneLevel');
    const fortuneContent = document.getElementById('fortuneContent');
    const fortuneAdvice = document.getElementById('fortuneAdvice');
    const drawAgainButton = document.getElementById('drawAgainButton');
    
    // 抽签函数
    function drawFortune() {
        // 随机选择一个签
        const randomIndex = Math.floor(Math.random() * fortuneData.length);
        const selectedFortune = fortuneData[randomIndex];
        
        // 显示签文内容
        fortuneLevel.textContent = selectedFortune.level;
        fortuneContent.textContent = selectedFortune.content;
        fortuneAdvice.textContent = selectedFortune.advice;
        
        // 隐藏抽签按钮，显示结果
        drawButton.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        
        // 添加动画效果
        resultContainer.style.opacity = '0';
        setTimeout(() => {
            resultContainer.style.opacity = '1';
        }, 50);
    }
    
    // 点击抽签按钮
    drawButton.addEventListener('click', drawFortune);
    
    // 点击再抽一次按钮
    drawAgainButton.addEventListener('click', function() {
        // 隐藏结果，显示抽签按钮
        resultContainer.classList.add('hidden');
        drawButton.classList.remove('hidden');
        
        // 短暂延迟后再次抽签，增加体验感
        setTimeout(drawFortune, 300);
    });
});
