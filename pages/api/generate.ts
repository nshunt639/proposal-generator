import { Configuration, OpenAIApi } from "openai";
export default async function handler(req: any, res: any) {
  const prompt = `Act as a developer. Write me a proposal for the following job description: ${req.query.post}`;

  const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  }));

  try {
    const completion = await openai.createChatCompletion({
      model: process.env.OPENAI_MODEL!,
      messages: [{ role: "user", content: prompt }],
      temperature: 0.5,
      max_tokens: 2050,
      top_p: 0.5,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    res.status(200).json({ proposal: completion.data.choices[0].message?.content.trim() || '' });
  } catch (ex: any) {
    res.status(500).json({ message: ex.message})
  }
}