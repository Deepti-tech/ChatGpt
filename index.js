// import { Configuration, OpenAIApi } from "openai";
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-OATmn4G1MUCnqjLyjpXoKehJ",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

async function callApi(){
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
      });
      console.log(response.data.choices[0].text)
}
callApi()

