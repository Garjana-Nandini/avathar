
import * as THREE from "three";
import{OrbitControls}from "three/addons/controls/OrbitControls.js";

const loadingManager= new THREE.LoadingManager();

loadingManager.onStart=()=>{
	console.log('loading Started')
}

loadingManager.onLoad=()=>{
	console.log('loading finished')
}

loadingManager.onProgress=()=>{
	console.log('loading progressing')
}

loadingManager.onError=()=>{
	console.log('loading error')
}

const textureLoader=new THREE.TextureLoader(loadingManager);


// =================================== adding text==============( diff types of textures)



let dogmap=textureLoader.load("girl with boy.jpg");

// ================= new
let dogmap2=textureLoader.load("bird1.jpg");
//==
let dogmap3=textureLoader.load("bird2.jpg");
let dogmap4=textureLoader.load("main.jpg");
let dogmap5=textureLoader.load("animal1.jpg");
let dogmap6=textureLoader.load("animal2.jpg");
let dogmap7=textureLoader.load("animal3.jpg");
let dogmap8=textureLoader.load("animal4.jpg");
let dogmap9=textureLoader.load("bird2.jpg");
let dogmap10=textureLoader.load("child1.jpg");
let dogmap11=textureLoader.load("fish1.jpg");
let dogmap12=textureLoader.load("fish2.jpg");
let dogmap13=textureLoader.load("girl1.jpg");
let dogmap14=textureLoader.load("girl2.jpg");
let dogmap15=textureLoader.load("girl3.jpg");
let dogmap16=textureLoader.load("plant1.jpg");
let dogmap17=textureLoader.load("plant2.jpg");
let dogmap18=textureLoader.load("war.jpg");
let dogmap19=textureLoader.load("water tree1.jpg");
let dogmap20=textureLoader.load("water tree2.jpg");
let dogmap21=textureLoader.load("world.jpg");

// dogmap.colorSpace= THREE.SRGBColorSpace;

// let matcapTexture = textureLoader.load('matcap.jpg');

let scene = new THREE.Scene();
// adding evn
let evnMap=textureLoader.load('back3.jpg');
    evnMap.mapping=THREE.EquirectangularReflectionMapping;
    scene.background=evnMap;
    scene.environment=evnMap;


    let baseTexture= textureLoader.load('');

// canvas
    let canvas = document.querySelector('.webgl');

// 
// Sizes 
//
let sizes = {
	height: window.innerHeight,
	width: window.innerWidth
}

// geometry
const planeGeometry= new THREE.PlaneGeometry(2,2);
const sphereGeometry=new THREE.SphereGeometry(0.5,32,32);
const torusGeometry=new THREE.TorusGeometry(0.35,0.15,64,64);


///============= NEW=======
const sphereGeometry2=new THREE.BoxGeometry(1,1);
const sphereGeometry3=new THREE.SphereGeometry(0.5,32,32);
const sphereGeometry4=new THREE.ConeGeometry(0.1,0.5,0.8,10.6,0.2,0.2,1);
const sphereGeometry5=new THREE.BoxGeometry(1,1);
const sphereGeometry6=new THREE.SphereGeometry(0.5,32,32);
const sphereGeometry7=new THREE.PlaneGeometry(3.2,3.2);
const sphereGeometry8=new THREE.ConeGeometry(0.1,0.5,0.8,10.6,0.2,0.2,1);
const sphereGeometry9=new THREE.BoxGeometry(1,1);
const sphereGeometry10=new THREE.SphereGeometry(0.5,32,32);
const sphereGeometry11=new THREE.PlaneGeometry(3.2,3.2);
const sphereGeometry12=new THREE.SphereGeometry(0.35,0.15,64,64);
const sphereGeometry13=new THREE.SphereGeometry(0.5,32,32);
const sphereGeometry14=new THREE.ConeGeometry(0.1,0.5,0.8,10.6,0.2,0.2,1);
const sphereGeometry15=new THREE.PlaneGeometry(3,3,9);
const sphereGeometry16=new THREE.BoxGeometry(1,1);
const sphereGeometry17=new THREE.SphereGeometry(0.5,32,32);
const sphereGeometry18=new THREE.PlaneGeometry(1,1,1);
const sphereGeometry19=new THREE.ConeGeometry(0.1,0.5,0.8,10.6,0.2,0.2,1);
const sphereGeometry20=new THREE.SphereGeometry(0.5,32,32);
const sphereGeometry21=new THREE.BoxGeometry(1,1);









// material

const material = new THREE.MeshStandardMaterial();
material.map=dogmap;


//================ new========
const material1 = new THREE.MeshStandardMaterial();
material1.map=dogmap2;
//===

const material3 = new THREE.MeshStandardMaterial();
material3.map=dogmap3;

const material4 = new THREE.MeshStandardMaterial();
material4.map=dogmap4;

const material5 = new THREE.MeshStandardMaterial();
material5.map=dogmap5;

const material6 = new THREE.MeshStandardMaterial();
material6.map=dogmap6;

const material7= new THREE.MeshStandardMaterial();
material7.map=dogmap7;

const material8 = new THREE.MeshStandardMaterial();
material8.map=dogmap8;

const material9 = new THREE.MeshStandardMaterial();
material9.map=dogmap9;

const material10 = new THREE.MeshStandardMaterial();
material10.map=dogmap10;

const material11 = new THREE.MeshStandardMaterial();
material11.map=dogmap11;

const material12 = new THREE.MeshStandardMaterial();
material12.map=dogmap12;

const material13 = new THREE.MeshStandardMaterial();
material13.map=dogmap13;

const material14 = new THREE.MeshStandardMaterial();
material14.map=dogmap14;

const material15 = new THREE.MeshStandardMaterial();
material15.map=dogmap15;

const material16 = new THREE.MeshStandardMaterial();
material16.map=dogmap16;

const material17 = new THREE.MeshStandardMaterial();
material17.map=dogmap17;

const material18 = new THREE.MeshStandardMaterial();
material18.map=dogmap18;

const material19 = new THREE.MeshStandardMaterial();
material19.map=dogmap19;

const material20 = new THREE.MeshStandardMaterial();
material20.map=dogmap20;

const material21 = new THREE.MeshStandardMaterial();
material21.map=dogmap21;





// material.clearcoat=1;
// material.clearcoatRoughness=0;

// material.opacity=0.5;
// material.transparent=1;



//basemap
//  material.map=baseTexture;

 // ambient occlusion
//  material.aoMap=aoTexture;
//  material.aoMapIntensity=1;

// material.metalness=1;
// material.roughness=0;


material.side=THREE.DoubleSide;

//===============NEW===========
material1.side=THREE.DoubleSide;

// material.shininess = 100;
// material.specular = new THREE.Color('white');
// material.matcap = matcapTexture;

material.transparent = true;
material.opacity = 1;

material.side = THREE.DoubleSide;

//=============== NEW
material1.transparent = true;
material1.opacity = 1;
material1.side = THREE.DoubleSide;
//====

material3.transparent = true;
material3.opacity = 1;
material3.side = THREE.DoubleSide;

material4.transparent = true;
material4.opacity = 1;
material4.side = THREE.DoubleSide;

material5.transparent = true;    
material5.opacity = 1;
material5.side = THREE.DoubleSide;

material6.transparent = true;
material6.opacity = 1;
material6.side = THREE.DoubleSide;

material7.transparent = true;
material7.opacity = 1;
material7.side = THREE.DoubleSide;

material8.transparent = true;
material8.opacity = 1;
material8.side = THREE.DoubleSide;

material9.transparent = true;
material9.opacity = 1;
material9.side = THREE.DoubleSide;

material10.transparent = true;
material10.opacity = 1;
material10.side = THREE.DoubleSide;

material11.transparent = true;
material11.opacity = 1;
material11.side = THREE.DoubleSide;

material12.transparent = true;
material12.opacity = 1;
material12.side = THREE.DoubleSide;

material13.transparent = true;
material13.opacity = 1;
material13.side = THREE.DoubleSide;

material14.transparent = true;
material14.opacity = 1;
material14.side = THREE.DoubleSide;

material15.transparent = true;
material15.opacity = 1;
material15.side = THREE.DoubleSide;

material16.transparent = true;
material16.opacity = 1;
material16.side = THREE.DoubleSide;

material17.transparent = true;
material17.opacity = 1;
material17.side = THREE.DoubleSide;

material18.transparent = true;
material18.opacity = 1;
material18.side = THREE.DoubleSide;

material19.transparent = true;
material19.opacity = 1;
material19.side = THREE.DoubleSide;

material20.transparent = true;
material20.opacity = 1;
material20.side = THREE.DoubleSide;

material21.transparent = true;
material21.opacity = 1;
material21.side = THREE.DoubleSide;


let aspectRatio=sizes.width/sizes.height;

// Mesh
const planeMesh = new THREE.Mesh(planeGeometry, material);
const sphereMesh = new THREE.Mesh(sphereGeometry, material);
sphereMesh.position.x = -1.1;

const torusMesh = new THREE.Mesh(torusGeometry, material);
torusMesh.position.z= 2.1;

//================NEW
const sphereMesh1 = new THREE.Mesh(sphereGeometry2, material1);
sphereMesh1.position.x=2.3;

//===
const sphereMesh3 = new THREE.Mesh(sphereGeometry3, material3);
sphereMesh3.position.z=3.9;

const sphereMesh4 = new THREE.Mesh(sphereGeometry4, material4);
sphereMesh4.position.z=2.3;

const sphereMesh5 = new THREE.Mesh(sphereGeometry5, material5);
sphereMesh5.position.y=-1.3;

const sphereMesh6 = new THREE.Mesh(sphereGeometry6, material6);
sphereMesh6.position.x=3.7;

const sphereMesh7 = new THREE.Mesh(sphereGeometry7, material7);
sphereMesh7.position.y=9.2;

const sphereMesh8 = new THREE.Mesh(sphereGeometry8, material8);
sphereMesh8.position.x=4.9;

const sphereMesh9 = new THREE.Mesh(sphereGeometry9, material9);
sphereMesh9.position.z=6.9;

const sphereMesh10 = new THREE.Mesh(sphereGeometry10, material10);
sphereMesh10.position.x=-3.4;

const sphereMesh11 = new THREE.Mesh(sphereGeometry11, material11);
sphereMesh11.position.y=5.2;

const sphereMesh12 = new THREE.Mesh(sphereGeometry12, material12);
sphereMesh12.position.x=-6.3;

const sphereMesh13 = new THREE.Mesh(sphereGeometry13, material13);
sphereMesh13.position.z=-3.6;

const sphereMesh14 = new THREE.Mesh(sphereGeometry14, material14);
sphereMesh14.position.x=8.8;

const sphereMesh15 = new THREE.Mesh(sphereGeometry15, material15);
sphereMesh15.position.z=-8.1;

const sphereMesh16 = new THREE.Mesh(sphereGeometry16, material16);
sphereMesh16.position.y=-4.4;

const sphereMesh17 = new THREE.Mesh(sphereGeometry17, material17);
sphereMesh17.position.z=7.7;

const sphereMesh18 = new THREE.Mesh(sphereGeometry18, material18);
sphereMesh18.position.x=8.3;

const sphereMesh19 = new THREE.Mesh(sphereGeometry19, material19);
sphereMesh19.position.x=2.9;

const sphereMesh20 = new THREE.Mesh(sphereGeometry20, material20);
sphereMesh20.position.x=9.1;

const sphereMesh21 = new THREE.Mesh(sphereGeometry21, material21);
sphereMesh21.position.y=1.5;



scene.add(planeMesh, sphereMesh, torusMesh,sphereMesh1,sphereMesh3,sphereMesh4,sphereMesh5,sphereMesh6,sphereMesh7,sphereMesh8,sphereMesh9,
    sphereMesh10,sphereMesh11,sphereMesh12,sphereMesh13,sphereMesh14,sphereMesh15,
    sphereMesh16,sphereMesh17,sphereMesh18,sphereMesh19,sphereMesh20,sphereMesh21);

// Camera
//

let camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.01, 1000);
// camera= new THREE.orthographicCamera(
// 	-5*aspect,
// 	5*aspect,
// 	5,
// 	-5,
// 	0.1,100

// )
camera.position.z = 15;
camera.position.y = 5;
camera.position.x = 5;
camera.updateProjectionMatrix();
scene.add(camera);

camera.position.z = 7;

scene.add(camera);
scene.add(camera);


//
// Renderer
//
let renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera);
// orbit control
let controls=new OrbitControls(camera,canvas);
controls.enableDamping=true;
controls.dampingFactor=0.01;

// resizing
window.addEventListener('resize',()=>{
    console.log('window was resized',window.innerHeight,window.innerWidth);
    sizes.height=window.innerHeight;
    sizes.width=window.innerWidth;
    renderer.setSize(sizes.width,sizes.height)
    aspectRatio =sizes.width/sizes.height;
    camera.aspect=aspectRatio;
    camera.updateProjectionMatrix();

})

// doble clicking
window.addEventListener('dbclick',()=>{

if(!document.fullscreenElement){
    canvas.requestFullscreen();

}
else{
    document.exitFullscreen();
}
})


let clock= new THREE.Clock();
let animation = () => {
    let deltaTime = clock.getElapsedTime();

    planeMesh.rotation.x+=0.003;
    torusMesh.rotation.x+=0.003;
    sphereMesh.rotation.x+=0.003;

    planeMesh.rotation.y+=0.003;
    torusMesh.rotation.y+=0.003;
    sphereMesh.rotation.y+=0.003;

    planeMesh.rotation.z+=0.003;
    torusMesh.rotation.z+=0.003;
    sphereMesh.rotation.z+=0.003;

    //=============== new
    sphereMesh1.rotation.x+=0.001;
    sphereMesh1.rotation.y+=0.001;
    sphereMesh1.rotation.z+=0.0001;

    //===
    sphereMesh3.rotation.x+=0.001;
    sphereMesh3.rotation.y+=0.001;
    sphereMesh3.rotation.z+=0.0001;

    sphereMesh4.rotation.x+=0.001;
    sphereMesh4.rotation.y+=0.001;
    sphereMesh4.rotation.z+=0.0001;

    sphereMesh5.rotation.x+=0.001;
    sphereMesh5.rotation.y+=0.001;
    sphereMesh5.rotation.z+=0.0001;

    sphereMesh6.rotation.x+=0.001;
    sphereMesh6.rotation.y+=0.001;
    sphereMesh6.rotation.z+=0.0001;

    sphereMesh7.rotation.x+=0.001;
    sphereMesh7.rotation.y+=0.001;
    sphereMesh7.rotation.z+=0.0001;

    sphereMesh8.rotation.x+=0.001;
    sphereMesh8.rotation.y+=0.001;
    sphereMesh8.rotation.z+=0.0001;

    sphereMesh9.rotation.x+=0.001;
    sphereMesh9.rotation.y+=0.001;
    sphereMesh9.rotation.z+=0.0001;

    sphereMesh10.rotation.x+=0.001;
    sphereMesh10.rotation.y+=0.001;
    sphereMesh10.rotation.z+=0.0001;

    sphereMesh11.rotation.x+=0.001;
    sphereMesh11.rotation.y+=0.001;
    sphereMesh11.rotation.z+=0.0001;

    sphereMesh12.rotation.x+=0.001;
    sphereMesh12.rotation.y+=0.001;
    sphereMesh12.rotation.z+=0.0001;

    sphereMesh13.rotation.x+=0.001;
    sphereMesh13.rotation.y+=0.001;
    sphereMesh13.rotation.z+=0.0001;

    sphereMesh14.rotation.x+=0.001;
    sphereMesh14.rotation.y+=0.001;
    sphereMesh14.rotation.z+=0.0001;

    sphereMesh15.rotation.x+=0.001;
    sphereMesh15.rotation.y+=0.001;
    sphereMesh15.rotation.z+=0.0001;

    sphereMesh16.rotation.x+=0.001;
    sphereMesh16.rotation.y+=0.001;
    sphereMesh16.rotation.z+=0.0001;

    sphereMesh17.rotation.x+=0.001;
    sphereMesh17.rotation.y+=0.001;
    sphereMesh17.rotation.z+=0.0001;

    sphereMesh18.rotation.x+=0.001;
    sphereMesh18.rotation.y+=0.001;
    sphereMesh18.rotation.z+=0.0001;

    sphereMesh19.rotation.x+=0.001;
    sphereMesh19.rotation.y+=0.001;
    sphereMesh19.rotation.z+=0.0001;

    sphereMesh20.rotation.x+=0.001;
    sphereMesh20.rotation.y+=0.001;
    sphereMesh20.rotation.z+=0.0001;

    sphereMesh21.rotation.x+=0.001;
    sphereMesh21.rotation.y+=0.001;
    sphereMesh21.rotation.z+=0.0001;

    controls.update();
    
    
    renderer.render(scene, camera);
    requestAnimationFrame(animation);
}

animation();
