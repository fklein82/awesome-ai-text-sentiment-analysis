import { PorterStemmer, SentimentAnalyzer, WordTokenizer } from "natural";
import { removeStopwords } from "stopword";

const analyzer = new SentimentAnalyzer("English", PorterStemmer, "afinn");
const tokenizer = new WordTokenizer();

export default async (req, res) => {
    const { text } = req.body;

    const filteredText = text
        .replace("n't", " not")
        .replace("'s", " is")
        .replace("'re", " are")
        .replace("'ve", " have")
        .replace("'d", " would")
        .replace("'ll", " will")
        .replace("'m", " am")
        .replace(/[^a-zA-Z\s]+/g, "");

    console.log(`filteredText = ${filteredText}`);

    const tokens = tokenizer.tokenize(filteredText);
    console.log(`tokens = ${tokens}`);

    const filteredTokens = removeStopwords(tokens).map((token) =>
        token.toLowerCase()
    );
    console.log(`filteredTokens = ${filteredTokens}`);

    const score = await analyzer.getSentiment(filteredTokens);
    console.log(`score = ${score}/5`);

    const percent = Math.round((score / 5) * 100);
    console.log(`percent = ${percent}`);

    if (score > 0) {
        res.status(200).json({ percent, sentiment: "positive" });
    } else if (score < 0) {
        res.status(200).json({ percent, sentiment: "negative" });
    } else {
        res.status(200).json({ percent, sentiment: "neutral" });
    }
};
