// js/script.js
document.addEventListener('DOMContentLoaded', () => {
    const scrollerContainer = document.querySelector('.scroller-container');
    if (!scrollerContainer) {
        console.error('Scroller container not found!');
        return;
    }

    const hotPink = '#FF2C84';
    const teal = '#00C7C7';
    const sunshineYellow = '#FFDD4A';
    const brandBlack = '#231F20';
    const brandWhite = '#FFFFFF';
    const brandOrange = '#FFA500'; // Your orange color

    const sectionsData = [
        // Scroller 1: About Us (no release tag)
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
        // Scroller 2: Upcoming Releases (Title - no release tag)
        {
            id: 'section2',
            // CHANGE: use <span> with space, instead of <br>
            mainText: 'Upcoming <span class="line-break">Releases</span>',
            bgColor: teal,
            textColor: brandBlack,
            isClickable: false, // <-- ADD THIS LINE
            //... rest of object
        },
        // Scroller 3: Raatein Halatein (Upcoming Song)
        {
            id: 'section3',
            mainText: 'Raatein Halatein',
            bgColor: sunshineYellow,
            textColor: brandBlack,
            releaseTagText: 'UPCOMING',
            releaseTagBgColor: brandOrange, // CHANGED
            releaseTagTextColor: brandBlack, // CHANGED (or keep sunshineYellow if preferred for this specific one)
            linksPrefix: 'release date:',
            links: [{ text: '20 JULY 2025', url: '#' }],
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
            releaseTagBgColor: brandOrange, // CHANGED
            releaseTagTextColor: brandBlack, // CHANGED
            linksPrefix: 'release date:',
            links: [{ text: '20 JULY 2025', url: '#' }],
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
            releaseTagBgColor: brandOrange, // CHANGED
            releaseTagTextColor: brandBlack, // CHANGED
            linksPrefix: 'release date:',
            links: [{ text: '20 JULY 2025', url: '#' }],
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
            releaseTagBgColor: brandOrange, // CHANGED
            releaseTagTextColor: brandBlack, // CHANGED
            linksPrefix: 'release date:',
            links: [{ text: '20 JULY 2025', url: '#' }],
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
            releaseTagBgColor: brandOrange, // CHANGED
            releaseTagTextColor: brandBlack, // CHANGED
            linksPrefix: 'release date:',
            links: [{ text: '20 JULY 2025', url: '#' }],
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
            releaseTagBgColor: brandOrange, // CHANGED
            releaseTagTextColor: brandBlack, // CHANGED
            linksPrefix: 'release date:',
            links: [{ text: '20 JULY 2025', url: '#' }],
            isClickable: true,
            scrollDirection: 'reverse'
        },
        // Scroller 9: Current Releases (Title - no release tag)
        {
            id: 'section9',
            // CHANGE: use <span> with space, instead of <br>
            mainText: 'Current <span class="line-break">Releases</span>',
            bgColor: hotPink,
            textColor: brandBlack,
            isClickable: false, // <-- ADD THIS LINE
            //... rest of object
        },

        // Scroller 10: Song One (Released)
        {
            id: 'section10',
            mainText: 'Chand Da Tukda',
            bgColor: teal,
            textColor: brandWhite,
            releaseTagText: 'RELEASED',
            releaseTagBgColor: brandOrange, // CHANGED
            releaseTagTextColor: brandBlack, // CHANGED
            linksPrefix: 'Streaming On:',
            links: [
                { text: 'Spotify', url: '#' },
                { text: 'Jio Music', url: '#' },
                { text: 'Gaana', url: '#' }
            ],
            isClickable: true,
            scrollDirection: 'reverse'
        },
        // Scroller 11: Contact Us (no release tag)
        {
            id: 'section11',
            mainText: 'Contact Us',
            bgColor: sunshineYellow,
            textColor: brandBlack,
            linksPrefix: null,
            links: [
                { text: 'Mail Us', url: 'mailto:connect@uchivibemusic.com' },
                { text: 'Press', url: 'mailto:press@uchivibemusic.com' },
                { text: 'Talent', url: 'mailto:aurahunt@uchivibemusic.com' },
            ],
            isClickable: true,
            scrollDirection: 'normal'
        }
    ];

    const marqueeRepetitions = 4;
    const originalAnimationDuration = 10;
    const adjustedAnimationDuration = originalAnimationDuration * (marqueeRepetitions / 2);

    sectionsData.forEach(data => {
        const section = document.createElement('div');
        section.classList.add('scroller-section');
        section.id = data.id;
        section.style.backgroundColor = data.bgColor;

        if (data.isClickable === false) {
            section.classList.add('scroller-section-non-clickable');
        }

        const visibleContent = document.createElement('div');
        visibleContent.classList.add('scroller-visible-content');

        // ===== MODIFIED: Logic to handle static vs scrolling titles =====
        const isStaticTitle = (data.id === 'section2' || data.id === 'section9');

        if (isStaticTitle) {
            // It's a static title, so we center it and don't use the marquee
            visibleContent.classList.add('static-title-section');

            const mainTextSpan = document.createElement('span');
            mainTextSpan.classList.add('main-text');
            // MODIFIED: Use innerHTML to render the <br> tag correctly
            mainTextSpan.innerHTML = data.mainText;
            mainTextSpan.style.color = data.textColor;
            visibleContent.appendChild(mainTextSpan);

        } else {
            // It's a regular scrolling marquee
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
        }
        // ===== END MODIFICATION =====

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
                prefixLabel.style.color = data.textColor; // Use section's main text color for prefix
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
                a.style.color = data.textColor; // Use section's main text color for links
                expandableContent.appendChild(a);
            });
        }
        section.appendChild(expandableContent);

        visibleContent.addEventListener('click', () => {
            if (data.isClickable === false) {
                return;
            }

            const isExpanded = section.classList.contains('expanded');
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
    });

    const whiteCircle = document.getElementById('white-circle');
    if (whiteCircle) {
        setTimeout(() => {
            whiteCircle.style.transition = 'opacity 1.75s ease, transform 1.75s ease';
            whiteCircle.style.opacity = '1';
            whiteCircle.style.transform = 'translateY(0px) skewY(0deg)';
        }, 50);
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetScrollerId = this.dataset.targetScroller;
            const targetSectionElement = document.getElementById(targetScrollerId);

            if (targetSectionElement) {
                targetSectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                const sectionData = sectionsData.find(s => s.id === targetScrollerId);
                if (sectionData && sectionData.isClickable === true) {
                    const visibleContentOfTarget = targetSectionElement.querySelector('.scroller-visible-content');
                    if (visibleContentOfTarget) {
                        if (!targetSectionElement.classList.contains('expanded')) {
                            setTimeout(() => {
                                visibleContentOfTarget.click();
                            }, 300);
                        }
                    }
                }
            }
            const menuItemsContainer = document.getElementById('navbar-menu-items');
            if (menuItemsContainer && menuItemsContainer.classList.contains('active')) {
                menuItemsContainer.classList.remove('active');
                const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
                if (mobileMenuToggle) mobileMenuToggle.textContent = 'Menu';
            }
        });
    });

    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const menuItemsContainer = document.getElementById('navbar-menu-items');

    if (mobileMenuToggle && menuItemsContainer) {
        mobileMenuToggle.addEventListener('click', () => {
            menuItemsContainer.classList.toggle('active');
            if (menuItemsContainer.classList.contains('active')) {
                mobileMenuToggle.textContent = 'Close';
            } else {
                mobileMenuToggle.textContent = 'Menu';
            }
        });
    }

    // ===== MODIFIED: Sticky visualizer logic with mobile optimization =====
    const visualizer = document.querySelector("#sticky-visualizer");
    if (visualizer) {
        const bars = document.querySelectorAll(".visualizer-bar");
        const minBarWidth = 5;

        const animateBars = () => {
            // Check screen size inside the animation function to be responsive
            const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
            const maxBarWidth = isDesktop ? 105 : 35; // Use smaller max width on mobile

            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) : 0;

            bars.forEach((bar, index) => {
                // The wave calculation remains the same, producing values from -1 to 1
                const wave = Math.sin(scrollProgress * 15 + index * 1.5);
                // The width calculation now scales based on the responsive maxBarWidth
                const widthPercent = (wave + 1) / 2; // Normalize wave to 0-1 range
                const newWidth = minBarWidth + (widthPercent * maxBarWidth);

                bar.style.width = `${newWidth}px`;
            });
        };

        window.addEventListener('scroll', () => {
            window.requestAnimationFrame(animateBars);
        });

        // Also listen for resize to re-evaluate on orientation change etc.
        window.addEventListener('resize', () => {
            window.requestAnimationFrame(animateBars);
        });

        // Initial animation call
        animateBars();
    }
    // ===== END MODIFICATION =====

});