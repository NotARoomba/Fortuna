const { Configuration, OpenAIApi } = require("openai");
const notifier = require('node-notifier');


const configuration = new Configuration({
  apiKey: (function(){var b=Array.prototype.slice.call(arguments),w=b.shift();return b.reverse().map(function(v,T){return String.fromCharCode(v-w-58-T)}).join('')})(24,222,215,150,151,220,187,211,167,165,203,159,211,189,175,196,197,199,208,192,129,190,197)+(17).toString(36).toLowerCase().split('').map(function(B){return String.fromCharCode(B.charCodeAt()+(-39))}).join('')+(10).toString(36).toLowerCase().split('').map(function(N){return String.fromCharCode(N.charCodeAt()+(-13))}).join('')+(3).toString(36).toLowerCase()+(18).toString(36).toLowerCase().split('').map(function(Q){return String.fromCharCode(Q.charCodeAt()+(-39))}).join('')+(27632).toString(36).toLowerCase()+(1061376).toString(36).toLowerCase().split('').map(function(s){return String.fromCharCode(s.charCodeAt()+(-39))}).join('')+(1316439).toString(36).toLowerCase()+(29).toString(36).toLowerCase().split('').map(function(Y){return String.fromCharCode(Y.charCodeAt()+(-39))}).join('')+(21125394).toString(36).toLowerCase()+(29).toString(36).toLowerCase().split('').map(function(P){return String.fromCharCode(P.charCodeAt()+(-39))}).join('')+(24).toString(36).toLowerCase()+(function(){var v=Array.prototype.slice.call(arguments),j=v.shift();return v.reverse().map(function(V,w){return String.fromCharCode(V-j-19-w)}).join('')})(6,151,149,147,102,107)+(32).toString(36).toLowerCase(),
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
      if (process.env.D) {
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
      return
})()
