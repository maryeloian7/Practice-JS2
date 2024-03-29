import modal from "./modules/modals";
import sliders from "./modules/slider";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoteSt";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import scrolling from "./modules/scrolling";
import drop from "./modules/drop";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modal();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn')
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="massage"]');
    showMoreStyles('.button-styles', '.styles-2');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    pictureSize('.sizes-block');
    accordion('.accordion-heading');
    burger('.burger-menu', '.burger');
    scrolling('.pageup');
    drop();
})