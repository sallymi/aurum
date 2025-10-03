// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 移动菜单功能
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const body = document.body;
    
    // 创建移动菜单
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    
    // 创建关闭按钮
    const closeButton = document.createElement('div');
    closeButton.className = 'close-menu';
    closeButton.innerHTML = '&times;';
    
    // 复制导航菜单
    const navMenu = document.querySelector('nav ul').cloneNode(true);
    
    // 添加到移动菜单
    mobileMenu.appendChild(closeButton);
    mobileMenu.appendChild(navMenu);
    body.appendChild(mobileMenu);
    
    // 打开菜单
    mobileMenuToggle.addEventListener('click', function() {
        mobileMenu.classList.add('active');
    });
    
    // 关闭菜单
    closeButton.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });
    
    // 点击菜单项也关闭菜单
    const mobileMenuItems = mobileMenu.querySelectorAll('a');
    mobileMenuItems.forEach(item => {
        item.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });
    
    // 滚动效果
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });
    
    // 表单提交
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // 这里可以添加表单验证和提交逻辑
            alert(`感谢您的留言，${name}！我们会尽快回复您。`);
            
            // 重置表单
            contactForm.reset();
        });
    }
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});