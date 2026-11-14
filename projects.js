// Edit this list to make the portfolio your own. See README.md for every field.
// These initial entries are based on publicly available research; add your own media and details.
const projects = [
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
    cover: "",
    coverAlt: "",
    media: [],
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
      { type: "image", src: "media/uploads/wordpress-archive/rtales.jpg", alt: "Image from Rats Tales" }
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
      { type: "image", src: "media/uploads/wordpress-archive/capture10.png", alt: "Still from the VR experience" }
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
    "Delphic - Collections",
    "ManMet AR Marketing",
    "Plato's Living Room",
    "Digital Clothing",
    "Urban Intersections",
    "Shang-Pool Picnic",
    "Islington Community Art Project"
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
