/* ============================================
   DOG RUN — ULTIMATE ENDLESS ADVENTURE
   Game Engine v2 — Rich 3D Environments
   Author: Sourav Mahapatra
   ============================================ */

const DOGS = [
    {id:0,name:'Buddy',emoji:'🐕',rarity:'common',ability:'Loyal Heart',desc:'+5% bones',color:0xDAA520,unlocked:true,cost:0},
    {id:1,name:'Max',emoji:'🐕‍🦺',rarity:'common',ability:'K9 Sprint',desc:'+10% speed',color:0x8B4513,unlocked:false,cost:2000},
    {id:2,name:'Luna',emoji:'🐺',rarity:'common',ability:'Ice Walker',desc:'No slip',color:0x87CEEB,unlocked:false,cost:3000},
    {id:3,name:'Rocky',emoji:'🐶',rarity:'common',ability:'Tank Mode',desc:'Smash obs',color:0xA0522D,unlocked:false,cost:3500},
    {id:4,name:'Daisy',emoji:'🐩',rarity:'common',ability:'Glamour',desc:'+20% magnet',color:0xFFB6C1,unlocked:false,cost:4000},
    {id:5,name:'Charlie',emoji:'🐕',rarity:'common',ability:'Sniffer',desc:'Hidden paths',color:0xCD853F,unlocked:false,cost:5000},
    {id:6,name:'Bella',emoji:'🦮',rarity:'common',ability:'Water Dog',desc:'Swim',color:0xF0E68C,unlocked:false,cost:5500},
    {id:7,name:'Cooper',emoji:'🐕',rarity:'common',ability:'Herding',desc:'Attract',color:0x2F4F4F,unlocked:false,cost:6000},
    {id:8,name:'Rex',emoji:'🐕‍🦺',rarity:'rare',ability:'Power Leap',desc:'+30% jump',color:0x1a1a1a,unlocked:false,cost:200,costType:'gems'},
    {id:9,name:'Coco',emoji:'🐕',rarity:'rare',ability:'Low Rider',desc:'Auto-slide',color:0xFF8C00,unlocked:false,cost:250,costType:'gems'},
    {id:10,name:'Shadow',emoji:'🐺',rarity:'epic',ability:'Night Vision',desc:'See dark',color:0x1C1C1C,unlocked:false,cost:0,req:'10 bosses'},
    {id:11,name:'Nova',emoji:'✨',rarity:'epic',ability:'Warp',desc:'+50% turbo',color:0x6A0DAD,unlocked:false,cost:0,req:'Level 50'},
    {id:12,name:'Phoenix',emoji:'🔥',rarity:'legendary',ability:'Rebirth',desc:'Auto-revive',color:0xFF4500,unlocked:false,cost:2000,costType:'gems'},
    {id:13,name:'Cerberus',emoji:'👹',rarity:'legendary',ability:'Triple',desc:'All lanes',color:0x8B0000,unlocked:false,cost:0,req:'All bosses'},
    {id:14,name:'Astro',emoji:'🚀',rarity:'legendary',ability:'Zero-G',desc:'3x jump',color:0xC0C0C0,unlocked:false,cost:0,req:'Space'},
];

const THEMES = [
    {id:0,name:'Sunrise Village',emoji:'🏡',ground:0x7CB342,sky1:0xFFCC80,sky2:0x87CEEB,fog:0xFFCC80,road:0x607D8B,roadEdge:0xEEEEEE,obj:0xD32F2F,unlocked:true},
    {id:1,name:'Pirate Cove',emoji:'🏴‍☠️',ground:0x20A4F3,sky1:0x00BCD4,sky2:0x0097A7,fog:0x80DEEA,road:0x8B5A2B,roadEdge:0x5C3A21,obj:0x8B4513,unlocked:true},
    {id:2,name:'Mine Tunnel',emoji:'⛏️',ground:0x222222,sky1:0x111111,sky2:0x0a0a0a,fog:0x111111,road:0x333333,roadEdge:0x444444,obj:0x555555,unlocked:true},
    {id:3,name:'Neon City',emoji:'🌃',ground:0x0a0a15,sky1:0x050510,sky2:0x16213e,fog:0x050510,road:0x1C1C30,roadEdge:0x33334d,obj:0x2a2a40,unlocked:true},
    {id:4,name:'Sunny Park Old',emoji:'🌳',ground:0x5BAF4C,sky1:0x87CEEB,sky2:0x4A90D9,fog:0xB8D8F0,road:0x8B7355,roadEdge:0x6B8E23,obj:0x5D4037,unlocked:true},
    {id:5,name:'Cherry Blossom Old',emoji:'🌸',ground:0x8FBC8F,sky1:0xFFB7C5,sky2:0xFF8FA3,fog:0xFFC0CB,road:0x9E8B7E,roadEdge:0xBC8F8F,obj:0x8D6E63,unlocked:true},
    {id:6,name:'Tropical Beach Old',emoji:'🏖️',ground:0xEDC9AF,sky1:0x00BCD4,sky2:0x0097A7,fog:0x80DEEA,road:0xC4A882,roadEdge:0xA0826D,obj:0x5D4037,unlocked:true},
    {id:7,name:'Enchanted Forest Old',emoji:'🌲',ground:0x2E5D2E,sky1:0x1B5E20,sky2:0x0D3B0D,fog:0x1A4D1A,road:0x5C4033,roadEdge:0x3E2723,obj:0x3E2723,unlocked:true},
    {id:8,name:'Mountain Trail Old',emoji:'🏔️',ground:0x8A8A7A,sky1:0x90CAF9,sky2:0x5C9CE6,fog:0xB0BEC5,road:0x7A7A6A,roadEdge:0x9E9E9E,obj:0x607D8B,unlocked:true},
    {id:9,name:'Downtown City Old',emoji:'🏙️',ground:0x505050,sky1:0x455A64,sky2:0x263238,fog:0x546E7A,road:0x424242,roadEdge:0xFFEB3B,obj:0x37474F,unlocked:true}
];

const POWERUPS = [
    {id:0,name:'Magnet',emoji:'🧲',dur:10,color:0xFF4081},
    {id:1,name:'Shield',emoji:'🛡️',dur:8,color:0x2196F3},
    {id:2,name:'Speed',emoji:'⚡',dur:6,color:0xFFEB3B},
    {id:3,name:'Ghost',emoji:'👻',dur:5,color:0x9C27B0},
    {id:4,name:'x2 Score',emoji:'✖️',dur:12,color:0xFF9800},
    {id:5,name:'Giant',emoji:'🦖',dur:8,color:0x4CAF50},
];

// ============ STATE ============
const S = {
    screen:'mainMenu', dog:0, theme:0,
    totalBones:0, totalGems:50, bestDist:0,
    running:false, paused:false,
    score:0, bones:0, dist:0,
    combo:0, bestCombo:0, lastCombo:0,
    speed:0.3, baseSpd:0.3, maxSpd:0.9,
    lane:0, tgtLane:0,
    jumping:false, sliding:false,
    jmpVel:0, dogY:0,
    shield:false, magnet:false, ghost:false, scoreMul:1, giant:false,
    antagActive:false, antagTimer:0,
    first:true, tutorialShown:false,
};

// ============ THREE.JS ============
let scene, cam, ren, clk, composer;
let dog, antag, chunks=[], obs=[], boneList=[], pups=[], parts=[];
let parallaxGroup;
let activePowerups = {};
const LW=2.2, CL=40, VC=10;
let nextChunkZ=0, currentStage=1;


// --- Premium Global Shader ---
function Mat(opt) {
    const m = new THREE.MeshStandardMaterial(opt);
    m.onBeforeCompile = function(shader) {
        // Curve World Shader (Subway Surfers effect)
        shader.vertexShader = shader.vertexShader.replace(
            '#include <begin_vertex>',
            `
            #include <begin_vertex>
            vec4 wPos = modelMatrix * vec4(position, 1.0);
            float dz = wPos.z - cameraPosition.z;
            if (dz < 0.0) { transformed.y -= (dz * dz) * 0.0025; }
            `
        );
    };
    return m;
}

function disposeObj(obj) {
    if(!obj) return;
    if(obj.isGroup || obj.isObject3D) obj.children.slice().forEach(child => disposeObj(child));
    if(obj.geometry) obj.geometry.dispose();
    if(obj.material) {
        if(Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
        else obj.material.dispose();
    }
}

function init() {
    scene = new THREE.Scene();
    clk = new THREE.Clock();
    cam = new THREE.PerspectiveCamera(60, innerWidth/innerHeight, 0.1, 250);
    cam.position.set(0,5,8);
    cam.lookAt(0,0.5,-5);
    ren = new THREE.WebGLRenderer({canvas:document.getElementById('gameCanvas'),antialias:true});
    ren.setSize(innerWidth,innerHeight);
    ren.setPixelRatio(Math.min(devicePixelRatio,2));
    ren.shadowMap.enabled=true;
    ren.shadowMap.type=THREE.PCFSoftShadowMap;
    ren.outputEncoding = THREE.sRGBEncoding;
    ren.toneMapping = THREE.ACESFilmicToneMapping;
    ren.toneMappingExposure = 1.1;
    ren.physicallyCorrectLights = true;

    const renderScene = new THREE.RenderPass(scene, cam);
    const bloomPass = new THREE.UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 1.0, 0.4, 0.85);
    composer = new THREE.EffectComposer(ren);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    addEventListener('resize',()=>{
        cam.aspect=innerWidth/innerHeight;
        cam.updateProjectionMatrix();
        ren.setSize(innerWidth,innerHeight);
        if(composer) composer.setSize(innerWidth, innerHeight);
    });
    setTheme(THEMES[S.theme]);
    addLights();
    makeDog();
    makeAntag();
    initParallax();
    menuLoop();
}

function initParallax() {
    if(parallaxGroup) { scene.remove(parallaxGroup); disposeObj(parallaxGroup); }
    parallaxGroup = new THREE.Group();
    for(let i=0; i<30; i++) {
        const side = i % 2 === 0 ? 1 : -1;
        const x = side * (80 + Math.random() * 40);
        const z = (Math.random() - 0.5) * 400;
        const h = 20 + Math.random() * 60;
        const w = 30 + Math.random() * 40;
        const mesh = new THREE.Mesh(new THREE.ConeGeometry(w/2, h, 32), Mat({color:0x1a1a24, flatShading:false}));
        mesh.position.set(x, h/2 - 10, z);
        parallaxGroup.add(mesh);
    }
    scene.add(parallaxGroup);
}

function setTheme(t) {
    let fColor = t.fog;
    if (t.id === 0) {
        // Dynamic fog for Sunrise Village stages
        if(currentStage === 1) fColor = 0xFF8A65; // deep sunrise
        if(currentStage === 2) fColor = 0xFFCC80; // morning
        if(currentStage >= 3) fColor = 0xB3E5FC; // bright day
        scene.background=new THREE.Color(currentStage >= 3 ? 0x81D4FA : t.sky1);
    } else {
        scene.background=new THREE.Color(t.sky1);
    }
    scene.fog=new THREE.FogExp2(fColor,0.012);
}

function addLights() {
    scene.children.filter(c=>c.isLight).forEach(l=>scene.remove(l));
    const th=THEMES[S.theme<4?S.theme:S.theme%4];
    const ambColor = th.id===2 ? 0x222222 : th.id===3 ? 0x444455 : 0xffffff;
    const ambInt = th.id===2 ? 0.3 : th.id===3 ? 0.4 : 0.6;
    scene.add(new THREE.AmbientLight(ambColor, ambInt * 1.5));
    const sunColor = th.id===3 ? 0x6666FF : th.id===2 ? 0x000000 : 0xFFF5E0;
    const sun=new THREE.DirectionalLight(sunColor, th.id===2? 0: 4.0);
    sun.position.set(12, 18, 5);
    sun.castShadow=true;
    sun.shadow.mapSize.set(2048,2048); sun.shadow.bias=-0.0005;
    sun.shadow.camera.near=0.5;sun.shadow.camera.far=80;
    sun.shadow.camera.left=-20;sun.shadow.camera.right=20;
    sun.shadow.camera.top=20;sun.shadow.camera.bottom=-20;
    sun.shadow.bias=-0.001;
    scene.add(sun);
    if(th.id !== 2){
        scene.add(new THREE.HemisphereLight(th.sky1, 0x1a1a2e, 0.8));
    }
}


// ============ DOG ============
function makeDog() {
    if(dog) { scene.remove(dog); disposeObj(dog); }
    dog=new THREE.Group();
    const dd = DOGS[S.dog];
    // Unity-style Low Poly Flat Shaded materials
    const m=Mat({color:dd.color, roughness:0.7, metalness:0.1});
    const mDark=Mat({color:new THREE.Color(dd.color).multiplyScalar(0.7), roughness:1.0, flatShading:false});

    // Body
    const body=new THREE.Mesh(new THREE.SphereGeometry(0.38, 32, 32),m);
    body.scale.set(1,0.82,1.45);
    body.position.set(0,0.45,0);
    body.castShadow=true;
    dog.add(body);

    // Chest (fluffy)
    const chest=new THREE.Mesh(new THREE.SphereGeometry(0.24, 32, 32),
        Mat({color:0xFFF8E1,roughness:0.9, metalness:0.0}));
    chest.position.set(0,0.35,-0.32);
    dog.add(chest);

    // Head (Bigger for cartoonish look)
    const head=new THREE.Mesh(new THREE.SphereGeometry(0.34, 32, 32),m);
    head.position.set(0,0.75,-0.55);
    head.castShadow=true;
    head.name='head';
    dog.add(head);

    // Snout
    const snout=new THREE.Mesh(new THREE.SphereGeometry(0.12, 32, 32),
        Mat({color:0x5D4037,roughness:0.8}));
    snout.position.set(0,0.6,-0.82);
    dog.add(snout);

    // Nose & tongue
    const nose=new THREE.Mesh(new THREE.SphereGeometry(0.05, 32, 32),
        Mat({color:0x111111,roughness:0.2,metalness:0.6}));
    nose.position.set(0,0.63,-0.92);
    dog.add(nose);
    const tongue=new THREE.Mesh(new THREE.BoxGeometry(0.06,0.02,0.1),
        Mat({color:0xFF5252,roughness:0.7}));
    tongue.position.set(0,0.5,-0.88);
    tongue.name='tongue';
    dog.add(tongue);

    // Eyes with shine (Bigger, cuter)
    const eyeM=Mat({color:0x1A1A1A,roughness:0.1,metalness:0.8});
    [-0.12,0.12].forEach(x=>{
        const eye=new THREE.Mesh(new THREE.SphereGeometry(0.075, 32, 32),eyeM);
        eye.position.set(x,0.82,-0.80);
        dog.add(eye);
        const shine=new THREE.Mesh(new THREE.SphereGeometry(0.028, 32, 32),
            new THREE.MeshBasicMaterial({color:0xffffff}));
        shine.position.set(x+0.025,0.84,-0.83);
        dog.add(shine);
    });

    // Ears
    [-0.17,0.17].forEach(x=>{
        const ear=new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.22, 32),mDark);
        ear.position.set(x,0.96,-0.48);
        ear.rotation.z=x>0?-0.35:0.35;
        ear.name='ear';
        dog.add(ear);
    });

    // Legs
    [[-0.17,-0.28],[0.17,-0.28],[-0.17,0.22],[0.17,0.22]].forEach(([x,z],i)=>{
        const leg=new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.32, 32),m);
        leg.position.set(x,0.12,z);
        leg.castShadow=true;
        leg.name='leg';
        leg.userData.idx=i;
        dog.add(leg);
        const paw=new THREE.Mesh(new THREE.SphereGeometry(0.065, 32, 32),mDark);
        paw.position.set(x,-0.03,z);
        paw.scale.y=0.45;
        paw.name='paw';
        paw.userData.idx=i;
        dog.add(paw);
    });

    // Tail
    const tail=new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.04, 0.38, 32),m);
    tail.position.set(0,0.68,0.52);
    tail.rotation.x=-0.6;
    tail.name='tail';
    dog.add(tail);

    // Collar
    const collar=new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.025, 16, 64),
        Mat({color:0xE53935,roughness:0.3,metalness:0.4}));
    collar.position.set(0,0.55,-0.4);
    collar.rotation.x=Math.PI/2;
    dog.add(collar);

    // Tag
    const tag=new THREE.Mesh(new THREE.SphereGeometry(0.035, 32, 32),
        Mat({color:0xFFD700,roughness:0.2,metalness:0.8}));
    tag.position.set(0,0.45,-0.55);
    tag.name='tag';
    dog.add(tag);

    dog.position.set(0,0,0);
    scene.add(dog);
}

function makeAntag() {
    if(antag) { scene.remove(antag); disposeObj(antag); }
    antag = new THREE.Group();
    
    // Body (Barrel chested)
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.25, 1.0, 32), Mat({color:0x1565C0, flatShading:false}));
    body.position.y = 0.9; body.castShadow = true; antag.add(body);
    
    // Head & Cap
    const headGroup = new THREE.Group();
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.3, 32, 32), Mat({color:0xFFCCBC, flatShading:false}));
    headGroup.add(head);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.34, 0.15, 32), Mat({color:0x111111, flatShading:false}));
    cap.position.y = 0.25; cap.rotation.x = -0.1; headGroup.add(cap);
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.05, 0.4), Mat({color:0x111111}));
    visor.position.set(0, 0.2, -0.2); headGroup.add(visor);
    headGroup.position.y = 1.6; headGroup.name = 'head'; antag.add(headGroup);

    // Arms
    [-0.45, 0.45].forEach(x => {
        const arm = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.6, 0.15), Mat({color:0x1976D2, flatShading:false}));
        arm.position.set(x, 1.1, 0); 
        // Move pivot point to shoulder
        arm.geometry.translate(0, -0.25, 0);
        arm.name = 'arm'; arm.userData.idx = x<0?0:1;
        arm.castShadow = true; antag.add(arm);
    });

    // Legs
    [-0.2, 0.2].forEach(x => {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.5, 0.18), Mat({color:0x37474F, flatShading:false}));
        leg.position.set(x, 0.45, 0); 
        leg.geometry.translate(0, -0.2, 0);
        leg.name = 'leg'; leg.userData.idx = x<0?0:1;
        leg.castShadow = true; antag.add(leg);
    });
    
    // Net Handled by right arm
    const netHandle = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 3.0), Mat({color:0x5D4037}));
    netHandle.position.set(0.6, 1.2, -0.8); netHandle.rotation.x = -Math.PI/4; antag.add(netHandle);
    const netRing = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.06, 16, 64), Mat({color:0xE0E0E0}));
    netRing.position.set(0.6, 2.2, -1.8); antag.add(netRing);
    
    antag.position.set(0, 0, 5);
    antag.visible = false;
    scene.add(antag);
}


function animDog(t, dt) {
    if(!dog) return;
    dt = dt || 0.016;
    const sp = S.running ? S.speed*12 : 3;
    const latSpd = S.running ? (S.tgtLane*LW - dog.position.x) * 10 : 0;
    
    // Squash & Stretch Scale Integration
    const baseS = S.giant ? 2.5 : 1.0;
    let tgtY = baseS;
    let tgtXZ = baseS;
    
    if(S.sliding) {
        tgtY = baseS * 0.4;
        tgtXZ = baseS * 1.1;
    } else if (S.jumping) {
        const stretch = Math.abs(S.jmpVel)*1.8;
        tgtY = baseS * (1 + stretch);
        tgtXZ = baseS / (1 + stretch*0.5);
    } else if (S.running) {
        const bounce = Math.abs(Math.sin(t*sp));
        tgtY = baseS * (1 - bounce*0.12);
        tgtXZ = baseS * (1 + bounce*0.06);
    }
    
    dog.scale.x += (tgtXZ - dog.scale.x) * 20 * dt;
    dog.scale.z += (tgtXZ - dog.scale.z) * 20 * dt;
    dog.scale.y += (tgtY - dog.scale.y) * 25 * dt;

    // Overlapping Action & Arcs
    dog.children.forEach(c=>{
        if(c.name==='leg') {
            const off=c.userData.idx%2===0?0:Math.PI;
            const swing = Math.sin(t*sp+off);
            c.rotation.x = swing * (S.running?0.8:0.15);
            c.position.y = 0.12 + Math.max(0, swing)*0.15;
            if(S.running) c.rotation.x += Math.cos(t*sp+off)*0.2; 
        }
        if(c.name==='paw') {
            const off=c.userData.idx%2===0?0:Math.PI;
            const swing = Math.sin(t*sp+off);
            c.position.y = -0.03 + Math.max(0, swing)*0.15;
            c.rotation.x = Math.max(0, -swing)*0.3;
        }
        if(c.name==='tail') {
            c.rotation.z = Math.sin(t*10)*0.6 - latSpd*0.1;
            c.rotation.x = -0.6 + (S.jumping ? Math.min(0, S.jmpVel)*2.0 : 0);
        }
        if(c.name==='head') {
            c.position.y = 0.7 + Math.sin(t*sp*0.8)*0.03;
            c.rotation.y = -latSpd*0.1;
            c.rotation.x = S.jumping ? -S.jmpVel*0.5 : 0;
        }
        if(c.name==='ear') {
            const wind = S.running ? S.speed*1.5 : 0;
            c.rotation.x = Math.sin(t*7+c.position.x*5)*0.2 + (S.jumping ? Math.max(0, -S.jmpVel)*1.5 : 0) - wind;
            c.rotation.z = (c.position.x>0?-0.35:0.35) - latSpd*0.15;
        }
        if(c.name==='tongue') {
            c.position.z = -0.88 + Math.sin(t*4)*0.015;
            c.rotation.x = Math.abs(Math.sin(t*4))*0.2;
        }
        if(c.name==='tag') {
            c.rotation.x = Math.sin(t*sp*2)*0.5;
            c.rotation.z = Math.sin(t*6)*0.3 - latSpd*0.2;
        }
    });
}

// ============ RICH ROAD GENERATION ============
// ============ CARTOON ROAD GENERATION ============
function makeChunk(z) {
    const th=THEMES[S.theme<4?S.theme:S.theme%4];
    const g=new THREE.Group();

    // Smooth Cartoon 3-lane road Base
    const roadColor = th.road;
    const roadTex = generateNoiseTexture(roadColor, 40);
    roadTex.repeat.set(2, 20);
    const roadM = Mat({map: roadTex, roughness:0.9, metalness:0.1});
    
    const curbTex = generateNoiseTexture(0xFFFFFF, 20);
    curbTex.repeat.set(1, 40);
    const curbM = Mat({map: curbTex, roughness:0.7});
    
    // Main road block
    const road = new THREE.Mesh(new THREE.BoxGeometry(LW*3.2, 0.4, CL), roadM);
    road.position.y = -0.2;
    road.receiveShadow = true;
    g.add(road);

    // Smooth embedded lane stripes (Subway Surfers/Tom Gold Run style)
    if(th.id !== 2){ // Rich crisp lane lines
        for(let dz = -CL/2 + 2; dz < CL/2; dz += 4){
            [-LW/2, LW/2].forEach(lx => {
                const stripe = new THREE.Mesh(new THREE.PlaneGeometry(0.15, 2.0), Mat({color:0xffffff, roughness:0.2}));
                stripe.rotation.x = -Math.PI/2;
                stripe.position.set(lx, 0.01, dz);
                stripe.receiveShadow = true;
                g.add(stripe);
            });
        }
    }

    // Polished Cartoon Sidewalk/Borders
    [-LW*1.7, LW*1.7].forEach(x => {
        const border = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, CL, 32), Mat({color:th.roadEdge, roughness:0.6}));
        border.rotation.x = Math.PI/2;
        border.position.set(x, 0.05, 0);
        border.receiveShadow = true;
        border.castShadow = true;
        g.add(border);
    });

    // Vibrant Smooth Ground Blocks
    [-1,1].forEach(side=>{
        const gnd=new THREE.Mesh(new THREE.BoxGeometry(40, 0.2, CL), (function(){
        const gt = generateNoiseTexture(th.ground, 25);
        gt.repeat.set(10, 10);
        return Mat({map: gt, roughness:0.95, metalness:0.0});
    })());
        gnd.position.set(side*23, -0.15, 0);
        gnd.receiveShadow=true;
        g.add(gnd);
    });

    addRichScenery(g,th,CL);

    g.position.z=z;
    g.userData.z0=z;
    scene.add(g);
    return g;
}

function addRichScenery(g,th,len) {
    if(th.id===0) addSunriseVillage(g,len);
    if(th.id===1) addPirateCove(g,len);
    if(th.id===2) addMineTunnel(g,len);
    if(th.id===3) addNeonCity(g,len);
}

function addSunriseVillage(g,len) {
    // Beautiful curved grass hills on sides
    [-1, 1].forEach(side => {
        for(let dz = -len/2 + 5; dz < len/2; dz+=20) {
            const hill = new THREE.Mesh(new THREE.SphereGeometry(10, 32, 32), Mat({color:0x558B2F, flatShading:false}));
            hill.position.set(side * 18, -4, dz);
            hill.scale.set(1, 0.3, 2);
            hill.receiveShadow = true;
            g.add(hill);
        }
    });

    for(let i=0;i<6+(currentStage*2);i++){
        const side=i%2===0?1:-1; const x=side*(LW*2.2+3+Math.random()*4), z=(Math.random()-0.5)*len;
        
        const isHouse = Math.random() < (currentStage*0.25);
        if (isHouse) {
            // High Quality Suburb House
            const houseGroup = new THREE.Group();
            
            // Base
            const base = new THREE.Mesh(new THREE.BoxGeometry(4, 3, 4.5), Mat({color:0xFFFFFF, roughness:0.9}));
            base.position.y = 1.5; base.castShadow=true; base.receiveShadow=true; houseGroup.add(base);
            
            // Roof (Overhanging)
            const roof = new THREE.Mesh(new THREE.ConeGeometry(3.5, 2.5, 4, 4), Mat({color:0xD32F2F, flatShading:false}));
            roof.position.y = 4.25; roof.rotation.y = Math.PI/4; roof.castShadow=true; houseGroup.add(roof);

            // Windows
            const winColor = currentStage === 1 ? 0xFF9800 : 0x222222; // Lit up at deep sunrise
            const winInt = currentStage === 1 ? 1 : 0;
            const win1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 0.1), Mat({color:winColor, emissive:winColor, emissiveIntensity:winInt}));
            win1.position.set(side>0?-2.05:2.05, 1.5, 1); houseGroup.add(win1);
            const win2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 0.1), Mat({color:winColor, emissive:winColor, emissiveIntensity:winInt}));
            win2.position.set(side>0?-2.05:2.05, 1.5, -1); houseGroup.add(win2);

            houseGroup.position.set(x, 0, z);
            if(side < 0) houseGroup.rotation.y = Math.PI; // Face the road
            g.add(houseGroup);

            // Sprinklers
            if(currentStage >= 3 && Math.random() > 0.5) {
                const sp_lx = side*(LW*2.2+1);
                const water = new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 32), Mat({color:0x81D4FA, transparent:true, opacity:0.7, roughness:0.0, metalness:1.0}));
                water.position.set(sp_lx, 0.4, z); g.add(water);
            }
        } else {
            // Low-Poly Unity Style Tree
            const trGroup = new THREE.Group();
            const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.5, 1.5, 32), Mat({color:0x795548, flatShading:false}));
            trunk.position.y = 0.75; trunk.castShadow=true; trGroup.add(trunk);
            
            const lColor = currentStage===1 ? 0x689F38 : 0x4CAF50;
            const geo = new THREE.SphereGeometry(1.4, 32, 32);
            const l1 = new THREE.Mesh(geo, Mat({color:lColor, flatShading:false}));
            l1.position.y = 2.2; l1.castShadow=true; trGroup.add(l1);
            const l2 = new THREE.Mesh(new THREE.SphereGeometry(1.0, 32, 32), Mat({color:lColor, flatShading:false}));
            l2.position.set(0.8, 2.8, 0.4); l2.castShadow=true; trGroup.add(l2);
            const l3 = new THREE.Mesh(new THREE.SphereGeometry(1.1, 32, 32), Mat({color:lColor, flatShading:false}));
            l3.position.set(-0.7, 2.6, -0.5); l3.castShadow=true; trGroup.add(l3);
            
            trGroup.position.set(x, 0, z);
            g.add(trGroup);
        }
    }
}

function addPirateCove(g,len) {
    [-1,1].forEach(side=>{
        const sand=new THREE.Mesh(new THREE.BoxGeometry(10,0.5,len), Mat({color:0xEDC9AF, roughness:1}));
        sand.position.set(side*LW*3, -0.1, 0); sand.receiveShadow=true; g.add(sand);
    });
    for(let i=0;i<5;i++){
        const side=i%2===0?1:-1; const x=side*(LW*2.8+Math.random()*2), z=(Math.random()-0.5)*len;
        const trunk=new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.3, 4, 32), Mat({color:0x8D6E63}));
        trunk.position.set(x, 2, z); trunk.rotation.z=side*0.2; trunk.castShadow=true; g.add(trunk);
        for(let f=0;f<5;f++){
            const frond=new THREE.Mesh(new THREE.ConeGeometry(1, 2, 32), Mat({color:0x2E7D32}));
            frond.position.set(x+Math.cos(f*1.2)*0.5, 4, z+Math.sin(f*1.2)*0.5);
            frond.rotation.set(Math.cos(f), f*1.2, 0); g.add(frond);
        }
    }
    if(Math.random()>0.7){
        const ship = new THREE.Group();
        const hull = new THREE.Mesh(new THREE.BoxGeometry(8, 3, 3), Mat({color:0x3E2723}));
        hull.position.y=1.5; ship.add(hull);
        const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.1,8), Mat({color:0x111111}));
        mast.position.y=5; ship.add(mast);
        const sail = new THREE.Mesh(new THREE.BoxGeometry(0.1, 4, 3), Mat({color:0xEEEEEE}));
        sail.position.set(0, 5, 0); ship.add(sail);
        ship.position.set(-18, -1, (Math.random()-0.5)*len);
        g.add(ship);
    }
}

function addMineTunnel(g,len) {
    const archM = Mat({color:0x444444, roughness:0.9, side:THREE.BackSide});
    const arch = new THREE.Mesh(new THREE.CylinderGeometry(12, 12, len, 16, 1, true, 0, Math.PI), archM);
    arch.rotation.z = Math.PI/2; arch.rotation.y = Math.PI/2;
    arch.position.y = -1;
    g.add(arch);
    
    for(let dz=-len/2+2; dz<len/2; dz+=15){
        const support = new THREE.Mesh(new THREE.TorusGeometry(11.8, 0.4, 6, 16, Math.PI), Mat({color:0x3E2723}));
        support.rotation.z = Math.PI/2; support.rotation.y = Math.PI/2;
        support.position.set(0, -1, dz); g.add(support);
        
        [-8, 8].forEach(x => {
            const lant = new THREE.Mesh(new THREE.BoxGeometry(0.8,1.0,0.8), Mat({color:0xFFB300, emissive:0xFFA000, emissiveIntensity:1.5}));
            lant.position.set(x, 4, dz); g.add(lant);
            const light = new THREE.PointLight(0xFFB300, 1.5, 15);
            light.position.set(x, 4, dz); g.add(light);
        });
    }
    [-1,1].forEach(side=>{
        const water = new THREE.Mesh(new THREE.BoxGeometry(2, 0.1, len), Mat({color:0x00BCD4, transparent:true, opacity:0.8, roughness:0.05, metalness:0.9}));
        water.position.set(side*9, -0.4, 0); g.add(water);
    });
}

function addNeonCity(g,len) {
    for(let i=0;i<8;i++){
        const side=i%2===0?1:-1; 
        const x=side*(LW*2+4+Math.random()*4), z=(Math.random()-0.5)*len;
        const w = 4+Math.random()*3, d = 4+Math.random()*3, h = 15+Math.random()*20;
        const bldg=new THREE.Mesh(new THREE.BoxGeometry(w,h,d), Mat({color:0x111122, roughness:0.4}));
        bldg.position.set(x, h/2, z); g.add(bldg);
        
        const win = new THREE.Mesh(new THREE.BoxGeometry(w+0.1, h*0.8, 0.1), Mat({color:0xFFFF55, emissive:0xFFFF55, emissiveIntensity:0.8, wireframe:true}));
        win.position.set(x, h/2, z+(side*d/2)); g.add(win);
        
        if(Math.random()>0.5){
            const signH = 3+Math.random()*4;
            const colors = [0xFF00FF, 0x00FFFF, 0xFF3300, 0x33FF00];
            const c = colors[Math.floor(Math.random()*colors.length)];
            const sign = new THREE.Mesh(new THREE.ConeGeometry(1.5, 3, 32), Mat({color:c, emissive:c, emissiveIntensity:2}));
            sign.position.set(side*(LW*2+2), signH, z); sign.rotation.x=Math.PI/2; g.add(sign);
            const light = new THREE.PointLight(c, 2, 10); light.position.set(side*(LW*2+2), signH, z); g.add(light);
        }
    }
}


function generateNoiseTexture(colorHex, noiseFactor, size=512) {
    const canvas = document.createElement('canvas');
    canvas.width = size; canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#' + colorHex.toString(16).padStart(6,'0');
    ctx.fillRect(0, 0, size, size);
    const id = ctx.getImageData(0,0,size,size);
    const d = id.data;
    for(let i=0; i<d.length; i+=4) {
        const v = (Math.random() - 0.5) * noiseFactor;
        d[i] = Math.min(255, Math.max(0, d[i] + v));
        d[i+1] = Math.min(255, Math.max(0, d[i+1] + v));
        d[i+2] = Math.min(255, Math.max(0, d[i+2] + v));
    }
    ctx.putImageData(id, 0, 0);
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    return tex;
}

function initRoad() {

    chunks.forEach(c=>{scene.remove(c); disposeObj(c);});
    chunks=[];
    nextChunkZ=0;
    for(let i=0;i<VC;i++){
        chunks.push(makeChunk(-i*CL));
        nextChunkZ=-i*CL;
    }
    nextChunkZ-=CL;
}

function updateRoad() {
    const dz=dog.position.z;
    for(let i=0; i<chunks.length; i++){
        let ch = chunks[i];
        // Chunk is behind player if its center is more than CL behind dog
        if(ch.userData.z0>dz+CL*1.5){
            nextChunkZ-=CL;
            scene.remove(ch); disposeObj(ch);
            chunks[i] = makeChunk(nextChunkZ);
        }
    }
}

// ============ OBSTACLES ============
function spawnObs() {
    let lane=Math.floor(Math.random()*3)-1;
    const r=Math.random();
    let mesh;
    const pM = Mat({color:0xE53935, roughness:0.5}); // Red plastic
    const wM = Mat({color:0xffffff, roughness:0.5}); // White plastic
    
    if(r<0.2) {
        // Jump Barricade (Cartoon Red/White)
        const group=new THREE.Group();
        const bar=new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 1.8, 32), pM);
        bar.rotation.z = Math.PI/2;
        bar.position.y=0.4; group.add(bar);
        const stripe=new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.6, 32), wM);
        stripe.rotation.z = Math.PI/2;
        stripe.position.y=0.4; group.add(stripe);
        mesh=group; mesh.userData={type:'jump'};
    } else if(r<0.4) {
        // Slide Beams
        const group=new THREE.Group();
        const beam=new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 2.2, 32), Mat({color:0xFF9800, roughness:0.5}));
        beam.rotation.z = Math.PI/2;
        beam.position.y=1.3; group.add(beam);
        [-0.9,0.9].forEach(x=>{
            const pole=new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1.3, 32), Mat({color:0x555555, roughness:0.6}));
            pole.position.set(x,0.65,0); group.add(pole);
        });
        mesh=group; mesh.userData={type:'slide'};
    } else if(r<0.55) {
        // Static Dodge (Smooth Cartoon Rock)
        mesh=new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 32), Mat({color:0x7A8A7A, roughness:0.7}));
        mesh.scale.y = 0.8;
        mesh.position.y=0.5;
        mesh.userData={type:'dodge'};
        mesh.rotation.y = Math.random();
    } else if(r<0.7) {
        // Moving Dodge (Smooth Cartoon Block)
        const geom = new THREE.CylinderGeometry(0.8, 0.8, 1.8, 32);
        geom.rotateZ(Math.PI/2);
        mesh = new THREE.Mesh(geom, Mat({color:0x03A9F4, roughness:0.5}));
        mesh.position.y=0.5;
        mesh.userData={type:'dodge',moving:true};
    } else if(r<0.85) {
        // Rolling Log (Wide, requires jump)
        const geom = new THREE.CylinderGeometry(0.45, 0.45, 5.0, 32); 
        geom.rotateZ(Math.PI/2);
        mesh = new THREE.Mesh(geom, Mat({color:0x3E2723, roughness:0.9}));
        mesh.position.y=0.45;
        mesh.userData={type:'jump', moving:true, roll:true};
        lane = 0; // Cover all lanes
    } else {
        // Low Laser Gate (Wide, requires slide)
        const group=new THREE.Group();
        const laser = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 5.0, 32), Mat({color:0xFF0055, emissive:0xFF0055, emissiveIntensity:3.0}));
        laser.rotation.z = Math.PI/2;
        laser.position.y=1.2;
        const glow = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 5.0, 32), Mat({color:0xFF0055, transparent:true, opacity:0.3, blending:THREE.AdditiveBlending}));
        glow.rotation.z = Math.PI/2;
        glow.position.y=1.2;
        group.add(laser); group.add(glow);
        [-2.4, 2.4].forEach(x => {
            const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 1.5, 32), Mat({color:0x222222, metalness:0.8}));
            pole.position.set(x, 0.75, 0);
            group.add(pole);
        });
        mesh=group;
        mesh.userData={type:'slide'};
        lane = 0; // Cover all lanes
    }

    if(mesh.isGroup){ mesh.children.forEach(c=>{c.castShadow=true}); }
    else { mesh.castShadow=true; }
    mesh.position.x=lane*LW;
    mesh.position.z=dog.position.z-50-Math.random()*15;
    mesh.userData.lane=lane;
    mesh.userData.active=true;
    scene.add(mesh);
    obs.push(mesh);
}

function updateObs(dt) {
    obs.forEach(o=>{
        if(o.userData.moving) o.position.z += 10*dt;
        if(o.userData.roll) o.rotation.x -= 20*dt;
        if(o.position.z>dog.position.z+15){scene.remove(o);disposeObj(o);o.userData.active=false;}
    });
    obs=obs.filter(o=>o.userData.active);
}

// ============ BONES & POWERUPS ============
function spawnBones() {
    const lane=Math.floor(Math.random()*3)-1;
    const n=4+Math.floor(Math.random()*5);
    const pattern=Math.random();
    for(let i=0;i<n;i++){
        let isThemeCollect = S.theme === 0; // Sunrise Village: Picket Fences
        let b;
        if (isThemeCollect) {
            // White Picket Fence slat
            b = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.7, 0.1), Mat({color:0xFFFFFF, roughness:0.8}));
        } else {
            // Default Bone/Coin
            b = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.1, 16, 64),
                Mat({color:0xFFC107, roughness:0.4, emissive:0xFF9800, emissiveIntensity:0.2}));
        }

        let bx=lane*LW, bz=dog.position.z-40-i*2.5;
        let baseY = 0.7;
        if(pattern>0.6) baseY = 0.7+Math.sin(i/n*Math.PI)*1.5;
        
        b.position.set(bx, baseY, bz);
        b.userData = {active:true, baseY: baseY, seed: Math.random()*2, isTheme: isThemeCollect};
        b.castShadow=true;
        scene.add(b);
        boneList.push(b);
    }
}

function spawnPup() {
    const lane=Math.floor(Math.random()*3)-1;
    const ty=POWERUPS[Math.floor(Math.random()*POWERUPS.length)];
    const g=new THREE.Group();
    // Glowing box
    const box=new THREE.Mesh(new THREE.BoxGeometry(0.5,0.5,0.5),
        Mat({color:ty.color,roughness:0.15,emissive:ty.color,emissiveIntensity:0.6}));
    g.add(box);
    // Orbiting ring
    const ring=new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.03, 16, 64),
        Mat({color:0xFFFFFF,emissive:ty.color,emissiveIntensity:0.5}));
    ring.name='ring';
    g.add(ring);
    g.position.set(lane*LW,1.0,dog.position.z-50);
    g.userData={active:true,ptype:ty};
    scene.add(g);
    pups.push(g);
}

function updateCollect(dt,t) {
    const mr=S.magnet?7:1.5;
    boneList.forEach(b=>{
        b.rotation.y+=dt*3;
        b.rotation.x+=dt*1.5;
        // Cartoonish hover bounce
        b.position.y = b.userData.baseY + Math.sin(t*5 + b.userData.seed)*0.2;
        if(S.magnet){
            const dx=dog.position.x-b.position.x,dz=dog.position.z-b.position.z;
            const d=Math.sqrt(dx*dx+dz*dz);
            if(d<mr){b.position.x+=dx*dt*10;b.position.z+=dz*dt*10;}
        }
        const dx=Math.abs(b.position.x-dog.position.x);
        const dz=Math.abs(b.position.z-dog.position.z);
        if(dx<1.0&&dz<1.2){
            scene.remove(b);disposeObj(b);b.userData.active=false;
            S.bones++;S.score+=10*S.scoreMul;S.combo++;
            if(S.combo>S.bestCombo) S.bestCombo=S.combo;
            emitParts(b.position.clone(), b.userData.isTheme?0xFFFFFF:0xFFD700, 5);
        }
        if(b.position.z>dog.position.z+15){scene.remove(b);disposeObj(b);b.userData.active=false;}
    });
    boneList=boneList.filter(b=>b.userData.active);

    pups.forEach(p=>{
        p.rotation.y+=dt*3;
        const ring=p.children.find(c=>c.name==='ring');
        if(ring){ring.rotation.x=t*4;ring.rotation.z=t*3;}
        p.position.y=1+Math.sin(t*3)*0.25;
        const dx=Math.abs(p.position.x-dog.position.x);
        const dz=Math.abs(p.position.z-dog.position.z);
        if(dx<1.3&&dz<1.3){activatePup(p.userData.ptype);scene.remove(p);disposeObj(p);p.userData.active=false;}
        if(p.position.z>dog.position.z+15){scene.remove(p);disposeObj(p);p.userData.active=false;}
    });
    pups=pups.filter(p=>p.userData.active);
}

function activatePup(ty) {
    notify(ty.emoji+' '+ty.name+'!');
    emitParts(dog.position.clone(),ty.color,12);
    const d=ty.dur*1000;
    activePowerups[ty.id] = { ty: ty, end: Date.now() + d };
    switch(ty.id){
        case 0:S.magnet=true;setTimeout(()=>S.magnet=false,d);break;
        case 1:S.shield=true;setTimeout(()=>S.shield=false,d);break;
        case 2:S.speed=Math.min(S.maxSpd,S.speed*1.5);setTimeout(()=>{S.speed=S.baseSpd+S.dist*0.00002;},d);break;
        case 3:S.ghost=true;dog.traverse(c=>{if(c.material){c.material.transparent=true;c.material.opacity=0.35;}});
            setTimeout(()=>{S.ghost=false;dog.traverse(c=>{if(c.material){c.material.transparent=false;c.material.opacity=1;}});},d);break;
        case 4:S.scoreMul=2;setTimeout(()=>S.scoreMul=1,d);break;
        case 5:S.giant=true;dog.scale.set(2.5,2.5,2.5);dog.position.y=0.75;
            setTimeout(()=>{S.giant=false;dog.scale.set(1,1,1);dog.position.y=S.jumping?S.dogY:0;},d);break;
    }
}

// ============ COLLISION (fair hitboxes) ============
function checkHit() {
    if(S.ghost) return;
    for(const o of obs){
        if(!o.userData.active) continue;
        const dx=Math.abs(o.position.x-dog.position.x);
        const dz=Math.abs(o.position.z-dog.position.z);
        if(dx<0.7&&dz<0.6){
            if(o.userData.type==='jump'&&S.jumping&&S.dogY>0.6) continue;
            if(o.userData.type==='slide'&&S.sliding) continue;
            if(o.userData.type==='dodge'&&dx>0.55) continue;
            if(S.giant){
                scene.remove(o);disposeObj(o);o.userData.active=false;
                emitParts(o.position.clone(),0x4CAF50,15);S.score+=50*S.scoreMul;notify('SMASH! +50');return;
            }
            if(S.shield){
                S.shield=false;scene.remove(o);disposeObj(o);o.userData.active=false;
                notify('🛡️ Shield!');emitParts(o.position.clone(),0x2196F3,8);S.combo=0;return;
            }
            if(S.antagActive){
                endGame();return;
            } else {
                S.antagActive=true; S.antagTimer=8;
                S.speed=Math.max(S.baseSpd, S.speed-0.2); 
                S.combo=0;
                notify('⚠️ Dogcatcher Chasing! ⚠️');
                scene.remove(o); disposeObj(o); o.userData.active=false;
                emitParts(o.position.clone(), 0xE53935, 12);
                dog.position.z += 1.0; // Knockback effect
                return;
            }
        }
        if(dx<1.2&&dx>0.55&&dz<0.4&&!o.userData.nm){
            o.userData.nm=true;S.score+=50*S.scoreMul;S.combo+=2;notify('NEAR MISS! +50');
        }
    }
}

// ============ PARTICLES ============
function emitDust(pos) {
    const p=new THREE.Mesh(new THREE.SphereGeometry(0.08, 32, 32), new THREE.MeshBasicMaterial({color:0xDDDDDD}));
    p.position.copy(pos);
    p.userData={vx:(Math.random()-0.5)*2,vy:Math.random()*1.5+0.5,vz:(Math.random()-0.5)*2,life:0.6};
    scene.add(p);parts.push(p);
}
function emitParts(pos,color,n) {
    for(let i=0;i<(n||8);i++){
        const p=new THREE.Mesh(new THREE.SphereGeometry(0.06, 32, 32),
            new THREE.MeshBasicMaterial({color}));
        p.position.copy(pos);
        p.userData={vx:(Math.random()-0.5)*4,vy:Math.random()*5+2,vz:(Math.random()-0.5)*4,life:1};
        scene.add(p);parts.push(p);
    }
}
function updateParts(dt) {
    parts.forEach(p=>{
        p.position.x+=p.userData.vx*dt;p.position.y+=p.userData.vy*dt;p.position.z+=p.userData.vz*dt;
        p.userData.vy-=12*dt;p.userData.life-=dt*2;
        p.scale.setScalar(Math.max(0,p.userData.life));
        if(p.userData.life<=0){scene.remove(p);disposeObj(p);p.userData.dead=true;}
    });
    parts=parts.filter(p=>!p.userData.dead);
}

// ============ INPUT ============
let tx=0,ty=0,tt=0;
function setupInput() {
    document.addEventListener('keydown',e=>{
        if(!S.running||S.paused) return;
        switch(e.key){
            case 'ArrowLeft':case 'a':case 'A':S.tgtLane=Math.max(-1,S.tgtLane-1);break;
            case 'ArrowRight':case 'd':case 'D':S.tgtLane=Math.min(1,S.tgtLane+1);break;
            case 'ArrowUp':case 'w':case 'W':case ' ':doJump();break;
            case 'ArrowDown':case 's':case 'S':doSlide();break;
        }
    });
    document.addEventListener('touchstart',e=>{tx=e.touches[0].clientX;ty=e.touches[0].clientY;tt=Date.now();},{passive:true});
    document.addEventListener('touchmove',e=>{if(S.screen==='gameHUD') e.preventDefault();},{passive:false});
    document.addEventListener('touchend',e=>{
        if(!S.running||S.paused) return;
        const dx=e.changedTouches[0].clientX-tx,dy=e.changedTouches[0].clientY-ty;
        if(Date.now()-tt>400) return;
        if(Math.abs(dx)<30&&Math.abs(dy)<30) return;
        if(Math.abs(dx)>Math.abs(dy)){dx>0?S.tgtLane=Math.min(1,S.tgtLane+1):S.tgtLane=Math.max(-1,S.tgtLane-1);}
        else{dy>0?doSlide():doJump();}
    },{passive:true});
}
function doJump(){if(!S.jumping){S.jumping=true;S.jmpVel=0.25;}}
function doSlide(){
    if(!S.sliding&&!S.jumping){
        S.sliding=true;
        setTimeout(()=>{S.sliding=false;},700);
    }
}

// ============ GAME ============
let stmr=0,btmr=0,ptmr=0,nextThemePoints=1000;

function startGame() {
    obs.forEach(o=>{scene.remove(o); disposeObj(o);});obs=[];
    boneList.forEach(b=>{scene.remove(b); disposeObj(b);});boneList=[];
    pups.forEach(p=>{scene.remove(p); disposeObj(p);});pups=[];
    parts.forEach(p=>{scene.remove(p); disposeObj(p);});parts=[];

    S.running=true;S.paused=false;
    S.score=0;S.bones=0;S.dist=0;
    S.combo=0;S.bestCombo=0;S.lastCombo=0;
    S.speed=S.baseSpd;S.lane=0;S.tgtLane=0;
    S.jumping=false;S.sliding=false;S.jmpVel=0;S.dogY=0;
    S.shield=false;S.magnet=false;S.ghost=false;S.scoreMul=1;S.giant=false;
    activePowerups={};
    S.antagActive=false;S.antagTimer=0;
    stmr=0;btmr=0;ptmr=0;nextThemePoints=2000;
    currentStage=1;

    setTheme(THEMES[S.theme]);
    addLights();
    makeDog();
    makeAntag();
    dog.position.set(0,0,0);
    if(parallaxGroup) parallaxGroup.position.z = 0;
    initRoad();
    showScr('gameHUD');

    if(S.first){
        S.first=false;
        S.paused=true; // PAUSE during tutorial!
        document.getElementById('tutorial').classList.add('active');
    }

    updateHUD();
    clk.start();
}

function gameLoop() {
    requestAnimationFrame(gameLoop);
    const t=performance.now()*0.001;

    if(!S.running||S.paused){
        animDog(t, 0.016);
        if(composer) composer.render(); else ren.render(scene,cam);
        return;
    }

    const dt=Math.min(clk.getDelta(),0.04);

    S.speed=Math.min(S.maxSpd,S.baseSpd+S.dist*0.00002);
    dog.position.z-=S.speed*55*dt;
    S.dist=Math.abs(Math.floor(dog.position.z));
    S.score+=S.speed*15*dt*S.scoreMul;

    let themeScore = S.score % 2000;
    let newStage = 1;
    if (themeScore >= 500 && themeScore < 1000) newStage = 2;
    if (themeScore >= 1000 && themeScore < 1500) newStage = 3;
    if (themeScore >= 1500) newStage = 4; // Wow moment max intensity

    if (newStage > currentStage) {
        currentStage = newStage;
        notify('World Stage ' + currentStage + '!');
        setTheme(THEMES[S.theme]); // Refresh lighting/fog for stage
    }

    if (S.score >= nextThemePoints) {
        nextThemePoints += 2000;
        currentStage = 1;
        S.theme = (S.theme + 1) % THEMES.length;
        setTheme(THEMES[S.theme]);
        addLights();
        notify('New Theme: ' + THEMES[S.theme].name + '!');
    }

    // Lane
    dog.position.x+=(S.tgtLane*LW-dog.position.x)*10*dt;

    // Jump
    let baseY = S.giant ? 0.75 : 0.0;
    if(S.sliding) baseY = S.giant ? 0.35 : -0.25;

    if(S.jumping){
        S.jmpVel-=0.55*dt;
        S.dogY+=S.jmpVel;
        if(S.dogY<=0){S.dogY=0;S.jumping=false;S.jmpVel=0;}
    }
    
    dog.position.y = S.dogY + baseY;

    // Parallax
    if(parallaxGroup) parallaxGroup.position.z = dog.position.z * 0.95;

    // Camera
    cam.position.z=dog.position.z+8;
    cam.position.y=4.5+(S.jumping?1.5:0);
    cam.position.x+=(dog.position.x*0.25-cam.position.x)*3*dt;
    cam.lookAt(dog.position.x*0.2,0.8,dog.position.z-6);

    // Antagonist logic
    if (S.antagActive && antag) {
        antag.visible = true;
        S.antagTimer -= dt;
        
        // Follow player smoothly
        antag.position.x += (dog.position.x - antag.position.x) * 6 * dt;
        
        // Position specifically behind player
        let targetZ = dog.position.z + 2.8; 
        antag.position.z += (targetZ - antag.position.z) * 5 * dt;
        
        // Articulated Running animation
        antag.children.forEach(c => {
            if(c.name === 'arm') c.rotation.x = Math.sin(t*18 + (c.userData.idx*Math.PI)) * 0.8;
            if(c.name === 'leg') c.rotation.x = Math.sin(t*18 + (c.userData.idx*Math.PI)) * 0.8;
            if(c.name === 'head') c.rotation.y = Math.sin(t*8) * 0.2;
        });
        antag.rotation.z = Math.sin(t*18)*0.05;
        antag.position.y = Math.abs(Math.sin(t*18))*0.15;

        if (S.antagTimer <= 0) {
            S.antagActive = false;
            notify('Evaded the catcher!');
        }
    } else if (antag) {
        // Fall behind
        antag.position.z += (dog.position.z + 15 - antag.position.z) * 2 * dt;
        if(antag.position.z > dog.position.z + 10) antag.visible = false;
    }

    // Spawns — gentler at start
    stmr+=dt;btmr+=dt;ptmr+=dt;
    const sr=Math.max(0.8,3.0-S.dist*0.00015);
    if(stmr>sr){spawnObs();stmr=0;}
    if(btmr>2.5){spawnBones();btmr=0;}
    if(ptmr>12+Math.random()*8){spawnPup();ptmr=0;}

    animDog(t, dt);
    updateRoad();
    updateObs(dt);
    updateCollect(dt,t);
    updateParts(dt);
    checkHit();
    updateHUD();

    if(S.combo>0&&performance.now()-S.lastCombo>3000) S.combo=Math.max(0,S.combo-1);
    
    // Add running dust trail
    if(S.dist > 1 && !S.jumping && Math.random() > 0.6) {
        emitDust(new THREE.Vector3(dog.position.x + (Math.random()-0.5)*0.3, 0.05, dog.position.z + 0.5));
    }
    
    if(composer) composer.render(); else ren.render(scene,cam);
}

function endGame() {
    S.running=false;
    S.totalBones+=S.bones;
    const rec=S.dist>S.bestDist;
    if(rec) S.bestDist=S.dist;
    emitParts(dog.position.clone(),0xE53935,15);

    document.getElementById('goDistance').textContent=S.dist+'m';
    document.getElementById('goScore').textContent=Math.floor(S.score).toLocaleString();
    document.getElementById('goBones').textContent=S.bones;
    document.getElementById('goCombo').textContent='x'+S.bestCombo;
    document.getElementById('newRecord').style.display=rec?'block':'none';
    showScr('gameOver');
    saveGame();
}

// ============ UI ============
function showScr(id) {
    document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if(id==='gameHUD') document.getElementById('gameHUD').classList.add('active');
    S.screen=id;
}

function updateHUD() {
    document.getElementById('hudBones').textContent=S.bones;
    document.getElementById('hudScore').textContent=Math.floor(S.score).toLocaleString();
    document.getElementById('hudDistance').textContent=S.dist;
    const ce=document.getElementById('hudCombo');
    if(S.combo>=5){
        const label=S.combo>=100?' GODLIKE!':S.combo>=50?' INSANE!':S.combo>=20?' AMAZING!':'';
        ce.textContent='🔥 x'+S.combo+label;
        S.lastCombo=performance.now();
    } else ce.textContent='';
    document.getElementById('speedBar').style.width=((S.speed-S.baseSpd)/(S.maxSpd-S.baseSpd)*100)+'%';

    const pCont = document.getElementById('hudPowerups');
    pCont.innerHTML = '';
    const now = Date.now();
    for(const id in activePowerups) {
        const p = activePowerups[id];
        const timeLeft = p.end - now;
        if(timeLeft <= 0) {
            delete activePowerups[id];
            continue;
        }
        const pct = (timeLeft / (p.ty.dur*1000)) * 100;
        const cHex = '#' + p.ty.color.toString(16).padStart(6,'0');
        const el = document.createElement('div');
        el.className = 'pup-bar-container';
        el.style.borderColor = cHex;
        el.innerHTML = `<span class="pup-icon">${p.ty.emoji}</span><div class="pup-bar" style="width:${pct}%; background-color:${cHex}"></div>`;
        pCont.appendChild(el);
    }
}

function notify(txt) {
    const d=document.createElement('div');d.className='notification';d.textContent=txt;
    document.body.appendChild(d);setTimeout(()=>d.remove(),1100);
}

function menuLoop() {
    if(S.running) return;
    setTheme(THEMES[S.theme]);
    cam.position.set(0,3.5,5.5);
    cam.lookAt(0,0.5,0);
    function tick(){
        if(S.running) return;
        requestAnimationFrame(tick);
        const t=performance.now()*0.001;
        if(dog){dog.rotation.y=Math.sin(t*0.5)*0.3;animDog(t, 0.016);}
        if(composer) composer.render(); else ren.render(scene,cam);
    }
    tick();
}

function populateDogs() {
    const g=document.getElementById('dogGrid');g.innerHTML='';
    DOGS.forEach(d=>{
        const c=document.createElement('div');
        c.className=`dog-card ${d.id===S.dog?'selected':''} ${!d.unlocked?'locked':''}`;
        c.innerHTML=`<span class="dog-rarity rarity-${d.rarity}">${d.rarity.toUpperCase()}</span>
            <div class="dog-emoji">${d.emoji}</div><div class="dog-card-name">${d.name}</div>
            <div class="dog-card-ability">${d.ability}: ${d.desc}</div>
            ${!d.unlocked?`<div class="unlock-cost">${d.costType==='gems'?'💎':'🦴'} ${d.cost||d.req}</div>`:''}`;
        c.onclick=()=>{
            if(d.unlocked){S.dog=d.id;document.getElementById('currentDogName').textContent=d.name;populateDogs();makeDog();}
            else if(d.cost>0){const k=d.costType==='gems'?'totalGems':'totalBones';
                if(S[k]>=d.cost){S[k]-=d.cost;d.unlocked=true;S.dog=d.id;populateDogs();notify('🐕 '+d.name+'!');saveGame();}}
        };
        g.appendChild(c);
    });
}

function populateThemes() {
    const g=document.getElementById('themeGrid');g.innerHTML='';
    THEMES.forEach(t=>{
        const locked=!t.unlocked&&S.bestDist<(t.req||0);
        const c=document.createElement('div');
        c.className=`theme-card ${t.id===S.theme?'selected':''} ${locked?'locked':''}`;
        c.innerHTML=`<div class="theme-emoji">${t.emoji}</div><div class="theme-card-name">${t.name}</div>${locked?`<div class="unlock-cost">Run ${t.req}m</div>`:''}`;
        c.onclick=()=>{if(!locked){S.theme=t.id;populateThemes();setTheme(t);}};
        g.appendChild(c);
    });
}

function saveGame() {
    try{localStorage.setItem('dogrun',JSON.stringify({
        bones:S.totalBones,gems:S.totalGems,best:S.bestDist,dog:S.dog,theme:S.theme,
        dogs:DOGS.map(d=>d.unlocked)}));}catch(e){}
}

function loadGame() {
    try{const d=JSON.parse(localStorage.getItem('dogrun'));
    if(d){S.totalBones=d.bones||0;S.totalGems=d.gems||50;S.bestDist=d.best||0;S.dog=d.dog||0;S.theme=d.theme||0;
    if(d.dogs) d.dogs.forEach((u,i)=>{if(DOGS[i]) DOGS[i].unlocked=u;});}}catch(e){}
    document.getElementById('totalBones').textContent=S.totalBones;
    document.getElementById('totalGems').textContent=S.totalGems;
}

function setupUI() {
    document.getElementById('playBtn').onclick=()=>startGame();
    document.getElementById('dogsBtn').onclick=()=>{populateDogs();showScr('dogSelect');};
    document.getElementById('themesBtn').onclick=()=>{populateThemes();showScr('themeSelect');};
    document.querySelectorAll('.back-btn').forEach(b=>b.onclick=()=>{showScr(b.dataset.target);menuLoop();});
    document.getElementById('pauseBtn').onclick=()=>{
        S.paused=true;document.getElementById('pauseDistance').textContent=S.dist;
        document.getElementById('pauseBones').textContent=S.bones;
        showScr('pauseMenu');document.getElementById('gameHUD').classList.add('active');
    };
    document.getElementById('resumeBtn').onclick=()=>{S.paused=false;document.getElementById('pauseMenu').classList.remove('active');clk.start();};
    document.getElementById('restartBtn').onclick=()=>{document.getElementById('pauseMenu').classList.remove('active');startGame();};
    document.getElementById('quitBtn').onclick=()=>{S.running=false;document.getElementById('pauseMenu').classList.remove('active');showScr('mainMenu');menuLoop();};
    document.getElementById('retryBtn').onclick=startGame;
    document.getElementById('menuBtn').onclick=()=>{
        showScr('mainMenu');document.getElementById('totalBones').textContent=S.totalBones;
        document.getElementById('totalGems').textContent=S.totalGems;menuLoop();
    };
    document.getElementById('tutorialClose').onclick=()=>{
        document.getElementById('tutorial').classList.remove('active');
        S.paused=false; // Unpause when tutorial dismissed
        clk.start();
    };
}

window.addEventListener('load',()=>{loadGame();init();setupInput();setupUI();gameLoop();});
