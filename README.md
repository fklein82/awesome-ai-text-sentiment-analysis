# Sentiment Analysis Application

This is a Next.js project bootstrapped with `create-next-app`, specifically designed for sentiment analysis. It leverages the React framework for building the user interface on the frontend, complemented by a Node.js server for the API backend.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result. The page auto-updates as you edit pages/index.tsx, which is built using the React framework.

## API and Analysis Functionality
Sentiment analysis is conducted through an API endpoint at http://localhost:3000/api/analyze. Modify the API logic in pages/api/analyze.ts. This endpoint accepts text input, processes it, and returns sentiment analysis results.

Files in pages/api serve as API routes, providing backend functionality for the sentiment analysis feature.

## User Interface
The main user interface, developed with React, is located in pages/index.tsx. This interface allows users to input text, submit it for analysis, and view the sentiment results along with confidence percentages. React's component-based architecture facilitates an efficient and interactive user experience.

## Deploy on VMware Tanzu Application Platform (TAP)
To deploy your sentiment analysis app on TAP:

## Prepare Your App for TAP:
Ensure your app adheres to TAP's deployment requirements.
Package your app according to TAP standards.

## Deploy Using Tanzu CLI:
Use the Tanzu CLI to deploy your app. Run the following command in your project's root directory:

```shell
tanzu apps workload apply -f [path-to-your-workload-config].yaml --namespace [your-namespace]
```

Replace [path-to-your-workload-config].yaml with the path to your workload configuration file and [your-namespace] with your designated Kubernetes namespace.

## Access Your Deployed App:
Once deployed, access your app using the URL provided by TAP.
For more details, refer to the TAP documentation.