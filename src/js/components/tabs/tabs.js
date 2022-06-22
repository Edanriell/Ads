import { gsap } from "gsap";

class Tabs {
	timeline = gsap.timeline({ delay: 1 });

	constructor({ triggerButtons, tabElements }) {
		this.triggers = document.querySelectorAll(triggerButtons);
		this.elements = document.querySelectorAll(tabElements);
	}

	init() {
		for (const trigger of this.triggers) {
			trigger.addEventListener("click", event => {
				event.preventDefault();
				this.#temporarilyDisableTriggers(this.triggers);
				this.#switchTab(event.target);
			});
		}
	}

	#switchTab(button) {
		const targetTabId = this.#getTabData(button);
		const tab = this.#filterTabs(targetTabId);
		this.#hideInactiveButton(this.triggers);
		this.#showActiveButton(button);
		this.#hideTab(this.elements);
		this.#displayTargetTab(tab);
	}

	#getTabData(button) {
		return button.getAttribute("data-targetTab");
	}

	#filterTabs(id) {
		const targetTab = [...this.elements].filter(tab => {
			return tab.getAttribute("data-tab") === id ? tab : null;
		});
		return targetTab;
	}

	#hideTab(elements) {
		for (const element of elements) {
			if (element.classList.contains("CityStatistics-Active")) {
				this.timeline.fromTo(
					element,
					{ opacity: 1, display: "grid", x: 0 },
					{ opacity: 0, display: "none", x: 40, duration: 0.6, ease: "power3.out" }
				);
				element.classList.remove("CityStatistics-Active");
			}
		}
	}

	#displayTargetTab(element) {
		element[0].classList.add("CityStatistics-Active");
		this.timeline.fromTo(
			element,
			{ opacity: 0, display: "none", x: 40 },
			{ opacity: 1, display: "grid", x: 0, duration: 0.6, ease: "power3.out" }
		);
	}

	#hideInactiveButton(allTriggers) {
		for (const trigger of allTriggers) {
			if (trigger.children[0].classList.contains("CityList-ButtonActive")) {
				trigger.children[0].classList.remove("CityList-ButtonActive");
			}
		}
	}

	#showActiveButton(button) {
		button.classList.add("CityList-ButtonActive");
	}

	#temporarilyDisableTriggers(triggers) {
		for (const trigger of triggers) {
			trigger.style.cssText = `
				pointer-events: none;
				user-select: none;
			`;
		}
		setTimeout(() => {
			for (const trigger of triggers) {
				trigger.style.cssText = `
					pointer-events: auto;
					user-select: auto;
				`;
			}
		}, 1200);
	}
}

export { Tabs };
