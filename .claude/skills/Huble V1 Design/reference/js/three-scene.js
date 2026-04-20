/* =============================================
   HUBLE — Three.js Hero Scene
   Particle field + floating geometries
   ============================================= */

import * as THREE from 'three';

export function initHeroScene() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  // Check WebGL support
  try {
    const testCanvas = document.createElement('canvas');
    const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
    if (!gl) throw new Error('No WebGL');
  } catch (e) {
    showFallback();
    return;
  }

  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const particleCount = isMobile ? 600 : 1800;

  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !isMobile,
    alpha: true
  });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xA8E6CF, 0.8, 50);
  pointLight.position.set(2, 3, 4);
  scene.add(pointLight);

  // Particles
  const particlesGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    // Sphere distribution
    const radius = 3 + Math.random() * 3;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i + 2] = radius * Math.cos(phi);

    velocities[i] = (Math.random() - 0.5) * 0.002;
    velocities[i + 1] = (Math.random() - 0.5) * 0.002;
    velocities[i + 2] = (Math.random() - 0.5) * 0.002;
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const particlesMaterial = new THREE.PointsMaterial({
    color: 0xA8E6CF,
    size: isMobile ? 0.03 : 0.025,
    transparent: true,
    opacity: 0.6,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending
  });

  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);

  // Floating geometries
  const geometries = [];
  const mintColor = new THREE.Color(0xA8E6CF);
  const whiteColor = new THREE.Color(0xffffff);

  // Icosahedron - wireframe mint
  const ico = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.8, 1),
    new THREE.MeshPhongMaterial({
      color: mintColor,
      wireframe: true,
      transparent: true,
      opacity: 0.5
    })
  );
  ico.position.set(-2.5, 1, -1);
  scene.add(ico);
  geometries.push({ mesh: ico, speed: 0.3, offset: 0 });

  // Torus knot - solid mint
  const torus = new THREE.Mesh(
    new THREE.TorusKnotGeometry(0.4, 0.15, 64, 8),
    new THREE.MeshPhongMaterial({
      color: mintColor,
      transparent: true,
      opacity: 0.4,
      shininess: 80
    })
  );
  torus.position.set(2.5, -0.5, -0.5);
  scene.add(torus);
  geometries.push({ mesh: torus, speed: 0.5, offset: Math.PI / 3 });

  // Octahedron - wireframe white
  const octa = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.6),
    new THREE.MeshPhongMaterial({
      color: whiteColor,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    })
  );
  octa.position.set(0.5, 2, -2);
  scene.add(octa);
  geometries.push({ mesh: octa, speed: 0.4, offset: Math.PI / 2 });

  if (!isMobile) {
    // Extra geometries for desktop
    const dodeca = new THREE.Mesh(
      new THREE.DodecahedronGeometry(0.5, 0),
      new THREE.MeshPhongMaterial({
        color: mintColor,
        wireframe: true,
        transparent: true,
        opacity: 0.3
      })
    );
    dodeca.position.set(-1.5, -1.5, -1.5);
    scene.add(dodeca);
    geometries.push({ mesh: dodeca, speed: 0.35, offset: Math.PI });

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.3, 16, 16),
      new THREE.MeshPhongMaterial({
        color: 0x6FCF97,
        transparent: true,
        opacity: 0.25,
        shininess: 100
      })
    );
    sphere.position.set(1.8, 1.5, -1);
    scene.add(sphere);
    geometries.push({ mesh: sphere, speed: 0.45, offset: Math.PI / 4 });
  }

  // Mouse tracking
  const mouse = { x: 0, y: 0 };
  const targetRotation = { x: 0, y: 0 };

  if (!isMobile) {
    window.addEventListener('mousemove', (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });
  }

  // Render control
  let rendering = true;
  let animationId = null;

  // Animation loop
  const clock = new THREE.Clock();

  function animate() {
    if (!rendering) return;
    animationId = requestAnimationFrame(animate);

    const time = clock.getElapsedTime();

    // Update particles - gentle float
    const posArray = particlesGeometry.attributes.position.array;
    for (let i = 0; i < posArray.length; i += 3) {
      posArray[i] += velocities[i];
      posArray[i + 1] += velocities[i + 1];
      posArray[i + 2] += velocities[i + 2];

      // Soft boundary - pull back toward center
      const dist = Math.sqrt(posArray[i] ** 2 + posArray[i + 1] ** 2 + posArray[i + 2] ** 2);
      if (dist > 6) {
        velocities[i] -= posArray[i] * 0.0001;
        velocities[i + 1] -= posArray[i + 1] * 0.0001;
        velocities[i + 2] -= posArray[i + 2] * 0.0001;
      }
    }
    particlesGeometry.attributes.position.needsUpdate = true;

    // Update geometries
    geometries.forEach(({ mesh, speed, offset }) => {
      mesh.rotation.x += 0.002 * speed;
      mesh.rotation.y += 0.003 * speed;
      mesh.rotation.z += 0.001 * speed;
      mesh.position.y += Math.sin(time * speed + offset) * 0.003;
    });

    // Smooth mouse follow
    if (!isMobile) {
      targetRotation.x = mouse.y * 0.15;
      targetRotation.y = mouse.x * 0.15;

      particles.rotation.x += (targetRotation.x - particles.rotation.x) * 0.02;
      particles.rotation.y += (targetRotation.y - particles.rotation.y) * 0.02;

      geometries.forEach(({ mesh }) => {
        mesh.rotation.x += (targetRotation.x * 0.3 - mesh.userData.mouseRx || 0) * 0.01;
        mesh.rotation.y += (targetRotation.y * 0.3 - mesh.userData.mouseRy || 0) * 0.01;
      });
    } else {
      // Auto-rotation for mobile
      particles.rotation.y = time * 0.05;
      particles.rotation.x = Math.sin(time * 0.03) * 0.1;
    }

    renderer.render(scene, camera);
  }

  animate();

  // Resize handling
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }, 250);
  });

  // Pause when hero is out of viewport
  if (typeof ScrollTrigger !== 'undefined') {
    // Will be handled by scroll-animations.js
  }

  // Expose pause/resume for ScrollTrigger
  window.heroScene = {
    pause: () => {
      rendering = false;
      if (animationId) cancelAnimationFrame(animationId);
    },
    resume: () => {
      if (!rendering) {
        rendering = true;
        animate();
      }
    }
  };

  // Handle context loss
  canvas.addEventListener('webglcontextlost', (e) => {
    e.preventDefault();
    rendering = false;
    showFallback();
  });

  // Fade in canvas
  canvas.style.opacity = '0';
  canvas.style.transition = 'opacity 1s ease';
  requestAnimationFrame(() => {
    canvas.style.opacity = '1';
  });
}

function showFallback() {
  const hero = document.querySelector('.hero');
  const canvas = document.getElementById('hero-canvas');
  if (canvas) canvas.style.display = 'none';

  const fallback = document.createElement('div');
  fallback.className = 'hero-fallback';
  fallback.innerHTML = `
    <div class="fallback-shape"></div>
    <div class="fallback-shape"></div>
    <div class="fallback-shape"></div>
  `;
  hero.insertBefore(fallback, hero.firstChild);
}
