import React, { Component } from 'react';
import { DiJsBadge } from "react-icons/di";
import { FaLinkedin, FaGithub, FaMediumM, FaTwitter } from "react-icons/fa";
import Grid from '@material-ui/core/Grid';

export default class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="flexGrow: 1">
                <div className="about-box">
                <div className="about-text"><h1>About Martastic</h1></div>
                <br/>
                <p>Martastic is my final project for Flatiron School Atlanta's Software Engineering Immersive program.
                Marta has been a huge part of my life since July 1999, a few weeks after I first looked at web development.
                While the two things are not related in any way other than they came into my life at around the same time 20 years ago,
                I thought this was a good way to both end the program and come back to the path I should have stayed on back then.
                </p>
                <p>
                I am probably legally obligated to inform you that I am not in any way affiliated with the real 
                Metropolitan Atlanta Rapid Transit Authority (although I really appreciate their work!)
                </p>
                </div>

                <div className="stack-box">
                <div className="about-text"><h1>The Stack</h1></div>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                    spacing={3}
                    >
                    <Grid item l={4}>
                    <article>
                        <span>
                            <span className="iconify" data-icon="logos:ruby" data-inline="false"></span>
                            <span className="iconify" data-icon="logos:rails" data-inline="false"></span>
                            <span className="iconify" data-icon="logos:postgresql" data-inline="false"></span>
                            </span>
                        <h4>Ruby on Rails Backend</h4>
                        <h4>PostgreSQL DB</h4>
                    </article>
                    </Grid>
                    <Grid item l={4}>
                <article>
                    <span>
                        <DiJsBadge/>
                        <span className="iconify" data-icon="logos:react" data-inline="false"></span>
                        <span className="iconify" data-icon="logos:redux" data-inline="false"></span>
                        </span>
                    <h4>JS/React/Redux Frontend</h4>
                </article>
                </Grid>
                <Grid item l={4}>
                <article>
                    <span>
                        <span className="iconify" data-icon="logos:html-5" data-inline="false"></span>
                        <span className="iconify" data-icon="logos:css-3" data-inline="false"></span>
                        <span className="iconify" data-icon="logos:semantic-ui" data-inline="false"></span>
                        <span className="iconify" data-icon="mdi:material-ui" data-inline="false"></span>
                        </span>
                    <h4>HTML5/Custom CSS</h4>
                    <h4>+ Semantic UI</h4>
                    <h4>+ Material UI</h4>
                </article>
                </Grid>
                </Grid>
                </div>

                <div className="deka-box">
                <div className="about-text"><h1>About Deka</h1></div>
                <br/>
                <p>I first encountered the world of web development on July 1, 1999, through a service
                    called Expage. I eventually got tired of their very limited options (even for the time)
                    and started to learn HTML. Expage still had a lot on restrictions on what could be done on their pages, so
                    I moved on to Tripod and later Angelfire.
                    <a href="https://medium.com/@dekadekadeka/marquee-tags-and-mouse-trails-web-design-in-the-late-1990s-eb47df5cc75d">
                    More info in my Medium blog article</a>.</p>
                <p>I worked using FrontPage and later DreamWeaver, but at the time I felt that these weren't as efficient and kept building
                    pages the same way I always had, by looking at pre-made templates and the famous right-click-view-source. I never
                    bothered to learn JavaScript beyond simple button events and adding mouse trailers.
                </p>
                <p>Eventually, I sort of "faded out" of web development. I wish I could pinpoint the exact reason, the exact time,
                    the closest I can come up with is that I moved on to photo editing, but letting it go at that time is one of my biggest regrets.
                    I can only imagine where I would be today had I never given it up. 
                </p>
                <p>I started coding in Python on January 2019, not really knowing where I wanted to go with it other than I just needed to learn
                    how to code. I took an online course and found a Python meet-up that was hosted by a bootcamp, where they gave a short lesson
                    in that fast coding bootcamp style. That meet-up turned out to be an advertisement for that particular bootcamp, which I didn't end up  
                    joining, but the message stuck with me. 
                </p>
                <p>I joined Flatiron School on April 22, 2019 and officially began my coding journey. It's a real thing now, and this time
                    I hope to stick with it as a career for a very long time.
                </p>
                <div className="social">
                    <a href="https://github.com/dekadekadeka/"><FaGithub/></a>
                    <a href="https://www.linkedin.com/in/renee-deka-ambia-96731773/"><FaLinkedin/></a>
                    <a href="https://medium.com/@dekadekadeka"><FaMediumM/></a>
                    <a href="https://twitter.com/dekadekadeka/"><FaTwitter/></a>
                </div>
                </div>
            </div>
            </div>
        )
    }
}
