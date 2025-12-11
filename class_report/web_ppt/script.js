document.addEventListener('DOMContentLoaded', () => {
    // --- Navigation System ---
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressBar = document.getElementById('progress-bar');
    let currentSlide = 0;
    const totalSlides = slides.length;

    function updateSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'prev', 'next');
            if (i === index) {
                slide.classList.add('active');
            } else if (i < index) {
                slide.classList.add('prev');
            } else {
                slide.classList.add('next');
            }
        });

        // Update Progress Bar
        const progress = ((index + 1) / totalSlides) * 100;
        progressBar.style.height = `${progress}%`;

        // Trigger Animations based on slide
        if (slides[index].id === 'slide-demo') {
            startChatSim();
        }
    }

    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlide(currentSlide);
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlide(currentSlide);
        }
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
            nextSlide();
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            prevSlide();
        }
    });

    // Mouse Wheel Navigation (Throttled)
    let isScrolling = false;
    document.addEventListener('wheel', (e) => {
        if (isScrolling) return;
        isScrolling = true;
        setTimeout(() => { isScrolling = false; }, 1000);

        if (e.deltaY > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    });

    // --- Workflow Visualization ---
    window.showStep = function (stepId) {
        // Reset active states
        document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
        document.getElementById(`step-${stepId}`).classList.add('active');

        const title = document.getElementById('detail-title');
        const desc = document.getElementById('detail-desc');

        const details = {
            'index': {
                title: '1. Indexing (索引)',
                desc: 'System continuously ingests chat history, reactions, and shared links. It builds a "Social Knowledge Graph" (Who liked what? Who replied to whom?) and vectorizes content.'
            },
            'retrieve': {
                title: '2. Retrieval (检索)',
                desc: 'When a new paper arrives, the system searches for 3 types of signals: Content Connections (similar topics), Metadata Connections (same author), and Member Connections (Alice liked this topic).'
            },
            'generate': {
                title: '3. Generation (生成)',
                desc: 'LLM synthesizes a "Socially Grounded" message. Instead of a generic summary, it says: "@Bob, this paper cites the work you shared last week."'
            },
            'feedback': {
                title: '4. Feedback Loop (反馈)',
                desc: 'User interactions (likes, replies) are fed back into the index, reinforcing the relevance of certain topics for future recommendations.'
            }
        };

        title.textContent = details[stepId].title;
        desc.textContent = details[stepId].desc;
    };

    // --- Chat Simulation ---
    const chatWindow = document.getElementById('chat-window');
    let chatInterval;

    window.startChatSim = function () {
        chatWindow.innerHTML = ''; // Clear chat
        clearInterval(chatInterval);

        const messages = [
            { type: 'human', user: 'Alice', text: 'Has anyone seen the new RAG paper from UW?', delay: 500 },
            { type: 'human', user: 'Bob', text: 'Not yet, is it good?', delay: 1500 },
            { type: 'bot', user: 'PaperPing', text: '📄 **Social-RAG: Retrieving from Group Interactions**\n\n@Alice, this seems relevant to your interest in *Human-AI Collaboration*.\n\nIt also cites the *Generative Agents* paper that @Bob shared last month! 🔗', delay: 3000 },
            { type: 'human', user: 'Alice', text: 'Oh wow, thanks! That connection is super helpful.', delay: 5000 },
            { type: 'human', user: 'Bob', text: '👀 Reading it now.', delay: 6500 }
        ];

        let msgIndex = 0;

        function sendNextMsg() {
            if (msgIndex >= messages.length) return;

            const msg = messages[msgIndex];
            const msgDiv = document.createElement('div');
            msgDiv.className = `slack-msg ${msg.type === 'bot' ? 'bot-msg' : ''}`;

            msgDiv.innerHTML = `
                <div class="avatar">${msg.user[0]}</div>
                <div class="msg-content">
                    <div class="msg-header">${msg.user} <span>${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span></div>
                    <div class="msg-text">${msg.text.replace(/\n/g, '<br>')}</div>
                </div>
            `;

            chatWindow.appendChild(msgDiv);
            chatWindow.scrollTop = chatWindow.scrollHeight;

            msgIndex++;
            if (msgIndex < messages.length) {
                setTimeout(sendNextMsg, messages[msgIndex].delay - messages[msgIndex - 1].delay);
            }
        }

        setTimeout(sendNextMsg, messages[0].delay);
    };

    // --- Theory Pyramid ---
    window.showTheory = function (level) {
        const text = document.getElementById('theory-text');
        const content = {
            'l0': 'Level 0: No Grounding. Generic, one-size-fits-all messages. Often perceived as spam.',
            'l1': 'Level 1: Category-level. "This is an NLP group, so here is an NLP paper." Better, but still impersonal.',
            'l2': 'Level 2: Group-level. "This group likes discussing ethics." Fits the group culture.',
            'l3': 'Level 3: Individual-level. "@Alice, this is for you." The highest level of social grounding, used by Social-RAG.'
        };
        text.textContent = content[level];
    };

    // Initialize
    updateSlide(0);
});
