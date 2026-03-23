import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export class Orion3DModel {
    constructor(parent) {
        this.parent = parent;
        this.renderer = null;
        this.animationId = null;
    }

    getHTML() {
        return `
            <div style="margin-top: 1rem;">
                <h6 style="color: #6c757d;">3D модель Астронавта</h6>
                <div id="orion-3d-container" style="width: 540px; height: 360px; background: #0a0a1a; border-radius: 8px; overflow: hidden; position: relative;">
                    <span id="orion-3d-status" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #aaa; font-size: 14px;">Загрузка модели...</span>
                </div>
            </div>
        `;
    }

    init() {
        const container = document.getElementById('orion-3d-container');
        const width = container.clientWidth;
        const height = container.clientHeight;

        // Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0a1a);

        // Camera
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.set(0, 1, 4);

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);
        this.renderer = renderer;

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
        dirLight.position.set(5, 10, 7);
        scene.add(dirLight);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;

        // Load model
        const loader = new GLTFLoader();
        loader.load(
            './assets/orion.glb',
            (gltf) => {
                const model = gltf.scene;

                // Center the model
                const box = new THREE.Box3().setFromObject(model);
                const center = box.getCenter(new THREE.Vector3());
                model.position.sub(center);

                // Scale to fit
                const size = box.getSize(new THREE.Vector3()).length();
                const scale = 3 / size;
                model.scale.setScalar(scale);

                scene.add(model);

                const statusEl = document.getElementById('orion-3d-status');
                if (statusEl) statusEl.remove();
            },
            undefined,
            (error) => {
                const statusEl = document.getElementById('orion-3d-status');
                if (statusEl) statusEl.textContent = 'Добавьте файл orion.glb в папку assets/';
            }
        );

        // Animation loop
        const animate = () => {
            this.animationId = requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();
    }

    render() {
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);
        this.init();
    }

    destroy() {
        if (this.animationId) cancelAnimationFrame(this.animationId);
        if (this.renderer) this.renderer.dispose();
    }
}
