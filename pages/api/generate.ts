import { Configuration, OpenAIApi } from "openai";
export default async function handler(req: any, res: any) {
  const prompt = `Write me 2 or 3 funny ${req.query.type}s about ${req.query.topic}`

  // gpt-3.5-turbo
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

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