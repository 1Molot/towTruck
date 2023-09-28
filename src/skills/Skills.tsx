import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css'
import {Title} from "../common/components/Title/Title";
import {Reveal} from "../common/components/Reveal/Reveal";
import {useMediaQuery} from 'react-responsive';

export const Skills = () => {

    const isMobile = useMediaQuery({maxWidth: 767});

    return (
        <section id="skills" className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Наши Услуги'}/>
                <Reveal>
                    {isMobile ? (
                        <h3 className={style.pText}>
                            Эвакуатор круглосуточно 24/7: Готовы помочь в любое время суток, доставим ваш автомобиль в
                            нужное место.
                            Грузоперевозки до 6 м и 2,5 тонн: Надежная и безопасная доставка грузов различных размеров и
                            весовых категорий.
                            Ровная площадка: Безопасная загрузка и разгрузка автомобилей и грузов без повреждений.
                            Работаем в Жлобине, Беларуси и России: Предоставляем услуги в Жлобине, области Беларуси и
                            осуществляем грузоперевозки в Россию.
                            Автомобильная помощь: Подкачка шин и прикуривание автомобиля на дороге.
                        </h3>
                    ) : (
                        <h3 className={style.pText}>
                            Эвакуатор круглосуточно 24/7: Мы готовы оказать помощь в любое время
                            суток, гарантируя оперативную эвакуацию вашего автомобиля. Независимо от того, где вы
                            находитесь
                            в Жлобине, области Республики Беларусь или Российской Федерации, мы приедем и доставим ваше
                            авто
                            в нужное место.
                            Грузоперевозки до 6 м и 2,5 тонн: Мы предоставляем услуги по перевозке грузов различных
                            размеров
                            и весовых категорий. Наша команда профессионалов обеспечит надежную и безопасную доставку
                            вашего
                            груза в указанное время и место.
                            Ровная площадка: Наша автоплощадка обладает ровной поверхностью, что обеспечивает безопасную
                            загрузку и разгрузку автомобилей и грузов. Мы гарантируем, что ваше авто или груз будут
                            установлены на площадку аккуратно и без повреждений.
                            Работаем в Жлобине, области Республики Беларусь и Российской Федерации: Мы предлагаем наши
                            услуги как в Жлобине, так и во всей области Республики Беларусь, а также осуществляем
                            грузоперевозки в Российскую Федерацию. Независимо от того, где вы находитесь, мы готовы
                            прийти
                            на помощь.
                            Автомобильная помощь: Мы также предлагаем услуги автомобильной помощи, включая подкачку шин
                            и
                            прикуривание автомобиля. Если у вас возникли проблемы на дороге, вы можете обратиться к нам,
                            и
                            мы окажем необходимую помощь.</h3>
                    )}
                </Reveal>
            </div>
        </section>
    )
}