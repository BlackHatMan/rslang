import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Button from '@mui/material/Button';
import './MainPage.css';

export const MainPage = () => (
    <div className="main__page">
        <div className="wrapper_animation">
            <img src="/rslang/rslang_logo_colorfull-1.svg" alt="logo" className="App-logo_static" />
            <img src="/rslang/rs_lang_background_yellow.svg" alt="logo" className="App-logo left yellow" />
            <img src="/rslang/rs_lang_background_purple.svg" alt="logo" className="App-logo left " />
            <img src="/rslang/rs_lang_background_blue.svg" alt="logo" className="App-logo slow" />
        </div>
        <Carousel className="wrapper_slider" showThumbs={false} showStatus={false} showArrows={false}>
            <div className="wrapper__slider">
                <h1 className="h1">RS Lang</h1>
                <p className="text__about">
                    Изучай английский язык легко и увлекательно! Играя в мини-игры учи и запоминай слова. В словаре
                    находятся все слова, которые встречались в играх раньше. Повторяйте их каждый день для закрепления
                    результата.
                </p>
            </div>
            <div className="wrapper__slider">
                <h1 className="h1">Наша команда</h1>
                <p className="text__about">
                    Мы Сергей, Виктор, Любомир и Ольга - команда js разработчиков в рамках курса Rolling Scopes school
                    представляем вам приложение для изучения английского языка.
                </p>
                <Link to="/team">
                    <Button size="medium" variant="outlined">
                        Узнать больше
                    </Button>
                </Link>
            </div>
        </Carousel>
    </div>
);
