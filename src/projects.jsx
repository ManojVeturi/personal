import youtube from './assets/youtube.png';
import tictactoe from './assets/tictactoe.png';
import weather from './assets/weather.png';
import commerce from './assets/e-commerce.png';
import sign from './assets/sign-in.png';
import game from './assets/2048.png';

function Projects() {

    return (
        <section class="project-section" id="Projects">
            <h2>Projects</h2>
            <div class="project-list" tabindex="0" role="list">
                <article class="card" role="listitem" tabindex="0">
                    <a href="https://manojveturi.github.io/tictactoe/" target="_main">
                    <img src={tictactoe} />
                    </a>
                    <div class="card-content">
                        <h3 class="card-title">Tic Tac Toe</h3>
                    </div>
                </article>
                <article class="card" role="listitem" tabindex="0">
                    <a  href="https://manojveturi.github.io/2048/" target="_main">
                    <img src={game} />
                    </a>
                    <div class="card-content">
                        <h3 class="card-title">2048</h3>
                    </div>
                </article>
                <article class="card" role="listitem" tabindex="0">
                    <a href="https://manojveturi.github.io/signin-and-signout-clone-page/" target="_main">
                    <img src={sign} />
                    </a>
                    <div class="card-content">
                        <h3 class="card-title">sign-in clone page</h3>
                    </div>
                </article>
                <article class="card" role="listitem" tabindex="0">
                    <a href="https://manojveturi.github.io/e-commerce/" target="_main">
                    <img src={commerce} />
                    </a>
                    <div class="card-content">
                        <h3 class="card-title">E-Commerce</h3>
                    </div>
                </article>
                <article class="card" role="listitem" tabindex="0">
                    <a  href="" target="_main">
                    <img src={youtube} />
                    </a>
                    <div class="card-content">
                        <h3 class="card-title">Youtube clone page</h3>
                    </div>
                </article>
                <article class="card" role="listitem" tabindex="0">
                    <a  href="https://manojveturi.github.io/weather/" target="_main">
                    <img src={weather} />
                    </a>
                    <div class="card-content">
                        <h3 class="card-title">Weather App</h3>
                    </div>
                </article>
            </div>
        </section>
    );
}
export default Projects;