// 图片数组
const images = [
    "img/Art4.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg",
    "img/7.jpg",
];

const currentImageElement = document.querySelector('.current-image');
const nextImageElement = document.querySelector('.next-image');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentImageIndex = 0;
let autoChangeInterval;


currentImageElement.style.backgroundImage = `url(${images[currentImageIndex]})`;


function changeImage(direction) {

    if (direction === 'next') {
        currentImageIndex = (currentImageIndex + 1) % images.length;
    } else if (direction === 'prev') {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    }


    currentImageElement.style.backgroundImage = `url(${images[currentImageIndex]})`;


    nextImageElement.style.backgroundImage = `url(${images[(currentImageIndex + 1) % images.length]})`;
}
prevButton.addEventListener('click', () => changeImage('prev'));


nextButton.addEventListener('click', () => changeImage('next'));


function startAutoChange() {
    autoChangeInterval = setInterval(() => {
        changeImage('next');
    }, 3000); 
}

// 停止自动切换
function stopAutoChange() {
    clearInterval(autoChangeInterval);
}

// 重启自动切换
function resetAutoChange() {
    stopAutoChange();
    startAutoChange();
}

// 启动自动切换
startAutoChange();

// 监听鼠标位置来控制左右按钮的显示
document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX; // 获取鼠标的水平位置
    const screenWidth = window.innerWidth;

    // 如果鼠标接近屏幕的左右边缘，显示按钮
    if (mouseX <= 50 || mouseX >= screenWidth - 50) {
        prevButton.style.opacity = 0.5;
        nextButton.style.opacity = 0.5;
    } else {
        prevButton.style.opacity = 0;
        nextButton.style.opacity = 0;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.animate-on-scroll');

    // 定义 Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // 元素进入视口时添加动画类
                entry.target.classList.add('show');
            } else {
                // 元素离开视口时移除动画类
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0.1 }); // 10% 可见时触发

    // 观察所有目标元素
    elements.forEach((el) => observer.observe(el));
});



// 当页面滚动到目标位置时触发翻转动画
document.addEventListener("DOMContentLoaded", function () {
    const artItems = document.querySelectorAll('.art-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
            else{
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.5 });

    artItems.forEach(item => observer.observe(item));
});


let currentProjectIndex = 0;
const projects = document.querySelectorAll('.project');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function showProject(index) {
    projects.forEach((project, i) => {
        project.style.display = (i === index) ? 'block' : 'none';
    });
}

prev.addEventListener('click', () => {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    showProject(currentProjectIndex);
});

next.addEventListener('click', () => {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    showProject(currentProjectIndex);
});

// 初始化显示第一个项目
showProject(currentProjectIndex);

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.typing-effect');

    // 定义 Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // 元素进入视口时，开始逐字显示动画
                const textElement = entry.target;
                if (!textElement.classList.contains('show-text')) {
                    textElement.classList.add('show-text');
                }
            } else {
                // 元素离开视口时，移除动画类
                entry.target.classList.remove('show-text');
            }
        });
    }, { threshold: 0.1 }); // 10% 可见时触发

    // 观察所有目标元素
    elements.forEach((el) => observer.observe(el));
});


