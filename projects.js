// Edit this list to make the portfolio your own. See README.md for every field.
// These initial entries are based on publicly available research; add your own media and details.
const projects = [
  {
    title: "Mímir’s Vase",
    category: "Interactive installation",
    year: "2025",
    summary: "An AI-driven sculptural oracle that turns machine vision into poetic observations.",
    description: "Mímir’s Vase is an artificial-intelligence-driven artefact that observes its surroundings and responds with poetic descriptions. Developed as a 3D-printed, servo-driven sculpture with a digital twin in Unreal Engine, it brings together computer vision, image captioning and a language model to explore machine perception, ritual and empathy.\n\nAfter testing revealed that the animatronic hardware was too fragile for long-term exhibition, the work was presented as an Unreal Engine simulation, broadcast as if from an unknown place. It was shown at SODA’s Dorkbot and the Academy of Fine Arts Warsaw’s Agentic Anxiety in 2025.",
    cover: "media/uploads/mimirs-vase/gallery-audience.jpg",
    coverAlt: "Visitors viewing Mímir’s Vase at an exhibition",
    media: [
      { type: "image", src: "media/uploads/mimirs-vase/gallery-audience.jpg", alt: "Visitors gathered around a monitor showing the Mímir’s Vase digital twin in a gallery" },
      { type: "image", src: "media/uploads/mimirs-vase/gallery-event.jpg", alt: "Visitors viewing the Mímir’s Vase display during an exhibition event" },
      { type: "image", src: "media/uploads/mimirs-vase/concept-artwork.png", alt: "Illustrated scene of Norse figures gathered around an ornate vase beside a longship" },
      { type: "image", src: "media/uploads/mimirs-vase/physical-prototype.jpg", alt: "Purple 3D-printed animatronic prototype with camera eyes, wiring and electronics" },
      { type: "image", src: "media/uploads/mimirs-vase/cad-mechanism.png", alt: "CAD view of the vase’s mechanical eye assembly" },
      { type: "image", src: "media/uploads/mimirs-vase/eye-mechanism-render.png", alt: "3D render of the prototype’s paired camera-eye mechanism" },
      { type: "image", src: "media/uploads/mimirs-vase/vase-wireframe-render.png", alt: "Wireframe 3D model of the vase with its internal eye mechanism" }
    ],
    tools: ["Unreal Engine", "Computer vision", "Artificial intelligence", "Image captioning", "Animatronics", "3D printing"],
    links: [],
    files: []
  },
  {
    title: "Granny Jackson's Dead",
    category: "Immersive storytelling",
    year: "",
    summary: "A 360° VR film and holograms created with Big Telly.",
    description: "For Granny Jackson's Dead, a project with Big Telly, Alasdair created a 360° film for virtual reality and a series of holograms. Further details and media will be added.",
    cover: "",
    coverAlt: "",
    media: [],
    tools: ["360° film", "Virtual reality", "Holograms"],
    links: [],
    files: []
  },
  {
    title: "Lindisfarne Runes",
    category: "Digital heritage",
    year: "",
    summary: "A touchscreen installation inviting visitors to create their own runic stone.",
    description: "Created for the museum at English Heritage's Lindisfarne Priory on Holy Island, Runes invites visitors to paint a carved stone or write their name in runes. Their creations are saved to a linked Google Drive.\n\nAlasdair developed the interactive in Unreal Engine as an Android app for Samsung Galaxy Tab S8+ tablets in custom housings. Working with Mark Thomas of production partner Soup Collective and the English Heritage interpretation and site teams, he also handled installation, snagging and remote support.",
    cover: "media/uploads/lindisfarne-runes/runes-installation.jpg",
    coverAlt: "The Runes touchscreen installation at Lindisfarne Priory museum",
    media: [
      { type: "image", src: "media/uploads/lindisfarne-runes/runes-installation.jpg", alt: "Two touchscreen tablets beneath a runic alphabet display in the museum" },
      { type: "video", src: "media/uploads/lindisfarne-runes/runes-interactive.mp4", title: "Lindisfarne Runes interactive installation", poster: "media/uploads/lindisfarne-runes/runes-installation.jpg" },
      { type: "image", src: "media/uploads/lindisfarne-runes/lindisfarne-priory.jpg", alt: "Lindisfarne Priory ruins viewed from the churchyard" }
    ],
    tools: ["Unreal Engine", "Android", "Touchscreen interaction", "Google Drive"],
    links: [],
    files: []
  },
  {
    title: "The Oracle",
    category: "Interactive installation",
    year: "2026",
    summary: "An offline light and sound system connecting environmental data with a living mycelium sculpture.",
    description: "Created for The Guardians of Living Matter at Lowry, Salford, The Oracle combines a living mycelium sculpture by Sophy King and John-Paul Brown with an environmental light and sound system.\n\nAs creative technologist, Alasdair designed and developed the system, translating recorded environmental data into light and sound. Running offline, it replayed measurements from the previous year, offering an alternative to cloud-based generative AI.",
    cover: "media/uploads/the-oracle/oracle-installation-1.jpg",
    coverAlt: "The Oracle's suspended mycelium sculpture illuminated in a gallery",
    media: [
      { type: "image", src: "media/uploads/the-oracle/oracle-installation-1.jpg", alt: "The suspended mycelium sculpture illuminated above visitors at Lowry", credit: "Photo: Michael Pollard" },
      { type: "image", src: "media/uploads/the-oracle/oracle-installation-2.jpg", alt: "A close view of the illuminated branching mycelium sculpture", credit: "Photo: Michael Pollard" }
    ],
    tools: ["Python", "Environmental data", "DMX lighting", "sACN", "Interactive sound"],
    links: [
      { label: "The Oracle: artwork and photographs", url: "https://axisweb.org/artwork/behold-the-emergence-of-oracle" },
      { label: "The Oracle Mk 2", url: "https://axisweb.org/artwork/the-oracle-mk-2" },
      { label: "The Guardians of Living Matter: review", url: "https://corridor8.co.uk/article/john-paul-brown-and-sophy-king-the-guardians-of-living-matter/" }
    ],
    files: []
  },
  {
    title: "Would you tell me, please, which way I ought to go from here?",
    category: "Interactive installation",
    year: "2013",
    summary: "A responsive floor projection exploring direction and movement.",
    description: "Created by artist Claire Weetman and shown at the Bluecoat, Liverpool, in 2013, this interactive installation projects moving arrows onto the floor. When visitors enter the space, the arrows turn to follow them, playfully questioning who is guiding whom.\n\nAlasdair developed the camera-tracking and interactive projection software using OpenFrameworks.",
    cover: "",
    coverAlt: "",
    media: [
      { type: "video", src: "https://vimeo.com/75711846", title: "Would you tell me, please, which way I ought to go from here?", credit: "Video: Claire Weetman" }
    ],
    tools: ["OpenFrameworks", "Camera tracking", "Interactive projection"],
    links: [
      { label: "Watch on Vimeo", url: "https://vimeo.com/75711846" },
      { label: "Claire Weetman: project background", url: "https://claireweetman.blogspot.com/2013/07/" }
    ],
    files: []
  },
  {
    title: "Children of Talos",
    category: "Immersive storytelling",
    year: "",
    summary: "A speculative history told through a virtual gallery.",
    description: "A project by David Jackson and Alasdair Swenson exploring AI-based storytelling through a virtual gallery, generative artworks and curatorial texts. The story world expands and changes through audience interaction.",
    cover: "",
    coverAlt: "",
    media: [],
    tools: ["Virtual production", "Generative AI", "Interactive storytelling"],
    links: [
      { label: "Read about the research", url: "https://www.art.mmu.ac.uk/staff/research/9394" }
    ],
    files: []
  },
  {
    title: "Moot Court VR",
    category: "Virtual reality",
    year: "",
    summary: "Exploring immersive simulation in legal education.",
    description: "Research into the use of virtual reality for mooting and legal education. The work explores how immersive environments can support experiential learning.",
    cover: "media/uploads/moot-court-vr/courtroom-view-1.png",
    coverAlt: "Virtual courtroom with figures at the judge's bench",
    media: [
      { type: "image", src: "media/uploads/moot-court-vr/courtroom-view-1.png", alt: "A virtual courtroom with figures at the judge's bench and a witness stand", credit: "Image: Alasdair Swenson" },
      { type: "image", src: "media/uploads/moot-court-vr/courtroom-view-2.png", alt: "A second view of the virtual courtroom and judge's bench", credit: "Image: Alasdair Swenson" }
    ],
    tools: ["Virtual reality", "Education", "Research"],
    links: [
      { label: "Mooting in Virtual Reality", url: "https://link.springer.com/chapter/10.1007/978-3-031-25390-4_8" }
    ],
    files: []
  },
  {
    title: "History Makers",
    category: "Digital heritage",
    year: "",
    summary: "Immersive and interactive media for museum audiences.",
    description: "Research into bespoke digital experiences for museum audiences, using immersive and interactive media. The project is listed in Alasdair's Manchester Metropolitan University research profile.",
    cover: "",
    coverAlt: "",
    media: [],
    tools: ["Immersive media", "Museums", "Research"],
    links: [
      { label: "University research profile", url: "https://www.mmu.ac.uk/about-us/faculties/arts-humanities/schools/school-of-digital-arts/staff/profile/alasdair-swenson" }
    ],
    files: []
  },
  {
    title: "A Walked and Recorded Journey",
    category: "Sound & broadcast",
    year: "2012",
    summary: "Live audio from two runners crossing the Lake District.",
    description: "Recording and live streaming audio from the feet of two runners covering 50 miles in a 24-hour race across the Lake District.\n\nRole: System design, development and 24-hour broadcast.\nTimeline: One month. Completed July 2012.",
    cover: "media/uploads/wordpress-archive/lakeland_50_and_100.jpg",
    coverAlt: "Image from A Walked and Recorded Journey",
    media: [
      { type: "image", src: "media/uploads/wordpress-archive/lakeland_50_and_100.jpg", alt: "Image from A Walked and Recorded Journey" },
      { type: "image", src: "media/uploads/walked-and-recorded-journey/system-diagram.webp", alt: "Hand-drawn system diagram showing runners' leg-mounted microphones relaying audio through mobile phones to gallery speakers" },
      { type: "audio", src: "media/uploads/wordpress-archive/walk_rec_2233_clip.mp3", title: "Sample of the broadcast" }
    ],
    tools: ["Leg-mounted recording", "Remote mobile broadcast", "Live streaming"],
    links: [],
    files: []
  },
  {
    title: "Transmissions",
    category: "Performance & installation",
    year: "2012",
    summary: "An audiovisual performance for the royal launch of MediaCityUK.",
    description: "An audiovisual performance commissioned for the royal launch of MediaCityUK.\n\nRole: System design and development. Timeline: Three months. Completed March 2012.\n\nCredits: Dancer Clare Fildes; animation Alex Hindle; programmer Alasdair Swenson; AV Jim Dawson; event filming Mat Norman; event edit Hollie Harthern; director Mark Thomas; producer Alison Surtees; show production Polly Bentham; writer Chris Thorpe; soundtrack Graham Massey. With thanks to the Quays Consortium, Robert Robson, Kathy McCardle and Arts Council England.",
    cover: "media/uploads/wordpress-archive/transmissions-2012-soup-collective-1_mp4_hd.original.jpg",
    coverAlt: "Still from the Transmissions making-of video",
    media: [{ type: "video", src: "media/uploads/wordpress-archive/JJwcWPEM.mp4", title: "Transmissions: making of" }],
    tools: ["Microsoft Kinect", "OpenFrameworks", "Python", "Point-cloud recording", "Live depth interaction"],
    links: [],
    files: []
  },
  {
    title: "Personal Museums",
    category: "Digital heritage",
    year: "2013",
    summary: "A community-led exhibit made with the National Football Museum.",
    description: "A Soup Collective collaboration with the National Football Museum exploring people's personal collections of memorabilia through 3D scanning, printing, projection mapping and sculptural film.\n\nRole: RFID media trigger system design and development; CAD and 3D design and printing. Timeline: Three months. The original project page says March 2013; the portfolio index lists 2016, so the date needs confirmation.\n\nCredits: Interactive, Alasdair Swenson; film and animation, Alex Hindle, Annie Woodson, Ben Meadows, Mat Norman, Jim Dawson, Mark Thomas and Sian Rolland; workshops, Annie Woodson and Mark Thomas; plinth design, Alex Hindle; 3D print, Alasdair Swenson, Alex Hindle and Jim Dawson.",
    cover: "media/uploads/wordpress-archive/personal-museums-efbd9c-national-football-museum_mp4_hd.original.jpg",
    coverAlt: "Still from Personal Museums",
    media: [{ type: "video", src: "media/uploads/wordpress-archive/5N31Gkcr.mp4", title: "Personal Museums at the National Football Museum" }],
    tools: ["CAD", "3D printing", "RFID", "Raspberry Pi", "UNIX", "Python", "Projection mapping"],
    links: [],
    files: []
  },
  {
    title: "Rats Tales — Royal Exchange Theatre",
    category: "Performance & installation",
    year: "2012",
    summary: "Audiovisual design and multi-screen control for theatre in the round.",
    description: "A Royal Exchange Theatre production with audiovisual elements developed by Soup Collective for a performance in the round.\n\nRole: Cue-able multiscreen control system development and interactive media content. Timeline: Four months. Completed December 2012.\n\nRoyal Exchange: Director Melly Still; designer Anna Fleischle; producer Simon Curtis.\nSoup Collective: Video design Mark Thomas; programming Alasdair Swenson; video and animation Annie Gibson, Alex Hindle, Mat Norman, Jim Dawson and Helena Masterson; live filming Mark Thomas and Mat Norman; trailer edit Helena Masterson.",
    cover: "media/uploads/wordpress-archive/rtales.jpg",
    coverAlt: "Image from Rats Tales",
    media: [
      { type: "video", src: "media/uploads/wordpress-archive/np1cc4RC.mp4", title: "Rats Tales excerpt" },
      { type: "image", src: "media/uploads/wordpress-archive/rtales.jpg", alt: "Image from Rats Tales" },
      { type: "image", src: "media/uploads/rats-tales/production-poster.png", alt: "Royal Exchange Theatre poster for Carol Ann Duffy's Rats' Tales", credit: "Royal Exchange Theatre, Manchester" },
      { type: "image", src: "media/uploads/rats-tales/stage-performance.png", alt: "Performers on stage in Rats' Tales", credit: "Royal Exchange Theatre, Manchester" }
    ],
    tools: ["Projection mapping", "Multi-screen display", "Media triggers"],
    links: [{ label: "Guardian review", url: "https://www.theguardian.com/stage/2012/dec/04/rats-tales-review" }, { label: "Soup Collective", url: "http://soupcollective.co.uk/portfolio/rats-tales-royal-exchange-theatre/" }],
    files: []
  },
  {
    title: "Demdike Stare — Forest of Evil",
    category: "Virtual reality",
    year: "2016",
    summary: "A music video reimagined as an immersive VR experience.",
    description: "Conversion of a Demdike Stare music video into an immersive VR experience, supported by Liverpool Psych Fest and Arts Council England.\n\nRole: VR development and conversion of 2D video into an immersive experience. Timeline: Two months. Completed September 2016.",
    cover: "media/uploads/wordpress-archive/capture1.png",
    coverAlt: "Still from the Demdike Stare VR experience",
    media: [
      { type: "video", src: "media/uploads/wordpress-archive/2JlcQ9Oj.mp4", title: "Demdike Stare VR" },
      { type: "image", src: "media/uploads/wordpress-archive/capture1.png", alt: "Still from the VR experience" },
      { type: "image", src: "media/uploads/wordpress-archive/capture4.png", alt: "Still from the VR experience" },
      { type: "image", src: "media/uploads/wordpress-archive/capture6.png", alt: "Still from the VR experience" },
      { type: "image", src: "media/uploads/wordpress-archive/capture7.png", alt: "Still from the VR experience" },
      { type: "image", src: "media/uploads/wordpress-archive/capture8.png", alt: "Still from the VR experience" },
      { type: "image", src: "media/uploads/wordpress-archive/capture10.png", alt: "Still from the VR experience" },
      { type: "image", src: "media/uploads/demdike-stare/pzyk-vr-poster.png", alt: "Liverpool International Festival of Psychedelia 2016 poster featuring Forest of Evil and two other VR artworks", credit: "Liverpool International Festival of Psychedelia" }
    ],
    tools: ["Samsung Gear VR", "Unreal Engine"],
    links: [],
    files: []
  },
  {
    title: "We Will Never As Humans Be Able To See 360°",
    category: "Virtual reality",
    year: "2016",
    summary: "Sculpture and virtual reality brought together in an immersive installation.",
    description: "Jo Clements combined sculptural structures with virtual reality to create immersive sensory environments. Three padded copper domes housed headsets showing digital works commissioned from artists Sam Ingleson and Steve Oliver.\n\nAlasdair sourced and built the hardware and developed the artworks in Unreal Engine, including animation, audio and video, and 3D scanning. The project was completed over four months and shown at Caustic Coastal, Manchester, in October 2016.\n\nThe installation used copper, calico padding, MDF and scaffolding alongside OSVR headsets and Windows VR-ready PCs.",
    cover: "media/uploads/wordpress-archive/img_0746-768x576-1.jpg",
    coverAlt: "Image from We Will Never As Humans Be Able To See 360°",
    media: [
      { type: "video", src: "media/uploads/wordpress-archive/WwYvsS1w.mp4", title: "We Will Never As Humans Be Able To See 360°", credit: "Video by Maria Ruban" },
      { type: "image", src: "media/uploads/wordpress-archive/img_0746-768x576-1.jpg", alt: "Image from the installation" },
      { type: "image", src: "media/uploads/we-will-never-see-360/gallery-installation.jpg", alt: "A visitor beneath a copper dome in the gallery", credit: "Image: Alex Nelu" },
      { type: "image", src: "media/uploads/we-will-never-see-360/vr-stills.jpg", alt: "Three scenes from the virtual reality artworks", credit: "Image: Alex Nelu" },
      { type: "image", src: "media/uploads/we-will-never-see-360/copper-domes.jpg", alt: "Copper domes and a visitor at Caustic Coastal", credit: "Image: Alex Nelu" },
      { type: "image", src: "media/uploads/we-will-never-see-360/visitors.jpg", alt: "Visitors experiencing the installation beneath the domes", credit: "Image: Alex Nelu" },
      { type: "image", src: "media/uploads/we-will-never-see-360/vr-headset.jpg", alt: "A visitor wearing a virtual reality headset", credit: "Image: Alex Nelu" },
      { type: "image", src: "media/uploads/we-will-never-see-360/visitor-under-dome.jpg", alt: "A visitor standing beneath a copper dome", credit: "Image: Alex Nelu" }
    ],
    tools: ["OSVR headsets", "Unreal Engine", "3D scanning"],
    links: [{ label: "Jo Clements: project details", url: "https://www.joclements.co.uk/we-will-never-as-humans-be-able-to-see-360/" }],
    files: []
  },
  {
    title: "Matchgirls Strike Interactive",
    category: "Digital heritage",
    year: "2021",
    summary: "A projection-mapped interactive game for the People's History Museum.",
    description: "A projection-mapped interactive table game in which players complete tasks while facing fines and penalties representing the harsh conditions faced by the Matchgirls.\n\nRole: Technical development. Timeline: Five months. Completed February 2021.",
    cover: "media/uploads/wordpress-archive/screenshot-2023-09-24-220946.png",
    coverAlt: "Image from the Matchgirls Strike interactive",
    media: [
      { type: "image", src: "media/uploads/wordpress-archive/screenshot-2023-09-24-220946.png", alt: "Image from the Matchgirls Strike interactive" },
      { type: "image", src: "media/uploads/wordpress-archive/195462541_10159173324846153_8583397005342557593_n.jpg", alt: "Image from the Matchgirls Strike project" },
      { type: "image", src: "media/uploads/wordpress-archive/screenshot-2023-09-24-220807.png", alt: "Image from the Matchgirls Strike interactive" }
    ],
    tools: ["Unreal Engine", "Projection mapping", "Multiplayer", "Arcade controls", "Audio narration"],
    links: [],
    files: []
  },
  {
    title: "Actiphons (AR)",
    category: "Augmented reality",
    year: "2018",
    summary: "An augmented reality experiment for children's phonics materials.",
    description: "An AR experience developed to explore how pre-school children respond to a virtual version of the Actiphons character Timmy Tennis, bringing gamified elements and speech to printed learning materials.\n\nRole: 3D character development and image-based AR experience. Timeline: Three months. Completed 2018.",
    cover: "media/uploads/wordpress-archive/actiphon_header_new.png",
    coverAlt: "Actiphons project image",
    media: [{ type: "image", src: "media/uploads/wordpress-archive/actiphon_header_new.png", alt: "Actiphons project image" }],
    tools: ["Augmented reality", "Unreal Engine", "Image recognition", "Autodesk Maya"],
    links: [],
    files: []
  },
  {
    title: "Delphic - Collections",
    category: "Music video",
    year: "",
    summary: "A Kinect-based promo for Delphic, created with Soup Collective.",
    description: "Soup Collective's promo for Delphic explored the use of Microsoft Kinect in filmmaking. Alasdair contributed technical expertise to the project.\n\nSoup Collective also describes its work on the promo and the Transmissions research project on its website.",
    cover: "media/uploads/delphic-collections/collections-still-1.png",
    coverAlt: "A luminous point-cloud figure against a dark background",
    media: [
      { type: "image", src: "media/uploads/delphic-collections/collections-still-1.png", alt: "A luminous point-cloud figure from the Delphic video", credit: "Video still: Soup Collective" },
      { type: "image", src: "media/uploads/delphic-collections/collections-still-2.png", alt: "A luminous point-cloud figure extending an arm", credit: "Video still: Soup Collective" }
    ],
    tools: ["Microsoft Kinect", "OpenFrameworks", "Custom capture software", "After Effects"],
    links: [
      { label: "Watch Soup Collective's video on Vimeo", url: "https://vimeo.com/57599167?fl=pl&fe=sh" },
      { label: "Soup Collective: K is for Kinect", url: "https://soupcollective.co.uk/portfolio/k-is-for-kinect-delphic/" }
    ],
    files: []
  },
  {
    title: "Islington Community Art Project",
    category: "Community & installation",
    year: "2011",
    summary: "A sound-responsive lighting installation for the Islington estate in Salford.",
    description: "In December 2011, a large-scale lighting installation turned the stairwell windows of Canon Hussey Court into an audio level display. Local performers and residents could interact with the lights through a microphone.\n\nAlasdair's role: system design and implementation.\n\nPartners and collaborators included Salix Homes, the University of Salford press office, Paul Haywood and Richard MacDonald of Goldsmiths. Rebecca Kevill and Sean Caherty also contributed to the wider community arts event.",
    cover: "media/uploads/islington-community-art/lighting-event.png",
    coverAlt: "Canon Hussey Court illuminated at night during the community arts event",
    media: [
      { type: "image", src: "media/uploads/islington-community-art/lighting-event.png", alt: "The illuminated tower block and a marquee at the community arts event" },
      { type: "image", src: "media/uploads/islington-community-art/illuminated-windows.png", alt: "Green, amber and red lights in the stairwell windows of Canon Hussey Court" }
    ],
    tools: ["Interactive lighting", "Audio-responsive installation"],
    links: [{ label: "The Guardian: Salford estate arts project", url: "https://www.theguardian.com/uk/the-northerner/2011/dec/13/salford-estate-arts-project-canon-hussey-court-salix-homes" }],
    files: []
  },
  {
    title: "Urban Intersections",
    category: "Interactive installation",
    year: "2009",
    summary: "A public installation connecting movement in Belfast with a virtual world.",
    description: "Presented at Belfast's Waterfront Plaza during ISEA 2009, Urban Intersections brought visitors and Second Life participants together across a physical plaza and its virtual counterpart. A large projection on the Waterfront building formed a live digital mural exploring boundaries and Belfast's social history.\n\nWorking with Paul Sermon and Charlotte Gould, Alasdair designed and built the outdoor tracking solution. Participants wore an LED-covered avatar head; as they moved through the plaza, the system tracked their movements to control an avatar in Second Life.\n\nThe wider installation also included contributions by sound and media artist Peter Appleton.",
    cover: "media/uploads/urban-intersections/belfast-projection.png",
    coverAlt: "A participant beneath a projection of the Second Life environment in Belfast",
    media: [
      { type: "image", src: "media/uploads/urban-intersections/belfast-projection.png", alt: "A participant wearing the illuminated tracking head beneath a projected virtual plaza" },
      { type: "image", src: "media/uploads/urban-intersections/tracking-helmet.png", alt: "The puppet-like tracking head with red lights" },
      { type: "video", src: "media/uploads/urban-intersections/urban-intersections-video.mp4", title: "Urban Intersections video" }
    ],
    tools: ["Second Life", "Motion tracking", "Interactive projection"],
    links: [{ label: "Urban Intersections: project documentation", url: "https://www.paulsermon.org/urban/" }],
    files: []
  },
  {
    title: "Shang-Pool Picnic",
    category: "Interactive installation",
    year: "2010",
    summary: "A shared augmented-reality picnic connecting audiences in Liverpool and Shanghai.",
    description: "Shang-pool: Picnic in Arcadia connected audiences at the Bluecoat Gallery in Liverpool and the University of Shanghai during Liverpool Biennial 2010. The installation brought live images of participants together in a shared virtual picnic scene, with animated elements responding to their movements.\n\nAlasdair developed the augmented-reality experience and custom tracking software for the project, which linked the two locations by video. The installation was developed by artists Charlotte Gould and Paul Sermon.",
    cover: "media/uploads/shang-pool-picnic/picnic-installation-new.png",
    coverAlt: "Participants gathered around a screen during the Shang-Pool Picnic installation",
    media: [
      { type: "image", src: "media/uploads/shang-pool-picnic/picnic-installation-new.png", alt: "Participants on a picnic blanket watching the interactive installation" },
      { type: "image", src: "media/uploads/shang-pool-picnic/shared-picnic-screen.png", alt: "Participants holding tracking markers in the shared picnic scene" },
      { type: "image", src: "media/uploads/shang-pool-picnic/augmented-reality-screen.png", alt: "A screen showing participants with tracking markers and an augmented-reality cat" }
    ],
    tools: ["Augmented reality", "Custom tracking software", "Telepresence"],
    links: [{ label: "Shang-pool: Picnic in Arcadia", url: "https://paulsermon.org/shangpool/" }],
    files: []
  },
  {
    title: "I Forgot To Say",
    category: "Performance & installation",
    year: "2019",
    summary: "An interactive light work developed with writer Jackie Kay.",
    description: "Commissioned by Quays Culture for the Lightwaves programme, this interactive, large-scale light work invited visitors to contribute their own unsaid words, starting with writer Jackie Kay's phrase “I Forgot to Say”.\n\nRole: System design and development. Timeline: Three months. Completed 2019.\n\nCredits: Writer Jackie Kay; commissioner Lucy Dusgate for Quays Culture; programming Alasdair Swenson; AV and concept development Mark Thomas; documentation Antony Morris.",
    cover: "media/uploads/wordpress-archive/i-forgot-to-say_mp4_hd_1080p.original.jpg",
    coverAlt: "Still from I Forgot To Say",
    media: [{ type: "video", src: "media/uploads/wordpress-archive/75ECJJML.mp4", title: "I Forgot To Say" }],
    tools: ["VoIP", "DMX", "LED"],
    links: [],
    files: []
  },
  ...[
    "Bloomin' NFT's",
    "SODA launch NFT collection",
    "ManMet AR Marketing",
    "Plato's Living Room",
    "Digital Clothing"
  ].map((title) => ({
    title,
    category: "Archive",
    year: "",
    summary: "From the previous portfolio; project details to be added.",
    description: "This project was listed in the previous portfolio. More information and media can be added here.",
    cover: "",
    coverAlt: "",
    media: [],
    tools: [],
    links: [],
    files: []
  }))
];
