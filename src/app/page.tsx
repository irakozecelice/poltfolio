// src/app/page.tsx

import Image from 'next/image';
import Layout from './layout'; // Import the Layout component
import '../styles/global.css'; // Import the global CSS file

export default function Home() {
    return (
        <Layout>
            <section id="about">
                <h2>About Me</h2>
                <p>Hello! I&apos;m a web developer with a passion for creating beautiful and functional websites.</p>
                <h3>MY STRUCTURE CV</h3>
                <p>
                    My name is IRAKOZE Celice, I am L5 Software Development student,
                    so I am a fullstack developer in EAV KIVUMU TSS. This is my simple website that shows you my portfolio now.
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
                        <h3>Machine Learning Development</h3>
                        <p>
                            Machine learning development is the process of building computer algorithms that can learn from data
                            and improve their performance over time. It involves several key stages, including data collection,
                            preparation, model selection, training, evaluation, deployment, and ongoing maintenance. The goal is to
                            create models that can accurately predict or classify new, unseen data without being explicitly programmed.
                        </p>
                        <Image
                            src="/4.jfif" // Path to your project image
                            alt="Project 1 Screenshot"
                            width={800}
                            height={400}
                        />
                    </li>
                    <li>
                        <h3>Coding Practices and Design</h3>
                        <p>
                            Coding, also known as computer programming, is the process of writing instructions (code) that a computer
                            can follow to perform specific tasks. It involves using programming languages to create programs that solve
                            problems or automate processes. <br />
                            In simpler terms: Coding is how humans communicate with computers, using a special language that computers understand. <br />
                            Here&apos;s a more detailed breakdown: <br />
                            <strong>What it is:</strong> Coding is the art of creating instructions for a computer to follow,
                            essentially telling it what to do and how to do it. <br />
                            <strong>Why it&apos;s important:</strong> It&apos;s fundamental to virtually all aspects of modern technology,
                            from software and websites to mobile apps and artificial intelligence. <br />
                            <strong>How it works:</strong> Coding uses programming languages (like Python, Java, JavaScript, etc.) that
                            have specific rules and syntax for writing instructions. <br />
                            <strong>Key concepts:</strong><br />
                            &bull; <strong>Algorithms:</strong> Step-by-step procedures or instructions for solving a problem. <br />
                            &bull; <strong>Variables:</strong> Storage locations in a computer&apos;s memory that can hold values (like numbers, text, or data). <br />
                            &bull; <strong>Data types:</strong> Categories of data, such as numbers, text, or lists, that determine how variables can be used. <br />
                            &bull; <strong>Operators:</strong> Symbols that perform actions on variables, like adding, subtracting, or comparing. <br />
                            &bull; <strong>Loops:</strong> Structures that allow code to be repeated multiple times. <br />
                            &bull; <strong>Conditions:</strong> Statements that allow code to be executed or skipped based on whether a condition is true or false. <br />
                            &bull; <strong>Functions:</strong> Reusable blocks of code that perform specific tasks. <br />
                            <strong>Benefits of learning to code:</strong><br />
                            &bull; Problem-solving skills: Coding encourages logical thinking and problem-solving abilities. <br />
                            &bull; Creativity and innovation: It allows you to create your own software, websites, and apps, and explore new ideas. <br />
                            &bull; Career opportunities: Coding skills are highly sought after in many industries. <br />
                            <strong>Where to learn:</strong> Numerous online resources and platforms offer free or paid coding courses, including Codecademy, freeCodeCamp, Code.org, and CodinGame.
                        </p>
                        <Image
                            src="/1.jfif"  // Path to your project image
                            alt="Project 2 Screenshot"
                            width={700}
                            height={300}
                        />
                    </li>
                    <li>
                        <h3>Backend and Frontend Development</h3>
                        <p>
                            This is the most popular approach. It generally uses HTTP request and response methods in order to exchange data
                            in a normalized format. The backend exposes different endpoints for multiple functionalities, and then frontend
                            makes calls to these endpoints in order to retrieve or manipulate data.
                        </p>
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
                <p>If you&apos;d like to get in touch, feel free to reach out!</p>
                <p>Email: <a href="mailto:irakozecelice@gmail.com">irakozecelice@gmail.com</a></p>
                <p>Tel: 0794620412</p>
            </section>
        </Layout>
    );
}
