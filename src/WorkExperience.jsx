import React from 'react';
import { Chrono } from 'react-chrono';

const WorkExperience = () => {
  const data = [
    {
      title: "QTack LLC",
      cardTitle: "CTO",
      cardSubtitle: "2023",
      cardDetailedText: `I am currently working at a startup named QTack, where we develop tools to automate data pipeline creation using language models such as LLaMA and GPT-4. I designed the framework for generating data pipelines and automatic correlational analysis reports in our product, autocorrelate. I'm also developing code to auto-deploy these pipelines to cloud services like AWS, providing end users with an API for generating predictions. I engage with clients weekly to refine requirements and update them on our agile workflow. Additionally, I am creating QTack's website from Figma designs. The final version will be available at qtack.com upon completion.`,
    },
    {
      title: "Point Drift",
      cardTitle: "Co-Founder",
      cardSubtitle: "2023",
      cardDetailedText: "At Point Drift, I worked on developing a context-aware programming assistant, creating variants of LLaMA to comprehend large code blocks before similar models like CodeLlama and Wizard Coder emerged. I devised methods to index code for easy reference by language models and explored training facts directly into them using ROME and MEMIT papers. We ultimately chose a GPT-based implementation with custom indexing for superior performance. During the project's customer discovery phase, my co-founders and I personally interviewed hundreds of developers across multiple organizations. I also created an MVP for this project that could demonstrate the functionality of the models we created to end users and oversaw the testing of it.",
    },
    {
      title: "Boston University",
      cardTitle: "Research Intern",
      cardSubtitle: "2021",
      cardDetailedText: "During my internship at Boston University, I developed machine learning models using Tensorflow to efficiently assess the quality of large whole slide images, which traditionally required time-consuming manual verification. I trained these models on the university's High-Performance Compute Clusters and created an external SQL database to streamline data retrieval and monitor training progress. Additionally, I utilized Numpy and Pandas for data processing. Collaborating with a master's student and a postdoc, I also led weekly stand-ups to track our team's progress.",
    }
  ];

  return (
    <div className="work-experience-section">
        <Chrono items={data}
            mode="VERTICAL" 
            slideShow
            theme={{
                primary: '#274F47',
                secondary: '#6F8A5D',
                cardBgColor: '#233532',
                cardTitleColor: '#E4E0E2',
                cardSubtitleColor: "#E4E0E2",
                cardDetailsColor: "#E4E0E2",
                titleColor: '#E4E0E2',
                titleColorActive: 'black',
            }}
        />
    </div>
  );
}

export default WorkExperience;
