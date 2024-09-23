document.addEventListener("DOMContentLoaded", () => {
	const hamburgerMenu = document.getElementById("hamburgerMenu");
	let isMenuOpen = false;

	hamburgerMenu.addEventListener("click", () => {
		isMenuOpen = !isMenuOpen;
		hamburgerMenu.classList.toggle("hamburgerOpen", isMenuOpen);

		if (hamburgerMenu.classList.contains("h-0")) {
			searchMember.classList.remove("h-0");
			searchMember.classList.add("h-[260px]");
			searchAccordionWho.classList.add(
				"rounded-b-none",
				"border-b",
				"border-neutral-100"
			);
			searchMemberTitle.textContent = "Who’s going?";
			searchMemberSelected.textContent = "1 Adult";
		} else {
			searchMember.classList.remove("h-[260px]");
			searchMember.classList.add("h-0");
			searchMember.addEventListener("transitionend", handleTransitionEnd);
			searchMemberTitle.textContent = "Who";
			searchMemberSelected.textContent = "Only me";
		}
	});
});

document.addEventListener("DOMContentLoaded", () => {
	const searchDatepicker = document.getElementById("searchDatepicker");
	const searchDatepickerTitle = document.querySelector(
		".searchDatepicker-title"
	);
	const searchDatepickerSelected = document.querySelector(
		".searchDatepicker-selected"
	);

	const searchAccordionWho = document.getElementById("searchAccordion-who");
	const searchMember = document.getElementById("searchMember");
	const searchMemberTitle = document.querySelector(".searchMember-title");
	const searchMemberSelected = document.querySelector(
		".searchMember-selected"
	);

	const removeTransitionStyles = element => {
		element.classList.remove(
			"rounded-b-none",
			"border-b",
			"border-neutral-100"
		);
	};

	const handleTransitionEnd = event => {
		if (event.propertyName === "height") {
			removeTransitionStyles(event.target.previousElementSibling);
			event.target.removeEventListener(
				"transitionend",
				handleTransitionEnd
			);
		}
	};

	searchDropdownWhen.addEventListener("click", () => {
		if (searchDatepicker.classList.contains("h-0")) {
			searchDatepicker.classList.remove("h-0");
			searchDatepicker.classList.add("h-[334px]");
			searchDropdownWhen.classList.add(
				"rounded-b-none",
				"border-b",
				"border-neutral-100"
			);
			searchDatepickerTitle.textContent = "When’s the trip?";
			searchDatepickerSelected.textContent = "Aug 1-3";
			searchDatepickerSelected.classList.remove("text-sm");
		} else {
			searchDatepicker.classList.remove("h-[334px]");
			searchDatepicker.classList.add("h-0");
			searchDatepicker.addEventListener(
				"transitionend",
				handleTransitionEnd
			);
			searchDatepickerTitle.textContent = "When";
			searchDatepickerSelected.textContent = "From tomorrow";
			searchDatepickerSelected.classList.add("text-sm");
		}
	});

	searchAccordionWho.addEventListener("click", () => {
		if (searchMember.classList.contains("h-0")) {
			searchMember.classList.remove("h-0");
			searchMember.classList.add("h-[260px]");
			searchAccordionWho.classList.add(
				"rounded-b-none",
				"border-b",
				"border-neutral-100"
			);
			searchMemberTitle.textContent = "Who’s going?";
			searchMemberSelected.textContent = "1 Adult";
		} else {
			searchMember.classList.remove("h-[260px]");
			searchMember.classList.add("h-0");
			searchMember.addEventListener("transitionend", handleTransitionEnd);
			searchMemberTitle.textContent = "Who";
			searchMemberSelected.textContent = "Only me";
		}
	});
});
