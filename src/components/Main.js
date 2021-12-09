import React from 'react';
import './Main.css'
import MainIconArticles from './MainIconArticles';
import MainRecipe from './MainRecipe';


const Main = () => {
    return (
        <main>
            <p class="greenText bold">What We Do</p>
            <h1>We´ve got everything you neet to launch and grow your business</h1>
            <section class="iconText">
                <article>
                    <MainIconArticles />
                    <MainIconArticles />
                </article>
                <article>
                    <MainIconArticles />
                    <MainIconArticles />
                </article>
            </section>
            <section class="recipes">
                <article>
                    <MainRecipe/>
                    <MainRecipe/>
                    <MainRecipe/>
                    <MainRecipe/>
                    <MainRecipe/>
                    <MainRecipe/>
                    <MainRecipe/>
                    <MainRecipe/>
                </article>
            </section>
        </main>

    );
}

export default Main;