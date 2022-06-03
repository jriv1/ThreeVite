import './style.css'

import * as THREE from "three";

import { OrbitControls} from "three/examples/jsm/controls/OrbitControls";

//Renderer Camera and scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
const renderer = new THREE.WebGLRenderer({
  canvas : document.querySelector("#bg"),
})


renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);

camera.position.setZ(20);
camera.position.setY(10);

const square = new THREE.Mesh(new THREE.BoxGeometry(4,4,4,4,4,4),new THREE.MeshBasicMaterial({color : 0xffffff, wireframe:true}));
square.position.set(4,8,8);
const light = new THREE.AmbientLight({color: 0xffffff});
const spacebackground = new THREE.TextureLoader().load("pattern4.jpeg");

const gridhelper = new THREE.GridHelper(200,100);

scene.add(light,gridhelper);


scene.add(square);


// scene.background = spacebackground;

const controls = new OrbitControls(camera, renderer.domElement);

function animate(){
   requestAnimationFrame(animate);

   square.rotateX(0.005);
   square.rotateZ(0.004);

   controls.update();

  renderer.render(scene,camera);
}
animate();