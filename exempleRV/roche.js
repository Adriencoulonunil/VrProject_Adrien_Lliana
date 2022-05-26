console.clear();
// hauteur et largeur de la fenêtre
let wiw = window.innerWidth;
let wih = window.innerHeight;

// créer une scène
let scene = new THREE.Scene();
// créer une caméra
let camera = new THREE.PerspectiveCamera(75, wiw / wih);
let moteur_de_rendu = new THREE.WebGLRenderer({ antialias: true });
moteur_de_rendu.setSize(wiw, wih);
document.body.appendChild(moteur_de_rendu.domElement);

let creer_cube = () => {
    let geometrie = new THREE.TorusGeometry(0.5, 0.4, 15, 100);
    let material = new THREE.MeshNormalMaterial();
    let cube = new THREE.Mesh(geometrie, material);
    cube.vitesse = THREE.Math.randFloat(0.05, 0.1);
    return cube;
}

for (let i = 0; i < 150; i++) {
    let cube = creer_cube();
    scene.add(cube);
    cube.position.z = THREE.Math.randInt(-70, -10);;
    cube.position.x = THREE.Math.randInt(-20, 20);
    cube.position.y = THREE.Math.randInt(-10, 10);
}

let animer = () => {
    scene.children.forEach(el => {
        el.rotation.x += el.vitesse;
        el.position.z += el.vitesse;
    });
    moteur_de_rendu.render(scene, camera);
    requestAnimationFrame(animer);
}

animer();
