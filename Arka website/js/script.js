// نمایش/مخفی کردن پروژه‌ها با انیمیشن
const toggleBtn = document.getElementById('toggleProjects');
const projectItems = document.querySelectorAll('.projects .project');

toggleBtn.addEventListener('click', () => {
  const isAnyShown = Array.from(projectItems).some(p => p.classList.contains('show'));

  if (isAnyShown) {
    // مخفی کردن همه
    projectItems.forEach(p => {
      p.classList.remove('show', 'animate');
    });
    toggleBtn.textContent = 'نمایش پروژه‌ها ▼';
  } else {
    // نمایش پروژه‌ها یکی‌یکی
    projectItems.forEach((p, i) => {
      setTimeout(() => {
        p.classList.add('show');
        setTimeout(() => p.classList.add('animate'), 50); // فعال کردن transition
      }, i * 150); // 150ms فاصله بین پروژه‌ها
    });
    toggleBtn.textContent = 'مخفی کردن پروژه‌ها ▲';
  }
});
document.querySelectorAll(".glass-banner").forEach(banner => {
    
    // اطلاعات ذخیره‌شده در HTML
    const title = banner.dataset.title;
    const desc = banner.dataset.desc;
    const icon = banner.dataset.icon;
    const link = banner.dataset.link;

    // قرار دادن اطلاعات داخل محتوا
    banner.querySelector("h3").innerText = title;
    banner.querySelector("p").innerText = desc;
    banner.querySelector(".icon").innerText = icon;

    // لینک‌دهی
    banner.addEventListener("click", () => {
        if (link) {
            window.location.href = link;
        }
    });

});
