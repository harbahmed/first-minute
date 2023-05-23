// ======================== مشاركة المقال ==================================
const link = encodeURI(window.location.href);
const msg = encodeURIComponent('Hey, I found this article');
const title = encodeURIComponent(document.querySelector('title').textContent);


const fb = document.querySelector('.facebook');
fb.href = `https://www.facebook.com/share.php?u=${link}`;

const twitter = document.querySelector('.twitter');
twitter.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=javascript,programming`;

const whatsapp = document.querySelector('.whatsapp');
whatsapp.href = `https://api.whatsapp.com/send?text=${link}`;

const messenger = document.querySelector('.facebook-messenger');
messenger.href = `https://www.facebook.com/dialog/send?app_id=140586622674265&link=${link}`;

const email = document.querySelector('.email');
email.href = `https://mail.google.com/mail/u/0/?to&su=${link}`


// ====================  طباعة المقال ===================================
let printBtn = document.querySelector(".print");

printBtn.addEventListener("click", function(){
    print();
});

let copy = document.querySelector(".copy");

//===============================نسخ رابط ومشاركة صفحة المقال  ===========
copy.onclick = function(){
    var shareData={
        title:document.title,
        text:'your text here',
        url:document.location.href
    };
    if(navigator.canShare(shareData)){
        navigator.share(shareData);
    };
};