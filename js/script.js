// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    const scrollerContainer = document.querySelector('.scroller-container');
    if (!scrollerContainer) {
        console.error('Scroller container not found!');
        return;
    }

    // ... (Your Brand Colors and sectionsData array remain the same) ...
    const hotPink = '#FF2C84';
    const teal = '#00C7C7';
    const sunshineYellow = '#FFDD4A';
    const brandBlack = '#231F20';
    const brandWhite = '#FFFFFF';

    const sectionsData = [
        // Scroller 1: About Us
        {
            id: 'section1',
            mainText: 'About Us',
            bgColor: hotPink,
            textColor: brandBlack, 
            aboutUsText: "We're Uchi Vibe Music — Certified Vibe Dealers since day one.\nBorn in Pune, raised by chaos, bass drops, and 3 a.m. brainstorms, we're here to turn your \"maybe this is cool?\" into \"yo, this SLAPS.\"\n\nNo suits. No scripts. Just a bunch of music-heads on a mission to find the unfound, vibe with the unheard, and drop tracks that hit harder than Monday blues.\n\nPull up. Plug in. Welcome to the Uchi side.",
            linksPrefix: null,
            links: [],
            isClickable: true,
            scrollDirection: 'normal'
        },
        // Scroller 2: Upcoming Releases (Title)
        {
            id: 'section2',
            mainText: 'Upcoming Releases',
            bgColor: teal,
            textColor: brandBlack,
            linksPrefix: null,
            links: [],
            isClickable: false, // This is a title, not clickable itself to expand
            scrollDirection: 'reverse'
        },
        // Scroller 3: Raatein Halatein (Upcoming Song)
        {
            id: 'section3',
            mainText: 'Raatein Halatein',
            bgColor: sunshineYellow,
            textColor: brandBlack,
            releaseTagText: 'UPCOMING',
            releaseTagBgColor: brandBlack,
            releaseTagTextColor: sunshineYellow,
            linksPrefix: 'release date:',
            links: [ { text: '20 JULY 2025', url: '#' } ],
            isClickable: true,
            scrollDirection: 'normal'
        },
        // Scroller 4: Besabri (Upcoming Song)
        {
            id: 'section4',
            mainText: 'Besabri',
            bgColor: brandBlack, 
            textColor: brandWhite,
            releaseTagText: 'UPCOMING',
            releaseTagBgColor: hotPink, 
            releaseTagTextColor: brandBlack,
            linksPrefix: 'release date:',
            links: [ { text: '20 JULY 2025', url: '#' } ],
            isClickable: true,
            scrollDirection: 'reverse'
        },
        // Scroller 5: Zillat (Upcoming Song)
        {
            id: 'section5',
            mainText: 'Zillat',
            bgColor: hotPink,
            textColor: brandWhite, 
            releaseTagText: 'UPCOMING',
            releaseTagBgColor: brandWhite,
            releaseTagTextColor: brandBlack,
            linksPrefix: 'release date:',
            links: [ { text: '20 JULY 2025', url: '#' } ],
            isClickable: true,
            scrollDirection: 'normal'
        },
        // Scroller 6: Dil Zakhmi (Upcoming Song)
        {
            id: 'section6',
            mainText: 'Dil Zakhmi',
            bgColor: teal,
            textColor: brandBlack,
            releaseTagText: 'UPCOMING',
            releaseTagBgColor: brandBlack,
            releaseTagTextColor: teal,
            linksPrefix: 'release date:',
            links: [ { text: '20 JULY 2025', url: '#' } ],
            isClickable: true,
            scrollDirection: 'reverse'
        },
        // Scroller 7: Heath (Upcoming Song)
        {
            id: 'section7',
            mainText: 'Heath',
            bgColor: sunshineYellow,
            textColor: brandBlack,
            releaseTagText: 'UPCOMING',
            releaseTagBgColor: brandBlack,
            releaseTagTextColor: sunshineYellow,
            linksPrefix: 'release date:',
            links: [ { text: '20 JULY 2025', url: '#' } ],
            isClickable: true,
            scrollDirection: 'normal'
        },
        // Scroller 8: Waqt he mera (Upcoming Song)
        {
            id: 'section8',
            mainText: 'Waqt he mera',
            bgColor: brandBlack,
            textColor: brandWhite,
            releaseTagText: 'UPCOMING',
            releaseTagBgColor: teal, 
            releaseTagTextColor: brandBlack,
            linksPrefix: 'release date:',
            links: [ { text: '20 JULY 2025', url: '#' } ],
            isClickable: true,
            scrollDirection: 'reverse'
        },
        // Scroller 9: Current Releases (Title)
        {
            id: 'section9',
            mainText: 'Current Releases',
            bgColor: hotPink,
            textColor: brandBlack,
            linksPrefix: null,
            links: [],
            isClickable: false, // This is a title, not clickable itself to expand
            scrollDirection: 'normal'
        },
        // Scroller 10: Song One (Released)
        {
            id: 'section10',
            mainText: 'Song One',
            bgColor: teal,
            textColor: brandWhite, 
            releaseTagText: 'RELEASED',
            releaseTagBgColor: brandWhite,
            releaseTagTextColor: brandBlack,
            linksPrefix: 'Streaming On:',
            links: [
                { text: 'Spotify', url: '#' },
                { text: 'Jio Music', url: '#' },
                { text: 'Gaana', url: '#' }
            ],
            isClickable: true,
            scrollDirection: 'reverse'
        },
        // Scroller 11: Contact Us
        {
            id: 'section11',
            mainText: 'Contact Us',
            bgColor: sunshineYellow,
            textColor: brandBlack,
            linksPrefix: null, 
            links: [
                { text: 'Call Us', url: 'tel:+1234567890' },
                { text: 'Mail Us', url: 'mailto:info@example.com' }
            ],
            isClickable: true,
            scrollDirection: 'normal'
        }
    ];


    const marqueeRepetitions = 4;
    const originalAnimationDuration = 35;
    const adjustedAnimationDuration = originalAnimationDuration * (marqueeRepetitions / 2);

    sectionsData.forEach(data => {
        const section = document.createElement('div');
        section.classList.add('scroller-section');
        section.id = data.id; // Make sure each section has its ID set for # linking
        section.style.backgroundColor = data.bgColor;

        if (data.isClickable === false) {
            section.classList.add('scroller-section-non-clickable');
        }

        const visibleContent = document.createElement('div');
        visibleContent.classList.add('scroller-visible-content');

        const marqueeContent = document.createElement('div');
        marqueeContent.classList.add('marquee-content');
        marqueeContent.style.animationDuration = `${adjustedAnimationDuration}s`;
        marqueeContent.style.animationDirection = data.scrollDirection || 'normal';

        for (let i = 0; i < marqueeRepetitions; i++) {
            const marqueeItem = document.createElement('div');
            marqueeItem.classList.add('marquee-item');

            const mainTextSpan = document.createElement('span');
            mainTextSpan.classList.add('main-text');
            mainTextSpan.textContent = data.mainText;
            mainTextSpan.style.color = data.textColor;
            marqueeItem.appendChild(mainTextSpan);

            if (data.releaseTagText) {
                const releaseTagSpan = document.createElement('span');
                releaseTagSpan.classList.add('release-tag');
                releaseTagSpan.textContent = data.releaseTagText;
                releaseTagSpan.style.backgroundColor = data.releaseTagBgColor;
                releaseTagSpan.style.color = data.releaseTagTextColor;
                marqueeItem.appendChild(releaseTagSpan);
            }
            marqueeContent.appendChild(marqueeItem);
        }

        visibleContent.appendChild(marqueeContent);
        section.appendChild(visibleContent);

        const expandableContent = document.createElement('div');
        expandableContent.classList.add('scroller-expandable-content');

        if (data.isClickable !== false && data.id === 'section1' && data.aboutUsText) {
            const aboutUsContainer = document.createElement('div');
            aboutUsContainer.classList.add('about-us-content');
            data.aboutUsText.split('\n\n').forEach(paragraphText => {
                if (paragraphText.trim()) {
                    const p = document.createElement('p');
                    p.textContent = paragraphText.trim();
                    aboutUsContainer.appendChild(p);
                }
            });
            expandableContent.appendChild(aboutUsContainer);
        } else if (data.isClickable !== false && data.links && data.links.length > 0) {
            if (data.linksPrefix) {
                const prefixLabel = document.createElement('span');
                prefixLabel.classList.add('links-prefix');
                prefixLabel.textContent = data.linksPrefix;
                prefixLabel.style.color = data.textColor;
                expandableContent.appendChild(prefixLabel);
            }
            data.links.forEach(linkInfo => {
                const a = document.createElement('a');
                a.href = linkInfo.url;
                a.textContent = linkInfo.text;
                if (linkInfo.url.startsWith('http')) {
                    a.target = '_blank';
                    a.rel = 'noopener noreferrer';
                }
                a.style.color = data.textColor;
                expandableContent.appendChild(a);
            });
        }
        section.appendChild(expandableContent);

        visibleContent.addEventListener('click', () => {
            // For sections that are just titles (like Upcoming/Current Releases),
            // their 'isClickable' is false, so this click handler won't run for them.
            // But About Us and Contact Us are clickable.
            if (data.isClickable === false) {
                return;
            }

            const isExpanded = section.classList.contains('expanded');
            // Collapse all other sections before expanding the current one
            document.querySelectorAll('.scroller-section.expanded').forEach(expandedSec => {
                if (expandedSec !== section) {
                    expandedSec.classList.remove('expanded');
                    const otherExpandable = expandedSec.querySelector('.scroller-expandable-content');
                    if (otherExpandable) {
                        otherExpandable.style.maxHeight = '0';
                        otherExpandable.style.opacity = '0';
                        otherExpandable.style.paddingTop = '0';
                        otherExpandable.style.paddingBottom = '0';
                    }
                }
            });

            // Toggle current section
            if (isExpanded) {
                section.classList.remove('expanded');
                expandableContent.style.opacity = '0';
                expandableContent.style.maxHeight = '0';
                expandableContent.style.paddingTop = '0';
                expandableContent.style.paddingBottom = '0';
            } else {
                section.classList.add('expanded');
                expandableContent.style.paddingTop = '20px';
                expandableContent.style.paddingBottom = '20px';
                expandableContent.style.opacity = '1';
                const desiredMinHeight = 150;
                const actualScrollHeight = expandableContent.scrollHeight;
                expandableContent.style.maxHeight = Math.max(desiredMinHeight, actualScrollHeight) + 'px';
            }
        });
        scrollerContainer.appendChild(section);
    }); // End of sectionsData.forEach

    // --- White Circle Animation Code ---
    const whiteCircle = document.getElementById('white-circle');
    if (whiteCircle) {
        setTimeout(() => {
            whiteCircle.style.transition = 'opacity 1.75s ease, transform 1.75s ease';
            whiteCircle.style.opacity = '1';
            whiteCircle.style.transform = 'translateY(0px) skewY(0deg)';
        }, 50);
    }

    // --- NEW: Navigation Link Click Handler ---
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default hash jump
            const targetScrollerId = this.dataset.targetScroller;
            const targetSectionElement = document.getElementById(targetScrollerId);

            if (targetSectionElement) {
                // 1. Smooth scroll to the section
                targetSectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

                // 2. Open the dropdown for 'About Us' and 'Contact Us'
                //    For 'Upcoming' and 'Released', they are just titles, so no dropdown to open.
                const sectionData = sectionsData.find(s => s.id === targetScrollerId);
                if (sectionData && sectionData.isClickable === true) { // Only try to open if it's clickable
                    // Simulate a click on the visible part of the target scroller
                    // to trigger its existing expansion logic
                    const visibleContentOfTarget = targetSectionElement.querySelector('.scroller-visible-content');
                    if (visibleContentOfTarget) {
                        // Ensure it's not already expanded before clicking to avoid immediate collapse
                        if (!targetSectionElement.classList.contains('expanded')) {
                           setTimeout(() => { // Add a small delay for scroll to settle
                               visibleContentOfTarget.click();
                           }, 300); // Adjust delay if needed
                        } else {
                            // If already expanded, and it's the one we clicked, do nothing further.
                            // If it's another one that was expanded, our loop above already closed it.
                        }
                    }
                }
            }
        });
    });

    // --- Mobile Menu Toggle (if you keep the button) ---
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const desktopMenuLinks = document.getElementById('desktop-menu-links'); // Assuming you want to show/hide this
    if (mobileMenuToggle && desktopMenuLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            // This is a simple toggle, you might want a more sophisticated show/hide for mobile
            desktopMenuLinks.classList.toggle('hidden');
            desktopMenuLinks.classList.toggle('md:flex'); // This controls desktop visibility
            // For mobile, you'd likely want it to be 'flex flex-col' or similar when active
            if (!desktopMenuLinks.classList.contains('hidden')) {
                // Example: make it a column for mobile if it becomes visible
                desktopMenuLinks.classList.add('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 'bg-[#FFA500]', 'p-4', 'space-y-2');
                desktopMenuLinks.classList.remove('md:flex', 'md:items-center', 'md:ml-auto', 'md:space-x-6');
            } else {
                // Reset to desktop styles when hidden
                desktopMenuLinks.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 'bg-[#FFA500]', 'p-4', 'space-y-2');
                desktopMenuLinks.classList.add('md:flex', 'md:items-center', 'md:ml-auto', 'md:space-x-6');
            }
        });
    }


}); // End of DOMContentLoaded