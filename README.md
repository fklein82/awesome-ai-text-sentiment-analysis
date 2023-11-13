
# Welcome to Awesome AI Accelerators! 🤖📖

## Text Analysis Accelerator with Node.js and ml5.js

This accelerator template leverages the power and simplicity of Node.js and Express to create an AI-driven Text Analysis Accelerator. It features sentiment analysis using a machine learning model from ml5.js, trained on movie reviews. The application provides a responsive and interactive user interface, making it easy to analyze the sentiment of various texts.

## Key Features

- Sentiment Analysis: Uses an ml5.js model trained on movie reviews to score text sentiment from 0 ("negative") to 10 ("positive").
- Efficient Text Processing: Capable of analyzing texts up to 200 words, focusing on the 20,000 most common words found in movie reviews.
- User-Friendly Interface: A clean and intuitive UI built with Materialize CSS, offering a straightforward way for users to input text and receive sentiment scores.
- Customizable Analysis Options: Allows users to adjust parameters like word limit for more flexible text analysis.

## Getting Started

To run this app, ensure you have Node.js and npm installed. Set up the application with these steps:

```bash
git clone [your-repo-link]
cd [your-repo-directory]
npm install
npm start
```
The app will be accessible at http://localhost:80.

Add the Accelerator on VMware Tanzu Application Platform

```bash
tanzu acc create awesome-ai-text-analysis --git-repo https://github.com/[your-git-username]/awesome-ai-text-analysis --git-branch main --interval 5s
```

## Deploying on VMware Tanzu Application Platform

Follow these steps to deploy on Tanzu:

Install and configure the Tanzu CLI.

Navigate to your project directory:

```bash
cd [your-repo-directory]
```

Deploy using the Tanzu CLI:

```bash
tanzu apps workload create -f config/workload.yaml
```

Monitor deployment status:

```bash
tanzu apps workload tail text-analysis --timestamp --since 1h
```

Access the application via the URL provided by Tanzu Application Platform.

## Overview

The index.html of this app includes:

- An input area for users to enter text.
- Display area for sentiment score results.
- Controls for adjusting analysis parameters.
- Integration with ml5.js for sentiment analysis.

## How to Contribute

Contributions are welcome to enhance the Text Analysis Accelerator. Open issues or submit pull requests with your suggestions or improvements.

## Please Note

The software is provided "as is", without any warranties. As the creator, I am not liable for any claims or liabilities arising from the use of this software.