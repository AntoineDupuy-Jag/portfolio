// import './styles.css';
// import * as THREE from 'three';

/*---------------------------
|         THREE JS           |
|  https://threejs.org/docs  |
----------------------------*/

// // --- Scene and Camera ---
// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// const renderer = new THREE.WebGLRenderer({
// 	canvas: document.querySelector('#bg'),
// });

// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);
// camera.position.setZ(30);

// renderer.render(scene, camera);

// // --- Geometry ---

// // const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
// // const material = new THREE.MeshBasicMaterial({ color: 'orange', wireframe: true });
// // const torus = new THREE.Mesh(geometry, material);

// const cardGeometry = new THREE.BoxGeometry(80, 35, 1);
// const cardMaterial = new THREE.MeshBasicMaterial({ color: 'orange', wireframe: true });
// const card = new THREE.Mesh(cardGeometry, cardMaterial);

// scene.add(card);
// // card.position.set(1, 1, 1);

// // --- Animation ---

// function animate() {
// 	// requestAnimationFrame(animate);

// 	// card.rotation.x += 0.01;
// 	// card.rotation.y += 0.005;
// 	// card.rotation.z += 0.01;

// 	// card.position.x = 0;
// 	// card.rotation.y = 0;
// 	// card.rotation.z = 0;

// 	renderer.render(scene, camera);
// }

// animate();
