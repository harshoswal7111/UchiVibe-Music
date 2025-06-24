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
    const brandOrange = '#FFA500';

    const sectionsData = [
        // Scroller 1: About Us (No change)
        {
            id: 'section1',
            mainText: 'About Us',
            bgColor: hotPink,
            textColor: brandBlack,
            aboutUsText: "We're Uchi Vibe Music — Certified Vibe Dealers since day one.\nBorn in Pune, raised by chaos, bass drops, and 3 a.m. brainstorms, we're here to turn your \"maybe this is cool?\" into \"yo, this SLAPS.\"\n\nNo suits. No scripts. Just a bunch of music-heads on a mission to find the unfound, vibe with the unheard, and drop tracks that hit harder than Monday blues.\n\nPull up. Plug in. Welcome to the Uchi side.",
            isClickable: true,
            scrollDirection: 'normal'
        },

        // --- MOVED & MODIFIED: "Next Up" Section ---
        {
            id: 'sectionNextUp',
            mainText: 'Next Up? Might Be You',
            bgColor: brandBlack,
            textColor: brandWhite,
            // MODIFIED: Text updated to match image, with line breaks
            aboutUsText: "We don't chase trends. We discover moments. Could your track be the next one?\n\nNext up? Might be you.",
            links: [{
                // MODIFIED: Button text updated
                text: 'Discovery Form',
                url: 'https://docs.google.com/forms/d/e/1FAIpQLScNjMldLsDTSAq9mUBsLd9IRnO6MxCasVmfGhYO_m2ehhH45g/viewform?usp=header',
                isButton: true
            }],
            isClickable: true,
            scrollDirection: 'normal',
            // ADDED: Special layout identifier for CSS
            customLayout: 'next-up-layout'
        },

        // Scroller 2: Upcoming Releases Title
        {
            id: 'section2',
            mainText: 'Upcoming <span class="line-break">Releases</span>',
            bgColor: teal,
            textColor: brandBlack,
            isClickable: false,
        },
        // ... (rest of the songs)
        {
            id: 'section3',
            mainText: 'Raatein Halatein',
            bgColor: sunshineYellow,
            textColor: brandBlack,
            releaseTagText: 'UPCOMING',
            releaseTagBgColor: brandOrange,
            releaseTagTextColor: brandBlack,
            linksPrefix: 'release date:',
            links: [{ text: '20 JULY 2025', url: '#' }],
            isClickable: true,
            scrollDirection: 'normal'
        },
        {
            id: 'section4',
            mainText: 'Besabri',
            bgColor: brandBlack,
            textColor: brandWhite,
            releaseTagText: 'UPCOMING',
            releaseTagBgColor: brandOrange,
            releaseTagTextColor: brandBlack,
            linksPrefix: 'release date:',
            links: [{ text: '20 JULY 2025', url: '#' }],
            isClickable: true,
            scrollDirection: 'reverse'
        },
        {
            id: 'section5',
            mainText: 'Zillat',
            bgColor: hotPink,
            textColor: brandWhite,
            releaseTagText: 'UPCOMING',
            releaseTagBgColor: brandOrange,
            releaseTagTextColor: brandBlack,
            linksPrefix: 'release date:',
            links: [{ text: '20 JULY 2025', url: '#' }],
            isClickable: true,
            scrollDirection: 'normal'
        },
        {
            id: 'section6',
            mainText: 'Dil Zakhmi',
            bgColor: teal,
            textColor: brandBlack,
            releaseTagText: 'UPCOMING',
            releaseTagBgColor: brandOrange,
            releaseTagTextColor: brandBlack,
            linksPrefix: 'release date:',
            links: [{ text: '20 JULY 2025', url: '#' }],
            isClickable: true,
            scrollDirection: 'reverse'
        },
        {
            id: 'section7',
            mainText: 'Heath',
            bgColor: sunshineYellow,
            textColor: brandBlack,
            releaseTagText: 'UPCOMING',
            releaseTagBgColor: brandOrange,
            releaseTagTextColor: brandBlack,
            linksPrefix: 'release date:',
            links: [{ text: '20 JULY 2025', url: '#' }],
            isClickable: true,
            scrollDirection: 'normal'
        },
        {
            id: 'section8',
            mainText: 'Waqt he mera',
            bgColor: brandBlack,
            textColor: brandWhite,
            releaseTagText: 'UPCOMING',
            releaseTagBgColor: brandOrange,
            releaseTagTextColor: brandBlack,
            linksPrefix: 'release date:',
            links: [{ text: '20 JULY 2025', url: '#' }],
            isClickable: true,
            scrollDirection: 'reverse'
        },

        // Scroller 9: Current Releases Title
        {
            id: 'section9',
            mainText: 'Current <span class="line-break">Releases</span>',
            bgColor: hotPink,
            textColor: brandBlack,
            isClickable: false,
        },
        // Scroller 10: Song One (Released)
        {
            id: 'section10',
            mainText: 'Chand Da Tukda',
            bgColor: teal,
            textColor: brandWhite,
            releaseTagText: 'Single Release',
            releaseTagBgColor: brandOrange,
            releaseTagTextColor: brandBlack,
            linksPrefix: 'Streaming On:',
            links: [
                { text: 'Apple Music', url: 'http://music.apple.com/us/album/chand-da-tukda-feat-dipessh-kashyap-single/1767809809' },
                { text: 'Spotify', url: 'https://open.spotify.com/track/5zEf3LAM3zCdffpgiQkJZW' },
                { text: 'JioSaavn', url: 'https://www.jiosaavn.com/album/chand-da-tukda-feat.-dipessh-kashyap/G7tKAK8mL8E_' },
                { text: 'YT Music', url: 'https://music.youtube.com/browse/MPREb_VyDASIZEhEP' },
                { text: 'Youtube', url: 'https://www.youtube.com/watch?v=DrKF1gPQEP4' },
            ],
            isClickable: true,
            scrollDirection: 'reverse'
        },

        // "Uchi Artist Wall" Section
        {
            id: 'sectionArtistWall',
            mainText: 'UVM Artist Wall',
            bgColor: hotPink,
            textColor: brandBlack,
            linksPrefix: 'Our Artists:', links: [
                { text: 'Dipesh Kashyap', url: 'https://www.instagram.com/dipesshkashyap?igsh=YTIydmppZXh3MGlm' },
                { text: 'Hriday Gattani', url: 'https://www.instagram.com/hridaygattani?igsh=MXI2bzZqazR0dDR6Nw==' },
                { text: 'Hritik Dutta', url: 'https://www.instagram.com/hritik.ep?igsh=OHRocjJvZXN4NzV0' },
                { text: 'Tushar Joshi', url: 'https://www.instagram.com/tusharjoshiii?igsh=MTBnbmQ3NHI3azJ5cw==' }
            ],
            isClickable: true,
            scrollDirection: 'normal'
        },

        // Scroller 11: Contact Us
        {
            id: 'section11',
            mainText: 'Contact Us',
            bgColor: sunshineYellow,
            textColor: brandBlack,
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

        const isStaticTitle = (data.id === 'section2' || data.id === 'section9');

        if (isStaticTitle) {
            visibleContent.classList.add('static-title-section');
            const mainTextSpan = document.createElement('span');
            mainTextSpan.classList.add('main-text');
            mainTextSpan.innerHTML = data.mainText;
            mainTextSpan.style.color = data.textColor;
            visibleContent.appendChild(mainTextSpan);
        } else {
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
        section.appendChild(visibleContent);

        const expandableContent = document.createElement('div');
        expandableContent.classList.add('scroller-expandable-content');

        // --- ADDED LOGIC FOR CUSTOM LAYOUT ---
        if (data.customLayout) {
            expandableContent.classList.add(data.customLayout);
        } if (data.isClickable !== false && data.aboutUsText) {
            const aboutUsContainer = document.createElement('div');
            aboutUsContainer.classList.add('about-us-content');
            // MODIFIED: Use the section's main text color for the paragraphs for readability
            aboutUsContainer.style.color = data.textColor;
            data.aboutUsText.split('\n\n').forEach(paragraphText => {
                if (paragraphText.trim()) {
                    const p = document.createElement('p');
                    p.textContent = paragraphText.trim();
                    aboutUsContainer.appendChild(p);
                }
            });

            // For 'Next Up' section, append the button inside the text container
            if (data.customLayout === 'next-up-layout' && data.links && data.links.length > 0) {
                data.links.forEach(linkInfo => {
                    if (linkInfo.isButton) {
                        const a = document.createElement('a');
                        a.href = linkInfo.url;
                        a.textContent = linkInfo.text;
                        if (linkInfo.url.startsWith('http')) {
                            a.target = '_blank';
                            a.rel = 'noopener noreferrer';
                        }
                        a.classList.add('cta-button');
                        // Add to about us container for proper stacking
                        aboutUsContainer.appendChild(a);
                    }
                });
            }

            expandableContent.appendChild(aboutUsContainer);
        }

        if (data.isClickable !== false && data.links && data.links.length > 0) {
            // Skip buttons for Next Up section as they're handled above
            const shouldAddLinks = !(data.customLayout === 'next-up-layout' &&
                data.links.every(link => link.isButton));

            if (shouldAddLinks) {
                if (data.linksPrefix) {
                    const prefixLabel = document.createElement('span');
                    prefixLabel.classList.add('links-prefix');
                    prefixLabel.textContent = data.linksPrefix;
                    prefixLabel.style.color = data.textColor;
                    expandableContent.appendChild(prefixLabel);
                }
                data.links.forEach(linkInfo => {
                    // Skip buttons for Next Up layout as they're handled above
                    if (data.customLayout === 'next-up-layout' && linkInfo.isButton) {
                        return;
                    }

                    const a = document.createElement('a');
                    a.href = linkInfo.url;
                    a.textContent = linkInfo.text;
                    if (linkInfo.url.startsWith('http')) {
                        a.target = '_blank';
                        a.rel = 'noopener noreferrer';
                    }
                    if (linkInfo.isButton) {
                        a.classList.add('cta-button');
                    } else {
                        a.style.color = data.textColor;
                    }
                    expandableContent.appendChild(a);
                });
            }
        }
        section.appendChild(expandableContent);

        // ... (Click handler and rest of script remain the same)
        visibleContent.addEventListener('click', () => {
            if (data.isClickable === false) { return; }
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
                const desiredMinHeight = 250;
                const actualScrollHeight = expandableContent.scrollHeight;
                expandableContent.style.maxHeight = Math.max(desiredMinHeight, actualScrollHeight) + 'px';
            }
        });
        scrollerContainer.appendChild(section);
    });

    // ... (rest of the script)
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

    const visualizer = document.querySelector("#sticky-visualizer");
    if (visualizer) {
        const bars = document.querySelectorAll(".visualizer-bar");
        const minBarWidth = 5;

        const animateBars = () => {
            const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
            const maxBarWidth = isDesktop ? 105 : 35;
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) : 0;
            bars.forEach((bar, index) => {
                const wave = Math.sin(scrollProgress * 15 + index * 1.5);
                const widthPercent = (wave + 1) / 2;
                const newWidth = minBarWidth + (widthPercent * maxBarWidth);
                bar.style.width = `${newWidth}px`;
            });
        };

        window.addEventListener('scroll', () => {
            window.requestAnimationFrame(animateBars);
        });
        window.addEventListener('resize', () => {
            window.requestAnimationFrame(animateBars);
        });
        animateBars();
    }
});