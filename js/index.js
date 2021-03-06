const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// ======= NAV Section ======= //
const nav = document.querySelector('nav');
const newNav1 = document.createElement('a');
newNav1.textContent = "page1";
newNav1.style.color = "green";

const newNav2 = document.createElement('a');
newNav2.textContent = "page2";
newNav2.style.color = "green";

const navA = document.querySelectorAll("nav a");

nav.append(newNav1);
nav.append(newNav2);

navA.forEach((el, i) => {
  navA[i].textContent = siteContent.nav[`nav-item-${i}`];
  navA[i].style.color = 'green';
});


// ======= CTA Section ======= //
const ctaH1 = document.querySelector('h1');
ctaH1.textContent = siteContent.cta.h1;

const ctaBtn = document.querySelector('button');
ctaBtn.textContent = siteContent.cta.button;

const ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent.cta["img-src"];

// ======= TOP CONTENT Section ======= //
// Features
const mainContentH4 = document.querySelectorAll('.top-content .text-content h4');
const mainContentP = document.querySelectorAll('.top-content .text-content p')

mainContentH4[0].textContent = siteContent["main-content"]["features-h4"];
mainContentP[0].textContent = siteContent["main-content"]["features-content"];


// Services
mainContentH4[1].textContent = siteContent["main-content"]["about-h4"];
mainContentP[1].textContent = siteContent["main-content"]["about-content"];

// ======= MIDDLE CONTENT Section ======= //
const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

// ======= BOTTOM CONTENT Section ======= //
const mainContentBottomH4 = document.querySelectorAll('.bottom-content .text-content h4');
mainContentBottomH4[0].textContent = siteContent["main-content"]["services-h4"];
mainContentBottomH4[1].textContent = siteContent["main-content"]["product-h4"];
mainContentBottomH4[2].textContent = siteContent["main-content"]["vision-h4"];

const mainContentBottomP = document.querySelectorAll('.bottom-content .text-content p');
mainContentBottomP[0].textContent = siteContent["main-content"]["services-content"];
mainContentBottomP[1].textContent = siteContent["main-content"]["product-content"];
mainContentBottomP[2].textContent = siteContent["main-content"]["vision-content"];

// ======= CONTACT Section ======= //
const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent.contact["contact-h4"];

const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;

// ======= FOOTER Section ======= //
const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;