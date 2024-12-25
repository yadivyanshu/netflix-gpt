import Groq from "groq-sdk";


const groq = new Groq({ apiKey: process.env.REACT_APP_GROQ_API_KEY, dangerouslyAllowBrowser: true});

export async function generateMoviesList(query) {
  const chatCompletion = await getGroqChatCompletion(query);
  // Print the completion returned by the LLM.
  console.log(chatCompletion.choices[0]?.message?.content || "");
  return chatCompletion;
}

export const getGroqChatCompletion = async (query) => {
  console.log(query);
  return groq.chat.completions.create({
    //
    // Required parameters
    //
    messages: [
      // Set an optional system message. This sets the behavior of the
      // assistant and can be used to provide specific instructions for
      // how it should behave throughout the conversation.
      {
        role: "system",
        content: "Act as a Movie recommendation system and suggest some movies. Only give the name of maximum 5 movies. Only give the movies name in the output and the output should be comma separated like the example result given ahead. Result Example: Amar, D15, Don, Jawan, Thangalan",
      },
      // Set a user message for the assistant to respond to.
      {
        role: "user",
        content: query,
      },
    ],

    // The language model which will generate the completion.
    model: "llama3-8b-8192",

    //
    // Optional parameters
    //

    // Controls randomness: lowering results in less random completions.
    // As the temperature approaches zero, the model will become deterministic
    // and repetitive.
    temperature: 0.5,

    // The maximum number of tokens to generate. Requests can use up to
    // 2048 tokens shared between prompt and completion.
    max_tokens: 1024,

    // Controls diversity via nucleus sampling: 0.5 means half of all
    // likelihood-weighted options are considered.
    top_p: 1,

    // A stop sequence is a predefined or user-specified text string that
    // signals an AI to stop generating content, ensuring its responses
    // remain focused and concise. Examples include punctuation marks and
    // markers like "[end]".
    stop: null,

    // If set, partial message deltas will be sent.
    stream: false,
  });
};