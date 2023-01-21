const { Configuration, OpenAIApi } = require("openai");
const notifier = require('node-notifier');
require('dotenv').config({path:'./secrets.env'})


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

(async function () {
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "write a random inspirational quote with the author",
        max_tokens: 4000
      });
      quote = completion.data.choices[0].text.split('-');
      notifier.notify({
        title: "Daily Quote",
        message: quote[0].trim() + ' -' + quote[1].trim()
      });
      if (process.env.DAILY_FACT) {
        const fact = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "write a random fact",
            max_tokens: 4000
          });
          notifier.notify(
          {
            title: 'Daily Fact',
            message: fact.data.choices[0].text.trim(),
          }
        );
      }
})()
