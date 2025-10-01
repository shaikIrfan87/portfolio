// Enhanced terminal with AI-like responses and natural language understanding
class EnhancedInteractiveTerminal {
    constructor() {
        this.input = document.getElementById('terminal-input');
        this.output = document.getElementById('output');
        this.isTyping = false;
        this.conversationContext = [];
        
        this.initializeTerminal();
        this.setupEventListeners();
        this.updateDateTime();
        
        // Disable input by default
        this.input.disabled = true;
    }

    initializeTerminal() {
        const introText = "🚀 Hello! I'm Irfan's AI-powered assistant. I know everything about his journey from winning coding contests to building healthcare AI systems. Ask me anything in natural language - or try some secret commands like 'sudo' 😉";
        const welcomeDiv = document.createElement('div');
        welcomeDiv.className = 'ai-response';
        this.output.insertBefore(welcomeDiv, this.output.lastElementChild);
        this.typeText(welcomeDiv, introText, 40);
    }

    setupEventListeners() {
        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !this.isTyping) {
                this.handleInput();
            } else if (this.isTyping) {
                e.preventDefault();
            }
        });

        // Focus input when clicking anywhere in terminal
        document.querySelector('.terminal').addEventListener('click', () => {
            if (!this.isTyping) this.input.focus();
        });
    }

    updateDateTime() {
        const datetimeElement = document.getElementById('datetime');
        const updateTime = () => {
            datetimeElement.textContent = new Date().toLocaleString();
        };
        setInterval(updateTime, 1000);
        updateTime();
    }

    handleInput() {
        const userInput = this.input.value.trim();
        if (!userInput) return;

        this.addMessage(userInput, 'user');
        this.conversationContext.push({role: 'user', content: userInput});
        this.input.value = '';
        
        this.showTypingIndicator();
        
        setTimeout(() => {
            this.processInput(userInput);
        }, 800 + Math.random() * 1200);
    }

    addMessage(content, sender = 'ai', animated = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = sender === 'user' ? 'user-message' : 'ai-response';
        
        const prefix = sender === 'user' ? 
            `<span class="prompt">user@portfolio:~$ </span>` : 
            ``;
        
        if (animated && sender === 'ai') {
            messageDiv.innerHTML = `${prefix}<span class="typing-indicator">Processing...</span>`;
            this.output.insertBefore(messageDiv, this.output.lastElementChild);
            this.scrollToBottom();
            
            setTimeout(() => {
                this.typeText(messageDiv, content, 25, prefix);
            }, 100);
        } else {
            messageDiv.innerHTML = `${prefix}${content}`;
            this.output.insertBefore(messageDiv, this.output.lastElementChild);
            this.scrollToBottom();
        }
    }

    showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'ai-response';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `<span class="typing-indicator">🤖 Analyzing your query...</span>`;
        this.output.insertBefore(typingDiv, this.output.lastElementChild);
        this.scrollToBottom();
    }

    removeTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) indicator.remove();
    }

    processInput(input) {
        this.removeTypingIndicator();
        const response = this.generateIntelligentResponse(input.toLowerCase());
        this.conversationContext.push({role: 'assistant', content: response});
        this.addMessage(response, 'ai', true);
    }

    generateIntelligentResponse(input) {
        // Easter eggs and special commands
        if (input === 'sudo' || (input.includes('sudo') && input.includes('secret'))) {
            return "🏆 Secret unlocked! I once trained an AI to predict cricket match outcomes better than my friends... and it actually worked! 😎 The model had 78% accuracy predicting IPL matches. My friends still ask for predictions! 🏏";
        }

        if (input === 'matrix') {
            this.startMatrixRain();
            return "🌌 Entering the Matrix... Welcome to the digital realm! 💊\n\nMatrix rain activated for 5 seconds...";
        }

        if (input === 'easteregg' || input === 'easter egg') {
            return `<pre>
    (•_•)  You found Irfan's hidden terminal Easter egg!
    <)   )╯  Keep exploring the AI universe 🚀
    /   \\
    
🎉 Achievement Unlocked: Terminal Explorer! 🎉
</pre>`;
        }

        if (input === 'funfacts' || input === 'fun facts') {
            return `🎯 Fun Facts About Irfan\n\n• Loves solving **ML problems at 2 AM with coffee** ☕\n• Participated in **3+ hackathons** and won one! 🎉\n• Can debug Python faster than I can cook noodles 🍜\n• Favorite AI topics → **Neural Networks & NLP** 🧠\n• When not coding, probably **listening to lo-fi beats** 🎶\n• Has a secret obsession with **optimizing algorithms** 📊\n• Dreams in Python syntax sometimes 🐍\n\nTry 'sudo' for something special! 😉`;
        }

        if (input === 'clear') {
            this.clearScreen();
            return '';
        }

        // Natural language understanding with context awareness
        if (this.matchesIntent(input, ['hello', 'hi', 'hey', 'greetings', 'sup', 'yo', 'what\'s up'])) {
            const greetings = [
                "Hey there! 👋 Ready to dive into Irfan's AI journey? What catches your interest?",
                "Hello! 🚀 I'm excited to share Irfan's story. What would you like to explore?",
                "Hi! 🤖 Welcome to the AI corner of the portfolio. What shall we discuss?",
                "Greetings! ✨ I'm here to tell you everything about Irfan's tech adventures!"
            ];
            return this.getRandomResponse(greetings);
        }

        if (this.matchesIntent(input, ['about', 'who', 'yourself', 'tell me about', 'background', 'profile', 'summary'])) {
            return `🎯 About Irfan Ahamed\n\nI'm a passionate B.Tech student specializing in **Artificial Intelligence and Machine Learning** at CBIT, Proddatur.\n\n🚀 What makes me unique:\n• Healthcare AI enthusiast - built **diabetes prediction system** (85% accuracy, 1st place winner!)\n• **Fintech experience** - worked as SDE intern at Bluestock Fintech (Startup India registered)\n• **3 virtual internships** completed (AWS AI/ML, Google AI/ML, Accenture)\n• Problem solver who codes at 2 AM with coffee ☕\n\n🎯 Current mission: Building AI that makes healthcare accessible and education personalized.\n\n💡 Try asking about 'projects', 'experience', or 'certifications'!`;
        }

        if (this.matchesIntent(input, ['projects', 'work', 'built', 'developed', 'portfolio', 'what have you built'])) {
            return `🚀 Featured Projects\n\n1. 🩺 **Diabetic Prediction System** - Champion! 🏆\n   • Won **1st place** at campus coding fest\n   • **85% prediction accuracy** using ML algorithms\n   • Real-world healthcare impact\n   • Tech: Python, Scikit-learn, Pandas, Logistic Regression\n\n2. 📋 **NLP-Based Question Paper Generator**\n   • Automated exam paper generation using **NLP techniques**\n   • Features: Tokenization, NER, TF-IDF extraction\n   • Currently under testing phase\n   • Tech: Python, NLP, FastAPI, HTML/CSS, JavaScript\n\n3. 🧠 **AI Mental Health Chatbot** (WIP)\n   • Detects emotional states (stress, depression, anxiety)\n   • **Text & voice input analysis**\n   • Personalized wellness tips & diet recommendations\n   • Tech: NLP, Sentiment Analysis, Intent Classification\n\n4. 🏏 **Cricket Match Predictor** (Personal)\n   • 78% accuracy in IPL match predictions\n   • Friends still ask for match tips! 😄\n\nWhich project interests you most? I can dive deeper! 🤿`;
        }

        if (this.matchesIntent(input, ['skills', 'technologies', 'tech', 'stack', 'programming', 'languages', 'tools'])) {
            return `💻 Technical Arsenal\n\n**Programming Languages:**\n• **Python** (Expert) 🐍 - My go-to for AI/ML\n• **Java** (Begineer) ☕ - Object-oriented mastery\n• **R** (Proficient) 📊 - Statistical analysis\n• **SQL** (Proficient) 🗄️ - Database wizardry\n• **JavaScript** (Intermediate) 🌐 - Full-stack development\n• **React.js & Node.js** - Modern web development\n\n**AI/ML Frameworks:**\n• **Scikit-learn** - Machine learning algorithms\n• **TensorFlow** - Deep learning models\n• **Pandas** - Data manipulation master\n• **NLP Libraries** - Text processing expert\n\n**Cloud & Tools:**\n• **AWS Services** (SageMaker, Rekognition, Lambda)\n• **MongoDB** - NoSQL databases\n• **Git** - Version control pro\n• **FastAPI** - API development\n\n**Domains of Expertise:**\n🧠 Artificial Intelligence | 🤖 Machine Learning | 📊 Data Science | 🗣️ NLP\n\nWant to see these in action? Check out my projects! 🚀`;
        }

        if (this.matchesIntent(input, ['experience', 'internship', 'work', 'job', 'career', 'professional'])) {
            return `💼 Professional Experience\n\n**🏢 Bluestock Fintech** (Startup India Registered)\n*Software Development Engineer Intern* | May 2025 - July 2025\n• Led a **team** to design fintech solutions\n• Managed **sprints** and backend/API development\n• Gained hands-on experience in **agile workflows**\n• **Certified** by Bluestock Fintech (ID: BFSD16299)\n• Worked under CEO Ganesh Karale's guidance\n\n**☁️ AWS AI/ML Virtual Internship**\n*June 2023 - August 2023*\n• Completed projects with **AWS SageMaker, Rekognition, Lambda**\n• Trained and deployed **ML models on cloud**\n• Gained real-world cloud AI experience\n\n**🔍 Google AI/ML Virtual Internship**\n*May 2023 - July 2023*\n• Worked on **real-world data modeling** with TensorFlow\n• Used **Google Colab** for collaborative development\n• Mastered **supervised/unsupervised learning** workflows\n\nAll internships involved practical, hands-on AI/ML projects! 🚀`;
        }

        if (this.matchesIntent(input, ['certifications', 'certificates', 'credentials', 'qualified'])) {
            return `🏆 Certifications & Achievements\n\n**Cloud & AI:**\n• **AWS Academy Graduate** - Cloud Foundations ☁️\n• **Develop GenAI Apps** with Gemini and Streamlit 🤖\n• **Prompt Design in Vertex AI** - Google Cloud 🎯\n• **Accenture Developer and Technology** Job Simulation (Forage) 💻\n\n**Achievements:**\n🥇 **1st Place Winner** - Diabetic Prediction Project at Coding Fest\n✅ **Successfully completed** 3 virtual AI/ML internships\n🎯 **Hackathon Finalist** - Multiple competitions\n🏏 **78% accuracy** in cricket match predictions (personal project)\n\n**Soft Skills:**\n• Problem Solving & Analytical Thinking 🧩\n• Leadership & Team Collaboration 👥\n• Creative Innovation 💡\n• Agile Development Experience 🔄\n\nThese credentials validate my practical AI/ML expertise! 💪`;
        }

        if (this.matchesIntent(input, ['education', 'study', 'college', 'university', 'degree', 'academic'])) {
            return `🎓 Educational Journey\n\n**🏛️ Current: B.Tech in AI & Machine Learning**\n*Chaitanya Bharathi Institute of Technology (CBIT), Proddatur*\n📅 2022 - 2026\n\n**🎯 Specialization Areas:**\n• Artificial Intelligence & Machine Learning\n• Deep Learning & Neural Networks\n• Data Science & Analytics\n• Natural Language Processing\n• Computer Vision\n• Cloud Computing\n\n**📚 Previous: M.P.C Intermediate**\n*Sri Chaitanya Junior College, Kadapa*\n📅 2020 - 2022\n• Mathematics, Physics, Chemistry focus\n• Strong analytical foundation\n\n**💡 Academic Highlights:**\n• **1st place** in campus coding fest\n• **Active participant** in tech competitions\n• **Practical project** focus over theoretical study\n\nMy education blends theory with real-world application! 🚀`;
        }

        if (this.matchesIntent(input, ['contact', 'reach', 'email', 'connect', 'linkedin', 'github', 'phone'])) {
            return `📞 Let's Connect & Collaborate!\n\n**📧 Email:** shaikirfanahamed87@gmail.com\n**💼 LinkedIn:** linkedin.com/in/shaikirfan87\n**🐙 GitHub:** github.com/shaikIrfan87\n**🌐 Portfolio:** https://shaikirfan87.github.io/portfolio/\n**📱 Phone:** +91-9000552179\n**📍 Location:** Proddatur, Andhra Pradesh, India\n\n**🤝 I'm excited to discuss:**\n• AI/ML opportunities & collaborations 🤖\n• Innovative tech projects 💡\n• Research possibilities 🔬\n• Fintech & Healthcare AI solutions 💊\n• Open source contributions 🌟\n\n**🎯 Currently seeking:** AI Product Management & Tech Entrepreneurship roles\n\nDon't hesitate to reach out! I love connecting with fellow tech enthusiasts! 🚀`;
        }

        if (this.matchesIntent(input, ['help', 'commands', 'what can you do', 'guide'])) {
            return `🔍 Available Commands & Topics\n\n**🗣️ Natural Language:** Just ask me anything naturally!\nExamples: "Tell me about your projects", "What skills do you have?"\n\n**📋 Specific Topics:**\n• **about** - Learn about Irfan's background\n• **projects** - View featured projects & achievements\n• **skills** - Technical skills & technologies\n• **experience** - Professional internships & work\n• **certifications** - Credentials & achievements\n• **education** - Academic journey\n• **contact** - Get in touch information\n\n**🎮 Fun Commands:**\n• **funfacts** - Discover interesting facts\n• **sudo irfan_secret** - Unlock a secret! 🔐\n• **matrix** - Enter the Matrix 🌌\n• **easteregg** - Find hidden surprises 🥚\n\n**💻 Terminal Commands:**\n• **help** - Show this guide\n• **clear** - Clear the screen\n\n💡 **Pro tip:** I understand context! Ask follow-up questions naturally!`;
        }

        // Context-aware responses
        if (this.matchesIntent(input, ['diabetes', 'diabetic', 'prediction', 'healthcare', 'medical'])) {
            return `🩺 Diabetic Prediction System - My Pride! 🏆\n\n**🎯 Project Highlights:**\n• **1st Place Winner** at campus coding fest\n• **85% prediction accuracy** using advanced ML\n• Real-world healthcare application\n• Helps early diabetes detection\n\n**🔧 Technical Implementation:**\n• **Algorithms:** Logistic Regression & Random Forest\n• **Data Processing:** Pandas for data cleaning\n• **ML Library:** Scikit-learn for model training\n• **Language:** Python (my favorite! 🐍)\n\n**💡 Impact:**\n• Can predict diabetes likelihood from patient metrics\n• Potential to help thousands with early detection\n• Showcases AI's power in healthcare\n\nThis project represents my passion for **AI in healthcare**! Want to know more about the technical details? 🤔`;
        }

        if (this.matchesIntent(input, ['nlp', 'natural language', 'question paper', 'generator', 'exam'])) {
            return `📋 NLP-Based Question Paper Generator\n\n**🎯 What it does:**\n• **Automatically generates** exam papers from syllabus content\n• Uses **advanced NLP techniques** for content understanding\n• **Intelligently structures** questions by difficulty\n\n**🔧 Technical Magic:**\n• **Tokenization** - Breaking text into meaningful units\n• **Named Entity Recognition (NER)** - Identifying key concepts\n• **TF-IDF** - Ranking content importance\n• **FastAPI** - RESTful backend services\n• **Frontend:** HTML, CSS, JavaScript\n\n**📊 Current Status:** Under testing phase\n• Refining question quality algorithms\n• Improving content extraction accuracy\n• Planning deployment to help educators\n\n**💭 Vision:** Revolutionize how educators create assessments!\nThis combines my love for **NLP** and **education technology**! 🚀`;
        }

        if (this.matchesIntent(input, ['mental health', 'chatbot', 'wellness', 'emotion'])) {
            return `🧠 AI Mental Health Chatbot (WIP) 💚\n\n**🎯 Mission:**\nBuilding AI that understands human emotions and provides personalized wellness support.\n\n**🔧 Features in Development:**\n• **Emotion Detection** from text inputs\n• **Voice Analysis** for emotional states\n• **Stress, Depression & Anxiety** identification\n• **Personalized Recommendations:**\n  - Mental wellness tips 🧘‍♀️\n  - Customized diet plans 🥗\n  - Mood improvement activities 🌈\n\n**💻 Technical Stack:**\n• **Sentiment Analysis** - Understanding emotional tone\n• **Intent Classification** - Accurate response matching\n• **NLP Libraries** - Text processing & analysis\n• **Voice Processing** - Audio emotion detection\n\n**❤️ Impact Goal:**\nMaking mental health support accessible 24/7 through AI.\n\n**Note:** This is supportive technology, not a replacement for professional help.\n\nMental health awareness through technology! 💪`;
        }

        if (this.matchesIntent(input, ['aws', 'cloud', 'amazon'])) {
            return `☁️ AWS Cloud Expertise\n\n**🎓 AWS Academy Graduate** - Cloud Foundations Certified!\n\n**🛠️ Services I've Worked With:**\n• **AWS SageMaker** - ML model training & deployment\n• **AWS Rekognition** - Image & video analysis\n• **AWS Lambda** - Serverless computing\n• **Cloud Architecture** - Scalable system design\n\n**📈 Practical Experience:**\n• **Deployed ML models** on cloud infrastructure\n• **Automated workflows** using Lambda functions\n• **Image processing** with Rekognition APIs\n• **Cost optimization** strategies for cloud resources\n\n**💡 Key Learnings:**\n• Cloud-first approach to AI/ML development\n• **Scalability** and **reliability** in production\n• **Security best practices** for cloud applications\n• **Monitoring & logging** for cloud services\n\n**🚀 Future Goals:**\nBuilding enterprise-scale AI solutions on AWS cloud!\n\nCloud computing is the future of AI deployment! ☁️🤖`;
        }

        // Conversational responses for unclear queries
        if (input.includes('?')) {
            const questionResponses = [
                "That's an interesting question! Could you be more specific? I know about Irfan's projects, skills, experience, and achievements.",
                "I'd love to help answer that! Try asking about 'projects', 'skills', 'experience', or 'certifications' for detailed info.",
                "Great question! I have extensive knowledge about Irfan's AI/ML journey. What aspect interests you most?",
                "I'm here to help! Could you rephrase your question? I can tell you about projects, technical skills, or professional experience."
            ];
            return this.getRandomResponse(questionResponses);
        }

        // Fallback responses with helpful suggestions
        const fallbackResponses = [
            "I'm not quite sure about that. Try asking about 'projects', 'skills', or 'experience'! Or type 'help' for all options.",
            "Hmm, I didn't catch that. I can tell you about Irfan's AI projects, technical skills, or professional journey. What interests you?",
            "That's not in my knowledge base yet! Ask me about Irfan's diabetes prediction system, NLP projects, or internship experiences!",
            "I'm still learning! Try 'funfacts' for interesting tidbits, or ask about specific projects and achievements.",
            "Not sure about that one! I know everything about Irfan's coding journey. Try asking about his hackathon wins or AI projects! 🚀"
        ];
        
        return this.getRandomResponse(fallbackResponses);
    }

    // Helper method to match user intent with keywords
    matchesIntent(input, keywords) {
        return keywords.some(keyword => input.includes(keyword.toLowerCase()));
    }

    // Helper method to get random responses for variety
    getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // Matrix rain effect
    startMatrixRain() {
        const matrixContainer = document.createElement('div');
        matrixContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: black;
            z-index: 1000;
            pointer-events: none;
            overflow: hidden;
        `;
        
        document.body.appendChild(matrixContainer);
        
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
        const columns = Math.floor(window.innerWidth / 20);
        
        for (let i = 0; i < columns; i++) {
            const column = document.createElement('div');
            column.style.cssText = `
                position: absolute;
                top: -100%;
                left: ${i * 20}px;
                color: #00ff00;
                font-family: 'Courier New', monospace;
                font-size: 18px;
                animation: matrix-fall ${2 + Math.random() * 3}s linear infinite;
            `;
            
            let text = '';
            for (let j = 0; j < 20; j++) {
                text += characters[Math.floor(Math.random() * characters.length)] + '<br>';
            }
            column.innerHTML = text;
            
            matrixContainer.appendChild(column);
        }
        
        // Add CSS animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes matrix-fall {
                from { top: -100%; }
                to { top: 100%; }
            }
        `;
        document.head.appendChild(style);
        
        // Remove after 5 seconds
        setTimeout(() => {
            document.body.removeChild(matrixContainer);
            document.head.removeChild(style);
        }, 5000);
    }

    async typeText(element, text, speed = 50, prefix = '') {
        this.isTyping = true;
        this.input.disabled = true;
        let displayText = '';
        const chars = text.split('');
        
        for (let char of chars) {
            displayText += char;
            element.innerHTML = prefix + displayText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            this.scrollToBottom();
            await this.sleep(speed);
        }
        
        this.isTyping = false;
        this.input.disabled = false;
        this.input.focus();
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    scrollToBottom() {
        this.output.scrollTop = this.output.scrollHeight;
    }

    clearScreen() {
        while (this.output.firstChild !== this.output.lastElementChild) {
            this.output.removeChild(this.output.firstChild);
        }
    }
}

// Initialize the enhanced terminal
document.addEventListener('DOMContentLoaded', () => {
    new EnhancedInteractiveTerminal();
});
