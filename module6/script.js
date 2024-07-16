document.addEventListener('DOMContentLoaded', () => {
    const sessions = [
        { title: 'AI in Healthcare', description: 'Exploring the latest advancements in AI for healthcare.', image: 'ai in healthcare.avif' },
        { title: 'Blockchain Technology', description: 'Understanding blockchain and its applications.', image: 'block chain.jpeg' },
        // Add more sessions here
    ];

    const speakers = [
        { name: 'Dr. Jane Doe', topic: 'AI in Healthcare' },
        { name: 'John Smith', topic: 'Blockchain Technology' },
        // Add more speakers here
    ];

    const schedule = [
        { day: 'Day 1', details: 'Sessions on AI and Blockchain: Explore the latest trends in AI and blockchain technology through interactive sessions.' },
        { day: 'Day 2', details: 'Workshops and networking: Participate in hands-on workshops and expand your network with industry experts.' },
    ];

    const contentSections = {
        sessions: document.querySelector('#sessions .sessions-grid'),
        speakers: document.querySelector('#speakers .content-grid'),
        schedule: document.querySelector('#schedule .content-grid'),
    };

    sessions.forEach(session => {
        const sessionCard = document.createElement('div');
        sessionCard.classList.add('content-card');
        sessionCard.innerHTML = `<img src="${session.image}" alt="${session.title}"><h3>${session.title}</h3><p>${session.description}</p>`;
        contentSections.sessions.appendChild(sessionCard);
    });

    speakers.forEach(speaker => {
        const speakerCard = document.createElement('div');
        speakerCard.classList.add('content-card');
        speakerCard.innerHTML = `<h3>${speaker.name}</h3><p>Topic: ${speaker.topic}</p>`;
        contentSections.speakers.appendChild(speakerCard);
    });

    schedule.forEach(item => {
        const scheduleCard = document.createElement('div');
        scheduleCard.classList.add('content-card');
        scheduleCard.innerHTML = `<h3>${item.day}</h3><p>${item.details}</p>`;
        contentSections.schedule.appendChild(scheduleCard);
    });
});
