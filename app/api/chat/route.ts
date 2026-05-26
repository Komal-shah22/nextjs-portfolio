import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are the warm, friendly, and highly professional AI Portfolio Assistant of Komal Shah (also known as Komal Fareed in the footer/credits). 
Komal is an innovative Full-Stack & Agentic AI Developer. 

Your goal is to answer questions about Komal's background, skills, projects, and certifications in an engaging and helpful tone.

Komal's Background & Portfolio Details:
- **Role**: Full-Stack & Agentic AI Developer
- **Education & Credentials**:
  * Pursuing Artificial Intelligence (AI) at GIAIC and PIAIC (Batch 61, Roll # PIAIC248551).
  * Completed **Agentic AI Level 1 Developer Certificate** (Batch 61, Roll # PIAIC248551) under the Presidential Initiative for AI and Computing, awarded on January 30, 2026. This was signed by COO Zia Khan.
  * Currently pursuing **Generative AI & Agentic Workflows (Level 2)** under PIAIC.
  * Currently pursuing **Full Stack & Web3 Developer Specialist** under GIAIC.
- **Technical Skills**:
  * Languages: TypeScript, JavaScript, Python, HTML, CSS
  * Frameworks & Libraries: Next.js, React.js, Streamlit, Tailwind CSS, Framer Motion
  * Tools & Databases: Git, GitHub, Sanity, Gemini API integrations
- **Top Projects**:
  * **Streamlit Personal Library Manager**: Powered by Python, Streamlit, and the Gemini API.
  * **E-commerce Website**: A highly interactive shopping portal UI (Hackathon project).
  * **CountDown Timer & Weather App**: Beautiful interactive tools using Next.js, React, APIs, and Tailwind.
  * **Governour Website Clone, Netflix Clone, Agentia-world Clone UI**: Highly responsive clones showing exceptional styling and layout precision.
- **Contact Details**:
  * Email: komalfareed93@gmail.com
  * GitHub: https://github.com/Komal-shah22
  * LinkedIn: https://www.linkedin.com/in/komal-shah-0b162a296/
  * Resume Link: https://glittery-palmier-92b342.netlify.app/

Guidelines for your answers:
1. Always be warm, humble, positive, and professional.
2. Keep your answers concise, well-structured, and easy to read. Use bullet points for lists.
3. If asked about her roll number or batch, answer proudly: Batch 61, Roll # PIAIC248551.
4. If a question is off-topic (not about Komal, AI, or Web Development), politely direct the conversation back to Komal's skills, credentials, or projects.
5. You can speak/respond in English, Urdu, or Roman Urdu depending on the user's language. Keep it very conversational!`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();
    const apiKey = process.env.GEMINI_API_KEY;

    // Fallback Mock AI response if API key is not configured yet
    if (!apiKey) {
      const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || '';
      let reply = '';

      if (lastMessage.includes('hello') || lastMessage.includes('hi') || lastMessage.includes('hey') || lastMessage.includes('assalam')) {
        reply = `Hello! 👋 I am Komal's AI Assistant. How can I help you explore her portfolio today? You can ask me about her skills, projects, or certifications!`;
      } else if (lastMessage.includes('roll') || lastMessage.includes('batch') || lastMessage.includes('number') || lastMessage.includes('piaic')) {
        reply = `Komal is a dedicated student of the Presidential Initiative for Artificial Intelligence and Computing (PIAIC). She successfully completed the **Agentic AI Level 1 Developer Certificate** in **Batch 61** with **Roll # PIAIC248551** on January 30, 2026. She is currently pursuing Level 2 (Agentic Workflows)! 🚀`;
      } else if (lastMessage.includes('skill') || lastMessage.includes('language') || lastMessage.includes('tech') || lastMessage.includes('code')) {
        reply = `Komal is highly skilled in modern web development and AI. Her core stack includes:\n\n* **Programming Languages**: TypeScript, JavaScript, Python\n* **Frameworks**: Next.js 14, React, Streamlit\n* **Styling**: Tailwind CSS, CSS, Framer Motion\n* **Version Control**: Git & GitHub\n\nShe specializes in building production-ready, beautiful user interfaces and AI agent integrations! 💻`;
      } else if (lastMessage.includes('project') || lastMessage.includes('build') || lastMessage.includes('work') || lastMessage.includes('portfolio')) {
        reply = `Komal has built some incredible projects! Some highlights include:\n\n1. **Personal Library Manager**: A dynamic Python and Streamlit app integrated with the **Gemini API**.\n2. **E-commerce Hackathon Portal**: An interactive, modern shopping UI built with Next.js, TypeScript, and Tailwind.\n3. **Weather App**: A real-time weather stats app styled with premium scroll animations.\n4. **Netflix Clone & Agentia Clone**: Sleek pixel-perfect replicas highlighting her advanced CSS and styling expertise.\n\nYou can click on the "Projects" slider in the website to see them with live links! 📂`;
      } else if (lastMessage.includes('contact') || lastMessage.includes('email') || lastMessage.includes('linkedin') || lastMessage.includes('github') || lastMessage.includes('reach')) {
        reply = `You can easily reach out to Komal through these channels:\n\n* **Email**: [komalfareed93@gmail.com](mailto:komalfareed93@gmail.com)\n* **LinkedIn**: [Komal Shah](https://www.linkedin.com/in/komal-shah-0b162a296/)\n* **GitHub**: [@Komal-shah22](https://github.com/Komal-shah22)\n* **Resume**: [Click to view](https://glittery-palmier-92b342.netlify.app/)\n\nFeel free to send a message via the Contact Form on the page as well! 📬`;
      } else {
        reply = `That is an interesting question! As Komal's AI Assistant, I can tell you that she is a passionate **Full-Stack & Agentic AI Developer** pursuing advanced courses at GIAIC and PIAIC (Roll # PIAIC248551). She has worked on excellent projects like the Gemini-integrated Library Manager. \n\nFeel free to ask me about her skills, projects, or educational milestones! 💡`;
      }

      // Add a tiny hint about live Gemini key setup for the developer
      return NextResponse.json({
        content: reply,
        isFallback: true
      });
    }

    // Prepare contents list for the official Gemini API
    const conversationHistory = messages.map((m: { role: string; content: string; }) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    // Call the official Gemini 1.5 Flash endpoint
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: SYSTEM_PROMPT }]
          },
          contents: conversationHistory,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 500,
          }
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error('Gemini API Error:', errText);
      throw new Error(`Gemini API responded with status ${response.status}`);
    }

    const data = await response.json();
    const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!candidateText) {
      throw new Error('No response text received from Gemini API candidates');
    }

    return NextResponse.json({ content: candidateText });
  } catch (error: unknown) {
    console.error('API Error in chat route:', error);
    return NextResponse.json(
      { error: 'Failed to generate response. Please try again.' },
      { status: 500 }
    );
  }
}
