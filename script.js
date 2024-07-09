
var typed = new Typed('.typed-text', {
    strings: ["وايت مياه صالحة للشرب", "معنا ستشعر بالفرق"],
    typeSpeed: 50, // سرعة الكتابة بالمللي ثانية
    startDelay: 500, // تأخير قبل بدء الكتابة
    backSpeed: 30, // سرعة المسح بالمللي ثانية
    backDelay: 1000, // تأخير قبل بدء المسح والانتقال للنص التالي
    loop: true, // تكرار الكتابة
    showCursor: false,
    smartBackspace: true // يمسح فقط الأحرف غير المتطابقة مع النص التالي
});
gsap.registerPlugin(ScrollTrigger);

// Animation for #woman element
gsap.fromTo("#woman", 
    {   
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
    },
    {   
        duration: 2,
        x: 0,
        autoAlpha: 1,
        ease: "power3.out",
        clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
        scrollTrigger: {
            trigger: "#woman",
            start: "top 80%",
            end: "top 30%",
            markers: false
        }
    }
);



// Animation for #man element
gsap.fromTo("#man", 
    {   
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'
    },
    {   
        duration: 2,
        x: 0,
        autoAlpha: 1,
        ease: "power3.out",
        clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
        scrollTrigger: {
            trigger: "#man",
            start: "top 80%",
            end: "top 30%",
            markers: false
        }
    }
);

var loading  = document.querySelector(".loading")
window.onload = function(){
    loading.style.display = 'none';
}

