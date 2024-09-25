const header = {
  homepage: 'https://idevender.github.io',
  title: 'DS',
}

const about = {
  name: 'Devender Singh',
  role: 'Software Developer',
  description:
    'I have a strong background in software development and research, and possess a strong foundation in machine learning, data science, and web development.',
  resume: 'https://drive.google.com/file/d/1SsuGwjglgR37BAbp5xjm2JYlhowjsvsx/view?usp=sharing', // Replace with your actual resume link if you have one
  social: {
    linkedin: 'https://www.linkedin.com/in/idevender/',
    github: 'https://github.com/idevender',
  },
}

const projects = [
  {
    name: 'EmotionSense',
    description:
      'Developed AI-based emotion recognition using PyTorch, fine-tuning a DenseNet model on a custom dataset achieving high accuracy and F1-score. Implemented Flask for API and React for the frontend.',
    stack: ['PyTorch', 'Python', 'DenseNet', 'Flask', 'React', 'JavaScript'],
    sourceCode: 'https://github.com/idevender/emotion-sense',
    // livePreview: 'https://github.com/', // TO DO
  },
  {
    name: 'ODE Housing Price Prediction',
    description:
      'Developed a model for predicting California housing prices using Ordinary Differential Equations (ODE) and compared it to Gradient Descent (GD) for evaluating convergence and performance.',
    stack: ['Python', 'ODE', 'Gradient Descent', 'NumPy', 'Pandas', 'Matplotlib'],
    sourceCode: 'https://github.com/idevender/housing-price-prediction-ODE',
    // livePreview: 'https://github.com/', // TO DO

  }, {
    name: 'ImmigraStat',
    description:
      'Built a web application using Vite, React for the frontend, and Node.js for backend API integration to conduct statistical analysis on the relationship between immigration status and employment outcomes among recent graduates. ',
    stack: ['Python', 'Statistics', 'React', 'Vite', 'Node.js', 'Express', 'JavaScript'],
    sourceCode: 'https://github.com/idevender/ImmigraStat',
    // livePreview: 'https://github.com/', //TO DO
  },

  // {
  //   name: 'Ultimate Tic Tac Toe',
  //   description:
  //     'An advanced multiplayer Tic Tac Toe game featuring a 9x9 board with multiple levels of strategy. Includes a leaderboard system, online multiplayer, and user authentication. Developed the frontend and backend with a focus on interactive gameplay.',
  //   stack: ['Python', 'Flask', 'JavaScript', 'HTML', 'CSS', 'SQLite'],
  //   sourceCode: 'https://github.com/idevender/ultimate-tic-tac-toe',
  //   // livePreview: 'https://github.com/', // TO DO
  // }

]

const skills = [
  'Java',
  'Python',
  'C++',
  'C#',
  'JavaScript',
  'SQL',
  'MLflow',
  'NumPy',
  'Pandas',
  'SciPy',
  'OpenCV',
  'TensorFlow',
  'PyTorch',
  'React.js',
  'Node.js',
  'Docker',
  'Kubernetes',
  'AWS',
  'Azure',
]

const contact = {
  email: 'devenders@mun.ca',
}

export { header, about, projects, skills, contact }
