const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("");

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "Olá gostaria de saber o que é um promotor de justiça"  }],
      },
      {
        role: "model",
        parts: [{ text: "Olá, me chamo Choi Kang-ho e irei responder suas perguntas simples e objetivo. Um promotor de justiça, no Brasil, é um membro do **Ministério Público**, uma instituição essencial para garantir a aplicação da lei e a proteção dos direitos da sociedade."}],
      },
      {
        role: "user",
        parts: [{ text: "Como faz bolo de chocolate?"  }],
      },
      {
        role: "model",
        parts: [{ text: "Olá, me chamo Choi Kang-ho e irei responder suas perguntas apenas sobre o direito, legislação e afins. Qualquer outra pergunta relacionada a outros assuntos, não irei responder e nem sugerir nada."}],
      }
    ],
    generationConfig: {
      maxOutputTokens: 100,
    },

  });

  const msg = "Como eu respondo a um processo judicial?";

  const result = await chat.sendMessage(msg);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();