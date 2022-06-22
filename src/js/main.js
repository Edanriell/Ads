import "../sass/style.scss";

import "swiper/css";
import Swiper, {
	Navigation,
	Pagination,
	Autoplay,
	Keyboard,
	EffectCreative,
	EffectCards
} from "swiper";

import SlideText from "./components/slider/helpers";
import { Modal } from "./components/modal/modal";
import { Forms } from "./components/forms/forms";
import { FormValidation } from "./components/formValidation/formValidation";
import { InputMask } from "./components/inputMask/inputMask";
import { Tabs } from "./components/tabs/tabs";
import { Scroll } from "./components/scroll/scroll";

Swiper.use([Navigation, Pagination, Autoplay, Keyboard, EffectCreative, EffectCards]);

window.addEventListener("DOMContentLoaded", () => {
	const modal = new Modal({
		trigger: "#ButtonModal",
		modal: ".Modal",
		underlay: ".ModalUnderlay",
		closeButton: ".Modal-CloseButton"
	});

	const modalSlider = new Swiper(".ModalSlider-SliderContent", {
		modules: [SlideText],
		direction: "vertical",
		effect: "cards",
		autoplay: {
			delay: 6000,
			disableOnInteraction: false
		},
		navigation: {
			nextEl: ".ModalSlider-NextSlide",
			prevEl: ".ModalSlider-PrevSlide"
		},
		pagination: {
			el: ".ModalSlider-Pagination",
			clickable: false,
			bulletClass: "ModalSlider-PaginationBullet",
			bulletActiveClass: "ModalSlider-PaginationBulletActive",
			renderBullet: (index, className) => {
				return `<button class="${className}"><span class="VisuallyHidden">${
					index + 1
				} Слайд</span></button>`;
			}
		},
		cardsEffect: {
			slideShadows: false,
			rotate: false
		},
		grabCursor: true
	});

	const modalForm = new Forms({
		formSelector: ".ModalForm",
		submitButton: ".ModalForm-SubmitButton",
		databaseName: "ordersLong"
	});

	const modalFormValidation = new FormValidation({
		form: ".ModalForm",
		inputs: [
			{
				uniqueName: "name",
				selector: ".ModalForm-NameInput",
				testRegExp:
					// eslint-disable-next-line max-len
					/^([а-яё]+|[a-z]+)$/i,
				style: {
					valid: `
						border: 2px solid green;
					`,
					unvalid: `
						border: 2px solid red;
					`
				},
				errorMessage: {
					messageText: "Допускаются только буквы",
					messageStyle: `
						color: red;
						position: absolute;
						font-size: 1.1rem;
						bottom: 0.2rem;
						right: 0;
						z-index: 4;
						font-family: var(--light-font);
					`
				}
			},
			{
				uniqueName: "address",
				selector: ".ModalForm-AddressInput",
				testRegExp:
					// eslint-disable-next-line max-len
					/^[a-zа-яё1-9\s]+$/iu,
				style: {
					valid: `
						border: 2px solid green;
					`,
					unvalid: `
						border: 2px solid red;
					`
				},
				errorMessage: {
					messageText: "Допускаются только буквы и цифры",
					messageStyle: `
						color: red;
						position: absolute;
						font-size: 1.1rem;
						bottom: 0.2rem;
						right: 0;
						z-index: 4;
						font-family: var(--light-font);
					`
				}
			},
			{
				uniqueName: "email",
				selector: ".ModalForm-EmailInput",
				testRegExp:
					// eslint-disable-next-line max-len
					/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
				style: {
					valid: `
						border: 2px solid green;
					`,
					unvalid: `
						border: 2px solid red;
					`
				},
				errorMessage: {
					messageText: "Неверный формат электронной почты",
					messageStyle: `
						color: red;
						position: absolute;
						font-size: 1.1rem;
						bottom: 0.2rem;
						right: 0;
						z-index: 4;
						font-family: var(--light-font);
					`
				}
			},
			{
				uniqueName: "phone",
				selector: ".ModalForm-PhoneInput",
				testRegExp:
					// eslint-disable-next-line max-len
					/([^\w\d])+/g,
				style: {
					valid: `
						border: 2px solid green;
					`,
					unvalid: `
						border: 2px solid red;
					`
				},
				errorMessage: {
					messageText: "Неверный формат номера",
					messageStyle: `
						color: red;
						position: absolute;
						font-size: 1.1rem;
						bottom: 0.2rem;
						right: 0;
						z-index: 4;
						font-family: var(--light-font);
					`
				}
			}
		],
		initialInputStyle: `
			border: 2px solid #f0f0f0;
		`,
		submitButton: ".ModalForm-SubmitButton"
	});

	const phoneForm1 = new Forms({
		formSelector: "#PhoneForm1",
		submitButton: "#PhoneForm1-SubmitButton",
		databaseName: "ordersShort"
	});

	const phoneForm2 = new Forms({
		formSelector: "#PhoneForm2",
		submitButton: "#PhoneForm2-SubmitButton",
		databaseName: "ordersShort"
	});

	const phoneForm3 = new Forms({
		formSelector: "#PhoneForm3",
		submitButton: "#PhoneForm3-SubmitButton",
		databaseName: "ordersShort"
	});

	const phoneForm1Mask = new InputMask({
		targetInputSelector: "[name='CustomerNumber0']"
	});

	const phoneForm2Mask = new InputMask({
		targetInputSelector: "[name='CustomerNumber1']"
	});

	const phoneForm3Mask = new InputMask({
		targetInputSelector: "[name='CustomerNumber2']"
	});

	const tabs = new Tabs({
		triggerButtons: ".CityList-Item",
		tabElements: ".CityStatistics"
	});

	const scroll = new Scroll({
		triggerButton: ".Scroll",
		targetHeight: 1000
	});

	modal.init();
	modalSlider.init();
	modalForm.init();
	modalFormValidation.init();
	phoneForm1.init();
	phoneForm2.init();
	phoneForm3.init();
	phoneForm1Mask.init();
	phoneForm2Mask.init();
	phoneForm3Mask.init();
	tabs.init();
	scroll.init();
});
