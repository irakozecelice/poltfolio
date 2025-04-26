// src/app/page.tsx

import Image from 'next/image';
import Layout from './layout'; // Import the Layout component
import '../styles/global.css'; // Import the global CSS file

export default function Home() {
    return (
        <Layout>
            <section id="about">
                <h2>About Me</h2>
                <p>Hello! I'm a web developer with a passion for creating beautiful and functional websites.</p>
                <h3>MY STRUCTURE CV</h3>
                        <p>My name is IRAKOZE Celice i am l5 software development student
                            so i am fullstack developer in EAV KIVUMU TSS. Tis is my simple website that shows you my portifolio now.
                        </p>
                <Image
                    src="/celice.jpg" // Path to your profile image
                    alt="Profile Picture"
                    width={150}
                    height={150}
                />
            </section>

            <section id="projects">
                <h2>My Projects</h2>
                <ul>
                    <li>
                        <h3>machine learning development</h3>
                        <p>Machine learning development is the process of building computer algorithms that can learn from data and improve their performance over time. It involves several key stages, including data collection, preparation, model selection, training, evaluation, deployment, and ongoing maintenance. The goal is to create models that can accurately predict or classify new, unseen data without being explicitly programmed
                        </p>
                        <Image
                            src="/4.jfif" // Path to your project image
                            alt="Project 1 Screenshot"
                            width={800}
                            height={400}
                        />
                    </li>
                    <li>
                        <h3>CODING PRACTICES AND DESIGN</h3>
                        <p>Coding, also known as computer programming, is the process of writing instructions (code) that a computer can follow to perform specific tasks. It involves using programming languages to create programs that solve problems or automate processes. 
In simpler terms: Coding is how humans communicate with computers, using a special language that computers understand. 
Here's a more detailed breakdown:
What it is:
Coding is the art of creating instructions for a computer to follow, essentially telling it what to do and how to do it. 
Why it's important:
It's fundamental to virtually all aspects of modern technology, from software and websites to mobile apps and artificial intelligence. 
How it works:
Coding uses programming languages (like Python, Java, JavaScript, etc.) that have specific rules and syntax for writing instructions. 
Key concepts:
Algorithms: Step-by-step procedures or instructions for solving a problem.
Variables: Storage locations in a computer's memory that can hold values (like numbers, text, or data). 
Data types: Categories of data, such as numbers, text, or lists, that determine how variables can be used. 
Operators: Symbols that perform actions on variables, like adding, subtracting, or comparing. 
Loops: Structures that allow code to be repeated multiple times. 
Conditions: Statements that allow code to be executed or skipped based on whether a condition is true or false. 
Functions: Reusable blocks of code that perform specific tasks. 
Benefits of learning to code:
Problem-solving skills: Coding encourages logical thinking and problem-solving abilities. 
Creativity and innovation: It allows you to create your own software, websites, and apps, and explore new ideas. 
Career opportunities: Coding skills are highly sought after in many industries. 
Where to learn:
Numerous online resources and platforms offer free or paid coding courses, including Codecademy, freeCodeCamp, Code.org, and CodinGame. 
Learn to Code - for Free | Codecademy

Codecademy

What Is Coding and What Is It Used For | ComputerScience.org
Coding tells a machine which actions to perform and how to complete tasks. Programming languages provide the rules for building we...

ComputerScience.org

Learn today, build a brighter tomorrow. | Code.org

Code.org

Show all
.</p>
                        <Image
                            src="/1.jfif"  // Path to your project image
                            alt="Project 2 Screenshot"
                            width={700}
                            height={300}
                        />
                    </li>
                    <li>
                        <h3>BACKEND AND FRONTEND DEVELOPMENT</h3>
                        <p>This is the most popular approach. It generally uses HTTP request and response methods in order to exchange data in a normalize format. The backend exposes different endpoints for multiple functionalities, and then frontend makes calls to these endpoints in order to retrieve or manipulate data.</p>
                        <Image
                            src="/download.png" // Path to your project image
                            alt="Project 3 Screenshot"
                            width={700}
                            height={300}
                        />
                    </li>
                </ul>
            </section>
            <section id="contact">
                <h2>Contact Me</h2>
                <p>If you'd like to get in touch, feel free to reach out!</p>
                <p>Email: <a href="your email@example.com">irakozecelice@gmail.com</a></p>
                <p>tel:0794620412</p>
            </section>
        </Layout>
    );
}