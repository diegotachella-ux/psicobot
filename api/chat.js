const SYSTEM_PROMPT = process.env.SYSTEM_PROMPT;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid request" });
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-opus-4-5-20251101",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: messages,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Anthropic API error:", error);
      return res.status(500).json({ error: "Error al conectar con el asistente" });
    }

    const data = await response.json();
    const text = data.content?.[0]?.text ?? "";
    return res.status(200).json({ response: text });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}

