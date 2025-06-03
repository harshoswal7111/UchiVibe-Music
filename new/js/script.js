// js/script.js
document.addEventListener('DOMContentLoaded', () => {
    // --- Hardcoded Data (from __NEXT_DATA__) ---
    const pageData = {
        sections: [
          { "_type": "release", "artist": { "_type": "artist", "name": "Upcoming" }, "releaseDate": "2021-10-02", "title": "" },
          { "_type": "link", "artist": null, "link": "#", "title": "Raatein — Halatein" },
          { "_type": "link", "artist": null, "link": "#", "title": "Besabri" },
          { "_type": "link", "artist": null, "link": "#", "title": "Zillat" },
          { "_type": "link", "artist": null, "link": "#", "title": "Dil - Zakhmi" },
          { "_type": "link", "artist": null, "link": "#", "title": "Heath" },
          { "_type": "link", "artist": null, "link": "#", "title": "Waqt - he - mera" },
          { "_type": "release", "artist": { "_type": "artist", "name": "Goodnight"}, "releaseDate": "2021-10-02", "title": "Tangent",
            "streamingLinks": [
              { "_key": "869ce6d75d67", "_type": "streamLink", "href": "https://gassrecords.bandcamp.com/album/tangent-ep", "service": "Bandcamp" },
              { "_key": "44617bc58aaf", "_type": "streamLink", "href": "https://www.youtube.com/playlist?list=OLAK5uy_nod5YgIu5Zla6tFBuGrYchzqiMX5ZhIlQ", "service": "YouTube" },
              { "_key": "1d83a012ec5b", "_type": "streamLink", "href": "https://open.spotify.com/album/2bhw78gKMyXOdqy4JHjpG6", "service": "Spotify" },
              { "_key": "7a54f603fd50", "_type": "streamLink", "href": "https://geo.music.apple.com/us/album/_/1588088239?app=music&at=1000lHKX&ct=linktree_http&itscg=30200&itsct=lt_m&ls=1&mt=1", "service": "Apple Music" }
            ]
          },
          { "_type": "link", "artist": null, "link": "https://ra.co/reviews/34404", "title": "Goodnight — Resident Advisor Review" },
          { "_type": "link", "artist": null, "link": "https://inverted-audio.com/premiere-goodnight-in-my-mind/", "title": "Goodnight — Inverted Audio Premiere" },
          { "_type": "link", "artist": null, "link": "https://djmag.com/music/premiere-goodnight-howl", "title": "Premiere: Goodnight's Howl" },
          { "_type": "release", "artist": { "_type": "artist", "name": "Chevel"}, "releaseDate": "2020-07-24", "title": "Glass Bridge",
            "streamingLinks": [
              { "_key": "dc46c48ed530", "_type": "streamLink", "href": "https://gassrecords.bandcamp.com/album/glass-bridge", "service": "Bandcamp" },
              { "_key": "a66fc395ae24", "_type": "streamLink", "href": "https://www.youtube.com/playlist?list=OLAK5uy_lTiIPoS88BkDFExKvu1WiFYgO8bvODrv0", "service": "YouTube" },
              { "_key": "3d642ba7ceca", "_type": "streamLink", "href": "https://open.spotify.com/album/18Ty4y7juPPt1mkju5DmIt", "service": "Spotify" }
            ]
          },
          { "_type": "release", "artist": { "_type": "artist", "name": "Body Mechanic"}, "releaseDate": "2017-08-17", "title": "U Can" },
          { "_type": "release", "artist": { "_type": "artist", "name": "Dreamtrak"}, "releaseDate": "2022-05-30", "title": "Open Source",
            "streamingLinks": [
              { "_key": "5883394bc3f3", "_type": "streamLink", "href": "https://gassrecords.bandcamp.com/album/open-source", "service": "Bandcamp" },
              { "_key": "03fb485b7faa", "_type": "streamLink", "href": "https://www.youtube.com/playlist?list=OLAK5uy_mwEXAHg3bI2VjGRICU5jSqZYPqPAyCUUE", "service": "YouTube" }
            ]
          },
          { "_type": "release", "artist": { "_type": "artist", "name": "Blaqstarr"}, "releaseDate": "2016-10-25", "title": "Moan Her Lease Her",
            "streamingLinks": [
              { "_key": "0106fcbb932d", "_type": "streamLink", "href": "https://gassrecords.bandcamp.com/album/moan-her-lease-her-ep", "service": "Bandcamp" },
              { "_key": "8c81d5240b8b", "_type": "streamLink", "href": "https://open.spotify.com/album/0bw6T3fLmOAtf9KT2Q80pi", "service": "Spotify" }
            ]
          },
          { "_type": "release", "artist": { "_type": "artist", "name": "Body Mechanic"}, "releaseDate": "2016-01-01", "title": "Technosexual",
            "streamingLinks": [
                { "_key": "f07b1e6166ad", "_type": "streamLink", "href": "https://gassrecords.bandcamp.com/album/techno-sexual", "service": "Bandcamp" },
                { "_key": "2d0da3b0859c", "_type": "streamLink", "href": "https://geo.music.apple.com/us/album/_/1492736856?app=music&at=1000lHKX&ct=linktree_http&itscg=30200&itsct=lt_m&ls=1&mt=1", "service": "Apple Music"}
            ]
          }
        ]
    };

    // --- Utility to mimic clsx ---
    function clsx(...args) {
        let str = "";
        for (let i = 0; i < args.length; i++) {
            const arg = args[i];
            if (typeof arg === 'string' && arg) {
                str && (str += " ");
                str += arg;
            } else if (typeof arg === 'object' && arg !== null) {
                for (const key in arg) {
                    if (arg[key]) {
                        str && (str += " ");
                        str += key;
                    }
                }
            }
        }
        return str;
    }

    // --- Populate Sections ---
    const sectionsList = document.getElementById('sections-list');
    if (sectionsList) {
        pageData.sections.forEach((section, index) => {
            const order = index % 2 !== 0; // true for odd, false for even (0-indexed)
            const marqueeDirection = index % 2 === 0 ? 'left' : 'right';
            const sectionId = section._id || `section-${index}`;

            const sectionItem = document.createElement('li');
            sectionItem.classList.add('section-item', 'relative', 'select-none', 'overflow-hidden', 'border-b', 'hover:cursor-pointer', 'hover:border-forrestGreen', '[&>*]:hover:border-forrestGreen');
            sectionItem.style.opacity = 0; // For entry animation

            if (order) { // 1 == m (m is order)
                sectionItem.classList.add('border-forrestGreen', '[&>*]:border-forrestGreen');
                sectionItem.style.backgroundColor = '#ea366f';
                sectionItem.style.color = '#00220b';
            } else { // 0 == m
                sectionItem.classList.add('border-babyBlue', '[&>*]:border-babyBlue');
                sectionItem.style.backgroundColor = '#00220b';
                sectionItem.style.color = '#afcdda';
            }
            
            // Store original colors for hover reset
            sectionItem.dataset.originalBg = sectionItem.style.backgroundColor;
            sectionItem.dataset.originalColor = sectionItem.style.color;
            sectionItem.dataset.originalBorderColor = order ? '#00220b' : '#afcdda';


            // Top Info Bar (component `b`)
            const infoBar = document.createElement('div');
            infoBar.className = clsx("grid grid-cols-6 p-1 text-left font-semibold tracking-wide text-lg", "md:grid-cols-12 md:text-sm lg:p-2 lg:text-xs");
            infoBar.innerHTML = `
                <div class="col-span-2 border-r border-inherit md:col-span-1">${section._type === 'release' ? 'Release' : 'Link'}</div>
                <div class="col-span-4 pl-2 md:col-span-10">
                    ${section.artist && section.artist.name ? section.artist.name + '—' : ''} ${section.title || ''}
                </div>
            `;
            sectionItem.appendChild(infoBar);

            // Marquee Container (component `g`'s wrapper)
            const marqueeOuterContainer = document.createElement('div');
            marqueeOuterContainer.className = 'w-full';

            const marqueeContainer = document.createElement('div');
            marqueeContainer.className = clsx(
                "marquee-container", // from marquee CSS
                "mb-[-.25rem] overflow-hidden border-t border-inherit lg:mb-[-1.5rem]"
            );
            // Marquee custom props
            const speed = 150 + (100 * Math.random() / 2);
            marqueeContainer.style.setProperty('--duration', `${20000 / speed}s`); // Approximate original speed mapping
            marqueeContainer.style.setProperty('--direction', marqueeDirection);
            marqueeContainer.style.setProperty('--play', 'running');
            marqueeContainer.style.setProperty('--delay', '0s');
            marqueeContainer.style.setProperty('--iteration-count', 'infinite');
            
            // Content for Marquee
            const marqueeContentDiv = document.createElement('div');
            marqueeContentDiv.className = "flex items-baseline gap-10"; // From original E.div wrapper

            if (section._type !== "link") {
                const typeSpan = document.createElement('span');
                typeSpan.className = clsx(
                    "rounded-t-xl border border-black bg-[#FFDD4A] px-10 text-black",
                    "lg:rounded-t-[2rem] lg:text-12xl-mq", // Using custom MQ class
                    section._type === 'release' ? 'font-perfetto' : 'font-bulletin'
                );
                typeSpan.textContent = section._type;
                marqueeContentDiv.appendChild(typeSpan);
            }

            if (section.link) { // Link type content (component `x`)
                const linkDiv = document.createElement('div');
                linkDiv.className = "px-10 mx-10 lg-text-12xl-mq"; // Using custom MQ class
                const anchor = document.createElement('a');
                anchor.href = section.link;
                anchor.target = "_blank"; // Good practice for external links
                anchor.rel = "noopener noreferrer";
                anchor.textContent = section.title || section.link;
                linkDiv.appendChild(anchor);
                marqueeContentDiv.appendChild(linkDiv);
            } else if (section.artist && section.title !== undefined) { // Artist/Title type content (component `w`)
                const artistSpan = document.createElement('span');
                artistSpan.className = "inline-block pl-10 ml-10 lg-text-12xl-mq"; // Using custom MQ class
                artistSpan.textContent = section.artist.name ? section.artist.name + '—' : '';
                marqueeContentDiv.appendChild(artistSpan);

                const titleSpan = document.createElement('span');
                titleSpan.className = "pr-10 mr-10 lg-text-12xl-mq"; // Using custom MQ class
                titleSpan.textContent = section.title;
                marqueeContentDiv.appendChild(titleSpan);
            }
            
            // Marquee child - needs to be duplicated for the effect
            const marqueeInstance = document.createElement('div');
            marqueeInstance.className = 'marquee';
            marqueeInstance.appendChild(marqueeContentDiv);
            
            marqueeContainer.appendChild(marqueeInstance);
            
            // Duplicate for seamless loop (core marquee logic)
            const marqueeInstance2 = marqueeInstance.cloneNode(true);
            marqueeContainer.appendChild(marqueeInstance2);

            marqueeOuterContainer.appendChild(marqueeContainer);
            sectionItem.appendChild(marqueeOuterContainer);

            // Checker pattern overlay
            const checkerOverlay = document.createElement('div');
            checkerOverlay.className = "absolute top-0 left-0 z-50 items-stretch h-auto min-w-full min-h-1/5";
            checkerOverlay.style.background = 'url("static/checker-3.svg")';
            sectionItem.appendChild(checkerOverlay);
            
            sectionsList.appendChild(sectionItem);

            // Streaming Links (component `j`) - initially hidden
            if (section.streamingLinks && section.streamingLinks.length > 0) {
                const streamingLinksSection = document.createElement('div');
                streamingLinksSection.className = 'streaming-links-section'; // class for CSS transition
                streamingLinksSection.dataset.id = sectionId; // To identify it
                streamingLinksSection.style.display = 'none'; // Start hidden for JS control

                const innerDiv = document.createElement('div');
                innerDiv.className = clsx("z-30 flex h-full items-stretch justify-between border-t border-inherit bg-babyPink p-4 text-left", "md:flex-col md:p-2");
                
                const linksWrapper = document.createElement('div');
                linksWrapper.className = "flex flex-wrap text-4xl font-semibold tracking-normal lowercase gap-x-4 gap-y-2 lg:text-2xl";
                
                const streamSpan = document.createElement('span');
                streamSpan.textContent = "Stream:";
                linksWrapper.appendChild(streamSpan);

                section.streamingLinks.forEach(link => {
                    const linkDiv = document.createElement('div');
                    const anchor = document.createElement('a');
                    anchor.href = link.href;
                    anchor.textContent = link.service;
                    anchor.target = "_blank"; // Good practice for external links
                    anchor.rel = "noopener noreferrer";
                    linkDiv.appendChild(anchor);
                    linksWrapper.appendChild(linkDiv);
                });
                innerDiv.appendChild(linksWrapper);
                streamingLinksSection.appendChild(innerDiv);
                sectionsList.appendChild(streamingLinksSection); // Append after its sectionItem

                // Click listener for the section to toggle streaming links
                sectionItem.addEventListener('click', () => {
                    const linksEl = document.querySelector(`.streaming-links-section[data-id="${sectionId}"]`);
                    if (linksEl) {
                        if (linksEl.style.display === 'none' || !linksEl.classList.contains('open')) {
                            linksEl.style.display = 'block'; // Make it block before adding class for transition
                            requestAnimationFrame(() => { // Ensure display:block is applied
                                linksEl.classList.add('open');
                            });
                        } else {
                            linksEl.classList.remove('open');
                            // Wait for transition to end before setting display: none
                            linksEl.addEventListener('transitionend', () => {
                                if (!linksEl.classList.contains('open')) { // Check again in case of rapid clicks
                                   linksEl.style.display = 'none';
                                }
                            }, { once: true });
                        }
                    }
                });
            }

            // Hover effects from Framer Motion (whileHover)
            sectionItem.addEventListener('mouseenter', () => {
                sectionItem.style.backgroundColor = '#08b4c2';
                sectionItem.style.color = '#00220b';
                sectionItem.style.borderColor = '#00220b'; // For the main border
                // For child borders:
                infoBar.style.borderColor = '#00220b';
                const childBorderElements = sectionItem.querySelectorAll('.border-inherit');
                childBorderElements.forEach(el => el.style.borderColor = '#00220b');
            });
            sectionItem.addEventListener('mouseleave', () => {
                sectionItem.style.backgroundColor = sectionItem.dataset.originalBg;
                sectionItem.style.color = sectionItem.dataset.originalColor;
                sectionItem.style.borderColor = sectionItem.dataset.originalBorderColor;
                // For child borders:
                infoBar.style.borderColor = 'inherit'; // Let CSS handle or set explicitly
                 const childBorderElements = sectionItem.querySelectorAll('.border-inherit');
                childBorderElements.forEach(el => el.style.borderColor = 'inherit');

            });
        });
    }


    // --- Animations ---
    // Entry animation for main content (layout-wrapper)
    const layoutWrapper = document.getElementById('layout-wrapper');
    if (layoutWrapper) {
        layoutWrapper.style.opacity = 1; // Trigger transition from HTML style
    }

    // Staggered entry for section items
    const sectionItems = document.querySelectorAll('.section-item');
    sectionItems.forEach((item, index) => {
        item.style.transition = `opacity 1.75s cubic-bezier(0.6, -0.05, 0.01, 0.99) ${index * 0.05}s, transform 1.75s cubic-bezier(0.6, -0.05, 0.01, 0.99) ${index * 0.05}s`;
        item.style.opacity = 1;
        item.style.transform = 'translateY(0px) skewY(0deg)';
    });
    
    // Header elements animation
    const headerLogoCol = document.querySelector('.header-logo-column');
    const headerPatternCol = document.querySelector('.header-pattern-column');
    if (headerLogoCol) {
        headerLogoCol.style.transition = 'opacity 1.75s ease, transform 1.75s ease';
        headerLogoCol.style.opacity = 1;
        headerLogoCol.style.transform = 'translateY(0px) skewY(0deg)';
    }
    if (headerPatternCol) {
        headerPatternCol.style.transition = 'opacity 1.75s ease, transform 1.75s ease';
        headerPatternCol.style.opacity = 1;
        headerPatternCol.style.transform = 'translateY(0px) skewY(0deg)';
    }


    // Wave animation
    const waveAnimation = document.querySelector('.wave-animation');
    if (waveAnimation) {
        setTimeout(() => { // Slight delay to ensure initial styles are applied
            waveAnimation.style.opacity = '1'; // Target opacity (from original opacity: [0,0]) is tricky. Let's make it visible.
            waveAnimation.style.transform = 'scale(1)';
        }, 50); // Small delay
    }

    // Cigarette and white circle animation
    const cigaretteContainer = document.getElementById('cigarette-container');
    const cigaretteTopPart = document.getElementById('cigarette-top-part');
    const cigaretteGlow = document.getElementById('cigarette-glow');
    const whiteCircle = document.getElementById('white-circle');

    if (cigaretteContainer) {
        setTimeout(() => { // Delay for entry animation
            cigaretteContainer.style.transition = 'opacity 1.5s 1s'; // duration 1.5, delay 1
            cigaretteContainer.style.opacity = 1;
        }, 100);
    }
    if (whiteCircle) {
        whiteCircle.style.transition = 'opacity 1.75s ease, transform 1.75s ease';
        whiteCircle.style.opacity = 1;
        whiteCircle.style.transform = 'translateY(0px) skewY(0deg)';
    }

    window.addEventListener('scroll', () => {
        if (!cigaretteTopPart || !cigaretteGlow) return;

        const scrollY = window.scrollY;
        const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = pageHeight > 0 ? scrollY / pageHeight : 0;

        // Cigarette animation values from original: y: "clamp(0%,".concat(a, "vmax,70%)") where a = Math.abs(15*n) and n is scrollYProgress
        // opacity: Math.abs(3*n)
        const yOffset = Math.min(70, Math.abs(15 * scrollProgress * 100)); // 15 * progress (0-1) * 100 for vmax like behavior
        cigaretteTopPart.style.transform = `translateY(clamp(0%, ${yOffset}vmax, 70%)) translateZ(0px)`;
        cigaretteGlow.style.opacity = Math.min(1, Math.abs(3 * scrollProgress));
    });

    // --- Navigation Logic ---
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const desktopMenuLinks = document.getElementById('desktop-menu-links');
    const navLogoActive = document.querySelector('.nav-logo-active');
    const navLogoStatic = document.querySelector('.nav-logo-static');
    const mainNav = document.getElementById('main-nav');

    if (mobileMenuToggle && desktopMenuLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            const isActive = desktopMenuLinks.classList.toggle('mobile-active');
            mobileMenuToggle.textContent = isActive ? 'Close' : 'Menu';
        });
    }
    
    // Sticky nav logo change (simplified)
    // Original uses react-cool-inview; here's a basic scroll-based version
    const headerElement = document.getElementById('main-header');
    let headerHeight = headerElement ? headerElement.offsetHeight : 0;

    window.addEventListener('scroll', () => {
        if (!mainNav || !navLogoActive || !navLogoStatic || !headerElement) return;
        
        // Update headerHeight in case of resize or dynamic changes, though less likely in static
        if (headerElement.offsetHeight !== headerHeight) {
             headerHeight = headerElement.offsetHeight;
        }

        if (window.scrollY > headerHeight) { // When header is scrolled out of view
            navLogoActive.style.display = 'none';
            navLogoStatic.style.display = 'block';
        } else {
            navLogoActive.style.display = 'block';
            navLogoStatic.style.display = 'none';
        }
    });
    // Initial check
    if (headerElement && window.scrollY > headerElement.offsetHeight) {
        if (navLogoActive) navLogoActive.style.display = 'none';
        if (navLogoStatic) navLogoStatic.style.display = 'block';
    } else {
        if (navLogoActive) navLogoActive.style.display = 'block';
        if (navLogoStatic) navLogoStatic.style.display = 'none';
    }

    // Fallback for initial element states if animations are delayed
    requestAnimationFrame(() => {
        const elementsToAnimate = document.querySelectorAll('.initial-hidden-js');
        elementsToAnimate.forEach(el => {
            el.classList.remove('initial-hidden-js');
            el.classList.add('initial-visible-js');
        });
        if (layoutWrapper) layoutWrapper.style.opacity = 1;
         // Trigger initial scroll check for nav logo
        window.dispatchEvent(new Event('scroll'));
    });

});

document.addEventListener('DOMContentLoaded', () => {
    const scrollerContainer = document.querySelector('.scroller-container');

    const sectionsData = [
        {
            id: 'section1',
            mainText: 'BODYMECHANIC — UCAN',
            bgColor: 'hotpink',
            textColor: '#000000',
            releaseTagText: 'RELEASE',
            releaseTagBgColor: '#000000',
            releaseTagTextColor: 'hotpink',
            linksPrefix: 'stream:',
            links: [
                { text: 'bandcamp', url: '#' },
                { text: 'youtube', url: '#' },
                { text: 'spotify', url: '#' },
                { text: 'apple music', url: '#' },
                { text: 'soundcloud', url: '#' }
            ]
        },
        {
            id: 'section2',
            mainText: 'DREAMTRAK — OPEN SOURCE',
            bgColor: 'mediumspringgreen',
            textColor: '#000000',
            releaseTagText: 'RELEASE',
            releaseTagBgColor: '#000000',
            releaseTagTextColor: 'mediumspringgreen',
            linksPrefix: 'release:',
            links: [
                { text: 'info', url: '#' },
                { text: 'purchase', url: '#' },
                { text: 'listen', url: '#' }
            ]
        },
        {
            id: 'section3',
            mainText: 'BLAQSTARR — MOANHERLEASEHER',
            bgColor: 'cyan',
            textColor: '#000000',
            releaseTagText: 'RELEASE',
            releaseTagBgColor: 'black',
            releaseTagTextColor: 'cyan',
            linksPrefix: 'stream:',
            links: [
                { text: 'bandcamp', url: '#' },
                { text: 'youtube', url: '#' },
                { text: 'spotify', url: '#' }
            ]
        },
        {
            id: 'section4',
            mainText: 'TECHNOSEXUAL — BODYMECHANIC',
            bgColor: '#2c2c2c', // Darker band
            textColor: '#FFF5EE', // Seashell (off-white)
            releaseTagText: 'RELEASE',
            releaseTagBgColor: '#FFF5EE',
            releaseTagTextColor: '#2c2c2c',
            linksPrefix: 'explore:',
            links: [
                { text: 'website', url: '#' },
                { text: 'tour dates', url: '#' }
            ]
        }
    ];

    sectionsData.forEach(data => {
        const section = document.createElement('div');
        section.classList.add('scroller-section');
        section.id = data.id;
        section.style.backgroundColor = data.bgColor;

        // Visible Content (Marquee)
        const visibleContent = document.createElement('div');
        visibleContent.classList.add('scroller-visible-content');

        const marqueeContent = document.createElement('div');
        marqueeContent.classList.add('marquee-content');

        // Create marquee items (original + duplicate for seamless loop)
        for (let i = 0; i < 2; i++) { // Duplicate content
            const marqueeItem = document.createElement('div');
            marqueeItem.classList.add('marquee-item');

            const mainTextSpan = document.createElement('span');
            mainTextSpan.classList.add('main-text');
            mainTextSpan.textContent = data.mainText;
            mainTextSpan.style.color = data.textColor;

            const releaseTagSpan = document.createElement('span');
            releaseTagSpan.classList.add('release-tag');
            releaseTagSpan.textContent = data.releaseTagText;
            releaseTagSpan.style.backgroundColor = data.releaseTagBgColor;
            releaseTagSpan.style.color = data.releaseTagTextColor;

            marqueeItem.appendChild(mainTextSpan);
            marqueeItem.appendChild(releaseTagSpan);
            marqueeContent.appendChild(marqueeItem);
        }

        visibleContent.appendChild(marqueeContent);
        section.appendChild(visibleContent);

        // Expandable Content (Links)
        const expandableContent = document.createElement('div');
        expandableContent.classList.add('scroller-expandable-content');
        // The background of expandableContent will be the same as section.style.backgroundColor

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
            a.target = '_blank'; // Open links in a new tab
            a.style.color = data.textColor; // Links color matches main text color
            expandableContent.appendChild(a);
        });
        section.appendChild(expandableContent);

        // Click listener for expansion
        visibleContent.addEventListener('click', () => {
            const isExpanded = section.classList.contains('expanded');
            const allSections = document.querySelectorAll('.scroller-section');

            // Collapse all other sections
            allSections.forEach(otherSection => {
                if (otherSection !== section) {
                    otherSection.classList.remove('expanded');
                    const otherExpandable = otherSection.querySelector('.scroller-expandable-content');
                    otherExpandable.style.maxHeight = '0';
                    otherExpandable.style.paddingTop = '0';
                    otherExpandable.style.paddingBottom = '0';
                }
            });

            // Toggle current section
            if (isExpanded) {
                section.classList.remove('expanded');
                expandableContent.style.maxHeight = '0';
                expandableContent.style.paddingTop = '0';
                expandableContent.style.paddingBottom = '0';
            } else {
                section.classList.add('expanded');
                expandableContent.style.paddingTop = '15px'; // Add padding before calculating scrollHeight
                expandableContent.style.paddingBottom = '15px';
                // scrollHeight includes the element's own padding.
                expandableContent.style.maxHeight = expandableContent.scrollHeight + 'px';
            }
        });

        scrollerContainer.appendChild(section);
    });
});