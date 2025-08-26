// DOM Elements
const navbar = document.querySelector('.navbar');
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.querySelector('.theme-toggle');
const sections = document.querySelectorAll('.section');
const contactForm = document.getElementById('contactForm');
const languageSelect = document.getElementById('languageSelect');

// Language and Theme Management
let currentLanguage = localStorage.getItem('language') || 'en';
let currentTheme = localStorage.getItem('theme') || 'dark';

// Translation data
const translations = {
    en: {
        nav: {
            home: "Home",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            greeting: "Hi, I'm",
            title: "Web Developer & Digital Solutions Expert",
            description: "I'm a web developer focused on building modern, responsive, and user-friendly websites. With experience in both simple and complex projects, I combine technical skills with creativity to deliver clean, efficient, and visually appealing solutions. What sets me apart is adaptability, attention to detail, and a commitment to helping people and businesses create a strong online presence.",
            viewWork: "View My Work",
            getInTouch: "Get In Touch",
            profileTitle: "Web Developer"
        },
        skills: {
            title: "Why Choose Me?",
            reliability: {
                title: "Reliability",
                description: "Consistent delivery of high-quality solutions on time, every time."
            },
            creativity: {
                title: "Creativity",
                description: "Innovative approaches to complex problems with unique solutions."
            },
            problemSolving: {
                title: "Problem-Solving",
                description: "Analytical thinking to break down challenges into manageable solutions."
            },
            professionalism: {
                title: "Professionalism",
                description: "Clear communication, attention to detail, and commitment to excellence."
            }
        },
        projects: {
            title: "My Projects",
            subtitle: "Showcasing my web development projects and digital solutions",
            viewProject: "View Project",
            gallery: "Gallery",
            project1: {
                title: "Architecture Studio Website",
                description: "A professional website developed for an architecture studio in Uzbekistan. Features modern design, project showcases, service listings, and client contact forms. Built with responsive design and multilingual support.",
                tech: {
                    responsive: "Responsive Design",
                    multilingual: "Multilingual"
                }
            },
            project2: {
                title: "Lebanese-Uzbek Restaurant Website (Quick Build)",
                description: "A restaurant website combining Lebanese and Uzbek cuisine. Built quickly with limited time investment, resulting in a functional but basic design. Features menu display, contact information, and service descriptions. Note: This was a rushed project with minimal hours allocated.",
                tech: {
                    quickbuild: "Quick Build",
                    basic: "Basic Design"
                }
            },
            project3: {
                title: "Dental Clinic Design",
                description: "Modern dental clinic interior focused on patient comfort and clinical efficiency, featuring calming colors, optimal lighting, and ergonomic furniture layouts.",
                tech: {
                    healthcare: "Healthcare Design",
                    ergonomic: "Ergonomic Planning",
                    medical: "Medical Equipment"
                }
            }
        },
        contact: {
            title: "Get In Touch",
            subtitle: "Ready to collaborate? Let's discuss your next project",
            whyWork: {
                title: "Why Work With Me?",
                track: {
                    title: "Proven Track Record",
                    description: "Successfully delivered 50+ projects across various industries"
                },
                excellence: {
                    title: "Technical Excellence",
                    description: "Deep expertise in modern technologies and best practices"
                },
                focused: {
                    title: "Client-Focused",
                    description: "Clear communication and commitment to exceeding expectations"
                },
                partnership: {
                    title: "Reliable Partnership",
                    description: "Long-term relationships built on trust and consistent delivery"
                }
            },
            details: {
                title: "Contact Information"
            },
            form: {
                title: "Send Me a Message",
                name: "Name",
                email: "Email",
                subject: "Subject",
                message: "Message",
                send: "Send Message"
            }
        }
    },
    ru: {
        nav: {
            home: "Главная",
            projects: "Проекты",
            contact: "Контакты"
        },
        hero: {
            greeting: "Привет, я",
            title: "Веб-разработчик и эксперт цифровых решений",
            description: "Я веб-разработчик, специализирующийся на создании современных, адаптивных и удобных веб-сайтов. Имея опыт в простых и сложных проектах, я сочетаю технические навыки с креативностью для создания чистых, эффективных и визуально привлекательных решений. Что отличает меня — это адаптивность, внимание к деталям и стремление помочь людям и бизнесу создать сильное онлайн-присутствие.",
            viewWork: "Посмотреть работы",
            getInTouch: "Связаться",
            profileTitle: "Веб-разработчик"
        },
        skills: {
            title: "Почему выбрать меня?",
            reliability: {
                title: "Надежность",
                description: "Последовательная поставка качественных решений в срок, каждый раз."
            },
            creativity: {
                title: "Креативность",
                description: "Инновационные подходы к сложным проблемам с уникальными решениями."
            },
            problemSolving: {
                title: "Решение проблем",
                description: "Аналитическое мышление для разбора вызовов на управляемые решения."
            },
            professionalism: {
                title: "Профессионализм",
                description: "Четкое общение, внимание к деталям и приверженность к совершенству."
            }
        },
        projects: {
            title: "Мои проекты",
            subtitle: "Демонстрация моих веб-разработческих проектов и цифровых решений",
            viewProject: "Посмотреть проект",
            gallery: "Галерея",
            project1: {
                title: "Веб-сайт архитектурной студии",
                description: "Профессиональный веб-сайт, разработанный для архитектурной студии в Узбекистане. Включает современный дизайн, витрину проектов, список услуг и формы обратной связи с клиентами. Создан с адаптивным дизайном и многоязычной поддержкой.",
                tech: {
                    responsive: "Адаптивный дизайн",
                    multilingual: "Многоязычность"
                }
            },
            project2: {
                title: "Сайт ливано-узбекского ресторана (быстрая сборка)",
                description: "Веб-сайт ресторана, сочетающего ливанскую и узбекскую кухню. Создан быстро с ограниченными временными затратами, что привело к функциональному, но базовому дизайну. Включает отображение меню, контактную информацию и описания услуг. Примечание: Это был срочный проект с минимальным количеством часов.",
                tech: {
                    quickbuild: "Быстрая сборка",
                    basic: "Базовый дизайн"
                }
            },
            project3: {
                title: "Дизайн стоматологической клиники",
                description: "Современный интерьер стоматологической клиники, ориентированный на комфорт пациентов и клиническую эффективность, с успокаивающими цветами, оптимальным освещением и эргономичными планировками мебели.",
                tech: {
                    healthcare: "Дизайн здравоохранения",
                    ergonomic: "Эргономичное планирование",
                    medical: "Медицинское оборудование"
                }
            }
        },
        contact: {
            title: "Свяжитесь со мной",
            subtitle: "Готовы к сотрудничеству? Обсудим ваш следующий проект",
            whyWork: {
                title: "Почему работать со мной?",
                track: {
                    title: "Проверенный послужной список",
                    description: "Успешно реализовано 50+ проектов в различных отраслях"
                },
                excellence: {
                    title: "Техническое совершенство",
                    description: "Глубокая экспертиза в современных технологиях и лучших практиках"
                },
                focused: {
                    title: "Клиентоориентированность",
                    description: "Четкое общение и приверженность превышению ожиданий"
                },
                partnership: {
                    title: "Надежное партнерство",
                    description: "Долгосрочные отношения, построенные на доверии и последовательной поставке"
                }
            },
            details: {
                title: "Контактная информация"
            },
            form: {
                title: "Отправить сообщение",
                name: "Имя",
                email: "Электронная почта",
                subject: "Тема",
                message: "Сообщение",
                send: "Отправить сообщение"
            }
        }
    },
    de: {
        nav: {
            home: "Startseite",
            projects: "Projekte",
            contact: "Kontakt"
        },
        hero: {
            greeting: "Hallo, ich bin",
            title: "Webentwickler & Experte für digitale Lösungen",
            description: "Ich bin ein Webentwickler, der sich auf die Erstellung moderner, responsiver und benutzerfreundlicher Websites konzentriert. Mit Erfahrung in einfachen und komplexen Projekten kombiniere ich technische Fähigkeiten mit Kreativität, um saubere, effiziente und visuell ansprechende Lösungen zu liefern. Was mich auszeichnet, sind Anpassungsfähigkeit, Aufmerksamkeit für Details und das Engagement, Menschen und Unternehmen dabei zu helfen, eine starke Online-Präsenz zu schaffen.",
            viewWork: "Meine Arbeit ansehen",
            getInTouch: "Kontakt aufnehmen",
            profileTitle: "Webentwickler"
        },
        skills: {
            title: "Warum mich wählen?",
            reliability: {
                title: "Zuverlässigkeit",
                description: "Konstante Lieferung hochwertiger Lösungen pünktlich, jedes Mal."
            },
            creativity: {
                title: "Kreativität",
                description: "Innovative Ansätze für komplexe Probleme mit einzigartigen Lösungen."
            },
            problemSolving: {
                title: "Problemlösung",
                description: "Analytisches Denken, um Herausforderungen in handhabbare Lösungen zu zerlegen."
            },
            professionalism: {
                title: "Professionalität",
                description: "Klare Kommunikation, Aufmerksamkeit für Details und Engagement für Exzellenz."
            }
        },
        projects: {
            title: "Meine Projekte",
            subtitle: "Präsentation meiner Webentwicklungsprojekte und digitalen Lösungen",
            viewProject: "Projekt ansehen",
            gallery: "Galerie",
            project1: {
                title: "Architekturstudio-Website",
                description: "Eine professionelle Website für ein Architekturstudio in Usbekistan. Enthält modernes Design, Projektpräsentationen, Dienstleistungslisten und Kontaktformulare für Kunden. Erstellt mit responsivem Design und mehrsprachiger Unterstützung.",
                tech: {
                    responsive: "Responsives Design",
                    multilingual: "Mehrsprachig"
                }
            },
            project2: {
                title: "Libanesisch-usbekische Restaurant-Website (Schnellbau)",
                description: "Eine Restaurant-Website, die libanesische und usbekische Küche kombiniert. Schnell mit begrenztem Zeitaufwand erstellt, was zu einem funktionalen, aber einfachen Design führte. Enthält Menüanzeige, Kontaktinformationen und Dienstleistungsbeschreibungen. Hinweis: Dies war ein hastiges Projekt mit minimalen Stunden.",
                tech: {
                    quickbuild: "Schnellbau",
                    basic: "Einfaches Design"
                }
            },
            project3: {
                title: "Zahnarztpraxis Design",
                description: "Moderner Zahnarztpraxis-Innenraum mit Fokus auf Patientenkomfort und klinische Effizienz, mit beruhigenden Farben, optimaler Beleuchtung und ergonomischen Möbelanordnungen.",
                tech: {
                    healthcare: "Gesundheitswesen Design",
                    ergonomic: "Ergonomische Planung",
                    medical: "Medizinische Ausrüstung"
                }
            }
        },
        contact: {
            title: "Kontakt aufnehmen",
            subtitle: "Bereit zur Zusammenarbeit? Lassen Sie uns Ihr nächstes Projekt besprechen",
            whyWork: {
                title: "Warum mit mir arbeiten?",
                track: {
                    title: "Bewährte Erfolgsbilanz",
                    description: "Erfolgreich 50+ Projekte in verschiedenen Branchen geliefert"
                },
                excellence: {
                    title: "Technische Exzellenz",
                    description: "Tiefe Expertise in modernen Technologien und bewährten Praktiken"
                },
                focused: {
                    title: "Kundenorientiert",
                    description: "Klare Kommunikation und Engagement zur Übertreffen von Erwartungen"
                },
                partnership: {
                    title: "Zuverlässige Partnerschaft",
                    description: "Langfristige Beziehungen aufgebaut auf Vertrauen und konstanter Lieferung"
                }
            },
            details: {
                title: "Kontaktinformationen"
            },
            form: {
                title: "Senden Sie mir eine Nachricht",
                name: "Name",
                email: "E-Mail",
                subject: "Betreff",
                message: "Nachricht",
                send: "Nachricht senden"
            }
        }
    }
};

// Initialize language and theme
document.documentElement.setAttribute('data-theme', currentTheme);
languageSelect.value = currentLanguage;
updateThemeIcon();
updateLanguage(currentLanguage);

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (currentTheme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Language functions
function updateLanguage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const keys = element.getAttribute('data-translate').split('.');
        let translation = translations[language];
        
        for (const key of keys) {
            if (translation && translation[key]) {
                translation = translation[key];
            } else {
                translation = element.textContent; // Fallback to current text
                break;
            }
        }
        
        if (typeof translation === 'string') {
            element.textContent = translation;
        }
    });
}

// Language selector event
languageSelect.addEventListener('change', (e) => {
    currentLanguage = e.target.value;
    localStorage.setItem('language', currentLanguage);
    updateLanguage(currentLanguage);
});

// Theme Toggle
themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
});

// Mobile Navigation
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navigation
function showSection(sectionId) {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update active nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
}

// Handle navigation clicks
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        showSection(targetId);
    });
});

// Handle hero button clicks
function setupHeroButtons() {
    const viewWorkBtn = document.querySelector('.hero-cta a[href="#projects"]');
    const getInTouchBtn = document.querySelector('.hero-cta a[href="#contact"]');
    
    if (viewWorkBtn) {
        viewWorkBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            showSection('projects');
        });
    }
    
    if (getInTouchBtn) {
        getInTouchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            showSection('contact');
        });
    }
}



// Handle other anchor links (excluding navigation and hero buttons)
document.addEventListener('DOMContentLoaded', () => {
    const otherAnchors = document.querySelectorAll('a[href^="#"]:not(.nav-link):not(.hero-cta a)');
    
    otherAnchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(236, 240, 241, 0.98)';
        if (currentTheme === 'dark') {
            navbar.style.background = 'rgba(26, 26, 26, 0.98)';
        }
        navbar.style.boxShadow = '0 2px 20px rgba(44, 62, 80, 0.1)';
    } else {
        navbar.style.background = 'rgba(236, 240, 241, 0.95)';
        if (currentTheme === 'dark') {
            navbar.style.background = 'rgba(26, 26, 26, 0.95)';
        }
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .tech-item, .reason-item');
    animatedElements.forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
    });
});

// Contact Form Handling
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 12px rgba(44, 62, 80, 0.15);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

// Add notification animations to CSS
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex: 1;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 0.25rem;
        transition: background-color 0.2s ease;
    }
    
    .notification-close:hover {
        background: rgba(255, 255, 255, 0.2);
    }
`;
document.head.appendChild(notificationStyles);

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 500);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroVisual) {
        const rate = scrolled * -0.5;
        heroVisual.style.transform = `translateY(${rate}px)`;
    }
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Skill card animations
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.skill-icon');
        icon.style.transform = 'rotate(360deg) scale(1.1)';
    });
    
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.skill-icon');
        icon.style.transform = 'rotate(0deg) scale(1)';
    });
});

// Add transition to skill icons
document.querySelectorAll('.skill-icon').forEach(icon => {
    icon.style.transition = 'transform 0.3s ease';
});

// Initialize the first section as active and setup hero buttons
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
    setupHeroButtons();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Close notifications
        const notifications = document.querySelectorAll('.notification');
        notifications.forEach(notification => notification.remove());
    }
});

// Add loading animation to tech items
document.querySelectorAll('.tech-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
});

// Smooth reveal animation for sections
function revealOnScroll() {
    const reveals = document.querySelectorAll('.skill-card, .project-card, .reason-item');
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('loaded');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Initialize reveal on load
document.addEventListener('DOMContentLoaded', revealOnScroll);
