const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 100,
})

sr.reveal('.profile__border')
sr.reveal('.profile__name', {delay: 200})
sr.reveal('.profile__profession', {delay: 300})
sr.reveal('.profile__social', {delay: 400})
sr.reveal('.profile__info-group', {inerval: 100, delay: 400})
sr.reveal('.profile__buttons', {delay: 500})
sr.reveal('.filters__content', {delay: 600})
sr.reveal('.filters', {delay: 800})