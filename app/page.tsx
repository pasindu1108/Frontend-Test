import Todo from "@/test/test";
import "./home.css";

export default function Home() {
    const email =
        "mailto: \u006d\u007a\u0068\u0040\u006c\u0065\u0074\u0073\u0073\u0074\u006f\u0070\u0061\u0069\u0064\u0073\u002e\u006f\u0072\u0067";
    return (
        <main>
            <div className="header-container">
                <h1>Test - React + NextJS</h1>
                <h4>
                    This test aims to test your skill(s) on ReactJS and NextJS.
                    The test is used for and only for LetsStopAIDS. Please do
                    not share this with anyone else.
                </h4>
                <div className="steps">
                    <h3>Steps:</h3>
                    <ol>
                        <li>
                            Code Location: Please complete your answer in{" "}
                            <code>modules/test</code>. You may start your answer
                            after <code>/Your Test Starts Here</code>
                        </li>
                     
                    </ol>
                </div>
            </div>
            <Todo />
        </main>
    );
}
